"use client"

import Link from "next/link"

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl mb-4">
          Hello! I'm <br />
          Rama Krushna.
        </h1>
        <div className="flex flex-wrap gap-2 text-white/70 mb-8">
          <span>Product Designer</span>
          <span className="hidden sm:inline-block">•</span>
          <span>New Media Artist</span>
          <span className="hidden sm:inline-block">•</span>
          <span>Software Tinkerer</span>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-lg mb-12">
          <div className="mb-4 text-white/70">Hey! I am <span className="text-white">Rama Krushna</span></div>
          <p className="text-white/70 mb-6">
            I'm a product designer based in India, currently working as a product designer at Razorpay. I work with the design systems team - setting up the foundations, building components, and setting up processes. Occasionally I work on interaction design - defining the motion system and building high fidelity prototypes. Over the past years, I have had the opportunity to work and learn from some awesome people at UNDP, MakeMyTrip & Polygon.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm">
              My Changelog
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm">
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="overflow-hidden mb-20">
          <div className="animate-marquee whitespace-nowrap flex">
            <span className="text-3xl md:text-4xl mx-4 opacity-80">Deploy - Design - Develop - Deploy - Design - Deploy - Design - Develop - Deploy - Design -</span>
          </div>
        </div>
      </div>
    </div>
  )
}
