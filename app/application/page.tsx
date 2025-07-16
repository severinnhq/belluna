"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion/dom';
import Image from 'next/image';
import LandingHeader from '@/components/landingheader';
import Bonuses from '@/components/bonuses';
import Why from "@/components/why";
import Cta1Section from "@/components/cta1section";
import Cta2Section from "@/components/cta2section";
import FAQ from "@/components/faq";
import Footer from "@/components/Footer";

interface FormData {
  marketingType: string[];
  averageRevenue: string;
  monthlySpend: string;
  treatments: string;
  website: string;
  location: string;
  investmentIntent: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  acceptedPrivacy: boolean;
}

type QuizStep = {
  question: string;
  type: "multiple" | "single" | "input" | "contact";
  field?: keyof FormData;
  options?: { value: string; label: string }[];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
};
const grow = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut, delay: 0.2 },
  },
};

export default function DigitalMarketingQuiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    marketingType: [],
    averageRevenue: "",
    monthlySpend: "",
    treatments: "",
    website: "",
    location: "",
    investmentIntent: "",
    fullName: "",
    email: "",
    phone: "",
    position: "",
    acceptedPrivacy: false,
  });

  const topSectionRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    if (topSectionRef.current) {
      topSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quizSteps: QuizStep[] = [
    {
      question: "Jelenleg milyen típusú digitális marketinget alkalmaznak?",
      type: "multiple",
      field: "marketingType",
      options: [
        { value: "facebook", label: "META" },
        { value: "google", label: "Google" },
        { value: "seo", label: "SEO" },
        { value: "other", label: "Egyéb" },
      ],
    },
    {
      question: "Mekkora volt az elmúlt 90 napban a sebészet átlagos havi bevétele?",
      type: "input",
      field: "averageRevenue",
      inputProps: { type: "text", placeholder: "Írja be forintban..." },
    },
    {
      question: "Mekkora a teljes, átlagos havi marketingköltségük?",
      type: "single",
      field: "monthlySpend",
      options: [
        { value: "100-200", label: "100-200 ezer Ft" },
        { value: "300-500", label: "300-500 ezer Ft" },
        { value: "600-1000", label: "600 ezer-1 millió Ft" },
        { value: "1000-2000", label: "1-2 millió Ft" },
        { value: "2000+", label: "2+ millió Ft" },
      ],
    },
    {
      question: "Milyen beavatkozásokat szeretnének hirdetni?",
      type: "input",
      field: "treatments",
      inputProps: { type: "text", placeholder: "Pl. orrplasztika, implantátum" },
    },
    {
      question: "Sebészet weboldala?",
      type: "input",
      field: "website",
      inputProps: { type: "url", placeholder: "https://..." },
    },
    {
      question: "Hol található a sebészet?",
      type: "input",
      field: "location",
      inputProps: { type: "text", placeholder: "Város" },
    },
    {
      question:
        "Csak akkor kérjen időpontot, ha nyitott arra, hogy a sebészet fejlesztésébe fektessen, valamint elégedett a szolgáltatásainkkal.",
      type: "single",
      field: "investmentIntent",
      options: [
        { value: "ready", label: "Készen állok, ha látom az értéket." },
        { value: "not_invest", label: "Nem tervezek befektetni." },
      ],
    },
    {
      question: "Kapcsolattartási adatok",
      type: "contact",
    },
  ];

  const iconMap: Record<string, string> = {
  facebook:  'https://cdn-icons-png.flaticon.com/512/6033/6033716.png', // Meta logo
  instagram: 'https://cdn-icons-png.flaticon.com/512/6033/6033716.png', // Meta logo
  google:    'https://cdn-icons-png.flaticon.com/512/281/281764.png',  // Google logo
  seo:       'https://cdn-icons-png.flaticon.com/512/3648/3648841.png', // SEO magnifying‑glass icon
  other: 'https://cdn-icons-png.flaticon.com/512/5726/5726470.png'

};

  const handleNext = () =>
    setCurrentStep((s) => Math.min(s + 1, quizSteps.length));

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

 const handleSelection = (value: string) => {
    const step = quizSteps[currentStep - 1];
    if (step.type === "multiple" && step.field === "marketingType") {
      const arr = [...formData.marketingType];
      const index = arr.indexOf(value);
      
      if (index > -1) {
        arr.splice(index, 1);
      } else {
        arr.push(value);
      }
      
      updateFormData("marketingType", arr);
    } else if (step.field) {
      updateFormData(step.field, value);
    }
  };

  const renderNextButton = () => (
    <button
      onClick={handleNext}
      className="bg-yellow-400 text-black text-lg sm:text-xl font-bold w-full py-2 sm:py-3 rounded-xl hover:bg-yellow-500 transition-colors cursor-pointer btn-shadow"
    >
      TOVÁBB
    </button>
  );

  const renderStep = () => {
    const step = quizSteps[currentStep - 1];

    const QuestionTitle = () => (
      <h2 className="text-2xl min-[560px]:text-3xl lg:text-2xl xl:text-3xl font-semibold text-center mb-4 md:mb-8 text-white text-shadow-md text-shadow-black/50 px-2">
        {step.question}
      </h2>
    );

    if (step.type === "input" && step.field) {
      const value = formData[step.field] as string;
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <input
              {...step.inputProps}
              value={value}
              onChange={(e) => updateFormData(step.field as keyof FormData, e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-4 sm:mb-6 bg-transparent text-white placeholder:text-gray-300"
            />
            {renderNextButton()}
          </div>
        </>
      );
    }

   if (step.type === "multiple") {
  return (
    <>
      <QuestionTitle />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto mb-4 sm:mb-6">
          {step.options?.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center p-2 sm:p-3 rounded-xl cursor-pointer transition-all h-full min-h-[40px] border border-white/50 ${
                formData.marketingType.includes(opt.value)
                  ? 'bg-white/10 text-white font-bold'
                  : 'bg-black/25 text-white font-medium hover:bg-white/5'
              }`}
            >
              {/* Fixed-width icon container */}
              <div className="w-6 h-6 mr-1 sm:mr-2 flex items-center justify-center">
                {opt.value  && (
                  <Image
                    src={iconMap[opt.value]}
                    alt={opt.label}
                    width={0}
                    height={0}
                    className="w-5 h-5"
                  />
                )}
              </div>
              <span className="text-xs sm:text-sm flex-1">
                {opt.label}
              </span>
              <input
                type="checkbox"
                checked={formData.marketingType.includes(opt.value)}
                onChange={() => handleSelection(opt.value)}
                className="hidden"
              />
            </label>
          ))}
        </div>
        {renderNextButton()}
      </div>
    </>
  );
}

    if (step.type === "single") {
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 max-w-md mx-auto mb-4 sm:mb-6">
              {step.options?.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center p-2 sm:p-3 rounded-xl cursor-pointer transition-all h-full min-h-[40px] border border-white/50 ${
                    formData[step.field!] === opt.value
                      ? 'bg-white/10 text-white font-bold italic'
                      : 'bg-black/25 text-white font-medium hover:bg-white/5'
                  }`}
                >
                  <span className="text-center text-xs sm:text-sm">
                    {opt.label}
                  </span>
                  <input
                    type="radio"
                    name={step.field}
                    checked={formData[step.field!] === opt.value}
                    onChange={() => handleSelection(opt.value)}
                    className="hidden"
                  />
                </label>
              ))}
            </div>
            {renderNextButton()}
          </div>
        </>
      );
    }

    if (step.type === "contact") {
      const canSubmit =
        formData.fullName &&
        formData.email &&
        formData.phone &&
        formData.acceptedPrivacy;

      return (
        <>
          <QuestionTitle />
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Teljes név"
              value={formData.fullName}
              onChange={(e) => updateFormData("fullName", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            <input
              type="tel"
              placeholder="Telefonszám"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            <input
              type="text"
              placeholder="Pozíció a klinikán"
              value={formData.position}
              onChange={(e) => updateFormData("position", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-3 sm:mb-4 bg-transparent text-white placeholder:text-gray-300"
            />
            <label className="flex items-start space-x-2 mb-4 sm:mb-6">
              <input
                type="checkbox"
                checked={formData.acceptedPrivacy}
                onChange={(e) => updateFormData("acceptedPrivacy", e.target.checked)}
                className="w-5 h-5 mt-1 rounded cursor-pointer"
              />
              <span className="text-white text-xs sm:text-sm text-shadow-xs text-shadow-black cursor-pointer">
                Hozzájárulok, hogy a megadott adataimat a kapcsolatfelvétel és
                az időpont egyeztetés céljából kezeljük.
              </span>
            </label>
            <button
              disabled={!canSubmit}
              onClick={async () => {
                const payload = {
                  full_name: formData.fullName,
                  email: formData.email,
                  phone: formData.phone,
                  position: formData.position,
                  marketing_type: formData.marketingType.join(", "),
                  average_revenue: formData.averageRevenue,
                  monthly_spend: formData.monthlySpend,
                  treatments: formData.treatments,
                  website: formData.website,
                  location: formData.location,
                  investment_intent: formData.investmentIntent,
                  accepted_privacy: formData.acceptedPrivacy,
                };
                try {
                  await fetch(
                    "https://services.leadconnectorhq.com/hooks/HgwsFJRMemfUuXfpnWLH/webhook-trigger/7672dfd5-798a-435a-92ae-94e579048f06",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    }
                  );
                  window.location.href = "/booking";
                } catch (error) {
                  console.error("Error submitting form:", error);
                  alert("Hiba történt a beküldés során.");
                }
              }}
              className={`w-full text-lg sm:text-xl py-2 sm:py-3 rounded-xl font-bold transition-colors ${
                !canSubmit
                  ? "bg-gray-400 cursor-not-allowed text-gray-200"
                  : "bg-yellow-400 text-black hover:bg-[#000816] hover:text-white cursor-pointer btn-shadow"
              }`}
            >
              KÜLDÉS
            </button>
          </div>
        </>
      );
    }

    return null;
  };

  const viewportOptions = { once: true, margin: "0px 0px -100px 0px" };

  return (
    <main className="spacer layer1
    bg-no-repeat bg-center
    bg-contain bg-scroll
    md:bg-auto md:bg-fixed">
      <LandingHeader />
<div
  ref={topSectionRef}
  className="w-full px-8 sm:px-16 md:px-32 lg:px-16 flex flex-col justify-between items-center pt-12 md:pt-16 lg:pt-24 backdrop-blur-0 telo-layer1"
>
  <div className="flex flex-col justify-between items-center w-full ">
    <motion.div
      className="hidden lg:block max-w-4xl mx-auto text-center"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <p className="text-white font-medium text-sm sm:text-base md:text-lg mt-8">
        🎁 BÓNUSZ #1 - Csak töltse ki az űrlapot, és hozzáférést kap egy 8 lépéses META útmutatóhoz!
      </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row lg:justify-center items-center md:h-[822px] lg:h-[502px] xl:h-[510px] w-full my-16 sm:my-8 lg:my-0">
      <motion.div
        className="flex justify-center items-center lg:mr-8 2xl:mr-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
   <motion.div
  className="flex flex-col items-center text-center font-extrabold text-white leading-tight text-shadow-lg text-shadow-black/50"
  variants={fadeUp}
>
  <div className="text-3xl min-[360px]:text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
    Szerezzen <span className="text-white">5-10 új</span>
  </div>
  <div className="text-yellow-400 underline text-3xl min-[360px]:text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
    plasztikai pácienst
  </div>
  <div className="text-3xl min-[360px]:text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
    <span className="italic">havonta</span>, teljesen
  </div>
  <div className="text-3xl min-[360px]:text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
    kockázatmentesen!
  </div>
</motion.div>
      </motion.div>

      <motion.div
        className="block lg:hidden mt-4 max-w-md md:max-w-lg mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="text-white/90 font-medium text-xs sm:text-sm min-[560px]:text-base md:text-lg">
          🎁 BÓNUSZ #1 - Csak töltse ki az űrlapot, és hozzáférést kap egy 8 lépéses meta útmutatóhoz!
        </p>
      </motion.div>

      <motion.div
        className="bg-white/10 backdrop-blur-xs backdrop-brightness-110 rounded-2xl p-8 w-full max-w-lg flex flex-col justify-center lg:ml-8 2xl:ml-16 border-2 border-gray-400 my-shadow mt-12 lg:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={grow}
      >
        {renderStep()}
      </motion.div>
    </div>
  </div>
  <div className="w-[250%] md:w-[175%] h-32 wave backdrop-blur-0 block lg:hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
  </div>
</div>


      <div className="w-[250%] md:w-[175%] xl:w-full wave backdrop-blur-0 hidden lg:block">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
         <Bonuses />
      <div className="flex flex-col items-center spacer bg-white layer3">
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 bg-[#000816] pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <Why />
          </motion.div>
        </div>
        <div className="w-[250%] md:w-[175%] xl:w-full wave hidden lg:block">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 mb-10 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <Cta1Section scrollToTop={scrollToTop} />
          </motion.div>
        </div>
        <div className="triangle">
          <svg className="h-12 sm:h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 bg-[#000816]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <Cta2Section scrollToTop={scrollToTop} />
          </motion.div>
        </div>
        <div className="triangle">
          <svg className="h-12 sm:h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 mb-10 md:mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <FAQ />
          </motion.div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}