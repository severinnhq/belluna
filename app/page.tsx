import React from "react";

export default function LandingPage() {
  return (
    <main className="w-full text-gray-900 bg-white">
      {/* SECTION 1 – HERO / ABOVE THE FOLD */}
      <section className="relative px-6 py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e0f2fe,_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="pt-4 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ajándékozz ragyogó mosolyt karácsonyra 🎄
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-700">
              Egy ajándék, ami valódi élményt ad – professzionális fogászati ajándékutalvány, amit örömmel használnak.
            </h2>
            <p className="mb-8 text-lg">
              Prémium fogászati kezelések ajándékutalvány formájában.
              <br />
              Digitálisan megérkezik – tökéletes karácsonyi meglepetés.
            </p>
            <button className="px-10 py-5 text-lg font-semibold rounded-2xl shadow bg-black text-white">
              👉 Karácsonyi ajándék megvásárlása
            </button>
            <p className="mt-6 text-sm text-gray-600">★★★★★ 4,8 / 5 értékelés • Több mint [X] elégedett páciens</p>
          </div>
          <div className="relative mt-12 md:mt-0">
            <img
              src="/images/hero-smile.jpg"
              alt="Mosolygó páciens"
              className="rounded-3xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 – EMOTIONAL FRAMING */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Miért ez az egyik legjobb karácsonyi ajándék?</h2>
        <p className="text-lg text-gray-700">
          A legtöbb ajándék pár nap múlva feledésbe merül.
          <br />
          Egy szép mosoly viszont minden nap magabiztosságot ad –
          <br />
          ezért a legjobb ajándék az élmény, nem a tárgy.
        </p>
      </section>

      {/* SECTION 3 – BENEFITS */}
      <section className="relative px-6 py-24">
        <div className="absolute inset-0 bg-neutral-50" />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Mit ad ez az ajándék?</h2>
            <ul className="space-y-4 text-lg">
              <li>✔ Magabiztosabb megjelenést</li>
              <li>✔ Professzionális, biztonságos kezelést</li>
              <li>✔ Tartós, látható eredményt</li>
              <li>✔ Egyedi, személyes élményt</li>
            </ul>
            <button className="mt-10 px-8 py-4 rounded-xl border">👉 Megnézem az ajándékutalványokat</button>
          </div>
          <div>
            <img
              src="/images/clinic-interior.jpg"
              alt="Modern fogászati rendelő"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 – OFFER / VOUCHER OPTIONS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Válaszd ki a karácsonyi meglepetést</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-3xl border bg-white">
            <h3 className="text-xl font-bold mb-6">✨ Fogfehérítő Ajándékutalvány</h3>
            <p className="mb-6">
              • Professzionális fogfehérítés
              <br />
              • Esztétikai polírozás
              <br />
              • Látványos eredmény már egy alkalom után
            </p>
            <p className="font-semibold mb-6">Ár: [39 900 – 49 900] Ft</p>
            <button className="w-full py-4 rounded-xl bg-black text-white">👉 Megveszem</button>
          </div>

          <div className="p-8 rounded-3xl border bg-neutral-50">
            <h3 className="text-xl font-bold mb-6">🎁 Prémium Mosoly Ajándékcsomag</h3>
            <p className="mb-6">
              • Fogfehérítés
              <br />
              • Teljes állapotfelmérés
              <br />
              • Fogkőeltávolítás és polírozás
              <br />
              • Bónusz szájápolási csomag
            </p>
            <p className="font-semibold mb-6">Ár: [49 900 – 69 900] Ft</p>
            <button className="w-full py-4 rounded-xl bg-black text-white">👉 Megveszem</button>
          </div>

          <div className="p-8 rounded-3xl border bg-white">
            <h3 className="text-xl font-bold mb-6">💎 Értékutalvány</h3>
            <p className="mb-6">
              • Szabadon felhasználható
              <br />
              • Esztétikai kezelésekhez, fogszabályzáshoz, implantációhoz
              <br />
              • Ideális nagyobb értékű ajándékként
            </p>
            <p className="font-semibold mb-6">Ár: [50 000 / 100 000] Ft</p>
            <button className="w-full py-4 rounded-xl bg-black text-white">👉 Megveszem</button>
          </div>
        </div>
      </section>

      {/* SECTION 5 – URGENCY */}
      <section className="px-6 py-20 bg-neutral-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Limitált karácsonyi ajánlat</h2>
        <p className="mb-8 text-lg">⏰ Az ajándékutalványok csak december 23. éjfélig érhetők el.</p>
        <ul className="space-y-3 mb-10">
          <li>• Ünnepi időszak miatti fokozott érdeklődés</li>
          <li>• Limitált kezelési időpontok</li>
          <li>• Digitális kézbesítés – azonnali ajándékozás</li>
        </ul>
        <button className="px-10 py-5 rounded-2xl bg-white text-black font-semibold">👉 Biztosítom az ajándékot most</button>
      </section>

      {/* SECTION 6 – SOCIAL PROOF */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Akik már mosolyt ajándékoztak</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-neutral-50">„Karácsonyra kaptam, de egész évre adott önbizalmat.”<br />— Anna, 36</div>
          <div className="p-6 rounded-2xl bg-neutral-50">„Nem gondoltam volna, hogy egy fogászati ajándék ennyire betalál.”<br />— Péter, 42</div>
          <div className="p-6 rounded-2xl bg-neutral-50">„Profi környezet, gyönyörű eredmény.”<br />— Eszter, 29</div>
        </div>
      </section>

      {/* SECTION 7 – HOW IT WORKS */}
      <section className="px-6 py-20 bg-neutral-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Hogyan működik az ajándékozás?</h2>
        <ol className="space-y-4 text-lg mb-8">
          <li>1️⃣ Kiválasztod az ajándékutalványt</li>
          <li>2️⃣ Online, biztonságosan kifizeted</li>
          <li>3️⃣ Az utalványt azonnal megkapod emailben</li>
        </ol>
        <p>📅 Felhasználható: [6 / 12] hónapig</p>
      </section>

      {/* SECTION 8 – TRUST */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Miért válaszd a [Klinika neve]-t?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg">
          <li>✔ Tapasztalt fogorvos csapat</li>
          <li>✔ Modern, higiénikus rendelő</li>
          <li>✔ Több száz elégedett páciens</li>
          <li>✔ Biztonságos online fizetés</li>
        </ul>
      </section>

      {/* SECTION 9 – FINAL CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Egy ajándék, ami minden nap mosolyt ad</h2>
        <p className="mb-10 text-lg">Tedd igazán emlékezetessé az idei karácsonyt.</p>
        <button className="px-10 py-5 rounded-2xl bg-black text-white text-lg">👉 Karácsonyi ajándék megvásárlása</button>
        <p className="mt-6 text-sm text-gray-600">Digitális utalvány • Azonnali kézbesítés • December 23-ig</p>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 text-center text-sm bg-neutral-900 text-neutral-200">
        <p className="font-semibold">[Klinika neve]</p>
        <p>[Cím]</p>
        <p>[Telefon] | [Email]</p>
        <p className="mt-4">ÁSZF | Adatkezelés | Kapcsolat</p>
      </footer>
    </main>
  );
}
