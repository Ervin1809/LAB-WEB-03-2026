const dataPraktikan = [
    { nama: "Zulfaqqar", nilaiTugas: [85, 90, 88] },
    { nama: "Raskha", nilaiTugas: [70, 75, 70] },
    { nama: "Arjun", nilaiTugas: [95, 90, 100] },
    { nama: "Fachri", nilaiTugas: [60, 55, 65] },
    { nama: "Raihan", nilaiTugas: [75, 75, 75] }
];

const namaAsisten = prompt("Masukkan nama Asisten Lab untuk verifikasi kehadiran:");

if (!namaAsisten || namaAsisten.length < 5 ) {
    document.write(`
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 class="text-2xl text-red-600 font-bold bg-white p-6 rounded-lg shadow-md">
                Akses Ditolak: Nama Asisten Lab wajib diisi!
            </h1>
        </div>
    `);
} else {
    const hasilEvaluasi = dataPraktikan.map(praktikan => {
        for (const nilai of praktikan.nilaiTugas) {
            
        const totalNilai = praktikan.nilaiTugas.reduce((total, nilai) => total + nilai, 0);
        
        const rataRata = totalNilai / praktikan.nilaiTugas.length;
        
        const status = rataRata >= 75 ? "Lulus" : "Tidak Lulus";

        return {
            nama: praktikan.nama,
            rataRata: Math.round(rataRata),
            status: status
        };
    });

    console.log("Laporan Evaluasi Praktikum");
    console.log("Asisten:", namaAsisten);
    console.log(hasilEvaluasi);

    let htmlOutput = `
        <div class="min-h-screen bg-gray-100 py-10 px-5 font-sans">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-10">
                    <h1 class="text-4xl font-extrabold text-blue-700 mb-2">Sistem Laporan Praktikum</h1>
                    <p class="text-lg text-gray-700 font-medium">Asisten Penilai: <span class="text-blue-600">${namaAsisten}</span></p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    hasilEvaluasi.forEach(hasil => {
        const isLulus = hasil.status === "Lulus";
        const borderWarna = isLulus ? "border-green-500" : "border-red-500";
        const badgeBg = isLulus ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";

        htmlOutput += `
            <div class="bg-white rounded-xl shadow-md p-6 border-t-4 ${borderWarna} hover:shadow-lg transition">
                <h2 class="text-xl font-bold text-gray-800 mb-4">${hasil.nama}</h2>
                <div class="mb-4">
                    <p class="text-sm text-gray-500 font-semibold uppercase">Rata-rata Nilai</p>
                    <p class="text-4xl font-black text-gray-800">${hasil.rataRata}</p>
                </div>
                <span class="inline-block px-3 py-1 rounded-full text-sm font-bold ${badgeBg}">
                    ${hasil.status}
                </span>
            </div>
        `;
    });

    htmlOutput += `
                </div>
            </div>
        </div>
    `;

    document.write(htmlOutput);
}