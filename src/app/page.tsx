import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <>
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Hero
        nama="Asma Alifah"
        tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <section 
        id="tentang"
        className="mt-10 scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">Tentang Saya</h2>
        <p className="leading-7 text-gray-700">
          Saya senang mempelajari hal baru di dunia teknologi,
          khususnya pengembangan website. Saya ingin terus menigkatkan 
          kemampuan agar bisa membuat website yang bermanfaat.
        </p>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-utama">Hobi</h2>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>DIY</li>
            <li>Mempelajari teknologi</li>
            <li>Mendengarkan musik</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-utama">Cita-cita</h2>
          <p className="mb-3 text-gray-700">
            Menjadi Full Stack Web Developer. Langkah yang saya rencanakan:
          </p>
          <ol className="list-inside list-decimal space-y-2 text-gray-700">
            <li>Menyelesaikan pembelajaran di kelas industri UBIG.</li>
            <li>Magang di perusahaan teknologi.</li>
            <li>Bekerja sebagai Web Developer.</li>
          </ol>
        </section>
      </div>

      <section id="keahlian" className="mt-10 scroll-mt-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-utama">Keahlian</h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-utama">Jadwal Belajar</h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left">
              <thead className="bg-utama text-white">
                <tr>
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="p-3">Senin</td>
                  <td className="p-3">19.00–20.00</td>
                  <td className="p-3">Membaca ulang modul</td>
                </tr>
                <tr>
                  <td className="p-3">Selasa</td>
                  <td className="p-3">19.00–21.00</td>
                  <td className="p-3">Mengerjakan tugas praktik</td>
                </tr>
                <tr>
                  <td className="p-3">Rabu</td>
                  <td className="p-3">19.30–20.30</td>
                  <td className="p-3">Membuat proyek website</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
    
      <footer className="mt-8 bg-utama px-4 py-6 text-center text-white">
        <p>
          © 2026 Asma Alifah. Dibuat dengan Next.js di Kelas Industri UBIG.
        </p>
      </footer>
    </>
  );
}