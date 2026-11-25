import { dataBuku } from "@/data/dataBuku";
import Link from "next/link";

export default async function DetailBuku({ params }) {
  const { id } = await params;
  const buku = dataBuku.find(b => b.id === id);

  if (!buku) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Buku Tidak Ditemukan</h2>
        <p className="text-gray-500 mb-6">Maaf, buku dengan ID {id} tidak ada dalam katalog kami.</p>
        <Link href="/katalog" className="bg-blue-600 text-white px-6 py-2 rounded font-medium">Kembali ke Katalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
      <Link href="/katalog" className="text-blue-500 hover:underline mb-6 inline-block text-sm">
        &larr; Kembali ke Katalog
      </Link>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{buku.judul}</h2>
      <p className="text-lg text-gray-600 mb-4">Oleh: {buku.penulis} ({buku.tahun})</p>
      
      <div className="flex items-center space-x-3 mb-6">
        <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">{buku.kategori}</span>
        {buku.tersedia ? (
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded font-medium">Tersedia</span>
        ) : (
          <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded font-medium">Sedang Dipinjam</span>
        )}
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold text-gray-800 mb-2">Sinopsis</h4>
        <p className="text-gray-700 leading-relaxed">{buku.sinopsis}</p>
      </div>
    </div>
  );
}