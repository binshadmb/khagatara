import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  if (url.searchParams.get('sitemap') === '1') {
    return NextResponse.rewrite(new URL('/sitemap.xml', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}