import { useState } from "react";

function MenuCard({ menu, onTambah }) {
  const [lihatDetail, setLihatDetail] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      
      <img
        src={menu.gambar}
        alt={menu.nama}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sm text-amber-700 font-semibold">
              {menu.kategori}
            </span>

            <h3 className="text-xl font-bold text-amber-950 mt-1">
              {menu.nama}
            </h3>
          </div>

          <span
            className={
              menu.tersedia
                ? "text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full"
                : "text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full"
            }
          >
            {menu.tersedia ? "Tersedia" : "Habis"}
          </span>
        </div>

        <p className="text-lg font-bold text-amber-900 mt-4">
          Rp {menu.harga.toLocaleString("id-ID")}
        </p>

        {lihatDetail && (
          <p className="text-gray-600 mt-3">
            {menu.deskripsi}
          </p>
        )}

        <div className="flex gap-2 mt-5">
          <button
            onClick={() => setLihatDetail(!lihatDetail)}
            className="border border-amber-700 text-amber-800 px-4 py-2 rounded-lg"
          >
            {lihatDetail ? "Tutup Detail" : "Detail"}
          </button>

          <button
            onClick={() => onTambah(menu)}
            disabled={!menu.tersedia}
            className={
              menu.tersedia
                ? "bg-amber-700 text-white px-4 py-2 rounded-lg"
                : "bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
            }
          >
            {menu.tersedia ? "Tambah" : "Habis"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;