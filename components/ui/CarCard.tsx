"use client";

import { motion } from "framer-motion";
import { Star, Users, Fuel, Settings } from "lucide-react";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  index: number;
}

export default function CarCard({ car, index }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-[var(--color-bg-card)] rounded-xl overflow-hidden border border-[var(--color-border)] group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.name} ${car.year}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Availability Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-[family-name:var(--font-dm-sans)] font-semibold ${
            car.available
              ? "bg-green-500/90 text-white"
              : "bg-red-500/90 text-white"
          }`}
        >
          {car.available ? "Disponible" : "No Disponible"}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Rating */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-white text-base">
              {car.name} {car.year}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <Star
                size={14}
                className="text-[var(--color-accent)]"
                fill="currentColor"
              />
              <span className="text-white font-[family-name:var(--font-dm-sans)] text-sm font-medium">
                {car.rating}
              </span>
              <span className="text-[var(--color-text-muted)] font-[family-name:var(--font-dm-sans)] text-xs">
                ({car.reviews} reseñas)
              </span>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 py-3 border-t border-b border-[var(--color-border)]">
          <div className="flex items-center gap-1.5">
            <Users size={14} className="text-[var(--color-text-muted)]" />
            <span className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-xs">
              {car.seats}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings size={14} className="text-[var(--color-text-muted)]" />
            <span className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-xs">
              {car.transmission}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel size={14} className="text-[var(--color-text-muted)]" />
            <span className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-xs">
              {car.fuel}
            </span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-[var(--color-text-muted)] font-[family-name:var(--font-dm-sans)] text-xs">
              Desde
            </span>
            <p className="text-white font-[family-name:var(--font-dm-sans)] font-bold text-xl">
              ${car.pricePerDay}
              <span className="text-sm font-normal text-[var(--color-text-muted)]">
                /día
              </span>
            </p>
          </div>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-black hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            <span className="text-lg font-bold">→</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
