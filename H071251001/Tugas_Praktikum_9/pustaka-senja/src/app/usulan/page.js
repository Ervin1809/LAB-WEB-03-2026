
"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UsulanPage() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("Fiksi");
  const [alasan, setAlasan] = useState("");
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nama.trim() || !judul.trim() || !kategori || !alasan.trim()) {
      setPesan("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }

    try {
      setLoading(true);
      setPesan("");

      // Mengirim data formulir ke API
      const response = await fetch("/api/usulan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama,
          judul,
          kategori,
          alasan,
        }),
      });

      const hasil = await response.json();

      if (!response.ok) {
        throw new Error(hasil.message || "Gagal mengirim usulan.");
      }

      setPesan("Terima kasih! Usulan buku berhasil disimpan.");

      // Mengosongkan formulir setelah berhasil
      setNama("");
      setJudul("");
      setKategori("Fiksi");
      setAlasan("");
    } catch (error) {
      console.error("Error mengirim usulan:", error);
      setPesan(error.message || "Terjadi kesalahan saat mengirim usulan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-4xl font-bold text-[#3d3028]">
            Usulkan Buku
          </h1>

          <p className="text-stone-600">
            Punya rekomendasi buku menarik? Bagikan kepada kami!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-white p-8 shadow-sm"
        >
          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Nama Pengusul
            </label>

            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama kamu"
              required
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] placeholder:text-stone-400 outline-none focus:border-amber-800"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Judul Buku
            </label>

            <input
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Masukkan judul buku"
              required
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] placeholder:text-stone-400 outline-none focus:border-amber-800"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Kategori Buku
            </label>

            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] outline-none focus:border-amber-800"
            >
              <option>Fiksi</option>
              <option>Pengembangan Diri</option>
              <option>Teknologi</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-[#3d3028]">
              Alasan Mengusulkan
            </label>

            <textarea
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              placeholder="Ceritakan alasan kamu mengusulkan buku ini"
              rows={4}
              required
              className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-[#3d3028] placeholder:text-stone-400 outline-none focus:border-amber-800"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-amber-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Mengirim..." : "Kirim Usulan"}
          </button>

          {pesan && (
            <p className="text-center font-medium text-amber-800">
              {pesan}
            </p>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}
