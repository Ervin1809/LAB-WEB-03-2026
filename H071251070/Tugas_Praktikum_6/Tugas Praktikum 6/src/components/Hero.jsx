
function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[80vh] flex-col items-center justify-center bg-slate-800 px-6 py-16 text-center text-white"
    >
      <img
        src="/foto-profil.jpeg"
        alt="Foto profil saya"
        className="mb-6 h-40 w-40 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
      />

      <h1 className="text-4xl font-bold md:text-5xl">
        Hai, Saya Muslimah Ayu Hafizhah
      </h1>

      <p className="mt-4 max-w-xl text-slate-300">
        Learning to code, figuring out life, and debugging everything in between.
      </p>

      <a
        href="#about"
        onClick={() => console.log('Thanks for visiting!')}
        className="mt-6 inline-block rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
      >
        Get to know me
      </a>
    </section>
  )
}

export default Hero
