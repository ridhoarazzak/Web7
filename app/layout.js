// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Impor Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Penginapan Asri - Terbaik di Kota Anda",
  description: "Pesan kamar di Penginapan Asri dengan mudah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Tambahkan Navbar di sini */}
        <main>{children}</main>
        {/* Di sini bisa ditambahkan Footer nantinya */}
      </body>
    </html>
  );
}
