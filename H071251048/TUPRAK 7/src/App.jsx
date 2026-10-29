import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." }
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [nama, setNama] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanError, setPesanError] = useState("");
  const [ucapan, setUcapan] = useState("");

  const jumlahPesanan = pesanan.reduce((jumlah, item) => jumlah + item.jumlah, 0);
  const totalHarga = pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0);

  function tambahPesanan(menu) {
    if (!menu.tersedia) return;
    setUcapan("");
    setPesanError("");
    setPesanan((pesananLama) => {
      const sudahAda = pesananLama.find((item) => item.id === menu.id);
      if (sudahAda) {
        return pesananLama.map((item) =>
          item.id === menu.id ? { ...item, jumlah: item.jumlah + 1 } : item
        );
      }
      return [...pesananLama, { ...menu, jumlah: 1 }];
    });
  }

  function ubahJumlah(id, perubahan) {
    setPesanan((pesananLama) =>
      pesananLama
        .map((item) =>
          item.id === id ? { ...item, jumlah: item.jumlah + perubahan } : item
        )
        .filter((item) => item.jumlah > 0)
    );
  }

  function kirimPesanan(event) {
    event.preventDefault();
    if (nama.trim() === "" || nomorMeja.trim() === "") {
      setPesanError("Nama dan nomor meja harus diisi.");
      setUcapan("");
      return;
    }
    if (!/^[0-9]+$/.test(nomorMeja.trim())) {
      setPesanError("Nomor meja harus berupa angka.");
      setUcapan("");
      return;
    }
    if (pesanan.length === 0) {
      setPesanError("Pesanan masih kosong. Silakan pilih menu terlebih dahulu.");
      setUcapan("");
      return;
    }

    setUcapan(`Terima kasih, ${nama.trim()}! Pesanan untuk meja ${nomorMeja} berhasil dikirim.`);
    setPesanan([]);
    setNama("");
    setNomorMeja("");
    setPesanError("");
  }

  return (
    <div className="min-h-screen text-stone-800">
      <Navbar jumlahPesanan={jumlahPesanan} totalHarga={totalHarga} />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1fr_350px] lg:px-8">
        <section>
          <div className="mb-7 rounded-3xl bg-gradient-to-r from-amber-900 to-orange-700 p-7 text-white shadow-lg md:p-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Selamat datang</p>
            <h1 className="text-3xl font-bold md:text-4xl">Kedai Kopi Senja</h1>
            <p className="mt-3 max-w-xl text-amber-50">Temukan teman terbaik untuk menemani harimu. Pilih menu favoritmu dan pesan langsung dari meja.</p>
          </div>
          <MenuList
            menu={dataMenu}
            kategoriAktif={kategoriAktif}
            setKategoriAktif={setKategoriAktif}
            tambahPesanan={tambahPesanan}
          />
        </section>

        <aside className="space-y-6">
          <RingkasanPesanan
            pesanan={pesanan}
            jumlahPesanan={jumlahPesanan}
            totalHarga={totalHarga}
            ubahJumlah={ubahJumlah}
          />
          <FormPesan
            nama={nama}
            setNama={setNama}
            nomorMeja={nomorMeja}
            setNomorMeja={setNomorMeja}
            kirimPesanan={kirimPesanan}
            pesanError={pesanError}
            ucapan={ucapan}
          />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
