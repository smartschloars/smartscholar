import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

export default function About(){
  return (
    <>
      <SEO title="About" />
      <Hero
        title="About SmartScholar"
        subtitle="We help students build global careers with clear guidance, end-to-end support and trusted partnerships."
        ctas={<a href="/contact" className="px-4 py-2 bg-brand-blue text-white rounded">Contact Us</a>}
      />

      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Who we are</h2>
            <p className="mt-4 text-gray-700">
              SmartScholar is a modern education consultancy helping students and professionals take the next step abroad.
              We provide personalised career counselling, application support, scholarship guidance and visa assistance —
              every step is tailored to the individual.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <ServiceCard title="Career Counselling" icon="🎯" />
              <ServiceCard title="University Selection" icon="🎓" />
              <ServiceCard title="Visa Assistance" icon="🛂" />
              <ServiceCard title="Pre-departure" icon="✈️" />
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-gray-700">Phone: <a className="text-brand-blue" href="tel:+919391572075">+91 93915 72075</a></p>
              <p className="mt-1 text-gray-700">Email: <a className="text-brand-blue" href="mailto:info@mysmartscholar.com">info@mysmartscholar.com</a></p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold">Our approach</h3>
              <p className="mt-3 text-gray-700">
                We combine up-to-date immigration knowledge with personalised support. Our team focuses on clear timelines,
                documentation guidance, and practical coaching so applicants feel confident and prepared.
              </p>

              <h4 className="mt-6 font-semibold">Experience & outreach</h4>
              <p className="mt-2 text-gray-700">
                We run workshops, university fairs and one-on-one sessions to help applicants find the best-fit programs and
                secure admission with scholarship opportunities where possible.
              </p>
            </div>

            <div className="mt-6 grid gap-4">
              <TestimonialCard quote="SmartScholar made the whole process simple and stress-free." author="A. Kumar" />
              <TestimonialCard quote="Excellent guidance and real results." author="S. Reddy" />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Content adapted for SmartScholar. For any original-source attributions, please keep the proper credits.
        </p>
      </section>
    </>
  )
}
