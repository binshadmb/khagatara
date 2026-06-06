import Link from 'next/link'
import type { PremiumEntry } from './premiumLandingMap'

const SITE_URL = 'https://www.khagatara.com'

const FALLBACK_BEFORE_AFTER_IMAGES = [
  {
    before: '/images/before-after/old-photo-before-sample.jpg',
    after: '/images/before-after/old-photo-after-8k-preview.jpg',
    beforeAlt: 'Faded damaged old photo before AI restoration',
    afterAlt: 'Clean restored old photo after AI enhancement',
  },
  {
    before: '/images/before-after/portrait-before-sample.jpg',
    after: '/images/before-after/portrait-after-8k-preview.jpg',
    beforeAlt: 'Blurred portrait before AI enhancement',
    afterAlt: 'Sharper portrait after 8K AI enhancement preview',
  },
]

function landingStepText(step: string) {
  if (/^Select AI (Enhancement|Restoration)\.?$/i.test(step)) {
    return 'Let the AI restore and enhance the photo automatically.'
  }

  return step
}

function heroTitleParts(title: string) {
  const words = title.split(' ')
  const first = words[0] ?? title
  const second = words[1] ?? ''
  const rest = words.slice(2).join(' ')

  return [first, second, rest].filter(Boolean)
}

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
  const beforeAfterImages = page.beforeAfterImages?.length
    ? page.beforeAfterImages
    : FALLBACK_BEFORE_AFTER_IMAGES
  const primaryBeforeAfter = beforeAfterImages[0]
  const titleParts = heroTitleParts(page.h1)

  return (
    <main className="pl">
      {schemas.map((item) => (
        <script
          key={item['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <nav className="nav pl-nav">
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

      <section className="pl-section pl-hero">
        <div className="pl-block">
          <div className="pl-eyebrow">{page.intro.eyebrow}</div>
          <h1 className="pl-h1">
            {titleParts.map((part, index) => (
              <span className={`pl-word pl-word-${index + 1}`} key={part}>
                {part}
              </span>
            ))}
          </h1>
          <p className="pl-sub">{page.description}</p>
          <Link className="pl-btn pl-btn-red" href={premiumHref}>
            Enhance Photo
          </Link>
        </div>
        <div className="pl-bars" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="pl-section pl-intro">
        <div className="pl-intro-left">
          <div className="pl-studio-label">Khagatara Studio</div>
          <h2 className="pl-tagline">{page.intro.tagline}</h2>
          <p className="pl-copy">{page.intro.copy}</p>
          <Link className="pl-btn pl-btn-white" href={premiumHref}>
            Start Premium Enhancement
          </Link>
        </div>

        <div className="pl-intro-right">
          <figure className="pl-ba">
            <img
              src={primaryBeforeAfter.before}
              alt={primaryBeforeAfter.beforeAlt ?? `Before ${page.h1}`}
            />
            <figcaption className="pl-ba-lbl pl-ba-before">Before</figcaption>
          </figure>
          <figure className="pl-ba">
            <img
              src={primaryBeforeAfter.after}
              alt={primaryBeforeAfter.afterAlt ?? `After ${page.h1} 8K preview`}
            />
            <figcaption className="pl-ba-lbl pl-ba-after">8K Preview</figcaption>
          </figure>
        </div>
      </section>

      <section className="pl-section pl-howto">
        <div className="pl-block">
          <h2>How It Works</h2>
          <div className="pl-steps">
            {page.howTo.map((step, index) => (
              <div className="pl-step" key={step}>
                <div className="pl-step-n">{String(index + 1).padStart(2, '0')}</div>
                <p className="pl-step-t">{landingStepText(step)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pl-section pl-why">
        <div className="pl-why-l">
          <h2>Before vs After</h2>
          <p>{page.beforeAfter}</p>
          <p>
            The preview stays lightweight for fast loading, while the premium
            engine is built for clean high-resolution 4K and 8K output when the
            source photo supports it.
          </p>
        </div>
        <div className="pl-why-r">
          <h2>Why Premium</h2>
          <p>
            Khagatara Studio uses a GPU pipeline built for important portraits:
            face restoration first, then AI upscaling for crisp final output.
          </p>
          <div className="pl-mini-grid">
            {beforeAfterImages.slice(0, 2).map((pair, index) => (
              <div className="pl-mini-pair" key={`${pair.before}-${pair.after}`}>
                <img
                  src={pair.before}
                  alt={pair.beforeAlt ?? `Before restoration sample ${index + 1}`}
                />
                <img
                  src={pair.after}
                  alt={pair.afterAlt ?? `After restoration sample ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pl-section pl-faq">
        <div className="pl-block">
          <h2 className="pl-faq-title">Useful <span>Answers</span></h2>
          <div className="pl-faq-list">
            {page.faqs.map((faq) => (
              <details className="pl-faq-item" key={faq.q}>
                <summary className="pl-faq-q">
                  {faq.q}
                  <span className="pl-faq-arr">+</span>
                </summary>
                <p className="pl-faq-a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pl-section pl-cta">
        <div className="pl-block">
          <h2>
            Restore the photo.
            <span> Keep the memory.</span>
          </h2>
          <Link className="pl-btn pl-btn-cta" href={premiumHref}>
            Open Premium Studio
          </Link>
        </div>
        <div className="pl-bars pl-footer-bars" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </main>
  )
}
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

        <div className="premium-landing-before-after">
          <div className="before-after-card">
            <img
              src={primaryBeforeAfter.before}
              alt={primaryBeforeAfter.beforeAlt ?? `Before ${page.h1}`}
              className="before-after-img"
            />
            <span className="before-after-label">Before</span>
          </div>
          <div className="before-after-card">
            <img
              src={primaryBeforeAfter.after}
              alt={primaryBeforeAfter.afterAlt ?? `After ${page.h1} 8K preview`}
              className="before-after-img"
            />
            <span className="before-after-label before-after-label--after">8K Preview</span>
          </div>
        </div>
      </section>

      <section className="tool-content landing-content">
        <div className="tool-copy">
          <h2>How to Use {page.h1}</h2>
          <ol>
            {page.howTo.map((step) => (
              <li key={step}>{landingStepText(step)}</li>
            ))}
          </ol>
        </div>

        <div className="tool-copy">
          <h2>Before vs After</h2>
          <p>{page.beforeAfter}</p>
          <p>
            The preview is optimized for fast loading. The premium enhancement
            flow is built for high-resolution output, including clean 4K and 8K
            results when the source photo supports it.
          </p>
          <div className="before-after-mini-grid">
            {beforeAfterImages.slice(0, 2).map((pair, index) => (
              <div className="before-after-mini-pair" key={`${pair.before}-${pair.after}`}>
                <img
                  src={pair.before}
                  alt={pair.beforeAlt ?? `Before restoration sample ${index + 1}`}
                />
                <img
                  src={pair.after}
                  alt={pair.afterAlt ?? `After restoration sample ${index + 1}`}
                />
              </div>
            ))}
          </div>
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
