import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { siteUrl } from './seo';
import ComingSoonBanner from './ComingSoonBanner';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Khagatara — One Founder, Many Verticals',
  description: 'Khagatara is a multi-vertical business out of Kerala, India — agricultural export, freight forwarding, accounting software, and more.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Khagatara — One Founder, Many Verticals',
    description: 'Khagatara is a multi-vertical business out of Kerala, India — agricultural export, freight forwarding, accounting software, and more.',
    url: '/',
    siteName: 'Khagatara',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khagatara — One Founder, Many Verticals',
    description: 'Khagatara is a multi-vertical business out of Kerala, India — agricultural export, freight forwarding, accounting software, and more.',
  },
  verification: {
    google: 'oUWyUKTZu9ng2dqitry4CSDIQOL00aYjy2llxai0Eaw',
    yandex: 'eacfc44bec2df41b',
    other: {
      'msvalidate.01': '0CCD166E2AE15A0A67670CB8A57B663E',
      'naver-site-verification': 'cf95529f1dbb9ba0cd24cb27bbceed92',
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
      <body style={{ paddingTop: 42 }}>
        <ComingSoonBanner />
        {children}
        <Link className="site-donate-button" href="/premium?source=donate">
          <span className="site-donate-icon" aria-hidden="true">$</span>
          <span>Donate</span>
        </Link>
      </body>
    </html>
  )
}
