import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SitePage from '../../SitePage'
import { getNestedSlugs, getSitePage } from '../../site-structure'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getNestedSlugs('tools')
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getSitePage(`/tools/${slug}`)

  if (!page) return {}

  return {
    title: `${page.title} | Khagatara`,
    description: page.description,
    alternates: { canonical: page.path },
  }
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params
  const page = getSitePage(`/tools/${slug}`)

  if (!page) notFound()

  return <SitePage page={page} />
}
