
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { nama: "Beranda", link: "/" },
    { nama: "Katalog", link: "/katalog" },
    { nama: "Usulan Buku", link: "/usulan" },
  ];

  return (
    <nav className="bg-[#3d3028] px-6 py-5 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/" className="text-2xl font-bold">
          Pustaka Senja
        </Link>

        <div className="flex flex-wrap justify-center gap-6">
          {menu.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`transition hover:text-amber-300 ${
                pathname === item.link ? "text-amber-300" : "text-white"
              }`}
            >
              {item.nama}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
