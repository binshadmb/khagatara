'use client'

import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'

const SPUTNIK_TIERS = ['hd', '2k', '4k', '8k', '16k', '24k', '32k'] as const
type SputnikTier = (typeof SPUTNIK_TIERS)[number]

const TIER_LABELS: Record<SputnikTier, string> = {
  hd: 'HD',
  '2k': '2K',
  '4k': '4K',
  '8k': '8K',
  '16k': '16K',
  '24k': '24K',
  '32k': '32K',
}

const ENGINE_LABELS: Record<SputnikTier, string> = {
  hd: 'Free original return',
  '2k': 'Free original return',
  '4k': 'Modal GPU',
  '8k': 'Modal GPU',
  '16k': 'Replicate chain',
  '24k': 'Replicate chain',
  '32k': 'Replicate chain',
}

export default function SputnikSlider() {
  const [tierIndex, setTierIndex] = useState(3)
  const tier = SPUTNIK_TIERS[tierIndex]
  const percent = useMemo(
    () => (tierIndex / (SPUTNIK_TIERS.length - 1)) * 100,
    [tierIndex],
  )

  return (
    <div className="sputnik-slider">
      <div className="sputnik-slider-top">
        <span>Output Tier</span>
        <strong>{TIER_LABELS[tier]}</strong>
      </div>
      <input
        aria-label="Select Sputnik enhancement tier"
        max={SPUTNIK_TIERS.length - 1}
        min={0}
        onChange={(event) => setTierIndex(Number(event.target.value))}
        style={{ '--sputnik-progress': `${percent}%` } as CSSProperties}
        type="range"
        value={tierIndex}
      />
      <div className="sputnik-tier-row" aria-hidden="true">
        {SPUTNIK_TIERS.map((item) => (
          <span key={item}>{TIER_LABELS[item]}</span>
        ))}
      </div>
      <div className="sputnik-engine-card">
        <span>Selected engine</span>
        <strong>{ENGINE_LABELS[tier]}</strong>
        <p>
          HD and 2K stay free. 4K and 8K use the existing Modal pipeline.
          16K and higher are reserved for the new chained Replicate workflow.
        </p>
      </div>
    </div>
  )
}
