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
    // Standard favicon (browsers will pick the right one by size)
    icon: [
      { url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicons/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      // You can also include the .ico if you want legacy support
      { url: "/favicons/favicon.ico", type: "image/x-icon" },
    ],
    // Apple Touch icon for iOS Home Screen
    apple: [
      { url: "/favicons/favicon-180x180.png", sizes: "180x180", type: "image/png" }
    ],
    // Android/Chrome PWA icons
    other: [
      { url: "/favicons/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/favicon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    // Optional maskable icon for PWAs
    // maskable: "/favicons/maskable-icon.png",
    // You can still set a single shortcut icon if you like
    shortcut: "/favicons/favicon.ico"
  }
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
