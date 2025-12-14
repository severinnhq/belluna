"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Mennyi idő alatt lehet ezt elindítani?",
    answer:
      "Ha megvan az ajándékutalvány ajánlat és a döntéshozó elérhető, a kampány 24–48 órán belül elindítható. Nem húzzuk az időt – karácsonyig minden nap számít.",
  },
  { 
    question: "Kell külön marketinges csapat vagy technikai tudás a részünkről?",
    answer:
      "Nem. Mi készítjük a hirdetéseket, a landing oldalt és a technikai beállításokat. A rendelő feladata kizárólag az érdeklődők kiszolgálása.",
  },
  {
    question: "Mi történik, ha nem jönnek az eladások?",
    answer:
      "Ha december 23-ig nem teljesül a megbeszélt minimum (5 ajándékutalvány), nem fizet a kampányért. Ez teljesítményalapú együttműködés, nem klasszikus marketing szolgáltatás.",
  },
  {
    question: "Milyen ajándékutalványokkal működik ez a legjobban?",
    answer:
      "Tapasztalataink szerint a 30–50.000 Ft-os fogfehérítés és esztétikai csomagok teljesítenek a legjobban. Magasabb értékű utalványokkal is dolgozunk, de mindig a realitás alapján javaslunk.",
  },
  {
    question: "Miért érdemes most jelentkezni?",
    answer:
      "Egy körzeten belül csak egy fogászattal dolgozunk együtt. Korlátozott számú praxisnak tudunk teljes fókuszú kampányt indítani.",
  },
  {
    question: "Mennyi reklámköltséggel kell számolni?",
    answer:
      "A pontos összeg a rendelő céljaitól és kapacitásától függ, de a kampányt kontrollált, rövid időszakra optimalizáljuk – nincs felesleges költés.",
  },
  {
    question: "Ez hosszú távú szerződést jelent?",
    answer:
      "Nem. Ez egy gyors, karácsonyi kampány, konkrét céllal. Ha működik, januárban van lehetőség továbblépni – de ez már egy külön döntés.",
  },
  {
    question: "Miért most érdemes belevágni?",
    answer:
      "Karácsony előtt az ajándékutalványok iránti kereslet kiugróan magas, januárban viszont már teljesen más a vásárlói viselkedés. Ez egy időablak, nem egy egész éves ajánlat.",
 },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-8 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-center mb-14"
        >
          <span className="text-white">Még mindig bizonytalan?</span>
          <br />
          <span className="text-4xl md:text-4xl font-extrabold text-shadow-md text-shadow-black/40">
            Gyakran Ismételt Kérdések
          </span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl faq-shadow overflow-hidden bg-black/25"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-semibold text-white text-shadow-md text-shadow-black/25">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${
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
                    <div className="px-6 pb-4 text-white text-base font-medium">
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
