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

  const response = NextResponse.next()

  // Unlisted design studies: keep them out of search indexes, archives,
  // referrer logs and intermediary caches. The URLs are intentionally omitted
  // from navigation, sitemap and robots.txt.
  if (request.nextUrl.pathname.startsWith('/entwuerfe/')) {
    response.headers.set(
      'X-Robots-Tag',
      'noindex, nofollow, noarchive, nosnippet, noimageindex',
    )
    response.headers.set('Referrer-Policy', 'no-referrer')
    response.headers.set('Cache-Control', 'private, no-store')
  }

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|icon.svg).*)',
  ],
}
