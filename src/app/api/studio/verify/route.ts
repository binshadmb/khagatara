import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email, resolution } =
    await req.json()

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: 'Missing payment fields.' }, { status: 400 })
  }

  if (!process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: 'Razorpay is not configured.' }, { status: 503 })
  }

  const secret = process.env.RAZORPAY_KEY_SECRET
  const body = `${razorpay_order_id}|${razorpay_payment_id}`
  const expected = crypto.createHmac('sha256', secret).update(body).digest('hex')

  if (expected !== razorpay_signature) {
    return NextResponse.json({ error: 'Payment verification failed.' }, { status: 403 })
  }

  const token = crypto
    .createHmac('sha256', secret)
    .update(`${email}:${resolution}:${razorpay_payment_id}`)
    .digest('hex')

  return NextResponse.json({
    verified: true,
    token,
    payment_id: razorpay_payment_id,
  })
}
