
export default function Footer() {
  return (
    <footer className="mt-12 bg-[#3d3028] px-6 py-8 text-center text-white">
      <h2 className="mb-2 text-xl font-bold">
        Pustaka Senja
      </h2>

      <p className="text-sm text-stone-300">
        Temukan dunia baru melalui setiap halaman buku.
      </p>

      <div className="mt-5 border-t border-stone-600 pt-5">
        <p className="text-sm text-stone-300">
          © {new Date().getFullYear()} Pustaka Senja. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
