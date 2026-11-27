
"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900">
          {buku.kategori}
        </span>

        <div className="flex items-center gap-3">
          <span
            className={`text-sm font-semibold ${
              buku.tersedia ? "text-green-700" : "text-red-600"
            }`}
          >
            {buku.tersedia ? "Tersedia" : "Dipinjam"}
          </span>

          <button
            type="button"
            onClick={() => setFavorit(!favorit)}
            aria-label={favorit ? "Hapus dari favorit" : "Tambahkan ke favorit"}
            className={`text-2xl transition hover:scale-110 ${
              favorit ? "text-red-600" : "text-gray-400"
            }`}
          >
            {favorit ? "♥" : "♡"}
          </button>
        </div>
      </div>

      <h2 className="mb-2 text-xl font-bold text-[#3d3028]">
        {buku.judul}
      </h2>

      <p className="mb-2 text-sm text-stone-600">
        Penulis: {buku.penulis}
      </p>

      <p className="mb-4 text-sm text-stone-600">
        Tahun: {buku.tahun}
      </p>

      <Link
        href={`/katalog/${buku.id}`}
        className="inline-block rounded-lg bg-amber-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-900"
      >
        Lihat Detail
      </Link>
    </div>
  );
}
