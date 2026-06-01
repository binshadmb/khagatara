import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export const maxDuration = 300

const MODAL_ENHANCE_URL = process.env.MODAL_ENHANCE_URL

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
    const paymentToken = (form.get('payment_token') as string) ?? ''
    const paymentId = (form.get('payment_id') as string) ?? ''

    if (!file || !(file instanceof File) || !email) {
      return NextResponse.json({ error: 'File and email are required.' }, { status: 400 })
    }

    if (!MODAL_ENHANCE_URL || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: 'Khagatara Studio is not configured yet.' }, { status: 503 })
    }

    const secret = process.env.RAZORPAY_KEY_SECRET
    const expectedToken = crypto
      .createHmac('sha256', secret)
      .update(`${email}:${resolution}:${paymentId}`)
      .digest('hex')

    if (paymentToken !== expectedToken) {
      return NextResponse.json({ error: 'Payment required.' }, { status: 402 })
    }

    const modalForm = new FormData()
    modalForm.append('image', file)
    modalForm.append('resolution', resolution)

    const modalRes = await fetch(MODAL_ENHANCE_URL, {
      method: 'POST',
      body: modalForm,
    })

    if (!modalRes.ok) {
      const detail = await modalRes.text()
      return NextResponse.json({ error: cleanUpstreamError(detail) }, { status: 502 })
    }

    const imageBuffer = await modalRes.arrayBuffer()

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': modalRes.headers.get('content-type') || 'image/png',
        'Content-Disposition': 'inline; filename="studio-enhanced.png"',
        'X-Pipeline-Used': modalRes.headers.get('X-Pipeline-Used') || 'modal-gpu',
        'X-Faces-Detected': modalRes.headers.get('X-Faces-Detected') || 'false',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('Studio enhance error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
