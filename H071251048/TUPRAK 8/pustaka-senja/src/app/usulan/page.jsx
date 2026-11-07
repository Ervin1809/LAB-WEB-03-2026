"use client";

import { useState } from "react";

export default function UsulanPage() {
  const [namaPengusul, setNamaPengusul] = useState("");
  const [judulBuku, setJudulBuku] = useState("");
  const [kategori, setKategori] = useState("Teknologi");
  const [alasan, setAlasan] = useState("");
  const [pesan, setPesan] = useState("");
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      namaPengusul.trim() === "" ||
      judulBuku.trim() === "" ||
      kategori.trim() === "" ||
      alasan.trim() === ""
    ) {
      setPesan("Semua kolom wajib diisi sebelum mengirim usulan.");
      return;
    }

    const usulanBaru = {
      id: judulBuku + daftarUsulan.length,
      namaPengusul: namaPengusul.trim(),
      judulBuku: judulBuku.trim(),
      kategori: kategori,
      alasan: alasan.trim()
    };

    setDaftarUsulan([...daftarUsulan, usulanBaru]);
    setPesan("Usulan buku berhasil dikirim. Terima kasih!");
    setNamaPengusul("");
    setJudulBuku("");
    setKategori("Teknologi");
    setAlasan("");
  }

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Usulan Buku</h1>
        <p className="mt-2 text-stone-400">Bantu Pustaka Senja menambah koleksi bacaan.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-stone-800 bg-stone-900 p-6">
        <div>
          <label className="mb-1 block text-sm text-stone-300">Nama Pengusul</label>
          <input
            type="text"
            value={namaPengusul}
            onChange={(e) => setNamaPengusul(e.target.value)}
            placeholder="Masukkan nama"
            className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-2 outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-stone-300">Judul Buku yang Diusulkan</label>
          <input
            type="text"
            value={judulBuku}
            onChange={(e) => setJudulBuku(e.target.value)}
            placeholder="Masukkan judul buku"
            className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-2 outline-none focus:border-amber-400"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-stone-300">Kategori</label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-2 outline-none focus:border-amber-400"
          >
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm text-stone-300">Alasan Usulan</label>
          <textarea
            rows={4}
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Jelaskan alasan mengusulkan buku ini"
            className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-2 outline-none focus:border-amber-400"
          />
        </div>

        <button type="submit" className="w-full rounded-lg bg-amber-500 py-3 font-semibold text-stone-950 hover:bg-amber-400">
          Kirim Usulan
        </button>

        {pesan !== "" && <p className="rounded-lg bg-stone-800 p-3 text-sm text-amber-300">{pesan}</p>}
      </form>

      {daftarUsulan.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold">Usulan yang Baru Dikirim</h2>
          <div className="space-y-3">
            {daftarUsulan.map((usulan) => (
              <div key={usulan.id} className="rounded-xl border border-stone-800 bg-stone-900 p-4">
                <h3 className="font-semibold">{usulan.judulBuku}</h3>
                <p className="text-sm text-amber-300">{usulan.kategori} · Diusulkan oleh {usulan.namaPengusul}</p>
                <p className="mt-2 text-sm text-stone-400">{usulan.alasan}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
