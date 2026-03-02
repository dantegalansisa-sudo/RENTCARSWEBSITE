"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Flota", href: "#flota" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Renta Diaria",
  "Renta Semanal",
  "Renta Mensual",
  "Traslado Aeropuerto",
  "Bodas & Eventos",
];

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-[var(--color-border)]"
        >
          {/* Brand Column */}
          <div>
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-wider text-white mb-5">
              Calvovn{" "}
              <span className="text-[var(--color-accent)]">Rent Cars</span>
            </h3>
            <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed mb-6">
              Tu compañero de viaje en República Dominicana. Autos modernos,
              precios justos y servicio excepcional.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] font-[family-name:var(--font-dm-sans)] text-sm transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-white text-sm uppercase tracking-wider mb-5">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] font-[family-name:var(--font-dm-sans)] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-white text-sm uppercase tracking-wider mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-white text-sm uppercase tracking-wider mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[var(--color-accent)] mt-0.5 shrink-0"
                />
                <span className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-sm">
                  Santo Domingo, República Dominicana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[var(--color-accent)] shrink-0"
                />
                <a
                  href="tel:+18298553429"
                  className="text-[var(--color-text-secondary)] hover:text-white font-[family-name:var(--font-dm-sans)] text-sm transition-colors"
                >
                  (829) 855-3429
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[var(--color-accent)] shrink-0"
                />
                <a
                  href="mailto:info@calvovnrentcars.com"
                  className="text-[var(--color-text-secondary)] hover:text-white font-[family-name:var(--font-dm-sans)] text-sm transition-colors"
                >
                  info@calvovnrentcars.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  size={16}
                  className="text-[var(--color-accent)] shrink-0"
                />
                <span className="text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-sm">
                  24/7 Disponible
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-muted)] font-[family-name:var(--font-dm-sans)] text-xs">
            © 2025 Calvovn Rent Cars. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-xs transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] font-[family-name:var(--font-dm-sans)] text-xs transition-colors"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
