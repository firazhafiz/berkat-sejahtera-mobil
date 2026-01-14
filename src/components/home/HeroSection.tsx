import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileCheck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              🚗 Showroom Terpercaya di Surabaya
            </span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Berkat Sejahtera <span className="text-gradient">Mobil</span>{" "}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Dapatkan mobil impian Anda dengan jaminan kualitas. Semua unit
              telah lulus inspeksi menyeluruh dengan surat-surat lengkap dan
              dijamin asli.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="btn-accent rounded-xl text-base"
              >
                <Link to="/katalog">
                  Lihat Katalog Stok
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl text-base"
              >
                <Link to="/jual-mobil">Jual Mobil Anda</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">150+ Titik</p>
                  <p className="text-sm text-muted-foreground">Inspeksi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Surat Asli</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Tukar</p>
                  <p className="text-sm text-muted-foreground">Tambah</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
                alt="Mobil Premium"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">500+ Unit</p>
                    <p className="text-sm text-muted-foreground">
                      Terjual Tahun Ini
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent/20 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
