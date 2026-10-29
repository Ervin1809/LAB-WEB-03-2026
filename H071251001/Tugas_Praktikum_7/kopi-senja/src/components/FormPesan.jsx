import { useState } from "react";

function FormPesan({ pesanan, onPesanBerhasil }) {
  const [nama, setNama] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [feedback, setFeedback] = useState("");

 function handleSubmit(event) {
  event.preventDefault();

  if (nama.trim() === "" || nomorMeja.trim() === "") {
    setFeedback("Nama dan nomor meja harus diisi.");
    return;
  }

  if (nama.trim().length < 3) {
    setFeedback("Nama harus minimal 3 karakter.");
    return;
  }

  if (Number(nomorMeja) <= 0) {
    setFeedback("Nomor meja harus lebih dari 0.");
    return;
  }

  if (pesanan.length === 0) {
    setFeedback("Pesanan masih kosong.");
    return;
  }

  setFeedback(
    `Terima kasih, ${nama}! Pesanan untuk meja ${nomorMeja} sudah diterima.`
  );

  setNama("");
  setNomorMeja("");
  onPesanBerhasil();
}

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-5 mt-6"
    >
      <h2 className="text-xl font-bold text-amber-950">
        Data Pemesan
      </h2>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nama
        </label>

        <input
          type="text"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
          placeholder="Masukkan nama"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Nomor Meja
        </label>

        <input
          type="number"
          value={nomorMeja}
          onChange={(event) => setNomorMeja(event.target.value)}
          placeholder="Masukkan nomor meja"
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-700 text-white font-semibold py-2 rounded-lg mt-5"
      >
        Pesan Sekarang
      </button>

      {feedback && (
        <p className="mt-4 text-sm font-semibold text-amber-800">
          {feedback}
        </p>
      )}
    </form>
  );
}

export default FormPesan;