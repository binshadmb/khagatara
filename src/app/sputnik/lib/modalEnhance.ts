import type { SputnikResult, SputnikTier } from './tierRouter'

const MODAL_ENHANCE_URL = process.env.MODAL_ENHANCE_URL

function cleanUpstreamError(text: string) {
  if (!text) return 'Modal enhancement failed.'
  if (text.includes('<!DOCTYPE html') || text.includes('<html')) {
    return 'Modal enhancement service is temporarily unavailable.'
  }
  return text.slice(0, 500)
}

export async function modalEnhance(file: File, tier: Extract<SputnikTier, '4k' | '8k'>): Promise<SputnikResult> {
  if (!MODAL_ENHANCE_URL) {
    throw new Error('MODAL_ENHANCE_URL is not configured.')
  }

  const form = new FormData()
  form.append('image', file)
  form.append('resolution', tier)

  const response = await fetch(MODAL_ENHANCE_URL, {
    method: 'POST',
    body: form,
  })

  if (!response.ok) {
    throw new Error(cleanUpstreamError(await response.text()))
  }

  return {
    body: await response.arrayBuffer(),
    contentType: response.headers.get('content-type') || 'image/png',
    filename: `khagatara-sputnik-${tier}.png`,
    pipeline: 'modal-gpu',
  }
}
