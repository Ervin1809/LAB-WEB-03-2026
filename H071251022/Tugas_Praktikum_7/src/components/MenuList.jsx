import MenuCard from "./MenuCard.jsx";

function MenuList({ kategoriAktif, menuList, onTambah }) {
  return (
    <section className="flex-1">
      <header className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-sm text-kopi-300">Daftar Menu</p>
          <h2 className="font-judul text-3xl font-bold text-kopi-900">
            {kategoriAktif}
          </h2>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-kopi-500 shadow-sm">
          {menuList.length} menu
        </span>
      </header>

      {menuList.length === 0 ? (
        <p className="rounded-2xl bg-white p-6 text-center text-kopi-500 shadow-sm">
          Belum ada menu pada kategori ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {menuList.map((menu) => (
            <MenuCard
              key={menu.id}
              nama={menu.nama}
              kategori={menu.kategori}
              harga={menu.harga}
              tersedia={menu.tersedia}
              deskripsi={menu.deskripsi}
              gambar={menu.gambar}
              onTambah={() => onTambah(menu)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MenuList;
