
import pool from "@/lib/db";
import Link from "next/link";

export default async function HomePage() {
  const result = await pool.query(`
    SELECT
      COUNT(*) AS total,
      COUNT(*) FILTER (WHERE tersedia = TRUE) AS tersedia,
      COUNT(*) FILTER (WHERE tersedia = FALSE) AS dipinjam
    FROM buku
  `);

  const statistik = result.rows[0];

  return (
    <div className="min-h-screen bg-[#F8F5F2] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-2xl bg-[#5A2732] p-10 text-white">
          <h1 className="text-4xl font-bold">
            Selamat Datang di Pustaka Senja
          </h1>

          <p className="mt-4 max-w-2xl">
            Temukan berbagai koleksi buku untuk menemani perjalanan
            pengetahuan dan imajinasimu.
          </p>

          <Link
            href="/katalog"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-[#5A2732]"
          >
            Jelajahi Katalog
          </Link>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Koleksi</p>
            <h2 className="mt-2 text-3xl font-bold text-[#5A2732]">
              {statistik.total}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Buku Tersedia</p>
            <h2 className="mt-2 text-3xl font-bold text-[#5A2732]">
              {statistik.tersedia}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Sedang Dipinjam</p>
            <h2 className="mt-2 text-3xl font-bold text-[#5A2732]">
              {statistik.dipinjam}
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}
