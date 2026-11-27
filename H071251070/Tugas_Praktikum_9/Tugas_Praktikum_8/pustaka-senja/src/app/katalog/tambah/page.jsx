
import { tambahBuku } from "../action.jsx";
import Link from "next/link";

export default function TambahBukuPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold text-[#5A2732]">
          Tambah Buku
        </h1>

        <form action={tambahBuku} className="space-y-5">
          <div>
            <label className="mb-2 block">Judul Buku</label>
            <input
              name="judul"
              type="text"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Penulis</label>
            <input
              name="penulis"
              type="text"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">Kategori</label>
            <select
              name="kategori"
              required
              className="w-full rounded-lg border p-3"
            >
              <option value="">Pilih Kategori</option>
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
              min="1"
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
              Simpan Buku
            </button>

            <Link
              href="/katalog"
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
