"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pool from "@/lib/db";


const KATEGORI_VALID = ["Teknologi", "Fiksi", "Pengembangan Diri"];

function validatePayload(data) {
  const errors = [];
  if (!data.judul?.trim()) errors.push("Judul wajib diisi.");
  if (!data.penulis?.trim()) errors.push("Penulis wajib diisi.");
  if (!KATEGORI_VALID.includes(data.kategori))
    errors.push("Kategori tidak valid.");
  const tahun = Number(data.tahun);
  if (!tahun || tahun < 1000 || tahun > new Date().getFullYear())
    errors.push("Tahun tidak valid.");
  if (!data.sinopsis?.trim()) errors.push("Sinopsis wajib diisi.");
  return errors;
}

export async function tambahBuku(prevState, formData) {
  const data = {
    judul: formData.get("judul"),
    penulis: formData.get("penulis"),
    kategori: formData.get("kategori"),
    tahun: formData.get("tahun"),
    sinopsis: formData.get("sinopsis"),
    tersedia: formData.get("tersedia") === "true",
  };

  const errors = validatePayload(data);
  if (errors.length > 0) {
    return { success: false, message: errors.join(" ") };
  }

  try {
    await pool.query(
      `INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        data.judul.trim(),
        data.penulis.trim(),
        data.kategori,
        Number(data.tahun),
        data.tersedia,
        data.sinopsis.trim(),
      ]
    );
  } catch (err) {
    console.error("[tambahBuku] DB Error:", err);
    return { success: false, message: "Gagal menyimpan buku ke database." };
  }

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}

export async function editBuku(prevState, formData) {
  const id = formData.get("id");
  const data = {
    judul: formData.get("judul"),
    penulis: formData.get("penulis"),
    kategori: formData.get("kategori"),
    tahun: formData.get("tahun"),
    sinopsis: formData.get("sinopsis"),
    tersedia: formData.get("tersedia") === "true",
  };

  if (!id) return { success: false, message: "ID buku tidak ditemukan." };

  const errors = validatePayload(data);
  if (errors.length > 0) {
    return { success: false, message: errors.join(" ") };
  }

  try {
    const result = await pool.query(
      `UPDATE buku
       SET judul=$1, penulis=$2, kategori=$3, tahun=$4, tersedia=$5, sinopsis=$6
       WHERE id=$7`,
      [
        data.judul.trim(),
        data.penulis.trim(),
        data.kategori,
        Number(data.tahun),
        data.tersedia,
        data.sinopsis.trim(),
        Number(id),
      ]
    );

    if (result.rowCount === 0) {
      return { success: false, message: "Buku tidak ditemukan." };
    }
  } catch (err) {
    console.error("[editBuku] DB Error:", err);
    return { success: false, message: "Gagal memperbarui data buku." };
  }

  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  revalidatePath("/");
  redirect("/katalog");
}

export async function hapusBuku(formData) {
  const id = formData.get("id");

  if (!id) return;

  try {
    await pool.query(`DELETE FROM buku WHERE id=$1`, [Number(id)]);
  } catch (err) {
    console.error("[hapusBuku] DB Error:", err);
    return;
  }

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}
