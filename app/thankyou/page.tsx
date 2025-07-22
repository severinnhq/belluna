import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Köszönjük a foglalást! 🎉</h1>
         <p className="text-md text-blue-700 font-medium">
          📩 A Google Meet linket elküldtük. Kérjük, ellenőrizze az emailjeit!
        </p>
        <p className="text-lg">
          Fontos: Ezeket az exkluzív bónuszokat csak azok kapják meg, akik valóban megjelennek a híváson.
        </p>

       

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">🎁 BÓNUSZ #3 – Funnel Pénzszivárgás Audit</h2>
            <p>
              Egy gyors, de mélyreható elemzés, ami megmutatja, hol szivároghat el pénz a rendszeréből — legyen szó hirdetésekről,
              landing oldalakról vagy a CRM-ről. Gyors nyereség, nagy hatás.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">🎁 BÓNUSZ #4 – Bevált Hirdetési Kreatívok és Szövegek</h2>
            <p>
              Egy exkluzív gyűjtemény működő, konvertáló hirdetésekből — magyarázatokkal kiegészítve. Látni fogja, mitől működnek ezek, és mi hiányzik a legtöbb konkurens anyagából.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">🎁 BÓNUSZ #5 – Rendszerbemutató: Hogyan dominálnak a top amerikai rendelők</h2>
            <p>
              Egy lépésről-lépésre bemutató — vizuálisan vagy videón keresztül — arról, hogyan működik ez a rendszer a világ egyik
              legversenyképesebb piacán. Megmutatjuk, hogyan adaptálhatja ezt a saját sebészetébe.
            </p>
          </div>
        </div>

        <p className="text-md text-gray-600 pt-6">
          Készüljön fel — izgalmas dolgok várják a híváson! 
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
