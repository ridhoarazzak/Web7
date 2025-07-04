// app/kamar/[slug]/page.js
import Image from 'next/image';
import { rooms } from '../../../data/rooms'; // Sesuaikan path import
import Link from 'next/link';

// Fungsi untuk mencari data kamar berdasarkan slug dari URL
function getRoomData(slug) {
  return rooms.find((room) => room.id === slug);
}

export default function RoomDetailPage({ params }) {
  const room = getRoomData(params.slug);

  // Jika kamar tidak ditemukan, tampilkan pesan
  if (!room) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Kamar tidak ditemukan</h1>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Kembali ke Halaman Utama
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={room.image}
            alt={room.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{room.name}</h1>
        <p className="text-2xl font-semibold text-green-600 mb-6">
          Rp {room.price.toLocaleString('id-ID')} / malam
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {room.description}
        </p>
        <button className="bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-green-700 transition-colors">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}
