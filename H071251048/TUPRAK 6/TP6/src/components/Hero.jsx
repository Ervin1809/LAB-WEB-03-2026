import ganteng from '../../public/photo-1.jpeg'; 
function Hero() {
  function handleClick() {
    console.log('Terima kasih sudah mengunjungi portofolio saya!')
  }

  return (
    <section id="home" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-block rounded-full border border-accent/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-400">
            Mahasiswa Sistem Informasi
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-6xl">
            Halo, saya <span className="text-lime-400">Varel.</span>
            <br />
            Calon Menantu Idaman 
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            Saya mahasiswa Sistem Informasi yang tertarik dengan teknologi,
            pengembangan website, dan cara teknologi membantu menyelesaikan
            masalah sehari-hari.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="rounded-full bg-lime-400 px-6 py-3 font-bold text-ink hover:bg-lime-300"
            >
              Lihat Portofolio ↗
            </a>

            <button
              type="button"
              onClick={handleClick}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-accent hover:text-lime-400"
            >
              Sapa Saya
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <img
            src={ganteng}
            alt="Foto profil Varel"
            className="w-full rounded-3xl border border-white/10"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero