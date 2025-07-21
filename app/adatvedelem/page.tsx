import React from 'react';

export default function AdatvedelemPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Adatkezelési Szabályzat és Tájékoztató</h1>
      <p className="mb-4">
        A <a href="https://bellunadigital.com/" className="text-blue-600 underline">bellunadigital.com</a> weboldal üzemeltetője jelen tájékoztatóban ismerteti a honlap látogatóival a személyes adatok kezelésére vonatkozó gyakorlatát, valamint az adatok védelme érdekében megtett szervezési és technikai intézkedéseit.
      </p>
      <p className="mb-6">
        Jelen adatkezelési szabályzat tartalmazza a weboldal látogatók és az ügyfélkapcsolati űrlapot kitöltő személyek (a továbbiakban: Felhasználó) személyes adatainak kezelésére, feldolgozására, nyilvántartására, tárolására vonatkozó alapvető információkat, valamint a Felhasználók ezzel kapcsolatos jogait és azok érvényesítési lehetőségeit.
      </p>

      <h2 className="text-2xl font-semibold mb-2">I. Adatkezelő adatai</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Cégnév:</strong> Varga Balázs István E.V.</li>
        <li><strong>Székhely:</strong> Magyarország 1161 Budapest Baross utca 199.</li>
        <li><strong>Adószám:</strong> 91226701-1-42</li>
        <li><strong>Nyilvántartási szám:</strong> 60695097</li>
        <li><strong>Email:</strong> info@bellunadigital.com</li>
        <li><strong>Telefon:</strong> +36 20 353 0545</li>
        <li><strong>Képviselő:</strong> Varga Balázs István</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">II. Jogszabályi háttér</h2>
      <p className="mb-4">Az adatkezelő adatkezelési tevékenysége során az alábbi jogszabályoknak megfelelően jár el:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR)</li>
        <li>2011. évi CXII. törvény (Infotv.)</li>
        <li>2011. évi CVIII. törvény (Elker tv.)</li>
        <li>2000. évi C. törvény (Számvitel)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">III. Kezelt adatok köre és célja</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Vezetéknév és keresztnév:</strong> kapcsolatfelvételhez, szerződéskötéshez</li>
        <li><strong>Email cím:</strong> kapcsolattartás</li>
        <li><strong>Telefonszám:</strong> kapcsolattartás, egyeztetés</li>
        <li><strong>IP cím:</strong> technikai működés biztosítása</li>
        <li><strong>Marketing célú adatkezelés:</strong> hozzájárulás alapján</li>
      </ul>
      <p className="mb-6">Az adatok kezelésének célja az ügyfélszolgálat, szerződések teljesítése, ügyfélkapcsolati kommunikáció és marketingtevékenység.</p>

      <h2 className="text-2xl font-semibold mb-2">IV. Adatkezelés jogalapja</h2>
      <ul className="list-disc list-inside mb-6">
        <li>GDPR 6. cikk (1) bek. a), b) és f) pontjai</li>
        <li>Elker tv. 13/A. §</li>
        <li>Számvitelről szóló 2000. évi C. törvény</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">V. Adattárolás időtartama</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Szerződéses ügylet esetén: 8 év</li>
        <li>Marketing hozzájárulás: visszavonásáig</li>
        <li>Jogviták esetén: jogszabályi érvényesítési határidő lejártáig</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">VI. Adattovábbítás, adatfeldolgozók</h2>
      <p className="mb-6">
        Az adatokat az adatkezelő munkatársai ismerhetik meg. Harmadik személyeknek kizárólag jogszabályi kötelezettség alapján kerül továbbításra.
      </p>

      <h2 className="text-2xl font-semibold mb-2">VII. Az érintett jogai</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Hozzáférés joga</li>
        <li>Helyesbítés joga</li>
        <li>Törlés joga (elfeledtetéshez való jog)</li>
        <li>Adatkezelés korlátozásának joga</li>
        <li>Adathordozhatóság joga</li>
        <li>Tiltakozás joga</li>
        <li>Automatizált döntéshozatal elleni tiltakozás joga</li>
      </ul>
      <p className="mb-6">
        Jogai gyakorlását kezdeményezheti e-mailben: <a href="mailto:meeting@fogaszdigital.com" className="text-blue-600 underline">meeting@fogaszdigital.com</a>
      </p>

      <h2 className="text-2xl font-semibold mb-2">VIII. Cookie-k (sütik) alkalmazása</h2>
      <p className="mb-6">
        A <strong>fogaszdigital.com</strong> weboldal cookie-kat alkalmaz a működés biztosítása, a felhasználói élmény fokozása és marketing célok érdekében. A cookie-k elfogadása nem kötelező; böngészőjében bármikor letilthatja.
      </p>

      <h2 className="text-2xl font-semibold mb-2">IX. Közösségi bővítmények</h2>
      <p className="mb-6">
        Weboldalunkon Facebook, Instagram, YouTube bővítmények használatára sor kerülhet, melyek engedélyezésével adatátvitel történik a közösségi szolgáltatók felé.
      </p>

      <h2 className="text-2xl font-semibold mb-2">X. Adatbiztonság</h2>
      <p className="mb-6">
        Az adatkezelő kötelezettséget vállal arra, hogy gondoskodik az adatok biztonságáról és megteszi azokat a technikai és szervezési intézkedéseket, melyek biztosítják az adatok védelmét, illetőleg megakadályozzák azok jogosulatlan felhasználását, megváltoztatását, megsemmisülését.
      </p>

      <h2 className="text-2xl font-semibold mb-2">XI. Jogorvoslat</h2>
      <p className="mb-2">Az érintett a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat panasszal:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Cím: 1055 Budapest, Falk Miksa utca 9-11.</li>
        <li>Honlap: <a href="https://www.naih.hu" className="text-blue-600 underline">www.naih.hu</a></li>
      </ul>

      <footer className="mt-12 text-sm text-gray-600 mb-12">
        <p>Jelen tájékoztató folyamatosan elérhető a <a href="https://www.fogaszdigital.com" className="text-blue-600 underline">www.fogaszdigital.com</a> weboldalon.</p>
      </footer>

      <h1 className="text-3xl font-bold mb-6">Süti (Cookie) Szabályzat</h1>
      <p className="mb-2"><strong>Frissítve:</strong> 2025. március 28.</p>
      <p className="mb-4"><strong>Weboldal:</strong> fogaszdigital.com</p>

      <h2 className="text-2xl font-semibold mb-2">1. Mik azok a sütik?</h2>
      <p className="mb-6">
        A sütik kis szöveges fájlok, amelyeket a weboldalak helyeznek el az Ön eszközén. Ezek lehetnek szükségesek, vagy segíthetik az elemzés, a funkcionalitást, vagy a marketingtevékenységeket.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Milyen típusú sütiket használunk?</h2>
      <table className="w-full mb-6 border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1 text-left">Típus</th>
            <th className="border px-2 py-1 text-left">Leírás</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1"><strong>Szükséges sütik</strong></td>
            <td className="border px-2 py-1">Elengedhetetlenek a weboldal működéséhez (pl. biztonság, formák).</td>
          </tr>
          <tr>
            <td className="border px-2 py-1"><strong>Statisztikai sütik</strong></td>
            <td className="border px-2 py-1">Információkat gyűjtenek arról, hogyan használják a látogatók az oldalt (pl. Google Analytics).</td>
          </tr>
          <tr>
            <td className="border px-2 py-1"><strong>Marketing sütik</strong></td>
            <td className="border px-2 py-1">Segítenek releváns hirdetéseket megjeleníteni (pl. Meta Pixel / Facebook Pixel).</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2">3. Hogyan használjuk a sütiket?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>A felhasználói élmény javítására</li>
        <li>Látogatottság mérésére (statisztika) </li>
        <li>Hirdetéseink hatékonyságának nyomon követésére (remarketing, konverziók)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Harmadik féltől származó sütik</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Meta (Facebook Pixel) – Hirdetéskövetés és retargeting</li>
        <li>Opcionálisan: Google Analytics – Webanalitika</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">5. Süti kezelése</h2>
      <p className="mb-6">
        Ön döntheti el, mely sütiket engedélyez. Az oldal betöltésekor megjelenő süti sáv segítségével beállíthatja preferenciáit. Bármikor visszavonhatja hozzájárulását, illetve módosíthatja a beállításokat a böngészőjén keresztül vagy az oldal alján található Süti beállítások linken keresztül.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Kapcsolat</h2>
      <p className="mb-6">
        Ha bármilyen kérdése van az adatkezeléssel vagy sütikkel kapcsolatban, kérjük, vegye fel velünk a kapcsolatot az alábbi email címen: <a href="mailto:info@fogaszdigital.com" className="text-blue-600 underline">info@fogaszdigital.com</a>
      </p>

      <h1 className="text-3xl font-bold mb-4">🔒 Adatvédelmi tájékoztató</h1>
      <p className="mb-4">
        A fogaszdigital.com (a továbbiakban: „Weboldal”) üzemeltetője tiszteletben tartja az Ön személyes adataihoz fűződő jogait, és elkötelezett azok védelme mellett.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Ki az adatkezelő?</h2>
      <p className="mb-4"><strong>Cégnév:</strong> FogaszDigital</p>

      <h2 className="text-2xl font-semibold mb-2">2. Milyen adatokat gyűjtünk?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Név, e-mail cím, telefonszám (űrlapokon keresztül)</li>
        <li>Böngészési adatok (Meta Pixel, sütik, analitika)</li>
        <li>CRM rendszerben történő tárolás és automatizálás</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Milyen célból gyűjtjük az adatokat?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Kapcsolatfelvétel, időpont-egyeztetés</li>
        <li>Marketing kampányok lebonyolítása (Meta/Facebook hirdetések)</li>
        <li>Weboldal forgalmának elemzése (cookie-k)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Jogalap az adatkezeléshez</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Az Ön önkéntes hozzájárulása</li>
        <li>Szerződés teljesítése (pl. ajánlatkérés esetén)</li>
        <li>Jogos érdek (analitika, biztonság)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">5. Adattovábbítás harmadik felek felé</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Meta (Facebook) – reklámcélú követés</li>
        <li>Google – analitika</li>
        <li>GoHighLevel CRM – kapcsolatkezelés és automatizáció</li>
        <li>Minden partnerünk megfelel a GDPR előírásainak.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">6. Meddig tároljuk az adatokat?</h2>
      <p className="mb-6">Az Ön hozzájárulásának visszavonásáig vagy legfeljebb 2 évig.</p>

      <h2 className="text-2xl font-semibold mb-2">7. Az Ön jogai</h2>
      <ul className="list-disc list-inside mb-12">
        <li>Hozzáférés kérése az Önről tárolt adatokhoz</li>
        <li>Adatok helyesbítése vagy törlése</li>
        <li>Adatkezelés korlátozása vagy tiltakozás</li>
        <li>Panasz benyújtása a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH)</li>
      </ul>
    </main>
  );
}
