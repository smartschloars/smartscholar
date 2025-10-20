import SEO from '../components/SEO'
import Link from 'next/link'
import { posts } from '../data/posts'

export default function Blog(){
  return (
    <>
      <SEO title="Blog" />
      <div className="container py-12">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(p=> (
            <article key={p.id} className="p-4 border rounded">
              {p.image && <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded" />}
              <h3 className="font-semibold mt-3"><Link href={`/blog/${p.id}`}>{p.title}</Link></h3>
              <p className="text-xs text-gray-500">{p.date}</p>
              <p className="mt-2 text-sm">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
