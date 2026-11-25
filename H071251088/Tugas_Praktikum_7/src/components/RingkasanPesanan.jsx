export default function RingkasanPesanan({ pesanan, totalHarga }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Ringkasan Pesanan</h2>
      {pesanan.length === 0 ? (
        <p className="text-gray-500 italic text-center py-4">Belum ada pesanan.</p>
      ) : (
        <div className="flex flex-col gap-3 mb-4 max-h-60 overflow-y-auto">
          {pesanan.map(item => (
            <div key={item.id} className="flex justify-between items-center text-sm">
              <div>
                <p className="font-semibold text-gray-700">{item.nama}</p>
                <p className="text-gray-500">{item.qty} x Rp {item.harga.toLocaleString('id-ID')}</p>
              </div>
              <p className="font-bold text-gray-800">Rp {(item.qty * item.harga).toLocaleString('id-ID')}</p>
            </div>
          ))}
        </div>
      )}
      <div className="border-t pt-4 mt-2 flex justify-between items-center text-lg font-bold text-gray-800">
        <span>Total</span>
        <span>Rp {totalHarga.toLocaleString('id-ID')}</span>
      </div>
    </div>
  );
}