import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <>
      <SEO title="Contact" />
      <div className="container py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactForm />
          <div>
            <h3 className="font-semibold">Our Office</h3>
            <div className="mt-3 h-64 w-full overflow-hidden rounded">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197141909974!2d-122.4194151846816!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5ea7e6b7%3A0xa3f0e6c6a0a3f0e6!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000"
                width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
            <p className="mt-3 text-sm">Address: 123 Main St, City</p>
            <p className="mt-1 text-sm">Phone: +91 93915 72075</p>
            <p className="mt-1 text-sm">Email: info@mysmartscholar.com</p>
            <div className="mt-3 flex gap-2">
              <a className="text-sm text-brand-blue">WhatsApp</a>
              <a className="text-sm text-brand-blue">Facebook</a>
              <a className="text-sm text-brand-blue">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
