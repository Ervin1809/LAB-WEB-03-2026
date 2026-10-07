// Data awal praktikan
const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [85, 75, 85] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

let namaAsisten = prompt("Masukkan nama Asisten Lab:");

while (namaAsisten !== "Ervin" && namaAsisten !== "Fadel" && namaAsisten !== "Riswandi" && namaAsisten !== "Ananta") {
    alert("Akses Ditolak! ");
    namaAsisten = prompt("Masukkan kembali nama Asisten Lab yang valid:");
}

document.write("<h3>Selamat datang, Asisten " + namaAsisten + "! Berikut Laporan Nilai:</h3>");


const hasilEvaluasi = dataPraktikan.map(function(praktikan) {
    let totalNilai = praktikan.nilaiTugas.reduce(function(akumulator, nilai) {
        return akumulator + nilai;
    }, 0);

    let rataRata = totalNilai / praktikan.nilaiTugas.length;

    let status = "";
    if (rataRata >= 75) {
        status = "LULUS";
    } else {
        status = "TIDAK LULUS";
    }

    return {
        nama: praktikan.nama,
        nilaiTugas: praktikan.nilaiTugas,
        rataRata: rataRata,
        status: status
    };
});




for (let number of hasilEvaluasi) {
    let p = number;

// for (let hasil of hasilEvaluasi) {
//     document.write(
//         `
//         <h1>number : ${hasil.hasilEvaluasi} </h1>
//         `
//         )   
    
    document.write(
        '<div style="border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; border-radius: 5px;">' +
        '<h3>Nama: ' + p.nama + '</h3>' +
        '<p>Nilai Tugas: ' + p.nilaiTugas.join(", ") + '</p>' +
        '<p>Rata-rata: ' + p.rataRata + '</p>' +
        '<p>Status: <strong>' + p.status + '</strong></p>' +
        '</div>'
    );
}


console.log("=== DATA HASIL AKHIR EVALUASI PRAKTIKAN ===");
console.log(hasilEvaluasi);