import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full bg-white shadow sticky top-0 z-40">
        <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-lg text-brand-blue">Smartscholar</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/countries">Countries</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="bg-brand-blue text-white px-4 py-2 rounded">Book Free Consultation</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col gap-3">
            <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
            <Link href="/services" onClick={()=>setOpen(false)}>Services</Link>
            <Link href="/countries" onClick={()=>setOpen(false)}>Countries</Link>
            <Link href="/blog" onClick={()=>setOpen(false)}>Blog</Link>
            <Link href="/contact" className="bg-brand-blue text-white px-4 py-2 rounded" onClick={()=>setOpen(false)}>Book Free Consultation</Link>
          </div>
        </div>
      )}
    </header>
  )
}
