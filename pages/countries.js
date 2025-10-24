import SEO from '../components/SEO'
import Link from 'next/link'
import { motion } from 'framer-motion'

const countries = [
  { name: 'Australia', slug: 'australia', flag: '🇦🇺', banner: '/banners/australia.png', url: 'https://www.vaaradhioverseas.com/australia-study-abroad-consultants-in-hyderabad' },
  { name: 'United Kingdom', slug: 'uk', flag: '🇬🇧', banner: '/banners/uk.png', url: 'https://www.vaaradhioverseas.com/uk-study-abroad-consultants-in-hyderabad' },
  { name: 'United States', slug: 'usa', flag: '🇺🇸', banner: '/banners/usa.png', url: 'https://www.vaaradhioverseas.com/usa-study-abroad-consultants-in-hyderabad' },
  { name: 'Canada', slug: 'canada', flag: '🇨🇦', banner: '/banners/canada.png', url: 'https://www.vaaradhioverseas.com/canada-study-abroad-consultants-in-hyderabad' },
  { name: 'New Zealand', slug: 'new-zealand', flag: '🇳🇿', banner: '/banners/new-zealand.png', url: 'https://www.vaaradhioverseas.com/new-zealand-study-abroad-consultants-in-hyderabad' },
  { name: 'Ireland', slug: 'ireland', flag: '🇮🇪', banner: '/banners/ireland.png', url: 'https://www.vaaradhioverseas.com/ireland-study-abroad-consultants-in-hyderabad' },
  { name: 'France', slug: 'france', flag: '🇫🇷', banner: '/banners/france.png', url: 'https://www.vaaradhioverseas.com/france-study-abroad-consultants-in-hyderabad' },
  { name: 'Germany', slug: 'germany', flag: '🇩🇪', banner: '/banners/germany.png', url: 'https://www.vaaradhioverseas.com/germany-study-abroad-consultants-in-hyderabad' },
  { name: 'Mauritius', slug: 'mauritius', flag: '🇲🇺', banner: '/banners/mauritius.png', url: 'https://www.vaaradhioverseas.com/mauritius-study-abroad-consultants-in-hyderabad' },
  { name: 'Luxembourg', slug: 'luxembourg', flag: '🇱🇺', banner: '/banners/luxembourg.png', url: 'https://www.vaaradhioverseas.com/luxembourg-free-education-study-abroad-consultants-in-hyderabad' },
  { name: 'Cyprus', slug: 'cyprus', flag: '🇨🇾', banner: '/banners/cyprus.png', url: 'https://www.vaaradhioverseas.com/cyprus-study-abroad-consultants-in-hyderabad' },
  { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱', banner: '/banners/netherlands.png', url: 'https://www.vaaradhioverseas.com/netherlands-study-abroad-consultants-in-hyderabad' },
  { name: 'Finland', slug: 'finland', flag: '🇫🇮', banner: '/banners/finland.png', url: 'https://www.vaaradhioverseas.com/finland-study-abroad-consultants-in-hyderabad' },
  { name: 'Poland', slug: 'poland', flag: '🇵🇱', banner: '/banners/poland.png', url: 'https://www.vaaradhioverseas.com/poland-study-abroad-consultants-in-hyderabad' },
  { name: 'Sweden', slug: 'sweden', flag: '🇸🇪', banner: '/banners/sweden.png', url: 'https://www.vaaradhioverseas.com/swedan-study-abroad-consultants-in-hyderabad' },
  { name: 'Spain', slug: 'spain', flag: '🇪🇸', banner: '/banners/spain.png', url: 'https://www.vaaradhioverseas.com/spain-study-abroad-consultants-in-hyderabad' },
  { name: 'Malta', slug: 'malta', flag: '🇲🇹', banner: '/banners/malta.png', url: 'https://www.vaaradhioverseas.com/malta-study-abroad-consultants-in-hyderabad' },
  { name: 'Greece', slug: 'greece', flag: '🇬🇷', banner: '/banners/greece.png', url: 'https://www.vaaradhioverseas.com/greece-study-abroad-consultants-in-hyderabad' },
  { name: 'Italy', slug: 'italy', flag: '🇮🇹', banner: '/banners/italy.png', url: 'https://www.vaaradhioverseas.com/italy-study-abroad-consultants-in-hyderabad' },
  { name: 'Latvia', slug: 'latvia', flag: '🇱🇻', banner: '/banners/latvia.png', url: 'https://www.vaaradhioverseas.com/latvia-study-abroad-consultants-in-hyderabad' },
  { name: 'Lithuania', slug: 'lithuania', flag: '🇱🇹', banner: '/banners/lithuania.png', url: 'https://www.vaaradhioverseas.com/lithuania-study-abroad-consultants-in-hyderabad' },
  { name: 'Czech Republic', slug: 'czech-republic', flag: '🇨🇿', banner: '/banners/czech-republic.png', url: 'https://www.vaaradhioverseas.com/czech-republic-study-abroad-consultants-in-hyderabad' },
  { name: 'Denmark', slug: 'denmark', flag: '🇩🇰', banner: '/banners/denmark.png', url: 'https://www.vaaradhioverseas.com/Denmark-study-abroad-consultants-in-hyderabad' },
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
  mauritius: ['Le Morne Brabant', 'Trou aux Cerfs'],
  luxembourg: ['Vianden Castle', 'Old Quarter'],
  cyprus: ['Aphrodite Rock', 'Kyrenia Harbour'],
  netherlands: ['Rijksmuseum', 'Canals of Amsterdam'],
  finland: ['Helsinki Cathedral', 'Northern Lights (Lapland)'],
  poland: ['Wawel Castle', 'Old Town Warsaw'],
  sweden: ['Gamla Stan', 'Vasa Museum'],
  spain: ['Sagrada Familia', 'Alhambra'],
  malta: ['Valletta', 'Blue Lagoon'],
  greece: ['Acropolis', 'Santorini Caldera'],
  italy: ['Colosseum', 'Venice Canals'],
  latvia: ['Riga Old Town', 'Gauja National Park'],
  lithuania: ['Vilnius Old Town', 'Trakai Castle'],
  'czech-republic': ['Prague Castle', 'Charles Bridge'],
  denmark: ['Nyhavn', 'Tivoli Gardens'],
}

export default function Countries(){
  return (
    <>
      <SEO title="Countries" />
      <div className="relative w-full min-h-[450px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue via-blue-600 to-blue-800">
        {/* Decorative mesh pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 text-center text-white py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
            Study Destinations
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Explore top countries to study abroad and learn more about programs, visas and scholarships.
          </motion.p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map(c=> (
            <div key={c.slug} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-40 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                {c.banner ? (
                  <img src={c.banner} alt={c.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-6xl">{c.flag}</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2"><span>{c.flag}</span> {c.name}</h3>
                <p className="text-sm text-gray-600 mt-2">Learn about studying in {c.name}, universities, entry requirements and scholarships.</p>
                {famousPlaces[c.slug] && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {famousPlaces[c.slug].map(place => (
                      <span key={place} className="text-xs bg-gray-100 px-2 py-1 rounded">{place}</span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex justify-end items-center">
                  <Link href={`/countries/${c.slug}`} className="text-brand-blue font-semibold">Read more →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
