import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Link from 'next/link'
import { FaBriefcase, FaBook, FaUniversity, FaTrophy, FaPassport, FaPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
  { title:'Career Counselling', desc:'Personalised career guidance to pick the right path and build a plan.', slug:'career-counselling', icon: FaBriefcase, color: 'from-blue-500 to-blue-600' },
  { title:'Course Selection', desc:'Course and program selection aligned to your strengths and goals.', slug:'course-selection', icon: FaBook, color: 'from-purple-500 to-purple-600' },
  { title:'University Selection', desc:'Shortlisting universities based on fit, ranking and scholarships.', slug:'university-selection', icon: FaUniversity, color: 'from-indigo-500 to-indigo-600' },
  { title:'Scholarship Assistance', desc:'Help finding and applying for scholarships to reduce costs.', slug:'scholarship-assistance', icon: FaTrophy, color: 'from-yellow-500 to-amber-600' },
  { title:'Visa Assistance', desc:'Complete support for visa applications and documentation.', slug:'visa-assistance', icon: FaPassport, color: 'from-green-500 to-emerald-600' },
  { title:'Pre-departure Guide', desc:'Briefings and checklists so you are ready to travel and study abroad.', slug:'pre-departure-guide', icon: FaPlane, color: 'from-pink-500 to-rose-600' },
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

      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-gray-600 text-lg">SmartScholar offers a full suite of services to help students secure admission, scholarships and visas for study abroad.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon
            return (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <a href={`/services/${s.slug}`} className="block h-full">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col hover:scale-105">
                    {/* Icon section with gradient */}
                    <div className={`bg-gradient-to-br ${s.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                      </div>
                      <Icon className="text-white text-5xl relative z-10" />
                    </div>
                    
                    {/* Content section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-gray-600 flex-1 mb-4">
                        {s.desc}
                      </p>
                      <span className="text-brand-blue font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
