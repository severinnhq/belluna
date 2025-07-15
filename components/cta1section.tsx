import React from 'react';
import NiceBlue from '@/components/svg/nice-blue.svg';

export default function Cta1Section({ scrollToTop }: { scrollToTop: () => void }) {
  return (
    <section
      className="py-16 bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${NiceBlue})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-shadow-md text-shadow-black/40">
                Miért válassza a mi szolgáltatásunkat?
              </h2>
              <p className="text-lg text-white mb-8 text-shadow-sm text-shadow-black/20">
                Tapasztalt marketingesekkel dolgozunk, akik kizárólag fogorvosoknak és szájsebészeknek nyújtanak digitális marketing szolgáltatásokat.
              </p>
              <ul className="space-y-3 mb-8">
                {['Növeljük a páciensek számát', 'Csökkentjük a megszerzési költséget', 'Növeljük a visszatérő páciensek arányát'].map((text, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M5 13l4 4L19 7" stroke="black" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white text-shadow-sm text-shadow-black/20">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 bg-white/10 rounded-2xl">
              <div className="backdrop-blur-xs backdrop-brightness-105 rounded-2xl p-8 my-shadow">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Készen áll a növekedésre?
                </h3>
                <p className="text-white mb-6 font-medium">
                  Foglaljon időpontot ingyenes konzultációra még ma, és kezdje el növelni pácienslétszámát!
                </p>

                <div className="bg-white p-6 rounded-xl custom-inset mb-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Ingyenes konzultáció</h4>
                      <p className="text-gray-600 text-sm">15 perces személyre szabott elemzés</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Személyre szabott stratégia</h4>
                      <p className="text-gray-600 text-sm">Gyakorlatias tanácsok a klinikája számára</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollToTop}
                  className="text-xl md:text-2xl px-6 py-4 bg-[#1E57BB] text-white hover:bg-yellow-400 hover:text-black btn-shadow font-bold rounded-xl hover:-translate-y-1 transition w-full cursor-pointer whitespace-nowrap"
                >
                  FOGLALJON IDŐPONTOT MOST!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
