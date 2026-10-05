const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] },
];

// const namaAsisten = prompt("Masukkan nama Asisten Lab:");
let isTrue = false
let namaAsisten

while (!isTrue) {
    namaAsisten = prompt("Masukkan nama Asisten Lab:").toLowerCase();

    let namaAsistensi = ["Hamdi", "Ervin"];
    if (namaAsisten == namaAsistensi[0].toLowerCase() || namaAsisten == namaAsistensi[1].toLowerCase()) {
        isTrue = true
    } else {
        alert("Asisten tidak terdaftar")
    }
}


function hitungRataRata(nilai) {
    const total = nilai[0] + nilai[1] + nilai[2];
    const rataRata = total / nilai.length;

    return rataRata;
}


function tentukanStatus(rataRata) {
    if (rataRata >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}


const hasilAkhir = dataPraktikan.map(function (praktikan) {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    const status = tentukanStatus(rataRata);

    return {
        nama: praktikan.nama,
        rataRata: rataRata,
        status: status
    };
});


console.log(hasilAkhir);


// ini untuk count jumlah lulus & tdk lulus

let jumlahLulus = 0;
let jumlahTidakLulus = 0;

for (let praktikan of hasilAkhir) {
    if (praktikan.status === "Lulus") {
        jumlahLulus++;
    } else {
        jumlahTidakLulus++;
    }
};
console.log(dataPraktikan);


// ini untuk tampilan dan css


document.write(`
<style>

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 40px 20px;
        font-family: Arial, sans-serif;
        background: #eef4f8;
        color: #1e293b;
    }

    .container {
        max-width: 1000px;
        margin: auto;
    }

    .header {
        background: linear-gradient(135deg, #2563eb, #4f46e5);
        color: white;
        padding: 35px;
        border-radius: 20px;
        margin-bottom: 25px;
        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.20);
        text-align: center;
    }

    .header h1 {
        margin: 0 0 8px 0;
        font-size: 30px;
    }

    .header p {
        margin: 0;
        color: #dbeafe;
        font-size: 15px;
    }

    .welcome {
        background: white;
        padding: 25px;
        border-radius: 18px;
        margin-bottom: 25px;
        border-left: 6px solid #2563eb;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
    }

    .welcome h2 {
        margin: 0 0 8px 0;
        color: #1e3a8a;
        font-size: 22px;
    }

    .welcome p {
        margin: 0;
        color: #64748b;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
        margin-bottom: 30px;
    }

    .card {
        background: white;
        padding: 22px;
        border-radius: 16px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
    }

    .card-title {
        color: #64748b;
        font-size: 14px;
        margin-bottom: 8px;
    }

    .card-number {
        font-size: 30px;
        font-weight: bold;
        color: #1e293b;
    }

    .card.total {
        border-top: 5px solid #2563eb;
    }

    .card.lulus {
        border-top: 5px solid #16a34a;
    }

    .card.tidak {
        border-top: 5px solid #dc2626;
    }

    .result-box {
        background: white;
        padding: 25px;
        border-radius: 18px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
    }

    .result-box h2 {
        margin-top: 0;
        color: #1e293b;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        overflow: hidden;
        border-radius: 12px;
    }

    th {
        background: #1e293b;
        color: white;
        padding: 15px;
        text-align: center;
    }

    td {
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #e2e8f0;
    }

    tr:hover td {
        background: #f8fafc;
    }

    td:first-child {
        font-weight: bold;
        text-align: left;
    }

    .lulus {
        color: #15803d;
        background: #dcfce7;
        padding: 7px 12px;
        border-radius: 20px;
        font-weight: bold;
        display: inline-block;
    }

    .tidak-lulus {
        color: #b91c1c;
        background: #fee2e2;
        padding: 7px 12px;
        border-radius: 20px;
        font-weight: bold;
        display: inline-block;
    }

    .footer {
        text-align: center;
        margin-top: 25px;
        color: #94a3b8;
        font-size: 13px;
    }

    @media (max-width: 700px) {
        .cards {
            grid-template-columns: 1fr;
        }

        .header h1 {
            font-size: 24px;
        }

        table {
            font-size: 14px;
        }

        th, td {
            padding: 10px;
        }
    }

</style>
`);


// HEADER

document.write(`
<div class="container">

    <div class="header">
        <h1>📚 Sistem Evaluasi Praktikum</h1>
        <p>Evaluasi hasil praktikum secara interaktif dan terstruktur</p>
    </div>
`);


// WELCOME

document.write(`
    <div class="welcome">
        <h2>👋 Selamat Datang, ${namaAsisten}!</h2>
        <p>Berikut adalah laporan hasil evaluasi praktikum yang telah diproses.</p>
    </div>
`);


// RINGKASAN

document.write(`
    <div class="cards">

        <div class="card total">
            <div class="card-title">TOTAL PRAKTIKAN</div>
            <div class="card-number">${hasilAkhir.length}</div>
        </div>

        <div class="card lulus">
            <div class="card-title">PRAKTIKAN LULUS</div>
            <div class="card-number">${jumlahLulus}</div>
        </div>

        <div class="card tidak">
            <div class="card-title">TIDAK LULUS</div>
            <div class="card-number">${jumlahTidakLulus}</div>
        </div>

    </div>
`);


// HASIL EVALUASI

document.write(`
    <div class="result-box">
        <h2>📋 Hasil Evaluasi Praktikum</h2>

        <table>
            <tr>
                <th>Nama</th>
                <th>Rata-rata</th>
                <th>Status</th>
            </tr>
`);


// DATA PRAKTIKAN

for (let praktikan of hasilAkhir) {

    document.write("<tr>");

    document.write("<td>" + praktikan.nama + "</td>");

    document.write("<td>" + praktikan.rataRata + "</td>");

    if (praktikan.status === "Lulus") {
        document.write(
            "<td><span class='lulus'>✓ Lulus</span></td>"
        );
    } else {
        document.write(
            "<td><span class='tidak-lulus'>✕ Tidak Lulus</span></td>"
        );
    }

    document.write("</tr>");
};



document.write(`
        </table>
    </div>

    <div class="footer">
        Sistem Evaluasi Praktikum • 2026
    </div>

</div>
`);