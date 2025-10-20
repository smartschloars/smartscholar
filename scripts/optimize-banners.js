const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const slugs = [
  'australia','uk','usa','canada','new-zealand','ireland','france','germany','mauritius','luxembourg','cyprus','netherlands','finland','poland','sweden','spain','malta','greece','italy','latvia','lithuania','czech-republic','denmark'
]

const inputDir = path.join(process.cwd(),'public','banners')
const outDir = path.join(process.cwd(),'public','banners','optimized')
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive:true })

// sizes to generate
const sizes = [1200, 800, 400]

async function processBanner(slug){
  // find matching file in inputDir (any ext)
  const files = fs.readdirSync(inputDir).filter(f => f.startsWith(slug + '.') || f.startsWith(slug + '-'))
  if(files.length === 0){
    // try find any file containing slug
    const any = fs.readdirSync(inputDir).find(f=> f.toLowerCase().includes(slug.replace(/-/g,'')))
    if(any) files.push(any)
  }
  if(files.length === 0) { console.log('No source for', slug); return null }
  const src = path.join(inputDir, files[0])
  const outFiles = { slug, sources: [] }
  for(const w of sizes){
    const jpgOut = path.join(outDir, `${slug}-${w}.jpg`)
    const webpOut = path.join(outDir, `${slug}-${w}.webp`)
    try{
      await sharp(src).resize(w).jpeg({quality:80}).toFile(jpgOut)
      await sharp(src).resize(w).webp({quality:80}).toFile(webpOut)
      outFiles.sources.push({ width:w, jpg:path.relative('public', jpgOut), webp:path.relative('public', webpOut) })
    }catch(err){ console.warn('Failed to process', src, err.message) }
  }
  return outFiles
}

async function main(){
  const manifest = {}
  for(const slug of slugs){
    const info = await processBanner(slug)
    if(info) manifest[slug] = info.sources
  }
  fs.writeFileSync(path.join(process.cwd(),'public','banners','manifest.json'), JSON.stringify(manifest,null,2))
  console.log('Done. Manifest saved to public/banners/manifest.json')
}

main().catch(err=>{ console.error(err); process.exit(1) })
