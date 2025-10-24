import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { FaBullseye, FaLightbulb, FaHandshake, FaTrophy, FaChartLine, FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'

const values = [
  { title: 'Student-Centric', desc: 'Every decision we make is centered on what\'s best for you.', icon: FaBullseye, color: 'from-blue-500 to-blue-600' },
  { title: 'Transparent', desc: 'Clear communication and honest guidance throughout your journey.', icon: FaLightbulb, color: 'from-yellow-500 to-amber-600' },
  { title: 'Supportive', desc: 'We\'re here to guide, encourage and celebrate your success.', icon: FaHandshake, color: 'from-green-500 to-emerald-600' },
  { title: 'Excellence', desc: 'We maintain high standards in every interaction and outcome.', icon: FaTrophy, color: 'from-purple-500 to-purple-600' },
  { title: 'Growth-Focused', desc: 'We help you develop skills for long-term career success.', icon: FaChartLine, color: 'from-indigo-500 to-indigo-600' },
  { title: 'Global Perspective', desc: 'We understand international education landscapes deeply.', icon: FaGlobe, color: 'from-pink-500 to-rose-600' },
]

const testimonials = [
  { quote: "SmartScholar made the whole process simple and stress-free. The team understood my goals and helped me every step of the way.", author: "A. Kumar", role: "University of UK" },
  { quote: "Excellent guidance and real results. I got into my dream university with a scholarship!", author: "S. Reddy", role: "Student, USA" },
  { quote: "The personalized approach really sets them apart. Highly recommended!", author: "P. Singh", role: "Canada, Class of 2024" },
]

export default function About(){
  return (
    <>
      <SEO title="About" />
      <Hero
        title="About SmartScholar"
        subtitle="We help students build global careers with clear guidance, end-to-end support and trusted partnerships."
        ctas={<a href="/contact" className="px-4 py-2 bg-brand-blue text-white rounded">Contact Us</a>}
      />

      {/* Who We Are Section */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              SmartScholar is a modern education consultancy helping students and professionals take the next step abroad.
              We provide personalised career counselling, application support, scholarship guidance and visa assistance —
              every step is tailored to the individual.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since our inception, we've helped hundreds of students secure admissions and scholarships at top universities worldwide. Our mission is simple: make global education accessible and achievable.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-700">Students Successfully Placed</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-700">Universities & Colleges Partnerships</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">$2M+</h3>
              <p className="text-gray-700">Scholarships Secured for Students</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            These principles guide everything we do and shape how we serve our students.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full hover:scale-105">
                  <div className={`bg-gradient-to-br ${value.color} rounded-lg p-3 w-fit mb-4`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="container py-16">
        <div className="bg-gradient-to-br from-brand-blue via-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Approach</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  We combine up-to-date immigration knowledge with personalised support. Our team focuses on clear timelines, documentation guidance, and practical coaching so applicants feel confident and prepared.
                </p>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Personalized 1-on-1 sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Comprehensive document support
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Interview preparation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">Experience & Outreach</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  We run workshops, university fairs and one-on-one sessions to help applicants find the best-fit programs and secure admission with scholarship opportunities where possible.
                </p>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Monthly workshops
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    University partnership network
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Career counseling services
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Hear from students who have successfully navigated their study abroad journey with us.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today for a free consultation and let us help you achieve your study abroad goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Book a Free Consultation
            </a>
            <a href="tel:+919391572075" className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Call Us: +91 93915 72075
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
