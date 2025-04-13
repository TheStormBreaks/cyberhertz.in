"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { CustomCursor } from "@/components/CustomCursor"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import {Hero} from "@components/Hero"

export default function About() {
  return (
    <main className="min-h-screen">
          <CustomCursor />
          <Navigation />
          <Hero />
          <WorkSection />
          <WritingSection />
          <SpeakingSection />
    
          <Footer />
        </main>
  )
}


