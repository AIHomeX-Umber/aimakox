import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files, API routes, and non-root paths
  if (
    pathname.startsWith('/en') ||
    pathname.startsWith('/cases') ||
    pathname.startsWith('/frameworks') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/digital-employees') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    const res = NextResponse.next()
    res.headers.set('x-locale', pathname.startsWith('/en') ? 'en' : 'zh')
    return res
  }

  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') ?? ''
    const isZh =
      acceptLanguage.toLowerCase().startsWith('zh') ||
      acceptLanguage.toLowerCase().includes('zh-')

    if (!isZh) {
      return NextResponse.redirect(new URL('/en', request.url))
    }
  }

  const res = NextResponse.next()
  res.headers.set('x-locale', 'zh')
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
