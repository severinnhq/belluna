"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from 'framer-motion/dom';
import DemoCountdownHeader from '@/components/democountdownheader';
import Footer from '@/components/Footer';
import { Slider } from '@/components/beforeafter';
import DemoNegativ from '@/components/demonegativ';
import DemoGoal from '@/components/demogoal';
import DemoReviews from '@/components/demoreviews';
import FAQ from '@/components/faq';

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
  type: 'multiple' | 'single' | 'input' | 'contact';
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
    botheringDuration: '',
    urgency: '',
    previousConsultation: '',
    previousSurgery: '',
    previousSurgeryDetails: '',
    bothersMost: [],
    otherBother: '',
    healthIssues: '',
    fullName: '',
    email: '',
    phone: '',
    position: '',
    acceptedPrivacy: false,
  });

  const quizSteps: QuizStep[] = [
    /* ... steps omitted for brevity ... */
  ];

  const handleNext = () => setCurrentStep(s => Math.min(s + 1, quizSteps.length));
  const handleBack = () => setCurrentStep(s => Math.max(s - 1, 1));

  const updateFormData = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelection = (value: string) => {
    const step = quizSteps[currentStep - 1];
    if (step.type === 'multiple' && step.field) {
      const vals = [...(formData[step.field] as string[])];
      const idx = vals.indexOf(value);
      if (idx > -1) vals.splice(idx, 1);
      else vals.push(value);
      updateFormData(step.field, vals as any);
    } else if (step.field) {
      updateFormData(step.field, value as any);
    }
  };

  const renderNextButton = () => (
    <button onClick={handleNext} className="bg-yellow-400 text-black font-bold w-full py-2 rounded-xl hover:bg-yellow-500 transition-colors">
      TOVÁBB
    </button>
  );

  const renderBackButton = () => currentStep > 1 && (
    <div className="flex justify-start w-full">
      <button onClick={handleBack} className="text-white underline hover:text-gray-300">
        Vissza
      </button>
    </div>
  );

  const renderStep = () => {
    const step = quizSteps[currentStep - 1];
    const Title = () => <h2 className="text-2xl text-center text-white mb-6">{step.question}</h2>;

    if (currentStep === 5 && formData.previousSurgery === 'yes') {
      return (
        <>
          <Title />
          <input
            type="text"
            placeholder="Írja le röviden, mikor és milyen beavatkozás történt"
            value={String(formData.previousSurgeryDetails)}
            onChange={e => updateFormData('previousSurgeryDetails', e.target.value)}
            className="w-full p-3 border rounded-xl bg-transparent text-white placeholder-gray-400 mb-4"
          />
          {renderBackButton()}
          {renderNextButton()}
        </>
      );
    }

    if (currentStep === 1 && formData.reasons.includes('other')) {
      return (
        <>
          <Title />
          <input
            type="text"
            placeholder="Írja le az okot"
            value={String(formData.otherBother)}
            onChange={e => updateFormData('otherBother', e.target.value)}
            className="w-full p-3 border rounded-xl bg-transparent text-white placeholder-gray-400 mb-4"
          />
          {renderBackButton()}
          {renderNextButton()}
        </>
      );
    }

    if (step.type === 'input') {
      return (
        <>
          <Title />
          <input
            {...step.inputProps}
            value={String(step.field ? formData[step.field] : '')}
            onChange={e => updateFormData(step.field!, e.target.value)}
            className="w-full p-3 border rounded-xl bg-transparent text-white placeholder-gray-400 mb-4"
          />
          {renderBackButton()}
          {renderNextButton()}
        </>
      );
    }

    // ... remaining render logic unchanged ...

  };

  return (
    <main className="bg-[#000816] min-h-screen">
      {/* ... content ... */}
    </main>
  );
}
