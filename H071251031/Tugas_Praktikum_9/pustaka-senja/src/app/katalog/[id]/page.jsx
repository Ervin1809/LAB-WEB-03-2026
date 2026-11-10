import Link from "next/link";
import { notFound } from "next/navigation";
import pool from "@/lib/db";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;

  const { rows } = await pool.query(
    `SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis
     FROM buku
     WHERE id = $1`,
    [Number(id)]
  );

  if (rows.length === 0) notFound();

  const buku = rows[0];

  const info = [
    { label: "Penulis",      value: buku.penulis   },
    { label: "Kategori",     value: buku.kategori  },
    { label: "Tahun Terbit", value: buku.tahun     },
  ];

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/katalog"
        className="text-sm font-medium text-amber-800 hover:text-amber-950 hover:underline"
      >
        ← Kembali ke Katalog
      </Link>

      <article className="mt-4 rounded-lg border border-amber-200/80 bg-white p-6 shadow-sm sm:p-8">
        <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
          {buku.kategori}
        </span>

        <h1 className="mt-3 font-serif text-3xl font-bold text-amber-950">
          {buku.judul}
        </h1>

        <span
          className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
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

        <dl className="mt-6 grid gap-4 border-y border-amber-100 py-5 sm:grid-cols-3">
          {info.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-wide text-stone-500">
                {item.label}
              </dt>
              <dd className="mt-0.5 font-medium text-stone-800">{item.value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-6 font-serif text-xl font-bold text-amber-950">
          Sinopsis
        </h2>
        <p className="mt-2 leading-relaxed text-stone-700">{buku.sinopsis}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/katalog/${buku.id}/edit`}
            className="rounded-md border border-amber-700 px-5 py-2.5 text-center text-sm font-semibold text-amber-800 transition hover:bg-amber-100"
          >
            Edit Buku Ini
          </Link>
        </div>
      </article>
    </section>
  );
}
