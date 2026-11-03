function Hero({ nama, deskripsi, lokasi, jamBuka }) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-amber-700 to-orange-500 px-8 py-14 text-white shadow-lg">
      <p className="mb-2 text-sm uppercase tracking-widest text-amber-100">
        Ruang Baca Komunitas
      </p>
      <h1 className="text-4xl font-bold md:text-5xl">{nama}</h1>
      <p className="mt-4 max-w-2xl text-lg text-amber-50">{deskripsi}</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full bg-white/20 px-4 py-2"> {lokasi}</span>
        <span className="rounded-full bg-white/20 px-4 py-2"> {jamBuka}</span>
      </div>
    </section>
  );
}

export default Hero;
