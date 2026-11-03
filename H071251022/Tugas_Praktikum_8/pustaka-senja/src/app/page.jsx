import Link from "next/link";
import Hero from "@/components/Hero";
import { dataBuku } from "@/data/dataBuku";

export default function BerandaPage() {
  const totalKoleksi = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const statistik = [
    { label: "Total Koleksi", nilai: totalKoleksi, warna: "text-amber-700" },
    { label: "Buku Tersedia", nilai: bukuTersedia, warna: "text-green-600" },
    { label: "Buku Dipinjam", nilai: bukuDipinjam, warna: "text-red-600" },
  ];

  return (
    <div className="space-y-10">
      <Hero
        nama="Pustaka Senja"
        deskripsi="Ruang baca dan perpustakaan komunitas yang hangat di dekat kampus. Pinjam, baca, dan usulkan buku favoritmu."
        lokasi="Jl. Perintis Kemerdekaan, dekat kampus"
        jamBuka="Setiap hari, 15.00 – 21.00"
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {statistik.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-amber-100 bg-white p-6 text-center shadow-sm"
          >
            <p className={`text-4xl font-bold ${item.warna}`}>{item.nilai}</p>
            <p className="mt-1 text-sm text-stone-500">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-wrap justify-center gap-4">
        <Link
          href="/katalog"
          className="rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
        >
          Jelajahi Katalog
        </Link>
        <Link
          href="/usulan"
          className="rounded-xl border border-amber-600 px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
        >
          Usulkan Buku
        </Link>
      </section>
    </div>
  );
}
