"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 border-b border-stone-800 bg-stone-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="text-xl font-bold text-amber-300">Pustaka Senja</Link>
        <ul className="flex flex-wrap items-center gap-5">
          {daftarMenu.map((item) => {
            const aktif = item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={aktif
                    ? "border-b-2 border-amber-400 pb-1 font-semibold text-amber-300"
                    : "text-stone-300 hover:text-white"}
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
