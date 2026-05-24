'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

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
  const [birthTime, setBirthTime] = useState('')
  const [ampm, setAmpm] = useState('AM')
  const [birthPlace, setBirthPlace] = useState('')
  const [timeUnknown, setTimeUnknown] = useState(false)
  const [gender, setGender] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isIndia, setIsIndia] = useState(false)

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    setIsIndia(tz.startsWith('Asia/Kolkata') || tz.startsWith('Asia/Calcutta'))
  }, [])

  const showDisclaimer = timeUnknown || gender === 'prefer_not'

  function buildPayload() {
    return {
      name,
      dob,
      birth_time: timeUnknown ? '' : birthTime,
      ampm,
      birth_place: birthPlace,
      time_unknown: timeUnknown,
    }
  }

  async function calculate() {
    if (!name || !dob) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://khagatara-api.onrender.com/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload())
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
      if (isIndia) {
        // Razorpay flow for India
        const res = await fetch('https://khagatara-api.onrender.com/create-checkout-inr', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(buildPayload())
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.detail || 'Payment failed')

        const rzp = new (window as any).Razorpay({
          key:         data.key_id,
          amount:      data.amount,
          currency:    data.currency,
          order_id:    data.order_id,
          name:        'Khagatara',
          description: 'Your Complete Vedic Blueprint',
          prefill:     { name: data.name },
          theme:       { color: '#c8901a' },
          handler: function() {
            window.location.href = 'https://khagatara.com/success'
          }
        })
        rzp.open()
      } else {
        // Stripe flow for rest of world
        const res = await fetch('https://khagatara-api.onrender.com/create-checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(buildPayload())
        })
        const data = await res.json()
        if (!res.ok || !data.checkout_url) throw new Error(data.detail || 'Payment failed')
        window.location.href = data.checkout_url
      }
    } catch (err: unknown) {
      console.error(err)
      setError('Payment failed. Please try again.')
    }
    setLoading(false)
  }

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

        <div className="form-card">
          <div className="form-row">
            <label htmlFor="name" className="font-mono-crisp text-[var(--text-low)] text-[10px] font-bold uppercase tracking-widest">Your full name</label>
            <input className="font-sans tracking-wide"
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="dob">Date of birth</label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={e => setDob(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="birthPlace">Place of birth</label>
            <input
              id="birthPlace"
              type="text"
              placeholder="City, Country (e.g. Thrissur, India)"
              value={birthPlace}
              onChange={e => setBirthPlace(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Birth time</label>
            <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
              <input
                type="time"
                value={birthTime}
                onChange={e => setBirthTime(e.target.value)}
                disabled={timeUnknown}
                style={{flex:1, opacity: timeUnknown ? 0.4 : 1}}
              />
              <select
                value={ampm}
                onChange={e => setAmpm(e.target.value)}
                disabled={timeUnknown}
                style={{
                  background:'var(--surface2)', border:'0.5px solid var(--border2)',
                  borderRadius:'6px', color:'var(--text)', padding:'0.65rem 0.5rem',
                  fontSize:'0.82rem', opacity: timeUnknown ? 0.4 : 1
                }}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <label style={{display:'flex', alignItems:'center', gap:'8px', marginTop:'8px', cursor:'pointer', fontSize:'0.72rem', color:'var(--text-low)'}}>
              <input
                type="checkbox"
                checked={timeUnknown}
                onChange={e => setTimeUnknown(e.target.checked)}
                style={{accentColor:'var(--accent)'}}
              />
              I don&apos;t know my exact birth time
            </label>
          </div>
          <div className="form-row">
            <label>Gender</label>
            <div style={{display:'flex', gap:'16px', marginTop:'4px'}}>
              {[['male','Male'],['female','Female'],['prefer_not','Prefer not to say']].map(([val, label]) => (
                <label key={val} style={{display:'flex', alignItems:'center', gap:'6px', cursor:'pointer', fontSize:'0.82rem', color: gender === val ? 'var(--accent)' : 'var(--text-low)'}}>
                  <input
                    type="radio"
                    name="gender"
                    value={val}
                    checked={gender === val}
                    onChange={() => setGender(val)}
                    style={{accentColor:'var(--accent)'}}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {showDisclaimer && (
            <div className="bg-[var(--surface2)] border border-[var(--accent)] rounded-lg p-3 mb-3 text-[0.72rem] text-[var(--text)] opacity-90 leading-relaxed font-mono">
              ⚠️ Some readings may be approximate due to missing birth details. For accurate Nakshatra, Pada, Lagna, and Dasha calculations, exact birth time and birthplace are recommended.
            </div>
          )}

          <button className="w-full bg-[var(--primary)] text-[var(--background)] font-bold py-3 px-4 rounded-md transition-transform active:scale-[0.98] disabled:opacity-50 hover:brightness-110 tracking-wide uppercase text-xs" onClick={calculate} disabled={loading}>
            {loading ? 'Calculating...' : 'Calculate my path'}
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </section>

      {result && (
        <section className="result-card mt-8 border border-[var(--border-clean)] p-6 bg-[var(--surface)] rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="border border-[var(--border-clean)] bg-[var(--surface2)] p-4 rounded text-center">
              <div className="text-4xl font-bold font-mono-crisp text-[var(--accent)] drop-shadow-[0_0_8px_var(--accent-glow)] antialiased">{result.life_path}</div>
              <div className="text-[10px] text-[var(--text-low)] uppercase tracking-widest mt-2 font-bold font-mono-crisp">Life Path</div>
            </div>
            <div className="border border-[var(--border-clean)] bg-[var(--surface2)] p-4 rounded text-center">
              <div className="text-4xl font-bold font-mono-crisp text-[var(--accent)] drop-shadow-[0_0_8px_var(--accent-glow)] antialiased">{result.name_number}</div>
              <div className="text-[10px] text-[var(--text-low)] uppercase tracking-widest mt-2 font-bold font-mono-crisp">Name Number</div>
            </div>
            <div className="border border-[var(--border-clean)] bg-[var(--surface2)] p-4 rounded text-center">
              <div className="text-4xl font-bold font-mono-crisp text-[var(--accent)] drop-shadow-[0_0_8px_var(--accent-glow)] antialiased">{result.soul_urge}</div>
              <div className="text-[10px] text-[var(--text-low)] uppercase tracking-widest mt-2 font-bold font-mono-crisp">Soul Urge</div>
            </div>
            <div className="border border-[var(--border-clean)] bg-[var(--surface2)] p-4 rounded text-center">
              <div className="text-4xl font-bold font-mono-crisp text-[var(--accent)] drop-shadow-[0_0_8px_var(--accent-glow)] antialiased">{result.personality}</div>
              <div className="text-[10px] text-[var(--text-low)] uppercase tracking-widest mt-2 font-bold font-mono-crisp">Personality</div>
            </div>
          </div>

          <p className="meaning text-[var(--text-high)] font-medium leading-relaxed mb-6 text-sm bg-[var(--surface2)] p-4 rounded border border-[var(--border-clean)]">{result.meaning}</p>

          <div className="border-t border-[var(--border-clean)] pt-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--secondary)] mb-3 font-mono-crisp">Vedic Reading</div>
            <div className="flex justify-between items-center text-xs py-2 border-b border-[var(--border-clean)] font-mono-crisp">
              <span className="text-[var(--text)]">Moon Sign</span>
              <span className="font-bold text-[var(--text-high)]">{result.rashi}</span>
            </div>
            <div className="flex justify-between items-center text-xs py-2 border-b border-[var(--border-clean)] font-mono-crisp">
              <span className="text-[var(--text)]">Birth Star</span>
              <span className="font-bold text-[var(--text-high)]">{result.nakshatra} <span className="text-[var(--secondary)] font-medium">(P-{result.nakshatra_pada})</span></span>
            </div>
            <div className="flex justify-between items-center text-xs py-2 font-mono-crisp">
              <span className="text-[var(--text)]">Current Dasha</span>
              <span className="font-bold text-[var(--text-high)]">{result.dasha_lord} <span className="text-[var(--accent)] font-medium">({result.dasha_years} YRS)</span></span>
            </div>
          </div>

          <div className="premium-blur my-6 p-4 rounded-md bg-[var(--surface2)] bg-opacity-40 border border-[var(--secondary)] border-opacity-20 backdrop-blur-md text-xs text-[var(--text)] leading-relaxed">
            Your full Vedic report includes complete career forecast, relationship compatibility,
            lucky dates and gemstone remedies, detailed dasha analysis, and your complete soul blueprint PDF.
          </div>

          <button className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-[var(--background)] font-extrabold py-3 rounded-md uppercase tracking-wider text-sm shadow-lg hover:brightness-110 active:scale-[0.99] transition-all" onClick={getFullReport} disabled={loading}>
            {loading ? 'Loading...' : isIndia ? 'Get Full Report - ₹99' : 'Get Full Report - EUR 2.99'}
          </button>
          <p className="payment-note text-center text-[var(--text-low)] text-[0.7rem] mt-2 font-mono">Instant PDF download - Secure payment</p>
        </section>
      )}

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

      <section className="lang-section">
        <div className="section-label">Read in your language</div>
        <div className="lang-grid">
          <Link className="lang-pill" href="/en/free-numerology-reading">English</Link>
          <Link className="lang-pill" href="/es/numerologia-gratis">Español</Link>
          <Link className="lang-pill" href="/pt/numerologia-gratis">Português</Link>
          <Link className="lang-pill" href="/fr/numerologie-gratuite">Français</Link>
          <Link className="lang-pill" href="/it/numerologia-gratis">Italiano</Link>
          <Link className="lang-pill" href="/de/numerologie-kostenlos">Deutsch</Link>
          <Link className="lang-pill" href="/hi/numerology-hindi">हिन्दी</Link>
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
