export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({message:'Method not allowed'})

  try{
    const { name, email, phone, message } = req.body || {}
    if(!name || !email || !message) return res.status(400).json({message:'Missing required fields'})

    // Basic input sanitation could go here. For production, add CAPTCHA and rate limiting.

    // TODO: Send email via SMTP provider (SendGrid, Mailgun) or post to CRM/webhook.
    // Example pseudo-code:
    // await sendEmail({ to: SUPPORT_EMAIL, subject: `Contact: ${name}`, text: `${message}\n${email}\n${phone}` })

    console.log('Contact form submission:', { name, email, phone, message })
    return res.status(200).json({ message: 'Received' })
  }catch(err){
    console.error('Contact handler error', err)
    return res.status(500).json({message:'Server error'})
  }
}
