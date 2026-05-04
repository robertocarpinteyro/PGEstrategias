"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="7" cy="7" r="7" fill="#A6E22E" fillOpacity="0.2" />
    <path d="M4 7l2 2 4-4" stroke="#A6E22E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const planes = [
  {
    id: "ignicion",
    nombre: "IGNICIÓN",
    badge: "Para empezar con pie derecho",
    precio: "$11,000",
    publicidad: "Incluye $2,500 para publicidad",
    paraQuien: "Ideal si facturas entre $40,000 y $80,000 al mes, o si estás lanzando un negocio con producto o servicio ya definido y primeras ventas.",
    cta: "Empezar con Ignición",
    ctaStyle: "outline",
    destacado: false,
    items: [
      "Publicidad en Meta (Facebook/Instagram) o Google — $2,500 incluidos",
      "1 video de 1 minuto para tu página de ventas",
      "4 reels mensuales (1 para anuncios, 3 para redes sociales)",
      "3 diseños gráficos con texto persuasivo",
      "3 carruseles para redes sociales",
      "500 mensajes por WhatsApp o correo al mes",
      "Página de ventas (landing page) diseñada e incluida",
      "Configuración técnica completa (rastreo, audiencias, píxeles)",
      "Perfil de Google optimizado + estrategia de reseñas",
      "1 videollamada estratégica mensual",
      "1 sesión mensual de grabación de contenido",
      "Reporte mensual en lenguaje claro, sin términos técnicos",
    ],
  },
  {
    id: "traccion",
    nombre: "TRACCIÓN",
    badge: "El más elegido",
    precio: "$16,000",
    publicidad: "Incluye $4,000 para publicidad",
    paraQuien: "Ideal si facturas entre $80,000 y $300,000 al mes, con un negocio que ya funciona y quieres acelerar las ventas de forma consistente.",
    cta: "Empezar con Tracción",
    ctaStyle: "filled",
    destacado: true,
    items: [
      "Publicidad en Meta y/o Google — $4,000 incluidos",
      "1 video de 1 minuto para tu página de ventas",
      "7 reels mensuales (2 para anuncios, 5 para redes sociales)",
      "5 diseños gráficos con texto persuasivo",
      "5 carruseles para redes sociales",
      "1,000 mensajes por WhatsApp o correo al mes",
      "Página de ventas + CRM para organizar tus prospectos + hosting 6 meses",
      "Configuración técnica completa",
      "Perfil de Google optimizado + estrategia de reseñas",
      "Videollamada estratégica quincenal (puede ser presencial)",
      "Sesión de grabación de contenido incluida",
      "Consultoría de crecimiento mensual",
      "Reporte quincenal con análisis de qué anuncios funcionan mejor",
    ],
  },
  {
    id: "dominio",
    nombre: "DOMINIO",
    badge: "Operación completa",
    precio: "$27,000",
    publicidad: "Incluye $7,000 para publicidad",
    paraQuien: "Ideal si facturas más de $300,000 al mes y necesitas un equipo de marketing digital externo que opere todo sin contratar personal interno.",
    cta: "Hablemos de Dominio",
    ctaStyle: "outline",
    destacado: false,
    items: [
      "Publicidad en Meta y/o Google — $7,000 incluidos",
      "1 video de 1 minuto para página de ventas",
      "10 reels mensuales (4 para anuncios, 6 para redes sociales)",
      "2,000 mensajes por WhatsApp o correo al mes",
      "2 páginas de ventas + CRM + hosting permanente + dominio por 1 año",
      "Configuración técnica completa",
      "Perfil de Google optimizado + estrategia de reseñas",
      "Videollamada estratégica semanal",
      "Sesión de grabación de contenido incluida",
      "Consultoría de crecimiento quincenal",
      "Reporte semanal con tablero de métricas en vivo",
    ],
  },
];

function PlanCard({ plan, index }: { plan: typeof planes[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col"
      style={{
        background: "#111",
        border: plan.destacado ? "2px solid #A6E22E" : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "2px",
      }}
    >
      {/* Badge */}
      <div
        className="px-4 py-2.5"
        style={{
          background: plan.destacado ? "#A6E22E" : "#1A1A1A",
          borderBottom: plan.destacado ? "none" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span
          className="font-title font-bold text-[11px] tracking-[0.12em] uppercase"
          style={{ color: plan.destacado ? "#0D0D0D" : "rgba(255,255,255,0.5)" }}
        >
          {plan.badge}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Plan name */}
        <p className="font-title font-bold text-[13px] tracking-[0.2em] mb-4" style={{ color: "#A6E22E" }}>
          {plan.nombre}
        </p>

        {/* Price */}
        <div className="mb-2">
          <span className="font-title font-medium text-white text-[40px] leading-none">{plan.precio}</span>
          <span className="font-body text-[14px] ml-1" style={{ color: "rgba(255,255,255,0.5)" }}>/mes</span>
        </div>
        <p className="font-body text-[12px] mb-5" style={{ color: "#A6E22E" }}>
          {plan.publicidad}
        </p>

        {/* Para quién es */}
        <p
          className="font-body text-[13px] leading-relaxed py-4 mb-4"
          style={{
            color: "rgba(255,255,255,0.6)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {plan.paraQuien}
        </p>

        {/* Items */}
        <ul className="flex flex-col gap-2.5 mb-8 flex-1">
          {plan.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              {checkIcon}
              <span className="font-body text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.7)" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="w-full py-3.5 text-center font-title font-bold text-[13px] tracking-wide transition-all duration-200 block"
          style={{
            borderRadius: "2px",
            background: plan.ctaStyle === "filled" ? "#FFFFFF" : "transparent",
            border: plan.ctaStyle === "filled" ? "none" : "1px solid rgba(255,255,255,0.4)",
            color: plan.ctaStyle === "filled" ? "#0D0D0D" : "#FFFFFF",
          }}
          onMouseEnter={(e) => {
            if (plan.ctaStyle !== "filled") {
              (e.target as HTMLElement).style.background = "rgba(255,255,255,0.06)";
            } else {
              (e.target as HTMLElement).style.background = "#F0F0F0";
            }
          }}
          onMouseLeave={(e) => {
            if (plan.ctaStyle !== "filled") {
              (e.target as HTMLElement).style.background = "transparent";
            } else {
              (e.target as HTMLElement).style.background = "#FFFFFF";
            }
          }}
        >
          {plan.cta}
        </a>
      </div>
    </motion.div>
  );
}

export default function Paquetes() {
  const [comparOpen, setComparOpen] = useState(false);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="paquetes" className="py-36" style={{ background: "#0D0D0D" }}>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">

        {/* Header */}
        <div ref={headRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-body text-[11px] uppercase tracking-[0.15em] mb-4"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Planes de trabajo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-title font-bold text-white leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            Elige el nivel que corresponde
            <br />
            a dónde está tu negocio hoy.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-body text-[12px]"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Todos los precios en pesos mexicanos, sin IVA incluido. Compromiso mínimo de 3 meses.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {planes.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Comparativa colapsable */}
        <div className="mb-12">
          <button
            onClick={() => setComparOpen(!comparOpen)}
            className="font-body text-[13px] flex items-center gap-2 transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <motion.span animate={{ rotate: comparOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
              ↓
            </motion.span>
            {comparOpen ? "Ocultar comparativa" : "Ver comparativa completa"}
          </button>

          <AnimatePresence>
            {comparOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                        <th className="font-body text-[12px] pb-3 pr-8" style={{ color: "rgba(255,255,255,0.4)" }}>Característica</th>
                        {planes.map((p) => (
                          <th key={p.id} className="font-title font-bold text-[12px] pb-3 pr-6 tracking-wider" style={{ color: p.destacado ? "#A6E22E" : "rgba(255,255,255,0.7)" }}>
                            {p.nombre}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Presupuesto publicidad incluido", "$2,500", "$4,000", "$7,000"],
                        ["Reels mensuales", "4", "7", "10"],
                        ["Mensajes WhatsApp/email", "500", "1,000", "2,000"],
                        ["Videollamada estratégica", "Mensual", "Quincenal", "Semanal"],
                        ["Páginas de ventas", "1", "1 + CRM", "2 + CRM"],
                        ["Hosting incluido", "—", "6 meses", "Permanente"],
                        ["Dominio incluido", "—", "—", "1 año"],
                        ["Reporte de resultados", "Mensual", "Quincenal", "Semanal"],
                      ].map(([feat, ...vals], i) => (
                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                          <td className="py-3 pr-8 font-body text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>{feat}</td>
                          {vals.map((v, j) => (
                            <td key={j} className="py-3 pr-6 font-body text-[13px]" style={{ color: j === 1 ? "#A6E22E" : "rgba(255,255,255,0.7)" }}>{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nota final */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10"
          style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px" }}
        >
          <h3 className="font-title font-bold text-white text-[20px] mb-3">
            ¿No sabes cuál elegir?
          </h3>
          <p className="font-body text-[15px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            Agenda una llamada de 20 minutos sin costo. Te decimos honestamente cuál es el plan correcto
            para tu negocio — o si todavía no es el momento de arrancar con pauta pagada.
          </p>
          <a
            href="#contacto"
            className="font-title font-bold text-[13px] tracking-wide inline-flex items-center gap-2 hover:gap-4 transition-all"
            style={{ color: "#A6E22E" }}
          >
            Agendar llamada gratuita <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
