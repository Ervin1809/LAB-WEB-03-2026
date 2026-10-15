const BASE_URL = "https://jsonplaceholder.typicode.com";

const daftarAnggota = document.getElementById("daftar-anggota");
const statusAnggota = document.getElementById("status-anggota");
const judulTugas = document.getElementById("judul-tugas");
const progres = document.getElementById("progres");
const statusTugas = document.getElementById("status-tugas");
const inputCari = document.getElementById("cari");
const daftarTugas = document.getElementById("daftar-tugas");
const tidakAda = document.getElementById("tidak-ada");
const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("judul-baru");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");

let anggotaTerpilih = null;
let timerNotifikasi = null;
let permintaanTerakhir = 0; // mencegah respons lama menimpa pilihan terbaru

const KELAS_SELESAI = ["line-through", "text-gray-400"];
const KELAS_ANGGOTA_AKTIF = ["bg-indigo-600", "text-white", "border-indigo-600"];
const KELAS_ANGGOTA_BIASA = ["bg-white", "text-slate-700", "border-slate-300"];

/* ---------- F1: daftar anggota ---------- */
async function muatAnggota() {
  statusAnggota.classList.remove("text-red-600");
  statusAnggota.textContent = "Memuat anggota...";
  try {
    const res = await fetch(BASE_URL + "/users");
    if (!res.ok) throw new Error("Server mengembalikan status " + res.status);
    const users = await res.json();

    users.forEach(function (user) {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.textContent = user.name;
      tombol.className = "anggota rounded-lg border px-3 py-2 text-left font-medium transition hover:border-indigo-400";
      tombol.classList.add(...KELAS_ANGGOTA_BIASA);
      tombol.addEventListener("click", function () {
        pilihAnggota(user, tombol);
      });
      daftarAnggota.appendChild(tombol);
    });
    statusAnggota.textContent = "";
  } catch (err) {
    statusAnggota.classList.add("text-red-600");
    statusAnggota.textContent = "Gagal memuat anggota: " + err.message;
  }
}

/* ---------- F2: tugas anggota ---------- */
async function pilihAnggota(user, tombol) {
  // penanda hanya untuk satu anggota
  daftarAnggota.querySelectorAll(".anggota").forEach(function (el) {
    el.classList.remove(...KELAS_ANGGOTA_AKTIF);
    el.classList.add(...KELAS_ANGGOTA_BIASA);
  });
  tombol.classList.remove(...KELAS_ANGGOTA_BIASA);
  tombol.classList.add(...KELAS_ANGGOTA_AKTIF);

  anggotaTerpilih = user;
  const idPermintaan = ++permintaanTerakhir;

  judulTugas.textContent = "Tugas " + user.name;
  daftarTugas.innerHTML = "";
  progres.textContent = "";
  tidakAda.classList.add("hidden");
  inputCari.value = "";
  errorForm.textContent = "";
  statusTugas.classList.remove("text-red-600");
  statusTugas.textContent = "Memuat tugas...";

  try {
    const res = await fetch(BASE_URL + "/todos?userId=" + user.id);
    if (!res.ok) throw new Error("Server mengembalikan status " + res.status);
    const todos = await res.json();
    if (idPermintaan !== permintaanTerakhir) return;

    todos.forEach(function (todo) {
      daftarTugas.appendChild(buatItemTugas(todo.title, todo.completed));
    });
    statusTugas.textContent = "";
    perbaruiProgres();
    terapkanPencarian();
  } catch (err) {
    if (idPermintaan !== permintaanTerakhir) return;
    statusTugas.classList.add("text-red-600");
    statusTugas.textContent = "Gagal memuat tugas: " + err.message;
  }
}

function buatItemTugas(title, completed) {
  const li = document.createElement("li");
  li.className = "tugas flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 py-2";
  li.dataset.completed = completed ? "true" : "false";

  const teks = document.createElement("span");
  teks.className = "judul flex-1";
  teks.textContent = title;
  if (completed) teks.classList.add(...KELAS_SELESAI);

  const aksi = document.createElement("div");
  aksi.className = "flex shrink-0 gap-2";

  if (!completed) {
    const tombolSelesai = document.createElement("button");
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.className = "rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-200";
    tombolSelesai.addEventListener("click", function () {
      teks.classList.add(...KELAS_SELESAI);
      li.dataset.completed = "true";
      tombolSelesai.remove();
      perbaruiProgres();
    });
    aksi.appendChild(tombolSelesai);
  }

  const tombolHapus = document.createElement("button");
  tombolHapus.type = "button";
  tombolHapus.textContent = "Hapus";
  tombolHapus.className = "rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-200";
  tombolHapus.addEventListener("click", function () {
    li.remove();
    perbaruiProgres();
    terapkanPencarian();
  });
  aksi.appendChild(tombolHapus);

  li.appendChild(teks);
  li.appendChild(aksi);
  return li;
}

function perbaruiProgres() {
  const semua = daftarTugas.querySelectorAll(".tugas");
  const selesai = daftarTugas.querySelectorAll('.tugas[data-completed="true"]');
  progres.textContent = selesai.length + " dari " + semua.length + " tugas selesai";
}

/* ---------- F3: pencarian ---------- */
function terapkanPencarian() {
  const kata = inputCari.value.toLowerCase();
  const semua = daftarTugas.querySelectorAll(".tugas");
  let tampil = 0;

  semua.forEach(function (li) {
    const judul = li.querySelector(".judul").textContent.toLowerCase();
    if (judul.includes(kata)) {
      li.classList.remove("hidden");
      tampil++;
    } else {
      li.classList.add("hidden");
    }
  });

  if (anggotaTerpilih && !statusTugas.textContent && tampil === 0) {
    tidakAda.textContent = semua.length === 0 && kata === ""
      ? "Belum ada tugas."
      : "Tidak ada tugas yang cocok";
    tidakAda.classList.remove("hidden");
  } else {
    tidakAda.classList.add("hidden");
  }
}
inputCari.addEventListener("input", terapkanPencarian);

/* ---------- F4: tambah tugas ---------- */
function simpanTugas(judul) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const sudahAda = Array.from(daftarTugas.querySelectorAll(".judul")).some(function (el) {
        return el.textContent.toLowerCase() === judul.toLowerCase();
      });
      if (sudahAda) {
        reject(new Error('Tugas "' + judul + '" sudah ada di daftar.'));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

function tampilkanNotifikasi(pesan) {
  clearTimeout(timerNotifikasi);
  notifikasi.textContent = pesan;
  notifikasi.classList.remove("hidden");
  timerNotifikasi = setTimeout(function () {
    notifikasi.classList.add("hidden");
  }, 3000);
}

formTugas.addEventListener("submit", async function (event) {
  event.preventDefault();
  errorForm.textContent = "";

  if (!anggotaTerpilih) {
    errorForm.textContent = "Pilih anggota terlebih dahulu.";
    return;
  }

  const judul = inputJudul.value.trim();
  if (judul.length < 5) {
    errorForm.textContent = "Judul tugas minimal 5 karakter.";
    return;
  }

  tombolSimpan.disabled = true;
  tombolSimpan.textContent = "Menyimpan...";
  try {
    const tugasBaru = await simpanTugas(judul);
    daftarTugas.appendChild(buatItemTugas(tugasBaru.title, tugasBaru.completed));
    inputJudul.value = "";
    perbaruiProgres();
    terapkanPencarian();
    tampilkanNotifikasi("Tugas berhasil ditambahkan.");
  } catch (err) {
    errorForm.textContent = err.message;
  } finally {
    tombolSimpan.disabled = false;
    tombolSimpan.textContent = "Simpan";
  }
});

muatAnggota();
