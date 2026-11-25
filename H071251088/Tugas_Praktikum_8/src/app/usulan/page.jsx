"use client";
import { useState } from "react";

export default function Usulan() {
  const [formData, setFormData] = useState({ nama: "", judul: "", kategori: "", alasan: "" });
  const [error, setError] = useState("");
  const [usulanList, setUsulanList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.nama.trim() || !formData.judul.trim() || !formData.kategori.trim() || !formData.alasan.trim()) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    setUsulanList([...usulanList, formData]);
    setFormData({ nama: "", judul: "", kategori: "", alasan: "" });
    alert("Usulan berhasil dikirim!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Usulkan Buku Baru</h2>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border mb-10">
        {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">{error}</div>}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nama Pengusul</label>
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Nama Anda" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Judul Buku</label>
          <input type="text" name="judul" value={formData.judul} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Judul buku yang diusulkan" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Kategori</label>
          <select name="kategori" value={formData.kategori} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">-- Pilih Kategori --</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Alasan Usulan</label>
          <textarea name="alasan" value={formData.alasan} onChange={handleChange} className="w-full p-2 border rounded h-24" placeholder="Mengapa buku ini bagus?" />
        </div>
        
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full font-medium">Kirim Usulan</button>
      </form>

      {usulanList.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4">Usulan Terkirim (Sesi Ini)</h3>
          <div className="space-y-4">
            {usulanList.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded border">
                <p className="font-bold text-gray-800">{item.judul} <span className="font-normal text-gray-500">({item.kategori})</span></p>
                <p className="text-sm text-gray-600 mt-1">Diusulkan oleh: {item.nama}</p>
                <p className="text-sm mt-2 italic">"{item.alasan}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}