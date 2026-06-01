/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID ?? '',
  },

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
