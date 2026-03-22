export default function CountryCard({ country, flagSrc, alt }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 backdrop-blur px-4 py-5 shadow-[0_18px_70px_-32px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-brand-blue/6 via-white to-indigo-50" />
      <div className="relative flex flex-col items-center text-center gap-3">
        <div className="h-14 w-14 rounded-xl bg-gray-100 border border-white/80 flex items-center justify-center overflow-hidden shadow-inner">
          {flagSrc ? <img src={flagSrc} alt={alt || country} className="h-full w-full object-cover" /> : <span className="text-xl font-semibold text-gray-700">{country.charAt(0)}</span>}
        </div>
        <div className="space-y-1">
          <p className="text-base font-semibold text-gray-900">{country}</p>
          <p className="text-xs text-gray-500">Admissions, visas &amp; scholarships</p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue">
          Explore
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </div>
  )
}
