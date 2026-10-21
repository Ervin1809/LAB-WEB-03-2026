const menuItems = [
  { id: 'nav-home', label: 'Home', href: '#hero' },
  { id: 'nav-about', label: 'About', href: '#about' },
  { id: 'nav-skills', label: 'Skills', href: '#skills' },
  { id: 'nav-gallery', label: 'Gallery', href: '#gallery' },
];

function Navbar() {
  return (
    <nav
      className="
        fixed top-3 z-50
        flex items-center justify-between
        rounded-full
        bg-[#0a0a0a]/80 backdrop-blur-lg
        border border-white/10
        shadow-lg shadow-black/20

        /* Mobile: stretch full width with side margin */
        left-2 right-2
        px-3 py-2
        gap-2

        /* sm+: revert to original centered pill */
        sm:left-1/2 sm:right-auto sm:w-max
        sm:-translate-x-1/2
        sm:px-6 sm:py-3
        sm:gap-6
      "
    >
      {/* Logo */}
      <a
        href="#hero"
        className="text-base sm:text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity shrink-0"
      >
        A<span className="accent">.</span>
      </a>

      {/* Menu links rendered with .map() */}
      <ul className="flex items-center gap-0.5 sm:gap-1">
        {menuItems.map((menu) => (
          <li key={menu.id}>
            <a
              href={menu.href}
              onClick={() => console.log(menu.label)}
              className="
                px-2 py-1 text-xs font-medium text-gray-300 rounded-full
                hover:text-white hover:bg-white/10 transition-all duration-200
                sm:px-3 sm:py-1.5 sm:text-sm
              "
            >
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
