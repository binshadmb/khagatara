import type { Metadata } from 'next'
import { pageAlternates } from '../../seo'

export const metadata: Metadata = {
  alternates: pageAlternates('number11', 'es'),
}

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return children
}
