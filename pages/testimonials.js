import SEO from '../components/SEO'

export default function Testimonials(){
  return (
    <>
      <SEO title="Testimonials" />
      <div className="container py-12">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded">Student success story 1 — placeholder</div>
          <div className="p-4 border rounded">Student success story 2 — placeholder</div>
        </div>
      </div>
    </>
  )
}
