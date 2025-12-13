import React from "react";

export default function LandingPage() {
  return (
    <main className="w-full text-gray-900 bg-gradient-to-b from-emerald-50 via-white to-sky-50">
      {/* SECTION 1 – HERO / ABOVE THE FOLD */}
      <section className="relative px-6 py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e0f2fe,_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="pt-4 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Már megvetted a karácsonyi ajándékot? 🎄
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-700">
              Egészítsd ki egy igazán emlékezetes meglepetéssel – egy ajándékutalvánnyal, amit valóban használnak.
            </h2>
            
            <button className="px-10 py-5 text-lg font-semibold rounded-2xl shadow bg-black text-white">
              👉 Kiegészítő ajándék megvásárlása
            </button>
            <p className="mt-6 text-sm text-gray-600">★★★★★ 4,8 / 5 értékelés • Több mint [X] elégedett páciens</p>
          </div>
          <div className="relative mt-12 md:mt-0">
            <img src="/uploads/voucherdemohero-smile.png" alt="Mosolygó páciens" className="rounded-3xl shadow-xl mx-auto" />
          </div>
        </div>
      </section>

      {/* SECTION 2 – PROBLEM / INSIGHT */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/uploads/voucherdemo-voucher.png"
              alt="Voucher"
              className="rounded-3xl shadow-xl mx-auto md:mx-0"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Miért keresnek sokan még egy kis plusz ajándékot?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              • A fő ajándék túl kicsi vagy túl „biztonságos”<br />
              • Hiányzik belőle a személyes figyelmesség<br />
              • Szeretnének valami élményt is adni<br />
              • Last minute döntés karácsony előtt
            </p>
            <p className="text-lg text-gray-700">
              Ez az ajándékutalvány pontosan erre a helyzetre készült.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – BENEFITS */}
      <section className="relative px-6 py-24">
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Miért tökéletes kiegészítő ajándék?</h2>
            <ul className="space-y-4 text-lg">
              <li>✔ Bármilyen ajándék mellé passzol</li>
              <li>✔ Nem kell méretet vagy ízlést eltalálni</li>
              <li>✔ Valódi élményt és magabiztosságot ad</li>
              <li>✔ Digitális – azonnal kézbesítjük</li>
            </ul>
            <button className="mt-10 px-8 py-4 rounded-xl border">👉 Megnézem az utalványokat</button>
          </div>
          <div>
            <img src="/uploads/voucherdemo-rendelo.png" alt="Modern fogászati rendelő" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>

      {/* SECTION 4 – OFFER / VOUCHER OPTIONS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Válaszd ki a kiegészítő meglepetést</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-3xl border bg-white">
            <h3 className="text-xl font-bold mb-6">✨ Gyors Mosoly Frissítés</h3>
            <p className="mb-6">
              • Professzionális fogtisztítás<br />
              • Esztétikai polírozás<br />
              • Friss, ápolt mosoly rövid idő alatt
            </p>
            <p className="font-semibold mb-6">Ár: [29 900 – 39 900] Ft</p>
            <button className="w-full py-4 rounded-xl bg-black text-white">👉 Megveszem</button>
          </div>

          <div className="p-8 rounded-3xl border bg-white">
            <h3 className="text-xl font-bold mb-6">🎁 Fogfehérítő Ajándékutalvány</h3>
            <p className="mb-6">
              • Látványos fogfehérítés<br />
              • Az egyik legnépszerűbb kiegészítő ajándék<br />
              • Tartós eredmény
            </p>
            <p className="font-semibold mb-6">Ár: [39 900 – 49 900] Ft</p>
            <button className="w-full py-4 rounded-xl bg-black text-white">👉 Megveszem</button>
          </div>

          <div className="p-8 rounded-3xl border bg-white">
            <h3 className="text-xl font-bold mb-6">💎 Értékutalvány</h3>
            <p className="mb-6">
              • Szabadon felhasználható<br />
              • Esztétikai és jövő évi kezelésekhez<br />
              • Maximális rugalmasság
            </p>
            <p className="font-semibold mb-6">Ár: [20 000 / 50 000] Ft</p>
            <button className="w-full py-4 rounded-xl bg-black text-white">👉 Megveszem</button>
          </div>
        </div>
      </section>

      {/* SECTION 5 – URGENCY / SCARCITY */}
      <section className="px-6 py-20 text-center text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ne hagyd az utolsó pillanatra</h2>
        <p className="mb-8 text-lg">⏰ Az ajándékutalványok csak december 23. éjfélig érhetők el.</p>
        <ul className="space-y-3 mb-10">
          <li>• Limitált kezelési kapacitás</li>
          <li>• Ünnepi időszak miatti nagy érdeklődés</li>
          <li>• Digitális kézbesítés – nincs várakozás</li>
        </ul>
        <button className="px-10 py-5 rounded-2xl bg-black text-white font-semibold">👉 Kiegészítem az ajándékot most</button>
      </section>

     {/* SECTION 6 – SOCIAL PROOF */}
<section className="px-6 py-24 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-16">Vélemények pácienseinktől</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.622 9.39c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.963z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4">„Egy apró ajándéknak indult, de hatalmas öröm lett belőle.”</p>
      <p className="font-semibold text-gray-900">— Anna, 34</p>
    </div>

    <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.622 9.39c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.963z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4">„Nagyon profi csapat, a párom imádta az ajándékot.”</p>
      <p className="font-semibold text-gray-900">— Gábor, 41</p>
    </div>

    <div className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.382 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.622 9.39c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.963z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 mb-4">„Gyors, fájdalommentes, látványos eredmény.”</p>
      <p className="font-semibold text-gray-900">— Eszter, 29</p>
    </div>
  </div>
</section>


      {/* SECTION 7 – HOW IT WORKS */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Hogyan működik?</h2>
        <ol className="space-y-4 text-lg mb-8">
          <li>1️⃣ Kiválasztod az utalványt</li>
          <li>2️⃣ Biztonságosan kifizeted online</li>
          <li>3️⃣ Az utalványt azonnal megkapod emailben</li>
        </ol>
        <p>📅 Felhasználható: [6 / 12] hónapig</p>
      </section>

ú

      {/* SECTION 8 – FINAL CTA / CLOSING */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Egy kis plusz figyelmesség, ami igazán számít</h2>
        <p className="mb-10 text-lg">Egészítsd ki a karácsonyi ajándékot egy élménnyel, ami mosolyt ad.</p>
        <button className="px-10 py-5 rounded-2xl bg-black text-white text-lg">👉 Utalvány megvásárlása</button>
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
