export interface Car {
  id: number;
  name: string;
  year: number;
  category: "Sedan" | "SUV" | "Deportivos" | "Van";
  seats: number;
  transmission: string;
  fuel: string;
  pricePerDay: number;
  rating: number;
  reviews: number;
  available: boolean;
  image: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Porsche 911 Turbo",
    year: 2024,
    category: "Deportivos",
    seats: 2,
    transmission: "Automático",
    fuel: "Gasolina",
    pricePerDay: 250,
    rating: 5.0,
    reviews: 34,
    available: true,
    image: "/images/porsche-911-black.jpg",
  },
  {
    id: 2,
    name: "Porsche GT3 RS",
    year: 2024,
    category: "Deportivos",
    seats: 2,
    transmission: "Automático",
    fuel: "Gasolina",
    pricePerDay: 320,
    rating: 5.0,
    reviews: 21,
    available: true,
    image: "/images/porsche-gt3rs-grey.jpg",
  },
  {
    id: 3,
    name: "Porsche GT3 RS",
    year: 2024,
    category: "Deportivos",
    seats: 2,
    transmission: "Automático",
    fuel: "Gasolina",
    pricePerDay: 320,
    rating: 4.9,
    reviews: 18,
    available: true,
    image: "/images/porsche-gt3rs-white.jpg",
  },
  {
    id: 4,
    name: "Mercedes AMG GT",
    year: 2024,
    category: "Deportivos",
    seats: 2,
    transmission: "Automático",
    fuel: "Gasolina",
    pricePerDay: 280,
    rating: 5.0,
    reviews: 42,
    available: true,
    image: "/images/mercedes-amg-gt-poster.jpg",
  },
  {
    id: 5,
    name: "Mercedes AMG GT R",
    year: 2024,
    category: "Deportivos",
    seats: 2,
    transmission: "Automático",
    fuel: "Gasolina",
    pricePerDay: 300,
    rating: 4.9,
    reviews: 27,
    available: true,
    image: "/images/mercedes-amg-gt-front.jpg",
  },
  {
    id: 6,
    name: "Mercedes CLE 53 AMG",
    year: 2024,
    category: "Sedan",
    seats: 4,
    transmission: "Automático",
    fuel: "Gasolina",
    pricePerDay: 220,
    rating: 4.8,
    reviews: 35,
    available: true,
    image: "/images/mercedes-cle53-amg.jpg",
  },
];

export const categories = ["Todos", "SUV", "Sedán", "Deportivos", "Van"] as const;
export type Category = (typeof categories)[number];
