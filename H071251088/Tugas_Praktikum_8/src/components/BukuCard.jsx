"use client";
import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku }) {
  const [isFavorit, setIsFavorit] = useState(false);

  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{buku.judul}</h3>
        <p className="text-sm text-gray-500 mb-2">{buku.penulis} • {buku.tahun}</p>
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mb-4">{buku.kategori}</span>
        
        <div className="mb-4">
          {buku.tersedia ? (
            <span className="text-green-600 text-sm font-semibold">Tersedia</span>
          ) : (
            <span className="text-red-500 text-sm font-semibold">Sedang Dipinjam</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Link href={`/katalog/${buku.id}`} className="text-blue-600 hover:underline text-sm font-medium">
          Lihat Detail
        </Link>
        <button 
          onClick={() => setIsFavorit(!isFavorit)}
          className={`text-sm px-3 py-1 rounded border transition ${isFavorit ? "bg-pink-50 text-pink-600 border-pink-200" : "text-gray-600 border-gray-300 hover:bg-gray-50"}`}
        >
          {isFavorit ? "❤️ Disukai" : "🤍 Suka"}
        </button>
      </div>
    </div>
  );
}