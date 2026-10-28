function Navbar({ kategoriAktif, onKategoriClick }) {
  const kategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

  return (
    <nav className="bg-amber-950 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Kedai Kopi Senja</h1>
            <p className="text-sm text-amber-200">
              Pesan menu favoritmu dari meja
            </p>
          </div>

          <div className="flex gap-2">
            {kategori.map((item) => (
              <button
                key={item}
                onClick={() => onKategoriClick(item)}
                className={
                  item === kategoriAktif
                    ? "bg-amber-500 text-white px-4 py-2 rounded-lg"
                    : "bg-amber-900 text-amber-100 px-4 py-2 rounded-lg"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;