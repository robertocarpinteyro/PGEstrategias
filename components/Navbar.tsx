"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactMenu } from "@/context/ContactMenuContext";

const MSG_NAVBAR = "Hola, me interesa saber más sobre los servicios de PG Estrategias. ¿Podemos hablar?";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { open: openContact } = useContactMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "#0D0D0D" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-8 md:px-16 h-16 max-w-[1300px] mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="text-pg-lime flex-shrink-0">
              <rect x="2" y="18" width="5" height="8" fill="currentColor" />
              <rect x="9" y="12" width="5" height="14" fill="currentColor" />
              <rect x="16" y="6" width="5" height="20" fill="currentColor" />
              <rect x="23" y="2" width="3" height="24" fill="currentColor" opacity="0.4" />
            </svg>
            <span className="font-title text-white text-[13px] tracking-[0.1em] uppercase leading-none" style={{ fontWeight: 700 }}>
              PG <span className="opacity-50 font-normal">Estrategias</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body text-[12px] tracking-[0.08em] transition-colors duration-500"
                style={{
                  color: activeSection === link.href.replace("#", "")
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.5)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px bg-white transition-transform duration-500 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ width: "100%" }}
                />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => openContact(MSG_NAVBAR)}
              className="hidden md:block font-body text-[12px] text-white border px-5 py-2.5 transition-all duration-500 hover:bg-white hover:text-pg-black tracking-wide"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Agenda una llamada
            </button>
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <span className="w-5 h-px bg-white block" />
              <span className="w-3.5 h-px bg-white block" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "rgba(13,13,13,0.98)" }}
          >
            <div className="flex items-center justify-between px-8 h-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="font-title text-white text-[13px] tracking-[0.1em] uppercase" style={{ fontWeight: 700 }}>
                PG <span className="opacity-50 font-normal">Estrategias</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="font-body text-[11px] tracking-[0.16em] uppercase text-white/50 hover:text-white transition-colors duration-500"
                aria-label="Cerrar menú"
              >
                cerrar ×
              </button>
            </div>
            <div className="flex flex-col justify-center flex-1 px-8 gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.5 }}
                  className="font-title text-white py-4 transition-colors duration-500 hover:text-pg-lime"
                  style={{
                    fontSize: "clamp(32px, 8vw, 52px)",
                    fontWeight: 400,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => { setMenuOpen(false); openContact(MSG_NAVBAR); }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38, duration: 0.5 }}
                className="mt-8 inline-block font-title font-bold text-pg-black text-[13px] tracking-wide px-6 py-3.5 self-start transition-opacity duration-500 hover:opacity-80"
                style={{ background: "#A6E22E" }}
              >
                Agenda una llamada
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
