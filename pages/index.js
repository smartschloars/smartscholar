import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import CountryCard from '../components/CountryCard'
import TestimonialCard from '../components/TestimonialCard'
import { motion } from 'framer-motion'
import { FaPlaneDeparture, FaUniversity, FaPassport, FaBook, FaBriefcase, FaHandsHelping, FaFileAlt, FaGraduationCap } from 'react-icons/fa'

const services = [
  {title:'Study Abroad Guidance', icon:<FaPlaneDeparture/>},
  {title:'Admission Assistance', icon:<FaUniversity/>},
  {title:'Visa Counseling', icon:<FaPassport/>},
  {title:'Test Preparation (IELTS, TOEFL, GRE...)', icon:<FaBook/>},
  {title:'Career Counseling', icon:<FaBriefcase/>},
]

const countries = ['USA','UK','Canada','Australia','Germany','New Zealand']

const testimonials = [
  {quote:'Smartscholar helped me get into my dream uni.', author:'Student A'},
  {quote:'Excellent visa guidance and support.', author:'Student B'},
  {quote:'Top-notch test prep coaching.', author:'Student C'},
]

export default function Home(){
  return (
    <>
      <SEO title="Home" description="Your smart path to global education — study abroad guidance, admissions, visas, and test prep." />
      <Hero title="Your Smart Path to Global Education" subtitle="Smartscholar helps students navigate admissions, visas, test prep and careers abroad." ctas={<>
        <a href="/contact" className="bg-brand-blue text-white px-5 py-3 rounded">Book Free Consultation</a>
        <a href="/services" className="border border-gray-300 px-5 py-3 rounded">Apply Now</a>
      </>} />

      {/* Stats / trust strip */}
      <section className="py-6 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1050+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold">69%</div>
              <div className="text-sm text-gray-600">Visa Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">21+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality blurb */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-semibold">Quality Overseas Education</h2>
          <p className="mt-4 text-gray-600">SmartScholar is a student-first overseas education consultancy providing end-to-end support for admissions, visa processing and post-arrival assistance. We focus on outcomes and personalised plans that fit your goals.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl font-semibold text-center">How it works — Step by step</h2>
          <p className="text-center text-gray-600 mt-2">A simple, guided process to take you from enquiry to boarding pass.</p>

          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">1</div>
                <h3 className="ml-4 text-lg font-semibold">Career Counselling</h3>
              </div>
              <p className="mt-3 text-gray-600">Personalised counselling to understand your aspirations, strengths and the right career pathway.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">2</div>
                <h3 className="ml-4 text-lg font-semibold">Student Profile Analysis</h3>
              </div>
              <p className="mt-3 text-gray-600">We assess your academic records, test scores and finances to craft a realistic plan and target list.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">3</div>
                <h3 className="ml-4 text-lg font-semibold">Course & University Selection</h3>
              </div>
              <p className="mt-3 text-gray-600">We shortlist courses and universities matching your profile, goals and budget with clear comparisons.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">4</div>
                <h3 className="ml-4 text-lg font-semibold">Admission Assistance</h3>
              </div>
              <p className="mt-3 text-gray-600">Application support including SOPs, recommendation letters, document review and follow-ups with universities.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">5</div>
                <h3 className="ml-4 text-lg font-semibold">Pre-Departure Briefing</h3>
              </div>
              <p className="mt-3 text-gray-600">Comprehensive pre-departure orientation covering culture, accommodation, travel and packing tips.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">6</div>
                <h3 className="ml-4 text-lg font-semibold">Post-Arrival Assistance</h3>
              </div>
              <p className="mt-3 text-gray-600">On-ground support including airport pickup, university enrolment help and local guidance.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">7</div>
                <h3 className="ml-4 text-lg font-semibold">Financial Aid &amp; Scholarship</h3>
              </div>
              <p className="mt-3 text-gray-600">We search and advise on scholarships, grants, and funding options tailored to your program and merit.</p>
            </div>

            <div className="p-6 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">8</div>
                <h3 className="ml-4 text-lg font-semibold">Visa Guidance</h3>
              </div>
              <p className="mt-3 text-gray-600">End-to-end visa support: file preparation, application, document check and mock interview practice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map(s=> (
              <motion.div key={s.title} whileHover={{ scale:1.03 }} className="">
                <ServiceCard title={s.title} icon={s.icon} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-semibold">Countries We Serve</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {countries.map(c=> (
              <CountryCard key={c} country={c} flagSrc={c === 'USA' ? '/flags-usa.svg' : undefined} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map(t=> (
              <TestimonialCard key={t.author} quote={t.quote} author={t.author} />
            ))}
          </div>
        </div>
      </section>

      {/* Video block */}
      <section className="py-12 bg-white">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Watch: How SmartScholar Helps Students</h2>
            <p className="mt-3 text-gray-600">Short videos explaining our process, student stories and tips for a successful application.</p>
            <div className="mt-6">
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="inline-block bg-brand-blue text-white px-5 py-3 rounded">Watch on YouTube</a>
            </div>
          </div>
          <div>
            {/* Placeholder thumbnail */}
            <div className="w-full aspect-video bg-gray-200 rounded overflow-hidden flex items-center justify-center">
              <div className="text-gray-500">Video player placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip - Get Free Consultation */}
      <section className="py-12 bg-brand-blue">
        <div className="container text-white text-center">
          <h2 className="text-2xl font-semibold">Get Free Consultation</h2>
          <p className="mt-3">Submit your details and one of our advisers will contact you to discuss study options and next steps.</p>
          <div className="mt-6">
            <a href="/contact" className="bg-white text-brand-blue px-6 py-3 rounded font-semibold">Get Free Consultation</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-xl font-semibold">Latest from our Blog</h2>
          <p className="mt-4 text-gray-600">Helpful updates and tips (placeholder posts).</p>
        </div>
      </section>
    </>
  )
}
