import nodemailer from 'nodemailer'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({message:'Method not allowed'})

  try{
    const { name, email, phone, message } = req.body || {}
    const safeName = typeof name === 'string' ? name.trim() : ''
    const safeEmail = typeof email === 'string' ? email.trim() : ''
    const safePhone = typeof phone === 'string' ? phone.trim() : ''

    if(!safeName || !safeEmail || !safePhone) return res.status(400).json({message:'Missing required fields'})
    const safeMessage = typeof message === 'string' && message.trim()
      ? message.trim().replace(/\n/g, '<br>')
      : 'No message provided.'

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    // Send email to support
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: safeEmail,
      subject: 'We received your message',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${safeName},</p>
        <p>We received your message and will get back to you soon.</p>
        <p>Best regards,<br>Smart Scholar Team</p>
      `
    })

    console.log('Contact form submission sent:', { name: safeName, email: safeEmail, phone: safePhone })
    return res.status(200).json({ message: 'Email sent successfully' })
  }catch(err){
    console.error('Contact handler error', err)
    return res.status(500).json({message:'Server error'})
  }
}
