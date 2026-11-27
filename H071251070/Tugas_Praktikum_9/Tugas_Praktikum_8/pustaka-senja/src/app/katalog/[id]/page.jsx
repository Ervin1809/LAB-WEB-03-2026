
import pool from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;

  const result = await pool.query(
    "SELECT * FROM buku WHERE id = $1",
    [id]
  );

  const buku = result.rows[0];

  if (!buku) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8F5F2] px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
        <span className="rounded-full bg-[#EDE3E5] px-3 py-1 text-sm text-[#5A2732]">
          {buku.kategori}
        </span>

        <h1 className="mt-5 text-3xl font-bold text-[#5A2732]">
          {buku.judul}
        </h1>

        <p className="mt-3 text-gray-600">
          Penulis: {buku.penulis}
        </p>

        <p className="text-gray-600">
          Tahun terbit: {buku.tahun}
        </p>

        <p className="mt-3">
          Status: {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#5A2732]">
            Sinopsis
          </h2>

          <p className="mt-2 leading-relaxed text-gray-700">
            {buku.sinopsis}
          </p>
        </div>

        <Link
          href="/katalog"
          className="mt-8 inline-block rounded-lg bg-[#5A2732] px-5 py-2 text-white"
        >
          Kembali ke Katalog
        </Link>
        <Link
            href={`/katalog/${buku.id}/edit`}
            className="mt-8 inline-block rounded-lg bg-[#80636A] px-5 py-2 text-white"
          >
            Edit Buku
          </Link>
      </div>
    </div>
  );
}
