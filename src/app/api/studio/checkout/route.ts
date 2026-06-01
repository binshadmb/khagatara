import { NextRequest, NextResponse } from 'next/server'

const PACKS: Record<string, { credits: number; amount: number }> = {
  starter: { credits: 5, amount: 9900 },
  popular: { credits: 15, amount: 24900 },
  pro: { credits: 40, amount: 59900 },
}

export async function POST(req: NextRequest) {
  const { pack, email } = await req.json()
  const selected = PACKS[pack]

  if (!selected) {
    return NextResponse.json({ error: 'Invalid pack.' }, { status: 400 })
  }

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: 'Razorpay is not configured.' }, { status: 503 })
  }

  const auth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString('base64')
  const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: selected.amount,
      currency: 'INR',
      notes: { email, credits: String(selected.credits) },
    }),
  })

  if (!orderRes.ok) {
    return NextResponse.json({ error: 'Could not create Razorpay order.' }, { status: 502 })
  }

  const order = await orderRes.json()
  return NextResponse.json({
    order_id: order.id,
    amount: selected.amount,
    credits: selected.credits,
    email,
  })
}
