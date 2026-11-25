import pool from "@/lib/db";
import BukuCard from "@/components/BukuCard";
import { tambahBuku } from "./actions";

export default async function KatalogPage() {
  const result = await pool.query(`
    SELECT *
    FROM buku
    ORDER BY id ASC
  `);

  const buku = result.rows;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Katalog Buku
        </h1>

        <p className="text-gray-600 mt-2">
          Koleksi buku Ruang Baca Pustaka Senja.
        </p>
      </div>

      {/* FORM TAMBAH BUKU */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">

        <h2 className="text-2xl font-bold mb-6">
          Tambah Buku
        </h2>

        <form action={tambahBuku} className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Judul
            </label>

            <input
              type="text"
              name="judul"
              required
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan judul buku"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Penulis
            </label>

            <input
              type="text"
              name="penulis"
              required
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan nama penulis"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block font-medium mb-2">
                Kategori
              </label>

              <select
                name="kategori"
                required
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">
                  Pilih kategori
                </option>

                <option value="Teknologi">
                  Teknologi
                </option>

                <option value="Fiksi">
                  Fiksi
                </option>

                <option value="Pengembangan Diri">
                  Pengembangan Diri
                </option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Tahun
              </label>

              <input
                type="number"
                name="tahun"
                required
                className="w-full border rounded-lg px-4 py-2"
                placeholder="2026"
              />
            </div>

          </div>

          <div>
            <label className="block font-medium mb-2">
              Ketersediaan
            </label>

            <select
              name="tersedia"
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="true">
                Tersedia
              </option>

              <option value="false">
                Dipinjam
              </option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Sinopsis
            </label>

            <textarea
              name="sinopsis"
              required
              rows="4"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan sinopsis buku"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Tambah Buku
          </button>

        </form>

      </div>

      {/* DAFTAR BUKU */}

      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Daftar Koleksi
        </h2>
      </div>

      {buku.length === 0 ? (
        <div className="bg-white p-8 rounded-xl text-center">
          Belum ada buku.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buku.map((item) => (
            <BukuCard
              key={item.id}
              buku={item}
            />
          ))}
        </div>
      )}

    </div>
  );
}