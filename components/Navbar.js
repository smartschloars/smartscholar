import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => router.pathname === path

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/countries', label: 'Countries' },
  ]

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-white/80 shadow-lg' : 'bg-transparent'}`}>
      <div className="container py-4">
        <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-[0_10px_50px_-24px_rgba(15,23,42,0.4)]">
          <Link href="/" className="flex items-center gap-3 group min-w-0" aria-label="Smart Scholar home">
            <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_30px_-20px_rgba(15,23,42,0.35)] sm:h-14 sm:w-24">
              <Image
                src="/logo-mark.png"
                alt="Smart Scholar logo"
                fill
                priority
                sizes="(max-width: 640px) 80px, 96px"
                className="object-contain p-1.5 transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 leading-none">Smart Scholar</p>
              <p className="text-xs text-gray-500 leading-none">Educational consultants</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-semibold tracking-tight px-1 pb-1 transition-all duration-200 ${isActive(link.href) ? 'text-brand-blue' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${isActive(link.href) ? 'w-full bg-brand-blue' : 'w-0 bg-gray-300 group-hover:w-full'}`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-sm font-semibold text-white transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-90" />
              <span className="relative">Book free consultation</span>
              <svg className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
              </svg>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center text-2xl text-gray-700 hover:text-brand-blue transition-colors duration-200 p-2 rounded-xl bg-white/70 border border-white/80 shadow-sm"
            onClick={()=>setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-72' : 'max-h-0'}`}>
        <div className="container pb-4">
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/70 shadow-lg p-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={()=>setOpen(false)}
                className={`font-semibold py-2 px-3 rounded-xl transition-all duration-200 ${isActive(link.href) ? 'bg-brand-blue text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={()=>setOpen(false)}
              className="bg-gradient-to-r from-brand-blue to-indigo-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center"
            >
              Book free consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
