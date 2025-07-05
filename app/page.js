import Link from 'next/link';
import Image from 'next/image';
import { rooms } from '../data/rooms';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-12">
      {/* Bagian Hero dengan animasi */}
      <div className="text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">
          Kenyamanan & Ketenangan
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Temukan peristirahatan sempurna di Penginapan Shelter, di mana setiap sudut dirancang untuk ketenangan Anda.
        </p>
      </div>

      {/* Daftar Kamar dengan animasi */}
      <div id="kamar-list" style={{ animationDelay: '0.3s' }} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
        {rooms.map((room) => (
          // Animasi kartu saat di-hover
          <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="relative w-full h-60">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill={true}
                  style={{objectFit:"cover"}}
                />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-brand-dark mb-2">{room.name}</h2>
              <p className="text-gray-700 mb-4">
                Mulai dari{' '}
                <span className="font-semibold text-lg text-brand-green">
                  Rp {room.price.toLocaleString('id-ID')} / malam
                </span>
              </p>
              <Link href={`/kamar/${room.id}`} className="inline-block bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
                  Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
  }
