export default function CountryCard({country, flagSrc, alt}){
  return (
    <div className="p-3 border rounded text-center hover:scale-105 transform transition">
      <div className="h-12 flex items-center justify-center">
        {flagSrc ? <img src={flagSrc} alt={alt || country} className="h-8 object-contain" /> : country.charAt(0)}
      </div>
      <div className="mt-2 font-medium">{country}</div>
    </div>
  )
}
