import MenuCard from "./MenuCard.jsx";

function MenuList({ menuList, kategoriAktif, onTambah }) {
  const menuTampil =
    kategoriAktif === "Semua"
      ? menuList
      : menuList.filter((menu) => menu.kategori === kategoriAktif);

  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuTampil.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            onTambah={onTambah}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuList;