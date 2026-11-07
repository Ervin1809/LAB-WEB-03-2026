function FormPesan({ nama, setNama, nomorMeja, setNomorMeja, kirimPesanan, pesanError, ucapan }) {
  return (
    <section className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-stone-900">Data Pemesan</h2>
      <p className="mb-5 mt-1 text-sm text-stone-500">Isi data sebelum mengirim pesanan.</p>
      {ucapan && (
        <div role="status" className="mb-4 rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-800">
          {ucapan}
        </div>
      )}
      {pesanError && (
        <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {pesanError}
        </div>
      )}
      <form onSubmit={kirimPesanan} className="space-y-4">
        <div>
          <label htmlFor="nama" className="mb-1.5 block text-sm font-semibold text-stone-700">Nama</label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
            placeholder="Masukkan nama"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>
        <div>
          <label htmlFor="nomorMeja" className="mb-1.5 block text-sm font-semibold text-stone-700">Nomor meja</label>
          <input
            id="nomorMeja"
            type="text"
            inputMode="numeric"
            value={nomorMeja}
            onChange={(event) => setNomorMeja(event.target.value)}
            placeholder="Contoh: 4"
            className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>
        <button type="submit" className="w-full rounded-xl bg-orange-800 px-4 py-3 font-bold text-white shadow-sm transition hover:bg-orange-900">
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;
