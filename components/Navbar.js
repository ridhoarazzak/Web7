// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-blue-600">
          Penginapan Asri
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-500">Beranda</Link>
          <Link href="/#kamar" className="text-gray-600 hover:text-blue-500">Kamar</Link> {/* Nanti bisa diubah */}
          <Link href="/kontak" className="text-gray-600 hover:text-blue-500">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}
