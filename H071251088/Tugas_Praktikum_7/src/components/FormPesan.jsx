import { useState } from 'react';

export default function FormPesan({ pesanan, resetPesanan }) {
  const [nama, setNama] = useState('');
  const [meja, setMeja] = useState('');
  const [error, setError] = useState('');
  const [sukses, setSukses] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSukses('');

    if (pesanan.length === 0) {
      setError('Pesanan kosong! Silakan pilih menu terlebih dahulu.');
      return;
    }
    if (!nama.trim() || !meja.trim()) {
      setError('Nama dan nomor meja wajib diisi!');
      return;
    }

    setSukses(`Terima kasih, ${nama}! Pesanan untuk Meja ${meja} berhasil dikirim.`);
    setNama('');
    setMeja('');
    resetPesanan();
    
    setTimeout(() => setSukses(''), 5000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Selesaikan Pesanan</h2>
      
      {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm font-medium">{error}</div>}
      {sukses && <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm font-medium">{sukses}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 mb-1">Nama</label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="meja" className="block text-sm font-semibold text-gray-700 mb-1">Nomor Meja</label>
          <input
            type="text"
            id="meja"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-800 text-white font-bold py-3 rounded-lg mt-2 hover:bg-amber-900 transition-colors"
        >
          Kirim Pesanan
        </button>
      </form>
    </div>
  );
}