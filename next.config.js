/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

if (process.env.DEPLOY_TARGET === 'github-pages') {
  nextConfig.output = 'export'
  nextConfig.images = {
    unoptimized: true,
  }
}

module.exports = nextConfig
