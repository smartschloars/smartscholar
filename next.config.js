/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

// For GitHub Pages deployment (static export)
if (process.env.DEPLOY_TARGET === 'github-pages') {
  nextConfig.output = 'export'
}

module.exports = nextConfig
