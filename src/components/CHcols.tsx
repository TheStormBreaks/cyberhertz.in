"use client"

import Link from "next/link"
import { SectionTitle } from "./SectionTitle"
import { motion } from "framer-motion"

export function CHcols() {
  // Sample writing data
  const articles = [
    {
      id: 1,
      title: "DS and ML - Stock Price Prediction",
      link: "#"
    },
    {
      id: 2,
      title: "Military Cybersecurity Research",
      link: "#"
    },
    {
      id: 3,
      title: "Data Center Design and Development Concepts",
      link: "#"
    },
    {
      id: 4,
      title: "App Dev - Shuchita",
      link: "#"
    },
    {
      id: 5,
      title: "App Dev - FarmEasy",
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
        <SectionTitle title="Project Documentations" />
        <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-white/20 to-transparent mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="mb-8 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="border-l-2 border-white/10 group-hover:border-white/30 transition-colors pl-4">
              <h3 className="text-xl md:text-2xl font-normal mb-4 leading-relaxed group-hover:text-white transition-colors">{article.title}</h3>
              <Link
                href={article.link}
                className="text-xs text-white inline-flex items-center group"
              >
                <span className="border-b border-white/30 group-hover:border-white pb-0.5 transition-colors inline-flex items-center gap-2">
                  Check Article
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
