// components/FloatingBeans.js
import CoffeeBeanIcon from './CoffeeBeanIcon';

export default function FloatingBeans() {
  // Buat array untuk menentukan jumlah biji kopi yang akan ditampilkan
  const beanCount = 15;
  const beans = Array.from({ length: beanCount });

  return (
    // Kontainer ini akan menutupi seluruh layar dan berada di belakang konten lain
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {beans.map((_, index) => {
        // Logika untuk membuat setiap biji kopi unik
        const size = Math.random() * (80 - 20) + 20; // Ukuran acak antara 20px dan 80px
        const top = `${Math.random() * 100}%`;       // Posisi vertikal acak
        const left = `${Math.random() * 100}%`;      // Posisi horizontal acak
        const animationDuration = `${Math.random() * (30 - 15) + 15}s`; // Durasi animasi acak
        const animationDelay = `${Math.random() * 10}s`; // Penundaan animasi acak

        return (
          <div
            key={index}
            className="absolute animate-[float]" // Terapkan animasi 'float'
            style={{
              top: top,
              left: left,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: animationDuration,
              animationDelay: animationDelay,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          >
            <CoffeeBeanIcon className="w-full h-full opacity-20" />
          </div>
        );
      })}
    </div>
  );
}
