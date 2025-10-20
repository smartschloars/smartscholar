import SEO from '../components/SEO'
import Link from 'next/link'

const countries = [
  { name: 'Australia', slug: 'australia', url: 'https://www.vaaradhioverseas.com/australia-study-abroad-consultants-in-hyderabad' },
  { name: 'United Kingdom', slug: 'uk', url: 'https://www.vaaradhioverseas.com/uk-study-abroad-consultants-in-hyderabad' },
  { name: 'United States', slug: 'usa', url: 'https://www.vaaradhioverseas.com/usa-study-abroad-consultants-in-hyderabad' },
  { name: 'Canada', slug: 'canada', url: 'https://www.vaaradhioverseas.com/canada-study-abroad-consultants-in-hyderabad' },
  { name: 'New Zealand', slug: 'new-zealand', url: 'https://www.vaaradhioverseas.com/new-zealand-study-abroad-consultants-in-hyderabad' },
  { name: 'Ireland', slug: 'ireland', url: 'https://www.vaaradhioverseas.com/ireland-study-abroad-consultants-in-hyderabad' },
  { name: 'France', slug: 'france', url: 'https://www.vaaradhioverseas.com/france-study-abroad-consultants-in-hyderabad' },
  { name: 'Germany', slug: 'germany', url: 'https://www.vaaradhioverseas.com/germany-study-abroad-consultants-in-hyderabad' },
  { name: 'Mauritius', slug: 'mauritius', url: 'https://www.vaaradhioverseas.com/mauritius-study-abroad-consultants-in-hyderabad' },
  { name: 'Luxembourg', slug: 'luxembourg', url: 'https://www.vaaradhioverseas.com/luxembourg-free-education-study-abroad-consultants-in-hyderabad' },
  { name: 'Cyprus', slug: 'cyprus', url: 'https://www.vaaradhioverseas.com/cyprus-study-abroad-consultants-in-hyderabad' },
  { name: 'Netherlands', slug: 'netherlands', url: 'https://www.vaaradhioverseas.com/netherlands-study-abroad-consultants-in-hyderabad' },
  { name: 'Finland', slug: 'finland', url: 'https://www.vaaradhioverseas.com/finland-study-abroad-consultants-in-hyderabad' },
  { name: 'Poland', slug: 'poland', url: 'https://www.vaaradhioverseas.com/poland-study-abroad-consultants-in-hyderabad' },
  { name: 'Sweden', slug: 'sweden', url: 'https://www.vaaradhioverseas.com/swedan-study-abroad-consultants-in-hyderabad' },
  { name: 'Spain', slug: 'spain', url: 'https://www.vaaradhioverseas.com/spain-study-abroad-consultants-in-hyderabad' },
  { name: 'Malta', slug: 'malta', url: 'https://www.vaaradhioverseas.com/malta-study-abroad-consultants-in-hyderabad' },
  { name: 'Greece', slug: 'greece', url: 'https://www.vaaradhioverseas.com/greece-study-abroad-consultants-in-hyderabad' },
  { name: 'Italy', slug: 'italy', url: 'https://www.vaaradhioverseas.com/italy-study-abroad-consultants-in-hyderabad' },
  { name: 'Latvia', slug: 'latvia', url: 'https://www.vaaradhioverseas.com/latvia-study-abroad-consultants-in-hyderabad' },
  { name: 'Lithuania', slug: 'lithuania', url: 'https://www.vaaradhioverseas.com/lithuania-study-abroad-consultants-in-hyderabad' },
  { name: 'Czech Republic', slug: 'czech-republic', url: 'https://www.vaaradhioverseas.com/czech-republic-study-abroad-consultants-in-hyderabad' },
  { name: 'Denmark', slug: 'denmark', url: 'https://www.vaaradhioverseas.com/Denmark-study-abroad-consultants-in-hyderabad' },
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
  <div className="w-full bg-fixed bg-center bg-cover" style={{backgroundImage:'url(/banners/study-destination.jpg)'}}>
        <div className="bg-black bg-opacity-40 py-20">
          <div className="container text-center text-white">
            <h1 className="text-4xl font-bold">Study Destinations</h1>
            <p className="mt-3">Explore top countries to study abroad and learn more about programs, visas and scholarships.</p>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map(c=> (
            <div key={c.slug} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-40 w-full">
                <img src={`/banners/${c.slug}.svg`} alt={c.name} className="h-40 w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{c.name}</h3>
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
