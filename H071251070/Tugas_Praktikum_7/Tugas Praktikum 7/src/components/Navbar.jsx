function Navbar({ totalItem, totalHarga }) {
  return (
    <header className="bg-amber-900 px-4 py-5 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Kedai Kopi Senja</h1>
          <p className="text-sm text-amber-200">Teman santai setiap hari</p>
        </div>

        <div className="rounded-lg bg-amber-800 px-4 py-2">
          <p className="text-sm">Total Pesanan: {totalItem} item</p>
          <p className="font-bold">
            Rp{totalHarga.toLocaleString('id-ID')}
          </p>
        </div>
      </div>
    </header>
  )
}

export default Navbar