// components/Footer.tsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-white py-6">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-2">© BellunaDigital 2025 Minden jog fenntartva.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/aszf" className="hover:underline">
            ÁSZF
          </Link>
          <Link href="/adatvedelem" className="hover:underline">
            Adatvédelmi tájékoztató
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
