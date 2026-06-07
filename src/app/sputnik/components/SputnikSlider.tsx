'use client'

import type { CSSProperties, MouseEvent, TouchEvent } from 'react'
import { useMemo, useRef, useState } from 'react'
import type { PppPrice } from '../../lib/pppPricing'

const TIERS = [
  { id: 'hd', label: 'HD', res: '1280×720', mp: '0.9', sz: '2.1MB', tm: '~4s', price: 'Free', note: 'No account needed', caption: 'The beginning of seeing clearly.', bg: '#3B6D11', btn: 'Start free' },
  { id: '2k', label: '2K', res: '2048×1080', mp: '2.2', sz: '5.8MB', tm: '~8s', price: 'Free', note: 'No account needed', caption: 'Sharper than memory. Truer than time.', bg: '#3B6D11', btn: 'Start free' },
  { id: '4k', label: '4K', res: '3840×2160', mp: '8.3', sz: '22MB', tm: '~18s', price: '₹49', note: 'Per photo · Premium', caption: 'The standard that professionals trust with their finest work.', bg: '#185FA5', btn: 'Enhance now' },
  { id: '8k', label: '8K', res: '7680×4320', mp: '33.2', sz: '88MB', tm: '~45s', price: '₹99', note: 'Per photo · Premium', caption: 'Beyond what screens can show. Print it or it will be wasted.', bg: '#534AB7', btn: 'Enhance now' },
  { id: '16k', label: '16K', res: '15360×8640', mp: '132.7', sz: '340MB', tm: '~2min', price: '₹249', note: 'Per photo · Sputnik', caption: 'A hundred and thirty million pixels. Every one placed with intention.', bg: '#993C1D', btn: 'Launch Sputnik' },
  { id: '24k', label: '24K', res: '23040×12960', mp: '298.6', sz: '760MB', tm: '~5min', price: '₹499', note: 'Per photo · Sputnik', caption: 'This is not enhancement. This is an act of devotion.', bg: '#854F0B', btn: 'Launch Sputnik' },
  { id: '32k', label: '32K', res: '30720×17280', mp: '531.1', sz: '1.3GB', tm: '~12min', price: null, note: 'Per photo · Sputnik Ultra', caption: 'The finest of the finest. Nothing left unrendered. Nothing left to chance.', bg: '#993556', btn: 'Go orbital' },
] as const

export default function SputnikSlider({
  sputnik32kPrice,
}: {
  country: string
  sputnik32kPrice: PppPrice
}) {
  const [idx, setIdx] = useState(6)
  const compareRef = useRef<HTMLDivElement>(null)
  const [dragPct, setDragPct] = useState(50)
  const isDragging = useRef(false)

  const tier = TIERS[idx]
  const percent = useMemo(() => (idx / (TIERS.length - 1)) * 100, [idx])
  const displayPrice = tier.id === '32k' ? sputnik32kPrice.display : tier.price

  function getX(event: MouseEvent | TouchEvent) {
    const rect = compareRef.current?.getBoundingClientRect()
    if (!rect) return 50
    const clientX = 'touches' in event ? event.touches[0]?.clientX : event.clientX
    if (!clientX) return dragPct
    return Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98)
  }

  return (
    <div className="sp-slider-root">
      <div className="sp-colorbars" aria-hidden="true">
        {['#FF2D55', '#FFD700', '#00AACC', '#6C2BD9', '#00C853', '#FF6D00', '#E91E8C'].map((color) => (
          <span key={color} style={{ background: color }} />
        ))}
      </div>

      <div className="sp-slider-header">
        <span className="sp-eyebrow">Khagatara Sputnik</span>
        <h2 className="sp-headline">Drag to see the truth</h2>
        <p className="sp-subline">← HD quality &nbsp;&nbsp; drag the line &nbsp;&nbsp; {tier.label} →</p>
      </div>

      <div
        className="sp-compare"
        ref={compareRef}
        onClick={(event) => setDragPct(getX(event))}
        onMouseDown={() => { isDragging.current = true }}
        onMouseLeave={() => { isDragging.current = false }}
        onMouseMove={(event) => { if (isDragging.current) setDragPct(getX(event)) }}
        onMouseUp={() => { isDragging.current = false }}
        onTouchEnd={() => { isDragging.current = false }}
        onTouchMove={(event) => { if (isDragging.current) setDragPct(getX(event)) }}
        onTouchStart={() => { isDragging.current = true }}
        style={{ cursor: 'col-resize', userSelect: 'none' }}
      >
        <img
          className="sp-compare-img sp-compare-hd"
          src="/images/before-after/old-photo-before-sample.jpg"
          alt="HD quality sample"
          draggable={false}
        />
        <div className="sp-compare-clip" style={{ width: `${dragPct}%` }}>
          <img
            className="sp-compare-img sp-compare-sharp"
            src="/images/before-after/old-photo-after-8k-preview.jpg"
            alt={`${tier.label} quality sample`}
            draggable={false}
          />
        </div>
        <div className="sp-drag-line" style={{ left: `${dragPct}%` }}>
          <div className="sp-drag-handle">&lt;&gt;</div>
        </div>
        <span className="sp-ba-lbl sp-ba-hd">HD</span>
        <span className="sp-ba-lbl sp-ba-tier" style={{ background: tier.bg }}>{tier.label}</span>
      </div>

      <div className="sp-tier-row" aria-label="Select resolution tier">
        {TIERS.map((item, index) => (
          <button
            key={item.id}
            className={`sp-tier-btn${index === idx ? ' sp-tier-btn--on' : ''}`}
            style={index === idx ? { background: tier.bg, borderColor: tier.bg, color: '#fff' } : {}}
            onClick={() => setIdx(index)}
            type="button"
            aria-pressed={index === idx}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="sp-progbar" aria-hidden="true">
        <div className="sp-progfill" style={{ width: `${percent}%`, background: tier.bg }} />
      </div>

      <div className="sp-meta-grid">
        {[
          { label: 'Resolution', value: tier.res },
          { label: 'Megapixels', value: `${tier.mp} MP` },
          { label: 'File size', value: tier.sz },
          { label: 'GPU time', value: tier.tm },
        ].map(({ label, value }) => (
          <div className="sp-meta-card" key={label}>
            <div className="sp-meta-label">{label}</div>
            <div className="sp-meta-value">{value}</div>
          </div>
        ))}
      </div>

      <div className="sp-bottom">
        <div className="sp-bottom-inner">
          <div className="sp-price-block">
            <div className="sp-tier-name">{tier.label} · {tier.id === 'hd' || tier.id === '2k' ? 'Free' : 'Sputnik'}</div>
            <div className="sp-price" style={{ color: tier.bg } as CSSProperties}>{displayPrice}</div>
            <div className="sp-price-note">
              {tier.id === '32k'
                ? `${sputnik32kPrice.region} · ${sputnik32kPrice.gateway}`
                : tier.note}
            </div>
          </div>
          <div className="sp-divider" aria-hidden="true" />
          <div className="sp-caption-block">
            <div className="sp-cap-label">The final word</div>
            <div className="sp-cap-text">{tier.caption}</div>
          </div>
        </div>

        {idx >= 4 && (
          <p className="sp-warn">
            At this resolution the AI reconstructs from inference. Best results from source photos 2MP and above.
          </p>
        )}

        <div className="sp-cta-row">
          <button className="sp-cta-btn" style={{ background: tier.bg }} type="button">
            {tier.btn} ↗
          </button>
          <button className="sp-cta-sec" type="button">All tiers ↗</button>
        </div>
      </div>

      <div className="sp-colorbars" aria-hidden="true">
        {['#E91E8C', '#FF6D00', '#00C853', '#6C2BD9', '#00AACC', '#FFD700', '#FF2D55'].map((color) => (
          <span key={color} style={{ background: color }} />
        ))}
      </div>
    </div>
  )
}
