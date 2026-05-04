"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
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
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-8 md:px-12 h-16 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-pg-lime flex-shrink-0">
              <rect x="2" y="18" width="5" height="8" fill="currentColor" />
              <rect x="9" y="12" width="5" height="14" fill="currentColor" />
              <rect x="16" y="6" width="5" height="20" fill="currentColor" />
              <rect x="23" y="2" width="3" height="24" fill="currentColor" opacity="0.5"/>
            </svg>
            <span className="font-title font-bold text-white text-sm tracking-widest uppercase leading-none">
              PG <span className="opacity-60 font-normal">Estrategias</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] tracking-[0.08em] transition-colors duration-200 group"
                style={{
                  color: activeSection === link.href.replace("#", "")
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.6)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px bg-white transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100"
                  style={{ width: "100%" }}
                />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden md:block text-[13px] text-white border border-white px-5 py-2.5 transition-all duration-200 hover:bg-white hover:text-pg-black font-body tracking-wide"
              style={{ borderRadius: "2px" }}
            >
              Agenda una llamada
            </a>
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <span className="w-6 h-px bg-white block" />
              <span className="w-4 h-px bg-white block" />
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "rgba(10,10,10,0.97)" }}
          >
            <div className="flex items-center justify-between px-8 h-16">
              <span className="font-title font-bold text-white text-sm tracking-widest uppercase">
                PG <span className="opacity-60 font-normal">Estrategias</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl leading-none"
                aria-label="Cerrar menú"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col justify-center flex-1 px-8 gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  className="font-title font-bold text-4xl text-white hover:text-pg-lime transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-block border border-pg-lime text-pg-lime px-6 py-3 font-title font-bold text-sm tracking-widest uppercase self-start"
                style={{ borderRadius: "2px" }}
              >
                Agenda una llamada
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
