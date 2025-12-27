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
    "Jadilah mitra pemilik Soto Cipro Roso. Dukung pelestarian rasa otentik Semarang sambil membangun aset bisnis Anda.",
  openGraph: {
    url: "https://soto-cipto-roso.vercel.app",
    images: [
      {
        url: "https://soto-cipto-roso.vercel.app/open-graph-image.jpg",
        width: 1200,
        height: 675,
      },
    ],
    title: "Soto Cipto Roso",
    description:
      "Jadilah mitra pemilik Soto Cipro Roso. Dukung pelestarian rasa otentik Semarang sambil membangun aset bisnis Anda.",
    siteName: "Soto Cipto Roso",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soto Cipto Roso",
    description:
      "Jadilah mitra pemilik Soto Cipro Roso. Dukung pelestarian rasa otentik Semarang sambil membangun aset bisnis Anda.",
    images: {
      url: "https://soto-cipto-roso.vercel.app/open-graph-image.jpg",
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
