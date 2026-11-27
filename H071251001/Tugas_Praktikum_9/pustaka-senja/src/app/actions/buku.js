
"use server";

import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// F3: CREATE - Menambahkan Buku
export async function createBuku(formData) {
  const judul = formData.get("judul")?.toString().trim();
  const penulis = formData.get("penulis")?.toString().trim();
  const kategori = formData.get("kategori")?.toString().trim();
  const tahunInput = formData.get("tahun")?.toString().trim();
  const tersediaInput = formData.get("tersedia")?.toString();
  const sinopsis = formData.get("sinopsis")?.toString().trim();

  if (!judul || !penulis || !kategori || !tahunInput || !tersediaInput) {
    throw new Error("Semua data wajib diisi.");
  }

  const tahun = Number(tahunInput);

  if (
    !Number.isInteger(tahun) ||
    tahun < 1 ||
    tahun > new Date().getFullYear()
  ) {
    throw new Error("Tahun terbit tidak valid.");
  }

  if (tersediaInput !== "true" && tersediaInput !== "false") {
    throw new Error("Status ketersediaan tidak valid.");
  }

  const tersedia = tersediaInput === "true";

  await pool.query(
    `INSERT INTO buku
      (judul, penulis, kategori, tahun, tersedia, sinopsis)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [judul, penulis, kategori, tahun, tersedia, sinopsis || null]
  );

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}

// F4: UPDATE - Mengubah Data Buku
export async function updateBuku(formData) {
  const idInput = formData.get("id")?.toString();
  const judul = formData.get("judul")?.toString().trim();
  const penulis = formData.get("penulis")?.toString().trim();
  const kategori = formData.get("kategori")?.toString().trim();
  const tahunInput = formData.get("tahun")?.toString().trim();
  const tersediaInput = formData.get("tersedia")?.toString();
  const sinopsis = formData.get("sinopsis")?.toString().trim();

  const id = Number(idInput);

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("ID buku tidak valid.");
  }

  if (!judul || !penulis || !kategori || !tahunInput || !tersediaInput) {
    throw new Error("Semua data wajib diisi.");
  }

  const tahun = Number(tahunInput);

  if (
    !Number.isInteger(tahun) ||
    tahun < 1 ||
    tahun > new Date().getFullYear()
  ) {
    throw new Error("Tahun terbit tidak valid.");
  }

  if (tersediaInput !== "true" && tersediaInput !== "false") {
    throw new Error("Status ketersediaan tidak valid.");
  }

  const tersedia = tersediaInput === "true";

  const hasil = await pool.query(
    `UPDATE buku
     SET judul = $1,
         penulis = $2,
         kategori = $3,
         tahun = $4,
         tersedia = $5,
         sinopsis = $6
     WHERE id = $7`,
    [judul, penulis, kategori, tahun, tersedia, sinopsis || null, id]
  );

  if (hasil.rowCount === 0) {
    throw new Error("Buku tidak ditemukan.");
  }

  revalidatePath("/katalog");
  revalidatePath("/");
  revalidatePath(`/katalog/${id}`);

  redirect("/katalog");
}


// F5: DELETE - Menghapus Buku
export async function deleteBuku(formData) {
  const idInput = formData.get("id")?.toString();
  const id = Number(idInput);

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("ID buku tidak valid.");
  }

  const hasil = await pool.query(
    "DELETE FROM buku WHERE id = $1",
    [id]
  );

  if (hasil.rowCount === 0) {
    throw new Error("Buku tidak ditemukan.");
  }

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}