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

  const difRef = useRef(null);
  const difInView = useInView(difRef, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="py-40" style={{ background: "#0D0D0D" }}>
      <div className="max-w-[1300px] mx-auto px-8 md:px-16">

        {/* Bloque A — Manifiesto */}
        <div
          ref={ref}
          className="mb-32 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[11px] uppercase tracking-[var(--ls-label)] mb-10"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Quiénes somos
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-title text-white leading-[1]"
              style={{
                fontSize: "var(--t-h2)",
                fontWeight: 400,
                letterSpacing: "var(--ls-h2)",
              }}
            >
              No somos una agencia.
              <br />
              Somos{" "}
              <em className="not-italic" style={{ color: "#A6E22E", fontStyle: "italic" }}>
                growth partners.
              </em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="font-body text-[17px] leading-[1.75] mb-8"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Trabajamos con negocios que ya saben cómo funciona lo que venden.
                Nuestra labor es construir el sistema digital que convierte esa claridad en clientes.
              </p>
              <a
                href="#contacto"
                className="font-body text-[13px] tracking-[0.1em] uppercase inline-flex items-center gap-3 transition-colors duration-500 hover:text-pg-lime"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Hablemos <span style={{ color: "#A6E22E" }}>→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bloque B — 4 columnas de servicios */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 + 0.1 }}
              className="pt-8 pb-8 pr-0 lg:pr-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p
                className="font-body text-[11px] mb-6 tabular-nums"
                style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}
              >
                {s.num}
              </p>
              <h3
                className="font-title text-white mb-4 leading-snug"
                style={{ fontSize: "var(--t-h3)", fontWeight: 700 }}
              >
                {s.title}
              </h3>
              <p className="font-body text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.48)" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bloque C — Diferenciadores */}
        <div
          ref={difRef}
          className="mt-24 pt-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={difInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[11px] uppercase tracking-[var(--ls-label)] mb-10"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Por qué PG
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0">
            {diferenciadores.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={difInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="flex-shrink-0 w-1 h-1 rounded-full mt-2.5"
                  style={{ background: "#A6E22E" }}
                />
                <p className="font-body text-[14px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
