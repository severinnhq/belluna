'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Footer from "@/components/Footer";
import Services from "@/components/Services"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
    
      <section className={`relative w-full overflow-hidden ${poppins.className}`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[#5271ff] opacity-90" />
        {/* from-[#000816] maybe better (used in application background svg as the "black" part) */}
        
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
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 pt-12 xl:pt-16 pb-10 xl:pb-19">
          <div className="flex flex-col items-center lg:flex-row lg:pt-0 lg:my-24 xl:my-36">
            {/* Left Column */}
            <div className="lg:w-1/2 flex flex-col justify-center z-10 mt-8 lg:mt-0">
              <div className="w-16 md:w-24 h-1 bg-white mb-4"></div>
              <motion.h1
                className="font-extrabold mb-6 text-2xl min-[440px]:text-3xl sm:text-4xl min-[1095px]:!text-5xl xl:!text-6xl leading-tight text-white text-shadow-lg text-shadow-black/50"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={0}
                variants={textVariants}
              >
                Fogászati Klinikák
                <br />
                <span className="text-yellow-400">AI növekedési
                <br />partnere</span>
                <br />
         
              </motion.h1>
              <motion.p
                className="mb-8 max-w-md text-white/90 min-[440px]:text-sm sm:text-base min-[1095px]:text-lg"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                custom={1}
                variants={textVariants}
              >
                Több páciens, kevesebb kihagyott lehetőség,<br />teljesítmény alapú díjazás. <br /> Egy átlagon felüli ügyfélszerző rendszerrel.
              </motion.p>
              <motion.div
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={buttonVariants}
                className="flex gap-4 flex-wrap justify-center lg:justify-start"
              >
                <Link href="/dentalbooking">
                  <button className="min-[440px]:text-base sm:text-lg min-[1095px]:!text-xl px-4 py-2 md:px-6 md:py-2 bg-yellow-400 text-black hover:bg-yellow-500 font-bold rounded-xl hover:-translate-y-1 transition cursor-pointer new-shadow">
                   Ingyenes konzultáció!
                  </button>
                </Link>
                <Link href="/blog">
                  <button className="min-[440px]:text-base sm:text-lg min-[1095px]:!text-xl px-4 py-2 md:px-6 md:py-2 bg-yellow-400/0 text-white hover:bg-white/5 font-semibold rounded-xl hover:-translate-y-1 transition cursor-pointer new-shadow">
                    Hogyan működik?
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="w-9/10 min-[500px]:w-8/10 lg:w-1/2 flex items-center min-[500px]:justify-center lg:justify-end mt-8 sm:mt-16 lg:mt-0 mb-8 lg:mb-0">
              <motion.div
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative z-10"
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
                variants={videoVariants}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl transform translate-x-4 translate-y-4"></div>
                  <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-white/20">
                    <div className="h-12 bg-yellow-700/5 border-b border-white/20 flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                      <div className="h-6 w-3/4 bg-gray-300/10 rounded-full"></div>
                    </div>
                    <div className="aspect-video bg-black/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5271ff]/10 to-black/10"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 shadow-lg">
                          <div className="w-15 h-15 rounded-full bg-black flex items-center justify-center text-yellow-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-yellow-400 font-semibold text-shadow-lg text-shadow-black/50">Platform Demo Video</p>
                        <p className="text-yellow-400/80 text-sm mt-1 text-shadow-lg text-shadow-black/50">See how our solution works</p>
                      </div>
                    </div>
                    <div className="p-4 bg-yellow-700/5 border-t border-white/2 0 flex items-center">
                      <div className="w-full h-2 bg-gray-300/15 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-yellow-400"></div>
                      </div>
                      <div className="ml-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
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

        <Services />  

      {/* Footer placed outside HeroSection */}
      <Footer />
    </>
  )
}