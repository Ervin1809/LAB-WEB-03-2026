"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import { dataBuku } from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-900">Katalog Buku</h1>
      <p className="mt-1 text-stone-500">
        Menampilkan {bukuTampil.length} dari {dataBuku.length} buku.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={
              kategoriAktif === kategori
                ? "rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-amber-300 px-4 py-2 text-sm text-amber-800 transition hover:bg-amber-50"
            }
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTampil.map((buku) => (
          <BukuCard
            key={buku.id}
            id={buku.id}
            judul={buku.judul}
            penulis={buku.penulis}
            kategori={buku.kategori}
            tahun={buku.tahun}
            tersedia={buku.tersedia}
          />
        ))}
      </div>
    </div>
  );
}
