import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import CountryCard from '../components/CountryCard'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  FaPlaneDeparture,
  FaUniversity,
  FaPassport,
  FaBook,
  FaBriefcase,
  FaHandsHelping,
  FaFileAlt,
  FaGraduationCap,
  FaCheckCircle,
  FaTrophy,
  FaHeadset,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaGlobe
} from 'react-icons/fa'

const services = [
  {title:'Study Abroad Guidance', icon:<FaPlaneDeparture/>, description:'360-degree roadmap from shortlist to departure, led by senior counsellors.', image:'/site-visuals/city-arrival-student.webp', eyebrow:'Launch plan'},
  {title:'Admission Assistance', icon:<FaUniversity/>, description:'Applications, essays, and recommendations shaped for the right universities.', image:'/site-visuals/classical-campus-steps.webp', eyebrow:'Admissions build'},
  {title:'Visa Counseling', icon:<FaPassport/>, description:'Mock interviews, file audits, and confidence coaching for approvals.', image:'/site-visuals/visa-approved-passport.webp', eyebrow:'Visa ready'},
  {title:'Test Preparation', icon:<FaBook/>, description:'IELTS, TOEFL, GRE playbooks and practice sprints to lift your scores.', image:'/site-visuals/focused-tech-study.webp', eyebrow:'Score lift'},
  {title:'Career Counseling', icon:<FaBriefcase/>, description:'Align your course choice with career outcomes and salary trajectories.', image:'/site-visuals/remote-counselling.webp', eyebrow:'1:1 strategy'},
  {title:'Scholarship & Funding', icon:<FaBriefcase/>, description:'Positioning and paperwork for merit, need-based, and assistantship wins.', image:'/site-visuals/admit-impact-1500.webp', eyebrow:'Funding wins'},
  {title:'Application & SOP Workshops', icon:<FaFileAlt/>, description:'Story-led SOPs and polished dossiers that stand out in crowded pools.', image:'/site-visuals/sop-review.webp', eyebrow:'Narrative polish'},
  {title:'Pre-departure & Accommodation', icon:<FaHandsHelping/>, description:'Flight, housing, packing, and on-arrival checklists so nothing slips.', image:'/site-visuals/post-arrival-support.webp', eyebrow:'Soft landing'},
  {title:'Alumni Mentoring & Networking', icon:<FaGraduationCap/>, description:'Connect with grads on-campus for insider advice and soft-landing.', image:'/site-visuals/student-community-chat.webp', eyebrow:'Community access'},
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
  {quote:'The team at SmartScholar is incredibly responsive and supportive. My SOP was rejected once, but they didn\'t give up. They helped me rewrite it with better storytelling and impact. Eventually, I got into UMich with 50% scholarship. Their post-arrival support was equally great - they helped me find accommodation and settle in quickly.', author:'Priya', program:'MBA', university:'University of Michigan, USA', rating: 5},
  {quote:'I was working full-time and couldn\'t manage the application process alone. SmartScholar handled everything - from shortlisting universities to submitting applications. Their test prep coaching helped me score 8.5 in IELTS on my second attempt. Now I\'m studying at University of Toronto with 80% tuition waiver!', author:'Venky', program:'MSc Engineering', university:'University of Leicester, UK', rating: 5},
  {quote:'As an average student with mediocre scores, I thought my dreams of studying abroad were unrealistic. But SmartScholar saw my potential and helped me build a strong profile. I got into University of Melbourne with an Australia Awards scholarship covering my entire education!', author:'Deepak Kumar', program:'Bachelor of Engineering', university:'University of East Anglia, UK', rating: 5},
  {quote:'The career counseling session was eye-opening. They helped me understand my strengths and align my university choice with my career goals. I am now at Technische Universitat Munchen studying Industrial Engineering, and every decision makes sense.', author:'Sesu', program:'MSc Industrial Engineering', university:'Technische Universitat Munchen, Germany', rating: 5},
  {quote:'My visa interview was scheduled in 2 weeks, and I was terrified. SmartScholar conducted 5 mock interviews with me, covering all possible questions. I walked into that interview with confidence and passed easily. Now I am at University of Auckland, pursuing my dream degree in Environmental Science.', author:'Ravi', program:'MSc Environmental Science', university:'University of Auckland, New Zealand', rating: 5},
  {quote:'I had a below-average GMAT score but strong work experience. SmartScholar helped me craft a compelling narrative in my SOP explaining how my background uniquely qualified me. Result? Admission to Yale School of Management! Their strategic approach to positioning made all the difference.', author:'Jyothi', program:'MBA', university:'University of Maryland, USA', rating: 5},
  {quote:'From initial consultation to receiving my admission letter, the journey was seamless. They explained every step clearly, managed all documentation, and even helped with financial planning. I got into LSE with 40% scholarship - could not have done it without them!', author:'Gopi', program:'MSc Finance', university:'London School of Economics, UK', rating: 5},
]

const steps = [
  {title: 'Career Counselling', desc: 'Personalised counselling to understand your aspirations, strengths and the right career pathway.', icon: <FaHandsHelping/>},
  {title: 'Student Profile Analysis', desc: 'We assess your academic records, test scores and finances to craft a realistic plan and target list.', icon: <FaFileAlt/>},
  {title: 'Course & University Selection', desc: 'We shortlist courses and universities matching your profile, goals and budget with clear comparisons.', icon: <FaGraduationCap/>},
  {title: 'Admission Assistance', desc: 'Application support including SOPs, recommendation letters, document review and follow-ups with universities.', icon: <FaUniversity/>},
  {title: 'Financial Aid & Scholarship', desc: 'We search and advise on scholarships, grants, and funding options tailored to your program and merit.', icon: <FaBriefcase/>},
  {title: 'Visa Guidance', desc: 'End-to-end visa support: file preparation, application, document check and mock interview practice.', icon: <FaPassport/>},
  {title: 'Pre-Departure Briefing', desc: 'Comprehensive pre-departure orientation covering culture, accommodation, travel and packing tips.', icon: <FaPlaneDeparture/>},
  {title: 'Post-Arrival Assistance', desc: 'On-ground support including airport pickup, university enrolment help and local guidance.', icon: <FaHandsHelping/>},
]

const stats = [
  {label: 'Years of veteran guidance', value: '15+', accent: 'from-brand-blue to-indigo-500', note: 'Admissions strategists and former visa officers in the team.'},
  {label: 'Students placed globally', value: '1500+', accent: 'from-amber-400 to-orange-500', note: 'Offers secured with scholarships across 30+ destinations.'},
  {label: 'Visa approval rate', value: '99%', accent: 'from-emerald-400 to-green-600', note: 'Mock interviews, file audits, and confidence coaching.'},
]

const proofMetrics = [
  {
    value: '1500+',
    label: 'Offers and admits secured',
    note: 'Across premium destinations, scholarship pathways, and varied student profiles.',
  },
  {
    value: '99%',
    label: 'Visa approvals',
    note: 'Built on file audits, mock interviews, and rehearsal-led confidence.',
  },
  {
    value: '80%+',
    label: 'Tuition support wins',
    note: 'Fee waivers, scholarships, and funding strategies matched to fit and merit.',
  },
]

const proofSignals = [
  {
    icon: <FaTrophy className="text-amber-300" />,
    title: 'Scholarship-led positioning',
    note: 'We shape the shortlist and application story around realistic funding opportunities, not vague optimism.',
  },
  {
    icon: <FaPassport className="text-emerald-300" />,
    title: 'Visa files under control',
    note: 'Mock interviews, document checks, and pressure-tested explanations before the final submission window.',
  },
  {
    icon: <FaHeadset className="text-sky-300" />,
    title: 'Support that continues',
    note: 'Families stay close to the team through admits, departure planning, and the first days after arrival.',
  },
]

const journeySlides = [
  {
    title: 'Plan the profile before the applications',
    description: 'We sequence targets, budget, scholarship odds, and timelines before the shortlist starts moving.',
    image: '/site-visuals/data-driven-planning.webp',
    eyebrow: 'Profile planning',
  },
  {
    title: 'Stay close to your counsellor from anywhere',
    description: 'Fast remote sessions, shared next steps, and parent-friendly clarity keep momentum high across time zones.',
    image: '/site-visuals/remote-counselling.webp',
    eyebrow: 'Always-on guidance',
  },
  {
    title: 'Move beyond admit letters into real arrival support',
    description: 'Accommodation, settling-in questions, and post-arrival guidance are part of the process, not an afterthought.',
    image: '/site-visuals/post-arrival-support.webp',
    eyebrow: 'Beyond admissions',
  },
  {
    title: 'Back every decision with visible outcomes',
    description: 'Proof matters. Families get a process grounded in actual admits, scholarships, and visa approvals.',
    image: '/site-visuals/success-stories-collage.webp',
    eyebrow: 'Proof of work',
  },
]

const processLgOrder = [
  'lg:order-1',
  'lg:order-2',
  'lg:order-3',
  'lg:order-4',
  'lg:order-8',
  'lg:order-7',
  'lg:order-6',
  'lg:order-5',
]

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const activeTestimonial = testimonials[currentIndex]

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6500)

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
            className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.55)] backdrop-blur md:p-10"
          >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white/55 uppercase tracking-[0.2em]">Student story</span>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-white/88">"{activeTestimonial.quote}"</p>

            <div className="border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-semibold text-white">{activeTestimonial.author}</p>
                <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
                <p className="text-sm font-semibold text-sky-300">{activeTestimonial.program}</p>
              </div>
              <p className="mt-1 text-sm text-white/60">{activeTestimonial.university}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          className="rounded-full border border-white/10 bg-white/6 p-3 text-white shadow-lg hover:bg-white/10"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="rounded-full border border-white/10 bg-white/6 p-3 text-white shadow-lg hover:bg-white/10"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </motion.button>
      </div>
    </div>
  )
}

function JourneyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const next = () => setCurrentSlide((prev) => (prev + 1) % journeySlides.length)
  const prev = () => setCurrentSlide((prev) => (prev - 1 + journeySlides.length) % journeySlides.length)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % journeySlides.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  const activeSlide = journeySlides[currentSlide]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 backdrop-blur shadow-[0_24px_90px_-45px_rgba(15,23,42,0.55)]">
      <div className="relative aspect-[5/6] sm:aspect-[16/11] lg:aspect-[5/6]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.image}
            initial={{ opacity: 0.35, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.35, scale: 0.98 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-900/5" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            {activeSlide.eyebrow}
          </span>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/25 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
            {currentSlide + 1} / {journeySlides.length}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">{activeSlide.title}</h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">{activeSlide.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Previous journey slide"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Next journey slide"
            >
              <FaChevronRight />
            </button>
            <div className="ml-1 flex items-center gap-2">
              {journeySlides.map((slide, idx) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Go to journey slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProcessConnector({ index, isLast }) {
  return (
    <>
      {!isLast && (
        <div className="absolute -bottom-9 left-1/2 z-10 -translate-x-1/2 md:hidden">
          <svg width="54" height="40" viewBox="0 0 54 40" fill="none" className="text-indigo-300/70">
            <path
              d="M10 6C10 22 18 29 27 29C36 29 44 22 44 34"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38 28L44 34L50 28"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {index < 3 && (
        <div className="absolute -right-8 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
          <svg width="68" height="44" viewBox="0 0 68 44" fill="none" className="text-indigo-300/70">
            <path
              d="M6 32C22 12 42 12 58 22"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 14L58 22L49 29"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {index === 3 && (
        <div className="absolute -bottom-16 right-8 z-10 hidden lg:block">
          <svg width="92" height="86" viewBox="0 0 92 86" fill="none" className="text-indigo-300/70">
            <path
              d="M12 10C68 10 74 24 74 48C74 60 68 70 60 76"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M52 68L60 76L68 68"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {index > 3 && index < 7 && (
        <div className="absolute -left-8 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
          <svg width="68" height="44" viewBox="0 0 68 44" fill="none" className="text-indigo-300/70">
            <path
              d="M62 32C46 12 26 12 10 22"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 14L10 22L19 29"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  )
}

export default function Home(){
  return (
    <>
      <SEO title="Home" description="Your smart path to global education - expert guidance for admissions, visas, and scholarships worldwide." />

      <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-[#eef2ff]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 20%, rgba(48,86,211,0.12), transparent 20%), radial-gradient(circle at 80% 0%, rgba(244,114,182,0.14), transparent 22%)'
          }}
        ></div>

        <Hero
          eyebrow="Premium mentorship for global admits"
          title="Global education, designed like a product launch"
          subtitle="Strategy, essays, scholarships, visas, and arrival - handled by a senior team so you move with clarity and confidence."
          backgroundImage="/site-visuals/campus-walk-footsteps.webp"
          ctas={
            <>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
                <span className="absolute inset-0 opacity-70 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
                <span className="relative flex items-center gap-2">
                  Book a free consultation
                  <FaArrowRight />
                </span>
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md"
              >
                Explore services
              </motion.a>
            </>
          }
        />

        <section className="container -mt-14 pb-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 backdrop-blur px-5 py-6 shadow-[0_18px_70px_-32px_rgba(15,23,42,0.35)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
                <p className="text-sm text-gray-500">{item.label}</p>
                <div className="mt-3 text-4xl font-semibold text-gray-900">{item.value}</div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <section className="container py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Why families choose us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">Every milestone handled with clarity</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Strategy first, documents next. We run deep discovery, co-create narratives, and stress-test your applications and visa files so you move without second guessing.
            </p>
            <div className="space-y-3">
              {[
                { icon: <FaCheckCircle className="text-emerald-500" />, text: 'White-glove essays, recommendations, and document review.' },
                { icon: <FaHeadset className="text-indigo-500" />, text: 'Dedicated counsellor + alumni mentor for your target country.' },
                { icon: <FaTrophy className="text-amber-500" />, text: 'Scholarship positioning with realistic targets and timelines.' }
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/countries" className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 text-brand-blue px-4 py-2 font-semibold hover:bg-brand-blue/5">
                View top destinations
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-4 py-2 font-semibold shadow-lg hover:shadow-xl">
                Start with a call
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <JourneyCarousel />
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                'Profile-first roadmaps with realistic timelines',
                'Weekly checkpoints for students and parents',
                'Arrival support that continues after the visa'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/70 bg-white/85 px-4 py-3 text-sm font-medium text-gray-700 shadow-[0_18px_70px_-32px_rgba(15,23,42,0.2)]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-[#f7f9ff] to-[#eef2ff] py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built to take you from intent to arrival</h2>
            <p className="text-lg text-gray-700 mt-3">Full-stack support for applications, scholarships, visas, and your first day on campus.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, index) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ServiceCard title={s.title} icon={s.icon} description={s.description} imageSrc={s.image} eyebrow={s.eyebrow} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A clear, guided path</h2>
          <p className="text-lg text-gray-700 mt-3">From profile deep-dive to visa stamping, you always know what happens next.</p>
        </div>

        <div className="grid gap-x-4 gap-y-12 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`relative ${processLgOrder[i]}`}
            >
              <ProcessConnector index={i} isLast={i === steps.length - 1} />
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_70px_-32px_rgba(15,23,42,0.35)] backdrop-blur">
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-indigo-500 text-xs font-semibold text-white shadow">
                  {i + 1}
                </div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-xl text-brand-blue">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-blue/10 via-white to-indigo-50 py-14">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Destinations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">30+ countries, curated starters below</h2>
              <p className="text-lg text-gray-700 mt-2">Pick a country to explore entry requirements, scholarships, and visas.</p>
            </div>
            <a href="/countries" className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 text-brand-blue px-4 py-2 font-semibold hover:bg-brand-blue/5">
              View all countries
              <FaArrowRight />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {countries.map((c, index) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <a href={`/countries/${c.toLowerCase().replace(/\s/g, '-')}`}>
                  <CountryCard country={c} flagSrc={getCountryFlag(c)} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07111f] py-16 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-500/12 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-500/8 blur-3xl" />
        </div>
        <div className="container">
          <div className="relative mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">Proof</p>
              <h2 className="text-3xl font-bold leading-snug md:text-5xl">Outcomes families can actually trust</h2>
              <p className="text-lg leading-relaxed text-white/72">
                This section should answer one question fast: do these people actually convert strategy into admits, scholarships, and approvals? Yes, and the signals are visible.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold">
                <FaTrophy className="text-amber-300" /> Scholarship-led admits
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold">
                <FaGlobe className="text-emerald-300" /> 30+ destinations
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold">
                <FaHeadset className="text-blue-200" /> High-touch guidance
              </div>
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {proofMetrics.map((item) => (
                <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <p className="mt-2 text-sm font-semibold text-white/92">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/58">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    Success board
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">1500+ stories</span>
                </div>
                <Image
                  src="/site-visuals/success-stories-collage.webp"
                  alt="Smart Scholar success stories collage"
                  width={1600}
                  height={1100}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-6">
                  <p className="text-xl font-semibold text-white">Visible outcomes across admits, scholarships, and student confidence.</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/72">
                    The point is not just volume. It is consistency across intakes, geographies, and student starting points.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/4 p-4 backdrop-blur">
                <TestimonialCarousel />
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {proofSignals.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                  <div className="text-lg">{item.icon}</div>
                  <p className="mt-3 font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/58">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/4 min-h-[280px]">
                <Image
                  src="/site-visuals/visa-approved-passport.webp"
                  alt="Visa approval proof"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                <div className="absolute inset-x-0 top-0 p-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    <FaPassport className="text-emerald-300" />
                    Visa confidence
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <p className="text-xl font-semibold text-white">Prepared for the most fragile step in the journey.</p>
                  <p className="mt-2 max-w-md text-sm text-white/72">Interview rehearsal, explanation framing, and final document control before submission.</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-white/5 to-white/0 p-6 backdrop-blur min-h-[280px]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">What families feel</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Calm, structured progress.</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/68">
                  Students know the next move and parents can see the logic behind every recommendation.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                    <div className="flex items-center gap-3 text-sm font-semibold text-white">
                      <FaCheckCircle className="text-emerald-300" />
                      Clear next steps
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/58">Timeline, documents, and deadlines stay aligned.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                    <div className="flex items-center gap-3 text-sm font-semibold text-white">
                      <FaCheckCircle className="text-emerald-300" />
                      Support through departure
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/58">Guidance continues through visa, travel planning, and arrival.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-blue to-indigo-600 text-white py-14">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Let&apos;s move</p>
            <h3 className="text-3xl font-bold">Ready to design your admit?</h3>
            <p className="text-white/80 mt-2">Book a free consultation and get a clear checklist tailored to you.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-brand-blue px-5 py-3 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Book a call
            </a>
            <a
              href="https://wa.me/919391572075"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
