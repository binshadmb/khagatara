import { NextRequest, NextResponse } from 'next/server'

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN
const MODAL_ENHANCE_URL = process.env.MODAL_ENHANCE_URL
const SUPIR_VERSION = 'cjwbw/supir:a0e8e2d0a17b4a40e89f1af72c68e3da9a94c15461bb91e73d8c7a9e0ca7e546'

const CREDIT_COST: Record<string, number> = {
  '4k': 1,
  '8k': 2,
}

async function getCredits(email: string): Promise<number> {
  const res = await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/get/credits:${encodeURIComponent(email)}`,
    { headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` } },
  )
  const data = await res.json()
  return parseInt(data.result ?? '0', 10)
}

async function deductCredits(email: string, amount: number): Promise<void> {
  await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/decrby/credits:${encodeURIComponent(email)}/${amount}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
    },
  )
}

function cleanUpstreamError(text: string) {
  if (!text) return 'Premium enhancement service failed.'
  if (text.includes('<!DOCTYPE html') || text.includes('<html')) {
    return 'Premium enhancement service is temporarily unavailable. Check the Modal endpoint URL and deployment status.'
  }
  return text.slice(0, 500)
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()
    const file = form.get('file')
    const resolution = (form.get('resolution') as string) ?? '4k'
    const email = (form.get('email') as string)?.trim().toLowerCase()

    if (!file || !(file instanceof File) || !email) {
      return NextResponse.json({ error: 'File and email are required.' }, { status: 400 })
    }

    if ((!MODAL_ENHANCE_URL && !REPLICATE_API_TOKEN) || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      return NextResponse.json({ error: 'Khagatara Studio is not configured yet.' }, { status: 503 })
    }

    const cost = CREDIT_COST[resolution] ?? 1
    const balance = await getCredits(email)
    if (balance < cost) {
      return NextResponse.json({ error: 'Insufficient credits.' }, { status: 402 })
    }

    if (MODAL_ENHANCE_URL) {
      const modalForm = new FormData()
      modalForm.append('image', file)
      modalForm.append('scale', resolution === '8k' ? '8' : '4')

      const modalRes = await fetch(MODAL_ENHANCE_URL, {
        method: 'POST',
        body: modalForm,
      })

      if (!modalRes.ok) {
        const detail = await modalRes.text()
        return NextResponse.json({ error: cleanUpstreamError(detail) }, { status: 502 })
      }

      await deductCredits(email, cost)
      const imageBuffer = await modalRes.arrayBuffer()

      return new NextResponse(imageBuffer, {
        status: 200,
        headers: {
          'Content-Type': modalRes.headers.get('content-type') || 'image/png',
          'Content-Disposition': 'inline; filename="studio-enhanced.png"',
          'X-Pipeline-Used': 'modal-gpu',
          'X-Faces-Detected': 'false',
          'Cache-Control': 'no-store',
        },
      })
    }

    const arrayBuffer = await file.arrayBuffer()
    const base64 = Buffer.from(arrayBuffer).toString('base64')
    const dataUrl = `data:${file.type};base64,${base64}`

    const replicateRes = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        Authorization: `Token ${REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: SUPIR_VERSION,
        input: {
          image: dataUrl,
          upscale: resolution === '8k' ? 8 : 4,
          face_prompt: 'high quality face, natural skin, sharp eyes, detailed hair',
        },
      }),
    })

    const prediction = await replicateRes.json()
    const predictionId = prediction.id

    if (!predictionId) {
      return NextResponse.json({ error: 'Replicate job failed to start.' }, { status: 502 })
    }

    let outputUrl = ''
    for (let i = 0; i < 36; i++) {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      const pollRes = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
        headers: { Authorization: `Token ${REPLICATE_API_TOKEN}` },
      })
      const pollData = await pollRes.json()

      if (pollData.status === 'succeeded') {
        outputUrl = Array.isArray(pollData.output) ? pollData.output[0] : pollData.output
        break
      }

      if (pollData.status === 'failed') {
        return NextResponse.json({ error: 'Enhancement failed on AI server.' }, { status: 502 })
      }
    }

    if (!outputUrl) {
      return NextResponse.json({ error: 'Enhancement timed out.' }, { status: 504 })
    }

    await deductCredits(email, cost)

    const imageRes = await fetch(outputUrl)
    const imageBuffer = await imageRes.arrayBuffer()

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'inline; filename="studio-enhanced.png"',
        'X-Pipeline-Used': 'supir',
        'X-Faces-Detected': 'true',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('Studio enhance error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
