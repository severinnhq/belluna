import React from 'react';

const DemoNegativ: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-3xl text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Mi történik, ha elégedetlen vagy az orrod formájával?
        </h2>

        <div className="space-y-8">
          <div className="flex items-start">
            <span className="text-3xl mr-4" role="img" aria-label="Mirror">🖼️</span>
            <div>
              <h3 className="font-semibold mb-1">Zavar a tükörképed</h3>
              <p>
                Minden reggel elsőként az orrodat veszed észre? Az arc középpontjaként az orr meghatározza az összhatást – ha nem harmonikus, az az önértékelésedre is hatással lehet.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-3xl mr-4" role="img" aria-label="Photography">🖼️</span>
            <div>
              <h3 className="font-semibold mb-1">Feszélyez a fényképezés</h3>
              <p>
                Oldalról nem szeretsz képet látni magadról? Elfordulsz vagy pózolsz, hogy ne látszódjon az orrod formája? Ez hosszú távon korlátozhat abban, hogy felszabadultan érezd magad társas helyzetekben.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-3xl mr-4" role="img" aria-label="Breathing">🖼️</span>
            <div>
              <h3 className="font-semibold mb-1">Légzési nehézségek zavarják a mindennapjaid</h3>
              <p>
                Sokan nem is tudják, hogy egy orrplasztika nemcsak esztétikai, hanem funkcionális problémát is megoldhat. Ha nehezen kapsz levegőt az orrodon keresztül, az alvásminőséged és sportteljesítményed is csökkenhet.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-3xl mr-4" role="img" aria-label="Compromise">🖼️</span>
            <div>
              <h3 className="font-semibold mb-1">Gyakran élsz kompromisszummal</h3>
              <p>
                Sminkkel, frizurával, szögekkel próbálod takarni az arcod azon részét, amit nem szeretsz? Ez állandó mentális terhet róhat rád, amit nem is mindig tudatosítasz.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-3xl mr-4" role="img" aria-label="Time">🖼️</span>
            <div>
              <h3 className="font-semibold mb-1">Minél tovább vársz, annál tovább húzódik az elégedettség</h3>
              <p>
                Az idő múlásával a döntés nem lesz könnyebb – de a vágy nem múlik el. Sok pácienstől halljuk: „Bárcsak évekkel korábban megtettem volna…”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoNegativ;
