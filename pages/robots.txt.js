export function getServerSideProps({ res }){
  const SITE_URL = process.env.SITE_URL || 'https://example.com'
  const body = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/api/sitemap\n`
  res.setHeader('Content-Type','text/plain')
  res.write(body)
  res.end()
  return { props: {} }
}

export default function Robots() { return null }
