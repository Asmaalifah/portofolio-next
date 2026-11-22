
import { Suspense } from "react";
import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Proyek",
  description:
    "Daftar proyek HTML, CSS, dan JavaScript karya Asma Alifah.",
};

async function DaftarProyekData() {
  const { data: proyek, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gagal mengambil data proyek:", error.message);

    return (
      <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center">
        Data proyek gagal dimuat: {error.message}
      </p>
    );
  }

  if (!proyek || proyek.length === 0) {
    return (
      <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
        Belum ada proyek di database.
      </p>
    );
  }

  // Salin data proyek
  const proyekTersusun = [...proyek];

  // Cari posisi Interactive Digital
  const indexInteractive = proyekTersusun.findIndex(
    (item) => item.judul?.trim() === "Interactive Digital"
  );

  // Cari posisi Halaman Profil
  const indexHalaman = proyekTersusun.findIndex(
    (item) => item.judul?.trim() === "Halaman Profil"
  );

  // Tukar posisi kedua proyek
  if (indexInteractive !== -1 && indexHalaman !== -1) {
    const sementara = proyekTersusun[indexInteractive];

    proyekTersusun[indexInteractive] =
      proyekTersusun[indexHalaman];

    proyekTersusun[indexHalaman] = sementara;
  }

  return <FilterProyek proyek={proyekTersusun} />;
}

export default function DaftarProyek() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Proyek Saya
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">
        Kumpulan hasil belajar saya di Kelas Industri UBIG.
        Klik kartu untuk melihat detailnya.
      </p>

      <Suspense
        fallback={
          <p className="mt-8 text-muted-foreground">
            Memuat proyek...
          </p>
        }
      >
        <DaftarProyekData />
      </Suspense>
    </main>
  );
}
