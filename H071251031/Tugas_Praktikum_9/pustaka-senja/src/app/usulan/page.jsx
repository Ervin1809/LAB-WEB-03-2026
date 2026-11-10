"use client";

import { useState } from "react";

const kategoriOptions = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const formAwal = {
  nama: "",
  judul: "",
  kategori: kategoriOptions[0],
  alasan: "",
};

const inputClass =
  "mt-1 w-full rounded-md border border-amber-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200";

export default function UsulanPage() {
  const [form, setForm] = useState(formAwal);
  const [error, setError] = useState("");
  const [sukses, setSukses] = useState("");
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nama: form.nama.trim(),
      judul: form.judul.trim(),
      kategori: form.kategori,
      alasan: form.alasan.trim(),
    };

    if (!data.nama || !data.judul || !data.kategori || !data.alasan) {
      setSukses("");
      setError("Semua kolom wajib diisi. Mohon lengkapi formulir terlebih dahulu.");
      return;
    }

    setDaftarUsulan((prev) => [...prev, { id: Date.now(), ...data }]);
    setError("");
    setSukses(`Terima kasih, ${data.nama}! Usulan "${data.judul}" berhasil dikirim.`);
    setForm(formAwal);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-amber-950">
        Usulan Buku
      </h1>
      <p className="mt-2 text-stone-600">
        Ada buku yang ingin kamu temukan di rak kami? Usulkan di sini.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 space-y-4 rounded-lg border border-amber-200/80 bg-white p-6 shadow-sm"
      >
        {error && (
          <div
            role="alert"
            className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}
        {sukses && (
          <div
            role="status"
            className="rounded-md border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          >
            {sukses}
          </div>
        )}

        <div>
          <label htmlFor="nama" className="text-sm font-medium text-stone-700">
            Nama Pengusul
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama lengkap"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="judul" className="text-sm font-medium text-stone-700">
            Judul Buku
          </label>
          <input
            id="judul"
            name="judul"
            type="text"
            value={form.judul}
            onChange={handleChange}
            placeholder="Judul buku yang diusulkan"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="kategori" className="text-sm font-medium text-stone-700">
            Kategori
          </label>
          <select
            id="kategori"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className={inputClass}
          >
            {kategoriOptions.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="alasan" className="text-sm font-medium text-stone-700">
            Alasan Usulan
          </label>
          <textarea
            id="alasan"
            name="alasan"
            rows={4}
            value={form.alasan}
            onChange={handleChange}
            placeholder="Mengapa buku ini layak ada di perpustakaan?"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-amber-800 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-900"
        >
          Kirim Usulan
        </button>
      </form>

      <div className="mt-10">
        <h2 className="font-serif text-xl font-bold text-amber-950">
          Daftar Usulan Sesi Ini ({daftarUsulan.length})
        </h2>

        {daftarUsulan.length === 0 ? (
          <p className="mt-3 rounded-md border border-dashed border-amber-300 bg-amber-50/50 px-4 py-6 text-center text-sm text-stone-500">
            Belum ada usulan. Jadilah yang pertama!
          </p>
        ) : (
          <div className="mt-3 overflow-x-auto rounded-lg border border-amber-200/80 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-amber-100/70 text-amber-900">
                <tr>
                  <th className="px-4 py-2 font-semibold">No</th>
                  <th className="px-4 py-2 font-semibold">Pengusul</th>
                  <th className="px-4 py-2 font-semibold">Judul</th>
                  <th className="px-4 py-2 font-semibold">Kategori</th>
                  <th className="px-4 py-2 font-semibold">Alasan</th>
                </tr>
              </thead>
              <tbody>
                {daftarUsulan.map((u, index) => (
                  <tr key={u.id} className="border-t border-amber-100 align-top">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{u.nama}</td>
                    <td className="px-4 py-2 font-medium">{u.judul}</td>
                    <td className="px-4 py-2">{u.kategori}</td>
                    <td className="px-4 py-2 text-stone-600">{u.alasan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}