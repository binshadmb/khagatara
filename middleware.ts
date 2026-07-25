import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { standaloneSubdomainMap } from './src/app/standalone-tools';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const hostWithoutPort = hostname.split(':')[0].toLowerCase();
  const subdomain = hostWithoutPort.endsWith('.khagatara.com')
    ? hostWithoutPort.replace('.khagatara.com', '')
    : '';

  if (hostname.startsWith('cargo.')) {
    const url = request.nextUrl.clone();
    url.pathname = `/cargo${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  const standalonePath = standaloneSubdomainMap[subdomain];
  if (standalonePath) {
    const url = request.nextUrl.clone();
    url.pathname = `${standalonePath}${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'],
};
