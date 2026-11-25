import MenuCard from './MenuCard';

export default function MenuList({ dataMenu, kategoriAktif, setKategoriAktif, tambahPesanan }) {
  const kategori = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan'];
  const menuTampil = kategoriAktif === 'Semua' 
    ? dataMenu 
    : dataMenu.filter(menu => menu.kategori === kategoriAktif);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {kategori.map(kat => (
          <button
            key={kat}
            onClick={() => setKategoriAktif(kat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              kategoriAktif === kat 
                ? 'bg-amber-800 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {kat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuTampil.map(menu => (
          <MenuCard key={menu.id} menu={menu} tambahPesanan={tambahPesanan} />
        ))}
      </div>
    </div>
  );
}