"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Beranda",      href: "/"       },
  { label: "Katalog",      href: "/katalog" },
  { label: "Tambah Buku",  href: "/tambah"  },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-30 border-b border-amber-200/70 bg-stone-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl font-bold text-amber-900"
        >
          <span aria-hidden="true" className="text-2xl">📚</span>
          Pustaka Senja
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {menuItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-block border-b-2 px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "border-amber-700 text-amber-800"
                      : "border-transparent text-stone-600 hover:border-amber-300 hover:text-amber-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}