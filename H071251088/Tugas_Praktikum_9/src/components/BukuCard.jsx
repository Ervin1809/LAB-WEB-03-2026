import Link from "next/link";

export default function BukuCard({ buku }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <div className="p-6">

        <div className="flex justify-between items-start gap-3">
          <h2 className="text-xl font-bold text-gray-800">
            {buku.judul}
          </h2>

          <span
            className={`text-xs px-3 py-1 rounded-full ${
              buku.tersedia
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {buku.tersedia ? "Tersedia" : "Dipinjam"}
          </span>
        </div>

        <p className="text-gray-600 mt-2">
          {buku.penulis}
        </p>

        <div className="flex gap-2 mt-4 flex-wrap">
          <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
            {buku.kategori}
          </span>

          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
            {buku.tahun}
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-4 line-clamp-3">
          {buku.sinopsis}
        </p>

        <div className="mt-5">
          <Link
            href={`/katalog/${buku.id}`}
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Lihat Detail
          </Link>
        </div>

      </div>

    </div>
  );
}