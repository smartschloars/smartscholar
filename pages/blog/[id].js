import { posts } from '../../data/posts'
import SEO from '../../components/SEO'

export default function Post({ post }){
  if(!post) return <div className="container py-12">Post not found</div>
  const breadcrumbs = [ { name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: post.title, url: `/blog/${post.id}` } ]
  return (
    <>
      <SEO title={post.title} description={post.excerpt} url={`/blog/${post.id}`} image={post.image} breadcrumbs={breadcrumbs} article={{ title: post.title, datePublished: post.date, image: post.image, author: 'Smartscholar' }} />
      <div className="container py-12">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-xs text-gray-500">{post.date}</p>
        {post.image && <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mt-4" />}
        <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </>
  )
}

export async function getStaticPaths(){
  const paths = posts.map(p=> ({ params: { id: p.id } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }){
  const post = posts.find(p=> p.id === params.id) || null
  return { props: { post } }
}
