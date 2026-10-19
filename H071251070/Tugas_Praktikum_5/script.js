const statusAnggota = document.getElementById('status-anggota');
const daftarAnggota = document.getElementById('daftar-anggota');
const bagianTugas = document.getElementById('bagian-tugas');
const judulTugas = document.getElementById('judul-tugas');
const ringkasanProgres = document.getElementById('ringkasan-progres');
const statusTugas = document.getElementById('status-tugas');
const daftarTugas = document.getElementById('daftar-tugas');
const inputCari = document.getElementById('input-cari');
const pesanKosong = document.getElementById('pesan-kosong');
const formTambahTugas = document.getElementById('form-tambah-tugas');
const inputTugasBaru = document.getElementById('input-tugas-baru');
const tombolSimpan = document.getElementById('tombol-simpan');
const errorTambah = document.getElementById('error-tambah');
const notifikasiSukses = document.getElementById('notifikasi-sukses');

async function ambilDataAnggota() {
    statusAnggota.textContent = "Memuat anggota...";
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Gagal mengambil data anggota. Status: ' + response.status);
        }

        let pengguna = await response.json();
        statusAnggota.textContent = "";

        pengguna.forEach((orang) => {  
            let tombol = document.createElement('button');
            tombol.textContent = orang.name;
            tombol.className = "tombol-anggota bg-white border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300";

            tombol.addEventListener('click', () => {
                kelolaStatusAktifTombol(tombol);
                ambilDataTugas(orang.id, orang.name);
            });

            daftarAnggota.appendChild(tombol);
        });
    } catch (error) {
        statusAnggota.textContent = "Error: " + error.message;
        statusAnggota.classList.replace("text-blue-500", "text-red-500");
    }
}

function kelolaStatusAktifTombol(tombolDiklik) {
    const semuaTombol = document.querySelectorAll('.tombol-anggota');
    semuaTombol.forEach((btn) => {
        btn.classList.remove('bg-blue-500', 'text-white');
        btn.classList.add('bg-white', 'text-blue-500');
    });
    tombolDiklik.classList.remove('bg-white', 'text-blue-500');
    tombolDiklik.classList.add('bg-blue-500', 'text-white');
}

async function ambilDataTugas(userId, namaAnggota) {
    bagianTugas.classList.remove('hidden');
    judulTugas.textContent = "Tugas " + namaAnggota;
    ringkasanProgres.textContent = "";
    daftarTugas.innerHTML = "";

    inputCari.value = "";
    pesanKosong.classList.add('hidden');

    statusTugas.textContent = "Memuat tugas...";

    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        if (!response.ok) {
            throw new Error('Gagal mengambil data tugas. Status: ' + response.status);
        }

        let tugasList = await response.json();
        statusTugas.textContent = "";

        tugasList.forEach((tugas) => {
            let elemenLi = buatElemenTugas(tugas);
            daftarTugas.appendChild(elemenLi);
        });

        perbaruiRingkasanProgres();

    } catch (error) {
        statusTugas.textContent = "Error: " + error.message;
        statusTugas.classList.replace("text-blue-500", "text-red-500");
    }
}

function buatElemenTugas(tugas) {
    let li = document.createElement('li');
    li.className = "flex items-center justify-between p-3 bg-gray-50 border rounded gap-2";

    let spanJudul = document.createElement('span');
    spanJudul.textContent = tugas.title;

    let divAksi = document.createElement('div');
    divAksi.className = "flex gap-2 shrink-0";

    if (tugas.completed) {
        spanJudul.className = "line-through text-gray-400 flex-1";
    } else {
        spanJudul.className = "text-gray-800 flex-1";

        let tombolSelesai = document.createElement('button');
        tombolSelesai.textContent = "Tandai selesai";
        tombolSelesai.className = "bg-green-600 text-white text-xs px-2 py-1 rounded hover:bg-green-700 transition";

        tombolSelesai.addEventListener('click', () => {
            spanJudul.className = "line-through text-gray-400 flex-1";
            tombolSelesai.remove();
            perbaruiRingkasanProgres();
        });

        divAksi.appendChild(tombolSelesai);
    }

    let tombolHapus = document.createElement('button');
    tombolHapus.textContent = "Hapus";
    tombolHapus.className = "bg-red-600 text-white text-xs px-2 py-1 rounded hover:bg-red-700 transition";

    tombolHapus.addEventListener('click', () => {
        li.remove();
        perbaruiRingkasanProgres();
    });

    divAksi.appendChild(tombolHapus);

    li.appendChild(spanJudul);
    li.appendChild(divAksi);

    return li;
}

function perbaruiRingkasanProgres() {
    const semuaLi = daftarTugas.querySelectorAll('li');
    const totalTugas = semuaLi.length;

    let jumlahSelesai = 0;
    semuaLi.forEach((li) => {
        const span = li.querySelector('span');
        if (span && span.classList.contains('line-through')) {
            jumlahSelesai++;
        }
    });

    ringkasanProgres.textContent = `${jumlahSelesai} dari ${totalTugas} tugas selesai`;
}

inputCari.addEventListener('input', () => {
    const kataKunci = inputCari.value.toLowerCase().trim();
    const semuaLi = daftarTugas.querySelectorAll('li');
    let adaYangCocok = false;

    semuaLi.forEach((li) => {
        const judul = li.querySelector('span').textContent.toLowerCase();

        if (judul.includes(kataKunci)) {
            li.classList.remove('hidden');
            adaYangCocok = true;
        } else {
            li.classList.add('hidden');
        }
    });

    if (adaYangCocok) {
        pesanKosong.classList.add('hidden');
    } else {
        pesanKosong.classList.remove('hidden');
    }
});

function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const semuaLi = daftarTugas.querySelectorAll('li');
            let sudahAda = false;

            semuaLi.forEach((li) => {
                const judulAda = li.querySelector('span').textContent.toLowerCase().trim();
                if (judulAda === judul.toLowerCase().trim()) {
                    sudahAda = true;
                }
            });

            if (sudahAda) {
                reject(new Error("Tugas dengan judul tersebut sudah ada di daftar!"));
            } else {
                resolve({ title: judul, completed: false });
            }
        }, 1000);
    });
}

formTambahTugas.addEventListener('submit', async (event) => {
    event.preventDefault();

    errorTambah.textContent = "";
    errorTambah.classList.add('hidden');
    notifikasiSukses.classList.add('hidden');

    const judul = inputTugasBaru.value.trim();

    if (judul.length < 5) {
        errorTambah.textContent = "Judul tugas tidak boleh kosong dan minimal harus 5 karakter!";
        errorTambah.classList.remove('hidden');
        return;
    }

    tombolSimpan.textContent = "Menyimpan...";
    tombolSimpan.disabled = true;

    try {
        const tugasBaru = await simpanTugas(judul);

        let elemenLi = buatElemenTugas(tugasBaru);
        daftarTugas.appendChild(elemenLi);

        perbaruiRingkasanProgres();
        inputTugasBaru.value = "";

        notifikasiSukses.classList.remove('hidden');
        setTimeout(() => {
            notifikasiSukses.classList.add('hidden');
        }, 3000);

    } catch (error) {
        errorTambah.textContent = error.message;
        errorTambah.classList.remove('hidden');
    } finally {
        tombolSimpan.textContent = "Simpan";
        tombolSimpan.disabled = false;
    }
});

ambilDataAnggota();