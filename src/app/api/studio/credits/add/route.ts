import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, credits, payment_id } = await req.json()
  if (!email || !credits) {
    return NextResponse.json({ error: 'Missing fields.' }, { status: 400 })
  }

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return NextResponse.json({ error: 'Credit store is not configured.' }, { status: 503 })
  }

  await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/incrby/credits:${encodeURIComponent(email.toLowerCase())}/${credits}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
    },
  )

  console.log(`Credits added: ${credits} -> ${email} | payment: ${payment_id}`)
  return NextResponse.json({ success: true })
}
