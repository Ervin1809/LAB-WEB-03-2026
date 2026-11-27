
"use client";

import { useState } from "react";

export default function Usulan() {
  const [nama, setNama] = useState("");
  const [judulBuku, setJudulBuku] = useState("");
  const [kategori, setKategori] = useState("Teknologi");
  const [alasan, setAlasan] = useState("");

  const [pesan, setPesan] = useState("");
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      nama.trim() === "" ||
      judulBuku.trim() === "" ||
      alasan.trim() === ""
    ) {
      setPesan("Semua kolom wajib diisi.");
      return;
    }

    const usulanBaru = {
      nama,
      judulBuku,
      kategori,
      alasan,
    };

    setDaftarUsulan([...daftarUsulan, usulanBaru]);

    setPesan("Usulan buku berhasil dikirim!");

    setNama("");
    setJudulBuku("");
    setKategori("Teknologi");
    setAlasan("");
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#5A2732] mb-3">
          Usulan Buku
        </h1>

        <p className="text-[#80636A]">
          Berikan usulan buku yang ingin kamu temukan di Pustaka Senja.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#F8F3EF] rounded-xl p-6 space-y-5"
      >
        <div>
          <label className="block text-sm font-semibold text-[#5A2732] mb-2">
            Nama Pengusul
          </label>

          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama kamu"
            className="w-full border border-[#E8DDD6] rounded-lg px-4 py-3 bg-[#FFFDFC] outline-none focus:border-[#5A2732]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#5A2732] mb-2">
            Judul Buku
          </label>

          <input
            type="text"
            value={judulBuku}
            onChange={(e) => setJudulBuku(e.target.value)}
            placeholder="Masukkan judul buku"
            className="w-full border border-[#E8DDD6] rounded-lg px-4 py-3 bg-[#FFFDFC] outline-none focus:border-[#5A2732]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#5A2732] mb-2">
            Kategori Buku
          </label>

          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="w-full border border-[#E8DDD6] rounded-lg px-4 py-3 bg-[#FFFDFC] outline-none focus:border-[#5A2732]"
          >
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#5A2732] mb-2">
            Alasan Usulan
          </label>

          <textarea
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Mengapa buku ini ingin kamu usulkan?"
            rows={4}
            className="w-full border border-[#E8DDD6] rounded-lg px-4 py-3 bg-[#FFFDFC] outline-none focus:border-[#5A2732]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#5A2732] text-white px-6 py-3 rounded-lg hover:bg-[#713542] transition"
        >
          Kirim Usulan
        </button>

        {pesan && (
          <p className="text-sm text-[#5A2732]">
            {pesan}
          </p>
        )}
      </form>

      {daftarUsulan.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-[#5A2732] mb-4">
            Usulan yang Telah Dikirim
          </h2>

          <div className="space-y-4">
            {daftarUsulan.map((usulan, index) => (
              <div
                key={index}
                className="bg-[#FFFDFC] border border-[#E8DDD6] rounded-xl p-5"
              >
                <h3 className="font-bold text-[#5A2732]">
                  {usulan.judulBuku}
                </h3>

                <p className="text-sm text-[#80636A]">
                  Pengusul: {usulan.nama}
                </p>

                <p className="text-sm text-[#80636A]">
                  Kategori: {usulan.kategori}
                </p>

                <p className="text-sm text-[#292529] mt-2">
                  Alasan: {usulan.alasan}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
