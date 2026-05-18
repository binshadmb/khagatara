/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/sitemap-1.xml',
        destination: '/sitemap.xml',
      },
    ]
  },
}

module.exports = nextConfig