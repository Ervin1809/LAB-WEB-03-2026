import Link from "next/link";
import { dataBuku } from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((b) => b.id === id);

  if (!buku) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <p className="text-5xl" aria-hidden="true">📖</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-amber-950">
          Buku tidak ditemukan
        </h1>
        <p className="mt-2 text-stone-600">
          Maaf, buku yang kamu cari tidak ada di rak kami. Mungkin tautannya
          keliru, yuk lihat koleksi lainnya.
        </p>
        <Link
          href="/katalog"
          className="mt-6 inline-block rounded-md bg-amber-800 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-900"
        >
          &larr; Kembali ke Katalog
        </Link>
      </section>
    );
  }

  const info = [
    { label: "Penulis", value: buku.penulis },
    { label: "Kategori", value: buku.kategori },
    { label: "Tahun Terbit", value: buku.tahun },
  ];

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/katalog"
        className="text-sm font-medium text-amber-800 hover:text-amber-950 hover:underline"
      >
        &larr; Kembali
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
              <dd className="mt-0.5 font-medium text-stone-800">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-6 font-serif text-xl font-bold text-amber-950">
          Sinopsis
        </h2>
        <p className="mt-2 leading-relaxed text-stone-700">{buku.sinopsis}</p>
      </article>
    </section>
  );
}