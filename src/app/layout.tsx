import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khagatara — Vedic Numerology Reports',
  description: 'Discover your cosmic path through Vedic numerology and astrology',
  verification: {
    google: 'oUWyUKTZu9ng2dqitry4CSDIQOL00aYjy2llxai0Eaw',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}