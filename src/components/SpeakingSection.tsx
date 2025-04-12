"use client"

import Link from "next/link"
import { SectionTitle } from "./SectionTitle"
import { motion } from "framer-motion"

export function SpeakingSection() {
  // Sample speaking data
  const talks = [
    {
      id: 1,
      title: "Motion Design System",
      subtitle: "Oct. 2023 | Lightning Talk @ designMyx by Myntra",
      link: "#"
    },
    {
      id: 2,
      title: "Decoding Razorpay Design System",
      subtitle: "Mar. 2024 | Online Session @ AOH Community",
      link: "#"
    },
    {
      id: 3,
      title: "Design Systems for Enterprise",
      subtitle: "Apr. 2024 | Panel Discussion @ Geeky Ants",
      link: "#"
    },
    {
      id: 4,
      title: "Decoding Blade: The DS that powers Razorpay",
      subtitle: "May 2024 | Online Session @ TGIF by 10k Designers",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <SectionTitle title="Speaking" />
        <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-white/20 to-transparent mt-2" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {talks.map((talk, index) => (
          <motion.div
            key={talk.id}
            className="mb-6 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-3 bg-zinc-900/30 p-5 rounded-lg border border-zinc-800/50 hover:border-zinc-700/80 transition-colors">
              <div className="text-white/40 text-sm font-mono mt-1">0{talk.id}</div>
              <div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{talk.title}</h3>
                <div className="text-white/60 text-sm mb-3">{talk.subtitle}</div>
                <Link
                  href={talk.link}
                  className="text-xs text-white inline-flex items-center group"
                >
                  <span className="border-b border-white/30 group-hover:border-white pb-0.5 transition-colors inline-flex items-center gap-2">
                    Check Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
