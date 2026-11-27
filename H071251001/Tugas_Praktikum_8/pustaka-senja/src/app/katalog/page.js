
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

export default function KatalogPage() {
  const [kategori, setKategori] = useState("Semua");

  const daftarKategori = [
    "Semua",
    "Fiksi",
    "Teknologi",
    "Pengembangan Diri",
  ];

  const bukuFilter = dataBuku.filter((buku) => {
    return kategori === "Semua" || buku.kategori === kategori;
  });

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-[#3d3028]">
            Katalog Buku
          </h1>

          <p className="text-stone-600">
            Temukan buku yang sesuai dengan minat bacamu.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {daftarKategori.map((item) => (
            <button
              key={item}
              onClick={() => setKategori(item)}
              className={`rounded-lg px-5 py-2 font-medium transition ${
                kategori === item
                  ? "bg-amber-800 text-white"
                  : "bg-white text-amber-900 hover:bg-amber-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mb-5 text-sm text-stone-600">
          Menampilkan {bukuFilter.length} buku
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bukuFilter.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>

        {bukuFilter.length === 0 && (
          <p className="py-10 text-center text-stone-600">
            Buku tidak ditemukan.
          </p>
        )}
      </section>
    </main>
  );
}
