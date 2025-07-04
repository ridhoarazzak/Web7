// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import FloatingBeans from "../components/FloatingBeans"; // <-- 1. Impor komponen

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Penginapan Asri - Tema Green Coffee",
  description: "Pesan kamar di Penginapan Asri dengan mudah dan elegan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-brand-cream text-brand-dark`}>
        <FloatingBeans /> {/* <-- 2. Letakkan di sini */}
        <div className="relative z-10"> {/* Bungkus konten agar berada di atas animasi */}
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
  }
