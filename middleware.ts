import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect all vercel.app traffic to the custom domain
  if (host.includes('vercel.app')) {
    const url = new URL(request.url)
    url.host = 'www.bona-fides-detektei.de'
    url.protocol = 'https'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|icon.svg).*)',
  ],
}
