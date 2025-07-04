// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    // Beri sedikit warna pada Navbar
    <nav className="bg-white/80 shadow-md w-full backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-extrabold text-2xl text-brand-green">
          Penginapan Asri
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-brand-dark hover:text-brand-green font-semibold">Beranda</Link>
          <Link href="/#kamar" className="text-brand-dark hover:text-brand-green font-semibold">Kamar</Link>
          <Link href="/kontak" className="text-brand-dark hover:text-brand-green font-semibold">Kontak</Link>
        </div>
      </div>
    </nav>
  );
    }
