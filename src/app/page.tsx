'use client'
import Link from 'next/link'
import { useState } from 'react'

interface Result {
  life_path: number
  name_number: number
  soul_urge: number
  personality: number
  meaning: string
  rashi: string
  nakshatra: string
  nakshatra_pada: number
  dasha_lord: string
  dasha_years: number
}

export default function Home() {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function calculate() {
    if (!name || !dob) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://khagatara-api.onrender.com/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, dob, city: 'London' })
      })
      const data = await res.json()
      setResult(data)
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  async function getFullReport() {
    setLoading(true)
    try {
      const res = await fetch('https://khagatara-api.onrender.com/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, dob, city: 'London' })
      })
      const data = await res.json()
      window.location.href = data.checkout_url
    } catch {
      setError('Payment failed. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main className="page">
      <div className="header">
        <h1>Khagatara</h1>
        <p>Discover your cosmic path through Vedic numerology</p>
      </div>

      <div className="card">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            value={dob}
            onChange={e => setDob(e.target.value)}
          />
        </div>
        <button
          className="btn-primary"
          onClick={calculate}
          disabled={loading}
        >
          {loading ? 'Calculating...' : 'Calculate My Path'}
        </button>
        {error && <p className="error">{error}</p>}
      </div>

      {result && (
        <div className="card">
          <div className="numbers-grid">
            <div className="number-box">
              <div className="number-value">{result.life_path}</div>
              <div className="number-label">Life Path</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.name_number}</div>
              <div className="number-label">Name Number</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.soul_urge}</div>
              <div className="number-label">Soul Urge</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.personality}</div>
              <div className="number-label">Personality</div>
            </div>
          </div>

          <p className="meaning">{result.meaning}</p>

          <div className="vedic-section">
            <div className="vedic-title">✦ Vedic Reading</div>
            <div className="vedic-row">
              <span>Moon Sign</span>
              <span>{result.rashi}</span>
            </div>
            <div className="vedic-row">
              <span>Birth Star</span>
              <span>{result.nakshatra} (Pada {result.nakshatra_pada})</span>
            </div>
            <div className="vedic-row">
              <span>Current Dasha</span>
              <span>{result.dasha_lord} ({result.dasha_years} yrs)</span>
            </div>
          </div>

          <div className="premium-blur">
            Your full Vedic report includes complete career forecast,
            relationship compatibility, lucky dates and gemstone remedies,
            detailed dasha analysis, and your complete soul blueprint PDF.
          </div>

          <button
            className="btn-primary"
            onClick={getFullReport}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get Full Report — €2.99'}
          </button>
          <p className="payment-note">Instant PDF download • Secure payment</p>
        </div>
      )}

      <div className="card link-card">
        <h2>Popular Free Readings</h2>
        <div className="internal-links">
          <Link href="/en/free-numerology-reading">Free Numerology Reading</Link>
          <Link href="/en/numerology-by-name">Numerology by Name</Link>
          <Link href="/en/meaning-of-number-11">Meaning of Number 11</Link>
          <Link href="/en/free-vedic-astrology">Free Vedic Astrology</Link>
          <Link href="/en/free-birth-chart">Free Birth Chart</Link>
          <Link href="/en/numerology-compatibility">Numerology Compatibility</Link>
          <Link href="/en/free-astrology-chart">Free Astrology Chart</Link>
        </div>
      </div>

      <div className="card link-card">
        <h2>Read in Your Language</h2>
        <div className="internal-links language-links">
          <Link href="/en/free-numerology-reading">English</Link>
          <Link href="/es/numerologia-gratis">Español</Link>
          <Link href="/pt/numerologia-gratis">Português</Link>
          <Link href="/fr/numerologie-gratuite">Français</Link>
          <Link href="/it/numerologia-gratis">Italiano</Link>
          <Link href="/de/numerologie-kostenlos">Deutsch</Link>
          <Link href="/hi/numerology-hindi">हिन्दी</Link>
        </div>
      </div>
    </main>
  )
}
