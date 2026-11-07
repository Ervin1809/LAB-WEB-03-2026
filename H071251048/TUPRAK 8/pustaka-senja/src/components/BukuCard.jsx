"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="flex flex-col justify-between rounded-xl border border-stone-800 bg-stone-900 p-5 shadow-md">
      <div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            {buku.kategori}
          </span>
          <span className={buku.tersedia
            ? "rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400"
            : "rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400"}
          >
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>
        <h2 className="text-xl font-bold">{buku.judul}</h2>
        <p className="mt-2 text-sm text-stone-400">{buku.penulis}</p>
        <p className="mt-1 text-sm text-stone-500">Tahun terbit: {buku.tahun}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-stone-800 pt-4">
        <button
          onClick={() => setFavorit(!favorit)}
          className={favorit
            ? "rounded-lg bg-pink-500/15 px-3 py-2 text-sm text-pink-300"
            : "rounded-lg bg-stone-800 px-3 py-2 text-sm text-stone-300 hover:bg-stone-700"}
        >
          {favorit ? "♥ Favorit" : "♡ Simpan"}
        </button>
        <Link href={`/katalog/${buku.id}`} className="text-sm font-medium text-amber-300 hover:underline">
          Lihat Detail →
        </Link>
      </div>
    </article>
  );
}
