"use client";
import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import { dataBuku } from "@/data/dataBuku";

export default function Katalog() {
  const [filter, setFilter] = useState("Semua");
  const kategoriOptions = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

  const filteredBuku = filter === "Semua" ? dataBuku : dataBuku.filter(b => b.kategori === filter);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Katalog Buku</h2>
      
      <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
        {kategoriOptions.map(kat => (
          <button
            key={kat}
            onClick={() => setFilter(kat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              filter === kat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {kat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBuku.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>
    </div>
  );
}