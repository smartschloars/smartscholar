import { motion } from 'framer-motion'

export default function Hero({title, subtitle, ctas, backgroundImage, eyebrow}){
  const hasBackgroundImage = backgroundImage

  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden min-h-[460px] flex items-center justify-center"
      style={hasBackgroundImage ? {
        backgroundImage: `linear-gradient(120deg, rgba(12, 18, 35, 0.7), rgba(12, 18, 35, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Dark overlay for text readability */}
      {hasBackgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      )}

      {/* Background for non-image hero sections */}
      {!hasBackgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-gray-50" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(66, 153, 225, 0.08) 1px, transparent 0)',
              backgroundSize: '46px 46px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/40" />
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute -top-52 -right-44 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
              className="absolute -bottom-64 -left-44 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl"
            />
          </div>
        </>
      )}

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase ${
                hasBackgroundImage ? 'bg-white/15 text-white border border-white/20' : 'bg-white text-brand-blue shadow-lg'
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight ${
              hasBackgroundImage ? 'text-white drop-shadow-lg' : ''
            }`}
          >
            <span className={hasBackgroundImage ? 'text-white' : 'bg-gradient-to-r from-gray-900 via-brand-blue to-gray-900 bg-clip-text text-transparent'}>
              {title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              hasBackgroundImage ? 'text-white/90 drop-shadow-md' : 'text-gray-600'
            }`}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {ctas}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
