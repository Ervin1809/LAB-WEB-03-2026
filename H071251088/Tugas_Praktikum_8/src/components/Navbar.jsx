"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const menus = [
    { name: "Beranda", path: "/" },
    { name: "Katalog", path: "/katalog" },
    { name: "Usulan Buku", path: "/usulan" },
  ];

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Pustaka Senja</h1>
        <ul className="flex space-x-6">
          {menus.map((menu) => {
            const isActive = pathname === menu.path || (menu.path === "/katalog" && pathname.startsWith("/katalog/"));
            return (
              <li key={menu.path}>
                <Link
                  href={menu.path}
                  className={`font-medium ${isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-600 hover:text-blue-500"}`}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}