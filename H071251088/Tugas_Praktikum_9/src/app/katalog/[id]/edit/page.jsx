import pool from "@/lib/db";
import { updateBuku } from "../../actions";
import { notFound } from "next/navigation";

export default async function EditBuku({ params }) {
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

  const updateDenganId = updateBuku.bind(null, id);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">

      <div className="bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Buku
        </h1>

        <form
          action={updateDenganId}
          className="space-y-5"
        >

          <div>
            <label className="block font-medium mb-2">
              Judul
            </label>

            <input
              type="text"
              name="judul"
              defaultValue={buku.judul}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Penulis
            </label>

            <input
              type="text"
              name="penulis"
              defaultValue={buku.penulis}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block font-medium mb-2">
                Kategori
              </label>

              <select
                name="kategori"
                defaultValue={buku.kategori}
                required
                className="w-full border rounded-lg px-4 py-2"
              >
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
                defaultValue={buku.tahun}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

          </div>

          <div>
            <label className="block font-medium mb-2">
              Ketersediaan
            </label>

            <select
              name="tersedia"
              defaultValue={buku.tersedia ? "true" : "false"}
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
              defaultValue={buku.sinopsis}
              required
              rows="5"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div className="flex gap-3">

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
            >
              Simpan Perubahan
            </button>

            <a
              href={`/katalog/${id}`}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg"
            >
              Batal
            </a>

          </div>

        </form>

      </div>

    </div>
  );
}