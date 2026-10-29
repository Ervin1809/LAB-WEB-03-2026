const menuItems = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'About', href: '#about' },
  { id: 3, label: 'Skills', href: '#skills' },
  { id: 4, label: 'Gallery', href: '#gallery' },
  { id: 5, label: 'Contact', href: '#contact' },
]

function Navbar() {
  function handleMenuClick(menuName) {
    console.log(`Menu yang dipilih: ${menuName}`)
  }

  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-4 sm:flex-row">
        <a href="#home" className="text-lg font-black text-white">
          Webistex Varel Ganteng<span className="text-lime-400">.</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-2 sm:gap-5">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => handleMenuClick(item.label)}
                className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-lime-400"
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