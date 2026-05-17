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

export default function FreeAstrologyChartArPage() {
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
        body: JSON.stringify({ name, dob, city: 'Cairo' })
      })
      const data = await res.json()
      setResult(data)
    } catch {
      setError('حدث خطأ ما. يرجى المحاولة مرة أخرى.')
    }
    setLoading(false)
  }

  async function getFullReport() {
    setLoading(true)
    try {
      const res = await fetch('https://khagatara-api.onrender.com/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, dob, city: 'Cairo' })
      })
      const data = await res.json()
      window.location.href = data.checkout_url
    } catch {
      setError('فشل الدفع. يرجى المحاولة مرة أخرى.')
    }
    setLoading(false)
  }

  return (
    <main className="page" dir="rtl">
      <div className="header">
        <h1>خريطة الأبراج المجانية — القراءة الفيدية</h1>
        <p>احصل على خريطة أبراجك الفيدية المجانية مع البرج القمري والنكشاترا والفترات الكوكبية</p>
      </div>

      <div className="card">
        <div className="form-group">
          <input
            type="text"
            placeholder="أدخل اسمك الكامل عند الولادة"
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
          {loading ? 'جارٍ الحساب...' : 'احصل على خريطة أبراجي'}
        </button>
        {error && <p className="error">{error}</p>}
      </div>

      {result && (
        <div className="card">
          <div className="numbers-grid">
            <div className="number-box">
              <div className="number-value">{result.life_path}</div>
              <div className="number-label">رقم المسار</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.name_number}</div>
              <div className="number-label">رقم الاسم</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.soul_urge}</div>
              <div className="number-label">رغبة الروح</div>
            </div>
            <div className="number-box">
              <div className="number-value">{result.personality}</div>
              <div className="number-label">الشخصية</div>
            </div>
          </div>

          <p className="meaning">{result.meaning}</p>

          <div className="vedic-section">
            <div className="vedic-title">✦ القراءة الفيدية</div>
            <div className="vedic-row"><span>البرج القمري</span><span>{result.rashi}</span></div>
            <div className="vedic-row"><span>نجم الميلاد</span><span>{result.nakshatra} (Pada {result.nakshatra_pada})</span></div>
            <div className="vedic-row"><span>داشا الحالية</span><span>{result.dasha_lord} ({result.dasha_years} سنوات)</span></div>
          </div>

          <div className="premium-blur">
            يتضمن تقريرك الفيدي الكامل توقعات مهنية مفصلة وتوافق الشراكة
            والتواريخ المحظوظة وعلاجات الأحجار الكريمة وتحليل داشا الشامل
            ومخطط روحك الكامل كملف PDF من 8 صفحات.
          </div>

          <button className="btn-primary" onClick={getFullReport} disabled={loading}>
            {loading ? 'جارٍ التحميل...' : 'احصل على التقرير الكامل — 2.99€'}
          </button>
          <p className="payment-note">تنزيل PDF فوري • دفع آمن</p>
        </div>
      )}
    </main>
  )
}
