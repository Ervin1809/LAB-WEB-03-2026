import { useState } from 'react'

function MenuCard({ menu, jumlah, onTambah }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false)

  return (
    <article className="flex flex-col rounded-xl bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold">{menu.nama}</h3>

        <span
          className={`rounded-full px-2 py-1 text-xs ${
            menu.tersedia
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {menu.tersedia ? 'Tersedia' : 'Habis'}
        </span>
      </div>

      <p className="mb-2 text-sm text-stone-500">{menu.kategori}</p>

      <p className="mb-4 font-semibold text-amber-900">
        Rp{menu.harga.toLocaleString('id-ID')}
      </p>

      {detailTerbuka && (
        <p className="mb-4 text-sm text-stone-600">{menu.deskripsi}</p>
      )}

      <div className="mt-auto flex flex-wrap gap-2">
        <button
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="rounded-lg border border-amber-900 px-3 py-2 text-sm text-amber-900 hover:bg-amber-50"
        >
          {detailTerbuka ? 'Tutup Detail' : 'Lihat Detail'}
        </button>

        <button
          onClick={() => onTambah(menu.id)}
          disabled={!menu.tersedia}
          className="rounded-lg bg-amber-900 px-3 py-2 text-sm text-white hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          {menu.tersedia ? `Tambah (${jumlah})` : 'Tidak Tersedia'}
        </button>
      </div>
    </article>
  )
}

export default MenuCard