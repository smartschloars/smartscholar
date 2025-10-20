import { useState } from 'react'

export default function ContactForm(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const payload = Object.fromEntries(form.entries())
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', { method:'POST', body: JSON.stringify(payload), headers:{'Content-Type':'application/json'} })
      if(res.ok){ setStatus('sent') } else { setStatus('error') }
    }catch(err){ setStatus('error') }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="name" required className="w-full p-3 border rounded" placeholder="Name" />
      <input name="email" type="email" required className="w-full p-3 border rounded" placeholder="Email" />
      <input name="phone" className="w-full p-3 border rounded" placeholder="Phone" />
      <textarea name="message" className="w-full p-3 border rounded" placeholder="Message" rows={5}></textarea>
      <div className="flex items-center gap-3">
        <button className="bg-brand-blue text-white px-4 py-2 rounded" type="submit">Send Message</button>
        {status === 'sending' && <span className="text-sm">Sending…</span>}
        {status === 'sent' && <span className="text-sm text-green-600">Sent — we will contact you soon.</span>}
        {status === 'error' && <span className="text-sm text-red-600">Error sending. Try again later.</span>}
      </div>
    </form>
  )
}
