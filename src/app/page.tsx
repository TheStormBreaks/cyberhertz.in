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

            <Footer/>

     
    </main>
  );



  
}
