import type { Metadata } from 'next'
import Link from 'next/link'
import ImageCompressorTool from './ImageCompressorTool'

export const metadata: Metadata = {
  title: 'Image Compressor Online Free - Compress JPG, PNG & WebP Images',
  description:
    'Compress JPG, PNG and WebP images online for free. Reduce image file size instantly in your browser without uploading files to a server.',
  alternates: {
    canonical: '/image-compressor',
  },
  openGraph: {
    title: 'Image Compressor Online Free - Compress JPG, PNG & WebP Images',
    description:
      'Compress JPG, PNG and WebP images online for free. Reduce image file size instantly in your browser without uploading files to a server.',
    type: 'website',
    url: 'https://www.khagatara.com/image-compressor',
  },
  twitter: {
    card: 'summary',
    title: 'Image Compressor Online Free - Compress JPG, PNG & WebP Images',
    description:
      'Compress JPG, PNG and WebP images online for free. Reduce image file size instantly in your browser without uploading files to a server.',
  },
}

const faqItems = [
  {
    question: 'Can I compress JPG, PNG, and WebP images?',
    answer: 'Yes. This image compressor accepts common browser image formats including JPG, PNG, and WebP.',
  },
  {
    question: 'Will my image leave my device?',
    answer: 'No. Compression runs in your browser, so your file is processed locally instead of being uploaded to a server.',
  },
  {
    question: 'Does stronger compression reduce quality?',
    answer: 'Usually, yes. Stronger compression creates a smaller file, but it can also remove more visual detail. The Balanced preset is a good starting point.',
  },
  {
    question: 'What is the best compression setting for websites?',
    answer: 'For most website images, use Balanced first. If the image is decorative or very large, Maximum Compression can reduce page weight further.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function ImageCompressorPage() {
  return (
    <main className="page tool-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
          <Link href="/pdf-tools">PDF Tools</Link>
          <Link href="/calculators">Calculators</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <section className="hero tool-hero">
        <div className="hero-eyebrow">Image tool</div>
        <h1 className="hero-title">Image Compressor Online Free</h1>
        <p className="hero-sub site-sub">
          Compress JPG, PNG and WebP images online, reduce image size, and download a lighter file instantly in your browser.
        </p>
      </section>

      <ImageCompressorTool />

      <section className="tool-content">
        <div className="tool-copy">
          <h2>How to Use</h2>
          <ol>
            <li>Upload a JPG, PNG, or WEBP image.</li>
            <li>Choose Low Compression, Balanced, Maximum Compression, or adjust the quality slider.</li>
            <li>Click compress and download the smaller image.</li>
          </ol>
        </div>

        <div className="tool-copy">
          <h2>Benefits</h2>
          <ul>
            <li>Works in the browser, so no server upload is needed for this version.</li>
            <li>Helps reduce page weight for websites and blogs.</li>
            <li>Useful for forms, email attachments, and social posts.</li>
          </ul>
        </div>

        <div className="tool-copy">
          <h2>How Image Compression Works</h2>
          <p>
            Image compression reduces the amount of data inside a picture while trying to keep the image visually useful.
            A large photo from a phone or camera often contains more pixels and detail than a website, email, form, or
            chat app needs. A free image compressor online helps remove that extra weight so the file loads faster and
            takes up less storage.
          </p>
          <p>
            When you upload an image here, the tool reads the file in your browser and creates a smaller version using
            browser-side compression. That means this page can work as an image size reducer without sending your file to
            a remote server. The final result depends on the original image type, dimensions, colors, and quality level.
            A detailed JPG photo can often shrink by a large amount. A simple PNG logo may shrink less because it is
            already efficient for flat graphics.
          </p>
          <p>
            Compression is especially useful when images slow down a page. Smaller images improve load speed, reduce
            bandwidth, and make pages feel lighter on mobile networks. If you manage a blog, landing page, portfolio,
            store, or directory, using a photo compressor before publishing can make the whole page easier to open.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Lossy vs Lossless Compression</h2>
          <p>
            Lossless compression reduces file size without removing visible image information. It is best when exact
            detail matters, such as icons, screenshots, line art, or graphics with sharp text. PNG compression is often
            associated with lossless workflows, although PNG files can still become large when the image has many colors
            or photographic detail.
          </p>
          <p>
            Lossy compression removes some image data to make the file much smaller. JPG compression is the most common
            example. A balanced lossy setting can look nearly identical to the original while creating a noticeably
            smaller file. Push the setting too far and you may see blur, blocky areas, color banding, or rough edges.
            That is why this tool includes Low Compression, Balanced, and Maximum Compression presets along with the
            manual slider.
          </p>
          <p>
            WebP can support both lossy and lossless compression, which makes it a strong web format. A WebP compressor
            is often useful when you want modern browser support and smaller website assets. For everyday work, start
            with Balanced. Use Low Compression when image quality is more important than file size, and use Maximum
            Compression when you need the smallest possible result for sharing or uploading.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Best Image Sizes for Common Uses</h2>
          <p>
            For websites, aim for the smallest file that still looks sharp in its display area. A large hero image may
            need more width than a thumbnail, but it still should not be several megabytes unless there is a special
            reason. Compress image online before publishing, and test the result on mobile as well as desktop.
          </p>
          <p>
            For WhatsApp and other messaging apps, smaller files are easier to send and faster for the receiver to open.
            Maximum Compression is often fine for casual sharing. For email, reduce image size before attaching files so
            messages send quickly and avoid attachment limits. A JPG compressor is usually best for photos, while a PNG
            compressor is better for graphics, transparency, and screenshots.
          </p>
          <p>
            For WordPress, Shopify, and other CMS or store platforms, compression can improve page speed and product page
            performance. Product images should still look clean enough for customers to inspect details, so Balanced is a
            sensible first choice. For decorative banners, blog thumbnails, and supporting images, stronger compression
            can be acceptable if the visual result still looks professional.
          </p>
        </div>

        <div className="tool-copy">
          <h2>JPG, PNG, and WebP Tips</h2>
          <p>
            Use JPG for regular photographs, travel images, portraits, food photos, and product photos without
            transparency. JPG files usually compress well because they are designed for complex color and photographic
            detail. If you need a photo compressor for a blog post or landing page, JPG is often the practical choice.
          </p>
          <p>
            Use PNG when you need transparency, crisp edges, screenshots, logos, or graphics with text. PNG files can be
            larger than JPG files, but they preserve sharp detail well. Use WebP when you want a modern web image format
            that can produce smaller files for many website use cases. If you are not sure which format to use, compress
            the image first, compare the result, and keep the version that looks best at the smallest size.
          </p>
        </div>

        <div className="tool-copy">
          <h2>FAQ</h2>
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="tool-copy">
          <h2>Related Tools</h2>
          <div className="related-tools">
            <Link href="/image-converter">Image Converter</Link>
            <Link href="/jpg-to-png">JPG to PNG</Link>
            <Link href="/png-to-jpg">PNG to JPG</Link>
            <Link href="/webp-to-png">WebP to PNG</Link>
            <Link href="/image-resizer">Image Resizer</Link>
            <Link href="/crop-image">Crop Image</Link>
            <Link href="/pdf-compressor">PDF Compressor</Link>
            <Link href="/word-to-pdf">Word to PDF</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
