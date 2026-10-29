import { useState } from "react";

function FormPesan({ jumlahItem, onKirim }) {
  // Controlled component: nilai input dikendalikan state.
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [pesanError, setPesanError] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const daftarError = [];
    if (nama.trim() === "") {
      daftarError.push("Nama pelanggan wajib diisi.");
    }
    if (meja === "" || Number(meja) < 1) {
      daftarError.push("Nomor meja wajib diisi dengan angka 1 atau lebih.");
    }
    if (jumlahItem === 0 && (meja > 10 && meja <= 0) ) {
      daftarError.push("Pesanan masih kosong dan nomor meja tidak valid.");
    } else if (jumlahItem === 0) {
      daftarError.push("Pesanan masih kosong.");
    } else if (meja > 10 || meja <= 0) {
      daftarError.push("Nomor meja tidak valid.");
    }

    if (daftarError.length > 0) {
      setPesanError(daftarError);
      return;
    }

    onKirim({ nama: nama.trim(), meja: meja });
    setNama("");
    setMeja("");
    setPesanError([]);
  }

  return (
    <section className="rounded-3xl bg-white p-5 shadow-md shadow-kopi-900/5">
      <h2 className="font-judul text-xl font-bold text-kopi-900">
        Data Pemesan
      </h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4" noValidate>
        <div>
          <label
            htmlFor="nama"
            className="mb-1 block text-sm font-medium text-kopi-600"
          >
            Nama pelanggan
          </label>
          <input
            id="nama"
            type="text"
            placeholder="Contoh: Dimas"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full rounded-xl border border-krem-300 bg-krem-50 px-4 py-2.5 text-sm outline-none transition placeholder:text-kopi-300 focus:border-kopi-500 focus:ring-2 focus:ring-kopi-300/40"
          />
        </div>

        <div>
          <label
            htmlFor="meja"
            className="mb-1 block text-sm font-medium text-kopi-600"
          >
            Nomor meja
          </label>
          <input
            id="meja"
            type="number"
            min="1"
            placeholder="Contoh: 5"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            className="w-full rounded-xl border border-krem-300 bg-krem-50 px-4 py-2.5 text-sm outline-none transition placeholder:text-kopi-300 focus:border-kopi-500 focus:ring-2 focus:ring-kopi-300/40"
          />
        </div>

        {pesanError.length > 0 && (
          <ul
            role="alert"
            className="list-disc space-y-1 rounded-2xl bg-red-50 py-3 pl-8 pr-4 text-sm text-red-700"
          >
            {pesanError.map((pesan) => (
              <li key={pesan}>{pesan}</li>
            ))}
          </ul>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-kopi-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-kopi-700"
        >
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;
