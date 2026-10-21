
function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center text-xs text-slate-500 sm:px-8">
        <p>
          © {new Date().getFullYear()} Vivien Elvaretta Levitie Monteiro. All Rights Reserved
        </p>

        <a
          href="#beranda"
          className="font-semibold text-slate-300 transition hover:text-accent"
        >
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
