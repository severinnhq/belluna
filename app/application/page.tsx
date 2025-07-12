"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion/dom';
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
        { value: "facebook", label: "Facebook/Instagram" },
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
        { value: "100-200", label: "Havi 100-200 ezer forint körül" },
        { value: "300-500", label: "Nagyjából 300-500 ezer forint között" },
        { value: "600-1000", label: "Olyan 600 ezertől 1 millió forintig" },
        { value: "1000-2000", label: "1 és 2 millió forint között" },
        { value: "2000+", label: "Több mint 2 millió forint havonta" },
      ],
    },
    {
      question: "Milyen beavatkozásokat szeretnének hirdetni?",
      type: "input",
      field: "treatments",
      inputProps: { type: "text", placeholder: "Pl. fogfehérítés, implantátum" },
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
      className="bg-yellow-400 text-black text-xl font-bold w-full py-4 rounded-2xl hover:bg-[#000816] hover:text-white transition-colors cursor-pointer btn-shadow"
    >
      TOVÁBB
    </button>
  );

  const renderStep = () => {
    const step = quizSteps[currentStep - 1];

  const QuestionTitle = () => (
    <h2 className="text-3xl font-semibold text-center mb-8 text-white text-shadow-md text-shadow-black/50">
      {step.question}
    </h2>
  );

    if (step.type === "input" && step.field) {
      // Only string fields use input elements
      const value = formData[step.field] as string;
      return (<>
        <QuestionTitle />
        <div className="space-y-4">
          <input
            {...step.inputProps}
            value={value}
            onChange={(e) => updateFormData(step.field as keyof FormData, e.target.value)}
            className="w-full p-4 border-2 border-gray-400 rounded-2xl mb-8 active:border-white btn-shadow"
          />
          {renderNextButton()}
        </div></>
      );
    }

    if (step.type === "multiple") {
      return (<>
        <QuestionTitle />
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
            {step.options?.map((opt) => (
              <label key={opt.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.marketingType.includes(opt.value)}
                  onChange={() => handleSelection(opt.value)}
                  className="w-5 h-5 rounded-full cursor-pointer"
                />
                <span className="text-white font-medium text-shadow-sm text-shadow-black/50 italic cursor-pointer">{opt.label}</span>
              </label>
            ))}
          </div>
          {renderNextButton()}
        </div>
        </>
      );
    }

    if (step.type === "single" && step.field) {
      // Only string fields use radio buttons
      const fieldValue = formData[step.field] as string;
      return (<>
        <QuestionTitle />
        <div className="space-y-4">
          <div className="flex flex-col space-y-4 max-w-md mx-auto mb-8">
            {step.options?.map((opt) => (
              <label key={opt.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={step.field}
                  checked={fieldValue === opt.value}
                  onChange={() => handleSelection(opt.value)}
                  className="w-5 h-5 rounded-full cursor-pointer"
                />
                <span className="text-white font-medium text-shadow-sm text-shadow-black/50 italic cursor-pointer">{opt.label}</span>
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

      return (<>
        <QuestionTitle />
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Teljes név"
            value={formData.fullName}
            onChange={(e) => updateFormData("fullName", e.target.value)}
            className="w-full p-4 border-2 border-gray-400 rounded-2xl mb-2 active:border-white btn-shadow"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="w-full p-4 border-2 border-gray-400 rounded-2xl mb-2 active:border-white btn-shadow"
          />
          <input
            type="tel"
            placeholder="Telefonszám"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            className="w-full p-4 border-2 border-gray-400 rounded-2xl mb-2 active:border-white btn-shadow"
          />
          <input
            type="text"
            placeholder="Pozíció a klinikán"
            value={formData.position}
            onChange={(e) => updateFormData("position", e.target.value)}
            className="w-full p-4 border-2 border-gray-400 rounded-2xl mb-4 active:border-white btn-shadow"
          />
          <label className="flex items-center space-x-2 mb-8">
            <input
              type="checkbox"
              checked={formData.acceptedPrivacy}
              onChange={(e) => updateFormData("acceptedPrivacy", e.target.checked)}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <span className="text-white text-sm text-shadow-xs text-shadow-black cursor-pointer">
              Hozzájárulok, hogy a megadott adataimat a kapcsolatfelvétel és
              az időpont egyeztetés céljából kezeljék.
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
            className={`w-full text-xl py-4 rounded-2xl font-bold transition-colors ${
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

  return (<main className='spacer layer1'>
    <div
      ref={topSectionRef}
      className="w-full px-64 py-20 backdrop-blur-0"
      > {/* blur kerdeses */}
      <div className='flex justify-between items-center h-138'>
        <motion.div
          className="text-center max-w-3xl mb-16 md:mb-0 mt-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
                  <motion.div
                    className="flex flex-col text-4xl md:text-6xl font-extrabold text-white leading-tight text-left text-shadow-lg text-shadow-black/50"
                    variants={fadeUp}
                  >
                    <span>Szerezzen <strong className='text-7xl text-[#5271ff]'>5-10 új</strong></span>
                    <span className='text-red-500'>plasztikai pácienst</span>
                    <span><i>havonta</i>, teljesen</span>
                    <span><strong className='text-green-500'>kockázatmentesen!</strong></span>
                      
                  </motion.div>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-xs backdrop-brightness-110 rounded-3xl p-8 border-2 border-gray-400 shadow-2xl w-full max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={grow}
        >
          {renderStep()}
        </motion.div>
      </div>
        <motion.div
          className='flex justify-center items-center w-full'
          initial="hidden"
          animate="visible"
          variants={fadeUp}>
                  <motion.p
                    className="text-cemter mt-12 text-lg md:text-xl text-white font-medium"
                    variants={fadeUp}
                  >
                    🎁 BÓNUSZ #1- Foglaljon ingyenes konzultációt most, és hozzáférést kap egy
                    8 lépéses meta útmutatóhoz
                  </motion.p>
        </motion.div>
    </div>
        <div className="w-[250%] md:w-[175%] xl:w-full wave backdrop-blur-0"> {/* blur kerdeses */}
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
      <div className="flex flex-col items-center spacer bg-white layer3">
        <div className="w-full px-64 2xl:px-96 bg-[#000816] pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
            className=""
          >
            <Why />
          </motion.div>
        </div>
        <div className="w-[250%] md:w-[175%] xl:w-full wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="w-full px-64 mb-16">
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
          <svg className="h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="w-full px-64 bg-[#000816]">
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
          <svg className="h-16 lg:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="w-full px-64 mb-16">
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