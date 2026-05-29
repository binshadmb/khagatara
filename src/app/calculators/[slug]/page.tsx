import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SitePage from '../../SitePage'
import { getNestedSlugs, getSitePage } from '../../site-structure'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getNestedSlugs('calculators')
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getSitePage(`/calculators/${slug}`)

  if (!page) return {}

  return {
    title: `${page.title} | Khagatara`,
    description: page.description,
    alternates: { canonical: page.path },
  }
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params
  const page = getSitePage(`/calculators/${slug}`)

  if (!page) notFound()

  return <SitePage page={page} />
}
