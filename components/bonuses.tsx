import React from "react";

const Bonuses = () => {
  return (
    <section className="bg-[#000816] text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center">🔥 Csak 1 klinikával dolgozunk együtt egy körzeten belül.</h2>
       

        <div className="bg-[#0A1128] rounded-2xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">🎁 BÓNUSZ #2 — Személyre szabott stratégiai útvonalterv</h3>
          <p className="mb-6 text-lg">
            📈 A hívás után kap egy személyre szabott tervet konkrét példákkal és lépésekkel
          </p>

          <ul className="space-y-4 text-base md:text-lg">
            <li>✅ havi díj + Teljesítményalapú fizetés</li>
            <li>✅ 100% Elégedettség – Ha nem elégedett, vissza kapja a pénzét</li>
            <li>✅ Nincs hosszú távú szerződés – Csak valódi eredmények!</li>
            <li>✅ 100% Lead exkluzivitás</li>
            <li>✅ ROI Garancia</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
