
import Link from "next/link";

function Hero({ namaPerpustakaan, slogan, deskripsi, lokasi, jamOperasional }) {
  return (
    <section className="bg-[#F8F3EF] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[#80636A] mb-3">
          Selamat datang di
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#5A2732] mb-4">
          {namaPerpustakaan}
        </h1>

        <h2 className="text-xl text-[#292529] mb-4">
          {slogan}
        </h2>

        <p className="text-[#80636A] max-w-2xl mb-6">
          {deskripsi}
        </p>

        <div className="text-sm text-[#80636A] mb-8">
          <p>📍 {lokasi}</p>
          <p>🕒 {jamOperasional}</p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/katalog"
            className="bg-[#5A2732] text-white px-6 py-3 rounded-lg hover:bg-[#713542] transition"
          >
            Lihat Katalog
          </Link>

          <Link
            href="/usulan"
            className="border border-[#5A2732] text-[#5A2732] px-6 py-3 rounded-lg hover:bg-[#D99AA5] transition"
          >
            Usulkan Buku
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
