import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import CarCard from "@/components/catalog/CarCard";
import { inventory, Car } from "@/data/inventory";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Katalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedBodyType, setSelectedBodyType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredCars = useMemo(() => {
    let result = [...inventory];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query) ||
          car.year.toString().includes(query)
      );
    }

    // Brand filter
    if (selectedBrand !== "all") {
      result = result.filter((car) => car.brand === selectedBrand);
    }

    // Body type filter
    if (selectedBodyType !== "all") {
      result = result.filter((car) => car.bodyType === selectedBodyType);
    }

    // Sorting
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "oldest":
        result.sort((a, b) => a.year - b.year);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "mileage-low":
        result.sort((a, b) => a.mileage - b.mileage);
        break;
    }

    return result;
  }, [searchQuery, selectedBrand, selectedBodyType, sortBy]);

  const availableCars = filteredCars.filter(
    (car) => car.status === "Available"
  );
  const otherCars = filteredCars.filter((car) => car.status !== "Available");

  return (
    <>
      <Helmet>
        <title>Katalog Mobil Bekas - Berkat Sejahtera Mobil Surabaya</title>
        <meta
          name="description"
          content="Lihat koleksi lengkap mobil bekas berkualitas. Filter berdasarkan merk, tipe body, dan harga. Toyota, Honda, Mitsubishi, dan lainnya tersedia."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-16">
          <div className="container mx-auto container-padding">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Katalog Mobil
              </h1>
              <p className="text-muted-foreground">
                Temukan mobil impian Anda dari koleksi unit berkualitas kami
              </p>
            </motion.div>

            {/* Filters */}
            <CatalogFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedBodyType={selectedBodyType}
              setSelectedBodyType={setSelectedBodyType}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            {/* Results Count */}
            <p className="text-muted-foreground mb-6">
              Menampilkan {filteredCars.length} unit
            </p>

            {/* Cars Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <CarCard car={car} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Tidak ada mobil yang sesuai dengan filter Anda
                </p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
