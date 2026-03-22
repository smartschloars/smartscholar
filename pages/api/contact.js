import nodemailer from 'nodemailer'

const BRAND_NAME = 'Smart Scholar'
const SUPPORT_PHONE = '+91 93915 72075'
const SUPPORT_PHONE_HREF = 'tel:+919391572075'
const SUPPORT_WHATSAPP_HREF = 'https://wa.me/919391572075'
const OFFICE_HOURS = 'Weekdays: 9:30 AM - 7:30 PM IST | Saturday: 10 AM - 4 PM'
const OFFICE_ADDRESS = 'Flat No. 605, 5th Line, beside Zudio, Nalanda Nagar, Brindavan Gardens, Guntur, Andhra Pradesh 522006'

function escapeHtml(value = ''){
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function getMailConfig(){
  const contactEmail = process.env.CONTACT_EMAIL?.trim()
  const smtpHost = process.env.SMTP_HOST?.trim()
  const smtpUser = process.env.SMTP_USER?.trim()
  const smtpPassword = process.env.SMTP_PASSWORD?.trim()
  const smtpPort = Number.parseInt(process.env.SMTP_PORT || '', 10)
  const smtpSecureValue = process.env.SMTP_SECURE?.trim().toLowerCase()
  const mailFrom = process.env.MAIL_FROM?.trim()
  const mailFromName = process.env.MAIL_FROM_NAME?.trim() || BRAND_NAME

  const useCustomSmtp = Boolean(
    smtpHost ||
    smtpUser ||
    smtpPassword ||
    process.env.SMTP_PORT ||
    process.env.SMTP_SECURE ||
    process.env.MAIL_FROM
  )

  if(!contactEmail){
    const error = new Error('Email configuration is incomplete')
    error.code = 'EMAIL_CONFIG_MISSING'
    throw error
  }

  if(useCustomSmtp){
    if(!smtpHost || !smtpUser || !smtpPassword){
      const error = new Error('SMTP configuration is incomplete')
      error.code = 'EMAIL_CONFIG_MISSING'
      throw error
    }

    const secure = smtpSecureValue
      ? ['true', '1', 'yes', 'on'].includes(smtpSecureValue)
      : (Number.isFinite(smtpPort) ? smtpPort === 465 : true)

    return {
      contactEmail,
      fromEmail: mailFrom || smtpUser,
      fromName: mailFromName,
      transport: {
        host: smtpHost,
        port: Number.isFinite(smtpPort) ? smtpPort : (secure ? 465 : 587),
        secure,
        auth: {
          user: smtpUser,
          pass: smtpPassword
        }
      }
    }
  }

  const gmailUser = process.env.GMAIL_USER?.trim()
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '')

  if(!gmailUser || !gmailAppPassword){
    const error = new Error('Email configuration is incomplete')
    error.code = 'EMAIL_CONFIG_MISSING'
    throw error
  }

  return {
    contactEmail,
    fromEmail: gmailUser,
    fromName: mailFromName,
    transport: {
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    }
  }
}

function formatFromAddress(name, email){
  return name ? `${name} <${email}>` : email
}

function normalizePhoneHref(value = ''){
  const normalized = value.replace(/[^\d+]/g, '')
  return normalized ? `tel:${normalized}` : SUPPORT_PHONE_HREF
}

function createActionButton({ href, label, variant = 'primary' }){
  const styles = variant === 'secondary'
    ? 'background-color:#eef2ff;border:1px solid #c7d2fe;color:#3056d3;'
    : 'background-color:#3056d3;border:1px solid #3056d3;color:#ffffff;'

  return `
    <a
      href="${href}"
      style="display:inline-block;padding:12px 18px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.01em;${styles}"
    >
      ${label}
    </a>
  `
}

function createDetailRow(label, value){
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;width:120px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-size:15px;line-height:1.65;color:#0f172a;">
        ${value}
      </td>
    </tr>
  `
}

function createTimelineStep(index, title, description){
  return `
    <tr>
      <td style="padding:0 0 14px 0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:44px;vertical-align:top;">
              <div style="height:32px;width:32px;border-radius:999px;background-color:#e0e7ff;color:#3056d3;font-size:13px;font-weight:700;line-height:32px;text-align:center;">
                ${index}
              </div>
            </td>
            <td style="vertical-align:top;">
              <div style="font-size:16px;font-weight:700;color:#0f172a;margin-bottom:4px;">${title}</div>
              <div style="font-size:14px;line-height:1.7;color:#475569;">${description}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `
}

function createEmailFrame({ preheader, eyebrow, title, intro, body, footerNote, contactEmail }){
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(title)}</title>
      </head>
      <body style="margin:0;padding:0;background-color:#eef2ff;font-family:Manrope,Arial,'Helvetica Neue',Helvetica,sans-serif;color:#0f172a;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
          ${escapeHtml(preheader)}
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background:linear-gradient(180deg,#eef2ff 0%,#f8fafc 100%);">
          <tr>
            <td align="center" style="padding:28px 14px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;border-collapse:separate;">
                <tr>
                  <td style="padding:0 0 16px 4px;font-size:12px;font-weight:800;letter-spacing:0.24em;text-transform:uppercase;color:#3056d3;">
                    ${BRAND_NAME}
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#ffffff;border:1px solid #dbe4ff;border-radius:30px;padding:18px;box-shadow:0 30px 80px -45px rgba(15,23,42,0.35);">
                    <div style="background:linear-gradient(135deg,#3056d3 0%,#4f46e5 58%,#7c3aed 100%);background-color:#3056d3;border-radius:24px;padding:28px 24px;color:#ffffff;">
                      <div style="display:inline-block;padding:7px 12px;border-radius:999px;background-color:rgba(255,255,255,0.16);border:1px solid rgba(255,255,255,0.22);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
                        ${eyebrow}
                      </div>
                      <div style="font-size:32px;line-height:1.15;font-weight:800;margin:18px 0 10px;">
                        ${title}
                      </div>
                      <div style="font-size:15px;line-height:1.75;color:rgba(255,255,255,0.9);max-width:540px;">
                        ${intro}
                      </div>
                    </div>

                    <div style="padding:28px 10px 12px;">
                      ${body}
                    </div>

                    <div style="margin:10px 10px 0;padding:20px 22px;border-radius:20px;background-color:#f8fafc;border:1px solid #e2e8f0;">
                      <div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:8px;">Need a faster response?</div>
                      <div style="font-size:14px;line-height:1.7;color:#475569;">
                        Call <a href="${SUPPORT_PHONE_HREF}" style="color:#3056d3;text-decoration:none;font-weight:700;">${SUPPORT_PHONE}</a>,
                        email <a href="mailto:${contactEmail}" style="color:#3056d3;text-decoration:none;font-weight:700;">${contactEmail}</a>,
                        or message us on
                        <a href="${SUPPORT_WHATSAPP_HREF}" style="color:#3056d3;text-decoration:none;font-weight:700;">WhatsApp</a>.
                      </div>
                      <div style="font-size:13px;line-height:1.7;color:#64748b;margin-top:8px;">
                        ${footerNote}<br />
                        ${OFFICE_ADDRESS}
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

function createSupportEmail({ leadName, safeName, safeEmail, safePhone, safeMessageHtml, contactEmail }){
  const replyHref = `mailto:${encodeURIComponent(safeEmail)}?subject=${encodeURIComponent('Re: your Smart Scholar enquiry')}`
  const callHref = normalizePhoneHref(safePhone)

  return createEmailFrame({
    preheader: `New enquiry from ${leadName}.`,
    eyebrow: 'New enquiry',
    title: 'A new student lead just came in',
    intro: 'Someone submitted the contact form. Their details are below so your team can respond quickly with the right next step.',
    contactEmail,
    footerNote: 'Internal lead alert from the Smart Scholar website.',
    body: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding-bottom:18px;">
            <div style="font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;margin-bottom:10px;">Lead snapshot</div>
            <div style="padding:4px 20px;border:1px solid #e2e8f0;border-radius:20px;background-color:#ffffff;box-shadow:inset 0 1px 0 rgba(255,255,255,0.5);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
                ${createDetailRow('Name', safeName)}
                ${createDetailRow('Email', safeEmail)}
                ${createDetailRow('Phone', safePhone)}
                ${createDetailRow('Message', safeMessageHtml)}
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding-top:6px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:10px;">${createActionButton({ href: replyHref, label: 'Reply by email' })}</td>
                <td>${createActionButton({ href: callHref, label: 'Call lead', variant: 'secondary' })}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `
  })
}

function createSupportEmailText({ safeName, safeEmail, safePhone, safeMessage }){
  return [
    'New Smart Scholar enquiry',
    '',
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone}`,
    `Message: ${safeMessage}`,
    '',
    `Reply: ${safeEmail}`,
    `Call: ${safePhone || SUPPORT_PHONE}`
  ].join('\n')
}

function createConfirmationEmail({ safeName, safeEmail, safePhone, safeMessageHtml, contactEmail }){
  return createEmailFrame({
    preheader: 'We received your message and will get back to you shortly.',
    eyebrow: 'Message received',
    title: 'Your study abroad plan is now in motion',
    intro: `Hi ${safeName}, thank you for contacting ${BRAND_NAME}. We have received your enquiry and our team will review it shortly.`,
    contactEmail,
    footerNote: `Typical response time: under one business day. ${OFFICE_HOURS}`,
    body: `
      <div style="font-size:16px;line-height:1.8;color:#334155;padding:0 0 18px;">
        We keep this process personal and practical. Expect clear advice, realistic next steps, and support tailored to your course, country, and timeline.
      </div>

      <div style="padding:22px;border-radius:22px;background:linear-gradient(180deg,#f8fbff 0%,#eef2ff 100%);background-color:#f8fafc;border:1px solid #dbe4ff;margin-bottom:18px;">
        <div style="font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;margin-bottom:14px;">What happens next</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
          ${createTimelineStep('1', 'We review your profile', 'A counsellor checks your submitted details, preferred direction, and any urgency in your timeline.')}
          ${createTimelineStep('2', 'We prepare the right next move', 'We decide whether your case needs a callback, shortlist discussion, or document guidance first.')}
          ${createTimelineStep('3', 'You hear back quickly', 'We typically respond in under one business day with a clear next step instead of a generic template reply.')}
        </table>
      </div>

      <div style="padding:4px 20px;border:1px solid #e2e8f0;border-radius:20px;background-color:#ffffff;margin-bottom:18px;">
        <div style="font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;padding:18px 0 4px;">Your enquiry summary</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
          ${createDetailRow('Name', safeName)}
          ${createDetailRow('Email', safeEmail)}
          ${createDetailRow('Phone', safePhone)}
          ${createDetailRow('Message', safeMessageHtml)}
        </table>
      </div>

      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
        <tr>
          <td style="padding-right:10px;">${createActionButton({ href: SUPPORT_WHATSAPP_HREF, label: 'Chat on WhatsApp' })}</td>
          <td>${createActionButton({ href: SUPPORT_PHONE_HREF, label: 'Call us directly', variant: 'secondary' })}</td>
        </tr>
      </table>
    `
  })
}

function createConfirmationEmailText({ safeName, safeEmail, safePhone, safeMessage, contactEmail }){
  return [
    `Hi ${safeName},`,
    '',
    `Thank you for contacting ${BRAND_NAME}. We received your enquiry and will get back to you shortly.`,
    '',
    'What happens next:',
    '1. We review your profile and timeline.',
    '2. We prepare the most relevant next step.',
    '3. We reply in under one business day in most cases.',
    '',
    'Your enquiry summary:',
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone}`,
    `Message: ${safeMessage}`,
    '',
    `Phone: ${SUPPORT_PHONE}`,
    `Email: ${contactEmail}`,
    `WhatsApp: ${SUPPORT_WHATSAPP_HREF}`,
    '',
    `${OFFICE_HOURS}`,
    OFFICE_ADDRESS
  ].join('\n')
}

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({message:'Method not allowed'})

  try{
    const { name, email, phone, message } = req.body || {}
    const safeName = typeof name === 'string' ? name.trim() : ''
    const safeEmail = typeof email === 'string' ? email.trim() : ''
    const safePhone = typeof phone === 'string' ? phone.trim() : ''

    if(!safeName || !safeEmail || !safePhone) return res.status(400).json({message:'Missing required fields'})
    const safeMessage = typeof message === 'string' && message.trim()
      ? message.trim()
      : 'No message provided.'
    const { contactEmail, fromEmail, fromName, transport } = getMailConfig()
    const fromAddress = formatFromAddress(fromName, fromEmail)
    const safeNameHtml = escapeHtml(safeName)
    const safeEmailHtml = escapeHtml(safeEmail)
    const safePhoneHtml = escapeHtml(safePhone)
    const safeMessageHtml = escapeHtml(safeMessage).replace(/\n/g, '<br>')
    const supportEmailHtml = createSupportEmail({
      leadName: safeName,
      safeName: safeNameHtml,
      safeEmail: safeEmailHtml,
      safePhone: safePhoneHtml,
      safeMessageHtml,
      contactEmail
    })
    const supportEmailText = createSupportEmailText({
      safeName,
      safeEmail,
      safePhone,
      safeMessage
    })
    const confirmationEmailHtml = createConfirmationEmail({
      safeName: safeNameHtml,
      safeEmail: safeEmailHtml,
      safePhone: safePhoneHtml,
      safeMessageHtml,
      contactEmail
    })
    const confirmationEmailText = createConfirmationEmailText({
      safeName,
      safeEmail,
      safePhone,
      safeMessage,
      contactEmail
    })

    const transporter = nodemailer.createTransport(transport)

    await transporter.sendMail({
      from: fromAddress,
      to: contactEmail,
      replyTo: safeEmail,
      subject: `New Contact Form Submission from ${safeName}`,
      text: supportEmailText,
      html: supportEmailHtml
    })

    await transporter.sendMail({
      from: fromAddress,
      to: safeEmail,
      subject: 'We received your message',
      text: confirmationEmailText,
      html: confirmationEmailHtml
    })

    console.log('Contact form submission sent:', { name: safeName, email: safeEmail, phone: safePhone })
    return res.status(200).json({ message: 'Email sent successfully' })
  }catch(err){
    console.error('Contact handler error', err)
    if(err?.code === 'EMAIL_CONFIG_MISSING'){
      return res.status(503).json({ message: 'Email service is not configured yet.' })
    }

    if(err?.code === 'EAUTH'){
      return res.status(503).json({ message: 'Email authentication failed. Check the SMTP username and password.' })
    }

    return res.status(500).json({message:'Server error'})
  }
}
