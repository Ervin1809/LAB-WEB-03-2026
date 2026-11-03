"use client";

import { useState } from "react";
import Link from "next/link";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia }) {
  const [favorit, setFavorit] = useState(false); 

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
            {kategori}
          </span>
          <span
            className={
              tersedia
                ? "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                : "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
            }
          >
            {tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-bold text-stone-800">{judul}</h3>
        <p className="text-sm text-stone-600">{penulis}</p>
        <p className="mt-1 text-sm text-stone-400">Terbit {tahun}</p>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          className={
            favorit
              ? "rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white transition"
              : "rounded-lg border border-rose-300 px-4 py-2 text-sm font-medium text-rose-500 transition hover:bg-rose-50"
          }
        >
          {favorit ? "♥ Favorit" : "♡ Favorit"}
        </button>
        <Link
          href={`/katalog/${id}`}
          className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default BukuCard;
