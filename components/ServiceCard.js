export default function ServiceCard({title, icon}){
  return (
    <div className="p-4 border rounded hover:shadow-lg transition">
      <div className="text-2xl text-brand-blue">{icon}</div>
      <h3 className="font-semibold mt-2">{title}</h3>
    </div>
  )
}
