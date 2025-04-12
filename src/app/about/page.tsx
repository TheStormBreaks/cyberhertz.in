"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { CustomCursor } from "@/components/CustomCursor"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navigation />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl mb-6">Hi, I am Somya :)</h1>
          <p className="text-white/70 mb-12 text-lg">I use linux and windows.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-lg overflow-hidden border border-zinc-800/50">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl mb-8">About Me</h2>

          <div className="space-y-6 max-w-3xl mb-12">
            <p className="text-white/90"></p>

            <p className="text-white/70 leading-relaxed">
              I am Somya Jha, a college student from Bengaluru. I am currently pursuing <span className="text-blue-400">BTech in Mathematics and Computing</span>, <span className="text-blue-300"></span> from  <span className="text-blue-400"> MS Ramaiah University of Applied Sciences</span>.
            </p>

            <p className="text-white/70 leading-relaxed">
              My major areas of interest are - Data Science and Machine Learning, and Cybersecurity. However, my curiosity leads me to doing projects in Maths, Physics, Finance and Quantum Computing domains. 
            </p>

            <p className="text-white/70 leading-relaxed">
              Apart from that, I also like collaborating and working on projects. My journey leads me everywhere! From <span className="text-blue-400">App Dev</span>, to <span className="text-blue-400">military cybersecurity</span>, and even <span className="text-blue-400">Data Center Operations and Management!</span>
            </p>

            <p className="text-white/70 leading-relaxed">
              Don't hesitate to reach out! Check our my experiences.  –
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-md transition-colors border border-zinc-800/70 group"
          >
            <span className="flex items-center gap-2">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </span>
          </Link>
        </motion.div>

      </div>

      <Footer />
    </main>
  )
}
