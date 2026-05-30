import { NextRequest, NextResponse } from 'next/server'

const UPSCALE_SERVICE_URL = process.env.UPSCALE_SERVICE_URL ?? 'http://localhost:8000'

const MODE_MAP: Record<string, string> = {
  increase_kb: 'realesrgan_x2',
  ai_upscale: 'realesrgan_x4',
  screenshot: 'swinir',
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file')
    const uiMode = (formData.get('mode') as string) ?? 'ai_upscale'
    const targetKb = formData.get('target_kb')
    const resolutionTarget = formData.get('resolution_target')

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

    const upstream = new FormData()
    upstream.append('file', file)
    upstream.append('mode', MODE_MAP[uiMode] ?? 'realesrgan_x4')
    if (targetKb) upstream.append('target_kb', targetKb)
    if (resolutionTarget) upstream.append('resolution_target', resolutionTarget)

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
    const contentType = serviceRes.headers.get('content-type') ?? 'image/png'
    const extension = contentType.includes('jpeg') ? 'jpg' : 'png'

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="upscaled.${extension}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('Upscale route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
