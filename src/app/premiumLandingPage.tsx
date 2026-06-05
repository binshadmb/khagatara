import Link from 'next/link'
import type { PremiumEntry } from './premiumLandingMap'

const SITE_URL = 'https://www.khagatara.com'

type PremiumLandingPageProps = {
  lang: string
  page: PremiumEntry
}

function schemaFor(lang: string, page: PremiumEntry) {
  const pageUrl = `${SITE_URL}/${lang}/${page.slug}`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: page.h1,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      url: pageUrl,
      offers: {
        '@type': 'Offer',
        price: '49',
        priceCurrency: 'INR',
      },
      featureList: [
        'Premium portrait enhancement',
        'CodeFormer face restoration',
        'RealESRGAN AI upscaling',
        '4K and 8K output',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: page.video.title,
      description: page.description,
      thumbnailUrl: page.video.poster ?? `${SITE_URL}/og-image.jpg`,
      contentUrl: page.video.src,
      embedUrl: pageUrl,
      uploadDate: '2024-01-01',
      publisher: {
        '@type': 'Organization',
        name: 'Khagatara',
        url: SITE_URL,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Premium Studio', item: `${SITE_URL}/premium` },
        { '@type': 'ListItem', position: 3, name: page.h1, item: pageUrl },
      ],
    },
  ]
}

export default function PremiumLandingPage({ lang, page }: PremiumLandingPageProps) {
  const schemas = schemaFor(lang, page)
  const premiumHref = `/premium?source=${encodeURIComponent(page.slug)}`

  return (
    <main className="page tool-page landing-page premium-landing-page">
      {schemas.map((item, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <nav className="nav">
        <Link className="nav-logo" href="/">
          <div className="tri-wrap" aria-hidden="true">
            <div className="tr"><div className="t tu ta"></div><div className="t tu tb"></div><div className="t tu tc"></div></div>
            <div className="tr"><div className="t tu tb"></div><div className="t tu tc"></div></div>
            <div className="tr"><div className="t td te"></div></div>
          </div>
          <span className="logo-txt">khagatara</span>
        </Link>
        <div className="nav-links">
          <Link href="/tools">Tools</Link>
          <Link href="/image-remaker">Image Remaker</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/premium">Premium</Link>
        </div>
      </nav>

      <section className="hero tool-hero landing-hero premium-landing-hero">
        <div className="hero-eyebrow">{page.intro.eyebrow}</div>
        <h1 className="hero-title">{page.h1}</h1>
        <p className="hero-sub site-sub">{page.description}</p>
        <Link className="download-btn premium-landing-cta" href={premiumHref}>
          Enhance Photo
        </Link>
      </section>

      <section className="landing-tool-shell premium-landing-intro">
        <div className="landing-tool-intro">
          <span>Khagatara Studio</span>
          <h2>{page.intro.tagline}</h2>
          <p>{page.intro.copy}</p>
          <Link className="download-btn" href={premiumHref}>
            Start Premium Enhancement
          </Link>
        </div>

        <div className="premium-landing-video">
          <div className="video-frame-desktop">
            <video src={page.video.src} poster={page.video.poster} autoPlay muted loop playsInline aria-label={page.video.title} />
          </div>
          <div className="video-frame-mobile">
            <div className="phone-frame">
              <div className="phone-screen">
                <video src={page.video.src} poster={page.video.poster} autoPlay muted loop playsInline aria-label={page.video.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tool-content landing-content">
        <div className="tool-copy">
          <h2>How to Use {page.h1}</h2>
          <ol>
            {page.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="tool-copy">
          <h2>Before vs After</h2>
          <p>{page.beforeAfter}</p>
        </div>

        <div className="tool-copy">
          <h2>Why Premium Studio Helps</h2>
          <p>
            Khagatara Studio uses a GPU pipeline built for important portraits:
            face restoration first, then AI upscaling for clean 4K or 8K output.
          </p>
          <p>
            Use this page when the photo matters enough that basic compression,
            resizing, or simple sharpening is not enough.
          </p>
        </div>

        <div className="tool-copy">
          <h2>FAQ</h2>
          <div className="landing-faq-list">
            {page.faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="tool-copy">
          <h2>Use the Premium Engine</h2>
          <p>
            The landing page explains the specific photo problem. The premium
            engine does the actual enhancement.
          </p>
          <Link className="download-btn" href={premiumHref}>
            Open Premium Studio
          </Link>
        </div>
      </section>
    </main>
  )
}
