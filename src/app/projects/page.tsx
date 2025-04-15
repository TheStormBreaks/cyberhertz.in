"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { CustomCursor } from "@/components/CustomCursor"
import { motion } from "framer-motion"
import { SectionTitle } from "./SectionTitle"


export default function About() {
  //Projects i am doing
  const articles = [
    {
      id: 1, 
      title: "project 1", 
      link: "#"
    }, 
    {
      id: 2, 
      title: "project 2", 
      link: "#"
    }, 
    {
      id: 3, 
      title: "project 3", 
      link: "#"
    }, 
    {
      id: 4, 
      title: "project 4", 
      link: "#"
    },
  ]

  return (
    <main className="min-h-screen">
          <CustomCursor />
          <Navigation />
          <div className="container mx-auto px-2 py-12 md:py-40 max-w-6xl">
      {/* Top Section - Name and Picture Side by Side */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
              
        {/* Name and Titles */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl md:text-7xl mb-6 font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mathematical  <br />
            and Physical Simulations
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-2 text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Physics and Astrophysics</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Mathematics and Complex Analysis</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="bg-zinc-800/50 px-4 py-1 rounded-full text-sm">Graphic Simulations and Scientific Programming</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <SectionTitle title="List of Projects (web based)" />
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
    </div>          
    </main>
  )
}


