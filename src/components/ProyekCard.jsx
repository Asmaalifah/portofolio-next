
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function getValidImageSrc(url) {
  if (!url || typeof url !== "string") return null;

  const trimmed = url.trim();
  if (!trimmed) return null;

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://")
  ) {
    try {
      return new URL(trimmed).toString();
    } catch {
      return null;
    }
  }

  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  return `/${trimmed}`;
}

export default function ProyekCard({ proyek }) {
  const daftarKategori = Array.isArray(proyek.kategori)
    ? proyek.kategori
    : proyek.kategori
        ?.split(",")
        .map((item) => item.trim())
        .filter(Boolean) || [];

  const imageSrc = getValidImageSrc(proyek.gambar_url);

  return (
    <Link
      href={`/proyek/${proyek.slug || ""}`}
      className="block h-full rounded-xl transition hover:shadow-md"
    >
      <Card className="flex h-full flex-col overflow-hidden border-border bg-card">
        <div className="relative h-48 w-full overflow-hidden border-b border-border bg-muted">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`Tangkapan layar ${proyek.judul || "proyek"}`}
              width={640}
              height={420}
              loading="eager"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              Tidak ada gambar
            </div>
          )}
        </div>

        <CardHeader className="flex-1">
          {/* Kolom pembungkus kategori */}
          <div className="mb-2 flex flex-wrap gap-2">
            {daftarKategori.map((kat) => (
              <Badge
                key={kat}
                variant="default"
                className="border-primary bg-primary text-primary-foreground"
              >
                {kat}
              </Badge>
            ))}
          </div>

          <CardTitle className="text-lg text-primary">
            {proyek.judul}
          </CardTitle>

          <CardDescription className="line-clamp-3">
            {proyek.deskripsi}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
