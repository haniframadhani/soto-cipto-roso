import {
  ChartColumnBig,
  CircleCheck,
  HandCoins,
  Handshake,
  RefreshCw,
  Store,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/assets/icons/whatsapp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-x-6xl px-4">
        <section className="py-16 md:py-24" id="hero">
          <div className="@container">
            <div className="hidden md:flex min-h-120 flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center bg-[url(/hero.jpg)]">
              <div className="flex flex-col gap-4 items-center text-center">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-primary-foreground md:text-6xl text-shadow-lg">
                  Wariskan Rasa, Dapatkan Keuntungan
                </h1>
                <h2 className="max-w-2xl text-base font-normal leading-normal text-primary-foreground/90 md:text-lg">
                  Jadilah mitra pemilik Soto Cipro Roso. Dukung pelestarian rasa
                  otentik Semarang sambil membangun aset bisnis Anda.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="transition-transform hover:scale-105 text-base font-bold"
                  asChild
                >
                  <Link href="#contact">
                    <span className="truncate">Jadilah Mitra</span>
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="transition-transform hover:scale-105 text-base text-primary font-bold"
                  asChild
                >
                  <Link href="#details">
                    <span className="truncate">Lihat Detail</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="block md:hidden">
              <div className="aspect-video overflow-hidden rounded-xl mb-8">
                <Image
                  src="/hero.jpg"
                  width={1080}
                  height={1080}
                  alt="out staff"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 items-center text-center">
                  <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-primary md:text-6xl">
                    Wariskan Rasa, Dapatkan Keuntungan
                  </h1>
                  <h2 className="max-w-2xl text-base font-normal leading-normal text-secondary-foreground/90 md:text-lg">
                    Jadilah mitra pemilik Soto Cipro Roso. Dukung pelestarian
                    rasa otentik Semarang sambil membangun aset bisnis Anda.
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="transition-transform hover:scale-105 text-base font-bold"
                    asChild
                  >
                    <Link href="#contact">
                      <span className="truncate">Jadilah Mitra</span>
                    </Link>
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="transition-transform hover:scale-105 text-base text-primary font-bold"
                    asChild
                  >
                    <Link href="#details">
                      <span className="truncate">Lihat Detail</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24" id="about">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 content-center">
              <div className="text-center md:text-start self-center md:col-span-3">
                <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-5xl">
                  Tentang Kami
                </h2>
                <p className="text-lg font-normal leading-relaxed text-foreground/80 text-shadow-sm">
                  Soto Cipto Roso adalah kedai soto khas Semarang yang mempunyai
                  cita rasa yang lezat higienis dan mempunyai tempat yang
                  nyaman. Kedai soto ini berdiri sejak tahun 2017 dengan lokasi
                  di Yogyakarta yang mempunyai omzet harian saat ini mencapai 5
                  juta rupiah/hari.
                </p>
                <ol className="mt-4 space-y-3 text-foreground/80 text-lg text-start">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </div>
                    <span>
                      Memiliki menu khas Semarang yakni sate kerang dan lumpia.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </div>
                    <span>Menu Utama ada dua yakni Soto Ayam & Soto Sapi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </div>
                    <span>
                      Tersedia aneka macam sate, kerang, telur puyuh, dan
                      sebagainya.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </div>
                    <span>
                      Tersedia aneka macam gorengan, mendoan, dan sebagainya.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </div>
                    <span>
                      Suasana tempat makan yg nyaman merupakan prioritas
                      pelayanan kami.
                    </span>
                  </li>
                </ol>
              </div>
              <div className="md:col-span-2">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <Image
                    src="/8.jpg"
                    width={1080}
                    height={1080}
                    alt="out staff"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-b-xl">
                  <Image
                    src="/17-x.jpg"
                    width={1080}
                    height={1080}
                    alt="out staff"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24" id="menu">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-5xl">
              Warisan Rasa dalam Setiap Sajian
            </h2>
            <p className="max-w-2xl text-lg font-normal leading-relaxed text-foreground/80">
              Dari kuah soto yang khas hingga aneka gorengan dan sate hangat,
              temukan cita rasa otentik yang telah membuat pelanggan kami jatuh
              cinta.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-1 text-foreground">
                Soto
              </h3>
              <p className="mb-4 text-foreground/80">
                Varian soto yang ada di kedai Soto Cipto Roso yaitu soto ayam
                dan soto sapi dengan kuah khas Semarang.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="group aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/soto.webp"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-contain object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/soto-2.webp"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-contain object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-1 text-foreground">
                Gorengan
              </h3>
              <p className="mb-4 text-foreground/80">
                Kami juga menyediakan beberapa macam gorengan seperti mendoan
                dan bakwan hangat.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/gorengan.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/gorengan-2.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/gorengan-3.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-1 text-foreground">
                Aneka Sate
              </h3>
              <p className="mb-4 text-foreground/80">
                Ada banyak sekali varian sate di kedai Soto Cipto Roso seperti
                sate telur puyuh, sate usus, sate kerang, sate paru, sate uritan
                & ampela, sate brutu dan sate bakso.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/sate.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/sate-2.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/sate-4.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/sate-5.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/sate-6.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/sate-7.jpeg"
                    width={400}
                    height={400}
                    alt="Perkedel"
                    className="object-cover object-center w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24" id="gallery">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-foreground  md:text-5xl">
              Lebih Dari Sekadar Foto: Bukti Visual Kesuksesan
            </h2>
            <p className="max-w-2xl text-lg font-normal leading-relaxed text-foreground/80">
              Setiap gambar menceritakan bagian dari kisah kami: konsistensi
              cita rasa, pelayanan penuh hati, dan komunitas pelanggan yang
              setia. Inilah fondasi yang akan Anda miliki.
            </p>
          </div>
          <div className="mt-12">
            <div>
              <h3 className="text-2xl font-medium mb-1 text-foreground">
                Bandung
              </h3>
              <p className="mb-4 text-foreground/80">
                Jl. Banda No.Blok No.11, Citarum, Kec. Bandung Wetan, Kota
                Bandung, Jawa Barat 40115
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
                <div className="group relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src="/cipto-roso-1.jpeg"
                    height={250}
                    width={250}
                    alt="gallery 1"
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src="/cipto-roso-7.jpg"
                    height={250}
                    width={250}
                    alt="gallery 1"
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src="/cipto-roso-8.jpg"
                    height={250}
                    width={250}
                    alt="gallery 1"
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src="/cipto-roso-2.jpeg"
                    height={250}
                    width={250}
                    alt="gallery 1"
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="group relative overflow-hidden aspect-video md:aspect-square rounded-xl col-span-2 md:col-span-1">
                  <video
                    width="1920"
                    height="1080"
                    controls
                    className="w-full h-full"
                    muted
                    preload="metadata"
                  >
                    <source src="/bandung.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-1 text-foreground">
                Dago
              </h3>
              <p className="mb-4 text-foreground/80">
                Jl. Ir. H. Juanda No.392, Dago, Kecamatan Coblong, Kota Bandung,
                Jawa Barat 40135
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
                <div className="group relative overflow-hidden aspect-video rounded-xl col-span-2">
                  <video
                    width="1920"
                    height="1080"
                    controls
                    className="w-full h-full"
                    muted
                    preload="metadata"
                  >
                    <source src="/bandung-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-1 text-foreground">
                Cibinong
              </h3>
              <p className="mb-4 text-foreground/80">
                Jl. Raya Cikaret, Pabuaran, Kec. Cibinong, Kabupaten Bogor, Jawa
                Barat 16916
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
                <div className="group relative overflow-hidden aspect-video rounded-xl col-span-2">
                  <video
                    width="1920"
                    height="1080"
                    controls
                    className="w-full h-full"
                    muted
                    preload="metadata"
                  >
                    <source src="/bandung-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-1 text-foreground">
                Cikarang
              </h3>
              <p className="mb-4 text-foreground/80">
                Ruko Pasadena, BS, RW.1, Deltamas, Cikarang, Kec. Cikarang
                Pusat, Kabupaten Bekasi, Jawa Barat 17530
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="group relative overflow-hidden aspect-video rounded-xl col-span-2">
                  <video
                    width="1920"
                    height="1080"
                    controls
                    className="w-full h-full"
                    muted
                    preload="metadata"
                  >
                    <source src="/bandung-4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24" id="invest">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-foreground  md:text-5xl">
              Kenapa Bergabung Bersama Kami?
            </h2>
            <p className="max-w-2xl text-lg font-normal leading-relaxed text-foreground/80">
              Gabunglah dengan brand yang memiliki identitas kuat, basis
              pelanggan setia, dan model bisnis terbukti. Kami menyediakan resep
              suksesnya.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Store />
                </div>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  Bukan Usaha Musiman
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80 mt-2">
                  Soto Cipto Roso bukan usaha musiman, karena soto memang
                  makanan asli nusantara dan digemari berbagai lapisan
                  masyarakat.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Users />
                </div>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  Sistem Kemitraan
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80 mt-2">
                  Sistem kami adalah kemitraan, sehingga usaha menjadi hak milik
                  dua belah pihak.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <RefreshCw />
                </div>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  Kelola Pusat (Auto Pilot)
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80 mt-2">
                  Kami akan membantu memanage operasional sesuai dengan
                  pengalaman kami sebelumnya.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <HandCoins />
                </div>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  Tabungan Masa Pensiun
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80 mt-2">
                  Usaha soto terkenal sustainable sehingga cocok untuk dijadikan
                  sumber pemasukan di hari tua saat usia sudah tidak produktif
                  lagi.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Handshake />
                </div>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  Komunikasi Aktif
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80 mt-2">
                  Kami akan selalu berusaha menjalin komunikasi aktif bersama
                  mitra kami dalam hal ini adalah calon investor.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <ChartColumnBig />
                </div>
                <CardTitle className="mt-4 text-3xl md:text-4xl">
                  Laporan Transparan
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80 mt-2">
                  Laporan hasil usaha akan dilaporkan secara terbuka setiap
                  bulan untuk dievaluasi bersama-sama.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-16 md:py-24" id="projection">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-5xl">
              Skenario Penjualan Menuju Balik Modal
            </h2>
            <p className="max-w-3xl text-lg font-normal leading-relaxed text-foreground/80">
              Berikut Proyeksi skenario penjualan menuju balik modal
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="py-16 border-chart-1/50 shadow-md">
              <CardContent>
                <CardTitle className="text-2xl font-bold text-chart-1">
                  Kondisi Sepi
                </CardTitle>
                <div className="my-6 flex-1 space-y-4 text-left">
                  <div>
                    <p className="font-semibold">Omset kotor</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.2.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Jumlah hari dalam 1 bulan</p>
                    <p className="text-lg font-bold text-foreground">30 Hari</p>
                  </div>
                  <div>
                    <p className="font-semibold">Total omset</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.60.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Operasional dalam 1 bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.36.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total gaji karyawan/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.10.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total Operasional</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.46.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Profit kotor/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.14.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Bagi hasil kemitraan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.4.200.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total profit bersih/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.9.800.000.-
                    </p>
                  </div>
                </div>
                <div className="text-4xl font-black text-chart-1">16 Bulan</div>
                <p className="text-sm font-medium">Estimasi Balik Modal</p>
              </CardContent>
            </Card>

            <Card className="py-16 border-2 border-secondary shadow-lg">
              <CardContent>
                <CardTitle className="text-2xl font-bold text-secondary">
                  Kondisi Sedang
                </CardTitle>
                <div className="my-6 flex-1 space-y-4 text-left">
                  <div>
                    <p className="font-semibold">Omset kotor</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.3.500.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Jumlah hari dalam 1 bulan</p>
                    <p className="text-lg font-bold text-foreground">30 Hari</p>
                  </div>
                  <div>
                    <p className="font-semibold">Total omset</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.105.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Operasional dalam 1 bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.63.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total gaji karyawan/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.10.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total Operasional</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.73.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Profit kotor/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.32.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Bagi hasil kemitraan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.9.600.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total profit bersih/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.22.400.000.-
                    </p>
                  </div>
                </div>
                <div className="text-4xl font-black text-secondary">
                  7 Bulan
                </div>
                <p className="text-sm font-medium">Estimasi Balik Modal</p>
              </CardContent>
            </Card>

            <Card className="py-16 border border-primary/50 shadow-md">
              <CardContent>
                <CardTitle className="text-2xl font-bold text-primary">
                  Kondisi Ramai
                </CardTitle>
                <div className="my-6 flex-1 space-y-4 text-left">
                  <div>
                    <p className="font-semibold">Omset kotor</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.5.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Jumlah hari dalam 1 bulan</p>
                    <p className="text-lg font-bold text-foreground">30 Hari</p>
                  </div>
                  <div>
                    <p className="font-semibold">Total omset</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.150.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Operasional dalam 1 bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.90.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total gaji karyawan/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.10.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total Operasional</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.100.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Profit kotor/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.50.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Bagi hasil kemitraan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.15.000.000.-
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Total profit bersih/bulan</p>
                    <p className="text-lg font-bold text-foreground">
                      Rp.35.000.000.-
                    </p>
                  </div>
                </div>
                <div className="text-4xl font-black text-primary">5 Bulan</div>
                <p className="text-sm font-medium">Estimasi Balik Modal</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-sm text-foreground/70">
            *Seluruh proyeksi adalah perhitungan estimatif berdasarkan data
            kinerja sebelumnya dan kajian pasar. Realisasi hasil dimungkinkan
            untuk berbeda.
          </p>
        </section>
        <section className="py-16 md:py-24" id="reviews">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-5xl">
              Dicintai oleh Pelanggan Kami
            </h2>
            <p className="max-w-2xl text-lg font-normal leading-relaxed text-foreground/80">
              Bukti Nyata Cinta Pelanggan yang Bisa Anda Andalkan
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md dark:bg-card-dark">
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">★★★★★</span>
                </div>
                <p className="text-foreground/80 text-lg">
                  &ldquo;Salah satu spot nyoto khas Semarang di Bandung.
                  Tempatnya lumayan mungil dan nyaman. Wajib order soto ayam
                  nya, ada porsi besar dan pisah kuah juga. Sotonya cenderung
                  manis dan lumayan gurih. Ada berbagai macam kondimennya juga,
                  wajib coba lumpia semarang nya, mendoan dan bala2. Lumpianya
                  isiannya lumayan banyak, dan rebung khas Semarang nya terasa.
                  Harga terjangkau. Overall wajib dicoba bagi pecinta
                  soto.&ldquo;
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/review1.png"
                      alt="review avatar 1"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Hendrik Feraldy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md dark:bg-card-dark">
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">★★★★★</span>
                </div>
                <p className="text-foreground/80 text-lg">
                  &ldquo;Menunya cukup bervariatif, hanya saja rasa/bumbu dari
                  setiap menunya kurang nampolll. Tersedia soto campur nasi atau
                  soto pisah nasi. Pelayanan staffnya ramah dan gesit.
                  Mantap.&ldquo;
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/review2.png"
                      alt="review avatar 2"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Maharayu Hawani Nuha</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md dark:bg-card-dark">
              <CardContent>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">★★★★★</span>
                </div>
                <p className="text-foreground/80 text-lg">
                  &ldquo;Sotonya enak, aku lebih suka soto ayamnya daripada soto
                  sapi, parkir cukup luas dan berbayar, tempatnya bersih,
                  pilihan lauk tambahannya banyak, harga affordable&ldquo;
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/review3.png"
                      alt="review avatar 3"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Ismail Rijal Robbani</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-16 md:py-24" id="details">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-foreground md:text-5xl">
              Rincian Investasi & Jalan Menuju Kesuksesan
            </h2>
            <p className="max-w-2xl text-lg font-normal leading-relaxed text-foreground/80">
              Paket kemitraan transparan kami dirancang untuk memandu Anda dari
              formulir hingga grand opening.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="rounded-xl bg-white p-8 shadow-md dark:bg-card-dark">
              <CardContent>
                <h3 className="text-2xl font-bold">
                  Fasilitas yang didapatkan
                </h3>
                <ul className="mt-4 space-y-3 text-foreground/80 text-lg">
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-primary" />
                    <span>Support pemasaran dan manajemen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-primary" />
                    <span>
                      Kami akan membantu pencarian dan penyesuaian lokasi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-primary" />
                    <span>Distribusi dan bahan baku terpusat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-primary" />
                    <span>Semua perlengkapan kami sediakan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CircleCheck className="text-primary" />
                    <span>
                      Pembagian profit dari margin bulanan adalah 70%/30%.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-xl bg-white p-8 shadow-md dark:bg-card-dark">
              <CardContent>
                <h3 className="text-2xl font-bold">Tahapan menjadi mitra</h3>
                <ol className="mt-4 space-y-3 text-foreground/80 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </div>
                    <span>Mengisi formulir kemitraan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </div>
                    <span>Pengajuan lokasi kedai.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </div>
                    <span>Membayar survey dan komitmen fee.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </div>
                    <span>Survey lokasi yang diajukan oleh calon mitra.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </div>
                    <span>
                      Penandatanganan kontrak kerjasama disertai saksi dan
                      pembayaran kemitraan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </div>
                    <span>
                      Penjelasan operasional, time schedule dan training
                      karyawan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      7
                    </div>
                    <span>
                      Design dan penataan kedai sesuai yang ditentukan oleh
                      pihak Soto Ciptoroso Khas Semarang.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      8
                    </div>
                    <span>
                      Penyerahan SOP, perlengkapan kedai dan persiapan opening.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      9
                    </div>
                    <span>
                      Grand Opening Soto Cipto Roso Khas Semarang (Mitra)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      10
                    </div>
                    <span>
                      Komunikasi kedua pihak secara kontinyu selama Kerjasama.
                    </span>
                  </li>
                </ol>
              </CardContent>
            </Card>
            <Card className="rounded-xl bg-white p-8 shadow-md dark:bg-card-dark">
              <CardContent>
                <h3 className="text-2xl font-bold">Syarat administrasi</h3>
                <ol className="mt-4 space-y-3 text-foreground/80 text-lg">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </div>
                    <span>Daftar riwayat hidup / Curiculum Vitae (CV).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </div>
                    <span>Foto copy KTP dan Kartu Keluarga.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </div>
                    <span>Pas Foto 4x6 2 lembar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </div>
                    <span>
                      Surat perjanjian dengan pemilik lokasi jika lokasi
                      tersebut adalah sewa.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </div>
                    <span>
                      Bisa menunjukkan sertifikat tanah jika lokasi tersebut
                      adalah kepemilikan calon mitra sendiri.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </div>
                    <span>
                      Jika atas nama sertifikat lokasi tidak sama dengan calon
                      mitra (jika lokasi adalah milik mitra/belum dibalik nama)
                      bisa menunjukkan bukti kepemilikan lokasi yang diajukan.
                    </span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-16 md:py-24" id="contact">
          <div className="flex flex-col items-center gap-8 rounded-xl bg-primary p-8 text-center text-white shadow-md md:p-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold md:text-4xl">
                Ambil Langkah Pertama Menuju Kepemilikan Bisnis Anda
              </h2>
              <p className="text-white/80">
                Konsultasi tanpa biaya dengan tim ahli kami. Diskusikan peluang,
                angka, dan strategi memulai cabang Anda.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="flex items-center justify-center gap-3 px-8 text-lg font-bold transition-transform hover:scale-105 text-primary h-16"
              asChild
            >
              <Link href="">
                <Whatsapp className="size-6 text-primary" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
