import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from './seo'
import ThemeToggle from './ThemeToggle'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Khagatara — Vedic Numerology Reports',
  description: 'Discover your cosmic path through Vedic numerology and astrology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Khagatara — Vedic Numerology Reports',
    description: 'Discover your cosmic path through Vedic numerology and astrology',
    url: '/',
    siteName: 'Khagatara',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Khagatara Vedic numerology and astrology reports',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khagatara — Vedic Numerology Reports',
    description: 'Discover your cosmic path through Vedic numerology and astrology',
    images: ['/opengraph-image'],
  },
  verification: {
    google: 'oUWyUKTZu9ng2dqitry4CSDIQOL00aYjy2llxai0Eaw',
    yandex: 'eacfc44bec2df41b',
    other: {
      'msvalidate.01': '0CCD166E2AE15A0A67670CB8A57B663E',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
