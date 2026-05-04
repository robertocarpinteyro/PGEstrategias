"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const servicios = [
  {
    num: "01",
    title: "Pauta Digital",
    desc: "Anuncios en Meta y Google diseñados para conseguir clientes nuevos, no solo clics. Optimizamos el costo de cada cliente que obtienes.",
  },
  {
    num: "02",
    title: "Producción Audiovisual",
    desc: "Videos y creatividades con un solo objetivo: que el espectador actúe. Cada pieza tiene un gancho, un beneficio claro y un llamado a la acción.",
  },
  {
    num: "03",
    title: "Mensajería Masiva",
    desc: "WhatsApp y email coordinados con tu pauta. Captamos prospectos y mantenemos la relación con quienes aún no se deciden a comprar.",
  },
  {
    num: "04",
    title: "Ecosistema Digital",
    desc: "Tu perfil de Google, WhatsApp Business, landing page y posicionamiento en buscadores trabajando como un solo sistema. La base que convierte.",
  },
];

const diferenciadores = [
  "Todo integrado — un solo equipo, un solo cargo mensual.",
  "Presencia en Google desde el primer mes, sin costo extra.",
  "Videos y anuncios hechos para vender, no para decorar redes.",
  "Solo trabajamos con quienes tienen algo claro que vender.",
  "Te explicamos todo en español, sin términos técnicos.",
];

export default function QuienesSomos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="py-36" style={{ background: "#0D0D0D" }}>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">

        {/* Bloque A — Manifiesto */}
        <div ref={ref} className="mb-28">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[11px] uppercase tracking-[0.15em] mb-8"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Quiénes somos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-title text-white leading-[1.25] mb-10"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 400 }}
          >
            No somos una agencia de marketing tradicional.
            <br />
            Somos{" "}
            <span className="italic" style={{ color: "#A6E22E" }}>
              growth partners.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-[18px] leading-[1.7] max-w-[640px]"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Trabajamos con negocios que ya saben cómo funciona lo que venden.
            Nuestra labor es construir el sistema digital que convierte esa claridad en clientes.
          </motion.p>
        </div>

        {/* Bloque B — 4 columnas */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {servicios.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 pr-8 pb-4 lg:pr-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p className="font-body text-[11px] mb-5 font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
                {s.num}
              </p>
              <h3 className="font-title font-bold text-white text-[16px] mb-3">
                {s.title}
              </h3>
              <p className="font-body text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bloque C — Diferenciadores */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {diferenciadores.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#A6E22E" }} />
                <p className="font-body text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {d}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
