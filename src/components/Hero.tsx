"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <div className="container mx-auto px-2 py-12 md:py-40 max-w-6xl">
      {/* Top Section - Name and Picture Side by Side */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
        {/* Profile Picture */}
        <div className="relative h-[220px] w-[220px] rounded-lg overflow-hidden shrink-0">
          <Image
            src="/images/profile.jpg"
            alt="Somya Jha"
            fill
            className="object-cover"
          />
        </div>

        {/* Name and Titles */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl md:text-7xl mb-6 font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello! I'm <br />
            Somya :)
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-2 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Data Science</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Cybersecurity</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Mathematics and Computing</span>
          </motion.div>
        </div>
      </div>

      {/* Content Box - Below Picture and Name */}
      <motion.div
        className="bg-zinc-900/50 p-6 rounded-lg mb-12 border border-zinc-800 hover:border-zinc-700 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="mb-4 text-white/70">Hey! I am <span className="text-white font-medium">Somya Jha </span></div>
        <p className="text-white/70 mb-6 leading-relaxed">
        I am a second year student from Bengaluru. Currently pursuing Btech in Mathematics and Computing from MS Ramaiah University of Applied Sciences </p>
        <div className="flex gap-4">
          <Link href="#" className="px-4 py-2 rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-colors text-sm group">
            <span className="flex items-center gap-2">
              CYBERHERTZ
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

      {/* Full width marquee */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex w-max">
          <span className="text-3xl md:text-4xl mx-3 opacity-30 italic font-bold">Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design -</span>
          <span className="text-3xl md:text-4xl mx-1 opacity-30 italic font-bold">Deploy - Design - Develop - Deploy - Design -</span>
        </div>
      </div>
    </div>
  )
}