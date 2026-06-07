import { NextRequest, NextResponse } from 'next/server'
import { countryFromHeaders, getSputnik32kPrice } from '../../../lib/pppPricing'
import { isSputnikTier, routeSputnikTier } from '../../lib/tierRouter'

export const maxDuration = 300

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()
    const file = form.get('file')
    const tierValue = (form.get('tier') as string | null)?.toLowerCase() ?? null

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'Image file is required.' }, { status: 400 })
    }

    if (!isSputnikTier(tierValue)) {
      return NextResponse.json({ error: 'Valid Sputnik tier is required.' }, { status: 400 })
    }

    const result = await routeSputnikTier(file, tierValue)
    const country = countryFromHeaders(req.headers)
    const sputnik32kPrice = getSputnik32kPrice(country)

    return new NextResponse(result.body, {
      status: 200,
      headers: {
        'Content-Type': result.contentType,
        'Content-Disposition': `inline; filename="${result.filename}"`,
        'X-Sputnik-Tier': tierValue,
        'X-Sputnik-Pipeline': result.pipeline,
        'X-Sputnik-Passes': String(result.passes ?? 0),
        'X-Sputnik-Country': country,
        'X-Sputnik-32K-Price': sputnik32kPrice.display,
        'X-Sputnik-Gateway': sputnik32kPrice.gateway,
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('Sputnik enhance error:', error)
    const message = error instanceof Error ? error.message : 'Sputnik enhancement failed.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
