"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import CarCard from "../ui/CarCard";
import { cars, categories, type Category } from "@/data/cars";

export default function CollectionSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filteredCars =
    activeCategory === "Todos"
      ? cars
      : cars.filter((car) => {
          if (activeCategory === "Sedán") return car.category === "Sedan";
          return car.category === activeCategory;
        });

  return (
    <section id="flota" className="py-36 md:py-52 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          title="NUESTRA FLOTA"
          description="Elige entre nuestra variedad de vehículos disponibles. Planes flexibles, precios justos y condiciones transparentes."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-[family-name:var(--font-dm-sans)] text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-[var(--color-accent)] text-black"
                  : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Cars Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </motion.div>

        {filteredCars.length === 0 && (
          <p className="text-center text-[var(--color-text-muted)] font-[family-name:var(--font-dm-sans)] mt-12">
            No hay vehículos disponibles en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
