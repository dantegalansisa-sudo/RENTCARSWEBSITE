"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Button from "../ui/Button";

const metrics = [
  { value: "150+", label: "Vehículos" },
  { value: "10+", label: "Años exp." },
  { value: "4.9★", label: "Calificación" },
];

export default function AboutSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        id="nosotros"
        className="relative py-36 md:py-52 bg-[var(--color-bg-primary)]"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[var(--color-accent)] font-[family-name:var(--font-dm-sans)] font-semibold text-sm tracking-[3px] uppercase mb-5 block">
                SOBRE NOSOTROS
              </span>

              <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-[1.05]">
                Somos líderes en renta
                <br />
                de autos en{" "}
                <span className="text-[var(--color-accent)]">Calvovn.</span>
              </h2>

              <p className="mt-8 text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-base md:text-lg leading-relaxed max-w-lg">
                Ofrecemos la mejor experiencia de renta con autos modernos,
                precios transparentes y servicio 24/7. Con más de 10 años en el
                mercado dominicano, tu satisfacción es nuestra prioridad.
              </p>

              <div className="mt-10">
                <Button variant="outline" size="md" href="#flota">
                  Saber Más →
                </Button>
              </div>

              {/* Metrics */}
              <div className="mt-14 grid grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl text-[var(--color-accent)]">
                      {metric.value}
                    </p>
                    <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-sm mt-1">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Image with play button */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/porsche-gt3rs-white.jpg"
                  alt="Porsche GT3 RS blanco premium"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={() => setVideoOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-18 h-18 md:w-22 md:h-22 rounded-full bg-white/90 hover:bg-[var(--color-accent)] flex items-center justify-center shadow-2xl transition-colors duration-300 group cursor-pointer"
                  >
                    <Play
                      size={32}
                      className="text-black ml-1 group-hover:text-black"
                      fill="currentColor"
                    />
                  </motion.button>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border-2 border-[var(--color-accent)] rounded-2xl -z-10 hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>
              <iframe
                src="https://www.youtube.com/embed/JbPBHtLstGw?autoplay=1&rel=0"
                title="Video del vehículo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
