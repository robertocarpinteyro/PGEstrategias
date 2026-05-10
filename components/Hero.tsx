"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HERO_VIDEO =
  "https://res.cloudinary.com/dieszqcrn/video/upload/v1778401407/magnific_subtle-idle-animation-cha_2954420067_qmtsp2.mp4";

const stats = [
  { num: "10+", label: "Negocios activos", sub: "activamente creciendo" },
  { num: "3.8×", label: "Retorno promedio", sub: "por cada peso invertido" },
  { num: "14 días", label: "Tiempo al aire", sub: "de firma a campaña activa" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const [scrollVisible, setScrollVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-pg-black">

      {/* Video — pegado a la derecha */}
      <video
        className="absolute top-0 right-0 h-full object-cover z-[1]"
        style={{ width: "65%" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Degradado negro→transparente de izquierda a derecha */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to right, #0D0D0D 28%, rgba(13,13,13,0.92) 45%, rgba(13,13,13,0.4) 65%, transparent 100%)",
        }}
      />

      {/* Fade inferior para el stat strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2]"
        style={{
          height: "140px",
          background: "linear-gradient(to top, #0D0D0D 55%, transparent 100%)",
        }}
      />

      {/* Contenido — izquierda */}
      <motion.div
        style={{ y: textY }}
        className="relative z-[3] h-full flex flex-col justify-center px-8 md:px-16 pt-16 pb-28"
      >
        <div className="w-full max-w-[580px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-8"
            style={{ color: "#A6E22E" }}
          >
            Growth Partners · Ciudad de Puebla
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-title text-pg-light mb-8"
            style={{
              fontSize: "clamp(40px, 5vw, 80px)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
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
            El primer mes lanzamos campañas · el segundo optimizamos · el tercero triplicamos lo invertido
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
        className="absolute bottom-28 right-10 flex flex-col items-center gap-3 z-[3]"
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
          background: "#0D0D0D",
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
