"use client";

import { useActionState } from "react";
import Link from "next/link";
import { editBuku } from "@/app/katalog/actions";

const KATEGORI_OPTIONS = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const inputClass =
  "mt-1 w-full rounded-md border border-amber-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200";

const initialState = { success: false, message: "" };

export default function FormEditBuku({ buku }) {
  const [state, formAction, isPending] = useActionState(editBuku, initialState);

  return (
    <form
      action={formAction}
      className="mt-6 space-y-5 rounded-lg border border-amber-200/80 bg-white p-6 shadow-sm"
    >
      <input type="hidden" name="id" value={buku.id} />

      {state?.message && !state.success && (
        <div
          role="alert"
          className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="judul" className="text-sm font-medium text-stone-700">
          Judul Buku <span className="text-red-500">*</span>
        </label>
        <input
          id="judul"
          name="judul"
          type="text"
          required
          defaultValue={buku.judul}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="penulis" className="text-sm font-medium text-stone-700">
          Penulis <span className="text-red-500">*</span>
        </label>
        <input
          id="penulis"
          name="penulis"
          type="text"
          required
          defaultValue={buku.penulis}
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kategori" className="text-sm font-medium text-stone-700">
            Kategori <span className="text-red-500">*</span>
          </label>
          <select
            id="kategori"
            name="kategori"
            required
            defaultValue={buku.kategori}
            className={inputClass}
          >
            {KATEGORI_OPTIONS.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tahun" className="text-sm font-medium text-stone-700">
            Tahun Terbit <span className="text-red-500">*</span>
          </label>
          <input
            id="tahun"
            name="tahun"
            type="number"
            required
            min="1000"
            max={new Date().getFullYear()}
            defaultValue={buku.tahun}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="tersedia" className="text-sm font-medium text-stone-700">
          Status Ketersediaan
        </label>
        <select
          id="tersedia"
          name="tersedia"
          defaultValue={buku.tersedia ? "true" : "false"}
          className={inputClass}
        >
          <option value="true">Tersedia</option>
          <option value="false">Sedang Dipinjam</option>
        </select>
      </div>

      <div>
        <label htmlFor="sinopsis" className="text-sm font-medium text-stone-700">
          Sinopsis <span className="text-red-500">*</span>
        </label>
        <textarea
          id="sinopsis"
          name="sinopsis"
          rows={4}
          required
          defaultValue={buku.sinopsis}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-amber-800 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-900 disabled:opacity-60"
        >
          {isPending ? "Menyimpan…" : "Perbarui Buku"}
        </button>
        <Link
          href="/katalog"
          className="rounded-md border border-stone-300 px-6 py-2.5 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-100"
        >
          Batal
        </Link>
      </div>
    </form>
  );
}
