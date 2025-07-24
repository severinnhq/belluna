"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion/dom';
import Image from 'next/image';
import DemoCountdownHeader from '@/components/democountdownheader';
import Footer from "@/components/Footer";
import { Slider } from '@/components/beforeafter';
import  DemoNegativ  from '@/components/demonegativ';
import  DemoGoal  from '@/components/demogoal';
import  DemoReviews  from '@/components/demoreviews';
import FAQ from "@/components/faq";

interface FormData {
  reasons: string[];
  botheringDuration: string;
  urgency: string;
  previousConsultation: string;
  previousSurgery: string;
  previousSurgeryDetails: string;
  bothersMost: string[];
  otherBother: string;
  healthIssues: string;
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

export default function RhinoplastyConsultation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    reasons: [],
    botheringDuration: "",
    urgency: "",
    previousConsultation: "",
    previousSurgery: "",
    previousSurgeryDetails: "",
    bothersMost: [],
    otherBother: "",
    healthIssues: "",
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
      question: "Miért fontolgat orrplasztikát?",
      type: "multiple",
      field: "reasons",
      options: [
        { value: "aesthetic", label: "Esztétikai okból – nem vagyok elégedett az orrom formájával" },
        { value: "breathing", label: "Légzési nehézségeim vannak" },
        { value: "accident", label: "Baleset/sérülés utáni korrekcióra lenne szükség" },
        { value: "previous_result", label: "Korábbi műtét eredményével nem vagyok elégedett" },
        { value: "other", label: "Más ok" },
      ],
    },
    {
      question: "Mióta zavarja az orra megjelenése vagy funkciója?",
      type: "single",
      field: "botheringDuration",
      options: [
        { value: "less_than_6", label: "Kevesebb mint 6 hónapja" },
        { value: "6_to_12", label: "6 hónap – 1 éve" },
        { value: "more_than_1", label: "Több mint 1 éve" },
        { value: "not_sure", label: "Nem tudom pontosan" },
      ],
    },
    {
      question: "Mennyire sürgős Önnek a beavatkozás?",
      type: "single",
      field: "urgency",
      options: [
        { value: "asap", label: "Minél előbb szeretném elkezdeni" },
        { value: "1-3", label: "1–3 hónapon belül tervezem" },
        { value: "6", label: "6 hónapon belül jó lenne" },
        { value: "info", label: "Egyelőre csak érdeklődöm, információt gyűjtök" },
      ],
    },
    {
      question: "Volt már korábban orrplasztikai konzultáción?",
      type: "single",
      field: "previousConsultation",
      options: [
        { value: "yes", label: "Igen" },
        { value: "no", label: "Nem" },
      ],
    },
    {
      question: "Volt már korábban orrműtétje (pl. orrsövény, korrekció, esztétikai)?",
      type: "single",
      field: "previousSurgery",
      options: [
        { value: "yes", label: "Igen" },
        { value: "no", label: "Nem" },
      ],
    },
    {
      question: "Mi zavarja leginkább az orrán?",
      type: "multiple",
      field: "bothersMost",
      options: [
        { value: "profile", label: "Profil (oldalnézet)" },
        { value: "tip", label: "Orrhegy formája" },
        { value: "bridge", label: "Orrnyereg (púp, egyenetlenség)" },
        { value: "width", label: "Orr szélessége" },
        { value: "breathing", label: "Légzés nehézsége" },
        { value: "other", label: "Egyéb" },
      ],
    },
    {
      question: "Van bármilyen ismert egészségügyi problémája, amiről tudnunk kell?",
      type: "input",
      field: "healthIssues",
      inputProps: { type: "text", placeholder: "Írja le, ha van..." },
    },
    {
      question: "Kapcsolattartási adatok",
      type: "contact",
    },
  ];

  const handleNext = () =>
    setCurrentStep((s) => Math.min(s + 1, quizSteps.length));
  
  const handleBack = () =>
    setCurrentStep((s) => Math.max(s - 1, 1));

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelection = (value: string) => {
    const step = quizSteps[currentStep - 1];
    
    if (step.type === "multiple" && step.field) {
      const currentValues = [...(formData[step.field] as string[])];
      const index = currentValues.indexOf(value);
      
      if (index > -1) {
        currentValues.splice(index, 1);
      } else {
        currentValues.push(value);
      }
      
      updateFormData(step.field, currentValues);
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

    const renderBackButton = () => {
      if (currentStep > 1) {
        return (
          <div className="flex justify-start w-full">
            <button
              onClick={handleBack}
              className="text-white underline text-sm sm:text-base mt-2 hover:text-gray-300 transition-colors"
            >
              Vissza
            </button>
          </div>
        );
      }
      return null;
    };

    // Surgery details input
    if (currentStep === 5 && formData.previousSurgery === "yes") {
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Írja le röviden, mikor és milyen beavatkozás történt"
              value={formData.previousSurgeryDetails}
              onChange={(e) => updateFormData("previousSurgeryDetails", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-4 sm:mb-6 bg-transparent text-white placeholder:text-gray-300"
            />
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

    // Other reason input
    if (currentStep === 1 && formData.reasons.includes("other")) {
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Írja le az okot"
              value={formData.otherBother}
              onChange={(e) => updateFormData("otherBother", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-4 sm:mb-6 bg-transparent text-white placeholder:text-gray-300"
            />
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

    // Health issues input
    if (step.type === "input") {
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <input
              {...step.inputProps}
              value={step.field ? (formData[step.field] as string) : ""}
              onChange={(e) => updateFormData(step.field as keyof FormData, e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-4 sm:mb-6 bg-transparent text-white placeholder:text-gray-300"
            />
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

    // Multiple choice questions
    if (step.type === "multiple") {
      const currentValues = step.field ? (formData[step.field] as string[] || []) : [];
      
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 max-w-md mx-auto mb-4 sm:mb-6">
              {step.options?.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center justify-center p-2 sm:p-3 rounded-xl cursor-pointer transition-all h-full text-center ${
                    currentValues.includes(opt.value)
                      ? 'bg-white/10 text-white font-bold'
                      : 'bg-black/25 text-white font-medium hover:bg-white/5'
                  }`}
                >
                  <span className="text-xs sm:text-sm text-center px-2">
                    {opt.label}
                  </span>
                  <input
                    type="checkbox"
                    checked={currentValues.includes(opt.value)}
                    onChange={() => handleSelection(opt.value)}
                    className="hidden"
                  />
                </label>
              ))}
            </div>
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

    // Single choice questions
    if (step.type === "single") {
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3 max-w-md mx-auto mb-4 sm:mb-6">
              {step.options?.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center justify-center p-2 sm:p-3 rounded-xl cursor-pointer transition-all h-full text-center ${
                    formData[step.field!] === opt.value
                      ? 'bg-white/10 text-white font-bold'
                      : 'bg-black/25 text-white font-medium hover:bg-white/5'
                  }`}
                >
                  <span className="text-xs sm:text-sm text-center px-2">
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
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

    // Contact form
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
            {renderBackButton()}
            <button
              disabled={!canSubmit}
              onClick={async () => {
                const payload = {
                  full_name: formData.fullName,
                  email: formData.email,
                  phone: formData.phone,
                  position: formData.position,
                  reasons: formData.reasons.join(", "),
                  bothering_duration: formData.botheringDuration,
                  urgency: formData.urgency,
                  previous_consultation: formData.previousConsultation,
                  previous_surgery: formData.previousSurgery,
                  previous_surgery_details: formData.previousSurgeryDetails,
                  bothers_most: formData.bothersMost.join(", "),
                  other_bother: formData.otherBother,
                  health_issues: formData.healthIssues,
                  accepted_privacy: formData.acceptedPrivacy,
                };
                try {
                  await fetch(
                    "YOUR_ENDPOINT_HERE",
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

  return (
     <main className="bg-[#000816] min-h-screen">
      <DemoCountdownHeader />
      <div
        ref={topSectionRef}
        className="w-full px-8 sm:px-16 md:px-32 lg:px-16 flex flex-col justify-center items-center min-h-screen py-12"
      >
        <motion.div
          className="flex flex-col justify-center items-center space-y-8 w-full max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            className="flex flex-col items-center text-center font-extrabold text-white leading-tight text-shadow-lg text-shadow-black/50 space-y-3 mb-10"
            variants={fadeUp}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
              ‼️Foglalj <span className="underline">kedvezményes</span>
            </div>
            <div className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
              orrplasztikai konzultációt
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl italic">
              mielőtt betelnek az időpontok‼️
            </div>
            
            {/* Added centered subtitle */}
           
          </motion.div>

          <motion.div
            className="bg-white/10 rounded-2xl p-8 w-full max-w-lg flex flex-col justify-center border-2 border-gray-400 my-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={grow}
          >
            {renderStep()}
          </motion.div>
        </motion.div>
      </div>

      
          <Slider />
       
      <DemoNegativ />
           <DemoGoal />
               <DemoReviews />

      
      
      <FAQ />
      <div>
        <Footer />
      </div>
    </main>
  );
}