
const menu = [
  { id: 1, nama: 'Home', link: '#home' },
  { id: 2, nama: 'About', link: '#about' },
  { id: 3, nama: 'Skills', link: '#skills' },
  { id: 4, nama: 'Little Gallery', link: '#gallery' },
]

function Navbar() {
  return (
   <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 bg-slate-950 px-4 py-4 text-white sm:px-6 md:px-10">
      <h1 className="text-xl font-bold">a little space of mine</h1>

      <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm sm:gap-x-4 sm:text-base md:gap-x-6">
        {menu.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              onClick={() => console.log(item.nama)}
              className="transition hover:text-cyan-400"
            >
              {item.nama}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
