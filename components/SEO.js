import Head from 'next/head'

function absoluteUrl(path){
  if(!path) return null
  if(path.startsWith('http')) return path
  const site = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://example.com'
  return site.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}

export default function SEO({ title, description, url, image, schema, breadcrumbs, article }){
  const fullTitle = title ? `${title} | Smartscholar` : 'Smartscholar — Your Smart Path to Global Education'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://example.com'
  const imageUrl = absoluteUrl(image)

  // Base Organization schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Smartscholar",
    "url": siteUrl,
    "logo": absoluteUrl('/logo.png'),
    "sameAs": []
  }

  // BreadcrumbList schema (optional)
  let breadcrumbSchema = null
  if(Array.isArray(breadcrumbs) && breadcrumbs.length){
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b,i)=>({
        "@type":"ListItem",
        "position": i+1,
        "name": b.name,
        "item": absoluteUrl(b.url || '')
      }))
    }
  }

  // Article schema (optional)
  let articleSchema = null
  if(article && article.title){
    articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": absoluteUrl(url || '')
      },
      "headline": article.title,
      "image": article.image ? [absoluteUrl(article.image)] : undefined,
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "author": article.author ? { "@type": "Person", "name": article.author } : undefined,
      "publisher": {
        "@type": "Organization",
        "name": "Smartscholar",
        "logo": { "@type": "ImageObject", "url": absoluteUrl('/logo.png') }
      },
      "description": article.description || description || ''
    }
  }

  // Compose graph
  const graph = [orgSchema]
  if(breadcrumbSchema) graph.push(breadcrumbSchema)
  if(articleSchema) graph.push(articleSchema)
  if(schema) graph.push(schema)

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Smartscholar: expert study abroad guidance, visa counseling, test prep and career services.'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ''} />
      {url && <meta property="og:url" content={absoluteUrl(url)} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph.length === 1 ? graph[0] : { "@graph": graph }) }} />
    </Head>
  )
}
