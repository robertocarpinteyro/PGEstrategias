"use client";

import { motion } from "framer-motion";

const navLinks = ["Servicios", "Metodología", "Paquetes", "FAQ", "Agendar llamada"];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="14" height="14" rx="3" />
      <circle cx="9" cy="9" r="3" />
      <circle cx="13" cy="5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="14" height="14" rx="2" />
      <path d="M6 8v5M6 6v.01M9 13v-2.5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5V13" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Col 1: Identidad */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" style={{ color: "#A6E22E" }}>
                <rect x="2" y="18" width="5" height="8" fill="currentColor" />
                <rect x="9" y="12" width="5" height="14" fill="currentColor" />
                <rect x="16" y="6" width="5" height="20" fill="currentColor" />
                <rect x="23" y="2" width="3" height="24" fill="currentColor" opacity="0.5"/>
              </svg>
              <span className="font-title font-bold text-white text-sm tracking-widest uppercase">
                PG <span className="opacity-60 font-normal">Estrategias</span>
              </span>
            </div>
            <p className="font-body text-[13px] leading-relaxed max-w-[240px] mb-4" style={{ color: "rgba(245,245,245,0.45)" }}>
              Growth Partners para negocios que ya saben cómo vender.
            </p>
            <p className="font-body text-[11px]" style={{ color: "rgba(245,245,245,0.25)" }}>
              © 2026 PG Estrategias
            </p>
          </div>

          {/* Col 2: Navegación */}
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.1em] mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Navegación
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[̀-ͯ]/g, "")}`}
                  className="font-body text-[14px] transition-colors duration-200 hover:text-pg-light w-fit"
                  style={{ color: "rgba(245,245,245,0.6)" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.1em] mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Contacto
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a
                href="mailto:contacto@pgestrategias.com"
                className="font-body text-[14px] hover:text-white transition-colors"
                style={{ color: "rgba(245,245,245,0.6)" }}
              >
                [ Email de contacto ]
              </a>
              <a
                href="https://wa.me/521XXXXXXXXXX"
                className="font-body text-[14px] hover:text-white transition-colors"
                style={{ color: "rgba(245,245,245,0.6)" }}
              >
                [ WhatsApp ]
              </a>
            </div>

            <p className="font-body text-[11px] uppercase tracking-[0.1em] mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
              Oficina
            </p>
            <p className="font-body text-[13px] leading-relaxed mb-6" style={{ color: "rgba(245,245,245,0.5)" }}>
              Calle Valencia 131-2, Las Palmas
              <br />
              Ciudad de México, México
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="transition-colors hover:text-pg-lime"
                style={{ color: "rgba(255,255,255,0.45)" }}
                aria-label="Instagram de PG Estrategias"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-pg-lime"
                style={{ color: "rgba(255,255,255,0.45)" }}
                aria-label="LinkedIn de PG Estrategias"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="font-body text-[11px]" style={{ color: "rgba(245,245,245,0.2)" }}>
            PG Estrategias · Growth Partners · CDMX · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
