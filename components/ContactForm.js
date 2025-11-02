import { useState } from 'react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[0-9+\-\s().]{7,}$/

export default function ContactForm(){
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [errors, setErrors] = useState({})

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const entries = Object.fromEntries(form.entries())
    const payload = {
      name: entries.name?.trim() || '',
      email: entries.email?.trim() || '',
      phone: entries.phone?.trim() || '',
      message: entries.message?.trim() || ''
    }

    const nextErrors = {}
    if(!payload.name){ nextErrors.name = 'Name is required.' }
    if(!payload.email){ nextErrors.email = 'Email is required.' }
    else if(!EMAIL_PATTERN.test(payload.email)){ nextErrors.email = 'Enter a valid email address.' }
    if(!payload.phone){ nextErrors.phone = 'Phone is required.' }
    else if(!PHONE_PATTERN.test(payload.phone)){ nextErrors.phone = 'Enter a valid phone number.' }
    if(payload.message && payload.message.length < 10){ nextErrors.message = 'Message must be at least 10 characters or left blank.' }

    if(Object.keys(nextErrors).length){
      setErrors(nextErrors)
      setStatus({ type: 'validation', message: 'Please correct the highlighted fields.' })
      return
    }

    setErrors({})
    setStatus({ type: 'sending', message: 'Sending...' })
    try{
      const res = await fetch('/api/contact', {
        method:'POST',
        body: JSON.stringify(payload),
        headers:{'Content-Type':'application/json'}
      })
      if(res.ok){
        e.target.reset()
        setStatus({ type: 'sent', message: 'Sent - we will contact you soon.' })
        return
      }
      const data = await res.json().catch(() => ({}))
      setStatus({ type: 'error', message: data.message || 'Error sending. Try again later.' })
    }catch(err){
      setStatus({ type: 'error', message: 'Error sending. Try again later.' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          required
          className={`w-full p-3 border rounded ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          className={`w-full p-3 border rounded ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Email"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          name="phone"
          required
          className={`w-full p-3 border rounded ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Phone"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
        <textarea
          name="message"
          className={`w-full p-3 border rounded ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Message (optional)"
          rows={5}
          aria-invalid={Boolean(errors.message)}
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-brand-blue text-white px-4 py-2 rounded" type="submit" disabled={status.type === 'sending'}>
          Send Message
        </button>
        {status.type !== 'idle' && (
          <span
            className={`text-sm ${
              status.type === 'sent' ? 'text-green-600' : status.type === 'error' ? 'text-red-600' : ''
            }`}
            role={status.type === 'error' || status.type === 'validation' ? 'alert' : undefined}
          >
            {status.message}
          </span>
        )}
      </div>
    </form>
  )
}
