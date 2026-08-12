import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Die vercel.app-Adresse der Produktion auf die eigene Domain umleiten,
  // damit sie nicht als Dublette indexiert wird. Preview-Deployments sind
  // ausgenommen: dort ist die vercel.app-Adresse die einzige Adresse, unter
  // der ein Branch überhaupt zu sehen ist.
  if (host.includes('vercel.app') && process.env.VERCEL_ENV === 'production') {
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
