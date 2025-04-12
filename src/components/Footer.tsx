"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <div className="bg-[#1b1b1c] py-16 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6 section-title">Let's Connect!</h2>
          <p className="text-white/70 mb-8 max-w-2xl leading-relaxed">
            Thank you for visiting and scrolling through my portfolio. If you want to talk about any of my projects, or just chat, I'd love to hear from you! Let's catch up!
          </p>

          <a href="mailto:example@example.com" className="text-2xl md:text-3xl block mb-10 hover:opacity-80 transition-opacity">
            <span className="span-mail">example@example.com</span>
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-16">
            <Link href="#" className="social-media">Twitter</Link>
            <Link href="#" className="social-media">Instagram</Link>
            <Link href="#" className="social-media">Medium</Link>
            <Link href="#" className="social-media">LinkedIn</Link>
            <Link href="#" className="social-media">Dribbble</Link>
            <Link href="#" className="social-media">Behance</Link>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 pt-8 border-t border-white/5">
          <div>© 2024</div>
          <div>Last Updated: April 2024</div>
          <div className="flex items-center gap-2">
            Made with Next.js
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M12 2v4M5 7l2.5 2.5M7 17l-2 2M17 7l2 2M14 19l2.5-2.5" />
              <path d="M2 12h2M20 12h2M12 18v2M12 6v2" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
