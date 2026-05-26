'use client'

import Link from 'next/link'
import { LANGUAGE_CONFIG, TOPIC_SLUGS } from './seo-config'
import TrendingStrip from './components/TrendingStrip'
import Calculator from './components/Calculator'

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-logo">
          <div className="tri-wrap" aria-hidden="true">
            <div className="tr"><div className="t tu ta"></div><div className="t tu tb"></div><div className="t tu tc"></div></div>
            <div className="tr"><div className="t tu tb"></div><div className="t tu tc"></div></div>
            <div className="tr"><div className="t td te"></div></div>
          </div>
          <span className="logo-txt">khagatara</span>
        </div>
        <div className="nav-links">
          <Link href="/en/free-numerology-reading">Readings</Link>
          <Link href="/en/free-vedic-astrology">Astrology</Link>
          <Link href="/en/free-birth-chart">Birth Chart</Link>
          <Link href="/en/numerology-compatibility">Compatibility</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-eyebrow">Vedic numerology</div>
        <h1 className="hero-title">Discover your<br /><em>cosmic path</em></h1>
        <p className="hero-sub">Ancient wisdom. Personal insight. Timeless guidance.</p>
      </section>

      <Calculator lang="en" />

      <section className="section">
        <div className="section-label">Popular free readings</div>
        <div className="readings-grid">
          <Link className="reading-pill" href="/en/free-numerology-reading">Free numerology reading</Link>
          <Link className="reading-pill" href="/en/numerology-by-name">Numerology by name</Link>
          <Link className="reading-pill" href="/en/meaning-of-number-11">Meaning of number 11</Link>
          <Link className="reading-pill" href="/en/free-vedic-astrology">Free Vedic astrology</Link>
          <Link className="reading-pill" href="/en/free-birth-chart">Free birth chart</Link>
          <Link className="reading-pill" href="/en/numerology-compatibility">Compatibility</Link>
          <Link className="reading-pill" href="/en/free-astrology-chart">Free astrology chart</Link>
        </div>
      </section>

      <section className="features">
        <div className="feat-card">
          <div className="feat-icon">01</div>
          <div className="feat-title">Life path</div>
          <div className="feat-desc">Uncover your soul&apos;s purpose and destiny number</div>
        </div>
        <div className="feat-card">
          <div className="feat-icon">02</div>
          <div className="feat-title">Birth chart</div>
          <div className="feat-desc">Vedic planetary positions at your moment of birth</div>
        </div>
        <div className="feat-card">
          <div className="feat-icon">03</div>
          <div className="feat-title">Compatibility</div>
          <div className="feat-desc">Discover your cosmic match and relationship path</div>
        </div>
        <Link href="/en/numerology-compatibility" className="feat-card feat-card--marriage">
          <div className="feat-icon">04</div>
          <div className="feat-title">Relationship &amp; Marriage</div>
          <div className="feat-desc">Partnership energy, karmic cycles, and relationship timing</div>
        </Link>
      </section>

      <div className="divider"></div>

      <TrendingStrip />

      <div className="divider"></div>

      <section className="lang-section">
        <div className="section-label">Read in your language</div>
        <div className="lang-grid">
          {LANGUAGE_CONFIG.map(([code, name]) => {
            const slug = TOPIC_SLUGS?.numerology?.[code] ?? 'free-numerology-reading'
            return (
              <Link key={code} className="lang-pill" href={`/${code}/${slug}`}>
                {name}
              </Link>
            )
          })}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-txt">© 2026 khagatara.com</div>
        <div className="footer-links">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </div>
      </footer>
    </main>
  )
}
