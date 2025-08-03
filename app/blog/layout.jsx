import "./blog-tags.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "BellunaDigital | Blog",
  icons: {
    icon: [
      {
        url: "/favicons/favicon-16x16.png?v=2",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicons/favicon-32x32.png?v=2",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicons/favicon-48x48.png?v=2",
        type: "image/png",
        sizes: "48x48",
      },
      { url: "/favicons/favicon.ico?v=2", type: "image/x-icon" },
    ],
    apple: [
      {
        url: "/favicons/favicon-180x180.png?v=2",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicons/favicon-192x192.png?v=2",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-512x512.png?v=2",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicons/favicon.ico?v=2",
  },
};

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
