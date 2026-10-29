function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Spotlight effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(200,164,94,0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Profile photo */}
        <div className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-accent/40 shadow-lg shadow-accent/10">
          <img
            src="/profile.svg"
            alt="Foto Profil — Muh. Alief Nur Afanni Arfan"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-3">
          Hello, I&apos;m
        </p>

        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight mb-5 whitespace-normal sm:whitespace-nowrap">
          <span>MUH. ALIEF NUR </span>
          <br className="block sm:hidden" />
          <span>AFANNI ARFAN</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base mb-10 max-w-2xl mx-auto font-light tracking-wide">
          Web Developer
          <span className="mx-2 text-accent">•</span>
          UI/UX Enthusiast
          <span className="mx-2 text-accent">•</span>
          Graphic Designer
          <span className="mx-2 text-accent">•</span>
          Photographer
        </p>

        <a
          href="#about"
          onClick={() => console.log('Get to Know me clicked!')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#0a0a0a] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 cursor-pointer"
        >
          Get to Know me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
