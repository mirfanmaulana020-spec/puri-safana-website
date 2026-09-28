import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

export const metadata: Metadata = {
  title: "Puri Safana Cikeas | Lebih Dekat, Lebih Murah, Lebih Luas",
  description:
    "Perumahan Puri Safana Cikeas — hunian nyaman, aman, dan strategis di Cikeas, Gunung Putri, Bogor. Jelajahi site plan interaktif, tipe rumah, dan simulasi KPR.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal font-sans pb-16 lg:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
