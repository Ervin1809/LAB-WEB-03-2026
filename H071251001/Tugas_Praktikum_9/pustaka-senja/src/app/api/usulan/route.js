
import { pool } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { nama, judul, kategori, alasan } = await request.json();

    if (!nama || !judul || !kategori || !alasan) {
      return Response.json(
        { message: "Semua data wajib diisi." },
        { status: 400 }
      );
    }

    await pool.query(
      `INSERT INTO usulan_buku
       (nama_pengusul, judul, kategori, alasan)
       VALUES ($1, $2, $3, $4)`,
      [nama, judul, kategori, alasan]
    );

    return Response.json(
      { message: "Usulan buku berhasil disimpan." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error menyimpan usulan:", error);

    return Response.json(
      { message: "Terjadi kesalahan saat menyimpan usulan." },
      { status: 500 }
    );
  }
}
