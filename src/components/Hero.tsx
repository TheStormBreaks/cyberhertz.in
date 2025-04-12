"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      <div className="max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl mb-6 font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello! I'm <br />
          Rama Krushna.
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-2 text-white/70 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Product Designer</span>
          <span className="hidden sm:inline-block">•</span>
          <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">New Media Artist</span>
          <span className="hidden sm:inline-block">•</span>
          <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Software Tinkerer</span>
        </motion.div>

        <motion.div
          className="bg-zinc-900/50 p-6 rounded-lg mb-12 border border-zinc-800 hover:border-zinc-700 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="mb-4 text-white/70">Hey! I am <span className="text-white font-medium">Rama Krushna</span></div>
          <p className="text-white/70 mb-6 leading-relaxed">
            I'm a product designer based in India, currently working as a product designer at Razorpay. I work with the design systems team - setting up the foundations, building components, and setting up processes. Occasionally I work on interaction design - defining the motion system and building high fidelity prototypes. Over the past years, I have had the opportunity to work and learn from some awesome people at UNDP, MakeMyTrip & Polygon.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="px-4 py-2 rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-colors text-sm group">
              <span className="flex items-center gap-2">
                My Changelog
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-colors text-sm group">
              <span className="flex items-center gap-2">
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="relative h-20 overflow-hidden mb-20">
          <div className="absolute left-0 w-full animate-marquee whitespace-nowrap flex">
            <span className="text-3xl md:text-4xl mx-4 opacity-60 italic font-light">Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design -</span>
            <span className="text-3xl md:text-4xl mx-4 opacity-60 italic font-light">Deploy - Design - Develop - Deploy - Design -</span>
          </div>
        </div>
      </div>
    </div>
  )
}
