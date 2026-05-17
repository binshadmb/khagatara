import type { Metadata } from 'next'
import { clientPageAlternates, clientPageMetadata } from '../../seo'

const pagePath = '/hi/numerology-hindi'

export const metadata: Metadata = {
  title: clientPageMetadata[pagePath].title,
  description: clientPageMetadata[pagePath].description,
  alternates: clientPageAlternates(pagePath),
}

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return children
}
