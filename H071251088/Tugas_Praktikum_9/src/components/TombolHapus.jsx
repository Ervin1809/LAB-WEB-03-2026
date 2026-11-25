"use client";

import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id }) {
  async function handleDelete() {
    const yakin = confirm(
      "Apakah kamu yakin ingin menghapus buku ini?"
    );

    if (!yakin) {
      return;
    }

    await hapusBuku(id);
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
    >
      Hapus
    </button>
  );
}