import { motion } from "framer-motion";
import { easeOut } from "framer-motion/dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function WhyItWorks() {
  return (
    <section className="w-full py-20 md:py-24">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* LEFT — WHY THIS WORKS */}
          <div>
            <div className="w-12 h-px bg-white/20 mb-6" />

            <h3 className="text-white text-2xl md:text-3xl font-medium mb-8">
              Miért működik ez?
            </h3>

            <div className="border-l border-white/20 pl-6 space-y-4 text-white/85 text-sm md:text-base leading-relaxed">
              <p>
                Karácsonykor az ajándékutalványok{" "}
                <span className="text-white font-medium">
                  impulzus vásárlások
                </span>.
              </p>

              <p>
                A fogfehérítés az egyik{" "}
                <span className="text-white font-medium">
                  legjobban konvertáló
                </span>{" "}
                esztétikai szolgáltatás.
              </p>

              <p>
                Mi nem leadeket gyűjtünk —{" "}
                <span className="text-white font-medium">
                  eladásokat generálunk
                </span>.
              </p>

              <p>
                Minden{" "}
                <span className="text-white font-medium">
                  mérhető és átlátható
                </span>.
              </p>
            </div>
          </div>

          {/* RIGHT — HOW IT WORKS */}
          <div>
            <div className="w-12 h-px bg-white/20 mb-6" />

            <h3 className="text-white text-2xl md:text-3xl font-medium mb-8">
              Hogyan működik?
            </h3>

            <ol className="space-y-4 text-white/85 text-sm md:text-base leading-relaxed list-decimal list-inside">
              <li>Jelentkezik és minősítjük (24 órán belül)</li>
              <li>Beállítjuk a kampányt (landing + hirdetések)</li>
              <li>Elindítjuk az értékesítést</li>
              <li>Ön a rendelőjében kiszolgálja az ügyfeleket</li>
            </ol>

            {/* micro-reassurance */}
            <p className="mt-6 text-white/60 text-xs md:text-sm">
              Nem kell új rendszereket megtanulnia.  
              Mi kezeljük a technikai részt.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
