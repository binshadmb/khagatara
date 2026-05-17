import type { Metadata } from 'next'
import { pageAlternates } from '../../seo'

export const metadata: Metadata = {
  alternates: pageAlternates('number11', 'it'),
}

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return children
}
