import type { Metadata } from 'next'
import Link from 'next/link'
import ImageCompressorTool from './ImageCompressorTool'

export const metadata: Metadata = {
  title: 'Free Image Compressor Online',
  description: 'Compress JPG PNG WEBP images online.',
  alternates: {
    canonical: '/image-compressor',
  },
}

export default function ImageCompressorPage() {
  return (
    <main className="page tool-page">
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
        <h1 className="hero-title">Free Image Compressor Online</h1>
        <p className="hero-sub site-sub">Compress JPG, PNG and WEBP images instantly in your browser.</p>
      </section>

      <ImageCompressorTool />

      <section className="tool-content">
        <div className="tool-copy">
          <h2>How to Use</h2>
          <ol>
            <li>Upload a JPG, PNG, or WEBP image.</li>
            <li>Choose the compression level with the slider.</li>
            <li>Click compress and download the smaller image.</li>
          </ol>
        </div>

        <div className="tool-copy">
          <h2>Benefits</h2>
          <ul>
            <li>Works in the browser, so no server upload is needed.</li>
            <li>Helps reduce page weight for websites and blogs.</li>
            <li>Useful for forms, email attachments, and social posts.</li>
          </ul>
        </div>

        <div className="tool-copy">
          <h2>FAQ</h2>
          <h3>Can I compress JPG, PNG, and WEBP images?</h3>
          <p>Yes. This first version accepts common browser image formats including JPG, PNG, and WEBP.</p>
          <h3>Will the image leave my device?</h3>
          <p>No. Compression runs in your browser for this version.</p>
          <h3>Does stronger compression reduce quality?</h3>
          <p>Yes. Smaller files usually mean some quality loss, so test the slider and pick the best balance.</p>
        </div>

        <div className="tool-copy">
          <h2>Related Tools</h2>
          <div className="related-tools">
            <Link href="/jpg-to-png">JPG to PNG</Link>
            <Link href="/png-to-jpg">PNG to JPG</Link>
            <Link href="/image-resizer">Image Resizer</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
