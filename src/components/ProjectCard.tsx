"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  year: string
  imageUrl: string
  link: string
}

export function ProjectCard({ title, description, year, imageUrl, link }: ProjectCardProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ translateY: -5 }}
    >
      <div className="project-card bg-zinc-900/30 mb-5 rounded-lg overflow-hidden border border-zinc-800/50 hover:border-zinc-700/80 transition-colors">
        <Link href={link}>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transform transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>
      <div className="px-1">
        <div className="text-xs text-white/50 mb-2 font-mono tracking-wider">{year}</div>
        <h3 className="text-xl font-bold mb-3 hover:text-white/90 transition-colors">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="text-white/60 text-sm mb-4 leading-relaxed">{description}</p>
        <Link href={link} className="text-xs text-white inline-flex items-center group">
          <span className="border-b border-white/30 group-hover:border-white pb-0.5 transition-colors inline-flex items-center gap-2">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </motion.div>
  )
}
