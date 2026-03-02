"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="relative py-36 md:py-52 bg-[var(--color-bg-primary)] overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-accent)] font-[family-name:var(--font-dm-sans)] font-semibold text-sm tracking-[3px] uppercase">
            NUESTRO FUNDADOR
          </span>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Quote
              size={48}
              className="text-[var(--color-accent)] opacity-40 mb-6"
            />

            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-[1.05] mb-8">
              UNA VISIÓN QUE
              <br />
              <span className="text-[var(--color-accent)]">
                TRANSFORMÓ
              </span>{" "}
              LA INDUSTRIA
            </h2>

            <div className="space-y-5">
              <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-base md:text-lg leading-relaxed">
                Nuestro CEO siempre tuvo claro que el servicio de renta de
                vehículos en República Dominicana podía ser mucho mejor. Desde
                joven, observó cómo turistas y dominicanos enfrentaban procesos
                complicados, vehículos en mal estado y precios poco
                transparentes. Esa frustración se convirtió en su motivación.
              </p>

              <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-base md:text-lg leading-relaxed">
                Con una pasión inquebrantable por los automóviles y un
                compromiso firme con la excelencia, fundó{" "}
                <span className="text-[var(--color-accent)] font-semibold">
                  Calvovn Rent Cars
                </span>{" "}
                con una promesa simple: ofrecer vehículos premium, un trato
                humano y honesto, y hacer que cada cliente se sienta como si
                estuviera manejando su propio auto.
              </p>

              <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-base md:text-lg leading-relaxed">
                Hoy, Calvovn Rent Cars es sinónimo de confianza y calidad en el
                mercado dominicano, con una flota de vehículos de lujo y un
                equipo dedicado que refleja los valores de su fundador:
                integridad, innovación y servicio sin igual.
              </p>
            </div>

            {/* Signature-like element */}
            <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
              <p className="font-[family-name:var(--font-bebas-neue)] text-xl text-white tracking-wider">
                CEO
              </p>
              <p className="font-[family-name:var(--font-dm-sans)] text-[var(--color-text-muted)] text-sm mt-1">
                Fundador — Calvovn Rent Cars
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
