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

  const inputBase = 'w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/60 transition-all shadow-sm'

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white/80 backdrop-blur border border-white/70 shadow-[0_18px_80px_-35px_rgba(15,23,42,0.35)] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Say hello</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-1">We respond within one business day</h3>
        </div>
        {status.type === 'sent' ? (
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100">Sent</span>
        ) : status.type === 'sending' ? (
          <span className="inline-flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
            Sending
          </span>
        ) : null}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            required
            className={`${inputBase} ${errors.name ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            className={`${inputBase} ${errors.email ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="name@email.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          name="phone"
          required
          className={`${inputBase} ${errors.phone ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : ''}`}
          placeholder="+91 93915 72075"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message (optional)</label>
        <textarea
          name="message"
          className={`${inputBase} min-h-[140px] ${errors.message ? 'border-red-400 focus:ring-red-500 focus:border-red-500' : ''}`}
          placeholder="Tell us about your course, country, or deadline."
          rows={5}
          aria-invalid={Boolean(errors.message)}
        ></textarea>
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {status.type !== 'idle' && (
        <div
          className={`text-sm rounded-xl px-3 py-2 ${
            status.type === 'sent'
              ? 'bg-green-50 text-green-700 border border-green-100'
              : status.type === 'error'
              ? 'bg-red-50 text-red-700 border border-red-100'
              : status.type === 'validation'
              ? 'bg-amber-50 text-amber-700 border border-amber-100'
              : 'bg-blue-50 text-blue-700 border border-blue-100'
          }`}
          role={status.type === 'error' || status.type === 'validation' ? 'alert' : undefined}
        >
          {status.message}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          className="relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-3 font-semibold text-white transition-all disabled:opacity-70"
          type="submit"
          disabled={status.type === 'sending'}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
          <span className="absolute inset-0 opacity-60 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
          <span className="relative flex items-center gap-2">
            {status.type === 'sending' ? 'Sending...' : 'Send message'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
            </svg>
          </span>
        </button>
        <p className="text-xs text-gray-500">We never share your details. Expect a reply in under 24 hours.</p>
      </div>
    </form>
  )
}
