"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <article className="flex flex-col rounded-lg border border-amber-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
          {buku.kategori}
        </span>

        <button
          type="button"
          onClick={() => setIsFavorite((prev) => !prev)}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite ? "Hapus dari favorit" : "Simpan ke favorit"
          }
          className={`rounded-full p-1.5 transition hover:bg-rose-50 ${
            isFavorite ? "text-rose-600" : "text-stone-400 hover:text-rose-500"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-amber-950">
        {buku.judul}
      </h3>
      <p className="mt-1 text-sm text-stone-600">{buku.penulis}</p>
      <p className="text-xs text-stone-500">Terbit {buku.tahun}</p>

      <div className="mt-4 flex items-center justify-between gap-2 pt-1">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
            buku.tersedia
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-stone-300 bg-stone-100 text-stone-600"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              buku.tersedia ? "bg-emerald-500" : "bg-stone-400"
            }`}
          />
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>

        <Link
          href={`/katalog/${buku.id}`}
          className="text-sm font-medium text-amber-800 underline-offset-4 hover:text-amber-950 hover:underline"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}