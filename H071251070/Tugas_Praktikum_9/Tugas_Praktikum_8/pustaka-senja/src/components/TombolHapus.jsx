
"use client";

import { hapusBuku } from "@/app/katalog/action.jsx";

export default function TombolHapus({ id }) {
  return (
    <form
      action={hapusBuku}
      onSubmit={(e) => {
        if (!confirm("Yakin ingin menghapus buku ini?")) {
          e.preventDefault();
        }
      }}
    >
      <input
        type="hidden"
        name="id"
        value={id}
      />

      <button
        type="submit"
        className="rounded-lg bg-red-600 px-4 py-2 text-white"
      >
        Hapus
      </button>
    </form>
  );
}
