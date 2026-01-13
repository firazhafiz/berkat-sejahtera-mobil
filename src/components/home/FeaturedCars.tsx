import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { inventory, formatPrice } from '@/data/inventory';
import CarCard from '@/components/catalog/CarCard';

export default function FeaturedCars() {
  const featuredCars = inventory.filter(car => car.status === 'Available').slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Unit Terbaru
            </h2>
            <p className="text-muted-foreground">
              Koleksi terbaru mobil berkualitas yang baru masuk showroom
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-xl w-fit">
            <Link to="/katalog">
              Lihat Semua Stok
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
