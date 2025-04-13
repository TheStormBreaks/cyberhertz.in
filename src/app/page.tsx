"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { CustomCursor } from "@/components/CustomCursor"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

export default function Home() {
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
          <h1 className="text-5xl md:text-7xl mb-6">@Cyberhertz.co</h1>
          <p className="text-white/70 mb-12 text-lg">Cyberhertz Consultants Pvt. Ltd. </p>
        </motion.div>

        {/* BOX */}
        <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >    

              {/* Top Section - Name and Picture Side by Side */}
              <div className="flex flex-col lg:flex-row items-start gap-8 mb-8"></div>
              <div className="relative h-[320px] w-[720px] rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/images/brochure1.png"
                  alt="CH"
                  fill
                  className="object-cover"
                />
                </div>
                {/* Top Section - Name and Picture Side by Side */}
              <div className="flex flex-col lg:flex-row items-start gap-8 mb-8"></div>
              <div className="relative h-[320px] w-[720px] rounded-lg overflow-hidden shrink-0">
                <Image
                  src="/images/brochure2.png"
                  alt="CH"
                  fill
                  className="object-cover"
                />
                </div>
                <div className="bg-[#1b1b1c] py-16 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6 section-title">Let's Connect!</h2>
          <p className="text-white/70 mb-8 max-w-2xl leading-relaxed">
            Thank you for visiting and scrolling through my portfolio. If you want to talk about any of my projects, I'd love to hear from you!
          </p>

          <a href="mailto:example@example.com" className="text-2xl md:text-3xl block mb-10 hover:opacity-80 font-bold">
            <span className="span-mail">m2somya@gmail.com •  somya@cyberhertz.in</span>
          </a>


          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-16">
            <Link href="https://github.com/TheStormBreaks" className="social-media">Github</Link>
            <Link href="https://www.linkedin.com/in/thestormbreaks/" className="social-media">LinkedIn</Link>
            <Link href="https://www.instagram.com/marvelesque.exe/" className="social-media">Instagram</Link>
            <Link href="https://www.linkedin.com/in/cyberhertz/" className="social-media">LinkedIn - Cyberhertz.co</Link>
            <Link href="https://www.instagram.com/cyberhertz.co/" className="social-media">Instagram - Cyberhertz</Link>
            <Link href="https://www.cyberhertz.in/about" className="social-media">www.cyberhertz.in</Link>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 pt-8 border-t border-white/5">
          <div>© 2025</div>
          <div>Last Updated: April 2025</div>
          <div className="flex items-center gap-2">
            Made with Next.js by SOMYA JHA
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
              <path d="M12 2v4M5 7l2.5 2.5M7 17l-2 2M17 7l2 2M14 19l2.5-2.5" />
              <path d="M2 12h2M20 12h2M12 18v2M12 6v2" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
            <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-white/20 to-transparent mt-2"></div>
              </motion.div>
            </div>
            {/* Full width marquee */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap flex w-max">
              <span className="text-1xl md:text-4xl mx-3 opacity-20 italic font-normal">cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - </span>
              <span className="text-1xl md:text-4xl mx-1 opacity-20 italic font-normal">cyberhertz - cyberhertz - cyberhertz - cyberhertz - cyberhertz - </span>
              </div>
            </div>

           

     
    </main>
  );



  
}
