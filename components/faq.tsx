"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hogyan különbözik a FogászDigital egy hagyományos marketingügynökségtől?",
    answer:
      "Mi nem csupán hirdetéseket kezelünk, hanem teljes körű páciensszerző rendszert biztosítunk: érdeklődőszerzés, utánkövetés, időpontfoglalás – mindezt eredménygaranciával.",
  },
  {
    question: "Milyen pácienseket hoztok a rendelőmbe?",
    answer:
      "Kifejezetten magas értékű, esztétikai kezelések iránt érdeklődő pácienseket célzunk meg, akik hajlandóak fizetni a prémium szolgáltatásokért.",
  },
  {
    question: "Mennyi idő alatt hoztok eredményeket?",
    answer:
      "Az első eredmények általában már 1–2 héten belül jelentkeznek. Teljes kampányunk beindítása után havonta 5–15+ új páciensre lehet számítani.",
  },
  {
    question: "Hogyan tudjátok garantálni az eredményeket?",
    answer:
      "Több tucat sikeres kampány tapasztalatával dolgozunk. A kampányainkat folyamatosan optimalizáljuk, és csak akkor dolgozunk, ha biztosak vagyunk a sikerben – ezért merünk garanciát vállalni.",
  },
  {
    question: "Miért érdemes most jelentkezni?",
    answer:
      "Korlátozott számú praxisnak tudunk teljes fókuszú kampányt indítani. Ha most jelentkezik, az elsők között biztosíthatja a helyét.",
  },
  {
    question: "Új ügynökség vagytok?",
    answer:
      "Nem. Bár a FogászDigital új brandként indult, mögötte tapasztalt marketing szakemberek és kipróbált rendszerek állnak, akik már sok praxisnak hoztak mérhető növekedést.",
  },
  {
    question: "Mennyi időt kell ezzel foglalkoznom?",
    answer:
      "Minimális időráfordítás szükséges Öntől. Mi kezeljük a hirdetéseket, a jelentkezők utánkövetését és az időpontok egyeztetését – Ön csak a kezelésekkel foglalkozik.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
       <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-xl md:text-2xl font-semibold text-center mb-14" // reduced size
>
  Még mindig bizonytalan?
  <br />
  <span className="text-[#4f39f6] text-4xl md:text-4xl font-extrabold">
    Gyakran Ismételt Kérdések
  </span>
</motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-700 text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
