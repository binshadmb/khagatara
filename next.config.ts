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
        destination: 'https://binshad81-khagatara-upscale.hf.space/:path*',
      },
    ]
  },
}

module.exports = nextConfig