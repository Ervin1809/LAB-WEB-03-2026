
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#3d3028]">
      <Navbar />

      <Hero />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-20 text-center md:grid-cols-3">
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-amber-800">9</h2>
          <p className="mt-2 text-stone-600">Total Buku</p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-amber-800">6</h2>
          <p className="mt-2 text-stone-600">Buku Tersedia</p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-amber-800">3</h2>
          <p className="mt-2 text-stone-600">Buku Dipinjam</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
