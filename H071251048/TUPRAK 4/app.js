// ======================================================
// SISTEM EVALUASI PRAKTIKUM INTERAKTIF
// ======================================================


// ======================================================
// DATA AWAL PRAKTIKAN
// ======================================================

const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];


// ======================================================
// 1. VALIDASI NAMA ASISTEN LAB
// ======================================================

const daftarAsisten = ["Varel", "Ervin"];

let namaAsisten = prompt("Masukkan nama Asisten Lab:");

while (
    namaAsisten !== "Varel" &&
    namaAsisten !== "Ervin" &&
    namaAsisten !== null
) {

    alert("Nama Asisten Lab tidak terdaftar!");

    namaAsisten = prompt("Masukkan nama Asisten Lab:");

}


// ======================================================
// JIKA INPUT DIBATALKAN
// ======================================================

if (namaAsisten === null) {

    alert("Input dibatalkan.");

    document.write(`
        <h2 style="
            text-align: center;
            font-family: Arial;
            margin-top: 50px;
        ">
            Program dihentikan.
        </h2>
    `);

} else {


// ======================================================
// 2. FUNCTION MENGHITUNG RATA-RATA
// ======================================================

function hitungRataRata(nilaiTugas) {

    let total = 0;

    for (let i = 0; i < nilaiTugas.length; i++) {

        total = total + nilaiTugas[i];

    }

    return total / nilaiTugas.length;
}


// ======================================================
// 3. MEMPROSES DATA PRAKTIKAN
// ======================================================

const hasilPraktikan = dataPraktikan.map(function(praktikan) {

    const rataRata =
        hitungRataRata(praktikan.nilaiTugas);

    let status;

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


// ======================================================
// 4. MENAMPILKAN HASIL KE HALAMAN WEB
// ======================================================

document.write(`

<!DOCTYPE html>

<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Sistem Evaluasi Praktikum
    </title>


    <style>

        body {

            margin: 0;

            font-family: Arial, sans-serif;

            background-color: #f1f5f9;

            color: #1e293b;

        }


        .container {

            width: 90%;

            max-width: 1100px;

            margin: 40px auto;

        }


        .header {

            background-color: #2563eb;

            color: white;

            padding: 30px;

            border-radius: 15px;

            margin-bottom: 25px;

        }


        .header h1 {

            margin-top: 0;

        }


        .cards {

            display: grid;

            grid-template-columns:
                repeat(auto-fit, minmax(220px, 1fr));

            gap: 20px;

        }


        .card {

            background-color: white;

            padding: 20px;

            border-radius: 15px;

            box-shadow:
                0 4px 10px
                rgba(0, 0, 0, 0.10);

        }


        .card h2 {

            margin-top: 0;

            color: #2563eb;

        }


        .nilai {

            font-size: 30px;

            font-weight: bold;

            margin: 10px 0;

        }


        .status {

            display: inline-block;

            padding: 7px 15px;

            border-radius: 20px;

            font-weight: bold;

        }


        .lulus {

            background-color: #dcfce7;

            color: #166534;

        }


        .tidak-lulus {

            background-color: #fee2e2;

            color: #991b1b;

        }


        .footer {

            text-align: center;

            margin-top: 30px;

            color: #64748b;

        }

    </style>

</head>


<body>


<div class="container">


    <!-- HEADER -->

    <div class="header">

        <h1>
            Sistem Evaluasi Praktikum
        </h1>

        <p>
            Laporan Performa Praktikan
        </p>

        <p>
            Asisten Lab:
            <strong>
                ${namaAsisten}
            </strong>
        </p>

    </div>


    <!-- CARD PRAKTIKAN -->

    <div class="cards">

`);


// ======================================================
// MENAMPILKAN DATA SETIAP PRAKTIKAN
// ======================================================

// hasilPraktikan.forEach(function(praktikan) {

//     let classStatus;

//     if (praktikan.status === "LULUS") {

//         classStatus = "lulus";

//     } else {

//         classStatus = "tidak-lulus";

//     }

for (const praktikan of hasilPraktikan) {
    let classStatus;

    if (praktikan.status === "LULUS") {
        classStatus = "lulus";
    } else {
        classStatus = "tidak-lulus";
    }


    document.write(`

        <div class="card">

            <h2>
                ${praktikan.nama}
            </h2>


            <p>
                <strong>
                    Nilai Tugas:
                </strong>
            </p>


            <p>
                ${praktikan.nilaiTugas.join(" - ")}
            </p>


            <p>
                <strong>
                    Rata-rata:
                </strong>
            </p>


            <div class="nilai">

                ${praktikan.rataRata.toFixed(2)}

            </div>


            <p>
                Status:
            </p>


            <span class="status ${classStatus}">

                ${praktikan.status}

            </span>

        </div>

    `);

};


// ======================================================
// FOOTER
// ======================================================

document.write(`

    </div>


    <div class="footer">

        <p>
            Batas Kelulusan:
            <strong>75</strong>
        </p>

        <p>
            Sistem Evaluasi Praktikum Interaktif
        </p>

    </div>


</div>


</body>

</html>

`);


// ======================================================
// 5. MENAMPILKAN HASIL AKHIR DI CONSOLE
// ======================================================

console.log("=================================");

console.log("HASIL EVALUASI PRAKTIKAN");

console.log("=================================");

console.log(hasilPraktikan);

}