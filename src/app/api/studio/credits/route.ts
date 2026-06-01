import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')?.trim().toLowerCase()
  if (!email || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return NextResponse.json({ credits: 0 })
  }

  const res = await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/get/credits:${encodeURIComponent(email)}`,
    { headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` } },
  )
  const data = await res.json()
  return NextResponse.json({ credits: parseInt(data.result ?? '0', 10) })
}
