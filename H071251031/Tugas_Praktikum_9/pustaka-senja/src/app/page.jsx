import Link from "next/link";
import Hero from "@/components/Hero";
import pool from "@/lib/db";

export default async function HomePage() {
  const { rows } = await pool.query(
    `SELECT
       COUNT(*)                          AS total,
       COUNT(*) FILTER (WHERE tersedia)  AS tersedia,
       COUNT(*) FILTER (WHERE NOT tersedia) AS dipinjam
     FROM buku`
  );

  const { total, tersedia, dipinjam } = rows[0];

  const stats = [
    { label: "Total Koleksi",  value: Number(total),    style: "text-amber-900"  },
    { label: "Buku Tersedia",  value: Number(tersedia), style: "text-emerald-700" },
    { label: "Buku Dipinjam",  value: Number(dipinjam), style: "text-stone-600"  },
  ];

  return (
    <>
      <Hero
        nama="Ruang Baca Pustaka Senja"
        slogan="Tempat tenang untuk menemukan cerita, ilmu, dan dirimu sendiri."
        lokasi="Jl. Perintis Kemerdekaan No. 15, Makassar"
        jamBuka="Senin–Sabtu, 09.00–21.00 WITA"
      />

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-bold text-amber-950">
          Statistik Koleksi
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-amber-200/80 bg-white p-6 text-center shadow-sm"
            >
              <p className={`font-serif text-4xl font-bold ${s.style}`}>
                {s.value}
              </p>
              <p className="mt-1 text-sm text-stone-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/katalog"
            className="w-full rounded-md bg-amber-800 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-amber-900 sm:w-auto"
          >
            Jelajahi Katalog
          </Link>
          <Link
            href="/tambah"
            className="w-full rounded-md border border-amber-700 px-6 py-3 text-center text-sm font-semibold text-amber-800 transition hover:bg-amber-100 sm:w-auto"
          >
            + Tambah Buku
          </Link>
        </div>
      </section>
    </>
  );
}