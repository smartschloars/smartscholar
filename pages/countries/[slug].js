import { useRouter } from 'next/router'
import SEO from '../../components/SEO'
import Hero from '../../components/Hero'
import CountryContent from '../../components/CountryContent'

const data = {
  'australia': { title:'Study in Australia', banner:'/banners/australia.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Australia</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Globally Recognised Qualifications</strong> — Australian universities are internationally respected for high academic standards; degrees and diplomas are recognised worldwide.</li>
        <li><strong>World-Class Education System</strong> — Universities emphasize practical learning, critical thinking and innovation to prepare students for global job markets.</li>
        <li><strong>Wide Range of Courses and Institutions</strong> — Over 1,200 institutions offer more than 22,000 courses across business, IT, health sciences, engineering and creative arts.</li>
        <li><strong>Post-Study Work Opportunities</strong> — Graduates can stay and work in Australia for 2–6 years depending on qualification and location via the Temporary Graduate Visa (subclass 485).</li>
        <li><strong>Affordable Living and Study Costs</strong> — Competitive tuition and living costs compared to other major destinations, plus many scholarship options.</li>
        <li><strong>Work While You Study</strong> — International students may work up to 48 hours per fortnight during study and unlimited hours during holidays to help with living costs.</li>
        <li><strong>Safe, Friendly, and Multicultural Society</strong> — A welcoming environment and strong community support make Australia comfortable for international students.</li>
        <li><strong>Research and Innovation Opportunities</strong> — Participate in cutting-edge research, especially in technology, environmental science and medicine.</li>
        <li><strong>Scholarships and Financial Aid</strong> — Government and institutional scholarships like Australia Awards and Destination Australia are available for eligible students.</li>
        <li><strong>Quality of Life and Beautiful Environment</strong> — High standard of living with clean cities and stunning natural landscapes for a balanced student life.</li>
        <li><strong>Pathway to Permanent Residency</strong> — Skilled qualifications and work experience can lead to pathways for permanent residency for many graduates.</li>
      </ul>

      <p className="mt-4 text-gray-700">SmartScholar provides end-to-end support: personalised university shortlists, application assistance, scholarship searches, visa filing and pre-departure orientation to help you start your Australian journey confidently.</p>
    </>
  ) },
  'uk': { title:'Study in United Kingdom', banner:'/banners/uk.png', content:(
    <>
      <h3 className="text-xl font-semibold">About UK</h3>
      <p className="mt-3 text-gray-700">The United Kingdom (UK) is one of the main economic hubs of Europe. It also holds the same reputation regarding quality education offered in its four state countries including Wales, Scotland, Britain and Northern Ireland. The UK is one of the most exciting places that an international student may choose to further their education qualifications.</p>

      <h3 className="text-xl font-semibold mt-6">Plenty of Courses</h3>
      <p className="mt-3 text-gray-700">There are over 38,000 courses on offer that international students may apply to be enrolled for. This varies from information technology, medicine, economics, and zoology to archaeology. The system is well tailored to ensure student participation which guarantees the full development of their potential. UK universities are among the best ranked in the world with four from the list of the best six in the world being UK universities. With the emphasis and investment in research studies in the UK, students benefit from high-quality education. International students, especially those from non-English speaking countries, greatly enhance their language skills — an important asset in today’s global job market.</p>

      <h3 className="text-xl font-semibold mt-6">History of Cultural Diversity</h3>
      <p className="mt-3 text-gray-700">UK universities were among the first in the world to admit international students. The trend continues to increase with more than 100,000 international students being admitted in British universities alone. The welcoming, diverse cultural setting and easy adaptability of life make it easy for international students to fit in quickly. The UK ranges from advanced cosmopolitan cities such as London and Cardiff to historic countryside regions such as Yorkshire. Undergraduate, graduate, and postgraduate curricula tend to be shorter compared to some other countries — many undergraduate programs are three years instead of four. Shorter degree durations can reduce overall cost and allow students to enter the job market earlier.</p>

      <h3 className="text-xl font-semibold mt-6">Work and Study</h3>
      <p className="mt-3 text-gray-700">International students in the UK are permitted to work while studying — typically up to 20 hours per week during term time and full-time during vacation periods. During holidays institutions allow full-time work. Students from modest backgrounds may also apply for financial assistance with tuition. These factors make the UK attractive for students who value both academic quality and cost-effectiveness.</p>

      <p className="mt-4 text-gray-700">SmartScholar services include tailored course and university selection, application and SOP support, scholarship guidance, visa application assistance, and pre-departure briefings to help you make a smooth transition to the UK.</p>
      
      <h3 className="text-xl font-semibold mt-6">You'll Gain Recognised &amp; Respected Qualification</h3>
      <p className="mt-3 text-gray-700">Like all levels of UK education, UK postgraduate qualifications are respected and valued around the world. A master’s degree, PhD or MBA from a UK university will give you a competitive edge.</p>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Quality Education and World-Class Universities</strong> — Learn from leading experts in modern teaching and research facilities.</li>
        <li><strong>Wide Range of Courses and Specialisations</strong> — Thousands of courses across disciplines so you can tailor your degree to your career goals.</li>
        <li><strong>Shorter Duration and Cost-Effective Programs</strong> — Many undergraduate degrees are three years and master’s programs are often one year.</li>
        <li><strong>Work While You Study</strong> — Part-time work up to 20 hours/week during terms and full-time during breaks.</li>
        <li><strong>Post-Study Work Opportunities</strong> — Stay and work under the Graduate Route (up to two years; three for PhD graduates).</li>
        <li><strong>Scholarships and Financial Support</strong> — Numerous scholarships and bursaries are available for international students.</li>
        <li><strong>Safe, Multicultural Environment</strong> — A welcoming, inclusive society where students from all over the world can thrive.</li>
      </ul>
    </>
  ) },
  'usa': { title:'Study in United States', banner:'/banners/usa.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in the United States</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>World-Class Education System</strong> — The United States is home to many top-ranked universities known for academic excellence, innovative research, and state-of-the-art facilities, giving students access to high-quality teaching and diverse academic opportunities.</li>
        <li><strong>Wide Range of Courses and Majors</strong> — From engineering and business to fine arts and healthcare, U.S. universities offer thousands of courses and specialisations, allowing you to design a flexible curriculum aligned with your career goals.</li>
        <li><strong>Cutting-Edge Research and Technology</strong> — The U.S. leads in innovation; students get hands-on experience with the latest labs, technology and projects, often collaborating with industry professionals.</li>
        <li><strong>Flexible Education System</strong> — American universities let you choose subjects, change majors and combine disciplines to explore interests and build a broad academic foundation.</li>
        <li><strong>Cultural Diversity and Global Exposure</strong> — The U.S. attracts students from across the world; studying there offers exposure to multiple cultures and perspectives, preparing you for global workplaces.</li>
        <li><strong>Strong Career Opportunities</strong> — A degree from a U.S. institution is highly valued worldwide; graduates are in demand due to problem-solving skills, creativity and leadership.</li>
        <li><strong>Work While You Study</strong> — International students can work part-time (up to 20 hours/week on campus) during semesters and full-time during holidays. OPT and CPT provide practical training opportunities related to your field.</li>
        <li><strong>Scholarships and Financial Aid</strong> — U.S. universities offer scholarships, grants and assistantships for international students based on merit, leadership or need.</li>
        <li><strong>Innovation and Entrepreneurship Hub</strong> — The U.S. fosters creativity and entrepreneurship; students can collaborate with startups and established companies, especially in tech and business hubs.</li>
        <li><strong>Safe and Supportive Learning Environment</strong> — U.S. campuses prioritise student safety and well-being with comprehensive support services like academic advising and healthcare.</li>
        <li><strong>Pathway to a Global Career</strong> — A U.S. degree opens doors worldwide; the skills and experience gained help you build an internationally recognized career.</li>
      </ul>
    </>
  ) },
  'canada': { title:'Study in Canada', banner:'/banners/canada.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Canada</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Globally Recognised Degrees</strong> — Canadian universities and colleges are known for high academic standards; a Canadian qualification is respected worldwide.</li>
        <li><strong>Affordable Education and Living Costs</strong> — Canada offers world-class education at relatively affordable tuition and living expenses, with opportunities to earn while studying.</li>
        <li><strong>Quality Education System</strong> — Canadian institutions focus on practical learning, research excellence and skill development to prepare students for global careers.</li>
        <li><strong>Work While You Study</strong> — International students can work up to 20 hours/week during classes and full-time during scheduled breaks without a separate work permit.</li>
        <li><strong>Post-Graduation Work Opportunities</strong> — The Post-Graduation Work Permit (PGWP) allows graduates to work in Canada for up to three years, offering valuable experience and a pathway to PR.</li>
        <li><strong>Safe and Peaceful Country</strong> — Canada is one of the safest countries with a friendly, inclusive environment for international students.</li>
        <li><strong>Diverse and Multicultural Society</strong> — Canada embraces cultural diversity, giving students exposure to global perspectives and international networks.</li>
        <li><strong>Scholarships and Financial Support</strong> — Government, institutional and private scholarships are available to help students fund their education.</li>
        <li><strong>High Standard of Living</strong> — Excellent healthcare, clean cities and well-developed infrastructure provide a comfortable student life.</li>
        <li><strong>Pathway to Permanent Residency</strong> — Many students transition to PR through programs like Express Entry and Provincial Nominee Programs after gaining work experience.</li>
        <li><strong>Research and Innovation Hub</strong> — Canada leads in research and innovation in technology, health sciences and sustainability, offering real-world project opportunities.</li>
      </ul>
    </>
  ) },
  'new-zealand': { title:'Study in New Zealand', banner:'/banners/new-zealand.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in New Zealand</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Globally Recognised Qualifications</strong> — New Zealand’s universities rank among the top 3% globally and their degrees are respected worldwide.</li>
        <li><strong>Quality Education and Practical Learning</strong> — The system emphasizes hands-on learning and critical thinking to build real-world skills.</li>
        <li><strong>Safe, Peaceful, and Welcoming Country</strong> — New Zealand offers a friendly, inclusive environment with high safety standards.</li>
        <li><strong>Work While You Study</strong> — International students can work up to 20 hours per week during study and full-time during holidays.</li>
        <li><strong>Post-Study Work Opportunities</strong> — Graduates can stay and work for up to three years after completing their degree, depending on qualification and location.</li>
        <li><strong>Affordable Education and Living Costs</strong> — Competitive tuition fees and a high quality of life at reasonable cost.</li>
        <li><strong>Research and Innovation Focus</strong> — Strong research in environmental science, agriculture and technology with opportunities for student participation.</li>
        <li><strong>Scholarships and Support Services</strong> — Government and university scholarships along with comprehensive student support services.</li>
        <li><strong>Breathtaking Natural Environment</strong> — Mountains, beaches and forests offer outdoor lifestyles and adventure for students.</li>
        <li><strong>Pathway to Permanent Residency</strong> — Clear immigration pathways for skilled graduates who wish to settle after gaining experience.</li>
      </ul>
    </>
  ) },
  'ireland': { title:'Study in Ireland', banner:'/banners/ireland.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Ireland</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Globally Recognised Qualifications</strong> — Irish universities rank highly for quality and innovation; degrees are respected worldwide.</li>
        <li><strong>English-Speaking Country</strong> — Studying in English makes academic and social adaptation easier for international students.</li>
        <li><strong>Excellent Post-Study Work Opportunities</strong> — The Graduate Route allows students to stay and work for up to two years after graduation.</li>
        <li><strong>Innovation and Research Excellence</strong> — Ireland is a hub for technology and pharmaceuticals, with partnerships between universities and multinational companies.</li>
        <li><strong>Safe and Friendly Environment</strong> — A welcoming culture and relaxed lifestyle ideal for students.</li>
        <li><strong>Scholarships and Financial Support</strong> — Various scholarships and grants are available for high-achieving international students.</li>
        <li><strong>Gateway to Europe’s Opportunities</strong> — Located in the EU, Ireland provides access to European job markets and travel.</li>
        <li><strong>High Quality of Life</strong> — Clean cities, scenic landscapes and a strong sense of community.</li>
      </ul>
    </>
  ) },
  'france': { title:'Study in France', banner:'/banners/france.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in France</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>World-Class Education and Global Recognition</strong> — France hosts prestigious universities and grandes écoles; degrees are valued worldwide.</li>
        <li><strong>Affordable Tuition and Living Costs</strong> — Public universities charge relatively low fees and the government provides financial and housing support.</li>
        <li><strong>Diverse Range of Programs</strong> — Programs across fashion, arts, engineering, hospitality and business are offered in both English and French.</li>
        <li><strong>Rich Culture and Lifestyle</strong> — Students enjoy art, history and cuisine while living in some of Europe’s most beautiful cities.</li>
        <li><strong>Research and Innovation Opportunities</strong> — Strong investment in research across science, technology and sustainability.</li>
        <li><strong>Post-Study Work Options</strong> — Students may stay for up to two years after graduation to work or gain professional experience.</li>
        <li><strong>Learn a Global Language</strong> — Opportunity to learn or improve French, a valuable global language.</li>
        <li><strong>Central European Location</strong> — Easy travel to neighboring countries like Spain, Germany and Italy.</li>
      </ul>
    </>
  ) },
  'germany': { title:'Study in Germany', banner:'/banners/germany.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Germany</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>World-Class Education at Low or No Cost</strong> — Many public universities charge little to no tuition fees, making Germany an affordable study destination.</li>
        <li><strong>Globally Recognised Universities</strong> — German institutions are renowned for excellence in teaching and research; degrees are valued worldwide.</li>
        <li><strong>Strong Focus on Research and Innovation</strong> — Students benefit from practical research opportunities, modern laboratories and industry collaborations in engineering, technology and science.</li>
        <li><strong>Wide Range of Courses and Programs</strong> — Programs in engineering, IT, business, medicine and the arts are offered in both German and English.</li>
        <li><strong>Excellent Career Opportunities</strong> — Germany’s strong economy and industrial presence create many opportunities for international graduates.</li>
        <li><strong>Post-Study Work and Stay Options</strong> — Graduates can stay for up to 18 months after finishing their degree to look for employment related to their studies.</li>
        <li><strong>Work While You Study</strong> — International students may work part-time up to 20 hours per week to support living costs and gain experience.</li>
        <li><strong>Safe and Modern Living Environment</strong> — Germany offers high standards of living, excellent infrastructure and reliable public transport.</li>
        <li><strong>Scholarships and Financial Assistance</strong> — Funding opportunities via the German government, DAAD and universities help support eligible students.</li>
        <li><strong>Multicultural and Student-Friendly Atmosphere</strong> — A welcoming international student community with cultural events and affordable accommodation options.</li>
        <li><strong>Gateway to Europe</strong> — Germany’s central location makes travel across Europe easy for students exploring the region.</li>
      </ul>
    </>
  ) },
  'mauritius': { title:'Study in Mauritius', banner:'/banners/mauritius.png', content:'Mauritius offers affordable programs and international collaborations. We can help you explore options and apply.' },
  'mauritius': { title:'Study in Mauritius', banner:'/banners/mauritius.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Mauritius</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Quality Education with Global Recognition</strong> — Mauritius hosts internationally accredited universities and branch campuses offering recognised qualifications.</li>
        <li><strong>Affordable Tuition and Living Costs</strong> — Lower fees and living expenses provide excellent value for international students.</li>
        <li><strong>Multicultural and Peaceful Environment</strong> — A friendly, diverse society with political stability and safety.</li>
        <li><strong>English and French as Teaching Languages</strong> — Programs are offered in both languages for broad accessibility.</li>
        <li><strong>Tropical Island Lifestyle</strong> — Students enjoy beaches, warm weather and outdoor activities year-round.</li>
        <li><strong>Career and Regional Opportunities</strong> — Graduates can pursue local or regional employment opportunities with some pathways to work permits.</li>
      </ul>
    </>
  ) },
  'luxembourg': { title:'Study in Luxembourg', banner:'/banners/luxembourg.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Luxembourg</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>High-Quality European Education</strong> — Universities maintain high academic standards with strong international links.</li>
        <li><strong>Multilingual and Multicultural Environment</strong> — French, German and English are commonly used, giving a multilingual learning edge.</li>
        <li><strong>Strategic Location</strong> — Located between France, Belgium and Germany, ideal for European study and travel.</li>
        <li><strong>Small but Elite Institutions</strong> — Personalised learning with small class sizes and close faculty interaction.</li>
        <li><strong>Career Opportunities</strong> — Strong financial and tech sectors offer international career paths.</li>
      </ul>
    </>
  ) },
  'cyprus': { title:'Study in Cyprus', banner:'/banners/cyprus.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Cyprus</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Affordable Education</strong> — Competitive tuition fees and low living costs.</li>
        <li><strong>English-Taught Programs</strong> — Most courses are offered in English, easing international student transition.</li>
        <li><strong>Safe and Friendly Country</strong> — Cyprus is known for safety and a welcoming community.</li>
        <li><strong>Cultural Diversity</strong> — A mix of students from Europe, Asia and Africa creates a vibrant campus life.</li>
        <li><strong>Work While You Study</strong> — Students may work part-time to support living expenses.</li>
        <li><strong>Mediterranean Lifestyle</strong> — Sunny climate and relaxed living balance study and leisure.</li>
      </ul>
    </>
  ) },
  'netherlands': { title:'Study in Netherlands', banner:'/banners/netherlands.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in the Netherlands</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Innovative and High-Quality Education</strong> — Modern teaching methods and research-based learning are core strengths.</li>
        <li><strong>Wide Range of English-Taught Programs</strong> — One of Europe’s largest selections of English programs.</li>
        <li><strong>Affordable Tuition and Scholarships</strong> — Reasonable fees and scholarships like the Holland Scholarship and Erasmus+.</li>
        <li><strong>Work and Stay Opportunities</strong> — The Orientation Year Visa lets graduates stay up to one year to seek work.</li>
        <li><strong>International and Multicultural Environment</strong> — Extremely diverse student body from over 150 nationalities.</li>
        <li><strong>Strategic Location</strong> — Central European location makes travel and internships across Europe convenient.</li>
      </ul>
    </>
  ) },
  'finland': { title:'Study in Finland', banner:'/banners/finland.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Finland</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Innovative and Research-Oriented Education</strong> — Finland emphasises creativity, critical thinking and research excellence.</li>
        <li><strong>English-Taught Programs</strong> — Wide range of degrees are available in English at bachelor’s and master’s levels.</li>
        <li><strong>No Tuition Fees for EU Students</strong> — Competitive fees for non-EU students with many scholarship options.</li>
        <li><strong>Safe, Modern and Student-Friendly</strong> — High safety standards and supportive learning environments.</li>
        <li><strong>High Quality of Life</strong> — Clean environment, modern infrastructure and strong work-life balance.</li>
        <li><strong>Research and Innovation Opportunities</strong> — Strong hubs for technology and design innovation.</li>
      </ul>
    </>
  ) },
  'poland': { title:'Study in Poland', banner:'/banners/poland.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Poland</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>High-Quality, Affordable Education</strong> — Polish universities offer recognised degrees at lower tuition costs.</li>
        <li><strong>Wide Range of English Programs</strong> — Many programs in medicine, engineering, IT and business are offered in English.</li>
        <li><strong>Work and Study Opportunities</strong> — Students can work part-time and full-time during vacations.</li>
        <li><strong>Rich History and Culture</strong> — A mix of medieval architecture and modern cities.</li>
        <li><strong>Safe and Affordable Living</strong> — One of Europe’s most affordable and secure student destinations.</li>
        <li><strong>Post-Study Opportunities</strong> — Graduates may find opportunities in Poland and across the EU.</li>
      </ul>
    </>
  ) },
  'sweden': { title:'Study in Sweden', banner:'/banners/sweden.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Sweden</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>World-Class Education System</strong> — Sweden is known for innovation, research excellence and interactive learning methods.</li>
        <li><strong>English-Taught Programs</strong> — Most master’s programs and many bachelor’s degrees are available in English.</li>
        <li><strong>Research and Innovation Hub</strong> — Strong ties to global companies and research institutions.</li>
        <li><strong>Post-Study Work Options</strong> — Graduates can stay up to one year to seek employment, with pathways for skilled professionals.</li>
        <li><strong>Scholarships and Financial Assistance</strong> — Generous scholarships from universities and the Swedish Institute.</li>
        <li><strong>Safe and Sustainable Lifestyle</strong> — High quality of life and eco-friendly living.</li>
      </ul>
    </>
  ) },
  'spain': { title:'Study in Spain', banner:'/banners/spain.png', content:(
    <>
      <h3 className="text-xl font-semibold">Benefits of Studying in Spain</h3>

      <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
        <li><strong>Globally Recognised Universities</strong> — Spain hosts top-ranked universities and business schools.</li>
        <li><strong>Affordable Education and Lifestyle</strong> — Lower tuition and living costs compared to many Western countries.</li>
        <li><strong>Vibrant Culture and Lifestyle</strong> — Rich traditions, art, music and Mediterranean living.</li>
        <li><strong>English and Spanish Programs</strong> — Wide choice of English-taught courses while also learning Spanish.</li>
        <li><strong>Work and Stay Opportunities</strong> — Options for part-time work during studies and post-study visas.</li>
        <li><strong>Ideal Climate and Location</strong> — Sunny weather and easy access to Europe and Africa.</li>
        <li><strong>Scholarships and Financial Aid</strong> — Government and university grants available each year.</li>
      </ul>
    </>
  ) },
  'malta': { title:'Study in Malta', banner:'/banners/malta.png', content:'Malta offers international study options in a Mediterranean setting; we help with placements and travel.' },
  'greece': { title:'Study in Greece', banner:'/banners/greece.png', content:'Greece combines historic heritage with modern programs in select universities.' },
  'italy': { title:'Study in Italy', banner:'/banners/italy.png', content:'Italy offers strong programs in arts, design, humanities and business with rich cultural opportunities.' },
  'latvia': { title:'Study in Latvia', banner:'/banners/latvia.png', content:'Latvia hosts affordable programs with growing international collaborations.' },
  'lithuania': { title:'Study in Lithuania', banner:'/banners/lithuania.png', content:'Lithuania offers practical and research-oriented programs at competitive fees.' },
  'czech-republic': { title:'Study in Czech Republic', banner:'/banners/czech-republic.png', content:'The Czech Republic provides established universities with a broad range of masters programs.' },
  'denmark': { title:'Study in Denmark', banner:'/banners/denmark.png', content:'Denmark emphasizes innovation and practical research with many English-taught programs.' }
}

export default function CountryPage(){
  const { query } = useRouter()
  const slug = query.slug || ''
  const item = data[slug]
  if(!item) return <div className="container py-12">Country not found.</div>

  return (
    <>
      <SEO title={item.title} image={item.banner} />
      <Hero title={item.title} subtitle="Explore programs, admissions and support" backgroundImage={item.banner} ctas={<a href="/contact" className="px-4 py-2 bg-brand-blue text-white rounded hover:bg-blue-700 transition">Contact Us</a>} />

      <section className="container py-12">
        <div className="rounded overflow-hidden shadow">
          <div className="h-56 w-full bg-gray-100 flex items-center justify-center">
            <img src={item.banner} alt={item.title} className="h-48 object-contain" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <CountryContent>
              {typeof item.content === 'string' ? (
                <p className="mt-4 text-gray-700">{item.content}</p>
              ) : (
                <div className="mt-4 text-gray-700">{item.content}</div>
              )}
            </CountryContent>
            <div className="mt-6 text-sm text-gray-600">For guidance and application support contact <a href="mailto:info@mysmartscholar.com" className="text-brand-blue">info@mysmartscholar.com</a> or call <a href="tel:+919391572075" className="text-brand-blue">+91 93915 72075</a>.</div>
          </div>
        </div>
      </section>
    </>
  )
}
