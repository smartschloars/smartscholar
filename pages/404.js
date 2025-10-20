import Link from 'next/link'

export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-3">Page not found.</p>
  <Link href="/" className="mt-4 inline-block text-brand-blue">Back to Home</Link>
      </div>
    </div>
  )
}
