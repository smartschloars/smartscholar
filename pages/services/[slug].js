import { useRouter } from 'next/router'
import SEO from '../../components/SEO'
import Hero from '../../components/Hero'
import { FaBriefcase, FaBook, FaUniversity, FaTrophy, FaPassport, FaPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

const data = {
  'career-counselling': {
    title: 'Career Counselling',
    icon: FaBriefcase,
    content: 'Career counselling helps you navigate your academic and professional journey with clarity. Our advisors evaluate academic background, interests, and market trends to recommend study paths, skill development, and realistic timelines for admission and career goals.',
    benefits: [
      'Personalized career assessment and guidance',
      'Market trends and job placement data analysis',
      'Skill development recommendations',
      'Study path planning aligned with goals',
      'Interview and application support',
      'Post-graduation career planning'
    ]
  },
  'course-selection': {
    title: 'Course Selection',
    icon: FaBook,
    content: 'Course selection ensures students choose educational paths that align with their interests and career goals. We map courses to outcomes and advise on credit transfer, duration, and cost.',
    benefits: [
      'Course comparison and outcome mapping',
      'Career alignment analysis',
      'Credit transfer evaluation',
      'Cost-benefit analysis',
      'Curriculum strength assessment',
      'Industry relevance evaluation'
    ]
  },
  'university-selection': {
    title: 'University Selection',
    icon: FaUniversity,
    content: 'University selection involves choosing institutions that best fit an individual\'s aspirations and resources. We shortlist universities by fit, ranking, placement records, and scholarship opportunities.',
    benefits: [
      'Ranking and reputation analysis',
      'Placement and alumni network review',
      'Campus culture and student life assessment',
      'Scholarship opportunity identification',
      'Application requirement guidance',
      'Personalized shortlist creation'
    ]
  },
  'scholarship-assistance': {
    title: 'Scholarship Assistance',
    icon: FaTrophy,
    content: 'Scholarship assistance guides students in identifying and applying for financial support. We help with eligibility checks, essay review, and deadline management so you can maximize your chances.',
    benefits: [
      'Scholarship search and eligibility verification',
      'Application strategy development',
      'Essay and statement review',
      'Deadline tracking and management',
      'Document preparation assistance',
      'Interview preparation for scholarships'
    ]
  },
  'visa-assistance': {
    title: 'Visa Assistance',
    icon: FaPassport,
    content: 'Visa assistance simplifies the process of obtaining the right documentation for your study destination. Our team reviews documents, prepares submissions, and supports interview preparation.',
    benefits: [
      'Visa requirement analysis and checklist',
      'Document preparation and review',
      'Application form guidance',
      'Interview preparation and mock sessions',
      'Financial documentation support',
      'Post-visa relocation guidance'
    ]
  },
  'pre-departure-guide': {
    title: 'Pre-departure Guide',
    icon: FaPlane,
    content: 'A pre-departure guide equips you with the essentials to ease your transition abroad. We cover travel, accommodation, cultural adaptation, and checklists so nothing is left to chance.',
    benefits: [
      'Travel and flight booking guidance',
      'Accommodation research and booking',
      'Budget planning and money management',
      'Cultural adaptation and lifestyle tips',
      'Health and insurance information',
      'Emergency contacts and support network'
    ]
  }
}

export default function ServiceDetail(){
  const { query } = useRouter()
  const slug = query.slug || ''
  const item = data[slug]
  if(!item) return <div className="container py-12">Service not found.</div>

  const Icon = item.icon

  return (
    <>
      <SEO title={item.title} />
      <Hero
        eyebrow="Service detail"
        title={item.title}
        subtitle="Designed as a guided sprint with checklists, templates, and a dedicated counsellor."
        ctas={
          <>
            <a href="/contact" className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="absolute inset-0 opacity-70 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="relative flex items-center gap-2">
                Book a call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </span>
            </a>
            <a href="mailto:info@mysmartscholar.com" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md">
              Email us
            </a>
          </>
        }
      />

      <section className="bg-gradient-to-b from-white via-[#f7f9ff] to-[#eef2ff] py-12 lg:py-16">
        <div className="container grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl bg-white/90 backdrop-blur border border-white/70 shadow-[0_24px_90px_-45px_rgba(15,23,42,0.55)] p-6 md:p-10 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-blue to-indigo-500 text-white flex items-center justify-center text-2xl shadow-lg">
                <Icon />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-blue">Included</p>
                <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{item.content}</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {item.benefits.map((benefit, idx) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-blue"></span>
                  <span className="text-sm text-gray-800 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white/90 backdrop-blur border border-white/70 shadow-[0_24px_90px_-45px_rgba(15,23,42,0.55)] p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-semibold text-gray-800">We respond within 24 hours</p>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <p>Get a custom checklist for {item.title} with timelines, document templates, and rehearsal calls.</p>
              <p>Parents are looped in with weekly updates and visa readiness scorecards.</p>
            </div>
            <div className="space-y-2 text-sm">
              <a href="tel:+919391572075" className="block rounded-xl bg-brand-blue text-white px-4 py-2.5 font-semibold text-center shadow-lg hover:-translate-y-0.5 transition-transform">Call us directly</a>
              <a href="https://wa.me/919391572075" className="block rounded-xl border border-brand-blue/40 text-brand-blue px-4 py-2.5 font-semibold text-center hover:bg-brand-blue/5 transition-colors">WhatsApp</a>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">What to bring to our first call</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Academic history and target intake</li>
                <li>Budget and scholarship expectations</li>
                <li>Preferred countries or universities</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
