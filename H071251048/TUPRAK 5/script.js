const URL_ANGGOTA = "https://jsonplaceholder.typicode.com/users";
const URL_TUGAS = "https://jsonplaceholder.typicode.com/todos?userId=";

const statusAnggota = document.getElementById("statusAnggota");
const errorAnggota = document.getElementById("errorAnggota");
const daftarAnggota = document.getElementById("daftarAnggota");
const judulTugas = document.getElementById("judulTugas");
const ringkasanProgres = document.getElementById("ringkasanProgres");
const statusTugas = document.getElementById("statusTugas");
const errorTugas = document.getElementById("errorTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pencarian = document.getElementById("pencarian");
const pesanKosong = document.getElementById("pesanKosong");
const formTugas = document.getElementById("formTugas");
const judulBaru = document.getElementById("judulBaru");
const tombolSimpan = document.getElementById("tombolSimpan");
const errorForm = document.getElementById("errorForm");
const notifikasi = document.getElementById("notifikasi");

let anggotaTerpilih = null;
let dataTugas = [];

function tampilkanPesan(elemen, pesan) {
    elemen.textContent = pesan;
    elemen.classList.remove("hidden");
}

function sembunyikanPesan(elemen) {
    elemen.textContent = "";
    elemen.classList.add("hidden");
}

// F1: Mengambil dan menampilkan daftar anggota
async function muatAnggota() {
    statusAnggota.textContent = "Memuat anggota....";
    sembunyikanPesan(errorAnggota);

    try {
        const respons = await fetch(URL_ANGGOTA);

        if (!respons.ok) {
            throw new Error("Gagal memuat anggota. Silakan coba lagi.");
        }

        const anggota = await respons.json();
        daftarAnggota.innerHTML = "";

        anggota.forEach(function(orang) {
            const tombol = document.createElement("button");
            tombol.type = "button";
            tombol.textContent = orang.name;
            tombol.className = "w-full rounded-lg border border-slate-200 px-3 py-3 text-left hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-300";

            tombol.addEventListener("click", function() {
                pilihAnggota(orang, tombol);
            });

            daftarAnggota.appendChild(tombol);
        });

        statusAnggota.textContent = "";
    } catch (error) {
        statusAnggota.textContent = "";
        tampilkanPesan(errorAnggota, error.message);
    }
}

// F2: Mengambil tugas anggota yang dipilih
async function pilihAnggota(orang, tombolDipilih) {
    anggotaTerpilih = orang;

    const semuaTombol = daftarAnggota.querySelectorAll("button");
    semuaTombol.forEach(function(tombol) {
        tombol.classList.remove("bg-indigo-100", "border-indigo-500", "font-semibold");
    });
    tombolDipilih.classList.add("bg-indigo-100", "border-indigo-500", "font-semibold");

    judulTugas.textContent = "Tugas " + orang.name;
    statusTugas.textContent = "Memuat tugas....";
    ringkasanProgres.textContent = "";
    daftarTugas.innerHTML = "";
    pencarian.value = "";
    sembunyikanPesan(errorTugas);
    sembunyikanPesan(pesanKosong);
    sembunyikanPesan(errorForm);
    sembunyikanPesan(notifikasi);

    try {
        const respons = await fetch(URL_TUGAS + orang.id);

        if (!respons.ok) {
            throw new Error("Gagal memuat tugas. Silakan coba lagi.");
        }

        dataTugas = await respons.json();
        gambarTugas();
        statusTugas.textContent = "";
    } catch (error) {
        dataTugas = [];
        statusTugas.textContent = "";
        tampilkanPesan(errorTugas, error.message);
        perbaruiProgres();
    }
}

// Membuat daftar tugas dengan DOM
function gambarTugas() {
    daftarTugas.innerHTML = "";

    dataTugas.forEach(function(tugas) {
        const item = document.createElement("li");
        item.className = "flex flex-col gap-3 rounded-lg border border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between";

        const judul = document.createElement("span");
        judul.textContent = tugas.title;
        judul.className = "min-w-0 flex-1 break-words";

        if (tugas.completed) {
            judul.classList.add("line-through", "text-gray-400");
        }

        item.appendChild(judul);

        const tombolAksi = document.createElement("div");
        tombolAksi.className = "flex shrink-0 flex-wrap gap-2";

        if (!tugas.completed) {
            const tombolSelesai = document.createElement("button");
            tombolSelesai.type = "button";
            tombolSelesai.textContent = "Tandai selesai";
            tombolSelesai.className = "rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700";

            tombolSelesai.addEventListener("click", function() {
                tugas.completed = true;
                judul.classList.add("line-through", "text-gray-400");
                tombolSelesai.remove();
                perbaruiProgres();
            });

            tombolAksi.appendChild(tombolSelesai);
        }

        const tombolHapus = document.createElement("button");
        tombolHapus.type = "button";
        tombolHapus.textContent = "Hapus";
        tombolHapus.className = "rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700";

        tombolHapus.addEventListener("click", function() {
            let indeks = -1;

            for (let i = 0; i < dataTugas.length; i++) {
                if (dataTugas[i] === tugas) {
                    indeks = i;
                }
            }

            if (indeks !== -1) {
                dataTugas.splice(indeks, 1);
            }

            gambarTugas();
        });

        tombolAksi.appendChild(tombolHapus);
        item.appendChild(tombolAksi);
        daftarTugas.appendChild(item);
    });

    perbaruiProgres();
    terapkanPencarian();
}

// Menghitung progres tanpa filter()
function perbaruiProgres() {
    let jumlahSelesai = 0;

    dataTugas.forEach(function(tugas) {
        if (tugas.completed === true) {
            jumlahSelesai++;
        }
    });

    ringkasanProgres.textContent =
        jumlahSelesai + " dari " + dataTugas.length + " tugas selesai";
}

// F3: Pencarian judul tugas tanpa menghapus elemen
function terapkanPencarian() {
    const kataKunci = pencarian.value.trim().toLowerCase();
    const semuaItem = daftarTugas.querySelectorAll("li");
    let jumlahCocok = 0;

    semuaItem.forEach(function(item) {
        const judul = item.querySelector("span").textContent.toLowerCase();

        if (judul.includes(kataKunci)) {
            item.classList.remove("hidden");
            jumlahCocok++;
        } else {
            item.classList.add("hidden");
        }
    });

    if (kataKunci !== "" && jumlahCocok === 0) {
        pesanKosong.classList.remove("hidden");
    } else {
        pesanKosong.classList.add("hidden");
    }
}

pencarian.addEventListener("input", terapkanPencarian);

// F4: Simulasi penyimpanan menggunakan Promise
function simpanTugas(judul) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let sudahAda = false;

            dataTugas.forEach(function(tugas) {
                if (tugas.title.trim().toLowerCase() === judul.toLowerCase()) {
                    sudahAda = true;
                }
            });

            if (sudahAda) {
                reject(new Error("Tugas dengan judul tersebut sudah ada."));
            } else {
                resolve({
                    title: judul,
                    completed: false
                });
            }
        }, 1000);
    });
}

formTugas.addEventListener("submit", async function(event) {
    event.preventDefault();
    sembunyikanPesan(errorForm);
    sembunyikanPesan(notifikasi);

    if (anggotaTerpilih === null) {
        tampilkanPesan(errorForm, "Pilih anggota terlebih dahulu sebelum menambahkan tugas.");
        return;
    }

    const judul = judulBaru.value.trim();

    if (judul.length < 5) {
        tampilkanPesan(errorForm, "Judul tugas harus minimal 5 karakter.");
        return;
    }

    tombolSimpan.disabled = true;
    tombolSimpan.textContent = "Menyimpan...";

    try {
        const tugasBaru = await simpanTugas(judul);
        dataTugas.push(tugasBaru);
        gambarTugas();
        judulBaru.value = "";

        tampilkanPesan(notifikasi, "Tugas berhasil ditambahkan.");

        setTimeout(function() {
            sembunyikanPesan(notifikasi);
        }, 3000);
    } catch (error) {
        tampilkanPesan(errorForm, error.message);
    } finally {
        tombolSimpan.textContent = "Simpan";
        tombolSimpan.disabled = false;
    }
});

// Jalankan saat halaman dibuka
muatAnggota();
