import pool from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import TombolHapus from "@/components/TombolHapus";

export default async function DetailBuku({ params }) {
  const { id } = await params;

  const result = await pool.query(
    `
    SELECT *
    FROM buku
    WHERE id = $1
    `,
    [id]
  );

  if (result.rows.length === 0) {
    notFound();
  }

  const buku = result.rows[0];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="flex justify-between items-start gap-4">

          <div>
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
              {buku.kategori}
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {buku.judul}
            </h1>

            <p className="text-gray-600 text-lg mt-2">
              {buku.penulis}
            </p>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm ${
              buku.tersedia
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {buku.tersedia ? "Tersedia" : "Dipinjam"}
          </span>

        </div>

        <div className="mt-8 border-t pt-6">

          <p>
            <strong>Tahun Terbit:</strong>{" "}
            {buku.tahun}
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">
              Sinopsis
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {buku.sinopsis}
            </p>
          </div>

        </div>

        <div className="flex gap-3 mt-8">

          <Link
            href={`/katalog/${buku.id}/edit`}
            className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600"
          >
            Edit
          </Link>

          <TombolHapus id={buku.id} />

          <Link
            href="/katalog"
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300"
          >
            Kembali
          </Link>

        </div>

      </div>

    </div>
  );
}