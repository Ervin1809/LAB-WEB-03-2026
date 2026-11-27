import FormTambahBuku from "@/components/FormTambahBuku";

export default function TambahBukuPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-amber-950">
        Tambah Buku Baru
      </h1>
      <p className="mt-1 text-stone-600">
        Isi formulir di bawah untuk menambahkan buku ke koleksi Pustaka Senja.
      </p>

      <FormTambahBuku />
    </section>
  );
}
