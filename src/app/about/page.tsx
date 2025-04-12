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
          <h1 className="text-5xl md:text-7xl mb-6">About Me</h1>
          <p className="text-white/70 mb-12 text-lg">Why I love practicing design. Every day.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-lg overflow-hidden border border-zinc-800/50">
            <Image
              src="/images/profile.png"
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
          <h2 className="text-3xl md:text-4xl mb-8">Rama Krushna Behera</h2>

          <div className="space-y-6 max-w-3xl mb-12">
            <p className="text-white/90">Hello!</p>

            <p className="text-white/70 leading-relaxed">
              I'm a product designer based in India, currently working as a product designer at Razorpay. I work with the design systems team - setting up the foundations, building components, and setting up processes. Occasionally I work on interaction design - defining the motion system and building high fidelity prototypes. Over the past years, I have had the opportunity to work and learn from some awesome people at <span className="text-blue-400">UNDP</span>, <span className="text-blue-300">MakeMyTrip</span> & <span className="text-purple-400">Polygon</span>.
            </p>

            <p className="text-white/70 leading-relaxed">
              Coming from a background in both engineering and design, I love connecting the dots between business goals, technical constraints and user satisfaction. The design journey that I started with the aim of making things look better changed me into a person who aims to create digital experiences that make life easier. I believe that the projects I have worked on have been the highlight of my design journey. I have been influenced to constantly look for problems around me and solutions to them; for challenges like these are what drive me to work relentlessly through sleepless nights for hours on end. And I love every moment of them.
            </p>

            <p className="text-white/70 leading-relaxed">
              Apart from that, I also play around with creative coding, interaction design, and motion design, working on side projects or just exploring something that I find interesting due to some reason.
            </p>

            <p className="text-white/70 leading-relaxed">
              Don't hesitate to reach out – let's grab a coffee and chat!
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
