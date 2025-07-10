"use client";

import React, { useState } from 'react';
import Why from "@/components/why";
import Cta1Section from "@/components/cta1section";
import Cta2Section from "@/components/cta2section";
import FAQ from "@/components/faq";

// Define the shape of our form data
interface FormData {
  marketingType: string[];
  averageRevenue: string;
  monthlySpend: string;
  treatments: string;
  website: string;
  location: string;
  investmentIntent: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  acceptedPrivacy: boolean;
}

type QuizStep = {
  question: string;
  type: 'multiple' | 'single' | 'input' | 'contact';
  field?: keyof FormData;
  options?: { value: string; label: string }[];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export default function DigitalMarketingQuiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    marketingType: [],
    averageRevenue: '',
    monthlySpend: '',
    treatments: '',
    website: '',
    location: '',
    investmentIntent: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    acceptedPrivacy: false
  });

  const quizSteps: QuizStep[] = [
    {
      question: 'Jelenleg milyen típusú digitális marketinget használ?',
      type: 'multiple',
      field: 'marketingType',
      options: [
        { value: 'facebook', label: 'Facebook/Instagram' },
        { value: 'google', label: 'Google' },
        { value: 'seo', label: 'SEO' },
        { value: 'other', label: 'Egyéb' }
      ]
    },
    {
      question: 'Mekkora volt az elmúlt 90 napban a klinika átlagos havi bevétele? (FT)',
      type: 'input',
      field: 'averageRevenue',
      inputProps: { type: 'number', placeholder: 'Írd be forintban' }
    },
    {
      question: 'Mekkora az Ön teljes, átlagos havi marketingköltése?',
      type: 'single',
      field: 'monthlySpend',
      options: [
        { value: '100-200', label: 'Havi 100–200 ezer forint körül' },
        { value: '300-500', label: 'Nagyjából 300–500 ezer forint között' },
        { value: '600-1000', label: 'Olyan 600 ezertől 1 millió forintig' },
        { value: '1000-2000', label: '1 és 2 millió forint között' },
        { value: '2000+', label: 'Több mint 2 millió forint havonta' }
      ]
    },
    {
      question: 'Milyen kezeléseket akar hirdetni?',
      type: 'input',
      field: 'treatments',
      inputProps: { type: 'text', placeholder: 'Pl. fogfehérítés, implantátum' }
    },
    {
      question: 'Rendelő weboldala?',
      type: 'input',
      field: 'website',
      inputProps: { type: 'url', placeholder: 'https://...' }
    },
    {
      question: 'Hol található a klinikája?',
      type: 'input',
      field: 'location',
      inputProps: { type: 'text', placeholder: 'Város' }
    },
    {
      question: 'Csak akkor foglalj időpontot, ha nyitott vagy befektetni a klinikád fejlesztésébe, amennyiben megfelelőnek találod a szolgáltatásunkat.',
      type: 'single',
      field: 'investmentIntent',
      options: [
        { value: 'ready', label: 'Készen állok, ha látom az értéket.' },
        { value: 'not_invest', label: 'Nem tervezek befektetni.' }
      ]
    },
    {
      question: 'Kapcsolati adatok',
      type: 'contact'
    }
  ];

  const handleNext = () => {
    if (currentStep < quizSteps.length) {
      setCurrentStep((s) => s + 1);
    } else {
      console.log('Submitting', formData);
    }
  };

  const handleSelection = (value: string) => {
    const step = quizSteps[currentStep - 1];
    // Handle multiple-choice for marketingType explicitly
    if (step.type === 'multiple' && step.field === 'marketingType') {
      const selections = [...formData.marketingType];
      if (selections.includes(value)) {
        selections.splice(selections.indexOf(value), 1);
      } else {
        selections.push(value);
      }
      setFormData({ ...formData, marketingType: selections });
    } else if (step.field) {
      setFormData({ ...formData, [step.field]: value } as FormData);
    }
  };

  const renderNextButton = () => (
    <button
      onClick={handleNext}
      className="bg-black text-white w-full py-3 rounded-lg font-semibold hover:bg-black transition text-center"
    >
      TOVÁBB
    </button>
  );

  const renderStep = () => {
    const step = quizSteps[currentStep - 1];
    // Dynamically access value for single/input steps
    const value = step.field ? (formData[step.field] as string) : '';

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">{step.question}</h2>

        {step.type === 'input' && step.field && (
          <div className="space-y-4">
            <input
              {...step.inputProps}
              value={value}
              onChange={(e) => setFormData({ ...formData, [step.field!]: e.target.value } as FormData)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-700 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            {renderNextButton()}
          </div>
        )}

        {step.type === 'multiple' && (
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
        )}

        {step.type === 'single' && step.field && (
          <div className="space-y-4">
            <div className="flex flex-col space-y-4 max-w-md mx-auto">
              {step.options?.map((opt) => (
                <label key={opt.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={step.field}
                    checked={step.field ? formData[step.field] === opt.value : false}
                    onChange={() => handleSelection(opt.value)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded-full"
                  />
                  <span className="text-gray-700">{opt.label}</span>
                </label>
              ))}
            </div>
            {renderNextButton()}
          </div>
        )}

        {step.type === 'contact' && (
          <div className="space-y-4 max-w-md mx-auto">
            {/* Contact fields */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-700 text-gray-800"
              />
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-700 text-gray-800"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-700 text-gray-800"
            />
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-l-xl bg-gray-50 text-gray-800">+36</span>
              <input
                type="tel"
                placeholder="Telefonszám"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-r-xl placeholder-gray-700 text-gray-800"
              />
            </div>
            <input
              type="text"
                placeholder="Pozíció a klinikán"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-700 text-gray-800"
              />
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.acceptedPrivacy}
                onChange={(e) => setFormData({ ...formData, acceptedPrivacy: e.target.checked })}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700 text-sm">Hozzájárulok, hogy a megadott adataimat a kapcsolatfelvétel és az időpont egyeztetés céljából kezeljék.</span>
            </label>
            <button
              disabled={
                !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.acceptedPrivacy
              }
              onClick={() => console.log('Final submit', formData)}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                !formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.acceptedPrivacy
                  ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                  : 'bg-black text-white hover:bg-black'
              }`}
            >
              KÜLDÉS
            </button>
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          {currentStep > 1 ? (
            <span
              onClick={() => setCurrentStep((s) => s - 1)}
              className="text-blue-600 underline cursor-pointer text-sm"
            >
              VISSZA
            </span>
          ) : (
            <span />
          )}
          <span /> {/* spacer */}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4 pb-4 flex flex-col items-center">
      <div className="text-center max-w-3xl mb-16 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Szerezzen havonta 5–15 új esztétikai pácienst kockázatmentesen!
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          🎁 BÓNUSZ #1- Foglaljon ingyenes konzultációt most, és hozzáférést kap egy 8 lépéses meta útmutatóhoz
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur-lg rounded-3xl py-12 px-8 border border-gray-200 shadow-2xl w-full max-w-2xl mb-16">
        {renderStep()}
      </div>

      <div className="w-full max-w-6xl space-y-16">
        <Why />
        <Cta1Section />
        <Cta2Section />
        <FAQ />
      </div>
    </div>
  );
}
