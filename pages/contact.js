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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2828!2d80.38241!3d16.32734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c1e8c8c8c8c8d%3A0xd8d8d8d8d8d8d8d8!2sFlat%20No.%20605%2C%205th%20Line%2C%20Brindavan%20Gardens%2C%20Guntur!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
            </div>
            <p className="mt-3 text-sm">Address: Flat No. 605, 5th Line, beside Zudio, Nalanda Nagar, Brindavan Gardens, Guntur, Andhra Pradesh 522006</p>
            <p className="mt-1 text-sm">Phone: +91 93915 72075</p>
            <p className="mt-1 text-sm">Email: info@mysmartscholar.com</p>
            <div className="mt-3 flex gap-2">
              <a href="https://wa.me/919391572075" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue">WhatsApp</a>
              <a href="https://www.facebook.com/share/16PtwftXdV/" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue">Facebook</a>
              <a href="https://www.instagram.com/smartscholareducation?igsh=dW15cWMzZ2duOHI2" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
