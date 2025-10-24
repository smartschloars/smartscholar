import { useRouter } from 'next/router'
import SEO from '../../components/SEO'
import Hero from '../../components/Hero'
import { FaBriefcase, FaBook, FaUniversity, FaTrophy, FaPassport, FaPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

const data = {
  'career-counselling': {
    title: 'Career Counselling',
    banner: '/og-ielts.png',
    icon: FaBriefcase,
    color: 'from-blue-500 to-blue-600',
    content: `Career counselling helps individuals navigate their professional journey with clarity and confidence. Our advisors evaluate academic background, interests, and market trends to recommend study paths, skill development and realistic timelines for admission and career goals.`,
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
    banner: '/og-usa.png',
    icon: FaBook,
    color: 'from-purple-500 to-purple-600',
    content: `Course selection ensures students choose educational paths that align with their interests and career goals. We map courses to outcomes and advise on credit transfer, duration and cost.`,
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
    banner: '/og-usa.png',
    icon: FaUniversity,
    color: 'from-indigo-500 to-indigo-600',
    content: `University selection involves choosing institutions that best fit an individual's academic aspirations and resources. We shortlist universities by fit, ranking, placement records and scholarship opportunities.`,
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
    banner: '/og-ielts.png',
    icon: FaTrophy,
    color: 'from-yellow-500 to-amber-600',
    content: `Scholarship assistance guides students in identifying and applying for financial support to pursue their academic goals effectively. We help with eligibility checks, essay review and deadline management.`,
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
    banner: '/og-usa.png',
    icon: FaPassport,
    color: 'from-green-500 to-emerald-600',
    content: `Visa assistance facilitates the process of obtaining necessary documentation for international study or work opportunities. Our team reviews documents, prepares submissions and supports interview preparation.`,
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
    banner: '/og-usa.png',
    icon: FaPlane,
    color: 'from-pink-500 to-rose-600',
    content: `A pre-departure guide equips individuals with essential information to ease their transition into studying or working abroad. We cover travel, accommodation, cultural adaptation and checklists.`,
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
  const bannerPath = `/banners/${slug}.svg`
  const imagePath = bannerPath
  
  return (
    <>
      <SEO title={item.title} image={imagePath} />
      <Hero title={item.title} subtitle="SmartScholar - expert guidance at every step" ctas={<a href="/contact" className="px-4 py-2 bg-brand-blue text-white rounded">Contact Us</a>} />

      <section className="container py-16">
        {/* Main service card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Icon header with gradient */}
            <div className={`bg-gradient-to-br ${item.color} p-12 flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              </div>
              <Icon className="text-white text-7xl relative z-10" />
            </div>

            {/* Content section */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{item.title}</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {item.content}
              </p>

              {/* Benefits section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {item.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`bg-gradient-to-br ${item.color} rounded-full p-2 mt-1 flex-shrink-0`}>
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-700 mb-6">
                  <span className="font-semibold">Ready to get started?</span> Contact us today to discuss how we can help you achieve your study abroad goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:shadow-lg transition-shadow text-center"
                  >
                    Book a Consultation
                  </a>
                  <a 
                    href="mailto:info@mysmartscholar.com" 
                    className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                  >
                    Email Us
                  </a>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                  Or reach out directly at <a href="tel:+919391572075" className="text-brand-blue font-semibold">+91 93915 72075</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
