"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.js"];

const tombolBiasa =
  "rounded-full border border-utama px-4 py-1 text-sm font-semibold text-utama dark:border-sky-200 dark:text-sky-200";

const tombolAktif =
  "rounded-full border border-aksen bg-aksen px-4 py-1 text-sm font-semibold text-white";

export default function FilterProyek({ proyek }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  const kataKecil = kata.toLowerCase();

  const hasil = proyek.filter((p) => {
    // Menyamakan kategori tanpa membedakan huruf besar dan kecil
    const kategoriTombol = kategori.toLowerCase();

    const cocokKategori =
      kategori === "Semua" ||
      (Array.isArray(p.kategori)
        ? p.kategori.some(
            (k) => String(k).toLowerCase() === kategoriTombol
          )
        : String(p.kategori || "").toLowerCase() === kategoriTombol);

    // Mencari berdasarkan judul proyek
    const judul = String(
      p.judul || p.title || p.nama || p.name || ""
    ).toLowerCase();

    // Mencari berdasarkan deskripsi proyek
    const deskripsi = String(
      p.deskripsi || p.description || ""
    ).toLowerCase();

    const cocokJudul = judul.includes(kataKecil);
    const cocokDeskripsi = deskripsi.includes(kataKecil);
    const cocokKata = cocokJudul || cocokDeskripsi;

    return cocokKategori && cocokKata;
  });

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKategori(k)}
            className={kategori === k ? tombolAktif : tombolBiasa}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <label htmlFor="cari" className="block font-semibold">
          Cari proyek
        </label>

        <input
          type="text"
          id="cari"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Contoh: mobile responsive"
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400 md:w-80"
        />

        {kata !== "" && (
          <button
            type="button"
            onClick={() => setKata("")}
            className="mt-2 text-sm font-semibold text-aksen hover:underline dark:text-red-300"
          >
            Hapus pencarian
          </button>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Menampilkan {hasil.length} dari {proyek.length} proyek
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {hasil.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>

      {hasil.length === 0 && (
        <p className="mt-6 rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-600 dark:border-gray-600 dark:text-gray-400">
          Belum ada proyek yang cocok.
        </p>
      )}
    </div>
  );
}