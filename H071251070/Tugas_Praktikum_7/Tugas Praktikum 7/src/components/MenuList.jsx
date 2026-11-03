import MenuCard from './MenuCard'

function MenuList({
  menus,
  kategoriAktif,
  setKategoriAktif,
  pesanan,
  onTambah,
}) {
  const kategori = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan']

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Menu Kami</h2>

      <div className="mb-6 flex flex-wrap gap-2">
        {kategori.map((item) => (
          <button
            key={item}
            onClick={() => setKategoriAktif(item)}
            className={`rounded-full px-4 py-2 ${
              kategoriAktif === item
                ? 'bg-amber-900 text-white'
                : 'bg-white text-stone-700 hover:bg-amber-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            jumlah={pesanan[menu.id] || 0}
            onTambah={onTambah}
          />
        ))}
      </div>
    </section>
  )
}

export default MenuList