"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2025-07-26T00:00:00');

function formatTime(diff: number) {
  const totalSeconds = Math.max(Math.floor(diff / 1000), 0);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${days} NAP ${hours} ÓRA ${minutes} PERC`;
}

export default function DemoCountdownHeader() {
  const [timeLeft, setTimeLeft] = useState(() =>
    formatTime(TARGET_DATE.getTime() - Date.now())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = TARGET_DATE.getTime() - Date.now();
      setTimeLeft(formatTime(diff));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#000816]/90 backdrop-blur-sm py-3 px-4 shadow-lg border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-center">
        <h1
          className="text-white font-bold tracking-wider whitespace-nowrap text-center"
          style={{ fontSize: 'clamp(0.5rem, 3vw, 1.5rem)' }}
        >
          Már csak {timeLeft} van hátra
        </h1>
      </div>
    </motion.header>
  );
}
