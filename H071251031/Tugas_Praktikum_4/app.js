const daftarAsisten = ['Ervin', 'Lia']

let namaInput = '';
let isAsistenValid = false;

while (!isAsistenValid) {
    namaInput = prompt('Masukkan nama Asisten Lab: ');

    if (asistenLowerCase.some(nama => nama.toLowerCase() === namaInput.toLowerCase())) {
        isAsistenValid = true;
        alert('Selamat datang, ' + namaInput);
    } else {
        alert('Asisten tidak terdaftar! Silahkan coba lagi');
    }
}

const dataPraktikan = [
    { nama: "Alief", nilaiTugas: [80, 85, 90] }, 
    { nama: "Farhan", nilaiTugas: [60, 60, 60] }, 
    { nama: "Heindro", nilaiTugas: [90, 90, 90] }, 
    { nama: "Ilmi", nilaiTugas: [75, 75, 75] }, 
    { nama: "Panrita", nilaiTugas: [45, 45, 45] } 
]

function hitungRataRata (nilaiTugas) {
    let total = 0;
    for (let number = 0; number < nilaiTugas.length; number++) {
        total = total + nilaiTugas[number];
    }
    return total / nilaiTugas.length;
}

const hasilPraktikan = dataPraktikan.map(function(data) {
    const rataRata = hitungRataRata(data.nilaiTugas);
    
    let status;

    if (rataRata >= 75) {
        status = 'LULUS';
    } else {
        status = 'TIDAK LULUS';
    }

    return {
        name: data.nama,
        nilaiTugas: data.nilaiTugas,
        rataRata: rataRata,
        status: status
    };

});

document.write(`
  <style>
    * {
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    body {
      background-color: #f4f6f9;
      margin: 0;
      padding: 30px;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #2c3e50;
      margin-bottom: 5px;
    }
    .header p {
      color: #7f8c8d;
      font-size: 0.95rem;
    }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .card {
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      border-top: 5px solid #007bff;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    .card h3 {
      margin-top: 0;
      color: #333;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    .card p {
      margin: 8px 0;
      color: #555;
      font-size: 0.9rem;
    }
    .badge {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.8rem;
      margin-top: 10px;
    }
    .badge-lulus {
      background-color: #d4edda;
      color: #155724;
    }
    .badge-gagal {
      background-color: #f8d7da;
      color: #721c24;
    }
  </style>

  <div class="header">
    <h1>Sistem Laporan Praktikum</h1>
    <p>Berikut adalah hasil praktikan yang telah diverifikasi.</p>
    <p>Diverifikasi oleh Asisten Lab: <strong>${namaInput || 'Tamu'}</strong></p>
  </div>
  <div class="container">
`);

for (let hasil of hasilPraktikan) {
    const badgeClass = hasil.status === 'LULUS' ? 'badge-lulus' : 'badge-gagal';
    document.write (`
      <div class="card">
        <h3>${hasil.name}</h3>
        <p><strong>Nilai Tugas:</strong> ${hasil.nilaiTugas.join(', ')}</p>
        <p><strong>Rata-rata:</strong> ${hasil.rataRata.toFixed(2)}</p>
        <span class="badge ${badgeClass}">${hasil.status}</span>
      </div>
    `)
};

document.write(`</div>`);

console.log(hasilPraktikan);