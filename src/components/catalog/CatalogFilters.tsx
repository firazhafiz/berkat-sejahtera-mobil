import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { brands, bodyTypes } from '@/data/inventory';

interface CatalogFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  selectedBodyType: string;
  setSelectedBodyType: (type: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function CatalogFilters({
  searchQuery,
  setSearchQuery,
  selectedBrand,
  setSelectedBrand,
  selectedBodyType,
  setSelectedBodyType,
  sortBy,
  setSortBy,
}: CatalogFiltersProps) {
  return (
    <div className="bg-card rounded-2xl p-4 lg:p-6 shadow-card border border-border mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Cari mobil..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl border-border"
          />
        </div>

        {/* Brand Filter */}
        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
          <SelectTrigger className="rounded-xl border-border">
            <SelectValue placeholder="Semua Merk" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Merk</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Body Type Filter */}
        <Select value={selectedBodyType} onValueChange={setSelectedBodyType}>
          <SelectTrigger className="rounded-xl border-border">
            <SelectValue placeholder="Semua Tipe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Tipe</SelectItem>
            {bodyTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="rounded-xl border-border">
            <SelectValue placeholder="Urutkan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Tahun Terbaru</SelectItem>
            <SelectItem value="oldest">Tahun Terlama</SelectItem>
            <SelectItem value="price-low">Harga Terendah</SelectItem>
            <SelectItem value="price-high">Harga Tertinggi</SelectItem>
            <SelectItem value="mileage-low">KM Terendah</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
