const menu = [
  { id: 1, label: 'Beranda', href: '#home' },
  { id: 2, label: 'Tentang', href: '#about' },
  { id: 3, label: 'Keahlian', href: '#skills' },
  { id: 4, label: 'Galeri', href: '#gallery' },
]

function Navbar() {
  const handleMenuClick = (label) => {
    console.log(label)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-3 sm:flex-row sm:justify-between sm:py-4">
        <a
          href="#home"
          onClick={() => handleMenuClick('Logo')}
          className="font-display text-xl font-extrabold tracking-tight"
        >
          Syahdan<span className="text-clay">Ans</span>
        </a>

        <ul className="flex items-center gap-1 text-sm font-semibold sm:gap-2">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => handleMenuClick(item.label)}
                className="rounded-full px-3 py-1.5 transition hover:bg-clay hover:text-cream sm:px-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    
  )
}

export default Navbar
