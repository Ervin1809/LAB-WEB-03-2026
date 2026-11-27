  "use client";

  import Link from "next/link";
  import { usePathname } from "next/navigation";

  const daftarMenu = [
    { nama: "Beranda", path: "/" },
    { nama: "Katalog", path: "/katalog" },
    { nama: "Usulan Buku", path: "/usulan" },
  ];

  function Navbar() {
    const pathname = usePathname();

    return (
      <nav className="sticky top-0 z-10 border-b border-amber-200 bg-amber-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-amber-800">
            Pustaka Senja
          </Link>
          <ul className="flex items-center gap-6">
            {daftarMenu.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={
                      isActive
                        ? "border-b-2 border-amber-600 pb-1 font-semibold text-amber-900"
                        : "pb-1 text-stone-500 transition hover:text-amber-800"
                    }
                  >
                    {item.nama}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }

  export default Navbar;
