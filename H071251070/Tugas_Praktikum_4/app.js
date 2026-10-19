const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const namaAsisten = prompt("Masukkan nama Asisten Lab:");

function hitungNilai(praktikan) {
    const total = praktikan.nilaiTugas.reduce((sum, nilai) => sum + nilai, 0);
    const rataRata = total / praktikan.nilaiTugas.length;

    let status;

    if (rataRata >= 75) {
        status = "LULUS";
    } else {
        status = "TIDAK LULUS";
    }

    return {
        nama: praktikan.nama,
        rataRata: rataRata,
        status: status
    };
}

const hasil = dataPraktikan.map(hitungNilai);

let namaAsli = namaAsisten.trim();

if (namaAsli === null || namaAsli === "") {

    document.body.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-stone-100">
            <div class="bg-white p-8 rounded-xl shadow text-center">
                <h1 class="text-2xl font-bold text-red-600">
                    Akses Ditolak
                </h1>
                <p class="mt-2 text-stone-600">
                    Halaman ini hanya dapat diakses oleh Asisten Lab.
                </p>
            </div>
        </div>
    `;

} else {

    document.write(`
        <div class="col-span-full mb-4 rounded-xl bg-teal-900 p-5 text-white">
            <h2 class="text-xl font-bold">
                Selamat datang, Asisten Lab ${namaAsisten}!
            </h2>
            <p class="mt-1 text-sm text-teal-100">
                Berikut hasil evaluasi praktikan.
            </p>
        </div>
    `);

    for (let  akhir of hasil) {
        document.write(`
            <div class="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
                <h2 class="text-lg font-bold">
                    ${akhir.nama}
                </h2>
        
                <p class="mt-2 text-sm text-stone-600">
                    Rata-rata: ${akhir.rataRata}
                </p>

                <p class="mt-2 text-sm font-semibold">
                    Status: ${akhir.status}
                </p>
            </div>
        `);
    };
}

console.log(hasil);