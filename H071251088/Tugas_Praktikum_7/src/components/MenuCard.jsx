import { useState } from 'react';

export default function MenuCard({ menu, tambahPesanan }) {
  const [bukaDetail, setBukaDetail] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800">{menu.nama}</h3>
          <span className="font-semibold text-amber-700">Rp {menu.harga.toLocaleString('id-ID')}</span>
        </div>
        <button 
          onClick={() => setBukaDetail(!bukaDetail)}
          className="text-sm text-blue-600 hover:underline mb-2"
        >
          {bukaDetail ? 'Sembunyikan detail' : 'Lihat detail'}
        </button>
        {bukaDetail && (
          <p className="text-gray-600 text-sm mb-4 bg-gray-50 p-2 rounded">
            {menu.deskripsi}
          </p>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${menu.tersedia ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {menu.tersedia ? 'Tersedia' : 'Habis'}
        </span>
        <button
          onClick={() => tambahPesanan(menu)}
          disabled={!menu.tersedia}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            menu.tersedia 
              ? 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Tambah
        </button>
      </div>
    </div>
  );
}