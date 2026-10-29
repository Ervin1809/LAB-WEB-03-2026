import { useState } from "react";

function MenuCard({
  nama,
  kategori,
  harga,
  tersedia,
  deskripsi,
  gambar,
  onTambah,
}) {
  // State lokal: tiap kartu punya "buka/tutup detail" sendiri,
  // sehingga membuka satu menu tidak memengaruhi menu lain.
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-md shadow-kopi-900/5 transition hover:shadow-lg hover:shadow-kopi-900/10">
      <div className="relative h-44 bg-krem-200">
        <img
          src={gambar}
          alt={nama}
          className={
            tersedia
              ? "h-full w-full object-cover"
              : "h-full w-full object-cover opacity-50 grayscale"
          }
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-kopi-500">
          {kategori}
        </span>
        {!tersedia && (
          <span className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
            Habis
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-kopi-900">{nama}</h3>
        <p className="mt-1 text-lg font-semibold text-kopi-600">
          Rp {harga.toLocaleString("id-ID")}
        </p>

        {detailTerbuka && (
          <p className="mt-3 rounded-2xl bg-krem-50 p-3 text-sm leading-relaxed text-kopi-500">
            {deskripsi}
          </p>
        )}

        {!tersedia && (
          <p className="mt-3 text-sm font-medium text-red-600">
            Stok habis, menu belum bisa dipesan.
          </p>
        )}

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setDetailTerbuka(!detailTerbuka)}
            className="flex-1 rounded-xl border border-krem-300 px-3 py-2 text-sm font-medium text-kopi-600 transition hover:bg-krem-100"
          >
            {detailTerbuka ? "Tutup" : "Detail"}
          </button>
          <button
            type="button"
            onClick={onTambah}
            disabled={!tersedia}
            className="flex-1 rounded-xl bg-kopi-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-kopi-700 disabled:cursor-not-allowed disabled:bg-krem-300 disabled:text-kopi-300"
          >
            {tersedia ? "+ Tambah" : "Habis"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
