"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { CustomCursor } from "@/components/CustomCursor"
import { Footer } from "@/components/Footer"
import { Projects } from "@/components/Projects"


export default function About() {
  return (
      <main className="min-h-screen">
            <CustomCursor />
            <Navigation />
            <Projects />
            <Footer />
          </main>
  )
}


