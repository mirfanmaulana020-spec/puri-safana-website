import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Puri Safana Cikeas | Lebih Dekat, Lebih Murah, Lebih Luas",
  description:
    "Perumahan Puri Safana Cikeas — hunian nyaman, aman, dan strategis di Cikeas, Gunung Putri, Bogor. Jelajahi site plan interaktif, tipe rumah, dan simulasi KPR.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f6f5f1] text-[#1c2317] font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
