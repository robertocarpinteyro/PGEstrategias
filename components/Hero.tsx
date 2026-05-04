"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const stats = [
  { num: "+40", label: "negocios creciendo", sub: "Clientes activos" },
  { num: "3.8x", label: "por cada peso invertido en publicidad", sub: "Retorno promedio" },
  { num: "14 días", label: "de firma a campaña activa", sub: "Tiempo al aire" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const [scrollVisible, setScrollVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0 bg-pg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient if no video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#111] to-[#1a1a0a]" />
      </div>

      {/* Dynamic overlay */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(13,13,13,1)", opacity: overlayOpacity }}
      />

      {/* Decorative bars pattern */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <svg className="absolute right-0 top-0 h-full opacity-[0.04]" viewBox="0 0 400 800" preserveAspectRatio="xMaxYMid slice">
          <rect x="320" y="120" width="18" height="400" fill="#A6E22E" />
          <rect x="350" y="80" width="12" height="500" fill="#A6E22E" />
          <rect x="374" y="160" width="8" height="300" fill="#A6E22E" />
          <rect x="390" y="200" width="5" height="220" fill="#A6E22E" opacity="0.5"/>
        </svg>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-[3] h-full flex flex-col justify-center px-8 md:px-[8%] lg:px-[12%]"
      >
        <div className="max-w-4xl">
          <motion.p
            {...fadeUp(0.2)}
            className="font-body text-[11px] tracking-[0.2em] uppercase mb-6"
            style={{ color: "#A6E22E" }}
          >
            Growth Partners · Ciudad de México
          </motion.p>

          <motion.h1
            {...fadeUp(0.4)}
            className="font-title font-extrabold text-pg-light leading-[1.05] mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            Convertimos tu inversión
            <br />
            publicitaria en clientes.
          </motion.h1>

          <motion.p
            {...fadeUp(0.6)}
            className="font-body text-[13px] tracking-[0.14em] uppercase mb-10"
            style={{ color: "rgba(245,245,245,0.55)" }}
          >
            Paid Media · Producción Audiovisual · Mensajería · Ecosistema Digital
          </motion.p>

          <motion.div
            {...fadeUp(0.8)}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="font-title font-bold text-pg-black px-8 py-[14px] text-[14px] tracking-wide transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ background: "#A6E22E", borderRadius: "2px" }}
            >
              Quiero crecer
            </a>
            <a
              href="#paquetes"
              className="font-body text-pg-light border border-pg-light px-8 py-[14px] text-[14px] tracking-wide transition-all duration-200 hover:bg-white/8"
              style={{ borderRadius: "2px" }}
            >
              Ver paquetes
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollVisible ? 0.4 : 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="absolute bottom-24 right-8 md:right-12 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white rotate-90 mb-4">Scroll</span>
          <div className="w-px h-12 bg-white/40 overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-pg-lime"
              animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-0 left-0 right-0 z-[4]"
        style={{
          background: "rgba(13,13,13,0.5)",
          borderTop: "1px solid rgba(245,245,245,0.12)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="flex max-w-[1400px] mx-auto" style={{ borderColor: "rgba(245,245,245,0.12)" }}>
          {stats.map((s, i) => (
            <div key={i} className="flex-1 px-6 md:px-10 py-5" style={{ borderRight: i < 2 ? "1px solid rgba(245,245,245,0.12)" : "none" }}>
              <p className="font-body text-[10px] uppercase tracking-[0.12em] mb-1" style={{ color: "rgba(245,245,245,0.45)" }}>
                {s.sub}
              </p>
              <p className="font-title font-bold text-[26px] md:text-[28px] leading-none" style={{ color: "#A6E22E" }}>
                {s.num}
              </p>
              <p className="font-body text-[11px] mt-1 leading-tight" style={{ color: "rgba(245,245,245,0.5)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
