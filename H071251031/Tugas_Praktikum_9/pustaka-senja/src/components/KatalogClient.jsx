"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";

const KATEGORI_LIST = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogClient({ bukuList }) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const bukuTersaring =
    selectedCategory === "Semua"
      ? bukuList
      : bukuList.filter((b) => b.kategori === selectedCategory);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {KATEGORI_LIST.map((kategori) => {
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

      <p className="mt-5 text-sm text-stone-500">
        Menampilkan {bukuTersaring.length} buku
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTersaring.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>
    </>
  );
}
