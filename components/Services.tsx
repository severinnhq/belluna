'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { CheckCircle } from 'lucide-react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.15,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    }),
  }

  const services = [
    {
      title: 'Páciens Szerzés',
      desc: 'Automatizált rendszereink segítenek folyamatosan új ügyfeleket szerezni.',
    },
    {
      title: 'AI Marketing',
      desc: 'Mesterséges intelligencia alapú kampányoptimalizálás a legjobb eredményekért.',
    },
    {
      title: 'Időpont Foglaló Rendszer',
      desc: 'Könnyen kezelhető, online időpontfoglalás pácienseid számára.',
    },
  ]

  return (
    <section className={`relative w-full overflow-hidden py-20 ${poppins.className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2f4197] to-[#030516] opacity-95" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Szolgáltatásaink
          </motion.h2>
          <motion.p
            className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ismerd meg, hogyan támogatjuk a fogászati klinikákat a növekedésben.
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:scale-[1.02] transition-transform"
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
              custom={i}
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-yellow-400 w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-white/80 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
