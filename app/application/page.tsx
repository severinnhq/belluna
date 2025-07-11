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
      question: "Jelenleg milyen típusú digitális marketinget használ?",
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
      question: "Mekkora volt az elmúlt 90 napban a klinika átlagos havi bevétele? (FT)",
      type: "input",
      field: "averageRevenue",
      inputProps: { type: "number", placeholder: "Írd be forintban" },
    },
    {
      question: "Mekkora az Ön teljes, átlagos havi marketingköltése?",
      type: "single",
      field: "monthlySpend",
      options: [
        { value: "100-200", label: "Havi 100–200 ezer forint körül" },
        { value: "300-500", label: "Nagyjából 300–500 ezer forint között" },
        { value: "600-1000", label: "Olyan 600 ezertől 1 millió forintig" },
        { value: "1000-2000", label: "1 és 2 millió forint között" },
        { value: "2000+", label: "Több mint 2 millió forint havonta" },
      ],
    },
    {
      question: "Milyen kezeléseket akar hirdetni?",
      type: "input",
      field: "treatments",
      inputProps: { type: "text", placeholder: "Pl. fogfehérítés, implantátum" },
    },
    {
      question: "Rendelő weboldala?",
      type: "input",
      field: "website",
      inputProps: { type: "url", placeholder: "https://..." },
    },
    {
      question: "Hol található a klinikája?",
      type: "input",
      field: "location",
      inputProps: { type: "text", placeholder: "Város" },
    },
    {
      question:
        "Csak akkor foglalj időpontot, ha nyitott vagy befektetni a klinikád fejlesztésébe, amennyiben megfelelőnek találod a szolgáltatásunkat.",
      type: "single",
      field: "investmentIntent",
      options: [
        { value: "ready", label: "Készen állok, ha látom az értéket." },
        { value: "not_invest", label: "Nem tervezek befektetni." },
      ],
    },
    {
      question: "Kapcsolati adatok",
      type: "contact",
    },
  ];

  const handleNext = () =>
    setCurrentStep((s) => Math.min(s + 1, quizSteps.length));

  // Type-safe form update function
  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelection = (value: string) => {
    const step = quizSteps[currentStep - 1];
    if (step.type === "multiple" && step.field === "marketingType") {
      const arr = [...formData.marketingType];
      arr.includes(value)
        ? arr.splice(arr.indexOf(value), 1)
        : arr.push(value);
      updateFormData("marketingType", arr);
    } else if (step.field) {
      updateFormData(step.field, value);
    }
  };

  const renderNextButton = () => (
    <button
      onClick={handleNext}
      className="bg-black text-white w-full py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
    >
      TOVÁBB
    </button>
  );

  const renderStep = () => {
    const step = quizSteps[currentStep - 1];

    if (step.type === "input" && step.field) {
      const value = formData[step.field];
      return (
        <div className="space-y-4">
          <input
            {...step.inputProps}
            value={typeof value === "boolean" ? value ? "true" : "" : value}
            onChange={(e) => updateFormData(step.field as keyof FormData, e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />
          {renderNextButton()}
        </div>
      );
    }

    if (step.type === "multiple") {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {step.options?.map((opt) => (
              <label key={opt.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.marketingType.includes(opt.value)}
                  onChange={() => handleSelection(opt.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                />
                <span className="text-gray-700">{opt.label}</span>
              </label>
            ))}
          </div>
          {renderNextButton()}
        </div>
      );
    }

    if (step.type === "single" && step.field) {
      const fieldValue = formData[step.field];
      return (
        <div className="space-y-4">
          <div className="flex flex-col space-y-4 max-w-md mx-auto">
            {step.options?.map((opt) => (
              <label key={opt.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={step.field}
                  checked={fieldValue === opt.value}
                  onChange={() => handleSelection(opt.value)}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded-full"
                />
                <span className="text-gray-700">{opt.label}</span>
              </label>
            ))}
          </div>
          {renderNextButton()}
        </div>
      );
    }

    if (step.type === "contact") {
      const canSubmit =
        formData.fullName &&
        formData.email &&
        formData.phone &&
        formData.acceptedPrivacy;

      return (
        <div className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Teljes név"
            value={formData.fullName}
            onChange={(e) => updateFormData("fullName", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />
          <input
            type="tel"
            placeholder="Telefonszám"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />
          <input
            type="text"
            placeholder="Pozíció a klinikán"
            value={formData.position}
            onChange={(e) => updateFormData("position", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.acceptedPrivacy}
              onChange={(e) => updateFormData("acceptedPrivacy", e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-gray-700 text-sm">
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
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              !canSubmit
                ? "bg-gray-400 cursor-not-allowed text-gray-200"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            KÜLDÉS
          </button>
        </div>
      );
    }

    return null;
  };

  const viewportOptions = { once: true, margin: "0px 0px -100px 0px" };

  return (
    <div
      ref={topSectionRef}
      className="min-h-screen bg-gray-50 pt-16 px-4 pb-4 flex flex-col items-center"
    >
      <motion.div
        className="text-center max-w-3xl mb-16 mt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          variants={fadeUp}
        >
          Szerezzen havonta 5–10 új plasztikai pácienst kockázatmentesen!
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-600"
          variants={fadeUp}
        >
          🎁 BÓNUSZ #1- Foglaljon ingyenes konzultációt most, és hozzáférést kap egy
          8 lépéses meta útmutatóhoz
        </motion.p>
      </motion.div>

      <motion.div
        className="bg-white/90 backdrop-blur-lg rounded-3xl py-12 px-8 border border-gray-200 shadow-2xl w-full max-w-2xl mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={grow}
      >
        {renderStep()}
      </motion.div>

      <div className="w-full max-w-6xl space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <Why />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <Cta1Section scrollToTop={scrollToTop} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <Cta2Section scrollToTop={scrollToTop} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <FAQ />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeUp}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}