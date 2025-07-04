"use client";

import { useState } from 'react';
import Image from 'next/image';
import { rooms } from '../../../data/rooms';
import Link from 'next/link';

function getRoomData(slug) {
  return rooms.find((room) => room.id === slug);
}

export default function RoomDetailPage({ params }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const room = getRoomData(params.slug);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut || !guestName || !guestEmail) {
      alert('Mohon lengkapi semua field sebelum memesan.');
      return;
    }
    const subject = `Pertanyaan Pemesanan untuk ${room.name}`;
    const body = `Halo, saya ingin menanyakan ketersediaan untuk pemesanan:\n\nKamar: ${room.name}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\n\nNama: ${guestName}\nEmail: ${guestEmail}\n\nTerima kasih.`;
    const mailtoLink = `mailto:info@penginapanasri.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  if (!room) {
    return (
      <div className="text-center py-20 animate-fadeInUp">
        <h1 className="text-3xl font-bold">Kamar tidak ditemukan</h1>
        <Link href="/" className="text-brand-green hover:underline mt-4 inline-block">
          Kembali ke Halaman Utama
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8 animate-fadeInUp">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Kolom Detail Kamar */}
        <div>
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={room.image}
              alt={room.name}
              fill={true}
              style={{objectFit:"cover"}}
              priority={true} // Prioritaskan gambar utama
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">{room.name}</h1>
          <p className="text-2xl font-semibold text-brand-green mb-6">
            Rp {room.price.toLocaleString('id-ID')} / malam
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {room.description}
          </p>
        </div>

        {/* Kolom Formulir Pemesanan */}
        <div className="bg-white/70 p-8 rounded-lg shadow-lg h-fit backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 text-brand-dark">Formulir Pemesanan</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">Tanggal Check-in</label>
              <input type="date" id="checkin" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green sm:text-sm p-2"/>
            </div>
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">Tanggal Check-out</label>
              <input type="date" id="checkout" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green sm:text-sm p-2"/>
            </div>
            <div>
              <label htmlFor="guestName" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input type="text" id="guestName" value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Nama Anda" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green sm:text-sm p-2"/>
            </div>
            <div>
              <label htmlFor="guestEmail" className="block text-sm font-medium text-gray-700">Alamat Email</label>
              <input type="email" id="guestEmail" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} placeholder="email@anda.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green sm:text-sm p-2"/>
            </div>
            <button type="submit" className="w-full bg-brand-green text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors">
              Kirim Pertanyaan Pemesanan
            </button>
             <p className="text-xs text-gray-500 text-center mt-2">Anda akan diarahkan ke aplikasi email untuk mengirim detail.</p>
          </form>
        </div>
      </div>
    </div>
  );
      }
