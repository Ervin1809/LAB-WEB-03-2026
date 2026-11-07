"use client";

import { useState } from "react";
import { dataBuku } from "../../data/dataBuku";
import BukuCard from "../../components/BukuCard";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuDitampilkan = kategoriAktif === "Semua"
    ? dataBuku
    : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Katalog Buku</h1>
        <p className="mt-2 text-stone-400">Temukan buku yang ingin kamu baca di Pustaka Senja.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setKategoriAktif(kategori)}
            className={kategoriAktif === kategori
              ? "rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950"
              : "rounded-lg border border-stone-700 px-4 py-2 text-sm text-stone-300 hover:bg-stone-900"}
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bukuDitampilkan.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>
    </section>
  );
}
