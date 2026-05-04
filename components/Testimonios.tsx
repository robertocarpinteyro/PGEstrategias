"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.96 }}
        className="relative w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm tracking-widest uppercase font-body"
          aria-label="Cerrar video"
        >
          × Cerrar
        </button>
        <video
          src={src}
          autoPlay
          controls
          playsInline
          className="w-full rounded-sm"
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
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
        style={{ background: "#0D0D0D", borderRadius: "2px" }}
      >
        {/* Thumbnail */}
        <div
          className="relative cursor-pointer group overflow-hidden"
          style={{ aspectRatio: "9/16", maxHeight: "480px" }}
          onClick={() => setShowModal(true)}
        >
          {/* Placeholder thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${t.thumbnail})` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.1)" }}
              aria-label={`Reproducir testimonio de ${t.nombre}`}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 2.5L15.5 9L4 15.5V2.5Z" fill="white" />
              </svg>
            </motion.div>
          </div>

          {/* Placeholder label */}
          <div className="absolute bottom-4 left-4 right-4">
            <span className="font-body text-[10px] tracking-[0.15em] uppercase text-white/40">
              [ Video testimonio — reemplazar con archivo real ]
            </span>
          </div>
        </div>

        {/* Quote */}
        <div className="p-6">
          <p className="font-body text-[15px] text-white/85 leading-relaxed mb-3 italic">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="font-body text-[12px] tracking-wide" style={{ color: "rgba(245,245,245,0.4)" }}>
            {t.nombre} · {t.industria}
          </p>
        </div>
      </motion.div>

      {showModal && (
        <VideoModal src={t.video} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default function Testimonios() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section className="py-32" style={{ background: "#F8F8F6" }}>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        {/* Header */}
        <div ref={headRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[11px] uppercase tracking-[0.15em] mb-4"
            style={{ color: "#888" }}
          >
            Lo que dicen nuestros clientes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-title font-bold text-pg-black leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Resultados reales,
            <br />
            en palabras de quien los vivió.
          </motion.h2>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonios.map((t, i) => (
            <TestimonioCard key={t.id} t={t} index={i} />
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pl-8 max-w-2xl"
          style={{ borderLeft: "3px solid #A6E22E" }}
        >
          <p className="font-body text-[22px] italic leading-relaxed text-pg-black" style={{ opacity: 0.85 }}>
            &ldquo;El primer mes recuperamos lo invertido. El segundo, duplicamos clientes.&rdquo;
          </p>
          <p className="font-body text-[13px] mt-4" style={{ color: "#888" }}>
            — Cliente de Tracción · Industria de servicios
          </p>
        </motion.div>
      </div>
    </section>
  );
}
