function Navbar({ jumlahPesanan, totalHarga }) {
  return (
    <header className="sticky top-0 z-10 border-b border-orange-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-2xl">☕</div>
          <div>
            <p className="font-bold text-orange-950">Kopi Senja</p>
            <p className="text-xs text-stone-500">Pesan santai, nikmati senja</p>
          </div>
        </div>
        <div className="rounded-2xl bg-orange-50 px-4 py-2 text-right">
          <p className="text-xs text-stone-600">Keranjang · {jumlahPesanan} item</p>
          <p className="font-bold text-orange-800">Rp {totalHarga.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
