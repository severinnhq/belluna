"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Always show when near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="fixed top-0 left-0 w-full z-50 bg-[#000816]/90 backdrop-blur-sm py-3 px-4 shadow-lg border-b border-white/10"
        >
          <div className="max-w-6xl mx-auto flex justify-center overflow-hidden">
            <h1
              className="text-white font-bold tracking-wider whitespace-nowrap text-center"
              style={{ fontSize: 'clamp(0.5rem, 3vw, 1.5rem)' }}
            >
              PLASZTIKAI SEBÉSZETEK AI NÖVEKEDÉSI PARTNERE
            </h1>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
