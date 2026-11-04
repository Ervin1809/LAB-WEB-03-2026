"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import { dataBuku } from "@/data/dataBuku";

const kategoriList = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const bukuTersaring =
    selectedCategory === "Semua"
      ? dataBuku
      : dataBuku.filter((b) => b.kategori === selectedCategory);

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-amber-950">
        Katalog Buku
      </h1>
      <p className="mt-2 text-stone-600">
        Telusuri koleksi Pustaka Senja berdasarkan kategori.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {kategoriList.map((kategori) => {
          const active = selectedCategory === kategori;
          return (
            <button
              key={kategori}
              type="button"
              onClick={() => setSelectedCategory(kategori)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                active
                  ? "border-amber-800 bg-amber-800 text-white"
                  : "border-amber-300 bg-white text-amber-900 hover:bg-amber-100"
              }`}
            >
              {kategori}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-stone-500">
        Menampilkan {bukuTersaring.length} buku
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTersaring.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>
    </section>
  );
}