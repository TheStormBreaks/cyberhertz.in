"use client"

import Link from "next/link"

export function Footer() {
  return (
    <div className="bg-[#1b1b1c] py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl mb-6">Let's Connect!</h2>
        <p className="text-white/70 mb-8 max-w-2xl">
          Thank you for visiting and scrolling through my portfolio. If you want to talk about any of my projects, or just chat, I'd love to hear from you! Let's catch up!
        </p>

        <a href="mailto:example@example.com" className="text-2xl md:text-3xl block mb-8">
          <span className="span-mail">example@example.com</span>
        </a>

        <div className="flex flex-wrap gap-6 mb-16">
          <Link href="#" className="social-media">Twitter</Link>
          <Link href="#" className="social-media">Instagram</Link>
          <Link href="#" className="social-media">Medium</Link>
          <Link href="#" className="social-media">LinkedIn</Link>
          <Link href="#" className="social-media">Dribbble</Link>
          <Link href="#" className="social-media">Behance</Link>
        </div>

        <div className="flex justify-between text-xs text-white/50">
          <div>© 2024</div>
          <div>Last Updated: April 2024</div>
          <div>Made with Next.js</div>
        </div>
      </div>
    </div>
  )
}
