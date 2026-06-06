import type { Metadata } from 'next'
import Link from 'next/link'
import SputnikSlider from './components/SputnikSlider'

export const metadata: Metadata = {
  title: 'Khagatara Sputnik — 32K AI Image Enhancement',
  description:
    'Khagatara Sputnik is a premium AI image enhancement concept for HD, 4K, 8K, 16K, 24K, and 32K output tiers.',
}

export default function SputnikPage() {
  return (
    <main className="sputnik-page">
      <section className="sputnik-hero">
        <div className="sputnik-copy">
          <p className="sputnik-eyebrow">Khagatara Premium Lab</p>
          <h1>Sputnik Image Engine</h1>
          <p>
            A separate premium route for ultra-resolution enhancement. Same
            Khagatara frontend, same payment base, with a new tier router for
            Modal and Replicate processing.
          </p>
          <Link className="sputnik-cta" href="/premium">
            Start from Premium
          </Link>
        </div>
        <SputnikSlider />
      </section>

      <section className="sputnik-flow">
        <div>
          <span>01</span>
          <strong>Select tier</strong>
          <p>Choose HD, 2K, 4K, 8K, 16K, 24K, or 32K.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Route engine</strong>
          <p>Free tiers return original, 4K/8K use Modal, 16K+ use Replicate.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Download result</strong>
          <p>The API returns the processed image with pipeline headers.</p>
        </div>
      </section>
    </main>
  )
}
