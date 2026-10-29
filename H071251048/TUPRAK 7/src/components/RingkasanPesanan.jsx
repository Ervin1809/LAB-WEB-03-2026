function RingkasanPesanan({ pesanan, jumlahPesanan, totalHarga, ubahJumlah }) {
  return (
    <section className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-stone-900">Ringkasan Pesanan</h2>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-800">{jumlahPesanan}</span>
      </div>
      {pesanan.length === 0 ? (
        <div className="rounded-xl bg-stone-50 px-4 py-8 text-center">
          <p className="text-3xl">🛍️</p>
          <p className="mt-2 font-semibold text-stone-700">Belum ada pesanan</p>
          <p className="mt-1 text-sm text-stone-500">Tambahkan menu dari daftar.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {pesanan.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div className="min-w-0">
                <p className="truncate font-semibold">{item.nama}</p>
                <p className="mt-1 text-sm text-stone-500">Rp {item.harga.toLocaleString("id-ID")}</p>
                <p className="mt-1 text-sm font-semibold text-orange-800">Subtotal: Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => ubahJumlah(item.id, -1)} aria-label={`Kurangi ${item.nama}`} className="h-8 w-8 rounded-lg border border-orange-200 font-bold text-orange-800 hover:bg-orange-50">−</button>
                <span className="w-5 text-center font-bold">{item.jumlah}</span>
                <button type="button" onClick={() => ubahJumlah(item.id, 1)} aria-label={`Tambah ${item.nama}`} className="h-8 w-8 rounded-lg bg-orange-800 font-bold text-white hover:bg-orange-900">+</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 flex items-center justify-between border-t border-dashed border-orange-200 pt-4">
        <span className="text-sm text-stone-600">Total harga</span>
        <span className="text-xl font-bold text-orange-800">Rp {totalHarga.toLocaleString("id-ID")}</span>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
