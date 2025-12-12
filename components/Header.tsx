'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={40} className="object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#szolgaltatasaink" className="text-gray-700 hover:text-yellow-400 font-medium">
            Szolgáltatásaink
          </Link>
          <Link href="#kapcsolat" className="text-gray-700 hover:text-yellow-400 font-medium">
            Kapcsolat
          </Link>
          <Link href="#konzultacio">
            <button className="ml-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition">
              Ingyenes konzultáció!
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-sm shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link
                href="#szolgaltatasaink"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-yellow-400 font-medium"
              >
                Szolgáltatásaink
              </Link>
              <Link
                href="#kapcsolat"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-yellow-400 font-medium"
              >
                Kapcsolat
              </Link>
              <Link href="#konzultacio" onClick={() => setIsOpen(false)}>
                <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition">
                  Ingyenes konzultáció!
                </button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
