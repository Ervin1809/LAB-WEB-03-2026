import MenuCard from "./MenuCard.jsx";

function MenuList({ menu, kategoriAktif, setKategoriAktif, tambahPesanan }) {
  const kategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];
  const menuTampil = kategoriAktif === "Semua"
    ? menu
    : menu.filter((item) => item.kategori === kategoriAktif);

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-900">Menu Pilihan</h2>
          <p className="mt-1 text-sm text-stone-500">Pilih menu yang kamu inginkan.</p>
        </div>
        <span className="text-sm text-stone-500">{menuTampil.length} menu</span>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {kategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              kategoriAktif === kategori
                ? "bg-orange-800 text-white shadow"
                : "border border-orange-100 bg-white text-stone-600 hover:bg-orange-50"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {menuTampil.map((item) => (
          <MenuCard key={item.id} menu={item} tambahPesanan={tambahPesanan} />
        ))}
      </div>
    </div>
  );
}

export default MenuList;
