// app/kontak/page.js
import { Phone, Mail, MapPin } from 'lucide-react'; // Menggunakan ikon untuk tampilan lebih baik

// Untuk menggunakan ikon, kita perlu install 'lucide-react'
// Buka terminal dan jalankan: npm install lucide-react

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl p-8">
      <h1 className="text-4xl font-bold text-center mb-4">Hubungi Kami</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Kami siap membantu Anda merencanakan penginapan yang sempurna.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kolom Informasi Kontak */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-bold">Alamat</h3>
                <p>Jl. Khatib Sulaiman No. 1, Padang, Sumatra Barat, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-bold">Telepon</h3>
                <p>+62 123 4567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>info@penginapanasri.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Peta */}
        <div>
           <h2 className="text-2xl font-semibold mb-4">Lokasi Kami</h2>
           <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
             {/* Ganti iframe ini dengan embed Google Maps lokasi Anda */}
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.283084288548!2d100.35411731535824!3d-0.920194035579979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b8e3a1a90967%3A0x8a98a0c7c09d5724!2sMasjid%20Raya%20Sumatera%20Barat!5e0!3m2!1sen!2sid!4v1672548858746!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
}
