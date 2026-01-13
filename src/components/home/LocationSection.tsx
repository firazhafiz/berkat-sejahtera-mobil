import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function LocationSection() {
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Jl.+Baratajaya+No+19,+Surabaya', '_blank');
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kunjungi Showroom Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Datang langsung ke showroom untuk melihat dan test drive unit pilihan Anda
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-card border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6234567890123!2d112.7514567!3d-7.2756789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9!2sSurabaya!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Berkat Sejahtera Mobil"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Alamat Showroom</h3>
                  <p className="text-muted-foreground">
                    Jl. Baratajaya No 19, Surabaya<br />
                    Jawa Timur, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Jam Operasional</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Senin - Sabtu: 09:00 - 18:00 WIB</p>
                    <p>Minggu: 10:00 - 16:00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hubungi Kami</h3>
                  <a href="tel:+6281234567890" className="text-muted-foreground hover:text-accent transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <Button
                onClick={openGoogleMaps}
                className="w-full btn-accent rounded-xl mt-4"
                size="lg"
              >
                <Navigation className="mr-2 w-5 h-5" />
                Buka di Google Maps
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
