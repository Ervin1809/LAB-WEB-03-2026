import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-6xl" aria-hidden="true">📖</p>
      <h1 className="mt-6 font-serif text-3xl font-bold text-amber-950">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mx-auto mt-3 max-w-md text-stone-600">
        Maaf, buku atau halaman yang kamu cari tidak ada di rak kami.
        Mungkin tautannya keliru — yuk kembali ke katalog.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/katalog"
          className="rounded-md bg-amber-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-900"
        >
          ← Kembali ke Katalog
        </Link>
        <Link
          href="/"
          className="rounded-md border border-amber-700 px-6 py-3 text-sm font-semibold text-amber-800 transition hover:bg-amber-100"
        >
          Beranda
        </Link>
      </div>
    </section>
  );
}
