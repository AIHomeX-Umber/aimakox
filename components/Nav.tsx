'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isEN = pathname.startsWith('/en')

  return (
    <nav className="nav">
      <Link href={isEN ? '/en' : '/'} className="nav-logo">
        Ma<span className="logo-k">k</span>ox
      </Link>

      <div className="nav-links">
        <Link href="/cases" className="nav-link">
          {isEN ? 'Cases' : '案例'}
        </Link>
        <Link href="/frameworks" className="nav-link">
          {isEN ? 'Frameworks' : '框架'}
        </Link>
        <Link href="/contact" className="nav-link">
          {isEN ? 'Contact' : '联系'}
        </Link>
        <Link href={isEN ? '/' : '/en'} className="nav-lang">
          {isEN ? '中文' : 'EN'}
        </Link>
      </div>
    </nav>
  )
}
