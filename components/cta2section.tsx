import React from "react";
import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
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

const Cta2Section: React.FC<SolutionSectionProps> = ({ scrollToTop }) => {
  return (
    <section className="bg-grey py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        >
          Ismerősen hangzik?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <CheckCircle className="text-emerald-600 mt-1" size={22} />
              <p className="text-lg">{problem}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-emerald-50 shadow-xl rounded-2xl">
          <Card>
            <CardContent>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  🎯 A Bellunánál mi nem csak hirdetünk – <br /> valódi eredményeket hozunk!
                </h3>
                <p className="text-lg mb-6">
                  Garantáltan <strong>5–10 új, magas értékű plasztikai páciens</strong> havonta – teljesen <strong>kockázatmentesen</strong>!
                  Önnek csak a kezelésekre kell fókuszálnia, mi intézzük a marketinget és az utánkövetést.
                </p>
                <button 
                  onClick={scrollToTop}
                  className="text-lg px-6 py-4 bg-[#080657] hover:bg-[#05043a] text-white rounded-xl hover:-translate-y-1 transition-transform"
                >
                  FOGLALJON IDŐPONTOT MOST!
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cta2Section;