import { notFound } from "next/navigation";
import pool from "@/lib/db";
import FormEditBuku from "@/components/FormEditBuku";

export default async function EditBukuPage({ params }) {
  const { id } = await params;

  const { rows } = await pool.query(
    `SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis
     FROM buku
     WHERE id = $1`,
    [Number(id)]
  );

  if (rows.length === 0) notFound();

  const buku = rows[0];

  return (
    <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-amber-950">
        Edit Buku
      </h1>
      <p className="mt-1 text-stone-600">
        Perbarui informasi buku &ldquo;{buku.judul}&rdquo;.
      </p>

      <FormEditBuku buku={buku} />
    </section>
  );
}
