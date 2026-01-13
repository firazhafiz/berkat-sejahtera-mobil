export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  transmission: 'AT' | 'MT';
  fuelType: 'Bensin' | 'Diesel' | 'Hybrid';
  mileage: number;
  price: number;
  status: 'Available' | 'Booked' | 'Sold';
  bodyType: 'SUV' | 'MPV' | 'Sedan' | 'City Car' | 'Hatchback';
  image: string;
  color: string;
  features: string[];
}

export const inventory: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Innova Zenix',
    year: 2023,
    transmission: 'AT',
    fuelType: 'Hybrid',
    mileage: 12000,
    price: 485000000,
    status: 'Available',
    bodyType: 'MPV',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    color: 'Putih',
    features: ['Cruise Control', 'Sunroof', 'Leather Seat', 'Wireless Charging']
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'HR-V',
    year: 2022,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 25000,
    price: 365000000,
    status: 'Available',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    color: 'Hitam',
    features: ['Honda Sensing', 'LED Headlights', 'Keyless Entry']
  },
  {
    id: '3',
    brand: 'Mitsubishi',
    model: 'Pajero Sport',
    year: 2021,
    transmission: 'AT',
    fuelType: 'Diesel',
    mileage: 45000,
    price: 445000000,
    status: 'Available',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    color: 'Silver',
    features: ['4WD', 'Leather Seat', 'Rear Camera', 'Cruise Control']
  },
  {
    id: '4',
    brand: 'Toyota',
    model: 'Fortuner VRZ',
    year: 2022,
    transmission: 'AT',
    fuelType: 'Diesel',
    mileage: 32000,
    price: 525000000,
    status: 'Booked',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    color: 'Putih',
    features: ['Lane Departure Warning', 'Pre-Collision System', 'Leather Seat']
  },
  {
    id: '5',
    brand: 'Honda',
    model: 'Brio RS',
    year: 2023,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 8000,
    price: 195000000,
    status: 'Available',
    bodyType: 'City Car',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    color: 'Merah',
    features: ['Push Start Button', 'Rear Camera', 'Bluetooth']
  },
  {
    id: '6',
    brand: 'Toyota',
    model: 'Avanza Veloz',
    year: 2022,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 28000,
    price: 245000000,
    status: 'Available',
    bodyType: 'MPV',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    color: 'Abu-abu',
    features: ['Toyota Safety Sense', 'Apple CarPlay', 'Android Auto']
  },
  {
    id: '7',
    brand: 'Suzuki',
    model: 'XL7 Alpha',
    year: 2021,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 38000,
    price: 235000000,
    status: 'Available',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    color: 'Coklat',
    features: ['7 Seater', 'Push Start', 'Auto Climate']
  },
  {
    id: '8',
    brand: 'Daihatsu',
    model: 'Terios R',
    year: 2022,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 22000,
    price: 215000000,
    status: 'Available',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    color: 'Hitam',
    features: ['Rear Camera', 'Fog Lamp', 'Alloy Wheels']
  },
  {
    id: '9',
    brand: 'Honda',
    model: 'Civic Turbo',
    year: 2021,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 35000,
    price: 385000000,
    status: 'Available',
    bodyType: 'Sedan',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
    color: 'Biru',
    features: ['Honda Sensing', 'Sunroof', 'Leather Seat', 'Turbo Engine']
  },
  {
    id: '10',
    brand: 'Toyota',
    model: 'Camry Hybrid',
    year: 2022,
    transmission: 'AT',
    fuelType: 'Hybrid',
    mileage: 18000,
    price: 695000000,
    status: 'Available',
    bodyType: 'Sedan',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    color: 'Hitam',
    features: ['JBL Audio', 'Wireless Charging', 'Panoramic Roof', 'Hybrid System']
  },
  {
    id: '11',
    brand: 'Mazda',
    model: 'CX-5 Elite',
    year: 2021,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 42000,
    price: 445000000,
    status: 'Sold',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1568844293986-8c9a2c07f7f6?w=800&q=80',
    color: 'Merah',
    features: ['Bose Audio', 'Leather Seat', 'Sunroof', 'i-Activsense']
  },
  {
    id: '12',
    brand: 'Wuling',
    model: 'Almaz RS Pro',
    year: 2023,
    transmission: 'AT',
    fuelType: 'Bensin',
    mileage: 5000,
    price: 355000000,
    status: 'Available',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    color: 'Putih',
    features: ['WIND Voice Command', 'ADAS', 'Panoramic Sunroof', '360 Camera']
  }
];

export const brands = [...new Set(inventory.map(car => car.brand))];
export const bodyTypes = [...new Set(inventory.map(car => car.bodyType))];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatMileage = (mileage: number): string => {
  return new Intl.NumberFormat('id-ID').format(mileage) + ' KM';
};
