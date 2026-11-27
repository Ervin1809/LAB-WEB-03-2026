
import pool from "@/lib/db";
import { updateBuku } from "../../action.jsx";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditBukuPage({ params }) {
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
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-[#5A2732]">
          Edit Buku
        </h1>

        <form action={updateBuku} className="space-y-5">
          <input
            type="hidden"
            name="id"
            value={buku.id}
          />

          <div>
            <label className="mb-2 block">Judul Buku</label>
            <input
              name="judul"
              defaultValue={buku.judul}
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Penulis</label>
            <input
              name="penulis"
              defaultValue={buku.penulis}
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Kategori</label>
            <select
              name="kategori"
              defaultValue={buku.kategori}
              required
              className="w-full rounded-lg border p-3"
            >
              <option value="Fiksi">Fiksi</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Pengembangan Diri">
                Pengembangan Diri
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Tahun Terbit</label>
            <input
              name="tahun"
              type="number"
              defaultValue={buku.tahun}
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Status Ketersediaan
            </label>
            <select
              name="tersedia"
              defaultValue={String(buku.tersedia)}
              required
              className="w-full rounded-lg border p-3"
            >
              <option value="true">Tersedia</option>
              <option value="false">Sedang Dipinjam</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Sinopsis</label>
            <textarea
              name="sinopsis"
              defaultValue={buku.sinopsis}
              required
              rows={5}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-lg bg-[#5A2732] px-5 py-3 text-white"
            >
              Simpan Perubahan
            </button>

            <Link
              href={`/katalog/${buku.id}`}
              className="rounded-lg border px-5 py-3"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
