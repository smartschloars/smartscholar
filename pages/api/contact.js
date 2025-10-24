import nodemailer from 'nodemailer'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({message:'Method not allowed'})

  try{
    const { name, email, phone, message } = req.body || {}
    if(!name || !email || !message) return res.status(400).json({message:'Missing required fields'})

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
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you soon.</p>
        <p>Best regards,<br>Smart Scholar Team</p>
      `
    })

    console.log('Contact form submission sent:', { name, email, phone })
    return res.status(200).json({ message: 'Email sent successfully' })
  }catch(err){
    console.error('Contact handler error', err)
    return res.status(500).json({message:'Server error'})
  }
}
