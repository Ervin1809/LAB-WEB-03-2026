function FormPesan({
  nama,
  setNama,
  nomorMeja,
  setNomorMeja,
  onSubmit,
  pesanStatus,
}) {
  return (
    <section className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">Data Pemesan</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="nama" className="mb-1 block font-medium">
            Nama pelanggan
          </label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama"
            required
            className="w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-amber-800"
          />
        </div>

        <div>
          <label htmlFor="nomorMeja" className="mb-1 block font-medium">
            Nomor meja
          </label>
          <input
            id="nomorMeja"
            type="number"
            min="1"
            step="1"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            placeholder="Masukkan nomor meja"
            required
            className="w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-amber-800"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-amber-900 px-4 py-3 font-semibold text-white hover:bg-amber-800"
        >
          Buat Pesanan
        </button>
      </form>

      {pesanStatus && (
        <p
          role="status"
          className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900"
        >
          {pesanStatus}
        </p>
      )}
    </section>
  )
}

export default FormPesan