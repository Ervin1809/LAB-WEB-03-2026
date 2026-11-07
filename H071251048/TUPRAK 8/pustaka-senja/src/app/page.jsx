import Link from "next/link";
import Hero from "../components/Hero";
import { dataBuku } from "../data/dataBuku";

export default function HomePage() {
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia === true).length;
  const bukuDipinjam = dataBuku.filter((buku) => buku.tersedia === false).length;

  return (
    <div className="space-y-8">
      <Hero
        nama="Pustaka Senja"
        deskripsi="Tempat sederhana untuk menemukan cerita, pengetahuan, dan inspirasi baru."
        lokasi="Dekat kawasan kampus"
        jamBuka="Senin–Sabtu, 09.00–20.00"
      />

      <section>
        <h2 className="text-2xl font-bold mb-4">Ringkasan Koleksi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-stone-800 bg-stone-900 p-5">
            <p className="text-sm text-stone-400">Total Koleksi Buku</p>
            <p className="text-3xl font-bold text-amber-300">{totalBuku}</p>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900 p-5">
            <p className="text-sm text-stone-400">Buku Tersedia</p>
            <p className="text-3xl font-bold text-green-400">{bukuTersedia}</p>
          </div>
          <div className="rounded-xl border border-stone-800 bg-stone-900 p-5">
            <p className="text-sm text-stone-400">Buku Dipinjam</p>
            <p className="text-3xl font-bold text-red-400">{bukuDipinjam}</p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href="/katalog" className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-stone-950 hover:bg-amber-400">
          Lihat Katalog Buku
        </Link>
        <Link href="/usulan" className="rounded-lg border border-stone-700 px-5 py-3 font-semibold hover:bg-stone-900">
          Usulkan Buku
        </Link>
      </section>
    </div>
  );
}
