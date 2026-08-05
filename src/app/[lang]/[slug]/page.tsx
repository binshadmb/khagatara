import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PremiumLandingPage from '../../premiumLandingPage'
import { LANGUAGE_CONFIG } from '../../astro-languages'
import { getPremiumLanding } from '../../premiumLandingMap'

const SITE_URL = 'https://www.khagatara.com'
const LANG_CODES = LANGUAGE_CONFIG.map(([code]) => code)

function isKnownLanguage(lang: string) {
  return LANG_CODES.includes(lang as (typeof LANG_CODES)[number])
}

function absoluteUrl(url: string): string
function absoluteUrl(url?: string): string | undefined
function absoluteUrl(url?: string) {
  if (!url) return undefined
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
}

function premiumAlternates(slug: string) {
  const languages = Object.fromEntries(
    LANG_CODES.map((code) => [code, `${SITE_URL}/${code}/${slug}`]),
  )

  return {
    canonical: `/${slug === 'premium' ? 'premium' : `en/${slug}`}`,
    languages: {
      ...languages,
      'x-default': `${SITE_URL}/en/${slug}`,
    },
  }
}

type PageProps = {
  params: Promise<{ lang: string; slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const premiumPage = getPremiumLanding(slug)

  if (premiumPage && isKnownLanguage(lang)) {
    const previewImageUrl = absoluteUrl('/images/before-after/after-placeholder.jpg')

    return {
      title: premiumPage.title,
      description: premiumPage.description,
      alternates: premiumAlternates(slug),
      openGraph: {
        title: premiumPage.title,
        description: premiumPage.description,
        type: 'website',
        url: `${SITE_URL}/${lang}/${slug}`,
        images: [previewImageUrl],
      },
      twitter: {
        card: 'summary_large_image',
        title: premiumPage.title,
        description: premiumPage.description,
        images: [previewImageUrl],
      },
    }
  }

  return {}
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params

  if (!isKnownLanguage(lang)) {
    notFound()
  }

  const premiumPage = getPremiumLanding(slug)
  if (premiumPage) {
    return <PremiumLandingPage lang={lang} page={premiumPage} />
  }

  notFound()
}
