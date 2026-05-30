// Proxies browser upload to the Python upscale service and returns the image.

import { NextRequest, NextResponse } from 'next/server'

const UPSCALE_SERVICE_URL = process.env.UPSCALE_SERVICE_URL ?? 'http://localhost:8000'

const MODE_MAP: Record<string, string> = {
  increase_kb: 'realesrgan_x2',
  ai_upscale: 'realesrgan_x4',
  screenshot: 'swinir',
}

const RESOLUTION_MAP: Record<string, string> = {
  hd: 'hd',
  '2k': '2k',
  '4k': '4k',
  '8k': '8k',
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')
    const uiMode = (formData.get('mode') as string) ?? 'ai_upscale'
    const uiResolution = (formData.get('target_resolution') as string) ?? '4k'

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'No image file provided.' }, { status: 400 })
    }

    const isPaid = formData.get('paid') === '1'
    const maxBytes = isPaid ? 20 * 1024 * 1024 : 5 * 1024 * 1024
    if (file.size > maxBytes) {
      return NextResponse.json(
        { error: isPaid ? 'File exceeds 20 MB limit.' : 'Free tier limit is 5 MB. Upgrade for larger images.' },
        { status: 413 },
      )
    }

    const serviceMode = MODE_MAP[uiMode] ?? 'realesrgan_x4'
    const serviceResolution = RESOLUTION_MAP[uiResolution] ?? '4k'

    const upstream = new FormData()
    upstream.append('file', file)
    upstream.append('mode', serviceMode)
    upstream.append('target_resolution', serviceResolution)

    const serviceRes = await fetch(`${UPSCALE_SERVICE_URL}/upscale`, {
      method: 'POST',
      body: upstream,
    })

    if (!serviceRes.ok) {
      const detail = await serviceRes.text()
      console.error('Upscale service error:', detail)
      return NextResponse.json({ error: 'Upscale failed. Try a smaller image or different mode.' }, { status: 502 })
    }

    const imageBuffer = await serviceRes.arrayBuffer()
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'inline; filename="upscaled.png"',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('Upscale route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
