import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

const stories = [
  { quote: 'SmartScholar structured everything for me - shortlist, SOPs, and mock visas. I landed a scholarship I did not think was possible.', author: 'Aarya R.', program: 'MSc Data Science, UK' },
  { quote: 'Weekly updates kept my parents calm. The visa file review and interview coaching were game-changers.', author: 'Rahul T.', program: 'MS Computer Engineering, USA' },
  { quote: 'I was unsure about scholarships. They positioned my profile so well that I got 60% tuition covered.', author: 'Meghana S.', program: 'MBA, Canada' },
  { quote: 'Their editors turned my SOP around in a week and it read like my story, not a template. Visa approved in the first attempt.', author: 'Harish P.', program: 'Masters in Engineering, Germany' },
  { quote: 'From IELTS prep to accommodation guidance, the team stayed on until I reached campus.', author: 'Sana K.', program: 'Masters in Architecture, Australia' },
  { quote: 'Transparent, process-driven, and kind. I always knew the next step.', author: 'Vivek L.', program: 'Bachelors in Business, New Zealand' },
]

export default function Testimonials(){
  return (
    <>
      <SEO title="Testimonials" />
      <Hero
        eyebrow="Student voices"
        title="Stories from students who trusted SmartScholar"
        subtitle="A few highlights from the applications, scholarships, and visa approvals we have guided."
        ctas={<a href="/contact" className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white"><span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" /><span className="absolute inset-0 opacity-70 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" /><span className="relative">Start your story</span></a>}
      />

      <section className="bg-gradient-to-b from-white via-[#f7f9ff] to-[#eef2ff] py-12 lg:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <motion.div
                key={story.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/70 bg-white/90 backdrop-blur p-6 shadow-[0_20px_70px_-32px_rgba(15,23,42,0.4)]"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 mb-4 leading-relaxed">"{story.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{story.author}</p>
                  <p className="text-sm text-gray-600">{story.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
