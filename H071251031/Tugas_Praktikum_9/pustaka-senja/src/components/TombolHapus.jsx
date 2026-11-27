"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id, judul }) {
  const [isOpen, setIsOpen] = useState(false);

  const modal = isOpen ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-md rounded-xl border border-amber-200/80 bg-stone-50 p-6 shadow-xl">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
        </div>

        <h2
          id="modal-title"
          className="mt-4 text-center font-serif text-xl font-bold text-amber-950"
        >
        </h2>

        <p className="mt-2 text-center text-sm text-stone-600">
          Kamu akan menghapus{" "}
          <span className="font-semibold text-amber-900">
            &ldquo;{judul}&rdquo;
          </span>{" "}
          dari koleksi Pustaka Senja. Tindakan ini tidak dapat dibatalkan.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
          <form action={hapusBuku} className="flex-1">
            <input type="hidden" name="id" value={id} />
            <button
              type="submit"
              className="w-full rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Ya, Hapus Buku
            </button>
          </form>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex-1 rounded-md border border-amber-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-amber-50"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-sm font-medium text-red-500 underline-offset-4 hover:text-red-700 hover:underline"
      >
        Hapus
      </button>

      {typeof document !== "undefined" && createPortal(modal, document.body)}
    </>
  );
}
