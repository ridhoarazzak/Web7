/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#4A7729', // Hijau daun kopi yang pekat
        'brand-dark': '#2E2323',  // Coklat gelap seperti biji kopi
        'brand-cream': '#F5F5DC', // Warna krem/beige yang lembut
        'brand-light-green': '#89A881', // Hijau muda untuk aksen
      },
    },
  },
  plugins: [],
};
