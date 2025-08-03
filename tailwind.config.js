/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/blog/blog-tags.css",
  ],
  theme: {
    extend: {
      fontSize: {
        xxl: "2.5rem",
      },
    },
  },
  plugins: [],
};
