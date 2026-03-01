"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    number: "01",
    title: "Flota Premium",
    description:
      "Vehículos del año, múltiples categorías para cada necesidad. SUVs, sedanes, deportivos y más.",
  },
  {
    number: "02",
    title: "Servicio Personalizado",
    description:
      "Te ayudamos a elegir el auto perfecto para tu viaje. Asesoría completa y soporte 24/7.",
  },
  {
    number: "03",
    title: "Transacción Rápida",
    description:
      "Proceso en menos de 24 horas, con seguro incluido. Sin cargos ocultos ni sorpresas.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="servicios"
      className="py-36 md:py-52 bg-[var(--color-white-section)]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionTitle
          title="TENEMOS LAS MEJORES CARACTERÍSTICAS"
          description="Pensados para tu comodidad y seguridad. Los mejores servicios del mercado dominicano."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-b-2 border-transparent hover:border-[var(--color-accent)] transition-all duration-300 group"
            >
              <span className="font-[family-name:var(--font-bebas-neue)] text-6xl text-neutral-200 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                {feature.number}
              </span>

              <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-xl text-neutral-900 mt-5 mb-4">
                {feature.title}
              </h3>

              <p className="font-[family-name:var(--font-dm-sans)] text-neutral-500 text-sm leading-relaxed mb-8">
                {feature.description}
              </p>

              <a
                href="#flota"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-black text-white font-[family-name:var(--font-dm-sans)] text-sm font-medium hover:bg-neutral-800 transition-colors duration-300"
              >
                Saber Más
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
