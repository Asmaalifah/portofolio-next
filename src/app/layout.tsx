import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react"; // 1. IMPORT SUSPENSE

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Asma Alifah | Portofolio",
    template: "%s | Asma Alifah",
  },
  description: "Portofolio Asma Alifah, siswa SMK calon junior Web Developer di Kelas Industri UBIG.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        {/* 2. BUNGKUS NAVBAR DENGAN SUSPENSE */}
        <Suspense fallback={<div className="h-16 bg-utama" />}>
          <Navbar/>
        </Suspense>
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
