import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import CountryCard from '../components/CountryCard'
import TestimonialCard from '../components/TestimonialCard'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaPlaneDeparture, FaUniversity, FaPassport, FaBook, FaBriefcase, FaHandsHelping, FaFileAlt, FaGraduationCap, 
  FaCheckCircle, FaTrophy, FaGraduationCap as FaGrad, FaHeadset, FaArrowRight, FaChevronLeft, FaChevronRight, FaStar, FaCalendar, FaGlobe } from 'react-icons/fa'

const services = [
  {title:'Study Abroad Guidance', icon:<FaPlaneDeparture/>},
  {title:'Admission Assistance', icon:<FaUniversity/>},
  {title:'Visa Counseling', icon:<FaPassport/>},
  {title:'Test Preparation (IELTS, TOEFL, GRE...)', icon:<FaBook/>},
  {title:'Career Counseling', icon:<FaBriefcase/>},
  {title:'Scholarship & Funding Support', icon:<FaBriefcase/>},
  {title:'Application & SOP Workshops', icon:<FaFileAlt/>},
  {title:'Pre-departure & Accommodation Help', icon:<FaHandsHelping/>},
  {title:'Alumni Mentoring & Networking', icon:<FaGraduationCap/>},
]

const countries = ['USA','UK','Canada','Australia','Germany','New Zealand']

const countryFlags = {
  'USA': '/banners/usa.png',
  'UK': '/banners/uk.png',
  'Canada': '/banners/canada.png',
  'Australia': '/banners/australia.png',
  'Germany': '/banners/germany.png',
  'New Zealand': '/banners/new-zealand.png',
}

const getCountryFlag = (country) => countryFlags[country] || undefined

const testimonials = [
  {quote:'SmartScholar completely transformed my study abroad journey. I was initially confused about which universities to apply to, but their personalized counseling helped me identify the perfect fit. I got accepted to University of Cambridge with a substantial scholarship. The visa preparation was thorough and I got my UK student visa approved on first attempt!', author:'Koti chowdary', program:'MSc Computer Science', university:'Aston University, UK', rating: 5},
  {quote:'The team at SmartScholar is incredibly responsive and supportive. My SOP was rejected once, but they didn\'t give up. They helped me rewrite it with better storytelling and impact. Eventually, I got into UMich with 50% scholarship. Their post-arrival support was equally great — they helped me find accommodation and settle in quickly.', author:'Priya ', program:'MBA', university:'University of Michigan, USA', rating: 5},
  {quote:'I was working full-time and couldn\'t manage the application process alone. SmartScholar handled everything — from shortlisting universities to submitting applications. Their test prep coaching helped me score 8.5 in IELTS on my second attempt. Now I\'m studying at University of Toronto with 80% tuition waiver!', author:'Venky ', program:'MSc Engineering', university:' University of Leicester,UK', rating: 5},
  {quote:'As an average student with mediocre scores, I thought my dreams of studying abroad were unrealistic. But SmartScholar saw my potential and helped me build a strong profile. I got into University of Melbourne with an Australia Awards scholarship covering my entire education!', author:'Deepak Kumar', program:'Bachelor of Engineering', university:'University of East Anglia ,UK', rating: 5},
  {quote:'The career counseling session was eye-opening. They helped me understand my strengths and align my university choice with my career goals. I\'m now at Technische Universität München studying Industrial Engineering, and every decision makes sense. Highly recommended!', author:'Sesu', program:'MSc Industrial Engineering', university:'Technische Universität München, Germany', rating: 5},
  {quote:'My visa interview was scheduled in 2 weeks, and I was terrified. SmartScholar conducted 5 mock interviews with me, covering all possible questions. I walked into that interview with confidence and passed easily. Now I\'m at University of Auckland, pursuing my dream degree in Environmental Science.', author:'Ravi', program:'MSc Environmental Science', university:'University of Auckland, New Zealand', rating: 5},
  {quote:'I had a below-average GMAT score but strong work experience. SmartScholar helped me craft a compelling narrative in my SOP explaining how my background uniquely qualified me. Result? Admission to Yale School of Management! Their strategic approach to positioning made all the difference.', author:'Jyothi', program:'MBA', university:'University of Maryland, USA', rating: 5},
  {quote:'From initial consultation to receiving my admission letter, the journey was seamless. They explained every step clearly, managed all documentation, and even helped with financial planning. I got into LSE with 40% scholarship — couldn\'t have done it without them!', author:'Gopi', program:'MSc Finance', university:'London School of Economics, UK', rating: 5},
]

const steps = [
  {title: 'Career Counselling', desc: 'Personalised counselling to understand your aspirations, strengths and the right career pathway.', icon: <FaHandsHelping/>},
  {title: 'Student Profile Analysis', desc: 'We assess your academic records, test scores and finances to craft a realistic plan and target list.', icon: <FaFileAlt/>},
  {title: 'Course & University Selection', desc: 'We shortlist courses and universities matching your profile, goals and budget with clear comparisons.', icon: <FaGraduationCap/>},
  {title: 'Admission Assistance', desc: 'Application support including SOPs, recommendation letters, document review and follow-ups with universities.', icon: <FaUniversity/>},
  {title: 'Pre-Departure Briefing', desc: 'Comprehensive pre-departure orientation covering culture, accommodation, travel and packing tips.', icon: <FaPlaneDeparture/>},
  {title: 'Post-Arrival Assistance', desc: 'On-ground support including airport pickup, university enrolment help and local guidance.', icon: <FaHandsHelping/>},
  {title: 'Financial Aid & Scholarship', desc: 'We search and advise on scholarships, grants, and funding options tailored to your program and merit.', icon: <FaBriefcase/>},
  {title: 'Visa Guidance', desc: 'End-to-end visa support: file preparation, application, document check and mock interview practice.', icon: <FaPassport/>},
]

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000) // Auto-advance every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonials[currentIndex].quote}"</p>
            
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-brand-blue font-medium">{testimonials[currentIndex].program}</p>
              <p className="text-sm text-gray-600">{testimonials[currentIndex].university}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          className="p-3 rounded-full bg-brand-blue text-white hover:bg-blue-600 transition-colors shadow-lg"
        >
          <FaChevronLeft />
        </motion.button>

        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.2 }}
              animate={{
                backgroundColor: idx === currentIndex ? '#2563eb' : '#d1d5db',
                scale: idx === currentIndex ? 1 : 0.8
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-2.5 h-2.5 rounded-full"
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="p-3 rounded-full bg-brand-blue text-white hover:bg-blue-600 transition-colors shadow-lg"
        >
          <FaChevronRight />
        </motion.button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </div>
  )
}

export default function Home(){

  return (
    <>
      <SEO title="Home" description="Your smart path to global education — expert guidance for admissions, visas, and scholarships worldwide." />
      
      {/* PAGE 1: HERO + STATS + FEATURES + QUALITY BLURB */}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="mb-0">
          <Hero 
            title="Transform Your Global Education Journey" 
            subtitle="Join 1050+ successful students at world-class universities. Expert guidance for admissions, visas, and scholarships with personalized support at every step." 
            ctas={<>
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-brand-blue text-white px-7 py-4 rounded-xl text-lg font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Book Free Consultation
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a 
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group border-2 border-gray-300 hover:border-brand-blue px-7 py-4 rounded-xl text-lg font-medium text-gray-700 hover:text-brand-blue transition-all flex items-center gap-2"
              >
                Explore Services
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </>} 
          />
        </div>

        {/* Stats + Features Section */}
        <section className="py-16 bg-white/80 relative backdrop-blur-[4px]">
          <div className="container w-full">
            {/* STATS - Top Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-orange-50 text-orange-900"
              >
                <FaCalendar className="text-3xl text-orange-600 mb-3" />
                <div className="text-4xl font-bold text-orange-600">15+</div>
                <span className="font-medium text-center">Years Experience</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-red-50 text-red-900"
              >
                <FaTrophy className="text-3xl text-red-600 mb-3" />
                <div className="text-4xl font-bold text-red-600">1500+</div>
                <span className="font-medium text-center">Success Stories</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-indigo-50 text-indigo-900"
              >
                <FaGlobe className="text-3xl text-indigo-600 mb-3" />
                <div className="text-4xl font-bold text-indigo-600">30+</div>
                <span className="font-medium text-center">Countries</span>
              </motion.div>
            </motion.div>

            {/* FEATURE BADGES - Middle Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-green-50 text-green-900"
              >
                <FaCheckCircle className="text-2xl text-green-600 mb-2" />
                <span className="font-medium text-center text-sm">99% Visa Success</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 text-blue-900"
              >
                <FaTrophy className="text-2xl text-blue-600 mb-2" />
                <span className="font-medium text-center text-sm">Top 100 Universities</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-purple-50 text-purple-900"
              >
                <FaGrad className="text-2xl text-purple-600 mb-2" />
                <span className="font-medium text-center text-sm">Scholarship Support</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-yellow-50 text-yellow-900"
              >
                <FaHeadset className="text-2xl text-yellow-600 mb-2" />
                <span className="font-medium text-center text-sm">24/7 Support</span>
              </motion.div>
            </motion.div>

            {/* QUALITY BLURB - Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl font-semibold">Quality Overseas Education</h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">SmartScholar is a student-first overseas education consultancy providing end-to-end support for admissions, visa processing and post-arrival assistance. We focus on outcomes and personalised plans that fit your goals.</p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* PAGE 2: HOW IT WORKS */}
      <div className="min-h-screen bg-blue-50">
        <section aria-labelledby="how-it-works" className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="how-it-works" className="text-3xl sm:text-4xl font-semibold">How it works — Step by step</h2>
            <p className="text-center text-gray-600 mt-3">A simple, guided process to take you from enquiry to boarding pass.</p>
          </div>

          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.article key={s.title} whileHover={{ scale: 1.03 }} whileFocus={{ scale: 1.02 }} className="relative group bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-blue transition-transform duration-200">
                {/* Top-right numeric badge (gradient) */}
                <span className="absolute right-4 top-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-semibold text-white shadow">{i+1}<span className="sr-only">Step {i+1}</span></span>

                <div className="flex flex-col items-center text-center">
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.36, ease: 'easeOut' }} className="w-24 h-24 rounded-full bg-brand-blue text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                    <div className="text-2xl text-[3rem]">{s.icon}</div>
                  </motion.div>

                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>

                  <a href="/contact" className="mt-4 inline-flex items-center px-4 py-2 bg-brand-blue text-white rounded-full text-sm font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue">Get help</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        </section>
      </div>

      {/* PAGE 3: SERVICES */}
      <div className="min-h-screen bg-emerald-50">
        <section className="py-16 relative bg-gray-50/80 backdrop-blur-[4px]">
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-4xl font-semibold">Our Services</h2>
              <p className="mt-3 text-gray-600 text-lg">Comprehensive, end-to-end services designed to give you clarity, confidence and the best chance of success when applying abroad.</p>
            </div>

          {/* Why choose us - benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-xl text-brand-blue">Why choose SmartScholar</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                  <span><strong>Personalised plans:</strong> One-on-one counselling tailored to your strengths and goals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                  <span><strong>End-to-end support:</strong> From shortlisting to visa and post-arrival assistance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                  <span><strong>Proven outcomes:</strong> Higher acceptance and visa success rates through expert guidance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-brand-blue mt-1 flex-shrink-0" />
                  <span><strong>Transparent pricing:</strong> Clear service packages and no hidden fees.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-xl text-brand-blue">What we promise</h3>
              <p className="mt-3 text-gray-600">Quick response times, bespoke application strategies, and continuous mentoring through your study abroad journey. We aim to make the process simple, transparent and results-driven.</p>
              <div className="mt-6">
                <a href="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Start your plan
                  <FaArrowRight className="text-sm" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s, index) => (
              <motion.div 
                key={s.title} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }} 
                className=""
              >
                <ServiceCard title={s.title} icon={s.icon} />
              </motion.div>
            ))}
          </div>

          {/* Top Countries Section */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold mb-12 text-center"
            >
              Top Countries We Serve
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
            >
              {countries.map((c, index) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CountryCard country={c} flagSrc={getCountryFlag(c)} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        </section>
      </div>

      {/* PAGE 4: STUDENT STORIES + CTA */}
      <div className="bg-orange-50">
        {/* Student Stories Section */}
        <section className="py-16 bg-white flex items-center min-h-screen">
          <div className="container w-full">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold"
              >
                Student Stories
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-3 text-gray-600 text-lg"
              >
                Real students, real outcomes — read how SmartScholar helped them succeed abroad.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <TestimonialCarousel />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="h-52 bg-brand-blue flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to start your journey?</h3>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Get Free Consultation
              <FaArrowRight />
            </motion.a>
          </motion.div>
        </section>
      </div>
    </>
  )
}
