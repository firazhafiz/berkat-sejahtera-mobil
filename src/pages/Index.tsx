import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import FeaturedCars from '@/components/home/FeaturedCars';
import LocationSection from '@/components/home/LocationSection';
import { Helmet } from 'react-helmet-async';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Berkat Sejahtera Mobil - Showroom Mobil Bekas Berkualitas di Surabaya</title>
        <meta name="description" content="Jual beli mobil bekas berkualitas di Surabaya. Lulus inspeksi 150+ titik, surat dijamin asli, bisa tukar tambah. Kunjungi showroom kami di Jl. Baratajaya No 19." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <TrustBar />
          <FeaturedCars />
          <LocationSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
