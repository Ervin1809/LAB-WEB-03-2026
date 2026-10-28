import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

import kopiSusu from "./assets/kopi-susu.jpeg";
import americano from "./assets/americano.jpeg";
import cappuccino from "./assets/cappuccino.jpeg";
import matchaLatte from "./assets/matcha-latte.jpeg";
import tehTarik from "./assets/teh-tarik.jpeg";
import cokelatPanas from "./assets/cokelat-panas.jpeg";
import rotiBakar from "./assets/roti-bakar.png";
import pisangGoreng from "./assets/pisang-goreng.png";
import nasiGoreng from "./assets/nasi-goreng.png";

const dataMenu = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren.",
    gambar: kopiSusu,
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.",
    gambar: americano,
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal.",
    gambar: cappuccino,
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu.",
    gambar: matchaLatte,
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa.",
    gambar: tehTarik,
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 20000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat.",
    gambar: cokelatPanas,
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju.",
    gambar: rotiBakar,
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju.",
    gambar: pisangGoreng,
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi.",
    gambar: nasiGoreng,
  },
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);

  function handleTambah(menu) {
    const pesananAda = pesanan.find(
      (item) => item.id === menu.id
    );

    if (pesananAda) {
      setPesanan(
        pesanan.map((item) =>
          item.id === menu.id
            ? { ...item, jumlah: item.jumlah + 1 }
            : item
        )
      );
    } else {
      setPesanan([
        ...pesanan,
        { ...menu, jumlah: 1 },
      ]);
    }
  }

  function handleHapus(id) {
    setPesanan(
      pesanan.filter((item) => item.id !== id)
    );
  }

  function handlePesanBerhasil() {
    setPesanan([]);
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar
        kategoriAktif={kategoriAktif}
        onKategoriClick={setKategoriAktif}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-amber-950">
              Daftar Menu
            </h2>

            <p className="text-gray-600 mt-1">
              Kategori aktif: {kategoriAktif}
            </p>

            <MenuList
              menuList={dataMenu}
              kategoriAktif={kategoriAktif}
              onTambah={handleTambah}
            />
          </div>

          <div>
            <RingkasanPesanan
              pesanan={pesanan}
              onHapus={handleHapus}
            />

            <FormPesan
              pesanan={pesanan}
              onPesanBerhasil={handlePesanBerhasil}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;