function RingkasanPesanan({
  daftarMenu,
  pesanan,
  totalItem,
  totalHarga,
}) {
  const menuDipesan = daftarMenu.filter(
    (menu) => (pesanan[menu.id] || 0) > 0
  )

  return (
    <section className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Ringkasan Pesanan</h2>

      {menuDipesan.length === 0 ? (
        <p className="text-stone-500">Belum ada menu yang dipilih.</p>
      ) : (
        <div className="space-y-3">
          {menuDipesan.map((menu) => (
            <div
              key={menu.id}
              className="flex justify-between gap-4 border-b border-stone-100 pb-3"
            >
              <div>
                <p className="font-medium">{menu.nama}</p>
                <p className="text-sm text-stone-500">
                  {pesanan[menu.id]} × Rp{menu.harga.toLocaleString('id-ID')}
                </p>
              </div>

              <p className="font-semibold">
                Rp
                {(menu.harga * pesanan[menu.id]).toLocaleString('id-ID')}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex justify-between border-t border-stone-200 pt-4 font-bold">
        <span>{totalItem} item</span>
        <span>Rp{totalHarga.toLocaleString('id-ID')}</span>
      </div>
    </section>
  )
}

export default RingkasanPesanan