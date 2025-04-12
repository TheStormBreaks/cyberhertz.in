"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="w-full py-4 border-b border-white/5 sticky top-0 z-40 backdrop-blur-sm bg-[#1b1b1c]/80">
      <div className="container mx-auto flex justify-between items-center px-4 max-w-6xl">
        <Link href="/" className="brand relative group">
          <span className="text-3xl font-bold text-white group-hover:opacity-80 transition-opacity">rk.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
        </Link>
        <nav className="flex gap-8">
          <Link
            href="/"
            className={`navigation-item relative group ${pathname === '/' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}
          >
            <span className="header-link">Work</span>
            {pathname === '/' && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className={`navigation-item relative group ${pathname === '/about' ? 'text-white' : 'text-white/70'} hover:text-white transition-colors`}
          >
            <span className="header-link">About</span>
            {pathname === '/about' && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#"
            className="navigation-item relative group text-white/70 hover:text-white transition-colors"
          >
            <span className="header-link">Resume</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
