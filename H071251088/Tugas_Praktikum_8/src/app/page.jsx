import Hero from "@/components/Hero";
import Link from "next/link";
import { dataBuku } from "@/data/dataBuku";

export default function Beranda() {
  const totalBuku = dataBuku.length;
  const tersedia = dataBuku.filter(b => b.tersedia).length;
  const dipinjam = totalBuku - tersedia;

  return (
    <div>
      <Hero 
        nama="Selamat Datang di Pustaka Senja" 
        slogan="Ruang baca dan perpustakaan komunitas di dekat kampus Anda." 
        lokasi="Buka: Senin - Sabtu (09.00 - 17.00)" 
      />
      
      <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm font-medium uppercase">Total Koleksi</p>
          <p className="text-4xl font-bold text-blue-600 mt-2">{totalBuku}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm font-medium uppercase">Buku Tersedia</p>
          <p className="text-4xl font-bold text-green-500 mt-2">{tersedia}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm font-medium uppercase">Sedang Dipinjam</p>
          <p className="text-4xl font-bold text-red-500 mt-2">{dipinjam}</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Link href="/katalog" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Lihat Katalog Buku
        </Link>
        <Link href="/usulan" className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
          Usulkan Buku Baru
        </Link>
      </div>
    </div>
  );
}