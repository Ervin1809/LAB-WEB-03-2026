function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-center sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="text-lg font-black text-white">
          VAREL<span className="text-lime-400">.</span>
        </a>

        <p className="text-sm text-slate-500">
          © 2026 Moh Varel Julianto. Dibuat untuk terus belajar.
        </p>

        <a
          href="mailto:dedevarel307@gmail.com"
          className="text-sm text-slate-400 hover:text-lime-400"
        >
          Hubungi saya ↗
        </a>
      </div>
    </footer>
  )
}

export default Footer