import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";
import kopiSusu from "./assets/menu/kopi-susu.jpg";
import americano from "./assets/menu/americano.jpg";
import cappuccino from "./assets/menu/cappuccino.jpg";
import matchaLatte from "./assets/menu/matcha-latte.jpg";
import tehTarik from "./assets/menu/teh-tarik.jpg";
import cokelatPanas from "./assets/menu/cokelat-panas.jpg";
import rotiBakar from "./assets/menu/roti-bakar.jpg";
import pisangGoreng from "./assets/menu/pisang-goreng.jpg";
import nasiGoreng from "./assets/menu/nasi-goreng.jpg";

// Data menu ditulis satu kali di sini. Komponen anak hanya menerimanya lewat props.
const daftarMenu = [
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

const daftarKategori = ["Kopi", "Non-Kopi", "Makanan"];

function App() {
  // State utama (diangkat ke App karena dipakai lebih dari satu komponen)
  const [kategoriAktif, setKategoriAktif] = useState("Kopi");
  const [pesanan, setPesanan] = useState([]); // [{ id, nama, harga, jumlah }]
  const [terkirim, setTerkirim] = useState(null); // null atau { nama, meja }

  // Data turunan: dihitung dari state, bukan disimpan di state lain,
  // sehingga jumlah & total di Navbar dan Ringkasan selalu sinkron.
  const menuTampil = daftarMenu.filter((menu) => menu.kategori === kategoriAktif);
  const jumlahItem = pesanan.reduce((hasil, item) => hasil + item.jumlah, 0);
  const totalHarga = pesanan.reduce(
    (hasil, item) => hasil + item.harga * item.jumlah,
    0
  );

  function handleTambah(menu) {
    if (!menu.tersedia) return;
    setTerkirim(null);

    const sudahAda = pesanan.some((item) => item.id === menu.id);
    if (sudahAda) {
      setPesanan(
        pesanan.map((item) =>
          item.id === menu.id ? { ...item, jumlah: item.jumlah + 1 } : item
        )
      );
    } else {
      setPesanan([
        ...pesanan,
        { id: menu.id, nama: menu.nama, harga: menu.harga, jumlah: 1 },
      ]);
    }
  }

  function handleTambahJumlah(id) {
    setPesanan(
      pesanan.map((item) =>
        item.id === id ? { ...item, jumlah: item.jumlah + 1 } : item
      )
    );
  }

  function handleKurang(id) {
    setPesanan(
      pesanan
        .map((item) =>
          item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item
        )
        .filter((item) => item.jumlah > 0)
    );
  }

  function handleKirim(dataPemesan) {
    setTerkirim(dataPemesan); // tampilkan ucapan terima kasih
    setPesanan([]); // kosongkan pesanan -> jumlah & total otomatis kembali 0
  }

  return (
    <div className="min-h-screen bg-krem-100 font-sans text-kopi-900 lg:grid lg:grid-cols-[250px_minmax(0,1fr)_370px]">
      <Navbar
        daftarKategori={daftarKategori}
        kategoriAktif={kategoriAktif}
        onPilihKategori={setKategoriAktif}
        jumlahItem={jumlahItem}
        totalHarga={totalHarga}
      />

      <main className="flex flex-col px-4 py-6 sm:px-8 lg:min-h-screen">
        <MenuList
          kategoriAktif={kategoriAktif}
          menuList={menuTampil}
          onTambah={handleTambah}
        />
        <Footer />
      </main>

      <aside className="space-y-5 px-4 pb-8 sm:px-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:px-5 lg:py-6">
        <RingkasanPesanan
          pesanan={pesanan}
          jumlahItem={jumlahItem}
          totalHarga={totalHarga}
          terkirim={terkirim}
          onTambah={handleTambahJumlah}
          onKurang={handleKurang}
        />
        <FormPesan jumlahItem={jumlahItem} onKirim={handleKirim} />
      </aside>
    </div>
  );
}

export default App;
