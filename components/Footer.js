import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t py-10 mt-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg text-brand-blue">SmartScholar</h3>
          <p className="mt-2 text-sm">Your smart path to global education.</p>
          <p className="mt-2 text-sm">Phone: +91 93915 72075</p>
          <p className="mt-1 text-sm">Email: <a href="mailto:info@mysmartscholar.com" className="text-brand-blue">info@mysmartscholar.com</a></p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="text-sm mt-2">Get updates and study tips.</p>
          <form className="mt-3 flex gap-2">
            <input aria-label="email" className="px-3 py-2 border rounded flex-1" placeholder="Email address" />
            <button className="bg-brand-blue text-white px-3 py-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Smartscholar. All rights reserved.</div>
    </footer>
  )
}
