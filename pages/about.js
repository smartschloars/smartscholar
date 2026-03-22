import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { FaBullseye, FaLightbulb, FaHandshake, FaTrophy, FaChartLine, FaGlobe, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const values = [
  { title: 'Student-first', desc: 'Every strategy and shortlist is built around your strengths, ambitions, and budget.', icon: FaBullseye, color: 'from-blue-500 to-indigo-600' },
  { title: 'Transparent', desc: 'Clear timelines, pricing, and honest feedback so you always know what is next.', icon: FaLightbulb, color: 'from-amber-500 to-orange-600' },
  { title: 'Supportive', desc: 'A counsellor plus alumni mentor to keep you confident through every milestone.', icon: FaHandshake, color: 'from-emerald-500 to-teal-600' },
  { title: 'Excellence', desc: 'Meticulous application reviews, mock interviews, and polished documents.', icon: FaTrophy, color: 'from-purple-500 to-pink-600' },
  { title: 'Growth-focused', desc: 'Career-aligned course choices with salary outlooks and post-study pathways.', icon: FaChartLine, color: 'from-indigo-500 to-blue-700' },
  { title: 'Global lens', desc: 'Country specialists who understand admissions, visas, and scholarships in 30+ destinations.', icon: FaGlobe, color: 'from-rose-500 to-red-600' },
]

const testimonials = [
  { quote: 'SmartScholar made the whole process simple and stress-free. The team understood my goals and helped me every step of the way.', author: 'A. Kumar', role: 'University of UK' },
  { quote: 'Excellent guidance and real results. I got into my dream university with a scholarship!', author: 'S. Reddy', role: 'Student, USA' },
  { quote: 'The personalized approach really sets them apart. Highly recommended!', author: 'P. Srinu', role: 'UK, Class of 2024' },
]

export default function About(){
  return (
    <>
      <SEO title="About" />
      <Hero
        eyebrow="About SmartScholar"
        title="Designing global education journeys with intention"
        subtitle="We blend counselling, application strategy, storytelling, and visa readiness into a calm, confidence-building process."
        backgroundImage="/site-visuals/advisory-team-meeting.webp"
        ctas={
          <>
            <a href="/contact" className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="absolute inset-0 opacity-70 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="relative flex items-center gap-2">
                Book a consultation
                <FaArrowRight />
              </span>
            </a>
            <a href="tel:+919391572075" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md">
              Call us
            </a>
          </>
        }
      />

      <section className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Who we are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">A seasoned team of counsellors, editors, and visa coaches</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SmartScholar is a modern education consultancy helping students and professionals take the next step abroad. We provide personalised counselling, application support, scholarship guidance, and visa assistance - every step is deliberate and transparent.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since our inception, we have helped hundreds of students secure admissions and scholarships at top universities worldwide. Our mission is simple: make global education accessible and achievable with clarity and care.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {[
                { label: 'Students placed', value: '1500+' },
                { label: 'Universities & colleges', value: '50+' },
                { label: 'Scholarships secured', value: '$2M+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-r from-brand-blue to-indigo-600 text-white px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_90px_-45px_rgba(15,23,42,0.6)] space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">How we show up</p>
            <h3 className="text-2xl font-bold">White-glove guidance</h3>
            <ul className="space-y-3 text-white/90">
              {[
                'Deep discovery to understand your story and ambitions.',
                'Essay reviews, mock interviews, and visa file audits.',
                'Weekly updates for students and parents.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">99% visa approvals</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">30+ countries</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-[#f7f9ff] to-[#eef2ff] py-12 lg:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Principles that shape every interaction</h2>
            <p className="text-lg text-gray-700 mt-3 max-w-3xl mx-auto">These pillars guide how we advise, review documents, and advocate for you with universities and embassies.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/70 bg-white/90 backdrop-blur p-6 shadow-[0_20px_70px_-32px_rgba(15,23,42,0.4)]">
                    <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${value.color} p-3 text-white shadow-lg`}>
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">{value.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container py-12 lg:py-16">
        <div className="rounded-3xl bg-white/90 backdrop-blur border border-white/70 shadow-[0_24px_90px_-45px_rgba(15,23,42,0.55)] p-8 md:p-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Our approach</p>
              <h2 className="text-3xl font-bold text-gray-900">Precise process, human touch</h2>
              <p className="text-lg text-gray-700 leading-relaxed">We run structured sprints: discovery, profile positioning, application build, visa prep, and arrival. Each stage has clear owners, review checklists, and rehearsal sessions.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-blue" />Personalised 1-on-1 sessions</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-blue" />Comprehensive document support</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-blue" />Mock interviews for visas and scholarships</li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Workshops & fairs', text: 'Monthly sessions with alumni and universities.' },
                { title: 'University partnerships', text: 'Strong network to validate fits and timelines.' },
                { title: 'Career alignment', text: 'Course choices mapped to outcomes and salary data.' },
                { title: 'Post-arrival care', text: 'On-ground guidance for housing, banking, and settling in.' },
              ].map(card => (
                <div key={card.title} className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4">
                  <h4 className="font-semibold text-gray-900">{card.title}</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] text-white py-12 lg:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">What students say</h2>
            <p className="text-lg text-white/80 mt-3 max-w-2xl mx-auto">Real stories from students who trusted us with their applications, scholarships, and visas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl bg-white/10 border border-white/15 p-6 h-full"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 lg:py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Ready to start your journey?</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Get a free consultation and a clear, customised checklist for your target country, course, and intake.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="px-6 py-3 bg-brand-blue text-white rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">Book a free consultation</a>
            <a href="tel:+919391572075" className="px-6 py-3 border border-brand-blue text-brand-blue rounded-full font-semibold hover:bg-brand-blue/5 transition-colors">Call us: +91 93915 72075</a>
          </div>
        </div>
      </section>
    </>
  )
}
