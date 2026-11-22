import { Suspense } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

async function DaftarProyekTerbaru() {
  const { data: proyekTerbaru, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Gagal mengambil proyek terbaru:", error.message);
    return <p className="text-red-500">Gagal memuat proyek terbaru.</p>;
  }

  if (!proyekTerbaru || proyekTerbaru.length === 0) {
    return (
      <p className="text-muted-foreground">
        Belum ada proyek yang tersedia.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {proyekTerbaru.map((item) => (
        <ProyekCard key={item.slug} proyek={item} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Hero
        nama="Asma Alifah"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <section id="keahlian" className="mt-10 scroll-mt-8">
        <h2 className="mb-5 text-2xl font-bold text-primary">Keahlian</h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">
          Proyek Terbaru
        </h2>

        <Suspense
          fallback={
            <p className="text-muted-foreground">Memuat proyek terbaru...</p>
          }
        >
          <DaftarProyekTerbaru />
        </Suspense>

        <Link
          href="/proyek"
          className={buttonVariants({
            size: "lg",
            className: "mt-6",
          })}
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}