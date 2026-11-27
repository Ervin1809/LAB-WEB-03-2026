import Link from "next/link";
import pool from "@/lib/db";
import KatalogClient from "@/components/KatalogClient";

export default async function KatalogPage() {
  const { rows: bukuList } = await pool.query(
    `SELECT id, judul, penulis, kategori, tahun, tersedia
     FROM buku
     ORDER BY id ASC`
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-amber-950">
            Katalog Buku
          </h1>
          <p className="mt-1 text-stone-600">
            Telusuri koleksi Pustaka Senja berdasarkan kategori.
          </p>
        </div>
        <Link
          href="/tambah"
          className="inline-flex items-center gap-2 rounded-md bg-amber-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-900"
        >
          <span aria-hidden="true">＋</span> Tambah Buku
        </Link>
      </div>

      <KatalogClient bukuList={bukuList} />
    </section>
  );
}
