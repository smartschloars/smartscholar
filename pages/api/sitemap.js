import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default async function handler(req, res){
  const SITE_URL = process.env.SITE_URL || 'https://example.com'
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/countries', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog', changefreq: 'weekly', priority: 0.6 },
    { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  ]

  try{
    const stream = new SitemapStream({ hostname: SITE_URL })
    res.writeHead(200, { 'Content-Type': 'application/xml' })
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data=>data.toString())
    res.end(xml)
  }catch(err){
    console.error('Sitemap generation error', err)
    res.status(500).end()
  }
}
