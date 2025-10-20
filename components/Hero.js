export default function Hero({title, subtitle, ctas}){
  return (
    <section className="py-16 text-center bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-extrabold">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        <div className="mt-6 flex gap-3 justify-center">{ctas}</div>
      </div>
    </section>
  )
}
