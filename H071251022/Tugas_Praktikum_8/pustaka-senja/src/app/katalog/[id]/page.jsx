import Link from "next/link";
import { dataBuku } from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
        <h1 className="text-2xl font-bold text-red-700">Buku tidak ditemukan</h1>
        <p className="mt-2 text-stone-600">
          Tidak ada buku dengan ID &quot;{id}&quot; di koleksi Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="mt-6 inline-block rounded-lg bg-amber-600 px-5 py-2 font-medium text-white transition hover:bg-amber-700"
        >
          ← Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <article className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
          {buku.kategori}
        </span>
        <span
          className={
            buku.tersedia
              ? "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
              : "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
          }
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>
      </div>
      <h1 className="mt-4 text-3xl font-bold text-stone-800">{buku.judul}</h1>
      <p className="mt-1 text-stone-600">
        {buku.penulis} · {buku.tahun}
      </p>

      <h2 className="mt-8 text-lg font-semibold text-amber-900">Sinopsis</h2>
      <p className="mt-2 leading-relaxed text-stone-700">{buku.sinopsis}</p>

      <Link
        href="/katalog"
        className="mt-8 inline-block rounded-lg border border-amber-600 px-5 py-2 font-medium text-amber-700 transition hover:bg-amber-50"
      >
        ← Kembali ke Katalog
      </Link>
    </article>
  );
}
