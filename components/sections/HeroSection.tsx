"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, MapPin, Star } from "lucide-react";
import Button from "../ui/Button";

const slides = [
  {
    image: "/images/mercedes-amg-gt-poster.jpg",
    alt: "Mercedes AMG GT deportivo premium",
  },
  {
    image: "/images/porsche-gt3rs-grey.jpg",
    alt: "Porsche GT3 RS gris deportivo",
  },
  {
    image: "/images/porsche-911-black.jpg",
    alt: "Porsche 911 negro elegante",
  },
  {
    image: "/images/mercedes-cle53-amg.jpg",
    alt: "Mercedes CLE 53 AMG plata",
  },
];

const stats = [
  { icon: Car, value: "+150", label: "Vehículos" },
  { icon: Star, value: "4.9/5", label: "Rating" },
  { icon: MapPin, value: "Santo Domingo", label: "& Santiago" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background:
            "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide text-white">
              RENTA EL AUTO
              <br />
              <span className="text-[var(--color-accent)]">DE TUS SUEÑOS</span>
              <br />
              EN REPÚBLICA
              <br />
              DOMINICANA
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-base md:text-lg max-w-md leading-relaxed"
          >
            Descubre nuestra flota premium con los mejores precios del mercado.
            Más de 150 vehículos disponibles para tu aventura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg" href="#flota">
              Ver Flota
            </Button>
            <Button variant="outline" size="lg" href="#contacto">
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators (vertical, right side) */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-sm font-bold transition-all duration-300 cursor-pointer ${
              current === index
                ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-black"
                : "border-white/30 text-white/50 hover:border-white hover:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Stats Badges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-6 md:left-auto md:right-6 z-30 flex flex-wrap gap-3"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2"
          >
            <stat.icon size={16} className="text-[var(--color-accent)]" />
            <span className="text-white font-[family-name:var(--font-dm-sans)] text-xs font-semibold">
              {stat.value}
            </span>
            <span className="text-white/60 font-[family-name:var(--font-dm-sans)] text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
