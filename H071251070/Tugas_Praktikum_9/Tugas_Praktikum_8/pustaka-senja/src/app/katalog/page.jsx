
import pool from "@/lib/db";
import Link from "next/link";
import TombolHapus from "@/components/TombolHapus";

export default async function KatalogPage() {
  const result = await pool.query(
    "SELECT * FROM buku ORDER BY id ASC"
  );

  const daftarBuku = result.rows;

  return (
    <div className="min-h-screen bg-[#F8F5F2] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-[#5A2732]">
          Katalog Buku
        </h1>

        <p className="mb-8 text-gray-600">
          Jelajahi koleksi buku Pustaka Senja.
        </p>

        <Link
          href="/katalog/tambah"
          className="mb-8 inline-block rounded-lg bg-[#5A2732] px-5 py-3 text-white"
        >
          + Tambah Buku
        </Link>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {daftarBuku.map((buku) => (
            <div
              key={buku.id}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <span className="rounded-full bg-[#EDE3E5] px-3 py-1 text-sm text-[#5A2732]">
                {buku.kategori}
              </span>

              <h2 className="mt-4 text-xl font-bold text-[#5A2732]">
                {buku.judul}
              </h2>

              <p className="mt-2 text-gray-600">
                Penulis: {buku.penulis}
              </p>

              <p className="text-gray-600">
                Tahun: {buku.tahun}
              </p>

              <p className="mt-2">
                Status:{" "}
                {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
              </p>

              <Link
                href={`/katalog/${buku.id}`}
                className="mt-4 inline-block rounded-lg bg-[#5A2732] px-4 py-2 text-white"
              >
                Lihat Detail
              </Link>

              <TombolHapus id={buku.id} />

               <Link
                href={`/katalog/${buku.id}/edit`}
                className="mt-3 inline-block rounded-lg border border-[#5A2732] px-4 py-2 text-[#5A2732]"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
