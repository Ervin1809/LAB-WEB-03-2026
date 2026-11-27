// --- 1. DEKLARASI ELEMEN DOM ---
const usersList = document.getElementById('users-list');
const usersLoading = document.getElementById('users-loading');
const usersError = document.getElementById('users-error');

const tasksContainer = document.getElementById('tasks-container');
const tasksTitle = document.getElementById('tasks-title');
const tasksList = document.getElementById('tasks-list');
const tasksSummary = document.getElementById('tasks-summary');
const tasksLoading = document.getElementById('tasks-loading');
const tasksError = document.getElementById('tasks-error');

const searchInput = document.getElementById('search-input');
const noTasksMsg = document.getElementById('no-tasks-msg');

const addTaskForm = document.getElementById('add-task-form');
const newTaskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const addTaskError = document.getElementById('add-task-error');
const addTaskSuccess = document.getElementById('add-task-success');

// --- FUNGSI BANTUAN: Memperbarui teks "X dari Y tugas selesai" ---
function updateSummary() {
    // Mencari semua elemen dengan class 'task-item'
    const totalTasks = tasksList.querySelectorAll('.task-item').length;
    // Mencari elemen tugas yang sudah memiliki class 'is-completed'
    const completedTasks = tasksList.querySelectorAll('.task-item.is-completed').length;
    
    tasksSummary.textContent = `${completedTasks} dari ${totalTasks} tugas selesai`;
}

// --- FUNGSI BANTUAN: Membuat elemen HTML untuk satu baris tugas ---
function createTaskElement(title, isCompleted) {
    // Membuat container <div> untuk tugas
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition gap-4';
    
    // Penanda jika tugas sudah selesai sejak awal (dari server)
    if (isCompleted) {
        taskDiv.classList.add('is-completed');
    }

    // Membuat <span> untuk judul tugas
    const titleSpan = document.createElement('span');
    titleSpan.className = 'task-title-text flex-1 font-medium text-gray-800';
    titleSpan.textContent = title;
    
    // Memberi coretan jika sudah selesai
    if (isCompleted) {
        titleSpan.classList.add('line-through', 'text-gray-400');
    }

    // Container <div> untuk grup tombol aksi
    const actionDiv = document.createElement('div');
    actionDiv.className = 'flex gap-2 shrink-0';

    // Membuat tombol "Tandai Selesai" jika belum selesai
    if (!isCompleted) {
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Tandai selesai';
        doneBtn.className = 'text-xs font-bold bg-green-500 text-white px-3 py-1.5 rounded hover:bg-green-600 transition';
        
        // Event saat tombol Selesai diklik (F5)
        doneBtn.addEventListener('click', () => {
            taskDiv.classList.add('is-completed');
            titleSpan.classList.add('line-through', 'text-gray-400');
            doneBtn.remove(); // Hapus tombol ini dari DOM
            updateSummary();  // Update angka ringkasan
        });
        actionDiv.appendChild(doneBtn);
    }

    // Membuat tombol "Hapus" (F5)
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Hapus';
    delBtn.className = 'text-xs font-bold bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition';
    delBtn.addEventListener('click', () => {
        taskDiv.remove(); // Hapus seluruh div tugas dari DOM
        updateSummary();  // Update angka ringkasan
    });

    actionDiv.appendChild(delBtn);
    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(actionDiv);
    
    tasksList.appendChild(taskDiv);
}

// --- FITUR 1: Menampilkan Daftar Anggota ---
async function loadUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`Gagal mengambil data! Status: ${response.status}`);
        
        const users = await response.json();
        usersLoading.remove(); // Hapus teks loading
        
        // Membuat elemen untuk setiap anggota
        users.forEach(user => {
            const btn = document.createElement('button');
            btn.className = 'user-btn w-full text-left px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-blue-50 transition font-medium text-gray-700';
            btn.textContent = user.name;
            
            // Event saat nama anggota diklik
            btn.addEventListener('click', () => {
                // Hapus penanda aktif (warna biru) dari semua tombol anggota
                document.querySelectorAll('.user-btn').forEach(b => {
                    b.classList.remove('bg-blue-100', 'border-blue-500', 'text-blue-800');
                });
                // Beri penanda ke tombol yang sedang diklik
                btn.classList.add('bg-blue-100', 'border-blue-500', 'text-blue-800');
                
                // Muat tugas milik anggota tersebut
                loadTasks(user.id, user.name);
            });
            
            usersList.appendChild(btn);
        });
    } catch (error) {
        usersLoading.remove();
        usersError.textContent = error.message;
        usersError.classList.remove('hidden');
    }
}

// --- FITUR 2: Menampilkan Tugas Anggota ---
async function loadTasks(userId, userName) {
    // Reset area tugas
    tasksContainer.classList.remove('hidden');
    tasksTitle.textContent = `Tugas ${userName}`;
    tasksList.innerHTML = ""; 
    tasksSummary.textContent = "";
    searchInput.value = "";
    noTasksMsg.classList.add('hidden');
    
    tasksLoading.classList.remove('hidden');
    tasksError.classList.add('hidden');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        if (!response.ok) throw new Error(`Gagal mengambil tugas! Status: ${response.status}`);
        
        const todos = await response.json();
        
        // Render semua tugas ke DOM
        todos.forEach(todo => {
            createTaskElement(todo.title, todo.completed);
        });
        
        // Kalkulasi awal ringkasan progres
        updateSummary();
    } catch (error) {
        tasksError.textContent = error.message;
        tasksError.classList.remove('hidden');
    } finally {
        tasksLoading.classList.add('hidden');
    }
}

// --- FITUR 3: Mencari Tugas ---
searchInput.addEventListener('input', (e) => {
    // Ubah ke huruf kecil semua agar tidak sensitif kapital (case-insensitive)
    const keyword = e.target.value.toLowerCase();
    const allTasks = tasksList.querySelectorAll('.task-item');
    let matchCount = 0;
    
    allTasks.forEach(task => {
        const titleText = task.querySelector('.task-title-text').textContent.toLowerCase();
        
        // Jika judul mengandung kata kunci, hapus class hidden. Jika tidak, tambahkan class hidden.
        if (titleText.includes(keyword)) {
            task.classList.remove('hidden');
            matchCount++;
        } else {
            task.classList.add('hidden');
        }
    });
    
    // Tampilkan pesan "Tidak ada tugas" jika tidak ada elemen yang cocok
    if (matchCount === 0 && allTasks.length > 0) {
        noTasksMsg.classList.remove('hidden');
    } else {
        noTasksMsg.classList.add('hidden');
    }
});

// --- FITUR 4: Menambah Tugas Baru (Simulasi Server API) ---
function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        // Simulasi proses loading 1 detik
        setTimeout(() => {
            const allTasksTitle = tasksList.querySelectorAll('.task-title-text');
            let isDuplicate = false;
            
            // Periksa duplikasi judul (mengabaikan huruf besar/kecil)
            allTasksTitle.forEach(span => {
                if (span.textContent.toLowerCase() === judul.toLowerCase()) {
                    isDuplicate = true;
                }
            });
            
            if (isDuplicate) {
                reject(new Error('Tugas dengan judul tersebut sudah ada di daftar!'));
            } else {
                // Kembalikan objek data baru
                resolve({ title: judul, completed: false });
            }
        }, 1000);
    });
}

// Event untuk menangani pengiriman form
addTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    // Ambil nilai input dan buang spasi di awal/akhir
    const judul = newTaskInput.value.trim();
    
    // Reset pesan
    addTaskError.classList.add('hidden');
    addTaskSuccess.classList.add('hidden');
    
    // Validasi panjang karakter
    if (judul.length < 5) {
        addTaskError.textContent = 'Gagal: Judul tugas tidak boleh kosong dan minimal 5 karakter!';
        addTaskError.classList.remove('hidden');
        return;
    }
    
    // Ubah status tombol jadi loading
    const originalBtnText = addTaskBtn.textContent;
    addTaskBtn.textContent = 'Menyimpan...';
    addTaskBtn.disabled = true;
    addTaskBtn.classList.add('opacity-50', 'cursor-not-allowed');
    
    try {
        const newTask = await simpanTugas(judul);
        
        // Tambahkan elemen baru ke layar dan perbarui progres
        createTaskElement(newTask.title, newTask.completed);
        updateSummary();
        
        // Kosongkan form
        newTaskInput.value = '';
        
        // Tampilkan sukses selama 3 detik
        addTaskSuccess.classList.remove('hidden');
        setTimeout(() => {
            addTaskSuccess.classList.add('hidden');
        }, 3000);
        
    } catch (error) {
        // Tampilkan pesan error dari fungsi Promise reject()
        addTaskError.textContent = error.message;
        addTaskError.classList.remove('hidden');
    } finally {
        // Kembalikan teks tombol ke keadaan semula
        addTaskBtn.textContent = originalBtnText;
        addTaskBtn.disabled = false;
        addTaskBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
});

// Panggil fitur 1 (ambil data) secara otomatis pertama kali halaman dimuat
loadUsers();