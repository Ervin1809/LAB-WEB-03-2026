
// MENGAMBIL ELEMEN DARI HTML

const statusAnggota = document.getElementById("statusAnggota");
const daftarAnggota = document.getElementById("daftarAnggota");

const judulTugas = document.getElementById("judulTugas");
const ringkasanTugas = document.getElementById("ringkasanTugas");
const statusTugas = document.getElementById("statusTugas");
const daftarTugas = document.getElementById("daftarTugas");

const cariTugas = document.getElementById("cariTugas");
const pesanPencarian = document.getElementById("pesanPencarian");

const formTugas = document.getElementById("formTugas");
const inputTugas = document.getElementById("inputTugas");
const tombolSimpan = document.getElementById("tombolSimpan");
const pesanForm = document.getElementById("pesanForm");

const progressBar = document.getElementById("progressBar");



// F1 - MENGAMBIL DATA ANGGOTA
async function ambilAnggota() {

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(
                "Gagal mengambil data anggota"
            );
        }

        const anggota = await response.json();

        statusAnggota.textContent = "";

        anggota.forEach(function (user, index) {

            const tombolAnggota =
                document.createElement("button");

            tombolAnggota.classList.add(
                "w-full",
                "flex",
                "items-center",
                "gap-3",
                "p-2",
                "rounded-lg",
                "text-left",
                "hover:bg-blue-50"
            );


            // membuat nomor anggota
            const nomor =
                document.createElement("span");

            nomor.textContent =
                String(index + 1).padStart(2, "0");

            nomor.classList.add(
                "nomor-anggota",
                "border",
                "rounded-md",
                "px-2",
                "py-1",
                "text-sm",
                "font-mono"
            );


            // membuat nama anggota
            const nama =
                document.createElement("span");

            nama.textContent = user.name;

            nama.classList.add(
                "nama-anggota"
            );


            tombolAnggota.appendChild(nomor);
            tombolAnggota.appendChild(nama);


            // ketika anggota diklik
            tombolAnggota.addEventListener(
                "click",
                function () {

                    const semuaTombol =
                        daftarAnggota.querySelectorAll(
                            "button"
                        );


                    // menghapus style aktif sebelumnya
                    semuaTombol.forEach(
                        function (tombol) {

                            tombol.classList.remove(
                                "bg-blue-100",
                                "text-blue-700",
                                "font-semibold"
                            );

                            const nomorLama =
                                tombol.querySelector(
                                    ".nomor-anggota"
                                );

                            nomorLama.classList.remove(
                                "bg-blue-600",
                                "text-white",
                                "border-blue-600"
                            );
                        }
                    );


                    // memberikan style aktif
                    tombolAnggota.classList.add(
                        "bg-blue-100",
                        "text-blue-700",
                        "font-semibold"
                    );

                    nomor.classList.add(
                        "bg-blue-600",
                        "text-white",
                        "border-blue-600"
                    );


                    // mengambil tugas anggota
                    ambilTugas(
                        user.id,
                        user.name
                    );
                }
            );


            daftarAnggota.appendChild(
                tombolAnggota
            );
        });


    } catch (error) {

        statusAnggota.textContent =
            "Gagal memuat daftar anggota.";

        statusAnggota.classList.add(
            "text-red-500"
        );
    }
}



// MEMBUAT TAMPILAN SATU TUGAS 
// MEMBUAT TAMPILAN SATU TUGAS
// ==========================================

function buatElemenTugas(item) {

    // membuat baris tugas
    const elemenTugas =
        document.createElement("div");

    elemenTugas.classList.add(
        "item-tugas",
        "flex",
        "items-center",
        "justify-between",
        "gap-4",
        "px-6",
        "py-4",
        "border-b",
        "hover:bg-gray-50"
    );


    // BAGIAN KIRI
    const bagianKiri =
        document.createElement("div");

    bagianKiri.classList.add(
        "flex",
        "items-center",
        "gap-3",
        "min-w-0"
    );


    // LINGKARAN STATUS

    const status =
        document.createElement("button");

    status.type = "button";

    status.classList.add(
        "w-5",
        "h-5",
        "rounded-full",
        "border",
        "flex",
        "items-center",
        "justify-center",
        "text-xs",
        "shrink-0",
        "cursor-pointer"
    );


    // judul tugas
    const judul =
        document.createElement("span");

    judul.classList.add(
        "judul-tugas"
    );

    judul.textContent =
        item.title;


    bagianKiri.appendChild(status);
    bagianKiri.appendChild(judul);



    // BAGIAN TOMBOL

    const bagianTombol =
        document.createElement("div");

    bagianTombol.classList.add(
        "flex",
        "gap-2",
        "shrink-0"
    );


    // MEMBUAT TOMBOL TANDAI SELESAI

    const tombolSelesai =
        document.createElement("button");

    tombolSelesai.textContent =
        "Tandai selesai";

    tombolSelesai.classList.add(
        "border",
        "px-3",
        "py-1",
        "rounded-lg",
        "text-gray-600",
        "hover:bg-green-50",
        "hover:text-green-700"
    );



    // ======================================
    // FUNGSI MENGUBAH TAMPILAN STATUS
    // ======================================

    function perbaruiStatus() {

        // jika tugas selesai
        if (item.completed === true) {

            status.textContent = "✓";

            status.classList.add(
                "bg-green-600",
                "border-green-600",
                "text-white"
            );

            judul.classList.add(
                "line-through",
                "text-gray-400"
            );

            // tombol tandai selesai dihilangkan
            tombolSelesai.classList.add(
                "hidden"
            );

        } else {

            // jika tugas belum selesai
            status.textContent = "";

            status.classList.remove(
                "bg-green-600",
                "border-green-600",
                "text-white"
            );

            judul.classList.remove(
                "line-through",
                "text-gray-400"
            );

            // tombol tandai selesai dimunculkan kembali
            tombolSelesai.classList.remove(
                "hidden"
            );
        }
    }

    // KLIK BULATAN STATUS

    status.addEventListener(
        "click",
        function () {

            // membalik status
            // false menjadi true
            // true menjadi false
            item.completed =
                !item.completed;

            // memperbarui tampilan
            perbaruiStatus();

            // memperbarui progress
            updateProgress();
        }
    );



    
    // KLIK TOMBOL TANDAI SELESAI

    tombolSelesai.addEventListener(
        "click",
        function () {

            item.completed = true;

            perbaruiStatus();

            updateProgress();
        }
    );


    bagianTombol.appendChild(
        tombolSelesai
    );



    
    // TOMBOL HAPUS
    const tombolHapus =
        document.createElement("button");

    tombolHapus.textContent =
        "Hapus";

    tombolHapus.classList.add(
        "border",
        "px-3",
        "py-1",
        "rounded-lg",
        "text-gray-500",
        "hover:bg-red-50",
        "hover:text-red-600"
    );


    tombolHapus.addEventListener(
        "click",
        function () {

            elemenTugas.remove();

            updateProgress();

            jalankanPencarian();
        }
    );


    bagianTombol.appendChild(
        tombolHapus
    );


    // memasukkan bagian kiri dan tombol
    elemenTugas.appendChild(
        bagianKiri
    );

    elemenTugas.appendChild(
        bagianTombol
    );


    // menampilkan status awal
    perbaruiStatus();


    return elemenTugas;
}


// F2 - MENGAMBIL TUGAS ANGGOTA

async function ambilTugas(userId, namaUser) {

    try {

        statusTugas.textContent =
            "Memuat tugas...";

        daftarTugas.innerHTML = "";

        cariTugas.value = "";

        pesanPencarian.classList.add(
            "hidden"
        );

        judulTugas.textContent =
            "Tugas " + namaUser;

        ringkasanTugas.textContent =
            "Memuat tugas...";

        progressBar.style.width =
            "0%";


        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?userId=" + userId
        );


        if (!response.ok) {

            throw new Error(
                "Gagal mengambil data tugas"
            );
        }


        const tugas =
            await response.json();

        statusTugas.textContent = "";


        tugas.forEach(
            function (item) {

                const elemenTugas =
                    buatElemenTugas(item);

                daftarTugas.appendChild(
                    elemenTugas
                );
            }
        );


        updateProgress();


    } catch (error) {

        statusTugas.textContent =
            "Gagal memuat daftar tugas.";

        statusTugas.classList.add(
            "text-red-500"
        );
    }
}


// F3 - PENCARIAN TUGAS

function jalankanPencarian() {

    const kataKunci =
        cariTugas.value
            .toLowerCase()
            .trim();


    const semuaTugas =
        daftarTugas.querySelectorAll(
            ".item-tugas"
        );


    let jumlahCocok = 0;


    semuaTugas.forEach(
        function (tugas) {

            const judul =
                tugas.querySelector(
                    ".judul-tugas"
                );

            const teksJudul =
                judul.textContent
                    .toLowerCase();


            if (
                teksJudul.includes(
                    kataKunci
                )
            ) {

                tugas.classList.remove(
                    "hidden"
                );

                jumlahCocok++;

            } else {

                tugas.classList.add(
                    "hidden"
                );
            }
        }
    );


    if (
        jumlahCocok === 0 &&
        kataKunci !== ""
    ) {

        pesanPencarian.classList.remove(
            "hidden"
        );

    } else {

        pesanPencarian.classList.add(
            "hidden"
        );
    }
}

// event ketika mengetik pencarian
cariTugas.addEventListener(
    "input",
    jalankanPencarian
);




// MEMPERBARUI PROGRESS
function updateProgress() {

    const semuaTugas =
        daftarTugas.querySelectorAll(
            ".item-tugas"
        );


    const tugasSelesai =
        daftarTugas.querySelectorAll(
            ".item-tugas .line-through"
        );


    const jumlahSemua =
        semuaTugas.length;

    const jumlahSelesai =
        tugasSelesai.length;


    ringkasanTugas.textContent =
        jumlahSelesai +
        " dari " +
        jumlahSemua +
        " tugas selesai";


    let persen = 0;


    if (jumlahSemua > 0) {

        persen =
            (jumlahSelesai / jumlahSemua)
            * 100;
    }


    progressBar.style.width =
        persen + "%";
}



// ==========================================
// F4 - PROMISE SIMPAN TUGAS
// ==========================================

function simpanTugas(judul) {

    return new Promise(
        function (resolve, reject) {

            setTimeout(
                function () {

                    const semuaJudul =
                        daftarTugas.querySelectorAll(
                            ".judul-tugas"
                        );


                    let duplikat = false;


                    semuaJudul.forEach(
                        function (tugas) {

                            if (
                                tugas.textContent
                                    .toLowerCase() ===
                                judul.toLowerCase()
                            ) {

                                duplikat = true;
                            }
                        }
                    );


                    if (duplikat) {

                        reject(
                            new Error(
                                "Tugas sudah ada."
                            )
                        );

                    } else {

                        resolve({

                            title: judul,

                            completed: false
                        });
                    }

                },

                1000
            );
        }
    );
}



// F4 - FORM TAMBAH TUGAS
formTugas.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const judulBaru =
            inputTugas.value.trim();


        pesanForm.classList.add(
            "hidden"
        );

        pesanForm.textContent = "";



        // VALIDASI MINIMAL 5 KARAKTER

        if (judulBaru.length < 5) {

            pesanForm.textContent =
                "Judul terlalu pendek, minimal 5 karakter.";


            pesanForm.classList.remove(
                "hidden"
            );


            pesanForm.classList.remove(
                "text-green-600"
            );


            pesanForm.classList.add(
                "text-red-500"
            );


            inputTugas.classList.add(
                "border-red-500"
            );


            return;
        }



        inputTugas.classList.remove(
            "border-red-500"
        );



        try {

            tombolSimpan.textContent =
                "Menyimpan...";

            tombolSimpan.disabled =
                true;


            const tugasBaru =
                await simpanTugas(
                    judulBaru
                );


            const elemenTugas =
                buatElemenTugas(
                    tugasBaru
                );


            daftarTugas.appendChild(
                elemenTugas
            );


            updateProgress();


            inputTugas.value = "";


            pesanForm.textContent =
                "Tugas berhasil ditambahkan.";


            pesanForm.classList.remove(
                "hidden",
                "text-red-500"
            );


            pesanForm.classList.add(
                "text-green-600"
            );


            setTimeout(
                function () {

                    pesanForm.classList.add(
                        "hidden"
                    );

                    pesanForm.textContent =
                        "";

                },

                3000
            );


        } catch (error) {

            pesanForm.textContent =
                error.message;


            pesanForm.classList.remove(
                "hidden",
                "text-green-600"
            );


            pesanForm.classList.add(
                "text-red-500"
            );


        } finally {

            tombolSimpan.textContent =
                "Simpan";

            tombolSimpan.disabled =
                false;
        }
    }
);




// MENGHILANGKAN ERROR SAAT USER MENGETIK

inputTugas.addEventListener(
    "input",
    function () {

        if (
            inputTugas.value.trim().length >= 5
        ) {

            inputTugas.classList.remove(
                "border-red-500"
            );


            if (
                pesanForm.textContent ===
                "Judul terlalu pendek, minimal 5 karakter."
            ) {

                pesanForm.classList.add(
                    "hidden"
                );

                pesanForm.textContent = "";
            }
        }
    }
);


ambilAnggota();