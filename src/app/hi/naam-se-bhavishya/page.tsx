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

export default function NumerologyHindiPage() {
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
        body: JSON.stringify({ name, dob, city: 'Delhi' })
      })
      const data = await res.json()
      setResult(data)
    } catch {
      setError('कुछ गलत हो गया। कृपया पुनः प्रयास करें।')
    }
    setLoading(false)
  }

  async function getFullReport() {
    setLoading(true)
    try {
      const res = await fetch('https://khagatara-api.onrender.com/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, dob, city: 'Delhi' })
      })
      const data = await res.json()
      window.location.href = data.checkout_url
    } catch {
      setError('भुगतान विफल। कृपया पुनः प्रयास करें।')
    }
    setLoading(false)
  }

  return (
    <main className="page">
      <div className="header">
        <h1>अंक ज्योतिष — मुफ़्त</h1>
        <p>अपना जीवन पथ अंक जानें और अपनी वैदिक कुंडली समझें</p>
      </div>

      <div className="card">
        <div className="form-group">
          <input
            type="text"
            placeholder="अपना पूरा नाम दर्ज करें"
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
          {loading ? 'गणना हो रही है...' : 'अभी जानें'}
        </button>
        {error && <p className="error">{error}</p>}
      </div>

      {result && (
        <div className="card">
          <div className="numbers-grid">
            <div className="number-box">
              <div className="number-value">{result.life_path}</div>
              <div className="number-label">जीवन पथ अंक</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.name_number}</div>
              <div className="number-label">नाम अंक</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.soul_urge}</div>
              <div className="number-label">आत्मा अंक</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.personality}</div>
              <div className="number-label">व्यक्तित्व अंक</div>
            </div>
          </div>

          <p className="meaning">{result.meaning}</p>

          <div className="vedic-section">
            <div className="vedic-title">✦ वैदिक ज्योतिष</div>
            <div className="vedic-row"><span>चंद्र राशि</span><span>{result.rashi}</span></div>
            <div className="vedic-row"><span>जन्म नक्षत्र</span><span>{result.nakshatra} (पाद {result.nakshatra_pada})</span></div>
            <div className="vedic-row"><span>वर्तमान दशा</span><span>{result.dasha_lord} ({result.dasha_years} वर्ष)</span></div>
          </div>

          <div className="premium-blur">
            आपकी पूर्ण वैदिक रिपोर्ट में विस्तृत करियर भविष्यवाणी, साझेदारी अनुकूलता,
            भाग्यशाली तिथियां, रत्न उपाय, दशा विश्लेषण और आपका पूर्ण आत्मा ब्लूप्रिंट PDF में शामिल है।
          </div>

          <button className="btn-primary" onClick={getFullReport} disabled={loading}>
            {loading ? 'लोड हो रहा है...' : 'पूरी रिपोर्ट पाएं — ₹299'}
          </button>
          <p className="payment-note">तुरंत PDF डाउनलोड • सुरक्षित भुगतान</p>
        </div>
      )}
    </main>
  )
}
