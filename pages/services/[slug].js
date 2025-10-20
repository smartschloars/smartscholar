import { useRouter } from 'next/router'
import SEO from '../../components/SEO'
import Hero from '../../components/Hero'

const data = {
  'career-counselling': {
    title: 'Career Counselling',
    banner: '/og-ielts.png',
    content: `Career counselling helps individuals navigate their professional journey with clarity and confidence. Our advisors evaluate academic background, interests, and market trends to recommend study paths, skill development and realistic timelines for admission and career goals.`
  },
  'course-selection': {
    title: 'Course Selection',
    banner: '/og-usa.png',
    content: `Course selection ensures students choose educational paths that align with their interests and career goals. We map courses to outcomes and advise on credit transfer, duration and cost.`
  },
  'university-selection': {
    title: 'University Selection',
    banner: '/og-usa.png',
    content: `University selection involves choosing institutions that best fit an individual's academic aspirations and resources. We shortlist universities by fit, ranking, placement records and scholarship opportunities.`
  },
  'scholarship-assistance': {
    title: 'Scholarship Assistance',
    banner: '/og-ielts.png',
    content: `Scholarship assistance guides students in identifying and applying for financial support to pursue their academic goals effectively. We help with eligibility checks, essay review and deadline management.`
  },
  'visa-assistance': {
    title: 'Visa Assistance',
    banner: '/og-usa.png',
    content: `Visa assistance facilitates the process of obtaining necessary documentation for international study or work opportunities. Our team reviews documents, prepares submissions and supports interview preparation.`
  },
  'pre-departure-guide': {
    title: 'Pre-departure Guide',
    banner: '/og-usa.png',
    content: `A pre-departure guide equips individuals with essential information to ease their transition into studying or working abroad. We cover travel, accommodation, cultural adaptation and checklists.`
  }
}

export default function ServiceDetail(){
  const { query } = useRouter()
  const slug = query.slug || ''
  const item = data[slug]
  if(!item) return <div className="container py-12">Service not found.</div>

  // derive image path
  // prefer uploaded banner in public/banners/<slug>.svg
  const bannerPath = `/banners/${slug}.svg`
  const imagePath = bannerPath // use banner as og:image
  return (
    <>
      <SEO title={item.title} image={imagePath} />
      <Hero title={item.title} subtitle="SmartScholar - expert guidance at every step" ctas={<a href="/contact" className="px-4 py-2 bg-brand-blue text-white rounded">Contact Us</a>} />

      <section className="container py-12">
        <div className="rounded overflow-hidden shadow">
          <div className="h-56 w-full bg-gray-100 flex items-center justify-center">
            <img src={item.banner} alt={item.title} className="h-48 object-contain" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="mt-4 text-gray-700">{item.content}</p>
            <div className="mt-6 text-sm text-gray-600">For more details or to start your application, contact us at <a href="mailto:info@mysmartscholar.com" className="text-brand-blue">info@mysmartscholar.com</a> or call <a href="tel:+919391572075" className="text-brand-blue">+91 93915 72075</a>.</div>
          </div>
        </div>
      </section>
    </>
  )
}
