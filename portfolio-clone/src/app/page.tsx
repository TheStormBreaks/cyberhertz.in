"use client"

import { CustomCursor } from "@/components/CustomCursor"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Navigation } from "@/components/Navigation"
import { SpeakingSection } from "@/components/SpeakingSection"
import { WorkSection } from "@/components/WorkSection"
import { WritingSection } from "@/components/WritingSection"

export default function Home() {
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
  );
}
