
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pool } from "@/lib/db";
import { updateBuku } from "@/app/actions/buku";

export const runtime = "nodejs";

export default async function EditBukuPage({ params }) {
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
          <h1 className="mb-2 text-3xl font-bold text-[#3d3028]">
            Edit Buku
          </h1>

          <p className="mb-8 text-stone-600">
            Ubah informasi buku sesuai dengan data terbaru.
          </p>

          <form action={updateBuku} className="space-y-5">
            <input
              type="hidden"
              name="id"
              value={buku.id}
            />

            <div>
              <label className="mb-2 block font-semibold text-[#3d3028]">
                Judul Buku
              </label>
              <input
                type="text"
                name="judul"
                defaultValue={buku.judul}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 text-[#3d3028] outline-none focus:border-amber-700"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#3d3028]">
                Penulis
              </label>
              <input
                type="text"
                name="penulis"
                defaultValue={buku.penulis}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 text-[#3d3028] outline-none focus:border-amber-700"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#3d3028]">
                Kategori
              </label>
              <select
                name="kategori"
                defaultValue={buku.kategori}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 text-[#3d3028] outline-none focus:border-amber-700"
              >
                <option value="Fiksi">Fiksi</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Pengembangan Diri">
                  Pengembangan Diri
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#3d3028]">
                Tahun Terbit
              </label>
              <input
                type="number"
                name="tahun"
                defaultValue={buku.tahun}
                min="1"
                max={new Date().getFullYear()}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 text-[#3d3028] outline-none focus:border-amber-700"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#3d3028]">
                Status Ketersediaan
              </label>
              <select
                name="tersedia"
                defaultValue={String(buku.tersedia)}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-3 text-[#3d3028] outline-none focus:border-amber-700"
              >
                <option value="true">Tersedia</option>
                <option value="false">Dipinjam</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#3d3028]">
                Sinopsis
              </label>
              <textarea
                name="sinopsis"
                defaultValue={buku.sinopsis || ""}
                rows={4}
                className="w-full rounded-lg border border-stone-300 px-4 py-3 text-[#3d3028] outline-none focus:border-amber-700"
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                type="submit"
                className="rounded-lg bg-amber-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-900"
              >
                Simpan Perubahan
              </button>

              <Link
                href="/katalog"
                className="rounded-lg border border-stone-300 px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                Batal
              </Link>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
