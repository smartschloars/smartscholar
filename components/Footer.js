import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-[#0f172a] via-[#0d1425] to-[#0b1120] text-gray-200">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(48, 86, 211, 0.12), transparent 22%), radial-gradient(circle at 80% 0%, rgba(244, 114, 182, 0.14), transparent 25%)'
        }}
      ></div>

      <div className="container relative z-10">
        <div className="-translate-y-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500 text-white shadow-[0_25px_60px_-35px_rgba(0,0,0,0.55)] px-6 py-7 md:px-10 md:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.18), transparent 32%)' }}></div>
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Let&apos;s talk</p>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">Turn your study abroad plan into a launch plan</h3>
              <p className="text-white/80 max-w-2xl">Direct access to senior counsellors, honest answers, and a clear next step within 24 hours.</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur border border-white/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" /> Response under 24h
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur border border-white/20">
                  1500+ admits
                </span>
              </div>
            </div>
            <div className="relative flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue px-5 py-3 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Book a call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </Link>
              <a
                href="https://wa.me/919391572075"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/70 text-white px-5 py-3 font-semibold hover:-translate-y-0.5 transition-transform"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          <div className="space-y-3">
            <div className="inline-flex rounded-[24px] border border-white/15 bg-white px-4 py-3 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.7)]">
              <Image
                src="/logo.png"
                alt="Smart Scholar logo"
                width={220}
                height={140}
                className="h-auto w-[170px] md:w-[190px]"
              />
            </div>
            <p className="text-sm text-gray-300 max-w-sm">Premium guidance for ambitious students and parents who want clarity, scholarships, and confidence.</p>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Now onboarding for 2025 &amp; 2026 intakes</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Visit</h4>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              Flat No. 605, 5th Line, beside Zudio, Nalanda Nagar, Brindavan Gardens,
              Guntur, Andhra Pradesh 522006
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <a href="tel:+919391572075" className="block text-white hover:text-brand-blue">+91 93915 72075</a>
              <a href="mailto:info@mysmartscholar.com" className="block text-white hover:text-brand-blue">info@mysmartscholar.com</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/countries" className="hover:text-white">Countries</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Stay in the loop</h4>
            <p className="text-sm text-gray-300 mt-2">One sharp email a month with timelines, scholarships, and admissions wins.</p>
            <form className="mt-3 flex flex-col gap-2 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <input
                aria-label="email"
                className="min-w-0 w-full rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
                placeholder="Email address"
              />
              <button className="w-full rounded-xl bg-white px-4 py-2 font-semibold text-gray-900 transition-transform hover:-translate-y-0.5 sm:w-auto" type="button">Subscribe</button>
            </form>
            <div className="flex items-center gap-3 mt-4 text-gray-300">
              <a
                href="https://www.facebook.com/share/16PtwftXdV/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/smartscholareducation?igsh=dW15cWMzZ2duOHI2"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919391572075"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} SmartScholar. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
