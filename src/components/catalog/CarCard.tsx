import { MessageCircle, Fuel, Gauge, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, formatPrice, formatMileage } from "@/data/inventory";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Halo Berkat Sejahtera, saya tertarik dengan unit ${car.brand} ${car.model} - ${car.year}.`,
  );
  const whatsappLink = `https://wa.me/6281234567890?text=${whatsappMessage}`;

  const getStatusBadge = () => {
    switch (car.status) {
      case "Available":
        return (
          <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-0">
            Tersedia
          </Badge>
        );
      case "Booked":
        return (
          <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-0">
            Dipesan
          </Badge>
        );
      case "Sold":
        return (
          <Badge className="bg-red-500/10 text-red-600 hover:bg-red-500/20 border-0">
            Terjual
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {getStatusBadge()}
          <Badge
            variant="default"
            className="dark:bg-white bg-gray-900 backdrop-blur-sm"
          >
            {car.transmission}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 lg:p-5">
        <div className="mb-3">
          <p className="text-sm text-muted-foreground">{car.brand}</p>
          <h3 className="font-display font-semibold text-lg text-foreground">
            {car.model}
          </h3>
        </div>

        <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="w-4 h-4" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="w-4 h-4" />
            <span>{car.fuelType}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Harga</p>
            <p className="font-display font-bold text-lg text-accent">
              {formatPrice(car.price)}
            </p>
          </div>
          <Button
            asChild
            size="sm"
            className="btn-accent rounded-lg"
            disabled={car.status === "Sold"}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1.5" />
              Tanya
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
