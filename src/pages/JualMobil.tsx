import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Car, Calendar, Upload, MessageCircle, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const sellCarSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  phone: z.string().min(10, 'Nomor telepon tidak valid'),
  brand: z.string().min(1, 'Merk mobil harus diisi'),
  model: z.string().min(1, 'Model mobil harus diisi'),
  year: z.string().min(4, 'Tahun harus diisi'),
  expectedPrice: z.string().min(1, 'Estimasi harga harus diisi'),
  notes: z.string().optional(),
});

const scheduleSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  phone: z.string().min(10, 'Nomor telepon tidak valid'),
  carInterest: z.string().min(1, 'Mobil yang diminati harus diisi'),
  preferredDate: z.string().min(1, 'Tanggal harus diisi'),
  preferredTime: z.string().min(1, 'Waktu harus diisi'),
  notes: z.string().optional(),
});

type SellCarFormData = z.infer<typeof sellCarSchema>;
type ScheduleFormData = z.infer<typeof scheduleSchema>;

export default function JualMobil() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sellCarForm = useForm<SellCarFormData>({
    resolver: zodResolver(sellCarSchema),
  });

  const scheduleForm = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleSchema),
  });

  const onSellSubmit = async (data: SellCarFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const whatsappMessage = encodeURIComponent(
      `Halo Berkat Sejahtera, saya ingin menjual mobil:\n\nMerk: ${data.brand}\nModel: ${data.model}\nTahun: ${data.year}\nEstimasi Harga: Rp ${data.expectedPrice}\n\nNama: ${data.name}\nNo. HP: ${data.phone}\n\nCatatan: ${data.notes || '-'}`
    );
    window.open(`https://wa.me/6281234567890?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: 'Form Terkirim!',
      description: 'Tim kami akan segera menghubungi Anda.',
    });
    sellCarForm.reset();
    setIsSubmitting(false);
  };

  const onScheduleSubmit = async (data: ScheduleFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const whatsappMessage = encodeURIComponent(
      `Halo Berkat Sejahtera, saya ingin menjadwalkan inspeksi/test drive:\n\nMobil: ${data.carInterest}\nTanggal: ${data.preferredDate}\nWaktu: ${data.preferredTime}\n\nNama: ${data.name}\nNo. HP: ${data.phone}\n\nCatatan: ${data.notes || '-'}`
    );
    window.open(`https://wa.me/6281234567890?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: 'Jadwal Dikirim!',
      description: 'Tim kami akan mengonfirmasi jadwal Anda.',
    });
    scheduleForm.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Jual Mobil Anda - Berkat Sejahtera Mobil Surabaya</title>
        <meta name="description" content="Jual mobil bekas Anda dengan harga terbaik. Proses mudah dan cepat. Jadwalkan inspeksi atau test drive di showroom kami." />
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
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Layanan Pelanggan
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jual mobil Anda atau jadwalkan kunjungan ke showroom dengan mudah
              </p>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl mx-auto"
            >
              <Tabs defaultValue="sell" className="w-full">
                <TabsList className="grid w-full grid-cols-2 rounded-xl h-14 mb-8">
                  <TabsTrigger value="sell" className="rounded-lg text-base">
                    <Car className="w-5 h-5 mr-2" />
                    Jual Mobil
                  </TabsTrigger>
                  <TabsTrigger value="schedule" className="rounded-lg text-base">
                    <Calendar className="w-5 h-5 mr-2" />
                    Jadwal Inspeksi
                  </TabsTrigger>
                </TabsList>

                {/* Sell Car Form */}
                <TabsContent value="sell">
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="font-display">Jual Mobil Anda</CardTitle>
                      <CardDescription>
                        Isi detail mobil Anda dan tim kami akan memberikan penawaran terbaik
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={sellCarForm.handleSubmit(onSellSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nama Lengkap</Label>
                            <Input
                              id="name"
                              {...sellCarForm.register('name')}
                              placeholder="Nama Anda"
                              className="rounded-xl"
                            />
                            {sellCarForm.formState.errors.name && (
                              <p className="text-sm text-destructive">{sellCarForm.formState.errors.name.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Nomor WhatsApp</Label>
                            <Input
                              id="phone"
                              {...sellCarForm.register('phone')}
                              placeholder="08xxxxxxxxxx"
                              className="rounded-xl"
                            />
                            {sellCarForm.formState.errors.phone && (
                              <p className="text-sm text-destructive">{sellCarForm.formState.errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="brand">Merk Mobil</Label>
                            <Input
                              id="brand"
                              {...sellCarForm.register('brand')}
                              placeholder="Contoh: Toyota"
                              className="rounded-xl"
                            />
                            {sellCarForm.formState.errors.brand && (
                              <p className="text-sm text-destructive">{sellCarForm.formState.errors.brand.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="model">Model</Label>
                            <Input
                              id="model"
                              {...sellCarForm.register('model')}
                              placeholder="Contoh: Innova Zenix"
                              className="rounded-xl"
                            />
                            {sellCarForm.formState.errors.model && (
                              <p className="text-sm text-destructive">{sellCarForm.formState.errors.model.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="year">Tahun</Label>
                            <Input
                              id="year"
                              {...sellCarForm.register('year')}
                              placeholder="Contoh: 2022"
                              className="rounded-xl"
                            />
                            {sellCarForm.formState.errors.year && (
                              <p className="text-sm text-destructive">{sellCarForm.formState.errors.year.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expectedPrice">Estimasi Harga (Rp)</Label>
                            <Input
                              id="expectedPrice"
                              {...sellCarForm.register('expectedPrice')}
                              placeholder="Contoh: 350000000"
                              className="rounded-xl"
                            />
                            {sellCarForm.formState.errors.expectedPrice && (
                              <p className="text-sm text-destructive">{sellCarForm.formState.errors.expectedPrice.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes">Catatan Tambahan</Label>
                          <Textarea
                            id="notes"
                            {...sellCarForm.register('notes')}
                            placeholder="Kondisi mobil, kelengkapan, dll."
                            className="rounded-xl min-h-[100px]"
                          />
                        </div>

                        <Button type="submit" className="w-full btn-accent rounded-xl" size="lg" disabled={isSubmitting}>
                          <MessageCircle className="w-5 h-5 mr-2" />
                          {isSubmitting ? 'Mengirim...' : 'Kirim via WhatsApp'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Schedule Form */}
                <TabsContent value="schedule">
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="font-display">Jadwalkan Kunjungan</CardTitle>
                      <CardDescription>
                        Buat janji untuk inspeksi atau test drive di showroom kami
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={scheduleForm.handleSubmit(onScheduleSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="schedule-name">Nama Lengkap</Label>
                            <Input
                              id="schedule-name"
                              {...scheduleForm.register('name')}
                              placeholder="Nama Anda"
                              className="rounded-xl"
                            />
                            {scheduleForm.formState.errors.name && (
                              <p className="text-sm text-destructive">{scheduleForm.formState.errors.name.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="schedule-phone">Nomor WhatsApp</Label>
                            <Input
                              id="schedule-phone"
                              {...scheduleForm.register('phone')}
                              placeholder="08xxxxxxxxxx"
                              className="rounded-xl"
                            />
                            {scheduleForm.formState.errors.phone && (
                              <p className="text-sm text-destructive">{scheduleForm.formState.errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="carInterest">Mobil yang Diminati</Label>
                          <Input
                            id="carInterest"
                            {...scheduleForm.register('carInterest')}
                            placeholder="Contoh: Toyota Innova Zenix 2023"
                            className="rounded-xl"
                          />
                          {scheduleForm.formState.errors.carInterest && (
                            <p className="text-sm text-destructive">{scheduleForm.formState.errors.carInterest.message}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="preferredDate">Tanggal Kunjungan</Label>
                            <Input
                              id="preferredDate"
                              type="date"
                              {...scheduleForm.register('preferredDate')}
                              className="rounded-xl"
                            />
                            {scheduleForm.formState.errors.preferredDate && (
                              <p className="text-sm text-destructive">{scheduleForm.formState.errors.preferredDate.message}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="preferredTime">Waktu</Label>
                            <Input
                              id="preferredTime"
                              type="time"
                              {...scheduleForm.register('preferredTime')}
                              className="rounded-xl"
                            />
                            {scheduleForm.formState.errors.preferredTime && (
                              <p className="text-sm text-destructive">{scheduleForm.formState.errors.preferredTime.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="schedule-notes">Catatan</Label>
                          <Textarea
                            id="schedule-notes"
                            {...scheduleForm.register('notes')}
                            placeholder="Pertanyaan atau permintaan khusus"
                            className="rounded-xl min-h-[100px]"
                          />
                        </div>

                        {/* Showroom Info */}
                        <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">Jl. Baratajaya No 19, Surabaya</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">Senin - Sabtu: 09:00 - 18:00 | Minggu: 10:00 - 16:00</span>
                          </div>
                        </div>

                        <Button type="submit" className="w-full btn-accent rounded-xl" size="lg" disabled={isSubmitting}>
                          <Calendar className="w-5 h-5 mr-2" />
                          {isSubmitting ? 'Mengirim...' : 'Kirim Jadwal via WhatsApp'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
