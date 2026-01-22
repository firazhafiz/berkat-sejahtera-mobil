import { Link } from "react-router-dom";
import {
  Car,
  MapPin,
  Phone,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="images/logo.svg" width={80} />
              <div>
                <span className="font-display font-bold text-lg">
                  Berkat Sejahtera
                </span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">
                  Mobil Surabaya
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Showroom mobil bekas berkualitas dengan jaminan surat-surat
              lengkap dan asli. Melayani tukar tambah dan kredit dengan proses
              mudah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/katalog"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Katalog Mobil
                </Link>
              </li>
              <li>
                <Link
                  to="/jual-mobil"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Jual Mobil Anda
                </Link>
              </li>
              <li>
                <Link
                  to="/kalkulator"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Simulasi Kredit
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Jl. Baratajaya No 19, Surabaya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/70">
                  <p>Senin - Sabtu: 09:00 - 18:00</p>
                  <p>Minggu: 10:00 - 16:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} Berkat Sejahtera Mobil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
