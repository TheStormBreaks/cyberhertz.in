"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { CustomCursor } from "@/components/CustomCursor"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { WorkSection } from "@/components/WorkSection"
import { WritingSection} from "@/components/WritingSection"
import { SpeakingSection } from "@/components/SpeakingSection"


export default function About() {
  return (
    <main className="min-h-screen">
          <CustomCursor />
          <Navigation />
          <div className="container mx-auto px-2 py-12 md:py-40 max-w-6xl">
      {/* Top Section - Name and Picture Side by Side */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
        {/* Profile Picture */}
        <div className="relative h-[220px] w-[220px] rounded-lg overflow-hidden shrink-0">
          <Image
            src="#"
            alt="Mrigank"
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
            Hi! I'm <br />
            Mrigank :)
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
        <div className="mb-4 text-white/70">Hey! I am <span className="text-white font-medium">Mrigank Bhushan </span></div>
        <p className="text-white/70 mb-6 leading-relaxed">
        ADD BIO HERE </p>
        <div className="flex gap-4">
          <Link href="resources\Somya_Jha_CV.pdf" className="px-4 py-2 rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-colors text-sm group">
            <span className="flex items-center gap-2">
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
          <Link href="#" className="px-4 py-2 rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-colors text-sm group">
            <span className="flex items-center gap-2">
              MT STATS
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Full width marquee */}
      {/*<div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden"> */}
        {/*<div className="animate-marquee whitespace-nowrap flex w-max"> */}
         {/* <span className="text-3xl md:text-4xl mx-3 opacity-30 italic font-bold">Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design -</span> */}
        {/*  <span className="text-3xl md:text-4xl mx-1 opacity-30 italic font-bold">Deploy - Design - Develop - Deploy - Design -</span> */}
        {/*</div> */}
      {/*</div>*/}
    </div>

    <div className="bg-[#1b1b1c] py-16 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6 section-title">Let's Connect!</h2>
          <p className="text-white/70 mb-8 max-w-2xl leading-relaxed">
            Thank you for visiting and scrolling through my portfolio. If you want to talk about any of my projects, I'd love to hear from you!
          </p>

          <a href="mailto:example@example.com" className="text-2xl md:text-3xl block mb-10 hover:opacity-80 font-bold">
            <span className="span-mail">add mail</span>
          </a>


          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-16">
            <Link href="https://github.com/TheStormBreaks" className="social-media">Github</Link>
            <Link href="https://www.linkedin.com/in/thestormbreaks/" className="social-media">LinkedIn</Link>
            <Link href="https://www.instagram.com/marvelesque.exe/" className="social-media">Instagram</Link>
            <Link href="https://www.linkedin.com/in/cyberhertz/" className="social-media">LinkedIn - Cyberhertz.co</Link>
            <Link href="https://www.instagram.com/cyberhertz.co/" className="social-media">Instagram - Cyberhertz</Link>
            <Link href="https://www.cyberhertz.in/about" className="social-media">www.cyberhertz.in</Link>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 pt-8 border-t border-white/5">
          <div>© 2025</div>
          <div>Last Updated: April 2025</div>
          <div className="flex items-center gap-2">
            Made with Next.js by SOMYA JHA
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M12 2v4M5 7l2.5 2.5M7 17l-2 2M17 7l2 2M14 19l2.5-2.5" />
              <path d="M2 12h2M20 12h2M12 18v2M12 6v2" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
          
        </main>
  )
}


