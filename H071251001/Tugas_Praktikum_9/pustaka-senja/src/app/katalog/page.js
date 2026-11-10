
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FilterKatalog from "@/components/FilterKatalog";
import { pool } from "@/lib/db";

export const runtime = "nodejs";

export default async function KatalogPage() {
  const hasil = await pool.query(
    "SELECT * FROM buku ORDER BY id ASC"
  );

  const dataBuku = hasil.rows;

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-[#3d3028]">
            Katalog Buku
          </h1>

          <p className="text-stone-600">
            Temukan buku yang sesuai dengan minat bacamu.
          </p>

          <Link
            href="/katalog/tambah"
            className="mt-6 inline-block rounded-lg bg-amber-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-900"
          >
            + Tambah Buku
          </Link>
        </div>

        <FilterKatalog dataBuku={dataBuku} />
      </section>
    </main>
  );
}
