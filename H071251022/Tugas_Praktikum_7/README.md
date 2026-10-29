# Kedai Kopi Senja — Tugas Praktikum 7 (React Hooks: State & Props)

Halaman pemesanan mandiri untuk Kedai Kopi Senja (React + Vite + Tailwind CSS v3).

## Menjalankan
```bash
npm install
npm run dev
```

## Struktur & pembagian state
- `App.jsx` — data menu (satu kali), state `kategoriAktif`, `pesanan`, `terkirim`.
  Jumlah item & total harga **dihitung** dari `pesanan` (bukan state kedua) sehingga selalu sinkron.
- `Navbar.jsx` — sidebar: jumlah item, total harga, pilihan kategori (props dari App).
- `MenuList.jsx` — grid menu dengan `map()` dan `key={menu.id}`.
- `MenuCard.jsx` — state lokal `detailTerbuka` (tiap kartu independen), tombol Tambah nonaktif jika `tersedia={false}`.
- `RingkasanPesanan.jsx` — daftar pesanan, total, dan ucapan terima kasih.
- `FormPesan.jsx` — controlled component (nama, nomor meja), validasi, submit.
- `Footer.jsx`

Hanya memakai `useState`, props (destructuring), event handling, controlled component,
`map()` + key id, lifting state up, dan conditional rendering.
