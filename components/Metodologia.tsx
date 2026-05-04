"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pasos = [
  {
    num: "01",
    dias: "Días 1–2",
    title: "Entendemos tu negocio",
    desc: "Hacemos una llamada donde conocemos tu producto, tus precios, cómo funciona tu venta actualmente y a qué plataformas tienes acceso. Salimos con un plan de 90 días firmado y un brief de estrategia.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#A6E22E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9" />
        <path d="M8 9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 2-3 3-3 4" />
        <circle cx="11" cy="17" r="0.5" fill="#A6E22E" />
      </svg>
    ),
  },
  {
    num: "02",
    dias: "Días 3–5",
    title: "Preparamos todo el sistema",
    desc: "Conectamos tus cuentas de anuncios, Google, WhatsApp y herramientas. Instalamos el rastreo para que cada peso invertido en publicidad sea medible desde el primer día.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#A6E22E" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="16" height="16" rx="1" />
        <path d="M7 11l3 3 5-5" />
      </svg>
    ),
  },
  {
    num: "03",
    dias: "Días 6–8",
    title: "Diseñamos tu sistema de conversión",
    desc: "Definimos los ángulos creativos, los mensajes clave y las ofertas. Diseñamos la página de aterrizaje donde llegará tu tráfico, lista para convertir visitantes en prospectos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#A6E22E" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 17L8 12l4 4 7-8" />
      </svg>
    ),
  },
  {
    num: "04",
    dias: "Días 9–13",
    title: "Grabamos, editamos y armamos las campañas",
    desc: "Sesión de grabación de contenido, edición y aprobación final. Montamos la estructura de campañas y hacemos control de calidad de todo el sistema antes de encender.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#A6E22E" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="5" width="12" height="12" rx="1" />
        <path d="M14 9l6-3v10l-6-3" />
      </svg>
    ),
  },
  {
    num: "05",
    dias: "Día 14",
    title: "El motor arranca",
    desc: "Campañas activas, landing page conectada y primer reporte agendado a los 7 días. A partir de aquí, optimizamos semana a semana.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#A6E22E" strokeWidth="1.5" strokeLinecap="round">
        <path d="M5 12l5 5L19 7" />
      </svg>
    ),
  },
];

export default function Metodologia() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="metodologia" ref={sectionRef} className="py-36" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[1100px] mx-auto px-8 md:px-12">

        {/* Header */}
        <div ref={headRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-body text-[11px] uppercase tracking-[0.15em] mb-4 text-gray-400"
          >
            Nuestra metodología
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-title font-bold text-pg-black leading-[1.1] mb-6"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Del primer clic al cliente recurrente.
            <br />
            En 14 días al aire.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-[17px] max-w-[560px] leading-relaxed"
            style={{ color: "#666" }}
          >
            Un proceso de 5 pasos diseñado para que no tengas que coordinar nada.
            Nosotros lo operamos todo.
          </motion.p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          {/* Connecting line */}
          <div className="relative mb-12 h-px mx-6" style={{ background: "rgba(0,0,0,0.1)" }}>
            <div
              ref={lineRef}
              className="absolute inset-0 origin-left"
              style={{ background: "#A6E22E", transformOrigin: "left center", transform: "scaleX(0)" }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-5 gap-6">
            {pasos.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full border border-pg-black/20 flex items-center justify-center flex-shrink-0"
                    style={{ background: i === 4 ? "#A6E22E" : "transparent" }}
                  >
                    <span className="font-body text-[10px] font-mono" style={{ color: i === 4 ? "#0D0D0D" : "#888" }}>
                      {p.num}
                    </span>
                  </div>
                  <span className="font-body text-[10px] tracking-widest uppercase" style={{ color: "#A6E22E" }}>
                    {p.dias}
                  </span>
                </div>
                <div className="mb-3">{p.icon}</div>
                <h3 className="font-title font-bold text-pg-black text-[14px] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-[12px] leading-relaxed" style={{ color: "#666" }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="md:hidden flex flex-col gap-0">
          {pasos.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex gap-5 pb-10 relative"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full border border-pg-black/20 flex items-center justify-center flex-shrink-0"
                  style={{ background: i === 4 ? "#A6E22E" : "white" }}
                >
                  <span className="font-body text-[10px] font-mono" style={{ color: i === 4 ? "#0D0D0D" : "#888" }}>
                    {p.num}
                  </span>
                </div>
                {i < pasos.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "rgba(0,0,0,0.1)" }} />
                )}
              </div>
              <div className="pt-0.5 pb-4">
                <span className="font-body text-[10px] tracking-widest uppercase mb-2 block" style={{ color: "#A6E22E" }}>
                  {p.dias}
                </span>
                <h3 className="font-title font-bold text-pg-black text-[16px] mb-2">{p.title}</h3>
                <p className="font-body text-[13px] leading-relaxed" style={{ color: "#666" }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="#contacto"
            className="font-title font-bold text-pg-black text-[14px] tracking-wide inline-flex items-center gap-2 hover:gap-4 transition-all"
            style={{ color: "#0D0D0D" }}
          >
            Empieza en 14 días
            <span style={{ color: "#A6E22E" }}>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
