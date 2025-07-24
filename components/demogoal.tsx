import React from 'react';

const DemoGoal: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-950 py-12 px-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-10 w-full max-w-3xl text-white text-lg space-y-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Képzeld el az önazonos tükörképet</h2>

        <p className="leading-relaxed">
          Képzeld el, milyen lenne tükörbe nézni – és valóban elégedetten visszamosolyogni magadra.
          Milyen lenne, ha többé nem zavarna, hogyan nézel ki oldalról?
          Vagy ha bátran állnál kamera elé, anélkül hogy azon gondolkodnál, hogyan takard el az orrod?
        </p>

        <p className="leading-relaxed">
          Az orrplasztika nemcsak az arcod vonalait formálja újra –
          visszaadja az önbizalmadat, a felszabadult jelenlétet, és a belső harmóniát is.
        </p>

        <p className="leading-relaxed">
          Nem kell többé kerülni a képeket, vagy oldalra fordulni a fényképező előtt.
          Nem kell magadban újra és újra azt gondolni: „ha csak más formájú lenne…”
          És nem kell együtt élni egy olyan részeddel, amit minden nap újra megkérdőjelezel.
        </p>

        <p className="leading-relaxed italic text-center text-gray-300">
          Ez nem elérhetetlen álom.<br />
          Ez egy valós, megtervezett, személyre szabott lehetőség – csak egy döntésre van.
        </p>
      </div>
    </div>
  );
};

export default DemoGoal;