import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const isActive = (path) => router.pathname === path

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/countries', label: 'Countries' },
  ]

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-40 transition-shadow duration-300">
        <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold text-xl text-brand-blue hover:text-blue-700 transition-colors duration-200">
          Smartscholar
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <Link 
              key={link.href}
              href={link.href}
              className={`font-medium transition-all duration-200 pb-1 relative ${
                isActive(link.href)
                  ? 'text-brand-blue border-b-2 border-brand-blue'
                  : 'text-gray-700 hover:text-brand-blue border-b-2 border-transparent hover:border-brand-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-brand-blue to-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Book Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center text-2xl text-gray-700 hover:text-brand-blue transition-colors duration-200 p-2"
          onClick={()=>setOpen(!open)} 
          aria-label="menu"
        >
          <svg className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-gray-50 border-t border-gray-200 container py-4 flex flex-col gap-3">
          {navLinks.map(link => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={()=>setOpen(false)}
              className={`font-medium py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive(link.href)
                  ? 'bg-brand-blue text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={()=>setOpen(false)}
            className="bg-gradient-to-r from-brand-blue to-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-center"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </header>
  )
}
