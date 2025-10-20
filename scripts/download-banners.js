#!/usr/bin/env node
// Download images from the Vaaradhi /country page into ./public/banners
// Usage: node scripts/download-banners.js

const fs = require('fs')
const path = require('path')
const { URL } = require('url')

const base = 'https://www.vaaradhioverseas.com'
const page = base + '/country'
const outDir = path.join(process.cwd(), 'public', 'banners')

const countryMap = [
  { name: 'Australia', slug: 'australia' },
  { name: 'United Kingdom', slug: 'uk' },
  { name: 'United States', slug: 'usa' },
  { name: 'Canada', slug: 'canada' },
  { name: 'New Zealand', slug: 'new-zealand' },
  { name: 'Ireland', slug: 'ireland' },
  { name: 'France', slug: 'france' },
  { name: 'Germany', slug: 'germany' },
  { name: 'Mauritius', slug: 'mauritius' },
  { name: 'Luxembourg', slug: 'luxembourg' },
  { name: 'Cyprus', slug: 'cyprus' },
  { name: 'Netherlands', slug: 'netherlands' },
  { name: 'Finland', slug: 'finland' },
  { name: 'Poland', slug: 'poland' },
  { name: 'Sweden', slug: 'sweden' },
  { name: 'Spain', slug: 'spain' },
  { name: 'Malta', slug: 'malta' },
  { name: 'Greece', slug: 'greece' },
  { name: 'Italy', slug: 'italy' },
  { name: 'Latvia', slug: 'latvia' },
  { name: 'Lithuania', slug: 'lithuania' },
  { name: 'Czech Republic', slug: 'czech-republic' },
  { name: 'Denmark', slug: 'denmark' }
]

async function fetchText(url){
  const res = await fetch(url)
  if(!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  return await res.text()
}

function ensureDir(dir){ if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive:true }) }

function absoluteUrl(u){
  try{ return new URL(u, base).href }catch(e){ return null }
}

async function downloadFile(url, dest){
  const res = await fetch(url)
  if(!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`)
  const buffer = await res.arrayBuffer()
  fs.writeFileSync(dest, Buffer.from(buffer))
}

function findImageUrls(html){
  const urls = new Set()
  // src or data-src
  const reSrc = /(?:src|data-src)=["']([^"']+\.(?:png|jpg|jpeg|svg|webp))["']/gi
  let m
  while((m = reSrc.exec(html))){ urls.add(absoluteUrl(m[1])) }
  // CSS url(...)
  const reUrl = /url\(["']?([^"')]+\.(?:png|jpg|jpeg|svg|webp))["']?\)/gi
  while((m = reUrl.exec(html))){ urls.add(absoluteUrl(m[1])) }
  return [...urls].filter(Boolean)
}

function normalizeName(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'') }

async function main(){
  console.log('Fetching page:', page)
  const html = await fetchText(page)
  console.log('Extracting image URLs...')
  const urls = findImageUrls(html)
  console.log(`Found ${urls.length} image URLs`)
  ensureDir(outDir)

  const downloaded = []
  for(const u of urls){
    try{
      const p = new URL(u).pathname
      let fileName = path.basename(p)
      // sanitize filename
      fileName = fileName.split('?')[0]
      const dest = path.join(outDir, fileName)
      if(fs.existsSync(dest)){
        console.log('Already exists:', fileName)
        downloaded.push({ url:u, file:dest })
        continue
      }
      console.log('Downloading', u)
      await downloadFile(u, dest)
      downloaded.push({ url:u, file:dest })
    }catch(err){ console.warn('Failed to download', u, err.message) }
  }

  // Attempt to map downloads to slugs
  console.log('\nAttempting to map downloaded files to country slugs...')
  const mapping = {}
  for(const c of countryMap){
    const key = normalizeName(c.name)
    const found = downloaded.find(d => normalizeName(path.basename(d.file)).includes(key) || normalizeName(d.url).includes(key) )
    if(found){
      const ext = path.extname(found.file)
      const target = path.join(outDir, `${c.slug}${ext}`)
      if(!fs.existsSync(target)){
        fs.copyFileSync(found.file, target)
      }
      mapping[c.slug] = path.basename(target)
      console.log(`Mapped ${c.name} -> ${path.basename(target)}`)
    }else{
      console.log(`No match for ${c.name}`)
    }
  }

  console.log('\nSummary:')
  console.log('Downloaded files:', downloaded.map(d=>path.basename(d.file)).join(', ') || 'none')
  console.log('Mappings:', mapping)
  console.log('\nIf some countries are not mapped, rename files in public/banners/ to <slug>.<ext> (e.g. australia.jpg) or update pages to point to the downloaded names.')
}

main().catch(err=>{ console.error(err); process.exit(1) })
