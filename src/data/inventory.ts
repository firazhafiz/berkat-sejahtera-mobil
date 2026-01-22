export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  transmission: "AT" | "MT";
  fuelType: "Bensin" | "Diesel" | "Hybrid";
  mileage: number;
  price: number;
  status: "Available" | "Booked" | "Sold";
  bodyType: "SUV" | "MPV" | "Sedan" | "City Car" | "Hatchback";
  image: string;
  color: string;
  features: string[];
}

export const inventory: Car[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Innova Zenix",
    year: 2023,
    transmission: "AT",
    fuelType: "Hybrid",
    mileage: 12000,
    price: 485000000,
    status: "Available",
    bodyType: "MPV",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/38/2685/toyota-innova-zenix-front-angle-low-view-880505.jpg",
    color: "Hitam",
    features: [
      "Cruise Control",
      "Sunroof",
      "Leather Seat",
      "Wireless Charging",
    ],
  },
  {
    id: "2",
    brand: "Honda",
    model: "HR-V",
    year: 2022,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 25000,
    price: 365000000,
    status: "Available",
    bodyType: "SUV",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/14/2435/honda-hr-v-front-angle-low-view-308336.jpg",
    color: "Merah",
    features: ["Honda Sensing", "LED Headlights", "Keyless Entry"],
  },
  {
    id: "3",
    brand: "Mitsubishi",
    model: "Pajero Sport",
    year: 2021,
    transmission: "AT",
    fuelType: "Diesel",
    mileage: 45000,
    price: 445000000,
    status: "Available",
    bodyType: "SUV",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/28/2364/mitsubishi-pajero-sport-front-angle-low-view-216762.jpg",
    color: "Silver",
    features: ["4WD", "Leather Seat", "Rear Camera", "Cruise Control"],
  },
  {
    id: "4",
    brand: "Toyota",
    model: "Fortuner VRZ",
    year: 2022,
    transmission: "AT",
    fuelType: "Diesel",
    mileage: 32000,
    price: 525000000,
    status: "Booked",
    bodyType: "SUV",
    image:
      "https://www.toyotapedia.id/wp-content/uploads/2020/06/New-Fortuner-VRZ.jpg",
    color: "Putih",
    features: [
      "Lane Departure Warning",
      "Pre-Collision System",
      "Leather Seat",
    ],
  },
  {
    id: "5",
    brand: "Honda",
    model: "Brio RS",
    year: 2023,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 8000,
    price: 195000000,
    status: "Available",
    bodyType: "City Car",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/14/1995/honda-brio-front-angle-low-view-700459.jpg",
    color: "Kuning",
    features: ["Push Start Button", "Rear Camera", "Bluetooth"],
  },
  {
    id: "6",
    brand: "Toyota",
    model: "Avanza Veloz",
    year: 2022,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 28000,
    price: 245000000,
    status: "Available",
    bodyType: "MPV",
    image:
      "https://www.toyotabekasi.co.id/wp-content/uploads/2021/12/mantab-all-new-veloz-dan-avanza-dominasi-spk-di-giias-2021-1VnPr2O5z1.jpg",
    color: "Abu-abu",
    features: ["Toyota Safety Sense", "Apple CarPlay", "Android Auto"],
  },
  {
    id: "7",
    brand: "Suzuki",
    model: "XL7 Alpha",
    year: 2021,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 38000,
    price: 235000000,
    status: "Available",
    bodyType: "SUV",
    image:
      "https://ptuc-production-public.s3.ap-southeast-3.amazonaws.com/images/articles/2023/7/25/articles-1690260185681.jpg",
    color: "Coklat",
    features: ["7 Seater", "Push Start", "Auto Climate"],
  },
  {
    id: "8",
    brand: "Daihatsu",
    model: "Terios R",
    year: 2022,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 22000,
    price: 215000000,
    status: "Available",
    bodyType: "SUV",
    image:
      "https://imgcdn.oto.com/medium/gallery/exterior/7/1669/daihatsu-terios-93478.jpg",
    color: "Hitam",
    features: ["Rear Camera", "Fog Lamp", "Alloy Wheels"],
  },
  {
    id: "9",
    brand: "Honda",
    model: "Civic Turbo",
    year: 2021,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 35000,
    price: 385000000,
    status: "Available",
    bodyType: "Sedan",
    image:
      "https://imgx.gridoto.com/crop/0x0:0x0/700x465/filters:watermark(file/2017/gridoto/img/watermark_otoseken.png,5,5,60)/photo/2020/02/13/456583938.jpeg",
    color: "Biru",
    features: ["Honda Sensing", "Sunroof", "Leather Seat", "Turbo Engine"],
  },
  {
    id: "10",
    brand: "Toyota",
    model: "Camry Hybrid",
    year: 2022,
    transmission: "AT",
    fuelType: "Hybrid",
    mileage: 18000,
    price: 695000000,
    status: "Available",
    bodyType: "Sedan",
    image:
      "https://astradigitaldigiroomprd.blob.core.windows.net/storage-prd-001/berapa%20hp%20camry%20hybrid.jpg",
    color: "Hitam",
    features: [
      "JBL Audio",
      "Wireless Charging",
      "Panoramic Roof",
      "Hybrid System",
    ],
  },
  {
    id: "11",
    brand: "Mazda",
    model: "CX-5 Elite",
    year: 2021,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 42000,
    price: 445000000,
    status: "Sold",
    bodyType: "SUV",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/23/1595/mazda-cx-5-front-angle-low-view-920341.jpg",
    color: "Merah",
    features: ["Bose Audio", "Leather Seat", "Sunroof", "i-Activsense"],
  },
  {
    id: "12",
    brand: "Wuling",
    model: "Almaz RS Pro",
    year: 2023,
    transmission: "AT",
    fuelType: "Bensin",
    mileage: 5000,
    price: 355000000,
    status: "Available",
    bodyType: "SUV",
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/110/2798/wuling-almaz-rs-2023-front-angle-low-view-441209.jpg",
    color: "Putih",
    features: ["WIND Voice Command", "ADAS", "Panoramic Sunroof", "360 Camera"],
  },
];

export const brands = [...new Set(inventory.map((car) => car.brand))];
export const bodyTypes = [...new Set(inventory.map((car) => car.bodyType))];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatMileage = (mileage: number): string => {
  return new Intl.NumberFormat("id-ID").format(mileage) + " KM";
};
