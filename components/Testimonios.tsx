"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonios = [
  {
    id: 1,
    video: "/videos/testimonio-1.mp4",
    thumbnail: "/images/testimonio-1-thumb.jpg",
    quote: "En 45 días teníamos más prospectos de los que podíamos atender.",
    nombre: "Cliente 1",
    industria: "Industria · CDMX",
  },
  {
    id: 2,
    video: "/videos/testimonio-2.mp4",
    thumbnail: "/images/testimonio-2-thumb.jpg",
    quote: "Por primera vez siento que mi presupuesto de publicidad realmente funciona.",
    nombre: "Cliente 2",
    industria: "Industria · CDMX",
  },
];

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.96)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 font-body text-[11px] tracking-[0.16em] uppercase transition-colors duration-500"
          style={{ color: "rgba(255,255,255,0.4)" }}
          aria-label="Cerrar video"
        >
          Cerrar ×
        </button>
        <video
          src={src}
          autoPlay
          controls
          playsInline
          className="w-full"
          style={{ maxHeight: "80vh", objectFit: "contain" }}
        />
      </motion.div>
    </motion.div>
  );
}

function TestimonioCard({ t, index }: { t: typeof testimonios[0]; index: number }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col"
      >
        {/* Thumbnail — no card bg, sits directly on section bg */}
        <div
          className="relative cursor-pointer group overflow-hidden"
          style={{ aspectRatio: "9/16", maxHeight: "520px" }}
          onClick={() => setShowModal(true)}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${t.thumbnail})`, backgroundColor: "#1a1a1a" }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ background: "rgba(0,0,0,0.35)" }}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(0,0,0,0.12)" }} />

          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.08)" }}
              aria-label={`Reproducir testimonio de ${t.nombre}`}
            >
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M1 1.5L13 8L1 14.5V1.5Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="pt-5 pb-2" style={{ borderTop: "1px solid rgba(13,13,13,0.1)" }}>
          <p
            className="font-body text-[16px] leading-relaxed mb-3 italic"
            style={{ color: "rgba(13,13,13,0.8)" }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="font-body text-[12px] tracking-wide" style={{ color: "rgba(13,13,13,0.38)" }}>
            {t.nombre} · {t.industria}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && <VideoModal src={t.video} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function Testimonios() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section className="py-40" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[1300px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div ref={headRef} className="mb-20" style={{ borderTop: "1px solid rgba(13,13,13,0.12)" }}>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={headInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="font-body text-[11px] uppercase tracking-[var(--ls-label)] mb-6"
                style={{ color: "rgba(13,13,13,0.4)" }}
              >
                Lo que dicen nuestros clientes
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={headInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-title text-pg-black"
                style={{
                  fontSize: "var(--t-h2)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-h2)",
                  letterSpacing: "var(--ls-h2)",
                }}
              >
                Resultados reales,
                <br />
                en sus propias palabras.
              </motion.h2>
            </div>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pl-6"
              style={{ borderLeft: "2px solid #A6E22E" }}
            >
              <p className="font-body text-[17px] italic leading-relaxed" style={{ color: "rgba(13,13,13,0.7)" }}>
                &ldquo;El primer mes recuperamos lo invertido.
                El segundo, duplicamos clientes.&rdquo;
              </p>
              <p className="font-body text-[12px] mt-3" style={{ color: "rgba(13,13,13,0.38)" }}>
                — Cliente de Tracción · Servicios
              </p>
            </motion.div>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {testimonios.map((t, i) => (
            <TestimonioCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
