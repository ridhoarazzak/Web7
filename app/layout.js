import { Poppins } from "next/font/google";
import "./globals.css";

// Impor komponen yang kita butuhkan
import Navbar from "../components/Navbar";
import FloatingBeans from "../components/FloatingBeans";

// Konfigurasi font Poppins agar bisa digunakan di seluruh website
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Mengambil beberapa ketebalan font yang dibutuhkan
});

// Metadata untuk SEO dan judul tab di browser
export const metadata = {
  title: "Penginapan Shelter - Tema Green Coffee",
  description: "Pesan kamar di Penginapan Shelter dengan mudah dan elegan.",
};

// Ini adalah komponen Layout utama yang membungkus semua halaman
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-brand-cream text-brand-dark`}>
        {/* Komponen animasi kita, diletakkan di paling belakang (z-index: -1) */}
        <FloatingBeans />

        {/* Bungkus konten utama dengan div ini. 
          'relative z-10' memastikan semua konten ini (navbar, halaman)
          berada di ATAS lapisan animasi latar belakang.
        */}
        <div className="relative z-10">
          <Navbar />
          <main>
            {/* {children} adalah tempat di mana konten halaman Anda (page.js) akan ditampilkan */}
            {children}
          </main>
          {/* Anda bisa menambahkan komponen Footer di sini nantinya */}
        </div>
      </body>
    </html>
  );
          }
