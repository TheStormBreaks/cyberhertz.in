"use client"

import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  year: string
  imageUrl: string
  link: string
}

export function ProjectCard({ title, description, year, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="mb-12">
      <div className="project-card bg-zinc-900 mb-4">
        <Link href={link}>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="px-1">
        <div className="text-xs text-white/50 mb-1">{year}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/70 text-sm mb-3">{description}</p>
        <Link href={link} className="text-xs text-white inline-flex items-center border-b border-white/50 hover:border-white pb-0.5 transition-colors">
          View Project
        </Link>
      </div>
    </div>
  )
}
