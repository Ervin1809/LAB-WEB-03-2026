import { pool } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const hasil = await pool.query(
      "SELECT * FROM buku ORDER BY id ASC"
    );

    return Response.json({
      sukses: true,
      data: hasil.rows,
    });
  } catch (error) {
    console.error("Gagal mengambil data buku:", error);

    return Response.json(
      {
        sukses: false,
        pesan: "Gagal mengambil data buku",
      },
      { status: 500 }
    );
  }
}