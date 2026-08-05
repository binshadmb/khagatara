'use client'

import Link from 'next/link'
import { LANGUAGE_CONFIG } from './astro-languages'

// ── Live public verticals ─────────────────────────────────────────────────────
const VERTICALS = [
  {
    id: 'astro',
    name: 'Astrology & Numerology',
    tagline: 'Vedic wisdom, made digital.',
    desc: 'Birth charts, numerology readings, compatibility — in 12 languages. Built for seekers who think in Sanskrit and dream in numbers.',
    href: 'https://astro.khagatara.com',
    label: 'astro.khagatara.com',
    status: 'live',
    accent: '#bb9af7',
  },
  {
    id: 'export',
    name: 'Kerala Export',
    tagline: 'From the spice coast to the world.',
    desc: 'Rice, coconut, cashew, coir — agricultural commodities sourced from Kerala and shipped to global buyers.',
    href: 'https://export.khagatara.com',
    label: 'export.khagatara.com',
    status: 'live',
    accent: '#9ece6a',
  },
]

// ── Work-in-progress verticals (brief, no links yet) ─────────────────────────
const WIP = [
  {
    id: 'books',
    name: 'Khagatara Books',
    desc: 'A publishing and reading platform. Backend and frontend in active development.',
    accent: '#7dcfff',
  },
  {
    id: 'tools',
    name: 'Khagatara Tools',
    desc: 'A growing suite of browser-based utilities — image tools, PDF tools, calculators, generators. Over 25 micro-tools live as standalone deployments.',
    accent: '#e0af68',
  },
  {
    id: 'finance',
    name: 'Finance & Trading',
    desc: 'Scalper, TickMatrix, GST-Filer — internal tools for market execution and tax compliance.',
    accent: '#f7768e',
  },
  {
    id: 'ai',
    name: 'AI & Dev Experiments',
    desc: 'Image upscaling, code generation, video creation, translation engine, IDE tooling — ongoing R&D.',
    accent: '#2ac3de',
  },
]

export default function Home() {
  return (
    <main className="page">

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-logo">
          <div className="tri-wrap" aria-hidden="true">
            <div className="tr">
              <div className="t tu ta"></div>
              <div className="t tu tb"></div>
              <div className="t tu tc"></div>
            </div>
            <div className="tr">
              <div className="t tu tb"></div>
              <div className="t tu tc"></div>
            </div>
            <div className="tr">
              <div className="t td te"></div>
            </div>
          </div>
          <span className="logo-txt">khagatara</span>
        </div>
        <div className="nav-links">
          {VERTICALS.map(v => (
            <a key={v.id} href={v.href}>{v.name}</a>
          ))}
        </div>
      </nav>

      {/* ── Hero / Intro ─────────────────────────────────────────── */}
      <section
        className="hero site-hero"
        style={{ textAlign: 'left', padding: '3.5rem 2.5rem 3rem' }}
      >
        <div className="hero-eyebrow">Khagatara · Kerala, India</div>
        <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
          One founder.<br />
          <em>Many verticals.</em>
        </h1>
        <p
          className="hero-sub"
          style={{
            marginTop: '1.2rem',
            fontSize: '0.88rem',
            lineHeight: '1.9',
            maxWidth: '640px',
            textTransform: 'none',
            letterSpacing: '0.02em',
            color: 'var(--text-mid)',
          }}
        >
          Khagatara is an independent studio run from Kerala — not a company in the traditional
          sense, but a single founder building and operating multiple businesses across technology,
          knowledge, and trade. 77 repositories. Several live products. More in progress.
          This page is the front door.
        </p>
      </section>

      <div className="divider"></div>

      {/* ── Live Verticals ───────────────────────────────────────── */}
      <section className="section" style={{ padding: '3rem 2.5rem' }}>
        <div className="section-label" style={{ marginBottom: '2rem' }}>
          Live Now
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1.25rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            maxWidth: '860px',
          }}
        >
          {VERTICALS.map(v => (
            <a
              key={v.id}
              href={v.href}
              style={{
                display: 'block',
                background: 'var(--surface2)',
                border: '0.5px solid var(--border2)',
                borderRadius: '12px',
                padding: '1.75rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = v.accent
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border2)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: v.accent,
                  fontWeight: 700,
                  marginBottom: '0.7rem',
                }}
              >
                ● Live
              </span>

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.45rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '0.25rem',
                }}
              >
                {v.name}
              </div>

              <div
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                  color: v.accent,
                  marginBottom: '0.9rem',
                  fontStyle: 'italic',
                }}
              >
                {v.tagline}
              </div>

              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-low)',
                  lineHeight: '1.75',
                  marginBottom: '1.25rem',
                }}
              >
                {v.desc}
              </p>

              <span
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                {v.label} →
              </span>
            </a>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* ── About ───────────────────────────────────────────────── */}
      <section className="section" style={{ padding: '3rem 2.5rem', maxWidth: '800px' }}>
        <div className="section-label" style={{ marginBottom: '1.5rem' }}>About</div>
        <div className="site-panel">
          <p>
            Khagatara started as an astrology and numerology platform — Vedic-first, multilingual,
            built to reach people in their own language without putting knowledge behind a paywall.
            It grew into something wider.
          </p>
          <p>
            The export vertical launched in 2026. Kerala produces some of the finest agricultural
            commodities in the world — coconut, cashew, coir, rice — and the work is getting those
            products to international buyers with transparency and reliability.
          </p>
          <p>
            Alongside these, a tools ecosystem has been built across image processing, PDF
            handling, calculators, and generators — each deployed as its own lightweight
            application. Books, finance tools, and AI experiments are in various stages of
            development.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '0.5rem' }}>
            — Binshad M B, founder
          </p>
        </div>
      </section>

      <div className="divider"></div>

      {/* ── In Development ──────────────────────────────────────── */}
      <section className="section" style={{ padding: '3rem 2.5rem' }}>
        <div className="section-label" style={{ marginBottom: '1.75rem' }}>
          In Development
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            maxWidth: '860px',
          }}
        >
          {WIP.map(w => (
            <div
              key={w.id}
              style={{
                background: 'var(--surface)',
                border: '0.5px solid var(--border)',
                borderRadius: '10px',
                padding: '1.4rem',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: '0.56rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: w.accent,
                  fontWeight: 700,
                  marginBottom: '0.6rem',
                  opacity: 0.8,
                }}
              >
                ◌ Building
              </span>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '0.6rem',
                }}
              >
                {w.name}
              </div>
              <p
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-low)',
                  lineHeight: '1.7',
                }}
              >
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* ── Language links ───────────────────────────────────────── */}
      <section className="lang-section" style={{ padding: '2.5rem 2.5rem 3rem' }}>
        <div className="section-label" style={{ marginBottom: '1.25rem' }}>
          Astrology in your language
        </div>
        <div className="lang-grid">
          {LANGUAGE_CONFIG.map(([code, name]) => (
            <a
              key={code}
              className="lang-pill"
              href={`https://astro.khagatara.com/${code}`}
            >
              {name}
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-txt">© 2026 khagatara.com</div>
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>

    </main>
  )
}
