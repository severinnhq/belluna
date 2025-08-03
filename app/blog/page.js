import Navbar from "@/components/navbar";
import Link from "next/link";
export default function Blog() {
  return (
    <>
      <Navbar btnText={"FOGLALJON IDŐPONTOT"} />
      <section className={`relative w-full overflow-hidden`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black to-[#5271ff] opacity-90" />
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

        {/* Hero Content */}
        <div className="relative max-w-screen-xl mx-auto h-full">
          <div className="flex flex-col lg:my-24 xl:my-36">
            <Link
              className="bg-white text-black hover:bg-gray-400 transition duration-250 p-4 mb-4 rounded-full w-max"
              href={"/blog/5_marketing_hiba-20250331"}
            >
              5 marketing hiba, amit az esztétikai klinikák gyakran elkövetnek
            </Link>
            <Link
              className="bg-white text-black hover:bg-gray-400 transition duration-250 p-4 mb-4 rounded-full w-max"
              href={"/blog/Hogyan_szerezhet_tobb_pacienst-20250431"}
            >
              Hogyan szerezhet több pácienst egy esztétikai klinika 2025-ben?
            </Link>
            <Link
              className="bg-white text-black hover:bg-gray-400 transition duration-250 p-4 mb-4 rounded-full w-max"
              href={"/blog/Teljesitmenyalapu_marketing-20250531"}
            >
              Teljesítményalapú marketing: Mit jelent, és miért előnyös a
              klinikádnak?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
