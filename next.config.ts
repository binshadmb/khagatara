/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/sitemap-1.xml',
        destination: '/sitemap.xml',
      },
      {
        source: '/api/upscale-proxy/:path*',
        destination: 'https://khagatara-api.onrender.com/upscale-proxy/:path*',
      },
    ]
  },
}

module.exports = nextConfig
