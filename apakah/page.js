// app/page.js
import Link from 'next/link';
import Image from 'next/image';
import { rooms } from '../data/rooms'; // Impor data kamar

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Selamat Datang di Penginapan Kami</h1>
        <p className="text-lg text-gray-600">Pilihan terbaik untuk peristirahatan Anda.</p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-60">
                <Image
                  src={room.image}
                  alt={room.name}
                  layout="fill"
                  objectFit="cover"
                />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
              <p className="text-gray-700 mb-4">
                Mulai dari{' '}
                <span className="font-semibold text-lg text-green-600">
                  Rp {room.price.toLocaleString('id-ID')} / malam
                </span>
              </p>
              <Link href={`/kamar/${room.id}`} className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
