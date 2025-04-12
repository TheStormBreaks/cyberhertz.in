"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="w-full py-5">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="brand">
          <span className="text-3xl font-bold text-white">rk.</span>
        </Link>
        <nav className="flex gap-6">
          <Link
            href="/"
            className={`navigation-item ${pathname === '/' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}
          >
            <span className="header-link">Work</span>
          </Link>
          <Link
            href="/about"
            className={`navigation-item ${pathname === '/about' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}
          >
            <span className="header-link">About</span>
          </Link>
          <Link
            href="#"
            className="navigation-item text-white/70 hover:text-white transition-colors"
          >
            <span className="header-link">Resume</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
