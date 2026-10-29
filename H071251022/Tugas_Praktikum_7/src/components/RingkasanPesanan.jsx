function RingkasanPesanan({
  pesanan,
  jumlahItem,
  totalHarga,
  terkirim,
  onTambah,
  onKurang,
}) {
  return (
    <section className="rounded-3xl bg-white p-5 shadow-md shadow-kopi-900/5">
      <h2 className="font-judul text-xl font-bold text-kopi-900">
        Ringkasan Pesanan
      </h2>

      {terkirim && (
        <div
          role="status"
          className="mt-4 rounded-2xl bg-green-50 p-4 text-sm text-green-800"
        >
          <p className="font-semibold">Terima kasih, {terkirim.nama}! 🎉</p>
          <p className="mt-1">
            Pesanan untuk meja {terkirim.meja} sudah kami terima dan sedang
            disiapkan.
          </p>
        </div>
      )}

      {pesanan.length === 0 ? (
        <p className="mt-4 rounded-2xl bg-krem-100 p-5 text-center text-sm text-kopi-500">
          Belum ada pesanan. Tekan <b>Tambah</b> pada menu pilihanmu.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-krem-200">
          {pesanan.map((item) => (
            <li key={item.id} className="flex items-center gap-3 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-kopi-900">
                  {item.nama}
                </p>
                <p className="text-xs text-kopi-300">
                  Rp {item.harga.toLocaleString("id-ID")} × {item.jumlah}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onKurang(item.id)}
                  aria-label={"Kurangi " + item.nama}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-krem-100 text-kopi-600 transition hover:bg-krem-200"
                >
                  −
                </button>
                <span className="w-5 text-center text-sm font-semibold">
                  {item.jumlah}
                </span>
                <button
                  type="button"
                  onClick={() => onTambah(item.id)}
                  aria-label={"Tambah " + item.nama}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-kopi-600 text-white transition hover:bg-kopi-700"
                >
                  +
                </button>
              </div>
              <p className="w-24 text-right text-sm font-semibold text-kopi-700">
                Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 space-y-1 rounded-2xl bg-krem-100 p-4 text-sm">
        <div className="flex justify-between text-kopi-500">
          <span>Jumlah item</span>
          <span className="font-semibold">{jumlahItem}</span>
        </div>
        <div className="flex justify-between text-base font-semibold text-kopi-900">
          <span>Total</span>
          <span>Rp {totalHarga.toLocaleString("id-ID")}</span>
        </div>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
