import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Link from 'next/link'

const services = [
  { title:'Career Counselling', desc:'Personalised career guidance to pick the right path and build a plan.', slug:'career-counselling' },
  { title:'Course Selection', desc:'Course and program selection aligned to your strengths and goals.', slug:'course-selection' },
  { title:'University Selection', desc:'Shortlisting universities based on fit, ranking and scholarships.', slug:'university-selection' },
  { title:'Scholarship Assistance', desc:'Help finding and applying for scholarships to reduce costs.', slug:'scholarship-assistance' },
  { title:'Visa Assistance', desc:'Complete support for visa applications and documentation.', slug:'visa-assistance' },
  { title:'Pre-departure Guide', desc:'Briefings and checklists so you are ready to travel and study abroad.', slug:'pre-departure-guide' },
]

export default function Services(){
  return (
    <>
      <SEO title="Services" />
      <Hero title="Our Services" subtitle="End-to-end support for your study abroad journey" ctas={<Link href="/contact" className="px-4 py-2 bg-brand-blue text-white rounded">Get a Free Consultation</Link>} />

      {/* Full width promotional banner */}
      <div className="w-full bg-gradient-to-r from-brand-blue to-indigo-600 text-white py-12 mt-6">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Get Ready to Fly with SmartScholar</h2>
          <p className="mt-2 text-sm md:text-base">Start your application early for the 2025 intake — limited slots for free counselling.</p>
          <Link href="/contact" className="inline-block mt-4 bg-white text-brand-blue px-4 py-2 rounded">Book Free Consultation</Link>
        </div>
      </div>

      <section className="container py-12">
        <p className="text-gray-700">SmartScholar offers a full suite of services to help students secure admission, scholarships and visas for study abroad. Below are our core services — click "Learn more" to view details.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s=> (
            <div key={s.title} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
              {/* service banner */}
              <div className="h-36 bg-gray-100 flex items-center justify-center">
                {/* use user-provided banner images located in /public/banners/ */}
                <img src={`/banners/${s.slug}.svg`} alt={s.title} className="h-36 w-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ServiceCard title={s.title} icon="⭐" />
                <p className="mt-3 text-gray-600 flex-1">{s.desc}</p>
                <a className="mt-4 text-sm text-brand-blue font-semibold" href={`/services/${s.slug}`}>Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
