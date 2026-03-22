import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Link from 'next/link'
import CountryCard from '../components/CountryCard'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const countries = [
  { name: 'Australia', slug: 'australia', banner: '/banners/australia.png' },
  { name: 'United Kingdom', slug: 'uk', banner: '/banners/uk.png' },
  { name: 'United States', slug: 'usa', banner: '/banners/usa.png' },
  { name: 'Canada', slug: 'canada', banner: '/banners/canada.png' },
  { name: 'New Zealand', slug: 'new-zealand', banner: '/banners/new-zealand.png' },
  { name: 'Ireland', slug: 'ireland', banner: '/banners/ireland.png' },
  { name: 'France', slug: 'france', banner: '/banners/france.png' },
  { name: 'Germany', slug: 'germany', banner: '/banners/germany.png' },
]

const famousPlaces = {
  australia: ['Sydney Opera House', 'Great Barrier Reef'],
  uk: ['Tower Bridge', 'Stonehenge'],
  usa: ['Statue of Liberty', 'Grand Canyon'],
  canada: ['CN Tower', 'Niagara Falls'],
  'new-zealand': ['Milford Sound', 'Sky Tower'],
  ireland: ['Cliffs of Moher', 'Trinity College'],
  france: ['Eiffel Tower', 'Louvre Museum'],
  germany: ['Brandenburg Gate', 'Neuschwanstein Castle'],
}

const featuredDestinations = [
  {
    name: 'United Kingdom',
    slug: 'uk',
    image: '/site-visuals/classical-campus-steps.webp',
    badge: 'Heritage + outcomes',
    blurb: 'Historic universities, focused degrees, and fast-moving postgraduate pathways.',
  },
  {
    name: 'Germany',
    slug: 'germany',
    image: '/site-visuals/stem-lab-germany.webp',
    badge: 'STEM strength',
    blurb: 'Tuition-friendly options with strong engineering, research, and industry links.',
  },
  {
    name: 'Australia',
    slug: 'australia',
    image: '/site-visuals/campus-aerial-sunny.webp',
    badge: 'Campus life',
    blurb: 'High-quality student experience, practical learning, and post-study work routes.',
  },
  {
    name: 'Canada',
    slug: 'canada',
    image: '/site-visuals/research-campus-autumn.webp',
    badge: 'Research + safety',
    blurb: 'Welcoming campuses, strong research systems, and a balanced student lifestyle.',
  },
]

export default function Countries(){
  return (
    <>
      <SEO title="Countries" />
      <Hero
        eyebrow="Destinations"
        title="Top study destinations, simplified"
        subtitle="Entry requirements, scholarships, visas, and timelines for each country - curated by counsellors who have placed students there."
        backgroundImage="/site-visuals/global-network-globe.webp"
        ctas={
          <>
            <Link href="/contact" className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="absolute inset-0 opacity-70 blur-lg bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-500" />
              <span className="relative flex items-center gap-2">
                Talk to a counsellor
                <FaArrowRight />
              </span>
            </Link>
            <a href="#countries-grid" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md">
              Browse countries
            </a>
          </>
        }
      />

      <section className="container -mt-10 pb-4">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredDestinations.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <Link
                href={`/countries/${item.slug}`}
                className="group relative block min-h-[300px] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_24px_90px_-45px_rgba(15,23,42,0.45)]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.08) 0%, rgba(15,23,42,0.82) 100%), url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/15 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-end p-5">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {item.badge}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{item.blurb}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-[#f7f9ff] to-[#eef2ff] py-12 lg:py-16" id="countries-grid">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Pick a destination</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore requirements and next steps</h2>
              <p className="text-lg text-gray-700 mt-2 max-w-2xl">Each country page includes admission tips, visa pointers, and scholarships we actively secure for students.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 text-brand-blue px-4 py-2 font-semibold hover:bg-brand-blue/5">
              See how we help
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {countries.map((c, idx) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link href={`/countries/${c.slug}`} className="block h-full">
                  <CountryCard country={c.name} flagSrc={c.banner} alt={`${c.name} flag`} />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {famousPlaces[c.slug]?.map(place => (
                      <span key={place} className="text-xs bg-white border border-gray-100 rounded-full px-2.5 py-1 text-gray-600 shadow-sm">{place}</span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
