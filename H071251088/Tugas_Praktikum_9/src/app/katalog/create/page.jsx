import { tambahBuku } from '@/app/katalog/actions';
import Link from 'next/link';

export default function TambahBukuPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/katalog" className="inline-flex items-center text-slate-500 hover:text-slate-800 font-medium mb-6 transition-colors text-sm">
          &larr; Batal dan Kembali
        </Link>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Tambah Koleksi Baru</h1>
          <p className="text-slate-500 text-sm mb-8">Masukkan detail informasi buku ke dalam database Pustaka Senja.</p>
          
          <form action={tambahBuku} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Judul Buku <span className="text-rose-500">*</span></label>
                <input type="text" name="judul" required placeholder="Contoh: Laskar Pelangi" 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-slate-900" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Penulis <span className="text-rose-500">*</span></label>
                <input type="text" name="penulis" required placeholder="Nama penulis" 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-slate-900" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Kategori <span className="text-rose-500">*</span></label>
                <input type="text" name="kategori" required placeholder="Fiksi, Sains, dll." 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-slate-900" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tahun Terbit <span className="text-rose-500">*</span></label>
                <input type="number" name="tahun" required placeholder="2024" 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-slate-900" />
              </div>
            </div>
            
            <div className="pt-2">
              <label className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                <input type="checkbox" name="tersedia" defaultChecked className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500" />
                <div>
                  <span className="block text-sm font-medium text-slate-900">Buku Tersedia Saat Ini</span>
                  <span className="block text-xs text-slate-500">Centang jika buku fisik siap dipinjam oleh pembaca.</span>
                </div>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Sinopsis Singkat</label>
              <textarea name="sinopsis" rows="4" placeholder="Tuliskan ringkasan cerita atau isi buku..." 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-slate-900 resize-y"></textarea>
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <Link href="/katalog" className="px-5 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                Batal
              </Link>
              <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all shadow-sm">
                Simpan ke Database
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
}