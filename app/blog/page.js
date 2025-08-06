import Navbar from "@/components/navbar";
import Link from "next/link";
export default function Blog() {
  const blogInfo = [
    {
      title: "5 marketing hiba, amit az esztétikai klinikák gyakran elkövetnek",
      href: "/blog/5_marketing_hiba-20250731",
      date: "2025. 07. 31.",
      desc: "Nem elég jó szolgáltatást nyújtani - ha a marketing hibás, a páciensek elmaradnak. Mutatjuk az 5 leggyakoribb marketinghibát, amit esztétikai klinikák elkövetnek.",
    },
    {
      title: "Hogyan szerezhet több pácienst egy esztétikai klinika 2025-ben?",
      href: "/blog/Hogyan_szerezhet_tobb_pacienst-20250631",
      date: "2025. 06. 30.",
      desc: "Szeretne több pácienst szerezni esztétikai klinikájába 2025-ben? Mutatjuk, milyen marketing trendek működnek igazán jól a mai digitális világban.",
    },
    {
      title:
        "Teljesítményalapú marketing: Mit jelent, és miért előnyös a klinikádnak?",
      href: "/blog/Teljesitmenyalapu_marketing-20250531",
      date: "2025. 05. 31.",
      desc: "A teljesítményalapú marketing esztétikai klinikáknak is elérhető. De mit jelent ez pontosan? Hogyan működik, és miért válhat előnyödre? Mutatjuk.",
    },
    {
      title:
        "Lokális SEO esztétikai klinikáknak: Hogyan kerülj az élre a térképen?",
      href: "/blog/Lokalis_SEO_esztetikai_klinikaknak-20250431",
      date: "2025. 04. 30.",
      desc: "Esztétikai klinikád szeretne előkelőbb helyet a Google Térképen? Mutatjuk, hogyan segít ebben a lokális SEO, és mik a legfontosabb lépések.",
    },
    // Add more blog objects here
  ];
  const isNew = (dateString) => {
    // Remove dots and trim, then split
    const parts = dateString.replace(/\./g, "").trim().split(" ");
    const [year, month, day] = parts.map(Number);

    // Create Date object (month is 0-indexed!)
    const itemDate = new Date(year, month - 1, day);

    // Today's date minus 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return itemDate > thirtyDaysAgo;
  };
  return (
    <>
      <section className="relative w-full overflow-hidden h-full min-h-screen">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#5271ff] opacity-90 bg-fixed" />
        {/* from-[#000816] maybe better (used in application background svg as the "black" part) */}

        {/* SVG Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="wave-pattern-1"
                x="0"
                y="0"
                width="1500"
                height="800"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,200 C300,150 400,250 800,200 C1200,150 1300,250 1500,200 
                         M0,400 C200,350 500,450 900,400 C1300,350 1400,450 1500,400"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="wave-pattern-2"
                x="100"
                y="50"
                width="1500"
                height="800"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,320 C250,270 500,370 750,320 C1000,270 1250,370 1500,320 
                         M0,520 C250,470 500,570 750,520 C1000,470 1250,570 1500,520"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="dot-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="rgba(255, 255, 255, 0.3)" />
                <circle
                  cx="30"
                  cy="40"
                  r="0.8"
                  fill="rgba(255, 255, 255, 0.2)"
                />
                <circle
                  cx="50"
                  cy="20"
                  r="0.6"
                  fill="rgba(255, 255, 255, 0.35)"
                />
              </pattern>
            </defs>

            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#wave-pattern-1)"
            />
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#wave-pattern-2)"
            />
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#dot-pattern)"
              opacity="0.4"
            />
            <path
              d="M-100,300 C100,200 200,400 500,300 C800,200 1100,400 1400,300 C1700,200"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="80"
              strokeLinecap="round"
            />
            <path
              d="M0,100 C200,120 400,80 600,100 C800,120 1000,80 1200,100 C1400,120 1600,80 1800,100"
              fill="none"
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="0.8"
            />
            <path
              d="M0,600 C200,620 400,580 600,600 C800,620 1000,580 1200,600 C1400,620 1600,580 1800,600"
              fill="none"
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        <Navbar btnText={"FOGLALJON IDŐPONTOT"} />
        <div className="relative max-w-screen-xl mx-auto">
          <div className="flex flex-col my-8 xl:my-16 mx-4 lg:mx-8 xl:mx-16">
            <h1 className="font-extrabold text-center text-3xl sm:text-4xl lg:text-5xl mb-12 text-yellow-400 text-shadow-md text-shadow-black">
              Témák
            </h1>
            {blogInfo.map((b, index) => (
              <Link
                key={index}
                className="px-8 py-4 border-b border-white/25 hover:bg-white/10 transition hover:scale-102"
                href={b.href}
              >
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-0 sm:w-9/10 md:w-5/6 lg:w-7/8 xl:w-9/10">
                    {b.title}
                  </div>
                  <div className="flex justify-between items-center sm:justify-end sm:w-1/10 md:w-1/6 lg:w-1/8 xl:w-1/10 mb-2 sm:mb-0 sm:text-right">
                    <div className="text-sm sm:text-base">{b.date}</div>
                    {isNew(b.date) && (
                      <div className="flex sm:hidden justify-end sm:w-1/3 sm:mt-4 text-right">
                        <p className="bg-yellow-400 text-black font-semibold py-0.5 px-3 rounded-full sm:mb-2 sm:mr-2 btn-shadow">
                          NEW
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-sm sm:text-base sm:w-2/3 mt-2 font-light text-white/66">
                    <p>{b.desc}</p>
                  </div>
                  {isNew(b.date) && (
                    <div className="hidden sm:flex justify-end w-1/3 mt-4 text-right">
                      <p className="bg-yellow-400 text-black font-semibold py-0.5 px-3 rounded-full mb-2 mr-2 btn-shadow">
                        NEW
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
