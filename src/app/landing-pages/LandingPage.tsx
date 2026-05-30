import Link from 'next/link'
import ImageCompressorLoader from '../image-compressor/ImageCompressorLoader'
import ImageRemakerTool from '../image-remaker/components/ImageRemakerTool'
import { LANDING_PAGES, type LandingConfig } from './landingConfig'

const SITE_URL = 'https://www.khagatara.com'

type LandingPageProps = {
  page: LandingConfig
}

function toolName(tool: LandingConfig['tool']) {
  if (tool === 'remaker') return 'Image Remaker'
  if (tool === 'resizer') return 'Image Resizer'
  return 'Image Compressor'
}

function toolIntro(page: LandingConfig) {
  if (page.tool === 'remaker') {
    return {
      eyebrow: 'Image remaker',
      title: 'Enhance Image Before Download',
      copy:
        'Upload a small or blurry image, choose the target size, and preview the original and enhanced result before saving.',
    }
  }

  return {
    eyebrow: 'Image compressor',
    title: page.targetKb ? `Compress to ${page.targetKb} KB` : 'Compress Image Online',
    copy:
      'Upload a JPG, PNG, or WebP image and reduce the file size in your browser without sending the file to a server.',
  }
}

function renderTool(page: LandingConfig) {
  if (page.tool === 'remaker') {
    return <ImageRemakerTool initialTargetKb={page.targetKb} initialMode={page.mode} />
  }

  return <ImageCompressorLoader initialTargetKb={page.targetKb} />
}

function relatedPages(page: LandingConfig) {
  const sameCategory = LANDING_PAGES.filter((item) => item.category === page.category && item.slug !== page.slug)
  const sameTool = LANDING_PAGES.filter(
    (item) => item.tool === page.tool && item.category !== page.category && item.slug !== page.slug,
  )

  return [...sameCategory, ...sameTool].slice(0, 8)
}

function schemaFor(page: LandingConfig) {
  const pageUrl = `${SITE_URL}/${page.slug}`

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
        price: '0',
        priceCurrency: 'USD',
      },
      featureList:
        page.tool === 'remaker'
          ? ['Increase image size online', 'Enhance image quality', 'Before and after image preview']
          : ['Compress image online', 'Target KB compression', 'JPG, PNG, and WebP support'],
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
        { '@type': 'ListItem', position: 2, name: 'Image Tools', item: `${SITE_URL}/image-tools` },
        { '@type': 'ListItem', position: 3, name: page.h1, item: pageUrl },
      ],
    },
  ]
}

export default function LandingPage({ page }: LandingPageProps) {
  const intro = toolIntro(page)
  const related = relatedPages(page)
  const schemas = schemaFor(page)

  return (
    <main className="page tool-page landing-page">
      {schemas.map((item) => (
        <script
          key={item['@type']}
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
          <Link href="/image-tools">Image Tools</Link>
          <Link href="/image-compressor">Image Compressor</Link>
          <Link href="/image-remaker">Image Remaker</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <section className="hero tool-hero landing-hero">
        <div className="hero-eyebrow">{intro.eyebrow}</div>
        <h1 className="hero-title">{page.h1}</h1>
        <p className="hero-sub site-sub">{page.description}</p>
      </section>

      <section className="landing-tool-shell" aria-label={intro.title}>
        <div className="landing-tool-intro">
          <span>{toolName(page.tool)}</span>
          <h2>{intro.title}</h2>
          <p>{intro.copy}</p>
        </div>
        {renderTool(page)}
      </section>

      <section className="tool-content landing-content">
        <div className="tool-copy">
          <h2>How to Use {page.h1}</h2>
          <ol>
            <li>Upload your JPG, PNG, or WebP image.</li>
            <li>
              {page.tool === 'remaker'
                ? 'Choose the enhancement mode and target output size.'
                : `Choose a target size${page.targetKb ? ` such as ${page.targetKb} KB` : ''} or adjust the KB slider.`}
            </li>
            <li>Preview the before and after result, then download the finished image.</li>
          </ol>
        </div>

        <div className="tool-copy">
          <h2>Before vs After</h2>
          <p>
            The page is built around visible proof. You can compare the original image with the processed version and
            check the file size before downloading. For example, a small original can be shown as Original: 50 KB,
            then Enhanced: 500 KB, or a large photo can be reduced to a strict upload limit.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Why This Page Helps</h2>
          <p>
            {page.examName
              ? `${page.examName} forms often reject images when the file size, clarity, or format is wrong. This page keeps the tool and instructions together so you can prepare the image faster.`
              : 'Upload pages often reject images when the file size, clarity, or format is wrong. This page keeps the tool and instructions together so you can prepare the image faster.'}
          </p>
          <p>
            Your image is handled in the browser for this version. That makes it quick for form photos, signatures,
            screenshots, profile images, and other everyday upload tasks.
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
          <h2>Related Tools</h2>
          <div className="related-tools">
            <Link href="/image-compressor">Image Compressor</Link>
            <Link href="/image-remaker">Image Remaker</Link>
            <Link href="/image-resizer">Image Resizer</Link>
            <Link href="/crop-image">Crop Image</Link>
            {related.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`}>
                {item.h1}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
