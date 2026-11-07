import Link from "next/link";

export default function Hero({ nama, deskripsi, lokasi, jamBuka }) {
  return (
    <section className="rounded-2xl border border-stone-800 bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950 px-6 py-14 text-center shadow-lg">
      <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
        Ruang Baca & Perpustakaan Komunitas
      </span>
      <h1 className="mt-5 text-4xl font-bold sm:text-5xl">{nama}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-300">{deskripsi}</p>
      <p className="mt-5 text-sm text-stone-400">{lokasi} · Buka {jamBuka}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/katalog" className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-stone-950 hover:bg-amber-400">
          Jelajahi Katalog
        </Link>
        <Link href="/usulan" className="rounded-lg border border-stone-600 px-5 py-3 font-semibold hover:bg-stone-800">
          Usulkan Buku
        </Link>
      </div>
    </section>
  );
}
