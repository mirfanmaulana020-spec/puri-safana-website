export type UnitStatus = "tersedia" | "booking" | "terjual";

export interface HouseType {
  slug: string;
  image: string;
  name: string;
  tagline: string;
  buildingArea: number;
  landAreaMin: number;
  bedrooms: number;
  bathrooms: number;
  priceFrom: number;
  totalUnits: number;
  description: string;
  facilities: string[];
  /** Denah / layout lantai rumah */
  layoutImages: string[];
  /** Foto interior unit contoh/showunit */
  interiorImages: string[];
}

export const houseTypes: HouseType[] = [
  {
    slug: "aruna",
    image: "/tipe/aruna/hero.jpg",
    name: "Aruna",
    tagline: "Tipe unggulan Puri Safana Cikeas",
    buildingArea: 73,
    landAreaMin: 60,
    bedrooms: 3,
    bathrooms: 2,
    priceFrom: 588000000,
    totalUnits: 89,
    description: "Aruna adalah tipe paling diminati di Puri Safana Cikeas, dengan tata ruang premium dan carport luas.",
    facilities: ["3 Kamar Tidur", "2 Kamar Mandi", "Carport", "Taman Belakang"],
    layoutImages: ["/tipe/aruna/layout-1.jpg", "/tipe/aruna/layout-2.jpg"],
    interiorImages: [
      "/tipe/aruna/interior-1.jpg",
      "/tipe/aruna/interior-2.jpg",
      "/tipe/aruna/interior-3.jpg",
      "/tipe/aruna/interior-4.jpg",
      "/tipe/aruna/interior-5.jpg",
    ],
  },
  {
    slug: "asvara",
    image: "/tipe/asvara/hero.jpg",
    name: "Asvara",
    tagline: "Hunian kompak untuk keluarga muda",
    buildingArea: 48,
    landAreaMin: 60,
    bedrooms: 2,
    bathrooms: 1,
    priceFrom: 408000000,
    totalUnits: 65,
    description: "Tipe Asvara dirancang untuk keluarga muda yang mengutamakan efisiensi ruang tanpa mengorbankan kenyamanan.",
    facilities: ["2 Kamar Tidur", "1 Kamar Mandi", "Carport", "Taman Depan"],
    layoutImages: ["/tipe/asvara/layout-1.jpg", "/tipe/asvara/layout-2.jpg"],
    interiorImages: [
      "/tipe/asvara/interior-1.jpg",
      "/tipe/asvara/interior-2.jpg",
      "/tipe/asvara/interior-3.jpg",
      "/tipe/asvara/interior-4.jpg",
      "/tipe/asvara/interior-5.jpg",
    ],
  },
  {
    slug: "adara",
    image: "/tipe/adara/hero.jpg",
    name: "Adara",
    tagline: "Desain modern untuk keluarga berkembang",
    buildingArea: 52,
    landAreaMin: 60,
    bedrooms: 2,
    bathrooms: 2,
    priceFrom: 489000000,
    totalUnits: 38,
    description: "Adara hadir dengan desain modern dan tata ruang fleksibel, cocok untuk keluarga yang terus berkembang.",
    facilities: ["2-3 Kamar Tidur", "2 Kamar Mandi", "Carport", "Taman"],
    layoutImages: ["/tipe/adara/layout-1.jpg", "/tipe/adara/layout-2.jpg"],
    interiorImages: [
      "/tipe/adara/interior-1.jpg",
      "/tipe/adara/interior-2.jpg",
      "/tipe/adara/interior-3.jpg",
      "/tipe/adara/interior-4.jpg",
      "/tipe/adara/interior-5.jpg",
    ],
  },
  {
    slug: "ansara",
    image: "/tipe/ansara/hero.jpg",
    name: "Ansara",
    tagline: "Hunian efisien harga terjangkau",
    buildingArea: 36,
    landAreaMin: 60,
    bedrooms: 2,
    bathrooms: 1,
    priceFrom: 369000000,
    totalUnits: 35,
    description: "Ansara adalah pilihan hunian paling terjangkau di Puri Safana Cikeas tanpa mengorbankan kualitas bangunan.",
    facilities: ["2 Kamar Tidur", "1 Kamar Mandi", "Carport"],
    layoutImages: ["/tipe/ansara/layout-1.jpg"],
    interiorImages: [
      "/tipe/ansara/interior-1.jpg",
      "/tipe/ansara/interior-2.jpg",
      "/tipe/ansara/interior-3.jpg",
      "/tipe/ansara/interior-4.jpg",
    ],
  },
];

export interface Block {
  code: string;
  x: number;
  z: number;
  rows: number;
  cols: number;
  unitType: string;
}

export const blocks: Block[] = [
  { code: "AA1", x: 8.19, z: 18.07, rows: 2, cols: 3, unitType: "aruna" },
  { code: "AA14", x: 8.787, z: -5.972, rows: 5, cols: 5, unitType: "aruna" },
  { code: "AA15", x: 0.733, z: -9.172, rows: 3, cols: 3, unitType: "aruna" },
  { code: "AA16", x: -0.498, z: -5.821, rows: 2, cols: 2, unitType: "aruna" },
  { code: "AA17", x: 7.649, z: -2.545, rows: 5, cols: 5, unitType: "aruna" },
  { code: "AA18", x: 3.52, z: -0.19, rows: 2, cols: 3, unitType: "asvara" },
  { code: "AA19", x: 8.302, z: 3.939, rows: 3, cols: 3, unitType: "asvara" },
  { code: "AA2", x: 10.076, z: -21.363, rows: 1, cols: 2, unitType: "asvara" },
  { code: "AA20", x: 2.147, z: 3.104, rows: 2, cols: 3, unitType: "asvara" },
  { code: "AA21", x: -3.52, z: -6.44, rows: 3, cols: 3, unitType: "adara" },
  { code: "AA22", x: -6.076, z: 3.739, rows: 2, cols: 3, unitType: "adara" },
  { code: "AA23", x: 0.8, z: 6.393, rows: 3, cols: 3, unitType: "asvara" },
  { code: "AA24", x: -1.093, z: 9.535, rows: 3, cols: 3, unitType: "adara" },
  { code: "AA25", x: -7.489, z: 7.015, rows: 3, cols: 3, unitType: "adara" },
  { code: "AA26", x: -8.582, z: 10.419, rows: 2, cols: 3, unitType: "adara" },
  { code: "AA27", x: -2.236, z: 12.726, rows: 2, cols: 3, unitType: "adara" },
  { code: "AA28", x: -6.671, z: 19.33, rows: 4, cols: 4, unitType: "asvara" },
  { code: "AA29", x: -9.613, z: 18.526, rows: 5, cols: 5, unitType: "ansara" },
  { code: "AA3", x: 9.316, z: -18.141, rows: 2, cols: 2, unitType: "aruna" },
  { code: "AA30", x: -11.84, z: 15.166, rows: 3, cols: 3, unitType: "ansara" },
  { code: "AA31", x: -15.64, z: 20.73, rows: 2, cols: 2, unitType: "ansara" },
  { code: "AA32", x: -15.831, z: 24.508, rows: 3, cols: 3, unitType: "asvara" },
  { code: "AA5", x: 1.764, z: -19.785, rows: 3, cols: 4, unitType: "aruna" },
  { code: "AA6", x: -2.138, z: -17.056, rows: 2, cols: 3, unitType: "aruna" },
  { code: "AA7", x: 3.098, z: -11.439, rows: 1, cols: 2, unitType: "aruna" },
  { code: "AA8", x: 7.68, z: -11.63, rows: 3, cols: 3, unitType: "adara" },
  { code: "AA9", x: 10.827, z: -8.879, rows: 3, cols: 3, unitType: "aruna" },
];

export interface Unit {
  code: string;
  block: string;
  typeSlug: string;
  status: UnitStatus;
  price: number;
  landArea: number;
  buildingArea: number;
  gridX: number;
  gridZ: number;
  progress: number; // % progres konstruksi, dari data lapangan
  x: number; // posisi 3D asli dari site plan (world space)
  z: number;
  rot: number; // rotasi asli (derajat) mengikuti arah jalan
}

export const units: Unit[] = [
  { code: "AA1-2", block: "AA1", typeSlug: "aruna", status: "tersedia", price: 787999980, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 0, progress: 0.0, x: 6.793, z: -21.133, rot: -11.63 },
  { code: "AA1-5", block: "AA1", typeSlug: "aruna", status: "tersedia", price: 787999980, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 0, progress: 0.0, x: 5.207, z: -21.467, rot: -11.31 },
  { code: "AA1-7", block: "AA1", typeSlug: "aruna", status: "tersedia", price: 787999980, landArea: 120, buildingArea: 73, gridX: 2, gridZ: 0, progress: 0.0, x: 3.63, z: -21.815, rot: -11.31 },
  { code: "AA1-9", block: "AA1", typeSlug: "aruna", status: "tersedia", price: 787999980, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 1, progress: 0.0, x: 2.044, z: -22.148, rot: -11.63 },
  { code: "AA1-11", block: "AA1", typeSlug: "aruna", status: "tersedia", price: 787999980, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 1, progress: 0.0, x: 0.385, z: -22.511, rot: -11.47 },
  { code: "AA1-12", block: "AA1", typeSlug: "aruna", status: "tersedia", price: 664666659, landArea: 83, buildingArea: 73, gridX: 2, gridZ: 1, progress: 0.0, x: -0.393, z: -22.667, rot: -11.47 },
  { code: "AA14-1", block: "AA14", typeSlug: "aruna", status: "terjual", price: 639000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 0, progress: 92.8, x: -1.326, z: -4.911, rot: -25.11 },
  { code: "AA14-2", block: "AA14", typeSlug: "aruna", status: "terjual", price: 609000000, landArea: 60, buildingArea: 73, gridX: 1, gridZ: 0, progress: 91.7, x: 5.904, z: -8.015, rot: -25.11 },
  { code: "AA14-3", block: "AA14", typeSlug: "aruna", status: "terjual", price: 609000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 0, progress: 37.2, x: 6.652, z: -7.756, rot: -25.11 },
  { code: "AA14-5", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 3, gridZ: 0, progress: 0.0, x: 7.407, z: -7.489, rot: -25.11 },
  { code: "AA14-6", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 4, gridZ: 0, progress: 0.0, x: 8.104, z: -7.237, rot: -25.11 },
  { code: "AA14-7", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 1, progress: 0.0, x: 8.941, z: -6.956, rot: -25.11 },
  { code: "AA14-8", block: "AA14", typeSlug: "aruna", status: "booking", price: 639000000, landArea: 60, buildingArea: 73, gridX: 1, gridZ: 1, progress: 0.0, x: 9.696, z: -6.689, rot: -25.11 },
  { code: "AA14-9", block: "AA14", typeSlug: "aruna", status: "booking", price: 639000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 1, progress: 32.2, x: 10.459, z: -6.422, rot: -25.11 },
  { code: "AA14-10", block: "AA14", typeSlug: "aruna", status: "terjual", price: 588000000, landArea: 60, buildingArea: 73, gridX: 3, gridZ: 1, progress: 47.8, x: 11.948, z: -3.489, rot: -25.11 },
  { code: "AA14-11", block: "AA14", typeSlug: "aruna", status: "terjual", price: 734000000, landArea: 104, buildingArea: 73, gridX: 4, gridZ: 1, progress: 49.4, x: 11.148, z: -3.733, rot: -25.46 },
  { code: "AA14-12", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 2, progress: 49.4, x: 12.985, z: -5.637, rot: -15.61 },
  { code: "AA14-14", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 1, gridZ: 2, progress: 47.8, x: 13.956, z: -5.481, rot: -14.83 },
  { code: "AA14-15", block: "AA14", typeSlug: "aruna", status: "terjual", price: 609000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 2, progress: 49.4, x: 14.748, z: -5.356, rot: -15.4 },
  { code: "AA14-16", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 3, gridZ: 2, progress: 50.2, x: 15.481, z: -5.23, rot: -14.83 },
  { code: "AA14-17", block: "AA14", typeSlug: "aruna", status: "terjual", price: 639000000, landArea: 60, buildingArea: 73, gridX: 4, gridZ: 2, progress: 42.8, x: 11.904, z: -5.926, rot: -25.11 },
  { code: "AA14-19", block: "AA14", typeSlug: "asvara", status: "tersedia", price: 715000000, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 3, progress: 56.1, x: 15.23, z: -2.97, rot: -15.61 },
  { code: "AA14-21", block: "AA14", typeSlug: "asvara", status: "terjual", price: 628999999, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 3, progress: 56.1, x: 13.637, z: -3.23, rot: -15.61 },
  { code: "AA14-23", block: "AA14", typeSlug: "asvara", status: "tersedia", price: 672000000, landArea: 122, buildingArea: 48, gridX: 2, gridZ: 3, progress: 0.0, x: 16.815, z: -2.719, rot: -15.61 },
  { code: "AA14-25", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 865000000, landArea: 120, buildingArea: 73, gridX: 3, gridZ: 3, progress: 0.0, x: 10.393, z: -4.0, rot: -25.11 },
  { code: "AA14-27", block: "AA14", typeSlug: "aruna", status: "booking", price: 864999999, landArea: 120, buildingArea: 73, gridX: 4, gridZ: 3, progress: 0.0, x: 8.867, z: -4.533, rot: -25.11 },
  { code: "AA14-29", block: "AA14", typeSlug: "aruna", status: "terjual", price: 828999999, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 4, progress: 50.9, x: 7.341, z: -5.067, rot: -25.11 },
  { code: "AA14-31", block: "AA14", typeSlug: "aruna", status: "terjual", price: 828999999, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 4, progress: 53.1, x: 5.815, z: -5.6, rot: -25.11 },
  { code: "AA14-33", block: "AA14", typeSlug: "aruna", status: "tersedia", price: 915000000, landArea: 120, buildingArea: 73, gridX: 2, gridZ: 4, progress: 0.0, x: 11.222, z: -6.156, rot: -25.11 },
  { code: "AA15-1", block: "AA15", typeSlug: "aruna", status: "tersedia", price: 669000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 0, progress: 90.0, x: 2.204, z: -8.68, rot: -26.56 },
  { code: "AA15-2", block: "AA15", typeSlug: "aruna", status: "booking", price: 639000000, landArea: 60, buildingArea: 73, gridX: 1, gridZ: 0, progress: 51.7, x: 3.637, z: -9.03, rot: -25.11 },
  { code: "AA15-3", block: "AA15", typeSlug: "aruna", status: "terjual", price: 609000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 0, progress: 91.7, x: 2.904, z: -9.393, rot: -26.56 },
  { code: "AA15-5", block: "AA15", typeSlug: "aruna", status: "terjual", price: 748999999, landArea: 102, buildingArea: 73, gridX: 0, gridZ: 1, progress: 0.0, x: 2.17, z: -9.741, rot: -25.11 },
  { code: "AA15-7", block: "AA15", typeSlug: "aruna", status: "terjual", price: 843000000, landArea: 125, buildingArea: 73, gridX: 1, gridZ: 1, progress: 90.6, x: 1.17, z: -7.652, rot: -25.11 },
  { code: "AA15-9", block: "AA15", typeSlug: "aruna", status: "booking", price: 864999999, landArea: 120, buildingArea: 73, gridX: 2, gridZ: 1, progress: 90.6, x: 2.548, z: -6.985, rot: -25.85 },
  { code: "AA15-10", block: "AA15", typeSlug: "aruna", status: "tersedia", price: 669000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 2, progress: 90.0, x: 3.133, z: -10.615, rot: -25.11 },
  { code: "AA16-1", block: "AA16", typeSlug: "aruna", status: "terjual", price: 858999999, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 0, progress: 51.1, x: -0.281, z: -8.356, rot: -25.11 },
  { code: "AA16-3", block: "AA16", typeSlug: "aruna", status: "booking", price: 954000000, landArea: 132, buildingArea: 73, gridX: 1, gridZ: 0, progress: 93.9, x: 1.37, z: -6.178, rot: -25.11 },
  { code: "AA16-7", block: "AA16", typeSlug: "aruna", status: "terjual", price: 936000000, landArea: 143, buildingArea: 73, gridX: 0, gridZ: 1, progress: 47.2, x: 0.378, z: -4.081, rot: -25.11 },
  { code: "AA16-9", block: "AA16", typeSlug: "aruna", status: "terjual", price: 878999999, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 1, progress: 47.8, x: -0.081, z: -6.889, rot: -25.11 },
  { code: "AA17-1", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 914999999, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 0, progress: 58.3, x: 11.237, z: 0.074, rot: -13.84 },
  { code: "AA17-3", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 865000000, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 0, progress: 58.9, x: 5.126, z: -4.481, rot: -25.11 },
  { code: "AA17-6", block: "AA17", typeSlug: "aruna", status: "terjual", price: 828999999, landArea: 120, buildingArea: 73, gridX: 2, gridZ: 0, progress: 57.8, x: 6.585, z: -3.97, rot: -25.11 },
  { code: "AA17-8", block: "AA17", typeSlug: "aruna", status: "terjual", price: 828999999, landArea: 120, buildingArea: 73, gridX: 3, gridZ: 0, progress: 62.2, x: 8.17, z: -3.415, rot: -25.11 },
  { code: "AA17-10", block: "AA17", typeSlug: "aruna", status: "terjual", price: 828999999, landArea: 120, buildingArea: 73, gridX: 4, gridZ: 0, progress: 56.7, x: 9.696, z: -2.881, rot: -25.11 },
  { code: "AA17-12", block: "AA17", typeSlug: "aruna", status: "terjual", price: 752000000, landArea: 103, buildingArea: 73, gridX: 0, gridZ: 1, progress: 61.1, x: 11.163, z: -2.378, rot: -25.11 },
  { code: "AA17-14", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 1, gridZ: 1, progress: 0.0, x: 12.141, z: -2.096, rot: -15.61 },
  { code: "AA17-15", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 1, progress: 0.0, x: 13.207, z: -1.97, rot: -15.61 },
  { code: "AA17-16", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 3, gridZ: 1, progress: 0.0, x: 13.941, z: -1.852, rot: -15.61 },
  { code: "AA17-17", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 4, gridZ: 1, progress: 55.0, x: 14.8, z: -1.711, rot: -15.61 },
  { code: "AA17-18", block: "AA17", typeSlug: "aruna", status: "terjual", price: 639000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 2, progress: 55.6, x: 15.607, z: -1.6, rot: -15.4 },
  { code: "AA17-19", block: "AA17", typeSlug: "aruna", status: "booking", price: 669000000, landArea: 60, buildingArea: 73, gridX: 1, gridZ: 2, progress: 61.1, x: 15.319, z: 0.659, rot: -14.62 },
  { code: "AA17-20", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 2, progress: 62.2, x: 14.541, z: 0.556, rot: -13.84 },
  { code: "AA17-21", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 3, gridZ: 2, progress: 61.7, x: 13.726, z: 0.437, rot: -13.84 },
  { code: "AA17-22", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 4, gridZ: 2, progress: 0.0, x: 12.919, z: 0.319, rot: -14.04 },
  { code: "AA17-23", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 3, progress: 0.0, x: 10.43, z: -0.23, rot: -25.11 },
  { code: "AA17-24", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 872000000, landArea: 122, buildingArea: 73, gridX: 1, gridZ: 3, progress: 0.0, x: 16.111, z: 0.77, rot: -14.62 },
  { code: "AA17-27", block: "AA17", typeSlug: "aruna", status: "booking", price: 864999999, landArea: 120, buildingArea: 73, gridX: 2, gridZ: 3, progress: 58.9, x: 8.896, z: -0.756, rot: -25.11 },
  { code: "AA17-29", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 864999999, landArea: 120, buildingArea: 73, gridX: 3, gridZ: 3, progress: 0.0, x: 7.311, z: -1.304, rot: -25.46 },
  { code: "AA17-31", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 864999999, landArea: 120, buildingArea: 73, gridX: 4, gridZ: 3, progress: 0.0, x: 5.859, z: -1.8, rot: -25.11 },
  { code: "AA17-33", block: "AA17", typeSlug: "aruna", status: "terjual", price: 828999999, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 4, progress: 58.9, x: 4.319, z: -2.333, rot: -25.11 },
  { code: "AA17-35", block: "AA17", typeSlug: "aruna", status: "tersedia", price: 914999999, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 4, progress: 0.0, x: 17.148, z: -4.978, rot: -14.83 },
  { code: "AA18-1", block: "AA18", typeSlug: "asvara", status: "terjual", price: 607999999, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 0, progress: 11.1, x: 2.796, z: 0.95, rot: -25.11 },
  { code: "AA18-3", block: "AA18", typeSlug: "asvara", status: "terjual", price: 627999999, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 0, progress: 0.0, x: 3.496, z: -1.267, rot: -25.11 },
  { code: "AA18-6", block: "AA18", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 0, progress: 0.0, x: 4.956, z: -0.756, rot: -25.11 },
  { code: "AA18-9", block: "AA18", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 1, progress: 0.0, x: 4.119, z: 1.378, rot: -25.11 },
  { code: "AA18-11", block: "AA18", typeSlug: "asvara", status: "terjual", price: 628999999, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 1, progress: 0.0, x: 2.659, z: 0.867, rot: -25.11 },
  { code: "AA18-12", block: "AA18", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 1, progress: 0.0, x: 1.911, z: 0.6, rot: -25.11 },
  { code: "AA19-1", block: "AA19", typeSlug: "asvara", status: "booking", price: 489000000, landArea: 60, buildingArea: 48, gridX: 0, gridZ: 0, progress: 85.0, x: 4.593, z: 5.341, rot: -25.11 },
  { code: "AA19-3", block: "AA19", typeSlug: "asvara", status: "terjual", price: 628999999, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 0, progress: 0.0, x: 8.096, z: 1.667, rot: 72.07 },
  { code: "AA19-6", block: "AA19", typeSlug: "asvara", status: "terjual", price: 628999999, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 0, progress: 0.0, x: 7.563, z: 3.2, rot: 72.07 },
  { code: "AA19-7", block: "AA19", typeSlug: "asvara", status: "tersedia", price: 668999999, landArea: 123, buildingArea: 48, gridX: 0, gridZ: 1, progress: 0.0, x: 7.296, z: 3.963, rot: 71.56 },
  { code: "AA19-8", block: "AA19", typeSlug: "asvara", status: "terjual", price: 676000000, landArea: 134, buildingArea: 48, gridX: 1, gridZ: 1, progress: 0.0, x: 7.03, z: 4.719, rot: 72.07 },
  { code: "AA19-10", block: "AA19", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 1, progress: 0.0, x: 9.881, z: 3.222, rot: 71.82 },
  { code: "AA19-11", block: "AA19", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 2, progress: 0.0, x: 10.141, z: 2.474, rot: 71.05 },
  { code: "AA19-13", block: "AA19", typeSlug: "asvara", status: "terjual", price: 459000000, landArea: 60, buildingArea: 48, gridX: 1, gridZ: 2, progress: 85.6, x: 6.763, z: 5.489, rot: 70.56 },
  { code: "AA2-1", block: "AA2", typeSlug: "asvara", status: "tersedia", price: 791333313, landArea: 121, buildingArea: 48, gridX: 0, gridZ: 0, progress: 0.0, x: -1.459, z: -22.904, rot: -11.47 },
  { code: "AA2-3", block: "AA2", typeSlug: "asvara", status: "tersedia", price: 621333330, landArea: 70, buildingArea: 48, gridX: 1, gridZ: 0, progress: 0.0, x: 10.407, z: -20.333, rot: -11.31 },
  { code: "AA20-1", block: "AA20", typeSlug: "asvara", status: "terjual", price: 650000000, landArea: 134, buildingArea: 48, gridX: 0, gridZ: 0, progress: 66.7, x: 5.83, z: 2.0, rot: -25.11 },
  { code: "AA20-3", block: "AA20", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 0, progress: 86.7, x: 2.259, z: 2.081, rot: -25.11 },
  { code: "AA20-6", block: "AA20", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 0, progress: 95.6, x: 3.719, z: 2.593, rot: -25.82 },
  { code: "AA20-8", block: "AA20", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 1, progress: 0.0, x: 5.03, z: 1.704, rot: -25.11 },
  { code: "AA20-11", block: "AA20", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 1, progress: 95.6, x: 1.422, z: 4.207, rot: -25.11 },
  { code: "AA20-14", block: "AA20", typeSlug: "asvara", status: "terjual", price: 631500000, landArea: 135, buildingArea: 48, gridX: 2, gridZ: 1, progress: 97.2, x: 5.348, z: 3.17, rot: -25.11 },
  { code: "AA21-1", block: "AA21", typeSlug: "adara", status: "booking", price: 522000000, landArea: 61, buildingArea: 52, gridX: 0, gridZ: 0, progress: 0.0, x: -2.615, z: 2.607, rot: -23.63 },
  { code: "AA21-2", block: "AA21", typeSlug: "adara", status: "booking", price: 506000000, landArea: 65, buildingArea: 52, gridX: 1, gridZ: 0, progress: 0.0, x: -3.363, z: 2.296, rot: -22.99 },
  { code: "AA21-3", block: "AA21", typeSlug: "adara", status: "terjual", price: 492000000, landArea: 70, buildingArea: 52, gridX: 2, gridZ: 0, progress: 59.4, x: -4.111, z: 1.985, rot: -23.63 },
  { code: "AA21-5", block: "AA21", typeSlug: "adara", status: "terjual", price: 508999999, landArea: 75, buildingArea: 52, gridX: 0, gridZ: 1, progress: 58.9, x: -4.852, z: 1.674, rot: -23.63 },
  { code: "AA21-6", block: "AA21", typeSlug: "asvara", status: "terjual", price: 496000000, landArea: 80, buildingArea: 48, gridX: 1, gridZ: 1, progress: 50.0, x: -7.089, z: 4.644, rot: -22.99 },
  { code: "AA21-7", block: "AA21", typeSlug: "adara", status: "terjual", price: 542000000, landArea: 85, buildingArea: 52, gridX: 2, gridZ: 1, progress: 50.6, x: -1.874, z: 2.919, rot: -22.99 },
  { code: "AA21-8", block: "AA21", typeSlug: "asvara", status: "terjual", price: 548999999, landArea: 96, buildingArea: 48, gridX: 0, gridZ: 2, progress: 52.2, x: -5.6, z: 1.363, rot: -22.99 },
  { code: "AA22-1", block: "AA22", typeSlug: "adara", status: "tersedia", price: 745000000, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 0, progress: 0.0, x: -3.237, z: 3.8, rot: -22.99 },
  { code: "AA22-3", block: "AA22", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 0, progress: 0.0, x: -4.733, z: 3.178, rot: -22.99 },
  { code: "AA22-6", block: "AA22", typeSlug: "adara", status: "tersedia", price: 744999999, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 0, progress: 0.0, x: -9.244, z: 7.615, rot: -23.63 },
  { code: "AA22-8", block: "AA22", typeSlug: "adara", status: "terjual", price: 708999999, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 1, progress: 52.8, x: -6.341, z: 4.956, rot: -22.99 },
  { code: "AA22-10", block: "AA22", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 1, progress: 0.0, x: -3.437, z: 6.156, rot: -23.31 },
  { code: "AA22-12", block: "AA22", typeSlug: "adara", status: "tersedia", price: 744999999, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 1, progress: 0.0, x: -4.911, z: 5.541, rot: -23.63 },
  { code: "AA23-1", block: "AA23", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 0, progress: 96.7, x: 0.496, z: 5.252, rot: -17.93 },
  { code: "AA23-3", block: "AA23", typeSlug: "asvara", status: "terjual", price: 628999999, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 0, progress: 95.6, x: 2.015, z: 5.785, rot: -19.98 },
  { code: "AA23-7", block: "AA23", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 0, progress: 96.7, x: 4.704, z: 6.719, rot: -19.98 },
  { code: "AA23-8", block: "AA23", typeSlug: "asvara", status: "booking", price: 592000000, landArea: 100, buildingArea: 48, gridX: 0, gridZ: 1, progress: 0.0, x: 3.793, z: 5.044, rot: -25.82 },
  { code: "AA23-10", block: "AA23", typeSlug: "asvara", status: "booking", price: 704999999, landArea: 132, buildingArea: 48, gridX: 1, gridZ: 1, progress: 0.0, x: 2.207, z: 4.481, rot: -25.85 },
  { code: "AA23-12", block: "AA23", typeSlug: "asvara", status: "tersedia", price: 665000000, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 1, progress: 0.0, x: 1.963, z: 8.185, rot: -18.95 },
  { code: "AA23-15", block: "AA23", typeSlug: "adara", status: "terjual", price: 659000000, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 2, progress: 22.2, x: 0.422, z: 7.644, rot: -18.18 },
  { code: "AA23-16", block: "AA23", typeSlug: "asvara", status: "terjual", price: 459000000, landArea: 60, buildingArea: 48, gridX: 1, gridZ: 2, progress: 22.2, x: -0.341, z: 7.378, rot: -18.95 },
  { code: "AA24-1", block: "AA24", typeSlug: "adara", status: "terjual", price: 582000000, landArea: 82, buildingArea: 52, gridX: 0, gridZ: 0, progress: 0.0, x: -0.63, z: 8.652, rot: -17.93 },
  { code: "AA24-2", block: "AA24", typeSlug: "adara", status: "booking", price: 699000000, landArea: 121, buildingArea: 52, gridX: 1, gridZ: 0, progress: 0.0, x: 0.126, z: 8.919, rot: -17.93 },
  { code: "AA24-5", block: "AA24", typeSlug: "adara", status: "terjual", price: 694999999, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 0, progress: 0.0, x: 1.652, z: 9.452, rot: -17.93 },
  { code: "AA24-7", block: "AA24", typeSlug: "asvara", status: "terjual", price: 497999999, landArea: 81, buildingArea: 48, gridX: 0, gridZ: 1, progress: 58.6, x: -1.022, z: 7.141, rot: -18.95 },
  { code: "AA24-8", block: "AA24", typeSlug: "adara", status: "terjual", price: 638999999, landArea: 114, buildingArea: 52, gridX: 1, gridZ: 1, progress: 66.7, x: -1.311, z: 8.422, rot: -17.93 },
  { code: "AA24-9", block: "AA24", typeSlug: "adara", status: "booking", price: 695000000, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 1, progress: 67.8, x: 1.015, z: 11.652, rot: -17.93 },
  { code: "AA24-11", block: "AA24", typeSlug: "adara", status: "terjual", price: 802000000, landArea: 148, buildingArea: 52, gridX: 0, gridZ: 2, progress: 67.2, x: -2.385, z: 10.474, rot: -18.95 },
  { code: "AA25-1", block: "AA25", typeSlug: "adara", status: "terjual", price: 489000000, landArea: 60, buildingArea: 52, gridX: 0, gridZ: 0, progress: 73.3, x: -4.652, z: 7.074, rot: -22.99 },
  { code: "AA25-3", block: "AA25", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 0, progress: 73.9, x: -6.141, z: 6.452, rot: -22.99 },
  { code: "AA25-6", block: "AA25", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 0, progress: 73.9, x: -7.081, z: 7.074, rot: -22.99 },
  { code: "AA25-8", block: "AA25", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 1, progress: 73.9, x: -7.637, z: 5.83, rot: -22.99 },
  { code: "AA25-9", block: "AA25", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 1, progress: 73.9, x: -8.578, z: 7.889, rot: -22.56 },
  { code: "AA25-11", block: "AA25", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 1, progress: 98.3, x: -8.385, z: 5.526, rot: -22.99 },
  { code: "AA25-14", block: "AA25", typeSlug: "adara", status: "terjual", price: 658999999, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 2, progress: 68.9, x: -7.081, z: 8.511, rot: -23.31 },
  { code: "AA25-16", block: "AA25", typeSlug: "adara", status: "terjual", price: 489000000, landArea: 60, buildingArea: 52, gridX: 1, gridZ: 2, progress: 67.8, x: -5.593, z: 9.133, rot: -23.31 },
  { code: "AA26-1", block: "AA26", typeSlug: "adara", status: "terjual", price: 598999999, landArea: 87, buildingArea: 52, gridX: 0, gridZ: 0, progress: 79.7, x: -6.541, z: 10.156, rot: -23.63 },
  { code: "AA26-3", block: "AA26", typeSlug: "adara", status: "booking", price: 658999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 0, progress: 0.0, x: -8.037, z: 9.533, rot: -23.63 },
  { code: "AA26-6", block: "AA26", typeSlug: "adara", status: "booking", price: 745000000, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 0, progress: 0.0, x: -3.926, z: 13.533, rot: -18.18 },
  { code: "AA26-7", block: "AA26", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 1, progress: 98.4, x: -5.548, z: 10.563, rot: -22.99 },
  { code: "AA26-10", block: "AA26", typeSlug: "asvara", status: "tersedia", price: 665000000, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 1, progress: 98.6, x: -8.259, z: 11.844, rot: -23.63 },
  { code: "AA26-11", block: "AA26", typeSlug: "asvara", status: "terjual", price: 495000000, landArea: 79, buildingArea: 48, gridX: 2, gridZ: 1, progress: 98.9, x: -7.526, z: 12.156, rot: -23.31 },
  { code: "AA27-1", block: "AA27", typeSlug: "adara", status: "tersedia", price: 744999999, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 0, progress: 60.0, x: -2.378, z: 11.644, rot: -17.93 },
  { code: "AA27-3", block: "AA27", typeSlug: "adara", status: "booking", price: 694999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 0, progress: 60.0, x: -0.852, z: 12.178, rot: -17.93 },
  { code: "AA27-6", block: "AA27", typeSlug: "adara", status: "terjual", price: 702000000, landArea: 133, buildingArea: 52, gridX: 2, gridZ: 0, progress: 10.6, x: 0.674, z: 12.711, rot: -17.93 },
  { code: "AA27-9", block: "AA27", typeSlug: "asvara", status: "terjual", price: 609000000, landArea: 127, buildingArea: 48, gridX: 0, gridZ: 1, progress: 92.2, x: 0.03, z: 14.896, rot: -17.93 },
  { code: "AA27-11", block: "AA27", typeSlug: "asvara", status: "terjual", price: 588000000, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 1, progress: 90.0, x: -3.163, z: 13.8, rot: -18.95 },
  { code: "AA27-14", block: "AA27", typeSlug: "asvara", status: "terjual", price: 678000000, landArea: 120, buildingArea: 48, gridX: 2, gridZ: 1, progress: 91.1, x: -2.385, z: 14.067, rot: -18.18 },
  { code: "AA28-1", block: "AA28", typeSlug: "asvara", status: "terjual", price: 408000000, landArea: 60, buildingArea: 48, gridX: 0, gridZ: 0, progress: 78.3, x: -11.793, z: 17.674, rot: 68.5 },
  { code: "AA28-2", block: "AA28", typeSlug: "asvara", status: "tersedia", price: 459000000, landArea: 60, buildingArea: 48, gridX: 1, gridZ: 0, progress: 70.6, x: -5.407, z: 15.0, rot: 67.89 },
  { code: "AA28-3", block: "AA28", typeSlug: "asvara", status: "terjual", price: 408000000, landArea: 60, buildingArea: 48, gridX: 2, gridZ: 0, progress: 78.9, x: -5.719, z: 15.756, rot: 67.01 },
  { code: "AA28-5", block: "AA28", typeSlug: "asvara", status: "terjual", price: 429000000, landArea: 60, buildingArea: 48, gridX: 3, gridZ: 0, progress: 70.0, x: -6.037, z: 16.496, rot: 67.89 },
  { code: "AA28-6", block: "AA28", typeSlug: "asvara", status: "terjual", price: 429000000, landArea: 60, buildingArea: 48, gridX: 0, gridZ: 1, progress: 71.1, x: -6.348, z: 17.244, rot: 68.5 },
  { code: "AA28-7", block: "AA28", typeSlug: "asvara", status: "terjual", price: 429000000, landArea: 60, buildingArea: 48, gridX: 1, gridZ: 1, progress: 71.1, x: -6.667, z: 17.985, rot: 68.5 },
  { code: "AA28-8", block: "AA28", typeSlug: "asvara", status: "booking", price: 459000000, landArea: 60, buildingArea: 36.25, gridX: 2, gridZ: 1, progress: 76.7, x: -6.985, z: 18.733, rot: 67.89 },
  { code: "AA28-9", block: "AA28", typeSlug: "asvara", status: "tersedia", price: 459000000, landArea: 60, buildingArea: 48, gridX: 3, gridZ: 1, progress: 0.0, x: -7.296, z: 19.474, rot: 68.5 },
  { code: "AA28-10", block: "AA28", typeSlug: "asvara", status: "booking", price: 459000000, landArea: 60, buildingArea: 48, gridX: 0, gridZ: 2, progress: 95.6, x: -7.607, z: 20.222, rot: 67.89 },
  { code: "AA28-11", block: "AA28", typeSlug: "asvara", status: "tersedia", price: 459000000, landArea: 60, buildingArea: 48, gridX: 1, gridZ: 2, progress: 0.0, x: -7.948, z: 21.044, rot: 67.44 },
  { code: "AA28-12", block: "AA28", typeSlug: "asvara", status: "tersedia", price: 459000000, landArea: 60, buildingArea: 48, gridX: 2, gridZ: 2, progress: 95.6, x: -8.252, z: 21.77, rot: 68.2 },
  { code: "AA28-14", block: "AA28", typeSlug: "asvara", status: "terjual", price: 408000000, landArea: 60, buildingArea: 48, gridX: 3, gridZ: 2, progress: 95.6, x: -8.57, z: 22.541, rot: 67.75 },
  { code: "AA28-15", block: "AA28", typeSlug: "asvara", status: "terjual", price: 408000000, landArea: 60, buildingArea: 48, gridX: 0, gridZ: 3, progress: 97.8, x: -8.881, z: 23.281, rot: 67.44 },
  { code: "AA29-1", block: "AA29", typeSlug: "ansara", status: "booking", price: 419000000, landArea: 60, buildingArea: 36, gridX: 0, gridZ: 0, progress: 98.9, x: -6.593, z: 12.541, rot: -23.31 },
  { code: "AA29-2", block: "AA29", typeSlug: "ansara", status: "terjual", price: 369000000, landArea: 60, buildingArea: 36, gridX: 1, gridZ: 0, progress: 0.0, x: -8.719, z: 13.689, rot: 68.5 },
  { code: "AA29-3", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 2, gridZ: 0, progress: 0.0, x: -9.037, z: 14.444, rot: 68.5 },
  { code: "AA29-5", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 3, gridZ: 0, progress: 0.0, x: -9.348, z: 15.185, rot: 68.5 },
  { code: "AA29-6", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 4, gridZ: 0, progress: 0.0, x: -9.667, z: 15.933, rot: 68.5 },
  { code: "AA29-7", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 0, gridZ: 1, progress: 0.0, x: -9.985, z: 16.674, rot: 68.5 },
  { code: "AA29-8", block: "AA29", typeSlug: "ansara", status: "terjual", price: 369000000, landArea: 60, buildingArea: 36, gridX: 1, gridZ: 1, progress: 0.0, x: -10.296, z: 17.422, rot: 67.89 },
  { code: "AA29-9", block: "AA29", typeSlug: "ansara", status: "terjual", price: 369000000, landArea: 60, buildingArea: 36, gridX: 2, gridZ: 1, progress: 52.8, x: -10.607, z: 18.163, rot: 68.5 },
  { code: "AA29-10", block: "AA29", typeSlug: "ansara", status: "terjual", price: 369000000, landArea: 60, buildingArea: 36, gridX: 3, gridZ: 1, progress: 87.4, x: -10.919, z: 18.911, rot: 67.89 },
  { code: "AA29-11", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 4, gridZ: 1, progress: 48.3, x: -11.259, z: 19.733, rot: 67.44 },
  { code: "AA29-12", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 0, gridZ: 2, progress: 0.0, x: -11.57, z: 20.459, rot: 68.5 },
  { code: "AA29-14", block: "AA29", typeSlug: "ansara", status: "terjual", price: 369000000, landArea: 60, buildingArea: 36, gridX: 1, gridZ: 2, progress: 91.1, x: -11.881, z: 21.23, rot: 67.44 },
  { code: "AA29-15", block: "AA29", typeSlug: "ansara", status: "booking", price: 419000000, landArea: 60, buildingArea: 36, gridX: 2, gridZ: 2, progress: 0.0, x: -12.2, z: 21.97, rot: 67.44 },
  { code: "AA29-16", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 419000000, landArea: 60, buildingArea: 36, gridX: 3, gridZ: 2, progress: 0.0, x: -10.096, z: 22.859, rot: 66.69 },
  { code: "AA29-17", block: "AA29", typeSlug: "ansara", status: "booking", price: 389000000, landArea: 60, buildingArea: 36, gridX: 4, gridZ: 2, progress: 0.0, x: -9.785, z: 22.111, rot: 67.44 },
  { code: "AA29-18", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 0, gridZ: 3, progress: 0.0, x: -9.467, z: 21.363, rot: 66.69 },
  { code: "AA29-20", block: "AA29", typeSlug: "ansara", status: "terjual", price: 569000000, landArea: 120, buildingArea: 36, gridX: 1, gridZ: 3, progress: 0.0, x: -8.83, z: 19.852, rot: 66.37 },
  { code: "AA29-22", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 2, gridZ: 3, progress: 0.0, x: -8.215, z: 18.378, rot: 66.69 },
  { code: "AA29-24", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 3, gridZ: 3, progress: 0.0, x: -7.593, z: 16.889, rot: 66.69 },
  { code: "AA29-25", block: "AA29", typeSlug: "ansara", status: "tersedia", price: 389000000, landArea: 60, buildingArea: 36, gridX: 4, gridZ: 3, progress: 0.0, x: -7.281, z: 16.141, rot: 66.69 },
  { code: "AA29-26", block: "AA29", typeSlug: "ansara", status: "terjual", price: 369000000, landArea: 60, buildingArea: 36, gridX: 0, gridZ: 4, progress: 0.0, x: -6.963, z: 15.4, rot: 66.69 },
  { code: "AA29-27", block: "AA29", typeSlug: "ansara", status: "terjual", price: 369000000, landArea: 60, buildingArea: 36, gridX: 1, gridZ: 4, progress: 45.8, x: -6.659, z: 14.652, rot: 67.44 },
  { code: "AA29-28", block: "AA29", typeSlug: "ansara", status: "booking", price: 419000000, landArea: 60, buildingArea: 36, gridX: 2, gridZ: 4, progress: 96.1, x: -12.519, z: 22.719, rot: 67.44 },
  { code: "AA3-1", block: "AA3", typeSlug: "aruna", status: "tersedia", price: 807999978, landArea: 126, buildingArea: 73, gridX: 0, gridZ: 0, progress: 0.0, x: 11.296, z: -20.126, rot: -11.31 },
  { code: "AA3-3", block: "AA3", typeSlug: "aruna", status: "tersedia", price: 667999992, landArea: 84, buildingArea: 73, gridX: 1, gridZ: 0, progress: 0.0, x: 10.141, z: -18.993, rot: -11.63 },
  { code: "AA3-6", block: "AA3", typeSlug: "aruna", status: "tersedia", price: 824666643, landArea: 131, buildingArea: 73, gridX: 0, gridZ: 1, progress: 0.0, x: 8.815, z: -17.037, rot: -11.31 },
  { code: "AA3-7", block: "AA3", typeSlug: "aruna", status: "tersedia", price: 591333333, landArea: 61, buildingArea: 73, gridX: 1, gridZ: 1, progress: 0.0, x: 11.03, z: -18.785, rot: -11.31 },
  { code: "AA30-1", block: "AA30", typeSlug: "ansara", status: "terjual", price: 408999999, landArea: 63, buildingArea: 36, gridX: 0, gridZ: 0, progress: 86.8, x: -10.407, z: 23.6, rot: 66.37 },
  { code: "AA30-2", block: "AA30", typeSlug: "ansara", status: "terjual", price: 376000000, landArea: 62, buildingArea: 36, gridX: 1, gridZ: 0, progress: 48.9, x: -9.904, z: 13.2, rot: 67.01 },
  { code: "AA30-3", block: "AA30", typeSlug: "ansara", status: "terjual", price: 376000000, landArea: 62, buildingArea: 36, gridX: 2, gridZ: 0, progress: 0.0, x: -10.222, z: 13.948, rot: 68.5 },
  { code: "AA30-5", block: "AA30", typeSlug: "ansara", status: "terjual", price: 376000000, landArea: 62, buildingArea: 36, gridX: 0, gridZ: 1, progress: 0.0, x: -10.541, z: 14.696, rot: 67.01 },
  { code: "AA30-6", block: "AA30", typeSlug: "ansara", status: "terjual", price: 378999999, landArea: 63, buildingArea: 36, gridX: 1, gridZ: 1, progress: 0.0, x: -10.852, z: 15.444, rot: 67.01 },
  { code: "AA30-7", block: "AA30", typeSlug: "ansara", status: "terjual", price: 392000000, landArea: 67, buildingArea: 36, gridX: 2, gridZ: 1, progress: 80.6, x: -11.17, z: 16.185, rot: 67.01 },
  { code: "AA30-8", block: "AA30", typeSlug: "ansara", status: "terjual", price: 406000000, landArea: 71, buildingArea: 36, gridX: 0, gridZ: 2, progress: 0.0, x: -13.719, z: 19.185, rot: -28.74 },
  { code: "AA30-9", block: "AA30", typeSlug: "ansara", status: "terjual", price: 712000000, landArea: 154, buildingArea: 36, gridX: 1, gridZ: 2, progress: 52.0, x: -9.007, z: 11.541, rot: -23.63 },
  { code: "AA31-1", block: "AA31", typeSlug: "ansara", status: "terjual", price: 399000000, landArea: 60, buildingArea: 36, gridX: 0, gridZ: 0, progress: 83.9, x: -16.03, z: 21.985, rot: -28.74 },
  { code: "AA31-2", block: "AA31", typeSlug: "ansara", status: "terjual", price: 472000000, landArea: 91, buildingArea: 36, gridX: 1, gridZ: 0, progress: 81.7, x: -13.822, z: 20.57, rot: -28.74 },
  { code: "AA31-6", block: "AA31", typeSlug: "ansara", status: "tersedia", price: 532000000, landArea: 109, buildingArea: 36, gridX: 0, gridZ: 1, progress: 0.0, x: -14.97, z: 22.585, rot: -28.74 },
  { code: "AA31-7", block: "AA31", typeSlug: "ansara", status: "terjual", price: 399000000, landArea: 60, buildingArea: 36, gridX: 1, gridZ: 1, progress: 70.6, x: -9.2, z: 24.03, rot: 68.2 },
  { code: "AA32-1", block: "AA32", typeSlug: "asvara", status: "terjual", price: 414000000, landArea: 62, buildingArea: 48, gridX: 0, gridZ: 0, progress: 95.0, x: -14.881, z: 19.978, rot: -28.74 },
  { code: "AA32-2", block: "AA32", typeSlug: "asvara", status: "terjual", price: 432000000, landArea: 61, buildingArea: 48, gridX: 1, gridZ: 0, progress: 97.2, x: -11.096, z: 25.267, rot: -14.83 },
  { code: "AA32-3", block: "AA32", typeSlug: "asvara", status: "booking", price: 459000000, landArea: 60, buildingArea: 48, gridX: 2, gridZ: 0, progress: 97.8, x: -11.881, z: 25.052, rot: -14.83 },
  { code: "AA32-5", block: "AA32", typeSlug: "asvara", status: "terjual", price: 421000000, landArea: 64, buildingArea: 48, gridX: 0, gridZ: 1, progress: 97.8, x: -12.667, z: 24.837, rot: -14.83 },
  { code: "AA32-6", block: "AA32", typeSlug: "asvara", status: "terjual", price: 431000000, landArea: 67, buildingArea: 48, gridX: 1, gridZ: 1, progress: 0.0, x: -13.444, z: 24.622, rot: -14.83 },
  { code: "AA32-7", block: "AA32", typeSlug: "asvara", status: "terjual", price: 432000000, landArea: 68, buildingArea: 48, gridX: 2, gridZ: 1, progress: 97.8, x: -14.215, z: 24.296, rot: -27.3 },
  { code: "AA32-8", block: "AA32", typeSlug: "asvara", status: "terjual", price: 444000000, landArea: 72, buildingArea: 48, gridX: 0, gridZ: 2, progress: 97.2, x: -14.926, z: 23.933, rot: -26.56 },
  { code: "AA32-9", block: "AA32", typeSlug: "asvara", status: "terjual", price: 455400000, landArea: 76, buildingArea: 48, gridX: 1, gridZ: 2, progress: 97.8, x: -15.652, z: 23.548, rot: -26.56 },
  { code: "AA32-10", block: "AA32", typeSlug: "asvara", status: "booking", price: 537000000, landArea: 96, buildingArea: 48, gridX: 2, gridZ: 2, progress: 97.8, x: -16.378, z: 23.222, rot: -26.56 },
  { code: "AA5-1", block: "AA5", typeSlug: "aruna", status: "tersedia", price: 788000000, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 0, progress: 0.0, x: 10.481, z: -16.644, rot: -11.63 },
  { code: "AA5-3", block: "AA5", typeSlug: "aruna", status: "tersedia", price: 788000000, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 0, progress: 0.0, x: 5.511, z: -19.978, rot: -11.31 },
  { code: "AA5-6", block: "AA5", typeSlug: "aruna", status: "tersedia", price: 788000000, landArea: 120, buildingArea: 73, gridX: 2, gridZ: 0, progress: 0.0, x: 3.926, z: -20.326, rot: -11.63 },
  { code: "AA5-8", block: "AA5", typeSlug: "aruna", status: "tersedia", price: 788000000, landArea: 120, buildingArea: 73, gridX: 3, gridZ: 0, progress: 0.0, x: 2.348, z: -20.667, rot: -11.63 },
  { code: "AA5-10", block: "AA5", typeSlug: "aruna", status: "tersedia", price: 788000000, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 1, progress: 0.0, x: 0.77, z: -21.0, rot: -11.31 },
  { code: "AA5-12", block: "AA5", typeSlug: "aruna", status: "terjual", price: 788000000, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 1, progress: 96.1, x: -0.57, z: -18.985, rot: -11.47 },
  { code: "AA5-15", block: "AA5", typeSlug: "aruna", status: "terjual", price: 788000000, landArea: 120, buildingArea: 73, gridX: 2, gridZ: 1, progress: 95.8, x: 1.007, z: -18.644, rot: -11.47 },
  { code: "AA5-17", block: "AA5", typeSlug: "aruna", status: "terjual", price: 788000000, landArea: 120, buildingArea: 73, gridX: 3, gridZ: 1, progress: 95.8, x: 2.585, z: -18.311, rot: -11.31 },
  { code: "AA5-19", block: "AA5", typeSlug: "aruna", status: "tersedia", price: 788000000, landArea: 120, buildingArea: 73, gridX: 0, gridZ: 2, progress: 0.0, x: 4.17, z: -17.963, rot: -11.47 },
  { code: "AA5-21", block: "AA5", typeSlug: "aruna", status: "tersedia", price: 788000000, landArea: 120, buildingArea: 73, gridX: 1, gridZ: 2, progress: 0.0, x: 5.756, z: -17.622, rot: -11.47 },
  { code: "AA6-1", block: "AA6", typeSlug: "aruna", status: "tersedia", price: 673000000, landArea: 70, buildingArea: 73, gridX: 0, gridZ: 0, progress: 22.2, x: -1.363, z: -19.148, rot: -11.47 },
  { code: "AA6-3", block: "AA6", typeSlug: "aruna", status: "tersedia", price: 896000000, landArea: 137, buildingArea: 73, gridX: 1, gridZ: 0, progress: 22.2, x: 1.652, z: -17.044, rot: -11.63 },
  { code: "AA6-6", block: "AA6", typeSlug: "aruna", status: "tersedia", price: 949000000, landArea: 153, buildingArea: 73, gridX: 2, gridZ: 0, progress: 22.2, x: 0.067, z: -17.393, rot: -11.31 },
  { code: "AA6-8", block: "AA6", typeSlug: "aruna", status: "tersedia", price: 973000000, landArea: 160, buildingArea: 73, gridX: 0, gridZ: 1, progress: 22.2, x: -1.511, z: -17.726, rot: -11.31 },
  { code: "AA6-9", block: "AA6", typeSlug: "aruna", status: "tersedia", price: 709000000, landArea: 81, buildingArea: 73, gridX: 1, gridZ: 1, progress: 0.0, x: -2.304, z: -17.896, rot: -11.31 },
  { code: "AA6-10", block: "AA6", typeSlug: "aruna", status: "booking", price: 863000000, landArea: 127, buildingArea: 73, gridX: 2, gridZ: 1, progress: 25.0, x: -3.096, z: -18.067, rot: -11.31 },
  { code: "AA7-1", block: "AA7", typeSlug: "aruna", status: "tersedia", price: 699000000, landArea: 69, buildingArea: 73, gridX: 0, gridZ: 0, progress: 0.0, x: 1.452, z: -10.096, rot: -25.11 },
  { code: "AA7-2", block: "AA7", typeSlug: "aruna", status: "tersedia", price: 749000000, landArea: 93, buildingArea: 73, gridX: 1, gridZ: 0, progress: 0.0, x: 3.874, z: -10.259, rot: -25.11 },
  { code: "AA8-1", block: "AA8", typeSlug: "asvara", status: "tersedia", price: 714999999, landArea: 120, buildingArea: 48, gridX: 0, gridZ: 0, progress: 0.0, x: 8.457, z: -11.578, rot: 76.76 },
  { code: "AA8-3", block: "AA8", typeSlug: "adara", status: "tersedia", price: 694999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 0, progress: 0.0, x: 7.407, z: -14.556, rot: 76.76 },
  { code: "AA8-6", block: "AA8", typeSlug: "adara", status: "tersedia", price: 694999999, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 0, progress: 0.0, x: 7.015, z: -12.978, rot: 77.12 },
  { code: "AA8-8", block: "AA8", typeSlug: "adara", status: "tersedia", price: 744999999, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 1, progress: 0.0, x: 6.622, z: -11.415, rot: 76.76 },
  { code: "AA8-10", block: "AA8", typeSlug: "adara", status: "tersedia", price: 744999999, landArea: 120, buildingArea: 52, gridX: 1, gridZ: 1, progress: 61.1, x: 8.593, z: -10.022, rot: 76.76 },
  { code: "AA8-12", block: "AA8", typeSlug: "adara", status: "tersedia", price: 694999999, landArea: 120, buildingArea: 52, gridX: 2, gridZ: 1, progress: 69.4, x: 8.97, z: -11.578, rot: 76.16 },
  { code: "AA8-15", block: "AA8", typeSlug: "adara", status: "booking", price: 694999999, landArea: 120, buildingArea: 52, gridX: 0, gridZ: 2, progress: 55.6, x: 9.37, z: -13.141, rot: 76.94 },
  { code: "AA8-18", block: "AA8", typeSlug: "asvara", status: "booking", price: 714999999, landArea: 120, buildingArea: 48, gridX: 1, gridZ: 2, progress: 0.0, x: 6.23, z: -9.844, rot: 76.76 },
  { code: "AA9-1", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 696000000, landArea: 77, buildingArea: 73, gridX: 0, gridZ: 0, progress: 0.0, x: 8.393, z: -9.215, rot: 76.94 },
  { code: "AA9-2", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 1, gridZ: 0, progress: 0.0, x: 13.281, z: -9.17, rot: -17.93 },
  { code: "AA9-3", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 0, progress: 0.0, x: 12.504, z: -9.437, rot: -19.98 },
  { code: "AA9-5", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 736000000, landArea: 80, buildingArea: 73, gridX: 0, gridZ: 1, progress: 0.0, x: 11.741, z: -9.704, rot: -17.93 },
  { code: "AA9-6", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 736000000, landArea: 80, buildingArea: 73, gridX: 1, gridZ: 1, progress: 0.0, x: 11.0, z: -7.578, rot: -18.44 },
  { code: "AA9-7", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 2, gridZ: 1, progress: 0.0, x: 11.763, z: -7.311, rot: -17.93 },
  { code: "AA9-8", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 639000000, landArea: 60, buildingArea: 73, gridX: 0, gridZ: 2, progress: 0.0, x: 12.526, z: -7.044, rot: -18.44 },
  { code: "AA9-9", block: "AA9", typeSlug: "aruna", status: "tersedia", price: 716000000, landArea: 83, buildingArea: 73, gridX: 1, gridZ: 2, progress: 0.0, x: 10.748, z: -10.044, rot: -19.98 },
];

export interface Ruko {
  code: string;
  block: string;
  landArea: number;
  buildingArea: number;
  floors: number;
  status: UnitStatus;
  price: number;
  x: number;
  z: number;
  rot: number;
}

export const rukoList: Ruko[] = [
  { code: "RK1-1", block: "RK1", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: 9.511, z: -23.111, rot: -11.31 },
  { code: "RK1-2", block: "RK1", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: 10.163, z: -22.948, rot: -11.31 },
  { code: "RK1-3", block: "RK1", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: 10.815, z: -22.785, rot: -11.31 },
  { code: "RK2-1", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: 8.052, z: -23.385, rot: -11.63 },
  { code: "RK2-2", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: 7.378, z: -23.526, rot: -11.63 },
  { code: "RK2-3", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: 6.704, z: -23.667, rot: -11.31 },
  { code: "RK2-5", block: "RK2", landArea: 55, buildingArea: 55, floors: 1, status: "tersedia", price: 0, x: 6.03, z: -23.815, rot: -11.63 },
  { code: "RK2-6", block: "RK2", landArea: 55, buildingArea: 55, floors: 1, status: "tersedia", price: 529000000, x: 5.363, z: -23.956, rot: -11.31 },
  { code: "RK2-7", block: "RK2", landArea: 55, buildingArea: 55, floors: 1, status: "booking", price: 529000000, x: 4.696, z: -24.104, rot: -11.31 },
  { code: "RK2-8", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: -0.726, z: -25.267, rot: -11.47 },
  { code: "RK2-9", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 0, x: 4.03, z: -24.244, rot: -11.63 },
  { code: "RK2-10", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 729000000, x: 2.696, z: -24.533, rot: -11.31 },
  { code: "RK2-11", block: "RK2", landArea: 55, buildingArea: 55, floors: 1, status: "tersedia", price: 529000000, x: 1.941, z: -24.689, rot: -11.31 },
  { code: "RK2-12", block: "RK2", landArea: 55, buildingArea: 55, floors: 1, status: "tersedia", price: 529000000, x: 1.296, z: -24.83, rot: -11.47 },
  { code: "RK2-13", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 729000000, x: 0.607, z: -24.978, rot: -11.47 },
  { code: "RK2-14", block: "RK2", landArea: 55, buildingArea: 110, floors: 2, status: "tersedia", price: 729000000, x: -0.059, z: -25.119, rot: -11.31 },
  { code: "RK3-1", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "booking", price: 399000000, x: -1.69, z: -25.007, rot: 61.26 },
  { code: "RK3-2", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 399000000, x: -2.03, z: -24.407, rot: 61.26 },
  { code: "RK3-3", block: "RK3", landArea: 39, buildingArea: 39, floors: 1, status: "tersedia", price: 409500000, x: -2.37, z: -23.807, rot: 60.46 },
  { code: "RK3-5", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 409500000, x: -2.719, z: -23.215, rot: 60.46 },
  { code: "RK3-6", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "booking", price: 399000000, x: -3.067, z: -22.63, rot: 61.26 },
  { code: "RK3-7", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 409500000, x: -3.407, z: -22.037, rot: 61.26 },
  { code: "RK3-8", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 420000000, x: -6.2, z: -17.237, rot: 60.16 },
  { code: "RK3-9", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 420000000, x: -3.756, z: -21.444, rot: 61.26 },
  { code: "RK3-10", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 420000000, x: -4.437, z: -20.267, rot: 59.86 },
  { code: "RK3-11", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "booking", price: 399000000, x: -4.822, z: -19.6, rot: 60.86 },
  { code: "RK3-12", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 420000000, x: -5.156, z: -19.022, rot: 60.16 },
  { code: "RK3-13", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 430500000, x: -5.511, z: -18.422, rot: 60.86 },
  { code: "RK3-14", block: "RK3", landArea: 38, buildingArea: 38, floors: 1, status: "tersedia", price: 420000000, x: -5.852, z: -17.83, rot: 60.16 },
  { code: "Ruko R2-3", block: "Ruko R2", landArea: 55, buildingArea: 55, floors: 1, status: "tersedia", price: 529000000, x: 1.22, z: 22.43, rot: 0 },
  { code: "Ruko R2-5", block: "Ruko R2", landArea: 55, buildingArea: 55, floors: 1, status: "tersedia", price: 529000000, x: 1.84, z: 22.43, rot: 0 },
];

export interface Facility {
  code: string;
  name: string;
  desc: string;
  x: number;
  z: number;
  size: number; // relative footprint, larger = bigger land
}

// Club House & Mushola located between block AA6 and AA7 (per site plan).
// Club House has the larger footprint of the two.
export const facilities: Facility[] = [
  { code: "clubhouse", name: "Club House", desc: "Area rekreasi dan pertemuan warga", x: -2.5, z: -6.2, size: 2.6 },
  { code: "mushola", name: "Mushola", desc: "Fasilitas ibadah di dalam kawasan", x: 0.3, z: -6.6, size: 1.5 },
];

export const projectSummary = {
  name: "Puri Safana Cikeas",
  location: "Cikeas, Gunung Putri, Bogor",
  tagline: "Lebih Dekat, Lebih Murah, Lebih Luas",
  totalArea: "5.000 m²",
  totalUnits: 258,
  totalHouses: 227,
  totalRuko: 31,
  experience: "10 Tahun Pengalaman Profesional",
  about:
    "Bayangkan memiliki rumah di lingkungan yang nyaman, aman, dengan lokasi strategis dan fasilitas modern yang menunjang gaya hidup Anda. Di Puri Safana Cikeas, kami menawarkan tempat tinggal dengan standar kualitas tinggi dan harga yang terjangkau, sehingga rumah impian Anda lebih mudah terwujud.",
  facilities: [
    { name: "Club House", desc: "Area rekreasi dan pertemuan warga, terletak di antara Blok AA6 dan AA7" },
    { name: "Mushola", desc: "Fasilitas ibadah di dalam kawasan, berdampingan dengan Club House" },
    { name: "Gerbang Utama & Keamanan 24 Jam", desc: "Akses terkontrol dengan sistem keamanan" },
    { name: "Gedung Serbaguna", desc: "Ruang komunitas untuk acara warga" },
    { name: "Ruang Terbuka Hijau", desc: "Area bermain dan taman keluarga" },
    { name: "Lokasi Strategis", desc: "Akses mudah ke tol, sekolah, dan pusat perbelanjaan" },
  ],
};

export interface DeveloperProject {
  name: string;
  year: string;
  category: string;
}

export const developer = {
  name: "Bumantara",
  legalName: "PT Bintang Safana Globalindo",
  tagline: "One Vision. Sustainable Growth.",
  description:
    "Bumantara adalah perusahaan induk (holding company) yang didirikan untuk mengelola dan mengembangkan delapan entitas bisnis di berbagai sektor strategis, di atas fondasi tata kelola yang kuat dan visi jangka panjang. Sebagai perusahaan induk, Bumantara memberikan pengawasan strategis, memperkuat fondasi operasional, serta membangun sinergi antar entitas bisnisnya, sehingga setiap unit dapat tumbuh dengan arah dan tujuan yang jelas.",
  stats: [
    { label: "Entitas Bisnis", value: "8 Unit" },
    { label: "Sektor Strategis", value: "Multi-industri" },
    { label: "Unit Terjual Puri Safana", value: "142 Transaksi" },
  ],
  projects: [
    { name: "Puri Safana Cikeas", year: "Ongoing", category: "Properti Residensial" },
    { name: "Grand Mayang Residence", year: "2021", category: "Properti Residensial" },
    { name: "Sari Asih Serang", year: "2024", category: "Kesehatan" },
    { name: "Sari Asih Ciledug", year: "Ongoing", category: "Kesehatan" },
    { name: "Sambal Bakar Indonesia", year: "2024", category: "F&B · Cikeas, Bogor" },
    { name: "SMA IT Ar Rahmah Cendekia", year: "2024", category: "Pendidikan" },
    { name: "Yopadel Karawaci", year: "2025", category: "Olahraga & Lifestyle" },
    { name: "Yopadel Cikeas", year: "Coming Soon", category: "Olahraga & Lifestyle" },
  ] as DeveloperProject[],
};

export const nearbyPlaces = [
  { category: "Transportasi", name: "Gerbang Tol Cibubur / Gunung Putri", distance: "±10 menit" },
  { category: "Transportasi", name: "Stasiun LRT Harjamukti", distance: "±15 menit" },
  { category: "Pendidikan", name: "SDN & SMPN Gunung Putri", distance: "±5 menit" },
  { category: "Pendidikan", name: "Sekolah Swasta Cikeas", distance: "±10 menit" },
  { category: "Belanja", name: "Cibubur Junction", distance: "±15 menit" },
  { category: "Belanja", name: "Pasar Cikeas", distance: "±7 menit" },
  { category: "Kesehatan", name: "RS Sentra Medika Cibinong", distance: "±12 menit" },
  { category: "Kesehatan", name: "Klinik 24 Jam Gunung Putri", distance: "±6 menit" },
];

export const statusColor: Record<UnitStatus, string> = {
  tersedia: "#8bc34a",
  booking: "#e0b04c",
  terjual: "#9aa08f",
};

export const statusLabel: Record<UnitStatus, string> = {
  tersedia: "Tersedia",
  booking: "Booking",
  terjual: "Terjual",
};
