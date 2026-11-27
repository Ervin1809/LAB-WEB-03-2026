
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pool } from "@/lib/db";

export const runtime = "nodejs";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;

  // Mengambil data buku berdasarkan ID
  const hasil = await pool.query(
    "SELECT * FROM buku WHERE id = $1",
    [id]
  );

  const buku = hasil.rows[0];

  // Jika buku tidak ditemukan
  if (!buku) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-2xl bg-white p-8 shadow-sm">

          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900">
            {buku.kategori}
          </span>

          <h1 className="mt-5 mb-3 text-3xl font-bold text-[#3d3028]">
            {buku.judul}
          </h1>

          <p className="mb-6 text-stone-600">
            Penulis: {buku.penulis}
          </p>

          <div className="space-y-4 border-t border-stone-200 pt-6">

            <div>
              <h2 className="font-semibold text-[#3d3028]">
                Tahun Terbit
              </h2>
              <p className="text-stone-600">
                {buku.tahun}
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-[#3d3028]">
                Status Ketersediaan
              </h2>
              <span
                className={`font-medium ${
                  buku.tersedia
                    ? "text-green-700"
                    : "text-red-600"
                }`}
              >
                {buku.tersedia ? "Tersedia" : "Dipinjam"}
              </span>
            </div>

            <div>
              <h2 className="font-semibold text-[#3d3028]">
                Sinopsis
              </h2>
              <p className="mt-2 whitespace-pre-line leading-relaxed text-stone-600">
                {buku.sinopsis || "Belum ada sinopsis untuk buku ini."}
              </p>
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/katalog/${buku.id}/edit`}
              className="rounded-lg bg-amber-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-900"
            >
              Edit Buku
            </Link>

            <Link
              href="/katalog"
              className="rounded-lg border border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100"
            >
              Kembali ke Katalog
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
