"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion/dom';
import Image from 'next/image';
import LandingHeader from './landingheader';
import WhoSection from "./WhoSection";
import WhyItWorks from "./WhyItWorks";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";





import FAQ from "./faq";
import Footer from "@/components/Footer";


interface FormData {
  marketingType: string[];
  voucher: string;
  monthlySpend: string;
  whodecide: string;
  website: string;
  location: string;
  whenstart: string;
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
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    marketingType: [],
    voucher: "",
    monthlySpend: "",
    whodecide: "",
    website: "",
    location: "",
    whenstart: "",
    fullName: "",
    email: "",
    phone: "",
    position: "",
    acceptedPrivacy: false,
  });
  const [errors, setErrors] = useState<{[key: number]: string}>({});

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
      question: "Jelenleg rendelkeznek ajándkutalvánnyal?",
      type: "single",
      field: "voucher",
      options: [
        { value: "yes", label: "Igen" },
        { value: "no", label: "Nem" },
      ],
    },
    {
      question: "Mennyi reklámkeret áll rendelkezésre decemberre?",
      type: "single",
      field: "monthlySpend",
       options: [
        { value: "50-75", label: "50-75 ezer FT" },
        { value: "75-100", label: "75–100 ezer Ft" },
        { value: "100+", label: "100 000 FT felett" },
          { value: "notnow", label: "Nem tudunk most elkülöníteni" },

      ],
    },
    {
      question: "Ki dönt a marketingről?",
      type: "single",
      field: "whodecide",
      options: [
        { value: "mydecision", label: "Én" },
        { value: "othersdecision", label: "Más" },
      ],
    },
    {
      question: "Klinika weboldala?",
      type: "input",
      field: "website",
      inputProps: { type: "url", placeholder: "https://..." },
    },
    {
      question: "Hol található a klinika?",
      type: "input",
      field: "location",
      inputProps: { type: "text", placeholder: "Város" },
    },
    {
      question:
        "Mikor tudnánk elindulni?",
      type: "single",
      field: "whenstart",
      options: [
        { value: "24h", label: "24 órán belül" },
        { value: "48h", label: "48 órán beül" },
         { value: "later", label: "Később" },
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

  const validateStep = (step: number): boolean => {
    const stepData = quizSteps[step - 1];
    let isValid = true;
    let errorMessage = '';

    if (stepData.type === "multiple" && stepData.field === "marketingType") {
      if (formData.marketingType.length === 0) {
        isValid = false;
        errorMessage = 'Kérjük, válasszon legalább egy opciót';
      }
    } else if (stepData.type === "single" || stepData.type === "multiple") {
      if (!formData[stepData.field!]) {
        isValid = false;
        errorMessage = 'Kérjük, válasszon egy opciót';
      }
    } else if (stepData.type === "input" && stepData.field) {
      const value = formData[stepData.field];
      if (typeof value === 'string' && value.trim() === '') {
        isValid = false;
        errorMessage = 'Kérjük, töltse ki ezt a mezőt';
      }
    }

    if (!isValid) {
      setErrors(prev => ({...prev, [step]: errorMessage}));
    } else {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[step];
        return newErrors;
      });
    }

    return isValid;
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    setCurrentStep((s) => Math.min(s + 1, quizSteps.length));
  };

  const handleBack = () =>
    setCurrentStep((s) => Math.max(s - 1, 1));

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

    if (step.type === "input" && step.field) {
      const value = formData[step.field] as string;
      return (
        <>
          <QuestionTitle />
          <div className="space-y-4">
            <input
              required
              {...step.inputProps}
              value={value}
              onChange={(e) => updateFormData(step.field as keyof FormData, e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            {errors[currentStep] && (
              <p className="text-red-400 text-sm">{errors[currentStep]}</p>
            )}
            {renderBackButton()}
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
        {errors[currentStep] && (
          <p className="text-red-400 text-sm text-center">{errors[currentStep]}</p>
        )}
        {renderBackButton()}
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
                      ? 'bg-white/10 text-white font-bold'
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
            {errors[currentStep] && (
              <p className="text-red-400 text-sm text-center">{errors[currentStep]}</p>
            )}
            {renderBackButton()}
            {renderNextButton()}
          </div>
        </>
      );
    }

    if (step.type === "contact") {
      const canSubmit =
        formData.fullName.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.phone.trim() !== "" &&
        formData.acceptedPrivacy;

      return (
        <>
          <QuestionTitle />
          <div className="max-w-md mx-auto">
            <input
              required
              type="text"
              placeholder="Teljes név"
              value={formData.fullName}
              onChange={(e) => updateFormData("fullName", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="w-full p-2 sm:p-3 border border-white/50 rounded-xl mb-2 bg-transparent text-white placeholder:text-gray-300"
            />
            <input
              required
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
                required
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
            {!formData.acceptedPrivacy && (
              <p className="text-red-400 text-sm mb-4">Kérjük, fogadja el az adatkezelési feltételeket</p>
            )}
            {renderBackButton()}
          <button
  disabled={!canSubmit}
  onClick={async () => {
    const { error } = await supabase.from("leads").insert([
      {
        marketing_type: formData.marketingType,
        voucher: formData.voucher,
        monthly_spend: formData.monthlySpend,
        whodecide: formData.whodecide,
        website: formData.website,
        location: formData.location,
        whenstart: formData.whenstart,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        accepted_privacy: formData.acceptedPrivacy,
      },
    ]);

    if (error) {
      alert("Hiba történt mentés közben");
      console.error(error);
      return;
    }

    // ✅ navigate AFTER insert succeeds
    router.push("/voucherbelluna");
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
      🎁 BÓNUSZ #1 -  Csak töltse ki az űrlapot, és hozzáférést kap egy 8 lépéses META útmutatóhoz!
      </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:h-[586px] xl:h-[594px] w-full my-16 sm:my-8 md:my-0">
      <motion.div
        className="flex justify-center items-center lg:mr-8 2xl:mr-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
   <motion.div
  className="flex flex-col items-center text-center font-extrabold text-white leading-tight"
  variants={fadeUp}
>
 <div className="text-yellow-400 underline text-3xl min-[360px]:text-4xl xl:text-5xl 2xl:text-6xl">
  5-12 utalványt
</div>

<div className="text-3xl min-[360px]:text-4xl xl:text-5xl 2xl:text-6xl">
  értékesítünk
</div>

<div className="text-3xl min-[360px]:text-4xl xl:text-5xl 2xl:text-6xl">
  <span className="italic">Karácsonyig</span>, vagy
</div>

<div className="text-3xl min-[360px]:text-4xl xl:text-5xl 2xl:text-6xl">
  nem fizet!
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
          🎁 BÓNUSZ #1 -  Csak töltse ki az űrlapot, és hozzáférést kap egy 8 lépéses META útmutatóhoz!
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
  
</div>


    
       
      <div className="flex flex-col items-center spacer bg-white layer3">
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 bg-[#000816] pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
            <WhoSection />
            <WhyItWorks />
            <FAQ />
          </motion.div>
        </div>
        
       
        <div className="w-full px-8 sm:px-16 md:px-32 lg:px-16 bg-[#000816]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeUp}
          >
           
          </motion.div>
        </div>
       
       
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}