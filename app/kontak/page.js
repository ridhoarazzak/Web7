import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl p-8 animate-fadeInUp">
      <h1 className="text-4xl font-bold text-center mb-4 text-brand-dark">Hubungi Kami</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Kami siap membantu Anda merencanakan penginapan yang sempurna.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kolom Informasi Kontak */}
        <div className="bg-white/70 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-6 text-brand-dark">Informasi Kontak</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-bold text-brand-dark">Alamat</h3>
                <p>Lubuk Gadang Sel., Kec. Sangir, Kabupaten Solok Selatan, Sumatera Barat 27778</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-bold text-brand-dark">Telepon</h3>
                <p>+62 123 4567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-bold text-brand-dark">Email</h3>
                <p>info@penginapanshelter.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Peta */}
        <div className="rounded-lg overflow-hidden shadow-lg">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.27071747876388!2d101.22630340568084!3d-1.5642522052769159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2cf339aedd9eb3%3A0x9a99d9b22dced99e!2sShelter%20Penginapan%20di%20Solok%20Selatan!5e0!3m2!1sid!2sid!4v1751675931826!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>
    </div>
  );
    }
