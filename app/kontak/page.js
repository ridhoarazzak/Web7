// app/kontak/page.js (Versi tanpa perlu install lucide-react)

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
              {/* --- Ikon MapPin (SVG) --- */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <h3 className="font-bold">Alamat</h3>
                <p>Jl. Khatib Sulaiman No. 1, Padang, Sumatra Barat</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              {/* --- Ikon Phone (SVG) --- */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <h3 className="font-bold">Telepon</h3>
                <p>+62 123 4567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* --- Ikon Mail (SVG) --- */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div>
                <h3 className="font-bold">Email</h3>
                <p>info@penginapanasri.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Peta (Sama seperti sebelumnya) */}
        <div>
           <h2 className="text-2xl font-semibold mb-4">Lokasi Kami</h2>
           <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
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
