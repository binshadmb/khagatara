import type { Metadata } from 'next'
import { clientPageAlternates, clientPageMetadata } from '../../seo'

const pagePath = '/hi/ank-11-ka-arth'

export const metadata: Metadata = {
  title: clientPageMetadata[pagePath].title,
  description: clientPageMetadata[pagePath].description,
  alternates: clientPageAlternates(pagePath),
}

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return children
}
