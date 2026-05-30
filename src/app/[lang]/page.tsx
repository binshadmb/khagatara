import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LandingPage from '../landing-pages/LandingPage'
import { LANDING_PAGES, getLandingPage } from '../landing-pages/landingConfig'

const SITE_URL = 'https://www.khagatara.com'

type LandingRouteProps = {
  params: Promise<{ lang: string }>
}

export function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({
    lang: page.slug,
  }))
}

export async function generateMetadata({ params }: LandingRouteProps): Promise<Metadata> {
  const { lang } = await params
  const page = getLandingPage(lang)

  if (!page) {
    return {}
  }

  const url = `${SITE_URL}/${page.slug}`
  const image =
    page.tool === 'remaker'
      ? 'https://www.khagatara.com/og/image-remaker.png'
      : 'https://www.khagatara.com/og/image-compressor.png'

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'website',
      url,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [image],
    },
  }
}

export default async function Page({ params }: LandingRouteProps) {
  const { lang } = await params
  const page = getLandingPage(lang)

  if (!page) {
    notFound()
  }

  return <LandingPage page={page} />
}
