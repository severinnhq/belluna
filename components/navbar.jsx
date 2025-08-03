import Link from "next/link";

export default function Navbar({ btnText }) {
  const text = btnText;
  let btnClass =
    "mx-2 font-medium italic hover:underline transition-all duration-300";
  if (text === "FOGLALJON IDŐPONTOT") {
    btnClass =
      "px-4 py-1 bg-yellow-400 text-black hover:bg-yellow-500 font-bold rounded-lg hover:-translate-y-1 transition new-shadow";
  }
  return (
    <main>
      <div className="flex w-full h-16 justify-between items-center backdrop-blur-md backdrop-brightness-60 px-4 md:px-8 lg:px-32 xl:px-64 2xl:px-96">
        <div className="hidden md:flex justify-start items-center w-1/3">
          <Link
            className="mx-2 font-bold hover:underline transition-all duration-300"
            href={"/"}
          >
            FŐOLDAL
          </Link>
        </div>
        <div className="flex md:justify-center items-center md:w-1/3">
          <div>BELLUNA DIGITAL</div>
        </div>
        <div className="flex justify-end items-center md:w-1/3">
          <Link className={btnClass} href={"/blog/"}>
            {text}
          </Link>
        </div>
      </div>
    </main>
  );
}
