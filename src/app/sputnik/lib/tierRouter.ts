import { modalEnhance } from './modalEnhance'
import { replicateEnhance } from './replicateEnhance'

export const SPUTNIK_TIERS = ['hd', '2k', '4k', '8k', '16k', '24k', '32k'] as const

export type SputnikTier = (typeof SPUTNIK_TIERS)[number]

export type SputnikResult = {
  body: ArrayBuffer
  contentType: string
  filename: string
  pipeline: 'original' | 'modal-gpu' | 'replicate-chain'
  passes?: number
}

export function isSputnikTier(value: string | null): value is SputnikTier {
  return SPUTNIK_TIERS.includes(value as SputnikTier)
}

export function passesForTier(tier: SputnikTier) {
  if (tier === '16k') return 2
  if (tier === '24k') return 2.5
  if (tier === '32k') return 3
  return 0
}

export async function routeSputnikTier(file: File, tier: SputnikTier): Promise<SputnikResult> {
  if (tier === 'hd' || tier === '2k') {
    return {
      body: await file.arrayBuffer(),
      contentType: file.type || 'image/png',
      filename: `khagatara-sputnik-${tier}-original.png`,
      pipeline: 'original',
    }
  }

  if (tier === '4k' || tier === '8k') {
    return modalEnhance(file, tier)
  }

  return replicateEnhance(file, tier, passesForTier(tier))
}
