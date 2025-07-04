// app/layout.js
import { Poppins } from "next/font/google"; // Ganti Inter menjadi Poppins
import "./globals.css";
import Navbar from "../components/Navbar";

// Konfigurasi Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Ambil beberapa ketebalan font
});

export const metadata = {
  title: "Penginapan Asri - Terbaik di Kota Anda",
  description: "Pesan kamar di Penginapan Asri dengan mudah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Terapkan class font ke body */}
      <body className={`${poppins.className} bg-brand-cream`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
