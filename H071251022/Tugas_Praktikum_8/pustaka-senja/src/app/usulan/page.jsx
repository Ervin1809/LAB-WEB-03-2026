"use client";

import { useState } from "react";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const formAwal = { nama: "", judul: "", kategori: "", alasan: "" };

export default function UsulanPage() {
  const [form, setForm] = useState(formAwal);
  const [pesan, setPesan] = useState({ tipe: "", teks: "" });
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const bersih = {
      nama: form.nama.trim(),
      judul: form.judul.trim(),
      kategori: form.kategori.trim(),
      alasan: form.alasan.trim(),
    };

    if (!bersih.nama || !bersih.judul || !bersih.kategori || !bersih.alasan) {
      setPesan({
        tipe: "error",
        teks: "Semua kolom wajib diisi sebelum usulan dikirim.",
      });
      return;
    }

    setDaftarUsulan([{ id: crypto.randomUUID(), ...bersih }, ...daftarUsulan]);
    setPesan({ tipe: "sukses", teks: "Usulan berhasil dikirim. Terima kasih!" });
    setForm(formAwal);
  }

  const inputClass =
    "w-full rounded-lg border border-amber-200 bg-white px-4 py-2 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200";

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold text-amber-900">Usulan Buku</h1>
      <p className="mt-1 text-stone-500">
        Ada buku yang ingin dihadirkan di Pustaka Senja? Usulkan di sini.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="nama" className="mb-1 block text-sm font-medium">
            Nama Pengusul
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            value={form.nama}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="judul" className="mb-1 block text-sm font-medium">
            Judul Buku yang Diusulkan
          </label>
          <input
            id="judul"
            name="judul"
            type="text"
            value={form.judul}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="kategori" className="mb-1 block text-sm font-medium">
            Kategori
          </label>
          <select
            id="kategori"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">-- Pilih kategori --</option>
            {daftarKategori.map((kategori) => (
              <option key={kategori} value={kategori}>
                {kategori}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="alasan" className="mb-1 block text-sm font-medium">
            Alasan Usulan
          </label>
          <textarea
            id="alasan"
            name="alasan"
            rows={4}
            value={form.alasan}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {pesan.teks && (
          <p
            className={
              pesan.tipe === "error"
                ? "rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700"
                : "rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700"
            }
          >
            {pesan.teks}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-amber-600 px-6 py-2 font-semibold text-white transition hover:bg-amber-700"
        >
          Kirim Usulan
        </button>
      </form>

      {daftarUsulan.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-amber-900">
            Usulan yang Baru Dikirim
          </h2>
          <ul className="mt-4 space-y-3">
            {daftarUsulan.map((usulan) => (
              <li
                key={usulan.id}
                className="rounded-xl border border-amber-100 bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-stone-800">{usulan.judul}</p>
                <p className="text-sm text-amber-700">{usulan.kategori}</p>
                <p className="mt-1 text-sm text-stone-600">
                  Oleh {usulan.nama} — {usulan.alasan}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
