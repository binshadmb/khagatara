import { NextRequest, NextResponse } from 'next/server'

const PRICING: Record<string, Record<string, number>> = {
  IN: { '4k': 4900, '8k': 7900 },
  ASIA: { '4k': 9900, '8k': 14900 },
  GLOBAL: { '4k': 24900, '8k': 39900 },
}

function getPricingTier(country: string): string {
  if (country === 'IN') return 'IN'
  const asiaTier = ['SG', 'MY', 'TH', 'PH', 'ID', 'VN', 'AE', 'SA', 'QA', 'KW', 'BH', 'OM']
  if (asiaTier.includes(country)) return 'ASIA'
  return 'GLOBAL'
}

export async function POST(req: NextRequest) {
  const { resolution, email } = await req.json()

  if (!email || !resolution) {
    return NextResponse.json({ error: 'Email and resolution are required.' }, { status: 400 })
  }

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json({ error: 'Razorpay is not configured.' }, { status: 503 })
  }

  const country = req.headers.get('x-vercel-ip-country') ?? 'IN'
  const tier = getPricingTier(country)
  const amount = PRICING[tier][resolution] ?? PRICING.IN['4k']

  const auth = Buffer.from(
    `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`,
  ).toString('base64')

  const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency: 'INR',
      notes: { email, resolution, tier },
    }),
  })

  if (!orderRes.ok) {
    return NextResponse.json({ error: 'Could not create Razorpay order.' }, { status: 502 })
  }

  const order = await orderRes.json()
  return NextResponse.json({
    order_id: order.id,
    amount,
    resolution,
    email,
    tier,
    display_price: `₹${(amount / 100).toFixed(0)}`,
  })
}
