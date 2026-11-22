
import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Asma Alifah untuk pertanyaan atau kolaborasi proyek.",
};

export default function Kontak() {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary md:text-4xl tracking-tight">
                    Hubungi Saya
                </h1>

                <p className="mt-2 text-base text-muted-foreground">
                    Punya pertanyaan atau ingin bekerja sama? Tolong isi form berikut:
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch w-full">

                {/* KOLOM KIRI */}
                <div className="md:col-span-2 bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm w-full">
                    <FormKontak />
                </div>

                {/* KOLOM KANAN */}
                <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm w-full h-full flex flex-col justify-start">

                    <h2 className="text-lg font-bold text-primary mb-4">
                        Temukan Saya di
                    </h2>

                    <div className="flex flex-col space-y-3 text-sm">
                        <a
                            href="https://github.com/Asmaalifah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-aksen hover:underline font-medium inline-block"
                        >
                            GitHub
                        </a>

                        <a
                            href="mailto:alifakanesa@gmail.com"
                            className="text-aksen hover:underline font-medium inline-block break-all"
                        >
                            alifakanesa@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
