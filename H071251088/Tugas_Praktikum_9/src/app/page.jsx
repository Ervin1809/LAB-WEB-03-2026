import pool from "@/lib/db";
import Hero from "@/components/Hero";

export default async function Home() {
  const result = await pool.query(`
    SELECT
      COUNT(*) AS total,
      COUNT(*) FILTER (WHERE tersedia = TRUE) AS tersedia,
      COUNT(*) FILTER (WHERE tersedia = FALSE) AS dipinjam
    FROM buku
  `);

  const statistik = result.rows[0];

  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Statistik Koleksi
          </h2>

          <p className="text-gray-600 mt-2">
            Data koleksi buku yang tersimpan di PostgreSQL
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="text-4xl font-bold text-indigo-600">
              {statistik.total}
            </p>

            <p className="text-gray-600 mt-2">
              Total Buku
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="text-4xl font-bold text-green-600">
              {statistik.tersedia}
            </p>

            <p className="text-gray-600 mt-2">
              Buku Tersedia
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="text-4xl font-bold text-red-600">
              {statistik.dipinjam}
            </p>

            <p className="text-gray-600 mt-2">
              Sedang Dipinjam
            </p>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a
            href="/katalog"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Lihat Katalog
          </a>
        </div>

      </section>
    </>
  );
}