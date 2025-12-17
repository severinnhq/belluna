import React from 'react';

export default function AszfPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Általános Szerződési Feltételek (ÁSZF)</h1>
      <p className="mb-4">
        Jelen Általános Szolgáltatási Feltételek (továbbiakban: ÁSZF) tartalmazzák a Severin Simon Máté E.V. (továbbiakban: Szolgáltató) által üzemeltetett{' '}
        <a href="https://bellunadigital.com" className="text-blue-600 underline">https://bellunadigital.com</a> weboldal használatára, valamint a Szolgáltató által nyújtott szolgáltatásokra vonatkozó szerződési feltételeket.
      </p>
      <p className="mb-6">
        A Szolgáltató és az Ügyfél közötti jogviszony alapját minden esetben az ÁSZF és az egyedileg kötött írásbeli szerződés képezi.
      </p>

      <h2 className="text-2xl font-semibold mb-2">II. Szolgáltató adatai</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Cégnév:</strong> Severin Simon Máté E.V.</li>
        <li><strong>Székhely:</strong> Magyarország 1141 Budapest, Zoborhegy tér 13/b</li>
        <li><strong>Adószám:</strong> 91624178-1-42</li>
        <li><strong>Nyilvántartási szám:</strong> 61564992</li>
        <li><strong>Képviselő:</strong> Severin Simon Máté</li>
        <li><strong>Telefon:</strong> +36 70 660 7873</li>
        <li><strong>Email:</strong> <a href="mailto:info@bellunadigital.com" className="text-blue-600 underline">info@bellunadigital.com</a></li>
        <li><strong>Honlap:</strong> <a href="https://bellunadigital.com" className="text-blue-600 underline">https://bellunadigital.com</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">III. A szerződés tárgya és tartalma</h2>
      <p className="mb-4">
        A Szolgáltató fő tevékenysége digitális marketing szolgáltatások nyújtása, kiemelten:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>teljesítményalapú marketing kampányok (Google Ads, Meta Ads stb.) kezelése</li>
        <li>lead generációs rendszerek kivitelezése és automatizálása</li>
        <li>CRM rendszerek implementációja</li>
        <li>AI alapú ügyfélszerző rendszerek kialakítása</li>
        <li>ügyfélkonzultációk, szakmai tanácsadás</li>
      </ul>
      <p className="mb-6">
        A Szolgáltatások igénybe vétele előzetes kapcsolatfelvétel és egyedi szerződés megkötése alapján történik.
      </p>

      <h2 className="text-2xl font-semibold mb-2">IV. A szerződéskötés menete</h2>
      <ol className="list-decimal list-inside mb-6">
        <li>Érdeklődő a bellunadigital.com/application/ weboldalon keresztül kapcsolatfelvételi űrlapot tölt ki.</li>
        <li>Szolgáltató telefonon vagy e-mailben felveszi a kapcsolatot az Ügyféllel.</li>
        <li>Online vagy személyes konzultáció során egyeztetik az ügyfél igényeit.</li>
        <li>Szolgáltató írásbeli árajánlatot és egyedi szerződést küld.</li>
        <li>A szerződés mindkét fél által történő elfogadása után kezdődik a szolgáltatás teljesítése.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">V. Fizetési feltételek</h2>
      <p className="mb-4">
        A fizetési feltételeket minden esetben az egyedi szerződés tartalmazza. Szokásos konstrukciók:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>induló onboarding díj</li>
        <li>havi fix díj vagy teljesítményalapú jutalék</li>
        <li>hirdetési költségek mindig ügyfél által finanszírozva</li>
      </ul>
      <p className="mb-6">
        Szolgáltató számlát állít ki, mely banki átutalással fizetendő a megjelölt határidőig.
      </p>

      <h2 className="text-2xl font-semibold mb-2">VI. Elállási jog, felmondás</h2>
      <p className="mb-4">
        A digitális marketing szolgáltatások egyedi, ügyfélre szabott jellegére tekintettel elállási jog nem illeti meg az ügyfelet, miután a teljesítés megkezdődött, az előzetes hozzájárulása alapján.
      </p>
      <p className="mb-6">
        A szerződés rendes felmondása az egyedi szerződés szerint lehetséges.
      </p>

      <h2 className="text-2xl font-semibold mb-2">VII. Szerzői jogok</h2>
      <p className="mb-6">
        A weboldalon található minden szöveges, képi, hang- és videótartalom a Szolgáltató szellemi tulajdonát képezi. Bármilyen másolás, terjesztés, felhasználás kizárólag a Szolgáltató előzetes írásbeli engedélyével történhet.
      </p>

      <h2 className="text-2xl font-semibold mb-2">VIII. Felelősség kizárása</h2>
      <p className="mb-6">
        A Szolgáltató a marketing szolgáltatások eredményességét nem tudja garantálni, mivel az eredmények függnek az ügyfél együttműködésétől, piac helyzetétől és további külső tényezőktől.
      </p>

      <h2 className="text-2xl font-semibold mb-2">IX. Panaszkezelés rendje</h2>
      <p className="mb-4">
        Panaszait ügyfeleink a következő elérhetőségeken tehetik meg:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Email: <a href="mailto:info@bellunadigital.com" className="text-blue-600 underline">info@bellunadigital.com</a></li>
        <li>Telefon: +36 20 353 0545</li>
      </ul>
      <p className="mb-6">
        Szolgáltató a beérkezett panaszt 30 napon belül írásban megválaszolja.
      </p>

      <h2 className="text-2xl font-semibold mb-2">X. Jogviták rendezése</h2>
      <p className="mb-6">
        A felek esetleges jogvitáikat elsősorban békés úton próbálják rendezni. Amennyiben ez nem vezet eredményre, a vitás ügyek eldöntésére a Szolgáltató székhelye szerinti bíróság rendelkezik illetékességgel.
      </p>

      <h2 className="text-2xl font-semibold mb-2">XI. Alkalmazandó jog</h2>
      <p className="mb-6">
        Jelen ÁSZF-re a magyar jog irányadó, figyelembe véve az EU-s adatvédelmi és fogyasztóvédelmi szabályokat.
      </p>

      <footer className="mt-12 text-sm text-white underline">
        <p><strong>Szolgáltató:</strong> Severin Simon Máté E.V.</p>
      </footer>
    </main>
  );
}
