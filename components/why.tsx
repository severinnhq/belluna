import React from 'react';

const Why: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 p-8">
      {/* Our Advantages   */}
      <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 border-b pb-2">
          Miért válasszon minket?
        </h2>
        <ul className="space-y-3 list-disc pl-4 text-gray-800">
          <li>Rész alapú díjfizetés + teljesítmény alapú jutalék</li>
          <li>Garantált ROI – ingyen dolgozunk, amíg profitot nem termelünk</li>
          <li>10-25+ új, kvalifikált érdeklődő havonta, kockázat nélkül</li>
          <li>Plasztikai sebészetre specializálva – célzott stratégiák</li>
          <li>Teljes automatizáció – AI + manuális utánkövetés</li>
          <li>Magas értékű esztétikai páciensek (pl. mellnagyobbítás)</li>
          <li>Azonnali előszűrés, kézi kvalifikálás – időhatékony megoldások</li>
          <li>Területi exkluzivitás – csak egy partner klinika</li>
          <li>Hosszú távú partneri gondolkodás – együtt növekedünk</li>
          <li>52 hetes utánkövetés – páciensmegtartás, újrabeavatkozások</li>
          <li>Napi riportálás – teljes átláthatóság</li>
        </ul>
      </div>

      {/* Other Agencies */}
      <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-red-600 border-b pb-2">
          Más ügynökségek problémái
        </h2>
        <ul className="space-y-3 list-disc pl-4 text-gray-800">
          <li>Fix díjak, hosszú távú szerződések, eredménygarancia nélkül</li>
          <li>Nincs pénzvisszafizetési garancia – Ön viseli a kockázatot</li>
          <li>Csak hirdetéskezelés, konkrét üzleti eredmény nélkül</li>
          <li>Általános ügynökség – nincs iparági szakértelem</li>
          <li>Lead utánkövetés hiánya – Önnek kell kezelni</li>
          <li>Alacsony konverziójú érdeklődők</li>
          <li>Ugyanaz a stratégia konkurenseinél is</li>
          <li>Rövid távú gondolkodás, hosszú távú siker nem cél</li>
          <li>Csak új páciensekre fókuszálnak, meglévőkre nem</li>
          <li>Hiányos riportálás – nincs betekintés az eredményekbe</li>
        </ul>
      </div>
    </section>
  );
};

export default Why;
