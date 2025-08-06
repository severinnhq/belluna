import React from "react";

// SVG check icon component
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="6"
      d="M5 13l4 4L19 7"
      stroke="black"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Bonuses = () => {
  const bonuses = [
    'havi díj / teljesítményalapú fizetés',
    '100% Elégedettség – Ha nem elégedett, vissza kapja a pénzét',
    'Nincs hosszú távú szerződés – Csak valódi eredmények!',
    '100% Lead exkluzivitás',
    'ROI Garancia',
  ];

  return (
    <section className="bg-[#000816] text-white pb-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Csak 1 klinikával dolgozunk együtt egy körzeten belül.
        </h2>

        <div className="bg-[#061f3b] rounded-2xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            🎁 BÓNUSZ #2 — Személyre szabott stratégiai útvonalterv
          </h3>
          <p className="mb-6 text-lg">
            A hívás után kap egy személyre szabott tervet konkrét példákkal és lépésekkel
          </p>

          <ul className="space-y-4 text-base md:text-lg">
            {bonuses.map((text, idx) => (
              <li key={idx} className="flex items-start">
                <CheckIcon />
                <span className="text-white text-shadow-sm text-shadow-black/20">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
