'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sora } from 'next/font/google'
import Link from 'next/link'
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ['latin'] })

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  }

  const videoVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <>
      <section className={`relative min-h-screen w-full overflow-hidden ${sora.className}`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700 to-emerald-400 opacity-90" />
        
        {/* SVG Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern-1" x="0" y="0" width="1500" height="800" patternUnits="userSpaceOnUse">
                <path 
                  d="M0,200 C300,150 400,250 800,200 C1200,150 1300,250 1500,200 
                     M0,400 C200,350 500,450 900,400 C1300,350 1400,450 1500,400"
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  strokeWidth="1"
                />
              </pattern>
              <pattern id="wave-pattern-2" x="100" y="50" width="1500" height="800" patternUnits="userSpaceOnUse">
                <path 
                  d="M0,320 C250,270 500,370 750,320 C1000,270 1250,370 1500,320 
                     M0,520 C250,470 500,570 750,520 C1000,470 1250,570 1500,520"
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.08)" 
                  strokeWidth="1"
                />
              </pattern>
              <pattern id="dot-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.3)" />
                <circle cx="30" cy="40" r="0.8" fill="rgba(255, 255, 255, 0.2)" />
                <circle cx="50" cy="20" r="0.6" fill="rgba(255, 255, 255, 0.35)" />
              </pattern>
            </defs>

            <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern-1)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern-2)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" opacity="0.4" />
            <path 
              d="M-100,300 C100,200 200,400 500,300 C800,200 1100,400 1400,300 C1700,200"
              fill="none" 
              stroke="rgba(255, 255, 255, 0.05)" 
              strokeWidth="80"
              strokeLinecap="round"
            />
            <path 
              d="M0,100 C200,120 400,80 600,100 C800,120 1000,80 1200,100 C1400,120 1600,80 1800,100"
              fill="none" 
              stroke="rgba(255, 255, 255, 0.07)" 
              strokeWidth="0.8"
            />
            <path 
              d="M0,600 C200,620 400,580 600,600 C800,620 1000,580 1200,600 C1400,620 1600,580 1800,600"
              fill="none" 
              stroke="rgba(255, 255, 255, 0.07)" 
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 py-16 h-full">
          <div className="flex flex-col lg:flex-row min-h-screen pt-10 md:pt-16 lg:pt-0">
            {/* Left Column */}
            <div className="lg:w-1/2 flex flex-col justify-center z-10 mt-8 sm:mt-16 lg:mt-0">
              <div className="w-16 h-1 bg-white mb-6"></div>
              <motion.h1
                className="font-bold mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={0}
                variants={textVariants}
              >
                Our Decision
                <br />
                <span className="text-emerald-300">Intelligence</span>
                <br />
                Platform
              </motion.h1>
              <motion.p
                className="mb-8 max-w-md text-white/90 text-base sm:text-lg"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={1}
                variants={textVariants}
              >
                Connect ambiguous, siloed data into the most trusted, reusable resource for your organization.
              </motion.p>
              <motion.div
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={buttonVariants}
                className="flex gap-4 flex-wrap"
              >
                <Link href="/book-demo">
                  <button className="px-6 py-3 bg-white text-violet-700 font-medium rounded-md hover:bg-emerald-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Schedule a Demo
                  </button>
                </Link>
                <Link href="/learn-more">
                  <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 flex items-center justify-center lg:justify-end mt-12 sm:mt-16 lg:mt-0">
              <motion.div
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative z-10"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={videoVariants}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl transform translate-x-4 translate-y-4"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/20">
                    <div className="h-12 bg-violet-700/5 border-b border-violet-700/10 flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-4"></div>
                      <div className="h-6 w-3/4 bg-violet-700/10 rounded-full"></div>
                    </div>
                    <div className="aspect-video bg-violet-700/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-700/10 to-emerald-400/10"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 shadow-lg">
                          <div className="w-14 h-14 rounded-full bg-violet-700 flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-violet-700 font-medium">Platform Demo Video</p>
                        <p className="text-violet-600/70 text-sm mt-1">See how our solution works</p>
                      </div>
                    </div>
                    <div className="p-4 bg-violet-700/5 border-t border-violet-700/10 flex items-center">
                      <div className="w-full h-2 bg-violet-700/10 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-violet-700"></div>
                      </div>
                      <div className="ml-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer placed outside HeroSection */}
      <Footer />
    </>
  )
}