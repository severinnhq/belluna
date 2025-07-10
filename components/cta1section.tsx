// cta1section.tsx
import React from "react";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA1Section = () => {
  return (
    <section className="bg-grey py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          👉 Ön dönt: továbbra is feleslegesen költi a marketingköltségét eredmény nélkül, vagy velünk dolgozik, és garantáltan profitál?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-14"
        >
          📅 Foglaljon ingyenes konzultációt most, és szerezzen{" "}
          <strong>5–10 új plasztikai pácienst havonta</strong> – <strong>kockázatmentesen</strong>!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button className="text-lg px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl">
            FOGLALJON IDŐPONTOT MOST!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA1Section;
