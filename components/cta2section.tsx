import React from "react";
import { easeOut } from 'framer-motion/dom';
import { motion } from "framer-motion";

const problems = [
  "Sokat költ hirdetésekre, mégis alig jönnek páciensek?",
  "Elindult a marketing, de nem lát kézzelfogható eredményeket?",
  "Rengeteg érdeklődő van, de kevés a valódi, minőségi páciens?",
  "Nincs ideje hirdetések kezelésére vagy az érdeklődők utánkövetésére?",
];

interface SolutionSectionProps {
  scrollToTop: () => void;
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const Cta2Section: React.FC<SolutionSectionProps> = ({ scrollToTop }) => {
  return (
    <section className="py-16 lg:pt-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          Ismerősen hangzik?
        </motion.h2>

        <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-6 mb-10 text-left">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-8 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-lg">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
            className="bg-white/5 green-shadow rounded-3xl"
            variants={fadeUp}
          >
          <div className="rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              🎯 A <strong>Bellunánál</strong> mi nem csak hirdetünk - <br /> valódi eredményeket hozunk!
            </h3>
            <p className="text-lg mb-6">
              Garantáltan <strong>5-10 új, esztétikai páciens</strong> havonta - teljesen <strong>kockázatmentesen</strong>!
              Önnek csak a kezelésekre kell fókuszálnia, mi intézzük az ügyfélszerzést és az utánkövetést.
            </p>
          <button
            onClick={scrollToTop}
            className="text-md md:text-2xl px-6 py-4 bg-green-600 text-white hover:bg-green-700 font-bold rounded-xl hover:-translate-y-1 transition cursor-pointer"
          >
            FOGLALJON IDŐPONTOT MOST!
          </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta2Section;