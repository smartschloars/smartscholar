import { motion } from 'framer-motion'

export default function Hero({title, subtitle, ctas, backgroundImage}){
  const hasBackgroundImage = backgroundImage

  return (
    <section 
      className="relative py-16 md:py-24 lg:py-32 text-center overflow-hidden min-h-[400px] flex items-center justify-center"
      style={hasBackgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Dark overlay for text readability */}
      {hasBackgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      )}
      
      {/* Background for non-image hero sections */}
      {!hasBackgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-gray-50"></div>
          {/* Background mesh pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(66, 153, 225, 0.08) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
        </>
      )}

      <div className="container relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold ${
            hasBackgroundImage 
              ? 'text-white drop-shadow-lg' 
              : ''
          }`}>
          <span className={hasBackgroundImage 
            ? 'text-white' 
            : 'bg-gradient-to-r from-gray-900 via-brand-blue to-gray-900 bg-clip-text text-transparent'
          }>
            {title}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 text-lg md:text-xl max-w-3xl mx-auto ${
            hasBackgroundImage 
              ? 'text-white/90 drop-shadow-md' 
              : 'text-gray-600'
          }`}>
          {subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {ctas}
        </motion.div>
      </div>
    </section>
  )
}
