"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { num: "+40", label: "Clientes activos", sub: "negocios creciendo" },
  { num: "3.8×", label: "Retorno promedio", sub: "por cada peso invertido" },
  { num: "14 días", label: "Tiempo al aire", sub: "de firma a campaña activa" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.92]);

  const [scrollVisible, setScrollVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-pg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay muted loop playsInline
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.div className="absolute inset-0 z-[1] bg-pg-black" style={{ opacity: overlayOpacity }} />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-[3] h-full flex flex-col justify-center px-8 md:px-16"
      >
        <div className="max-w-[1300px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-8"
            style={{ color: "#A6E22E" }}
          >
            Growth Partners · Ciudad de México
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-title text-pg-light leading-[0.95] mb-8"
            style={{
              fontSize: "var(--t-display)",
              fontWeight: 400,
              letterSpacing: "var(--ls-display)",
            }}
          >
            Convertimos tu
            <br />
            inversión en{" "}
            <em style={{ color: "#A6E22E", fontStyle: "italic" }}>clientes.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="font-body text-[11px] tracking-[0.16em] uppercase mb-10"
            style={{ color: "rgba(245,245,245,0.38)" }}
          >
            Paid Media · Producción Audiovisual · Mensajería · Ecosistema Digital
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="font-title font-bold text-pg-black px-8 py-3.5 text-[13px] tracking-wide transition-opacity duration-500 hover:opacity-80"
              style={{ background: "#A6E22E" }}
            >
              Quiero crecer
            </a>
            <a
              href="#paquetes"
              className="font-body text-pg-light border px-8 py-3.5 text-[13px] tracking-wide transition-colors duration-500 hover:border-white"
              style={{ borderColor: "rgba(255,255,255,0.28)" }}
            >
              Ver paquetes
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollVisible ? 0.35 : 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute bottom-28 right-10 flex flex-col items-center gap-3"
      >
        <span
          className="font-body text-[10px] tracking-[0.2em] uppercase text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 overflow-hidden relative" style={{ background: "rgba(255,255,255,0.15)" }}>
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ background: "#A6E22E" }}
            animate={{ height: ["0%", "100%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-[4]"
        style={{
          borderTop: "1px solid rgba(245,245,245,0.08)",
          background: "rgba(13,13,13,0.7)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex max-w-[1300px] mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex-1 px-6 md:px-10 py-5"
              style={{ borderRight: i < 2 ? "1px solid rgba(245,245,245,0.08)" : "none" }}
            >
              <p className="font-body text-[10px] uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(245,245,245,0.35)" }}>
                {s.label}
              </p>
              <p className="font-title font-bold text-[22px] md:text-[26px] leading-none" style={{ color: "#A6E22E" }}>
                {s.num}
              </p>
              <p className="font-body text-[11px] mt-1" style={{ color: "rgba(245,245,245,0.4)" }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
