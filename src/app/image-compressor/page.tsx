import type { Metadata } from 'next'
import Link from 'next/link'
import ImageCompressorLoader from './ImageCompressorLoader'

export const revalidate = 86400

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
    answer: 'For most website images, use Balanced first. If the image is decorative or very large, Smallest File can reduce page weight further.',
  },
  {
    question: 'How do I compress an image to 100 KB?',
    answer: 'Upload the image, choose the Target 100 KB option, and click Compress Image. The tool will try to reduce the file close to that upload limit while keeping the image usable.',
  },
  {
    question: 'How do I reduce photo size without losing quality?',
    answer: 'Start with Low Compression (Best Quality) or Balanced. These settings reduce image size while avoiding the harsh artifacts that can appear with very aggressive compression.',
  },
  {
    question: 'Why is my PNG still large after compression?',
    answer: 'PNG files with many colors, transparency, or screenshot detail may stay large. For photos, JPG or WebP usually compresses better than PNG.',
  },
  {
    question: 'Is JPG or WebP better for websites?',
    answer: 'WebP is often smaller for modern websites, while JPG remains widely compatible and works well for photos. Test both if your publishing workflow supports them.',
  },
  {
    question: 'Does image compression affect SEO?',
    answer: 'Yes. Smaller images can improve page speed and Core Web Vitals, which helps visitors and can support better organic performance.',
  },
]

const pageUrl = 'https://www.khagatara.com/image-compressor'

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

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Khagatara Image Compressor',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Any',
  url: pageUrl,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Compress JPG images online',
    'Compress PNG images online',
    'Compress WebP images online',
    'Target 50 KB, 100 KB, 200 KB, and 500 KB output sizes',
    'Browser-side image compression',
    'Drag and drop image upload',
    'Paste image from clipboard',
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.khagatara.com/' },
    { '@type': 'ListItem', position: 2, name: 'Image Tools', item: 'https://www.khagatara.com/image-tools' },
    { '@type': 'ListItem', position: 3, name: 'Image Compressor', item: pageUrl },
  ],
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to compress an image online',
  description: 'Compress JPG, PNG, and WebP images in your browser for websites, email, forms, and upload limits.',
  step: [
    { '@type': 'HowToStep', name: 'Upload an image', text: 'Choose, drag and drop, or paste a JPG, PNG, or WebP image.' },
    { '@type': 'HowToStep', name: 'Choose compression', text: 'Select a quality preset or target file size such as 50 KB, 100 KB, 200 KB, or 500 KB.' },
    { '@type': 'HowToStep', name: 'Compress the image', text: 'Click Compress Image and wait for browser-side compression to finish.' },
    { '@type': 'HowToStep', name: 'Download the result', text: 'Compare the preview, check the saved file size, and download the compressed image.' },
  ],
}

const structuredData = [faqJsonLd, softwareJsonLd, breadcrumbJsonLd, howToJsonLd]

export default function ImageCompressorPage() {
  return (
    <main className="page tool-page">
      {structuredData.map((item) => (
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

      <ImageCompressorLoader />

      <section className="tool-content">
        <div className="tool-copy">
          <h2>How to Use</h2>
          <ol>
            <li>Upload, drag and drop, or paste a JPG, PNG, or WebP image.</li>
            <li>Choose a quality preset, target 50 KB, target 100 KB, target 200 KB, target 500 KB, or adjust the slider.</li>
            <li>Click compress and download the smaller image.</li>
          </ol>
        </div>

        <div className="tool-copy">
          <h2>Benefits</h2>
          <ul>
            <li>Works in the browser, so no server upload is needed for this version.</li>
            <li>Helps reduce page weight for websites and blogs.</li>
            <li>Useful for forms, email attachments, and social posts.</li>
            <li>Shows before and after previews, dimensions, and saved file size.</li>
          </ul>
        </div>

        <div className="tool-copy">
          <h2>Compress Image to 50KB, 100KB, or 200KB</h2>
          <p>
            Many people do not just want a smaller photo. They need to compress image to 50KB, compress image to 100KB,
            or reduce an image below 200KB for a strict upload limit. That is why this tool includes target-size buttons.
            Choose 50 KB, 100 KB, 200 KB, or 500 KB and the compressor will try to create a file near that limit.
          </p>
          <p>
            Target-size compression is useful for passport photos, government forms, school applications, job portals,
            visa forms, and online profiles. If the result is still larger than the limit, try a smaller target or crop
            the image first with the <Link href="/crop-image">Crop Image</Link> tool. If the image dimensions are too
            large, use the <Link href="/image-resizer">Image Resizer</Link> before compressing.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Compress Images for Online Forms</h2>
          <p>
            Online applications often reject images that are too large. A photo may look normal on your phone but still
            be several megabytes. Use this image size reducer when a form asks for a smaller JPG, PNG, or WebP file.
            The 100 KB and 200 KB targets are good starting points for job portals, exam forms, profile photos, and
            document upload pages.
          </p>
          <p>
            For passport-style photos, check both file size and dimensions. Compression reduces file weight, while
            resizing changes pixel width and height. If your form mentions exact dimensions, resize first, then compress.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Compress Images for Websites</h2>
          <p>
            Website images should load quickly without looking damaged. Before uploading to WordPress, Shopify, a blog,
            or a landing page, compress image for website performance and compare the before and after preview. Smaller
            files can improve page speed, reduce bandwidth, and make mobile pages feel faster.
          </p>
          <p>
            If you need a different format, try the <Link href="/jpg-to-png">JPG to PNG converter</Link>,{' '}
            <Link href="/png-to-jpg">PNG to JPG converter</Link>, or <Link href="/webp-to-png">WebP to PNG converter</Link>.
            For documents, the <Link href="/pdf-compressor">PDF Compressor</Link> can help reduce PDF size too.
          </p>
        </div>

        <div className="tool-copy">
          <h2>Compress Images for Email</h2>
          <p>
            Email attachments can fail or send slowly when photos are too large. A quick photo compressor helps shrink
            images before attaching them to Gmail, Outlook, support tickets, or application emails. For everyday email,
            Balanced is usually enough. If the message still feels heavy, use Smallest File or a target size like 500 KB.
          </p>
          <p>
            Smaller images also make it easier for recipients on mobile data to open your message. When image quality
            matters, check the preview before downloading and use Low Compression (Best Quality).
          </p>
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
            That is why this tool includes Low Compression (Best Quality), Balanced, and Smallest File presets along with the
            manual slider.
          </p>
          <p>
            WebP can support both lossy and lossless compression, which makes it a strong web format. A WebP compressor
            is often useful when you want modern browser support and smaller website assets. For everyday work, start
            with Balanced. Use Low Compression (Best Quality) when image quality is more important than file size, and
            use Smallest File when you need the smallest possible result for sharing or uploading.
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
