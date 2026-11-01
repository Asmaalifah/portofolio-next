import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return proyek.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = proyek.find((p) => p.slug === slug);

  if (!item) {
    return { title: "Proyek tidak ditemukan" };
  }

  return {
    title: item.judul,
    description: item.deskripsi,
  };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const item = proyek.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/proyek"
        className="text-sm font-semibold text-aksen hover:underline"
      >
        &larr; Kembali ke daftar proyek
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-utama md:text-4xl">
        {item.judul}
      </h1>

      <p className="mt-2 text-gray-600">
        {item.kategori.join(" · ")} &middot; Dibuat di {item.minggu}
      </p>

      <Image
        src={item.gambar}
        alt={`Tangkapan layar ${item.judul}`}
        width={640}
        height={420}
        className="mt-6 h-auto w-full rounded-xl border border-gray-200"
      />

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-utama">Deskripsi Proyek</h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          {item.deskripsi}
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-utama">Yang Saya Pelajari</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          {item.fitur.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}