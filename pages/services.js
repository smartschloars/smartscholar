import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Link from 'next/link'
import ServiceCard from '../components/ServiceCard'
import { FaBriefcase, FaBook, FaUniversity, FaTrophy, FaPassport, FaPlane, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const services = [
  { title:'Career Counselling', desc:'1:1 sessions to align your strengths, goals, and timelines into a clear study abroad roadmap.', slug:'career-counselling', icon: FaBriefcase, image:'/site-visuals/remote-counselling.webp', eyebrow:'1:1 support' },
  { title:'Course Selection', desc:'Side-by-side comparisons of programs, intakes, and costs to pick the right academic direction.', slug:'course-selection', icon: FaBook, image:'/site-visuals/compass-guidance.webp', eyebrow:'Smart choices' },
  { title:'University Selection', desc:'Shortlists by fit, rankings, career outcomes, and scholarship odds with transparent reasoning.', slug:'university-selection', icon: FaUniversity, image:'/site-visuals/classical-campus-steps.webp', eyebrow:'Right-fit campuses' },
  { title:'Scholarship Assistance', desc:'Positioning, essays, and paperwork that maximize merit, need-based, and assistantship wins.', slug:'scholarship-assistance', icon: FaTrophy, image:'/site-visuals/admit-impact-1500.webp', eyebrow:'Funding outcomes' },
  { title:'Visa Assistance', desc:'File prep, document audits, and mock interviews so you walk into the visa office confident.', slug:'visa-assistance', icon: FaPassport, image:'/site-visuals/visa-approved-passport.webp', eyebrow:'Approval ready' },
  { title:'Pre-departure Guide', desc:'Housing, packing lists, insurance, flights, and on-arrival checklists for a smooth landing.', slug:'pre-departure-guide', icon: FaPlane, image:'/site-visuals/post-arrival-support.webp', eyebrow:'Soft landing' },
]

const guarantees = [
  'A dedicated counsellor plus alumni mentor matched to your destination.',
  'Weekly updates so parents and students always know the next milestone.',
  'Stress-tested applications, essays, and visa files reviewed by senior team members.',
]

const serviceSnapshots = [
  {
    title: 'Profile-first planning',
    text: 'Budget, fit, intake, and positioning mapped before university shortlists.',
    image: '/site-visuals/data-driven-planning.webp',
  },
  {
    title: 'Essay and SOP refinement',
    text: 'Narrative review, editing, and document polish for stronger applications.',
    image: '/site-visuals/sop-review.webp',
  },
  {
    title: 'Visa confidence',
    text: 'Mock interviews, document audits, and final file checks before submission.',
    image: '/site-visuals/visa-approved-passport.webp',
  },
  {
    title: 'Arrival support',
    text: 'Fast-response guidance after admit, before travel, and after landing.',
    image: '/site-visuals/post-arrival-support.webp',
  },
]

export default function Services(){
  return (
    <>
      <SEO title="Services" />
      <Hero
        eyebrow="Full-stack support"
        title="Services designed to move you from intent to arrival"
        subtitle="Every application, essay, scholarship, and visa step is handled with a product-like process so you can focus on preparing for campus."
        backgroundImage="/site-visuals/profile-planning-session.webp"
        ctas={
          <>
            <Link href="/contact" className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="absolute inset-0 opacity-70 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="relative flex items-center gap-2">
                Book a free consultation
                <FaArrowRight />
              </span>
            </Link>
            <a href="tel:+919391572075" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md">
              Call now
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
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">How we deliver</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">Meticulous prep for every milestone</h2>
            <p className="text-lg text-gray-700 leading-relaxed">We blend counselling, application strategy, design, and visa readiness into one cohesive process. You get calm clarity and a checklist that is always up to date.</p>
            <div className="space-y-3">
              {guarantees.map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {serviceSnapshots.map((item) => (
                <div
                  key={item.title}
                  className="group relative min-h-[220px] overflow-hidden rounded-3xl border border-white/70 shadow-[0_24px_90px_-45px_rgba(15,23,42,0.55)]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.08) 0%, rgba(15,23,42,0.82) 100%), url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/15 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col justify-end p-5">
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/85 px-5 py-4 shadow-[0_24px_90px_-45px_rgba(15,23,42,0.55)]">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-800">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                  Admissions, scholarships, visas handled end-to-end
                </span>
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-brand-blue">1500+ students placed</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">99% visa approvals</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-[#f7f9ff] to-[#eef2ff] py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Pick your service</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Deep expertise, zero guesswork</h2>
            <p className="text-lg text-gray-700 mt-3">Every service includes structured timelines, document templates, and a dedicated counsellor.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Link href={`/services/${s.slug}`} className="block h-full">
                    <ServiceCard
                      title={s.title}
                      icon={<Icon />}
                      description={s.desc}
                      imageSrc={s.image}
                      eyebrow={s.eyebrow}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="container py-12 lg:py-16">
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue to-indigo-500 text-white px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Fast start</p>
            <h3 className="text-2xl md:text-3xl font-bold">Book a discovery call</h3>
            <p className="text-white/80 mt-2 max-w-2xl">Share your target country, intake, and budget. We respond with a tailored shortlist and checklist within 24 hours.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue px-5 py-3 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">
              Talk to us
            </Link>
            <a href="https://wa.me/919391572075" className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-3 font-semibold hover:bg-white/10 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
