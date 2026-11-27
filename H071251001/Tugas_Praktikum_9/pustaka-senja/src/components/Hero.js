
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-800">
        Selamat Datang di
      </p>

      <h1 className="mb-6 text-5xl font-bold text-[#3d3028] md:text-7xl">
        Pustaka Senja
      </h1>

      <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-600">
        Temukan dunia baru melalui setiap halaman buku.
        Jelajahi koleksi bacaan, temukan inspirasi, dan
        nikmati pengalaman membaca bersama Pustaka Senja.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/katalog"
          className="rounded-lg bg-amber-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-900"
        >
          Jelajahi Katalog
        </Link>

        <Link
          href="/usulan"
          className="rounded-lg border border-amber-800 px-6 py-3 font-semibold text-amber-900 transition hover:bg-amber-100"
        >
          Usulkan Buku
        </Link>
      </div>
    </section>
  );
}
