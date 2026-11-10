
import Link from "next/link";
import Navbar from "@/components/Navbar";
import dataBuku from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;

  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <main className="min-h-screen bg-[#f8f5ef]">
        <Navbar />
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#3d3028]">
            Buku Tidak Ditemukan
          </h1>
          <p className="mb-6 text-stone-600">
            Maaf, buku yang kamu cari tidak tersedia.
          </p>
          <Link
            href="/katalog"
            className="rounded-lg bg-amber-800 px-5 py-3 font-semibold text-white hover:bg-amber-900"
          >
            Kembali ke Katalog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/katalog"
          className="mb-8 inline-block font-medium text-amber-800 hover:text-amber-950"
        >
          ← Kembali ke Katalog
        </Link>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900">
            {buku.kategori}
          </span>

          <h1 className="mt-6 text-4xl font-bold text-[#3d3028]">
            {buku.judul}
          </h1>

          <div className="mt-6 space-y-4 text-stone-600">
            <p>
              <strong>Penulis:</strong> {buku.penulis}
            </p>
            <p>
              <strong>Tahun Terbit:</strong> {buku.tahun}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={buku.tersedia ? "text-green-700" : "text-red-600"}>
                {buku.tersedia ? "Tersedia" : "Dipinjam"}
              </span>
            </p>
          </div>

          <div className="mt-8 border-t border-stone-200 pt-6">
            <h2 className="mb-3 text-xl font-bold text-[#3d3028]">
              Sinopsis Buku
            </h2>
            <p className="leading-8 text-stone-600">
              {buku.sinopsis}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
