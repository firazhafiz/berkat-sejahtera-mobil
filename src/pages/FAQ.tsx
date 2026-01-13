import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    question: 'Apakah bisa bantu pengurusan mutasi/BN (Balik Nama)?',
    answer: 'Ya, kami menyediakan layanan pengurusan mutasi dan balik nama STNK/BPKB. Tim kami akan membantu seluruh proses administrasi dengan biaya yang transparan dan kompetitif. Proses biasanya memakan waktu 2-4 minggu tergantung wilayah.',
  },
  {
    question: 'Apakah unit pernah terkena banjir atau tabrak?',
    answer: 'Semua unit di showroom kami telah melalui inspeksi 150+ titik pemeriksaan. Kami menjamin unit yang dijual bebas dari riwayat banjir dan tabrak berat. Laporan kondisi kendaraan dapat diminta untuk setiap unit yang diminati.',
  },
  {
    question: 'Berapa lama proses kredit?',
    answer: 'Proses pengajuan kredit biasanya memakan waktu 1-3 hari kerja. Setelah disetujui, unit bisa langsung dibawa pulang. Kami bekerja sama dengan berbagai leasing ternama untuk memberikan opsi terbaik sesuai kebutuhan Anda.',
  },
  {
    question: 'Apakah bisa tukar tambah?',
    answer: 'Tentu! Kami menerima tukar tambah dengan berbagai merk dan tipe mobil. Tim kami akan melakukan appraisal gratis untuk menentukan harga beli terbaik untuk mobil lama Anda. Proses cepat dan harga kompetitif.',
  },
  {
    question: 'Apakah surat-surat dijamin asli?',
    answer: 'Ya, 100% dijamin. Setiap unit yang kami jual memiliki kelengkapan surat (STNK, BPKB, Faktur, NIK) yang asli dan legal. Kami melakukan verifikasi ketat terhadap setiap dokumen sebelum unit masuk showroom.',
  },
  {
    question: 'Apakah ada garansi setelah pembelian?',
    answer: 'Kami memberikan garansi mesin dan transmisi selama 30 hari atau 1.000 km (mana yang tercapai lebih dulu) untuk unit tertentu. Syarat dan ketentuan berlaku. Tanyakan kepada sales kami untuk detail lebih lanjut.',
  },
  {
    question: 'Bagaimana cara melakukan test drive?',
    answer: 'Anda bisa langsung datang ke showroom kami di Jl. Baratajaya No 19, Surabaya, atau membuat janji terlebih dahulu melalui WhatsApp. Bawa SIM yang masih berlaku untuk test drive. Tidak ada biaya untuk test drive.',
  },
  {
    question: 'Apakah ada layanan antar unit ke rumah?',
    answer: 'Ya, kami menyediakan layanan antar unit ke rumah untuk wilayah Surabaya dan sekitarnya. Untuk pengiriman ke luar kota, kami bisa membantu mengatur pengiriman dengan biaya sesuai jarak.',
  },
  {
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima pembayaran tunai (cash), transfer bank, dan kredit melalui berbagai leasing rekanan. Untuk pembelian kredit, siapkan KTP, KK, slip gaji/bukti penghasilan, dan NPWP.',
  },
  {
    question: 'Kapan showroom buka?',
    answer: 'Showroom kami buka Senin-Sabtu pukul 09:00-18:00 WIB dan Minggu pukul 10:00-16:00 WIB. Untuk kunjungan di luar jam operasional, silakan hubungi kami terlebih dahulu untuk membuat janji.',
  },
];

export default function FAQ() {
  const whatsappLink = 'https://wa.me/6281234567890?text=' + encodeURIComponent('Halo Berkat Sejahtera, saya ada pertanyaan.');

  return (
    <>
      <Helmet>
        <title>FAQ - Berkat Sejahtera Mobil Surabaya</title>
        <meta name="description" content="Pertanyaan yang sering diajukan tentang jual beli mobil bekas, kredit, tukar tambah, dan layanan lainnya di Berkat Sejahtera Mobil." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto container-padding">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                <HelpCircle className="w-8 h-8 text-accent" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pertanyaan Umum
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 shadow-card data-[state=open]:shadow-card-hover transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 text-center"
              >
                <div className="bg-muted/50 rounded-2xl p-8">
                  <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                    Masih ada pertanyaan?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Tim kami siap membantu menjawab pertanyaan Anda
                  </p>
                  <Button asChild size="lg" className="btn-accent rounded-xl">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hubungi via WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
