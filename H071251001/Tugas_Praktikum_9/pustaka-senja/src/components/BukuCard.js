
"use client";

import { useState } from "react";
import Link from "next/link";
import { deleteBuku } from "@/app/actions/buku";

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);

  function handleDelete(event) {
    const yakin = window.confirm(
      `Apakah kamu yakin ingin menghapus buku "${buku.judul}"?`
    );

    if (!yakin) {
      event.preventDefault();
    }
  }

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

      <div className="flex flex-wrap gap-2">
        <Link
          href={`/katalog/${buku.id}`}
          className="rounded-lg bg-amber-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-900"
        >
          Lihat Detail
        </Link>

        <Link
          href={`/katalog/${buku.id}/edit`}
          className="rounded-lg border border-amber-800 px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
        >
          Edit
        </Link>

        <form action={deleteBuku} onSubmit={handleDelete}>
          <input
            type="hidden"
            name="id"
            value={buku.id}
          />

          <button
            type="submit"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Hapus
          </button>
        </form>
      </div>
    </div>
  );
}
