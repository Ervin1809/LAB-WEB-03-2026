import logoKopi from "../assets/logo/logo-kopi.jpg";

const ikonKategori = {
  Kopi: "",
  "Non-Kopi": "",
  Makanan: "",
};

function Navbar({
  daftarKategori,
  kategoriAktif,
  onPilihKategori,
  jumlahItem,
  totalHarga,
}) {
  return (
    <nav className="bg-white px-4 py-5 shadow-sm sm:px-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:px-5 lg:py-7">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <img
          src={logoKopi}
          alt="Logo Kedai Kopi Senja"
          className="h-11 w-11 rounded-2xl object-cover shadow-sm"
        />
        <div>
          <h1 className="font-judul text-lg font-bold leading-tight text-kopi-900">
            Kedai Kopi Senja
          </h1>
          <p className="text-xs text-kopi-300">Pesan sendiri, lebih cepat</p>
        </div>
      </div>

      {/* Jumlah item & total harga (selalu tampil di bagian atas) */}
      <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-1">
        <div className="rounded-2xl bg-krem-100 px-4 py-3">
          <p className="text-xs text-kopi-500">Jumlah Item</p>
          <p className="text-xl font-semibold text-kopi-700">{jumlahItem}</p>
        </div>
        <div className="rounded-2xl bg-kopi-600 px-4 py-3 text-white">
          <p className="text-xs text-krem-200">Total Harga</p>
          <p className="text-xl font-semibold">
            Rp {totalHarga.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      {/* Kategori */}
      <p className="mb-2 mt-6 hidden text-xs font-medium uppercase tracking-wider text-kopi-300 lg:block">
        Kategori
      </p>
      <ul className="mt-5 flex gap-2 overflow-x-auto lg:mt-0 lg:flex-col">
        {daftarKategori.map((kategori) => (
          <li key={kategori} className="flex-1 lg:flex-none">
            <button
              type="button"
              onClick={() => onPilihKategori(kategori)}
              className={
                kategori === kategoriAktif
                  ? "flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-kopi-600 px-4 py-3 text-sm font-medium text-white shadow-md lg:justify-start"
                  : "flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-medium text-kopi-500 transition hover:bg-krem-100 lg:justify-start"
              }
            >
              <span aria-hidden="true">{ikonKategori[kategori]}</span>
              {kategori}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-auto hidden rounded-2xl bg-krem-100 p-4 text-xs leading-relaxed text-kopi-500 lg:block">
        Pilih kategori, tekan <b>Tambah</b>, lalu isi nama dan nomor meja untuk
        mengirim pesanan.
      </p>
    </nav>
  );
}

export default Navbar;
