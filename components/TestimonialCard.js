export default function TestimonialCard({quote, author}){
  return (
    <div className="p-4 border rounded">
      <p className="italic">"{quote}"</p>
      <p className="mt-3 font-semibold text-sm">— {author}</p>
    </div>
  )
}
