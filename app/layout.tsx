import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const sansSerif = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soto-cipto-roso.vercel.app"),
  title: "Soto Cipto Roso",
  description:
    "Soto Cipto Roso adalah kedai soto khas Semarang yang mempunyai cita rasa yang lezat higienis dan mempunyai tempat yang nyaman. Kedai soto ini berdiri sejak tahun 2017 dengan lokasi di Yogyakarta yang mempunyai omzet harian saat ini mencapai 5 juta rupiah/hari.",
  openGraph: {
    url: "https://soto-cipto-roso.vercel.app",
    images: [
      {
        url: "https://soto-cipto-roso.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 675,
      },
    ],
    title: "Soto Cipto Roso",
    description:
      "Soto Cipto Roso adalah kedai soto khas Semarang yang mempunyai cita rasa yang lezat higienis dan mempunyai tempat yang nyaman. Kedai soto ini berdiri sejak tahun 2017 dengan lokasi di Yogyakarta yang mempunyai omzet harian saat ini mencapai 5 juta rupiah/hari.",
    siteName: "Soto Cipto Roso",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soto Cipto Roso",
    description:
      "Soto Cipto Roso adalah kedai soto khas Semarang yang mempunyai cita rasa yang lezat higienis dan mempunyai tempat yang nyaman. Kedai soto ini berdiri sejak tahun 2017 dengan lokasi di Yogyakarta yang mempunyai omzet harian saat ini mencapai 5 juta rupiah/hari.",
    images: {
      url: "/opengraph-image.jpg",
      alt: "Soto Cipto Roso",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Soto Cipto Roso" />
      </head>
      <body className={`${sansSerif.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
