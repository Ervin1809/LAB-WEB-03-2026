export default function Navbar({ totalItem, totalHarga }) {
  return (
    <nav className="bg-amber-800 text-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Kedai Kopi Senja</h1>
        <div className="bg-amber-700 px-4 py-2 rounded-lg font-semibold">
          🛒 {totalItem} Item | Rp {totalHarga.toLocaleString('id-ID')}
        </div>
      </div>
    </nav>
  );
}