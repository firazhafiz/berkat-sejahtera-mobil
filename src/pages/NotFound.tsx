import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center container-padding">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-8">
          <span className="text-5xl">🚗</span>
        </div>
        <h1 className="font-display text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! Halaman yang Anda cari tidak ditemukan. Mungkin sudah dipindahkan atau dihapus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="rounded-xl">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Link>
          </Button>
          <Button asChild className="btn-accent rounded-xl">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
