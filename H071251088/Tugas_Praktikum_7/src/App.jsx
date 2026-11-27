import { useState } from 'react';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import RingkasanPesanan from './components/RingkasanPesanan';
import FormPesan from './components/FormPesan';
import Footer from './components/Footer';

const dataMenu = [
  { id: 1, nama: 'Kopi Susu', kategori: 'Kopi', harga: 18000, tersedia: true, deskripsi: 'Espresso dengan susu segar dan gula aren.' },
  { id: 2, nama: 'Americano', kategori: 'Kopi', harga: 15000, tersedia: true, deskripsi: 'Espresso dengan air panas, rasa kuat dan bersih.' },
  { id: 3, nama: 'Cappuccino', kategori: 'Kopi', harga: 22000, tersedia: true, deskripsi: 'Espresso, susu panas, dan busa susu tebal.' },
  { id: 4, nama: 'Matcha Latte', kategori: 'Non-Kopi', harga: 24000, tersedia: true, deskripsi: 'Teh hijau matcha dengan susu.' },
  { id: 5, nama: 'Teh Tarik', kategori: 'Non-Kopi', harga: 14000, tersedia: false, deskripsi: 'Teh susu yang ditarik hingga berbusa.' },
  { id: 6, nama: 'Cokelat Panas', kategori: 'Non-Kopi', harga: 20000, tersedia: true, deskripsi: 'Cokelat pekat dengan susu hangat.' },
  { id: 7, nama: 'Roti Bakar', kategori: 'Makanan', harga: 16000, tersedia: true, deskripsi: 'Roti tebal dengan selai cokelat dan keju.' },
  { id: 8, nama: 'Pisang Goreng', kategori: 'Makanan', harga: 12000, tersedia: false, deskripsi: 'Pisang goreng renyah dengan taburan keju.' },
  { id: 9, nama: 'Nasi Goreng', kategori: 'Makanan', harga: 25000, tersedia: true, deskripsi: 'Nasi goreng kampung dengan telur mata sapi.' },
];

export default function App() {
  const [pesanan, setPesanan] = useState([]);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');

  const tambahPesanan = (menu) => {
    setPesanan((prev) => {
      const ada = prev.find((item) => item.id === menu.id);
      if (ada) {
        return prev.map((item) =>
          item.id === menu.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...menu, qty: 1 }];
    });
  };

  const resetPesanan = () => {
    setPesanan([]);
  };

  const totalItem = pesanan.reduce((sum, item) => sum + item.qty, 0);
  const totalHarga = pesanan.reduce((sum, item) => sum + (item.harga * item.qty), 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar totalItem={totalItem} totalHarga={totalHarga} />
      <main className="flex-grow container mx-auto p-4 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <MenuList 
            dataMenu={dataMenu} 
            kategoriAktif={kategoriAktif} 
            setKategoriAktif={setKategoriAktif} 
            tambahPesanan={tambahPesanan} 
          />
        </div>
        <div className="lg:w-1/3 flex flex-col gap-6">
          <RingkasanPesanan pesanan={pesanan} totalHarga={totalHarga} />
          <FormPesan pesanan={pesanan} resetPesanan={resetPesanan} />
        </div>
      </main>
      <Footer />
    </div>
  );
}