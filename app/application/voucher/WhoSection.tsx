"use client";

import { motion } from "framer-motion";


export default function WhoSection() {
  return (
    <section className="relative bg-[#000816] text-white py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Background accent image or gradient */}
      <div className="absolute inset-0 opacity-10 bg-[url('/uploads/lovjabg1.png')] bg-cover bg-center"></div>

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        >
          Kinek <span className="text-yellow-400">való</span> ez a kampány?
        </motion.h2>

        {/* Grid: 1 column <1024px, 2 columns ≥1024px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ✅ WHY YOU NEED LOVJA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Való
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              
              <li className="hidden lg:block">
                ✅ Fogászati rendelők, akik aktívan árulnak ajándékutalványokat
              </li>
              <li className="hidden lg:block">
                ✅ Van legalább minimális hirdetési büdzséjük decemberre
              </li>
              <li className="hidden lg:block">
                ✅ Hosszabb élettartam, kevésbé hajlamos repedésre vagy lepattogásra. 
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
             
              <li className="block lg:hidden">
                ✅ Fogászati rendelők, akik aktívan árulnak ajándékutalványokat
              </li>
                <li className="block lg:hidden">
                ✅ Van legalább minimális hirdetési büdzséjük decemberre
              </li>
               <li className="block lg:hidden">
                ✅ Gyors döntéshozatal (nem 2 hét gondolkodás)
              </li>
            </ul>
          </motion.div>

          {/* ⚠️ WHAT HAPPENS IF YOU DON’T */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-900/20 border border-red-600/30 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-4">
             Nem való
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              <li className="hidden lg:block">
                ⚠️ „Majd jövőre” típusú rendelők
              </li>
              <li className="hidden lg:block">
                ⚠️ Akik csak érdeklődnek, de nem akarnak tesztelni
              </li>
              <li className="hidden lg:block">
                ⚠️ Akik nem tudnak 24–48 órán belül elindulni
              </li>
            

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ⚠️ „Majd jövőre” típusú rendelők
              </li>
              <li className="block lg:hidden">
                ⚠️ Akik csak érdeklődnek, de nem akarnak tesztelni
              </li>
               <li className="block lg:hidden">
                ⚠️ Akik nem tudnak 24–48 órán belül elindulni
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        <p className="text-lg md:text-xl text-white/90 mb-6">
  Nem sok idő maradt Karácsonyig. 
  <span className="block text-yellow-400 font-bold mt-1">
    Indítsa el karácsonyi ajándékutalvány kampányát.
  </span>
</p>
<a
  href=""
  className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors btn-shadow"
>
  Ingyenes konzultáció →
</a>

        </motion.div>
      </div>
    </section>
  );
}
