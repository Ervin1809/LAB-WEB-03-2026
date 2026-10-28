function RingkasanPesanan({ pesanan, onHapus }) {
  const totalHarga = pesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );

  const totalJumlah = pesanan.reduce(
    (total, item) => total + item.jumlah,
    0
  );

  return (
    <aside className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-xl font-bold text-amber-950">
        Ringkasan Pesanan
      </h2>

      <p className="text-gray-600 mt-1">
        Total menu: {totalJumlah}
      </p>

      {pesanan.length === 0 ? (
        <p className="text-gray-500 mt-5">
          Belum ada pesanan.
        </p>
      ) : (
        <div className="mt-5 space-y-4">
          {pesanan.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-amber-950">
                    {item.nama}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {item.jumlah} x Rp{" "}
                    {item.harga.toLocaleString("id-ID")}
                  </p>

                  <p className="font-semibold mt-1">
                    Rp{" "}
                    {(item.harga * item.jumlah).toLocaleString(
                      "id-ID"
                    )}
                  </p>
                </div>

                <button
                  onClick={() => onHapus(item.id)}
                  className="text-red-600 text-sm font-semibold"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between font-bold text-lg pt-2">
            <span>Total</span>

            <span className="text-amber-900">
              Rp {totalHarga.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}

export default RingkasanPesanan;