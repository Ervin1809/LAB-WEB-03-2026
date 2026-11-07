import Link from "next/link";
import { dataBuku } from "../../../data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <section className="mx-auto max-w-xl rounded-2xl border border-stone-800 bg-stone-900 p-8 text-center">
        <h1 className="mb-3 text-2xl font-bold text-red-400">Buku Tidak Ditemukan</h1>
        <p className="mb-6 text-stone-400">Buku dengan ID {id} tidak tersedia di katalog.</p>
        <Link href="/katalog" className="text-amber-300 hover:underline">
          Kembali ke Katalog
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 shadow-lg">
      <div className="bg-gradient-to-br from-amber-900 to-stone-900 p-10 text-center">
        <p className="text-sm uppercase tracking-widest text-amber-300">{buku.kategori}</p>
        <h1 className="mt-3 text-3xl font-bold">{buku.judul}</h1>
      </div>
      <div className="space-y-4 p-6">
        <p><span className="text-stone-400">Penulis:</span> {buku.penulis}</p>
        <p><span className="text-stone-400">Tahun Terbit:</span> {buku.tahun}</p>
        <p>
          <span className="text-stone-400">Status:</span>{" "}
          <span className={buku.tersedia ? "font-semibold text-green-400" : "font-semibold text-red-400"}>
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </p>
        <div>
          <h2 className="mb-2 text-lg font-semibold">Sinopsis</h2>
          <p className="leading-relaxed text-stone-300">{buku.sinopsis}</p>
        </div>
        <Link href="/katalog" className="inline-block rounded-lg bg-amber-500 px-4 py-2 font-semibold text-stone-950 hover:bg-amber-400">
          Kembali ke Katalog
        </Link>
      </div>
    </article>
  );
}
