
"use client";

import { useState } from "react";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [telepon, setTelepon] = useState("");
    const [keperluan, setKeperluan] = useState("");
    const [pesan, setPesan] = useState("");
    const [error, setError] = useState({});
    const [berhasil, setBerhasil] = useState("");

    function kirim(e) {
        e.preventDefault();

        const errorBaru = {};
        const nomorAngka = telepon.replace(/\D/g, "");

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }

        if (!email.includes("@")) {
            errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
        }

        if (nomorAngka.length < 10) {
            errorBaru.telepon = "Nomor HP minimal 10 angka.";
        }

        if (!keperluan) {
            errorBaru.keperluan = "Pilih salah satu keperluan.";
        }

        if (pesan.trim().length < 10) {
            errorBaru.pesan = "Pesan minimal 10 karakter.";
        }

        setError(errorBaru);

        setBerhasil(
            Object.keys(errorBaru).length === 0
                ? `Terima kasih, ${nama.trim()}! Pesanmu sudah lolos pemeriksaan.`
                : ""
        );
    }

    return (
        <form onSubmit={kirim} noValidate className="space-y-5 w-full">

            <div>
                <label htmlFor="nama" className="block font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1.5">
                    Nama lengkap
                </label>

                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Bambang Suherman"
                    className={kelasInput}
                />

                {error.nama && (
                    <p className="mt-1 text-sm text-aksen dark:text-red-300">
                        {error.nama}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1.5">
                    Email
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="namakamu@gmail.com"
                    className={kelasInput}
                />

                {error.email && (
                    <p className="mt-1 text-sm text-aksen dark:text-red-300">
                        {error.email}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="nohp" className="block font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1.5">
                    Nomor HP
                </label>

                <input
                    type="tel"
                    id="nohp"
                    name="nohp"
                    value={telepon}
                    onChange={(e) => setTelepon(e.target.value)}
                    placeholder="089876543210"
                    className={kelasInput}
                />

                {error.telepon && (
                    <p className="mt-1 text-sm text-aksen dark:text-red-300">
                        {error.telepon}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="keperluan" className="block font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1.5">
                    Keperluan
                </label>

                <select
                    id="keperluan"
                    name="keperluan"
                    value={keperluan}
                    onChange={(e) => setKeperluan(e.target.value)}
                    className={kelasInput}
                >
                    <option value="">-- Pilih keperluan kamu --</option>
                    <option value="kerjasama">Kerjasama / Proyek</option>
                    <option value="Tanya">Pertanyaan Umum</option>
                </select>

                {error.keperluan && (
                    <p className="mt-1 text-sm text-aksen dark:text-red-300">
                        {error.keperluan}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="pesan" className="block font-semibold text-sm text-gray-800 dark:text-gray-100 mb-1.5">
                    Pesan
                </label>

                <textarea
                    id="pesan"
                    name="pesan"
                    rows={5}
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    placeholder="Tuliskan pesanmu di sini ya..."
                    className={kelasInput}
                />

                {error.pesan && (
                    <p className="mt-1 text-sm text-aksen dark:text-red-300">
                        {error.pesan}
                    </p>
                )}
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors duration-200 shadow-sm"
                >
                    Kirim Pesan
                </button>
            </div>

            {berhasil && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                    {berhasil}
                </p>
            )}

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                *Pengiriman pesan masih belum terhubung🙏.
            </p>

        </form>
    );
}
