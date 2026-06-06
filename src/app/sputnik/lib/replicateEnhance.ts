import type { SputnikResult, SputnikTier } from './tierRouter'

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN
const REPLICATE_SPUTNIK_MODEL = process.env.REPLICATE_SPUTNIK_MODEL

async function runReplicatePass(image: ArrayBuffer, pass: number) {
  if (!REPLICATE_API_TOKEN || !REPLICATE_SPUTNIK_MODEL) {
    throw new Error('Replicate is not configured for Sputnik yet.')
  }

  // Skeleton only: wire the selected Replicate model here.
  // The expected shape is: upload current image, create prediction, poll, download result.
  console.log(`Sputnik Replicate pass ${pass} using ${REPLICATE_SPUTNIK_MODEL}`)
  return image
}

export async function replicateEnhance(
  file: File,
  tier: Extract<SputnikTier, '16k' | '24k' | '32k'>,
  passes: number,
): Promise<SputnikResult> {
  let image = await file.arrayBuffer()
  const wholePasses = Math.floor(passes)
  const hasHalfPass = passes % 1 !== 0

  for (let pass = 1; pass <= wholePasses; pass += 1) {
    image = await runReplicatePass(image, pass)
  }

  if (hasHalfPass) {
    image = await runReplicatePass(image, wholePasses + 0.5)
  }

  return {
    body: image,
    contentType: file.type || 'image/png',
    filename: `khagatara-sputnik-${tier}.png`,
    pipeline: 'replicate-chain',
    passes,
  }
}
