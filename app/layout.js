import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// Konfigurasi font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // Mengambil beberapa ketebalan font
});

export const metadata = {
  title: "Penginapan Asri - Tema Green Coffee",
  description: "Pesan kamar di Penginapan Asri dengan mudah dan elegan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Menerapkan font Poppins dan warna latar belakang dasar */}
      <body className={`${poppins.className} bg-brand-cream text-brand-dark`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
