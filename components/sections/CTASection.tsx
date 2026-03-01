"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section id="contacto" className="relative py-36 md:py-52 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(/images/porsche-gt3rs-rear.jpg)",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      {/* Accent Overlay */}
      <div className="absolute inset-0 bg-[var(--color-accent)]/5" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl lg:text-7xl text-white tracking-wide">
            ¿LISTO PARA TU PRÓXIMA{" "}
            <span className="text-[var(--color-accent)]">AVENTURA?</span>
          </h2>

          <p className="mt-8 text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Reserva tu auto hoy y obtén un 10% de descuento en tu primera
            renta. Servicio disponible 24/7.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="https://wa.me/18098800802?text=Hola,%20me%20interesa%20rentar%20un%20auto"
            >
              Reservar Ahora
            </Button>
            <Button variant="outline" size="lg" href="tel:+18098800802">
              <Phone size={18} className="mr-2" />
              (809) 880-0802
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
