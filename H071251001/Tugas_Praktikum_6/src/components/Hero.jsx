function Hero() {
  const handleClick = () => {
    console.log('Halo! Terima kasih sudah mengunjungi portofolio saya.')
  }

  return (
    <section id="beranda" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <div className="relative order-2 md:order-1">
          <p className="mb-5 inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Halo, selamat datang!
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Saya <span className="text-accent">Vivien Monteiro</span>,<br />
            calon kreator digital.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Saya sedang belajar membangun website dan antarmuka digital yang menarik,
            responsif dan nyaman digunakan.
          </p>

          <button
                type="button"
                onClick={handleClick}
                className="mt-8 cursor-pointer rounded-full bg-accent px-6 py-3 font-bold text-ink">
                Lihat Sapaan
        </button>
          

          <p className="mt-4 text-xs text-slate-500">
            Mahasiswa · Web Development · Creative Learner
          </p>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm md:order-2">
          <img
            src="/foto1.jpeg"
            alt="Foto profil Vivien Monteiro"
            className="relative aspect-[4/5] w-full rounded-[2rem] border border-white/10 bg-slate-800 object-cover shadow-2xl"
            onError={(event) => {
              event.currentTarget.src =
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85'
            }}
          />

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-4 shadow-xl">
            <p className="text-xs text-slate-400">Sedang berkembang</p>
            <p className="mt-1 font-bold text-accent">
              One step at a time ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero