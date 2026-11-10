export default function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="border-b border-amber-200/70 bg-linear-to-b from-amber-100/70 to-amber-50/20">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
          Selamat datang di
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-amber-950 sm:text-5xl">
          {nama}
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-serif text-lg italic text-stone-600">
          &ldquo;{slogan}&rdquo;
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-stone-600 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1.5">
            <span aria-hidden="true">📍</span> {lokasi}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1.5">
            <span aria-hidden="true">🕰️</span> {jamBuka}
          </span>
        </div>
      </div>
    </section>
  );
}