'use client'

import { useMemo, useState } from 'react'
import type { StandaloneToolConfig } from './standalone-tools'

function numberValue(value: string) {
  const next = Number(value)
  return Number.isFinite(next) ? next : 0
}

function money(value: number) {
  return value.toLocaleString('en-IN', { maximumFractionDigits: 2 })
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function AgeTool() {
  const [dob, setDob] = useState('2000-01-01')
  const result = useMemo(() => {
    const birth = new Date(`${dob}T00:00:00`)
    const today = new Date()
    if (Number.isNaN(birth.getTime()) || birth > today) return null

    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (days < 0) {
      months -= 1
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if (months < 0) {
      years -= 1
      months += 12
    }

    const totalDays = Math.floor((today.getTime() - birth.getTime()) / 86400000)
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
    if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1)
    const daysToBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / 86400000)

    return { years, months, days, totalDays, daysToBirthday }
  }, [dob])

  return (
    <>
      <label className="standalone-field">Date of birth<input type="date" value={dob} onChange={(event) => setDob(event.target.value)} /></label>
      <div className="file-stats">
        <Metric label="Exact age" value={result ? `${result.years}y ${result.months}m ${result.days}d` : 'Enter a valid date'} />
        <Metric label="Total days" value={result ? `${result.totalDays}` : '-'} />
        <Metric label="Next birthday" value={result ? `${result.daysToBirthday} days` : '-'} />
        <Metric label="Life stage" value={result && result.years >= 18 ? 'Adult' : 'Under 18'} />
      </div>
    </>
  )
}

function BmiTool() {
  const [weight, setWeight] = useState('70')
  const [height, setHeight] = useState('170')
  const bmi = numberValue(weight) / Math.pow(numberValue(height) / 100, 2)
  const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy' : bmi < 30 ? 'Overweight' : 'Obesity range'

  return (
    <>
      <div className="standalone-grid">
        <label className="standalone-field">Weight kg<input value={weight} onChange={(event) => setWeight(event.target.value)} inputMode="decimal" /></label>
        <label className="standalone-field">Height cm<input value={height} onChange={(event) => setHeight(event.target.value)} inputMode="decimal" /></label>
      </div>
      <div className="file-stats">
        <Metric label="BMI" value={Number.isFinite(bmi) ? bmi.toFixed(1) : '-'} />
        <Metric label="Category" value={Number.isFinite(bmi) ? category : '-'} />
      </div>
    </>
  )
}

function EmiTool() {
  const [principal, setPrincipal] = useState('500000')
  const [rate, setRate] = useState('9')
  const [years, setYears] = useState('5')
  const months = numberValue(years) * 12
  const monthlyRate = numberValue(rate) / 12 / 100
  const emi = monthlyRate > 0
    ? numberValue(principal) * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
    : numberValue(principal) / months
  const total = emi * months

  return (
    <>
      <div className="standalone-grid">
        <label className="standalone-field">Loan amount<input value={principal} onChange={(event) => setPrincipal(event.target.value)} inputMode="decimal" /></label>
        <label className="standalone-field">Interest %<input value={rate} onChange={(event) => setRate(event.target.value)} inputMode="decimal" /></label>
        <label className="standalone-field">Years<input value={years} onChange={(event) => setYears(event.target.value)} inputMode="decimal" /></label>
      </div>
      <div className="file-stats">
        <Metric label="Monthly EMI" value={`₹${money(emi || 0)}`} />
        <Metric label="Total interest" value={`₹${money((total || 0) - numberValue(principal))}`} />
        <Metric label="Total payment" value={`₹${money(total || 0)}`} />
        <Metric label="Months" value={`${months || 0}`} />
      </div>
    </>
  )
}

function GstTool() {
  const [amount, setAmount] = useState('1000')
  const [rate, setRate] = useState('18')
  const [mode, setMode] = useState<'add' | 'remove'>('add')
  const amt = numberValue(amount)
  const pct = numberValue(rate)
  const tax = mode === 'add' ? amt * pct / 100 : amt - amt / (1 + pct / 100)
  const base = mode === 'add' ? amt : amt - tax
  const total = mode === 'add' ? amt + tax : amt

  return (
    <>
      <div className="tool-inline-actions">
        <button className={mode === 'add' ? 'active' : ''} onClick={() => setMode('add')}>Add GST</button>
        <button className={mode === 'remove' ? 'active' : ''} onClick={() => setMode('remove')}>Remove GST</button>
      </div>
      <div className="standalone-grid">
        <label className="standalone-field">Amount<input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="decimal" /></label>
        <label className="standalone-field">GST %<input value={rate} onChange={(event) => setRate(event.target.value)} inputMode="decimal" /></label>
      </div>
      <div className="file-stats">
        <Metric label="Base" value={`₹${money(base)}`} />
        <Metric label="GST" value={`₹${money(tax)}`} />
        <Metric label="Total" value={`₹${money(total)}`} />
      </div>
    </>
  )
}

function CostTool({ type }: { type: StandaloneToolConfig['kind'] }) {
  const [a, setA] = useState(type === 'restaurantProfit' ? '50000' : '120')
  const [b, setB] = useState(type === 'restaurantProfit' ? '30000' : '300')
  const [c, setC] = useState(type === 'recipeCost' ? '10' : '0')
  const first = numberValue(a)
  const second = numberValue(b)
  const third = numberValue(c)
  const isRecipe = type === 'recipeCost'
  const isRestaurant = type === 'restaurantProfit'
  const isHotel = type === 'hotelCost'
  const primary = isRestaurant ? first - second : isRecipe ? first / Math.max(third, 1) : second > 0 ? first / second * 100 : 0

  return (
    <>
      <div className="standalone-grid">
        <label className="standalone-field">{isRestaurant ? 'Revenue' : isRecipe ? 'Batch cost' : isHotel ? 'Room cost' : 'Ingredient cost'}<input value={a} onChange={(event) => setA(event.target.value)} inputMode="decimal" /></label>
        <label className="standalone-field">{isRestaurant ? 'Total costs' : isRecipe ? 'Selling price' : isHotel ? 'Room rate' : 'Selling price'}<input value={b} onChange={(event) => setB(event.target.value)} inputMode="decimal" /></label>
        {isRecipe && <label className="standalone-field">Servings<input value={c} onChange={(event) => setC(event.target.value)} inputMode="decimal" /></label>}
      </div>
      <div className="file-stats">
        <Metric label={isRestaurant ? 'Profit' : isRecipe ? 'Cost/serving' : 'Cost %'} value={isRestaurant || isRecipe ? `₹${money(primary)}` : `${primary.toFixed(2)}%`} />
        <Metric label="Margin" value={second > 0 ? `${(((second - first) / second) * 100).toFixed(2)}%` : '-'} />
      </div>
    </>
  )
}

function WordCounterTool() {
  const [text, setText] = useState('Paste or type your text here.')
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const sentences = text.trim() ? text.split(/[.!?]+/).filter((item) => item.trim()).length : 0
  const paragraphs = text.trim() ? text.split(/\n+/).filter((item) => item.trim()).length : 0

  return (
    <>
      <label className="standalone-field">Text<textarea value={text} onChange={(event) => setText(event.target.value)} rows={8} /></label>
      <div className="file-stats">
        <Metric label="Words" value={`${words}`} />
        <Metric label="Characters" value={`${text.length}`} />
        <Metric label="Sentences" value={`${sentences}`} />
        <Metric label="Reading time" value={`${Math.max(1, Math.ceil(words / 200))} min`} />
        <Metric label="Paragraphs" value={`${paragraphs}`} />
      </div>
    </>
  )
}

function PasswordTool() {
  const [length, setLength] = useState('16')
  const [password, setPassword] = useState('')
  const generate = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?'
    const size = Math.min(64, Math.max(8, numberValue(length)))
    const next = Array.from({ length: size }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    setPassword(next)
  }

  return (
    <>
      <label className="standalone-field">Length<input value={length} onChange={(event) => setLength(event.target.value)} inputMode="numeric" /></label>
      <button className="tool-action" onClick={generate}>Generate password</button>
      <div className="standalone-output">{password || 'Your password will appear here'}</div>
    </>
  )
}

function RandomNameTool() {
  const first = ['Aarav', 'Maya', 'Dev', 'Isha', 'Noah', 'Lina', 'Kabir', 'Sara', 'Ravi', 'Nora']
  const last = ['Menon', 'Shah', 'Thomas', 'Khan', 'Nair', 'Patel', 'Roy', 'Das', 'Verma', 'Ali']
  const [names, setNames] = useState<string[]>([])

  return (
    <>
      <button className="tool-action" onClick={() => setNames(Array.from({ length: 10 }, () => `${first[Math.floor(Math.random() * first.length)]} ${last[Math.floor(Math.random() * last.length)]}`))}>Generate names</button>
      <div className="standalone-output">{names.length ? names.join('\n') : 'Generated names will appear here'}</div>
    </>
  )
}

function QrTool() {
  const [text, setText] = useState('https://www.khagatara.com')
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(text)}`

  return (
    <>
      <label className="standalone-field">QR content<input value={text} onChange={(event) => setText(event.target.value)} /></label>
      <div className="standalone-preview">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrUrl} alt="Generated QR code" />
      </div>
      <a className="download-btn" href={qrUrl} download="khagatara-qr-code.png">Download QR</a>
    </>
  )
}

function BarcodeTool() {
  const [text, setText] = useState('KHAGATARA12345')
  const bars = Array.from(text).flatMap((char) => {
    const code = char.charCodeAt(0)
    return [code % 2 ? 2 : 1, code % 3 ? 1 : 3, code % 5 ? 2 : 1]
  })

  return (
    <>
      <label className="standalone-field">Barcode text<input value={text} onChange={(event) => setText(event.target.value)} /></label>
      <div className="standalone-preview">
        <svg viewBox="0 0 360 120" role="img" aria-label="Generated barcode">
          <rect width="360" height="120" fill="white" />
          {bars.map((width, index) => (
            <rect key={`${width}-${index}`} x={12 + index * 5} y="14" width={width} height="72" fill="black" />
          ))}
          <text x="180" y="106" textAnchor="middle" fill="black" fontSize="14">{text}</text>
        </svg>
      </div>
    </>
  )
}

function ToolBody({ tool }: { tool: StandaloneToolConfig }) {
  if (tool.kind === 'age') return <AgeTool />
  if (tool.kind === 'bmi') return <BmiTool />
  if (tool.kind === 'emi') return <EmiTool />
  if (tool.kind === 'gst') return <GstTool />
  if (['foodCost', 'hotelCost', 'recipeCost', 'restaurantProfit'].includes(tool.kind)) return <CostTool type={tool.kind} />
  if (tool.kind === 'wordCounter') return <WordCounterTool />
  if (tool.kind === 'password') return <PasswordTool />
  if (tool.kind === 'randomName') return <RandomNameTool />
  if (tool.kind === 'qr') return <QrTool />
  if (tool.kind === 'barcode') return <BarcodeTool />

  return <div className="tool-notice">This tool shell is ready for its dedicated production logic.</div>
}

export default function StandaloneToolClient({ tool }: { tool: StandaloneToolConfig }) {
  return (
    <section className="image-tool-shell standalone-tool-shell">
      <div className="image-tool-card standalone-tool-card">
        <div className="privacy-badge">
          <strong>{tool.subdomain}</strong>
          <span>Standalone Khagatara project</span>
        </div>
        <ToolBody tool={tool} />
      </div>
    </section>
  )
}
