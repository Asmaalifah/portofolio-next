export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, cita-cita, dan jadwal belajar Asma Alifah.",
};

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
        Perkenalan
      </h1>

      <section
        id="Tentang"
        className="mt-10 scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
      >
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
          Tentang Saya
        </h2>

        <p className="leading-7 text-gray-700 dark:text-gray-300">
          Saya senang mempelajari hal baru di dunia teknologi,
          khususnya pengembangan website. Saya ingin terus meningkatkan
          kemampuan agar bisa membuat website yang bermanfaat.
        </p>
      </section>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
            Hobi
          </h2>

          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>DIY</li>
            <li>Mempelajari teknologi</li>
            <li>Mendengarkan musik</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
            Cita-cita
          </h2>

          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Menjadi Full Stack Web Developer. Langkah yang saya rencanakan:
          </p>

          <ol className="list-inside list-decimal space-y-2 text-gray-700 dark:text-gray-300">
            <li>Menyelesaikan pembelajaran di kelas industri UBIG.</li>
            <li>Magang di perusahaan teknologi.</li>
            <li>Bekerja sebagai Web Developer.</li>
          </ol>
        </section>
      </div>

      <section className="mt-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-5 text-2xl font-bold text-utama dark:text-sky-200">
            Jadwal Belajar
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left">
              <thead className="bg-utama text-white">
                <tr>
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:text-gray-300">
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
  );
}