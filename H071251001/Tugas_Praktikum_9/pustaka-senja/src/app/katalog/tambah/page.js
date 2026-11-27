
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createBuku } from "@/app/actions/buku";

export default function TambahBukuPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold text-[#3d3028]">
            Tambah Buku
          </h1>

          <p className="text-stone-600">
            Tambahkan koleksi buku baru ke Pustaka Senja.
          </p>
        </div>

        <form
          action={createBuku}
          className="space-y-5 rounded-2xl bg-white p-8 shadow-sm"
        >
          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Judul Buku
            </label>
            <input
              type="text"
              name="judul"
              required
              maxLength={255}
              placeholder="Masukkan judul buku"
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] outline-none focus:border-amber-800"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Penulis
            </label>
            <input
              type="text"
              name="penulis"
              required
              placeholder="Masukkan nama penulis"
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] outline-none focus:border-amber-800"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Kategori
            </label>
            <select
              name="kategori"
              required
              defaultValue=""
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] outline-none focus:border-amber-800"
            >
              <option value="" disabled>
                Pilih kategori buku
              </option>
              <option value="Fiksi">Fiksi</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Pengembangan Diri">
                Pengembangan Diri
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Tahun Terbit
            </label>
            <input
              type="number"
              name="tahun"
              required
              min="1"
              max={new Date().getFullYear()}
              placeholder="Contoh: 2024"
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] outline-none focus:border-amber-800"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Status Ketersediaan
            </label>
            <select
              name="tersedia"
              required
              defaultValue="true"
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] outline-none focus:border-amber-800"
            >
              <option value="true">Tersedia</option>
              <option value="false">Dipinjam</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Sinopsis
            </label>
            <textarea
              name="sinopsis"
              rows={4}
              placeholder="Tuliskan sinopsis buku"
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] outline-none focus:border-amber-800"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-amber-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-900"
            >
              Simpan Buku
            </button>

            <Link
              href="/katalog"
              className="rounded-lg border border-stone-300 px-6 py-3 text-center font-semibold text-stone-700 transition hover:bg-stone-100"
            >
              Batal
            </Link>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}
