import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calvovn Rent Cars | Renta de Autos en República Dominicana",
  description:
    "Renta el auto de tus sueños en República Dominicana. Más de 150 vehículos disponibles, servicio 24/7, precios transparentes. Santo Domingo y Santiago.",
  keywords: [
    "renta de autos",
    "República Dominicana",
    "alquiler de carros",
    "rent a car",
    "Santo Domingo",
    "Calvovn Rent Cars",
  ],
  openGraph: {
    title: "Calvovn Rent Cars | Renta de Autos Premium en RD",
    description:
      "Tu compañero de viaje en República Dominicana. Autos modernos, precios justos.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
