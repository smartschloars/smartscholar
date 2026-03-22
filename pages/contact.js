import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const infoCards = [
  {
    title: 'Talk to an expert',
    desc: 'Get a focused, 20-minute call to plan your next move.',
    icon: FaPhoneAlt,
    href: 'tel:+919391572075',
    cta: '+91 93915 72075'
  },
  {
    title: 'Drop us an email',
    desc: 'Share your profile, deadlines, or questions. We answer in under 24 hours.',
    icon: FaEnvelope,
    href: 'mailto:info@mysmartscholar.com',
    cta: 'info@mysmartscholar.com'
  },
  {
    title: 'Visit the studio',
    desc: 'Flat No. 605, 5th Line, beside Zudio, Nalanda Nagar, Brindavan Gardens, Guntur, Andhra Pradesh 522006',
    icon: FaMapMarkerAlt,
    href: 'https://maps.google.com/?q=Flat%20No.%20605%2C%205th%20Line%2C%20Brindavan%20Gardens%2C%20Guntur%2C%20Andhra%20Pradesh%20522006',
    cta: 'Open in maps'
  }
]

export default function Contact(){
  return (
    <>
      <SEO title="Contact" />
      <Hero
        eyebrow="Talk to us"
        title="Let's design your study abroad plan together"
        subtitle="Quick discovery calls, transparent guidance, and practical next steps tailored to you."
        ctas={
          <>
            <a href="tel:+919391572075" className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-indigo-500" />
              <span className="relative">Call now</span>
            </a>
            <a href="https://wa.me/919391572075" className="text-sm font-semibold text-brand-blue hover:text-indigo-700 inline-flex items-center gap-2">
              <FaWhatsapp />
              WhatsApp
            </a>
          </>
        }
      />

      <div className="bg-gradient-to-b from-white via-[#f6f7fb] to-[#eef2ff]">
        <div className="container py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-brand-blue/10 via-indigo-50 to-white border border-brand-blue/10 p-4 md:p-6">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    We reply within 24 hours
                  </div>
                  <div className="text-sm text-gray-700">Weekdays: 9:30 AM - 7:30 PM IST | Saturday: 10 AM - 4 PM</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {infoCards.map((card) => {
                const Icon = card.icon
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className="group relative block overflow-hidden rounded-2xl border border-white/60 bg-white/80 backdrop-blur px-5 py-6 shadow-[0_18px_80px_-35px_rgba(15,23,42,0.35)] hover:-translate-y-1 transition-transform"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-white to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-start gap-4">
                      <div className="h-11 w-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-lg">
                        <Icon />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                          {card.cta}
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                )
              })}

              <div className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_18px_80px_-35px_rgba(15,23,42,0.35)] h-[260px]">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2828!2d80.38241!3d16.32734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c1e8c8c8c8c8d%3A0xd8d8d8d8d8d8d8d8!2sFlat%20No.%20605%2C%205th%20Line%2C%20Brindavan%20Gardens%2C%20Guntur!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{border:0}}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
