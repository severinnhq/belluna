'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export default function NotFound() {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-violet-800 to-emerald-500 text-white flex items-center justify-center px-6 ${sora.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-lg"
      >
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight">404</h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-white/90">
          Oops! The page you're looking for doesn’t exist.
        </p>
        <p className="mt-2 text-white/70">
          It might have been moved or deleted. Let’s get you back on track.
        </p>
        <div className="mt-6">
          <Link href="/">
            <button className="px-6 py-3 bg-white text-violet-700 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition">
              Go Home
            </button>
          </Link>
        </div>

        {/* Optional decorative SVG animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute bottom-0 left-0 w-full overflow-hidden"
        >
          <svg className="w-full h-48 md:h-64" viewBox="0 0 1440 320">
            <path fill="white" fillOpacity="1" d="M0,96L48,80C96,64,192,32,288,48C384,64,480,128,576,138.7C672,149,768,107,864,106.7C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
