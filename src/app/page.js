import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
export const revalidate = 60;

export default async function Home() {
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("id");

  const { data: proyekDariSupabase } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  const proyekTerbaru = [...(proyekDariSupabase || [])];
  const indexInteractive = proyekTerbaru.findIndex(
    (item) => item.judul?.trim() === "Interactive Digital"
  );
  const indexHalaman = proyekTerbaru.findIndex(
    (item) => item.judul?.trim() === "Halaman Profil"
  );

  if (indexInteractive !== -1 && indexHalaman !== -1) {
    [proyekTerbaru[indexInteractive], proyekTerbaru[indexHalaman]] = [
      proyekTerbaru[indexHalaman],
      proyekTerbaru[indexInteractive],
    ];
  }

  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <main className="mx-auto w-full max-w-5xl space-y-12 p-4 md:p-10">
        <Hero
          nama="Asma Alifah"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />

        <section id="keahlian" className="scroll-mt-6">
          <h2 className="mb-5 text-xl font-bold text-primary">Keahlian</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills &&
              skills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  nama={skill.nama}
                  level={skill.level}
                />
              ))}
          </div>

          <div className="mt-8 flex justify-start">
            <Link
              href="/keahlian"
              className={buttonVariants({ size: "lg" })}
            >
              Lihat semua keahlian
            </Link>
          </div>
        </section>

        <section className="pt-2">
          <h2 className="mb-5 text-xl font-bold text-primary">
            Proyek Terbaru
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>

          <div className="mt-8 flex justify-start">
            <Link
              href="/proyek"
              className={buttonVariants({ size: "lg" })}
            >
              Lihat semua proyek
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}