import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-xl font-bold text-indigo-700">
          Pustaka Senja
        </Link>

        <div className="flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-600"
          >
            Beranda
          </Link>

          <Link
            href="/katalog"
            className="text-gray-700 hover:text-indigo-600"
          >
            Katalog
          </Link>

          <Link
            href="/usulan"
            className="text-gray-700 hover:text-indigo-600"
          >
            Usulan Buku
          </Link>
        </div>

      </div>
    </nav>
  );
}