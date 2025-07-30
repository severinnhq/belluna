import React from 'react';
import NiceBlue from '@/components/svg/nice-blue.svg';

export default function Cta1Section({ scrollToTop }: { scrollToTop: () => void }) {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${NiceBlue})` }}
    >
      {/* Simplified container with responsive padding */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 min-w-0"> {/* Added min-width to prevent overflow */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 text-shadow-md text-shadow-black/40">
              Miért a Belluna?
            </h2>
            <p className="text-base sm:text-lg text-white mb-8 text-shadow-sm text-shadow-black/20">
              Csak plasztikai sebészetekkel dolgozunk és nekik segítünk kifejzetten az ügyfélszerzésben, nem csak marketingben.
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

          <div className="flex-1 w-full min-w-[280px]"> {/* Added min-width */}
            <div className="bg-white/10 backdrop-blur-xs backdrop-brightness-105 rounded-2xl p-6 md:p-8 my-shadow"> {/* Responsive padding */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Készen áll a növekedésre?
              </h3>
              <p className="text-white mb-6 font-medium text-base md:text-lg">
                Foglaljon időpontot ingyenes konzultációra még ma, és kezdje el növelni pácienslétszámát!
              </p>

              <div className="bg-white p-4 md:p-6 rounded-xl custom-inset mb-6"> {/* Responsive padding */}
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">Ingyenes konzultáció</h4>
                    <p className="text-gray-600 text-xs md:text-sm">45 perces személyre szabott elemzés</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">Személyre szabott stratégia</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Gyakorlatias tanácsok a sebészete számára</p>
                  </div>
                </div>
              </div>

              {/* Button with responsive text size and wrapped text */}
              <button
                onClick={scrollToTop}
                className="text-base md:text-lg lg:text-xl px-4 py-3 md:px-6 md:py-4 bg-yellow-400 text-black hover:bg-yellow-500 hover:text-black btn-shadow font-bold rounded-xl hover:-translate-y-1 transition w-full cursor-pointer"
              >
                FOGLALJON IDŐPONTOT MOST!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}