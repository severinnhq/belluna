import Image from "next/image";
import Link from "next/link";

export default function Navbar({ btnText }) {
  const text = btnText;
  let btnClass =
    "px-4 py-1 bg-white/10 hover:bg-white/33 font-medium rounded-lg transition";
  if (text === "FOGLALJON IDŐPONTOT") {
    btnClass =
      "px-4 py-1 bg-yellow-400 text-black hover:bg-yellow-500 font-bold rounded-lg hover:-translate-y-1 transition new-shadow";
  }
  return (
    <main className="backdrop-blur-md backdrop-brightness-50 w-full flex flex-col sm:flex-row justify-between items-center sm:h-16">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:max-w-screen-xl mx-auto">
        <div className="flex justify-center sm:justify-start items-center [min-width:412px]:w-1/2 sm:ml-4 lg:ml-8 xl:ml-16">
          <Link href="/" className="mt-4 sm:mt-0">
            <Image
              src="/BellunaLogos1024/4.png"
              alt="Logo"
              height={40}
              width={112}
              priority
            />
          </Link>
        </div>
        <div className="flex justify-center sm:justify-end items-center [min-width:412px]:w-1/2 sm:mr-4 lg:mr-8 xl:mr-16">
          <Link className={btnClass + " my-4 sm:my-0"} href={"/blog/"}>
            {text}
          </Link>
        </div>
      </div>
    </main>
  );
}
