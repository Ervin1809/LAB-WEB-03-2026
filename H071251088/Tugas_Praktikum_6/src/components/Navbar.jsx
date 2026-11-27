const Navbar = () => {
  const menus = ['Beranda', 'Tentang', 'Keahlian', 'Galeri'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">Kazull.</h1>
        <ul className="flex gap-4 md:gap-8 text-sm md:text-base">
          {menus.map((menu, index) => (
            <li 
              key={index} 
              className="cursor-pointer hover:text-blue-400 transition-colors"
              onClick={() => console.log(`Menu diklik: ${menu}`)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;