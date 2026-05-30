import type { Metadata } from 'next'
import Link from 'next/link'
import ImageRemakerTool from './components/ImageRemakerTool'
import ImageRemakerPricing from './pricing'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Image Remaker Online - Upscale & Increase Image Size',
  description:
    'Remake, upscale, and increase image size online. Convert small images into larger KB targets for screenshots, social media, and upload requirements.',
  alternates: {
    canonical: '/image-remaker',
  },
  openGraph: {
    title: 'Image Remaker Online - Upscale & Increase Image Size',
    description:
      'Upload an image, choose a target size, preview before vs after, and download an enhanced image.',
    type: 'website',
    url: 'https://www.khagatara.com/image-remaker',
  },
}

const imageRemakerFaq = [
  {
    question: 'Can I increase image size to 500 KB?',
    answer: 'Yes. Upload an image, choose a 500 KB target, and remake the image. The browser will create a larger enhanced output when possible.',
  },
  {
    question: 'Is this an AI image upscaler?',
    answer: 'This first version provides browser-side upscale and enhancement. A deeper AI upscaler backend can be added later as a paid feature.',
  },
  {
    question: 'Can I enhance screenshots?',
    answer: 'Yes. Choose Screenshot Enhancer to upscale screenshots with high smoothing before downloading the result.',
  },
]

const imageRemakerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Khagatara Image Remaker',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any',
  url: 'https://www.khagatara.com/image-remaker',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  featureList: [
    'Increase image size to desired KB',
    'Upscale image online',
    'Screenshot enhancer',
    'Before and after image preview',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: imageRemakerFaq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function ImageRemakerPage() {
  return (
    <main className="page tool-page">
      {[imageRemakerJsonLd, faqJsonLd].map((item) => (
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
          <Link href="/pdf-tools">PDF Tools</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <section className="hero tool-hero">
        <div className="hero-eyebrow">Image remaker</div>
        <h1 className="hero-title">Image Remaker Online</h1>
        <p className="hero-sub site-sub">
          Increase image size, upscale screenshots, and preview original vs enhanced images before download.
        </p>
      </section>

      <ImageRemakerTool />

      <section className="tool-content">
        <div className="tool-copy">
          <h2>Increase Image Size to a Target KB</h2>
          <p>
            Use Image Remaker when you need to convert a small image into a larger upload size such as 100 KB, 200 KB,
            500 KB, 1 MB, or 2 MB. This is useful when a form rejects images that are too small or when a screenshot
            needs a clearer enhanced version.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Before vs After Preview</h2>
          <p>
            The tool shows the original image and enhanced image side by side with file sizes. For example, you can see
            Original: 50 KB flowing into Enhanced: 500 KB before downloading.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Best Uses</h2>
          <ul>
            <li>Increase image size without guessing settings.</li>
            <li>Upscale screenshots for clearer sharing.</li>
            <li>Create larger KB images for upload requirements.</li>
          </ul>
        </div>

        <div className="tool-copy">
          <h2>Related Tools</h2>
          <div className="related-tools">
            <Link href="/image-compressor">Image Compressor</Link>
            <Link href="/image-resizer">Image Resizer</Link>
            <Link href="/image-converter">Image Converter</Link>
            <Link href="/crop-image">Crop Image</Link>
          </div>
        </div>
      </section>

      <ImageRemakerPricing />
    </main>
  )
}
