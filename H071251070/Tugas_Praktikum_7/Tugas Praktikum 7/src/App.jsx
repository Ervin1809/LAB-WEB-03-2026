
import { useState } from 'react'
import Navbar from './components/Navbar'
import MenuList from './components/MenuList'
import RingkasanPesanan from './components/RingkasanPesanan'
import FormPesan from './components/FormPesan'
import Footer from './components/Footer'

const daftarMenu = [
  { id: 1, nama: 'Kopi Susu', kategori: 'Kopi', harga: 18000, tersedia: true, deskripsi: 'Espresso dengan susu segar dan gula aren.' },
  { id: 2, nama: 'Americano', kategori: 'Kopi', harga: 15000, tersedia: true, deskripsi: 'Espresso dengan air panas, rasa kuat dan bersih.' },
  { id: 3, nama: 'Cappuccino', kategori: 'Kopi', harga: 22000, tersedia: true, deskripsi: 'Espresso, susu panas, dan busa susu tebal.' },
  { id: 4, nama: 'Matcha Latte', kategori: 'Non-Kopi', harga: 24000, tersedia: true, deskripsi: 'Teh hijau matcha dengan susu.' },
  { id: 5, nama: 'Teh Tarik', kategori: 'Non-Kopi', harga: 14000, tersedia: false, deskripsi: 'Teh susu yang ditarik hingga berbusa.' },
  { id: 6, nama: 'Cokelat Panas', kategori: 'Non-Kopi', harga: 20000, tersedia: true, deskripsi: 'Cokelat pekat dengan susu hangat.' },
  { id: 7, nama: 'Roti Bakar', kategori: 'Makanan', harga: 16000, tersedia: true, deskripsi: 'Roti tebal dengan selai cokelat dan keju.' },
  { id: 8, nama: 'Pisang Goreng', kategori: 'Makanan', harga: 12000, tersedia: false, deskripsi: 'Pisang goreng renyah dengan taburan keju.' },
  { id: 9, nama: 'Nasi Goreng', kategori: 'Makanan', harga: 25000, tersedia: true, deskripsi: 'Nasi goreng kampung dengan telur mata sapi.' },
]

function App() {
  const [kategoriAktif, setKategoriAktif] = useState('Semua')
  const [pesanan, setPesanan] = useState({})
  const [nama, setNama] = useState('')
  const [nomorMeja, setNomorMeja] = useState('')
  const [pesanStatus, setPesanStatus] = useState('')

  const menuTampil =
    kategoriAktif === 'Semua'
      ? daftarMenu
      : daftarMenu.filter((menu) => menu.kategori === kategoriAktif)

  const totalItem = Object.values(pesanan).reduce(
    (total, jumlah) => total + jumlah, 0
  )

  const totalHarga = daftarMenu.reduce(
    (total, menu) => total + menu.harga * (pesanan[menu.id] || 0), 0
  )

  function tambahPesanan(id) {
    setPesanan((sebelumnya) => ({
      ...sebelumnya,
      [id]: (sebelumnya[id] || 0) + 1,
    }))
    setPesanStatus('')
  }

  function prosesPesanan(e) {
    e.preventDefault()

    if (!nama.trim() || !nomorMeja.trim()) {
      setPesanStatus('Nama dan nomor meja wajib diisi.')
      return
    }

    if (!Number.isInteger(Number(nomorMeja)) || Number(nomorMeja) < 1) {
      setPesanStatus('Nomor meja harus berupa bilangan bulat positif.')
      return
    }

    if (totalItem === 0) {
      setPesanStatus('Pilih menu terlebih dahulu.')
      return
    }

    setPesanStatus(`Terima kasih, ${nama}! Pesananmu berhasil dibuat.`)
    setNama('')
    setNomorMeja('')
    setPesanan({})
  }

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <Navbar totalItem={totalItem} totalHarga={totalHarga} />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-6">
        <MenuList
          menus={menuTampil}
          kategoriAktif={kategoriAktif}
          setKategoriAktif={setKategoriAktif}
          pesanan={pesanan}
          onTambah={tambahPesanan}
        />

        <RingkasanPesanan
          daftarMenu={daftarMenu}
          pesanan={pesanan}
          totalItem={totalItem}
          totalHarga={totalHarga}
        />

        <FormPesan
          nama={nama}
          setNama={setNama}
          nomorMeja={nomorMeja}
          setNomorMeja={setNomorMeja}
          onSubmit={prosesPesanan}
          pesanStatus={pesanStatus}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
