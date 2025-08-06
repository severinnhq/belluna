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
    // Standard favicons (browsers auto-select by size)
    icon: [
      { url: "/favicons/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/favicons/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicons/favicon-48x48.png?v=2", type: "image/png", sizes: "48x48" },
      { url: "/favicons/favicon.ico?v=2",    type: "image/x-icon" },
    ],
    // Apple touch icon for iOS home-screen
    apple: [
      { url: "/favicons/favicon-180x180.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    // Android / Chrome PWA icons
    other: [
      { url: "/favicons/favicon-192x192.png?v=2", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon-512x512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    // Legacy shortcut icon fallback
    shortcut: "/favicons/favicon.ico?v=2",
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
