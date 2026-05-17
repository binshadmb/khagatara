'use client'
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

export default function GeburtskarteKostenlosPage() {
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
        body: JSON.stringify({ name, dob, city: 'Berlin' })
      })
      const data = await res.json()
      setResult(data)
    } catch {
      setError('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.')
    }
    setLoading(false)
  }

  async function getFullReport() {
    setLoading(true)
    try {
      const res = await fetch('https://khagatara-api.onrender.com/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, dob, city: 'Berlin' })
      })
      const data = await res.json()
      window.location.href = data.checkout_url
    } catch {
      setError('Zahlung fehlgeschlagen. Bitte versuchen Sie es erneut.')
    }
    setLoading(false)
  }

  return (
    <main className="page">
      <div className="header">
        <h1>Geburtskarte Kostenlos</h1>
        <p>Ihre vollständige vedische Geburtskarte — Mondzeichen, Nakshatra und Dasha gratis</p>
      </div>

      <div className="card">
        <div className="form-group">
          <input
            type="text"
            placeholder="Geben Sie Ihren vollständigen Namen ein"
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
        <button className="btn-primary" onClick={calculate} disabled={loading}>
          {loading ? 'Berechne...' : 'Meine Geburtskarte berechnen'}
        </button>
        {error && <p className="error">{error}</p>}
      </div>

      {result && (
        <div className="card">
          <div className="numbers-grid">
            <div className="number-box">
              <div className="number-value">{result.life_path}</div>
              <div className="number-label">Lebenszahl</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.name_number}</div>
              <div className="number-label">Namenszahl</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.soul_urge}</div>
              <div className="number-label">Herzenswunsch</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.personality}</div>
              <div className="number-label">Persönlichkeitszahl</div>
            </div>
          </div>

          <p className="meaning">{result.meaning}</p>

          <div className="vedic-section">
            <div className="vedic-title">✦ Vedische Lesung</div>
            <div className="vedic-row"><span>Mondzeichen</span><span>{result.rashi}</span></div>
            <div className="vedic-row"><span>Geburtsstern</span><span>{result.nakshatra} (Pada {result.nakshatra_pada})</span></div>
            <div className="vedic-row"><span>Aktuelles Dasha</span><span>{result.dasha_lord} ({result.dasha_years} Jahre)</span></div>
          </div>

          <div className="premium-blur">
            Ihr vollständiger vedischer Bericht enthält eine detaillierte Karriereprognose,
            Partnerschaftskompatibilität, Glücksdaten und Edelstein-Heilmittel,
            eine umfassende Dasha-Analyse sowie Ihr komplettes Seelen-Blueprint als PDF.
          </div>

          <button className="btn-primary" onClick={getFullReport} disabled={loading}>
            {loading ? 'Wird geladen...' : 'Vollständigen Bericht erhalten — 2,99 €'}
          </button>
          <p className="payment-note">Sofortiger PDF-Download • Sichere Zahlung</p>
        </div>
      )}
    </main>
  )
}
