// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PixelClient from "@/components/PixelClient";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BellunaDigital | Új páciensek plasztikai sebészeteknek, automatizáltan",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="select-none">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <PixelClient />
        <Analytics />
      </body>
    </html>
  );
}
