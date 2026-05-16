import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khagatara — Vedic Numerology Reports',
  description: 'Discover your cosmic path through Vedic numerology and astrology',
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