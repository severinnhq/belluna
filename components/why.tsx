import React from 'react';
import Chevy from './ui/chevy';

const Why: React.FC = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-8 py-4 sm:py-8 lg:pb-12 max-w-5xl lg:mx-auto">
      {/* Our Advantages   */}
      <div className="rounded-3xl blue-shadow h-min mb-4 lg:mb-0">
        <div className="bg-white/5 rounded-3xl">
        <div className='p-6 rounded-3xl border-4 border-gray-400'>
          <h2 className="text-3xl font-semibold mb-4 text-white border-b-2 border-gray-400 pb-2">
            BellunaDigital
          </h2>
          <ul className="space-y-3 list-disc text-gray-300 font-medium">
            <li className="flex"><Chevy color={"text-green-500"}/>Rész alapú díjfizetés + teljesítmény alapú jutalék</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Garantált ROI - ingyen dolgozunk, amíg profitot nem termelünk</li>
            <li className="flex"><Chevy color={"text-green-500"}/>10-25+ új, kvalifikált érdeklődő havonta, kockázat nélkül</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Plasztikai sebészetre specializálva - célzott stratégiák</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Teljes automatizáció - AI + manuális utánkövetés</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Magas értékű páciensek (pl. mellnagyobbítás)</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Azonnali előszűrés, kézi kvalifikálás - időhatékony megoldások</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Területi exkluzivitás - csak egy partner klinika</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Hosszú távú partneri gondolkodás - együtt növekedünk</li>
            <li className="flex"><Chevy color={"text-green-500"}/>52 hetes utánkövetés - páciensmegtartás, újrabeavatkozások</li>
            <li className="flex"><Chevy color={"text-green-500"}/>Napi riportálás - teljes átláthatóság</li>
          </ul>
        </div>
        </div>
      </div>

      {/* Other Agencies */}
      <div className="rounded-3xl red-shadow h-min">
        <div className="bg-white/5 rounded-3xl">
        <div className='p-6 rounded-3xl border-4 border-gray-400'>
        <h2 className="text-3xl font-semibold mb-4 text-white border-b-2 border-gray-400 pb-2">
          Más ügynökségek problémái
        </h2>
        <ul className="space-y-3 list-disc text-gray-300 font-medium">
          <li className="flex"><Chevy color={"text-red-300"}/>Fix díjak, hosszú távú szerződések, eredménygarancia nélkül</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Nincs pénzvisszafizetési garancia - Ön viseli a kockázatot</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Csak hirdetéskezelés, konkrét üzleti eredmény nélkül</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Általános ügynökség - nincs iparági szakértelem</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Lead utánkövetés hiánya - Önnek kell kezelni</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Alacsony konverziójú érdeklődők</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Ugyanaz a stratégia konkurenseinél is</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Rövid távú gondolkodás, hosszú távú siker nem cél</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Csak új páciensekre fókuszálnak, meglévőkre nem</li>
          <li className="flex"><Chevy color={"text-red-300"}/>Hiányos riportálás - nincs betekintés az eredményekbe</li>
        </ul>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Why;
