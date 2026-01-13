import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { formatPrice } from '@/data/inventory';
import { Calculator, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Kalkulator() {
  const [carPrice, setCarPrice] = useState(300000000);
  const [downPayment, setDownPayment] = useState(90000000);
  const [tenor, setTenor] = useState(36); // months
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Simple flat interest calculation (dummy)
  const interestRate = 0.08; // 8% per year flat

  useEffect(() => {
    const loanAmount = carPrice - downPayment;
    const totalInterest = loanAmount * interestRate * (tenor / 12);
    const totalAmount = loanAmount + totalInterest;
    const monthly = totalAmount / tenor;
    setMonthlyPayment(Math.round(monthly));
  }, [carPrice, downPayment, tenor]);

  const dpPercentage = Math.round((downPayment / carPrice) * 100);

  const tenorOptions = [12, 24, 36, 48, 60];

  return (
    <>
      <Helmet>
        <title>Simulasi Kredit Mobil - Berkat Sejahtera Mobil Surabaya</title>
        <meta name="description" content="Hitung estimasi cicilan kredit mobil bekas. Simulasi kredit dengan berbagai pilihan DP dan tenor. Proses kredit mudah dan cepat." />
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
                <Calculator className="w-8 h-8 text-accent" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Simulasi Kredit
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hitung estimasi cicilan bulanan Anda dengan kalkulator kredit interaktif
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Calculator Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="lg:col-span-3"
                >
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="font-display">Masukkan Data</CardTitle>
                      <CardDescription>Sesuaikan dengan kebutuhan dan kemampuan Anda</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {/* Car Price */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <Label className="text-base">Harga Mobil</Label>
                          <span className="font-semibold text-accent">{formatPrice(carPrice)}</span>
                        </div>
                        <Slider
                          value={[carPrice]}
                          onValueChange={(value) => {
                            setCarPrice(value[0]);
                            if (downPayment > value[0] * 0.5) {
                              setDownPayment(value[0] * 0.3);
                            }
                          }}
                          min={100000000}
                          max={1000000000}
                          step={10000000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Rp 100 Juta</span>
                          <span>Rp 1 Miliar</span>
                        </div>
                      </div>

                      {/* Down Payment */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <Label className="text-base">Uang Muka (DP)</Label>
                          <span className="font-semibold text-accent">
                            {formatPrice(downPayment)} ({dpPercentage}%)
                          </span>
                        </div>
                        <Slider
                          value={[downPayment]}
                          onValueChange={(value) => setDownPayment(value[0])}
                          min={carPrice * 0.1}
                          max={carPrice * 0.5}
                          step={5000000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>10%</span>
                          <span>50%</span>
                        </div>
                      </div>

                      {/* Tenor */}
                      <div className="space-y-4">
                        <Label className="text-base">Tenor (Jangka Waktu)</Label>
                        <div className="grid grid-cols-5 gap-2">
                          {tenorOptions.map((option) => (
                            <button
                              key={option}
                              onClick={() => setTenor(option)}
                              className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                                tenor === option
                                  ? 'bg-accent text-accent-foreground shadow-lg'
                                  : 'bg-muted hover:bg-muted/80 text-foreground'
                              }`}
                            >
                              {option / 12} Tahun
                            </button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Result */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <Card className="border-border shadow-card bg-accent text-accent-foreground sticky top-24">
                    <CardHeader>
                      <CardTitle className="font-display text-accent-foreground/90">Estimasi Cicilan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <p className="text-sm text-accent-foreground/70 mb-1">Cicilan per Bulan</p>
                        <p className="font-display text-3xl lg:text-4xl font-bold">
                          {formatPrice(monthlyPayment)}
                        </p>
                      </div>

                      <div className="border-t border-accent-foreground/20 pt-4 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-accent-foreground/70">Harga Mobil</span>
                          <span className="font-medium">{formatPrice(carPrice)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-accent-foreground/70">Uang Muka</span>
                          <span className="font-medium">{formatPrice(downPayment)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-accent-foreground/70">Pokok Pinjaman</span>
                          <span className="font-medium">{formatPrice(carPrice - downPayment)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-accent-foreground/70">Tenor</span>
                          <span className="font-medium">{tenor} Bulan</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-accent-foreground/70">Total Bayar</span>
                          <span className="font-medium">{formatPrice(monthlyPayment * tenor + downPayment)}</span>
                        </div>
                      </div>

                      <div className="bg-accent-foreground/10 rounded-xl p-4 flex items-start gap-3">
                        <Info className="w-5 h-5 shrink-0 mt-0.5" />
                        <p className="text-xs text-accent-foreground/80">
                          * Hasil simulasi ini merupakan estimasi. Angsuran sebenarnya dapat berbeda 
                          tergantung kebijakan leasing dan syarat & ketentuan yang berlaku.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
