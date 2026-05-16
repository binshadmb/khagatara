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

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">

      {/* Header */}
      <h1 className="text-4xl font-bold text-yellow-400 mb-2">Khagatara</h1>
      <p className="text-gray-400 text-lg mb-8">
        Discover your cosmic path through Vedic numerology
      </p>

      {/* Input form */}
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full bg-gray-800 rounded-xl p-4 mb-4 text-white outline-none"
        />
        <input
          type="date"
          value={dob}
          onChange={e => setDob(e.target.value)}
          className="w-full bg-gray-800 rounded-xl p-4 mb-6 text-white outline-none"
        />
        <button
          onClick={calculate}
          disabled={loading}
          className="w-full bg-yellow-400 text-gray-950 font-bold rounded-xl p-4"
        >
          {loading ? 'Calculating...' : 'Calculate My Path'}
        </button>
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8 bg-gray-900 rounded-2xl p-8 w-full max-w-md">

          {/* Numbers row */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-4xl font-bold text-yellow-400">{result.life_path}</div>
              <div className="text-gray-400 text-sm mt-1">Life Path</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-4xl font-bold text-yellow-400">{result.name_number}</div>
              <div className="text-gray-400 text-sm mt-1">Name Number</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-4xl font-bold text-yellow-400">{result.soul_urge}</div>
              <div className="text-gray-400 text-sm mt-1">Soul Urge</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center">
              <div className="text-4xl font-bold text-yellow-400">{result.personality}</div>
              <div className="text-gray-400 text-sm mt-1">Personality</div>
            </div>
          </div>

          {/* Meaning */}
          <p className="text-gray-300 text-center mb-6">{result.meaning}</p>

          {/* Vedic section - free teaser */}
          <div className="bg-gray-800 rounded-xl p-4 mb-6">
            <div className="text-yellow-400 text-sm font-bold mb-2">✦ Vedic Reading</div>
            <div className="text-gray-300 text-sm">
              Moon Sign: <span className="text-white">{result.rashi}</span>
            </div>
            <div className="text-gray-300 text-sm mt-1">
              Birth Star: <span className="text-white">{result.nakshatra} (Pada {result.nakshatra_pada})</span>
            </div>
            <div className="text-gray-300 text-sm mt-1">
              Current Dasha: <span className="text-white">{result.dasha_lord} ({result.dasha_years} years)</span>
            </div>
          </div>

          {/* Blurred premium content */}
          <div className="blur-sm select-none text-gray-500 text-sm mb-6 bg-gray-800 rounded-xl p-4">
            <p>Your full Vedic report includes:</p>
            <p>→ Complete career and money forecast 2025-2026</p>
            <p>→ Relationship compatibility deep dive</p>
            <p>→ Lucky dates, colors and gemstone remedies</p>
            <p>→ Detailed dasha period analysis</p>
            <p>→ Your complete soul blueprint PDF</p>
          </div>

          {/* Payment button */}
          <button className="w-full bg-yellow-400 text-gray-950 font-bold rounded-xl p-4 text-lg">
            Get Full Report — €2.99
          </button>
          <p className="text-gray-500 text-xs text-center mt-2">
            Instant PDF download • Secure payment
          </p>

        </div>
      )}
    </main>
  )
}