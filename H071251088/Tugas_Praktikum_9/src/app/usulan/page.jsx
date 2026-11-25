"use client";

import { useState } from "react";

export default function UsulanPage() {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [pesan, setPesan] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!judul || !penulis) {
      setPesan("Judul dan penulis wajib diisi.");
      return;
    }

    setPesan(
      `Usulan "${judul}" oleh ${penulis} berhasil dikirim.`
    );

    setJudul("");
    setPenulis("");
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">

      <div className="bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold mb-2">
          Usulan Buku
        </h1>

        <p className="text-gray-600 mb-8">
          Berikan rekomendasi buku untuk koleksi Pustaka Senja.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block font-medium mb-2">
              Judul Buku
            </label>

            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan judul buku"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Penulis
            </label>

            <input
              type="text"
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan nama penulis"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Kirim Usulan
          </button>

        </form>

        {pesan && (
          <div className="mt-6 bg-indigo-50 text-indigo-700 p-4 rounded-lg">
            {pesan}
          </div>
        )}

      </div>

    </div>
  );
}