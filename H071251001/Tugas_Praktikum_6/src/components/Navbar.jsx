const menuItems = [
  { id: 1, label: 'Beranda', href: '#beranda' },
  { id: 2, label: 'Tentang', href: '#tentang' },
  { id: 3, label: 'Keahlian', href: '#keahlian' },
  { id: 4, label: 'Galeri', href: '#galeri' },
  { id: 5, label: 'Project', href: '#project' },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-ink/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#beranda" className="text-lg font-black tracking-tight text-white">
          portofolio<span className="text-accent">.</span>
        </a>
        <ul className="flex flex-wrap items-center gap-3 sm:gap-7">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => console.log(item.label)}
                className="text-xs font-semibold text-slate-300 transition hover:text-accent sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar