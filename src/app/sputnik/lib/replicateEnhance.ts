import type { SputnikResult, SputnikTier } from './tierRouter'

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN
const REPLICATE_MODEL =
  process.env.REPLICATE_SPUTNIK_MODEL ??
  'philz1337x/clarity-upscaler:dfad41707589d68ecdccd1dfa600d55a208f9310738f46fb12765a2a5978ddb'

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  return Buffer.from(buffer).toString('base64')
}

function replicateVersion(model: string) {
  return model.includes(':') ? model.split(':').at(-1) : model
}

async function runReplicatePass(imageBuffer: ArrayBuffer, pass: number): Promise<ArrayBuffer> {
  if (!REPLICATE_API_TOKEN) {
    throw new Error('REPLICATE_API_TOKEN is not set.')
  }

  const base64 = arrayBufferToBase64(imageBuffer)
  const dataUrl = `data:image/png;base64,${base64}`

  console.log(`[Sputnik] Replicate pass ${pass} starting...`)

  const createRes = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version: replicateVersion(REPLICATE_MODEL),
      input: {
        image: dataUrl,
        scale_factor: 4,
        sharpen: 1.5,
        face_enhance: true,
      },
    }),
  })

  if (!createRes.ok) {
    throw new Error(`Replicate create failed: ${await createRes.text()}`)
  }

  const prediction = await createRes.json()
  const pollUrl = prediction.urls?.get ?? `https://api.replicate.com/v1/predictions/${prediction.id}`

  let result = prediction
  while (result.status !== 'succeeded' && result.status !== 'failed') {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const pollRes = await fetch(pollUrl, {
      headers: { Authorization: `Token ${REPLICATE_API_TOKEN}` },
    })

    if (!pollRes.ok) {
      throw new Error(`Replicate poll failed: ${await pollRes.text()}`)
    }

    result = await pollRes.json()
    console.log(`[Sputnik] Pass ${pass} status: ${result.status}`)
  }

  if (result.status === 'failed') {
    throw new Error(`Replicate pass ${pass} failed: ${result.error}`)
  }

  const outputUrl = Array.isArray(result.output) ? result.output[0] : result.output
  if (!outputUrl) {
    throw new Error(`Replicate pass ${pass} finished without an output image.`)
  }

  const imgRes = await fetch(outputUrl)
  if (!imgRes.ok) {
    throw new Error(`Replicate output download failed: ${await imgRes.text()}`)
  }

  return imgRes.arrayBuffer()
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
    contentType: 'image/png',
    filename: `khagatara-sputnik-${tier}.png`,
    pipeline: 'replicate-chain',
    passes,
  }
}
