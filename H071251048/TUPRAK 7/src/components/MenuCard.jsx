import { useState } from "react";

function MenuCard({ menu, tambahPesanan }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article className="flex flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
          {menu.kategori === "Kopi" ? "☕" : menu.kategori === "Non-Kopi" ? "🥤" : "🍽️"}
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
          menu.tersedia ? "bg-green-50 text-green-700" : "bg-stone-100 text-stone-500"
        }`}>
          {menu.tersedia ? "Tersedia" : "Habis"}
        </span>
      </div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-orange-700">{menu.kategori}</p>
      <h3 className="text-lg font-bold text-stone-900">{menu.nama}</h3>
      <p className="mt-2 text-lg font-bold text-orange-800">Rp {menu.harga.toLocaleString("id-ID")}</p>
      {detailTerbuka && (
        <p className="mt-3 rounded-xl bg-orange-50 p-3 text-sm leading-relaxed text-stone-600">{menu.deskripsi}</p>
      )}
      <div className="mt-auto flex gap-2 pt-5">
        <button
          type="button"
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="flex-1 rounded-xl border border-orange-200 px-3 py-2 text-sm font-semibold text-orange-800 hover:bg-orange-50"
        >
          {detailTerbuka ? "Tutup detail" : "Detail"}
        </button>
        <button
          type="button"
          disabled={!menu.tersedia}
          onClick={() => tambahPesanan(menu)}
          className="flex-1 rounded-xl bg-orange-800 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-900 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          {menu.tersedia ? "＋ Tambah" : "Habis"}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
