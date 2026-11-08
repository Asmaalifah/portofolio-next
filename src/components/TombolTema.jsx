"use client";

import { useEffect, useState } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    // Mengambil tema yang tersimpan setelah komponen tampil
    useEffect(() => {
        const tema = localStorage.getItem("tema");

        if (tema === "gelap") {
            document.documentElement.classList.add("dark");
            setGelap(true);
        } else {
            document.documentElement.classList.remove("dark");
            setGelap(false);
        }
    }, []);

    function gantiTema() {
        const temaBaru = !gelap;

        setGelap(temaBaru);

        if (temaBaru) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("tema", "gelap");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("tema", "terang");
        }
    }

    return (
        <button
            type="button"
            onClick={gantiTema}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
        >
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}