import { Shield, FileCheck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const trustItems = [
  {
    icon: Shield,
    title: 'Lulus Inspeksi 150+ Titik',
    description: 'Setiap unit diperiksa menyeluruh oleh teknisi berpengalaman',
  },
  {
    icon: FileCheck,
    title: 'Surat-Surat Dijamin Asli',
    description: 'STNK, BPKB, dan dokumen lainnya terjamin keasliannya',
  },
  {
    icon: RefreshCw,
    title: 'Bisa Tukar Tambah',
    description: 'Tukar mobil lama Anda dengan unit pilihan kami',
  },
];

export default function TrustBar() {
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
            Mengapa Memilih Kami?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berkat Sejahtera Mobil berkomitmen memberikan pengalaman terbaik dalam jual beli mobil bekas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-card card-hover border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
