"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const LIME = "#A6E22E";
const LIME_DIM = "rgba(166,226,46,0.08)";
const LIME_MID = "rgba(166,226,46,0.14)";
const BORDER = "rgba(255,255,255,0.08)";
const TEXT_DIM = "rgba(245,245,245,0.55)";
const TEXT_MUTED = "rgba(245,245,245,0.38)";

function Divider() {
  return (
    <div
      className="max-w-[1300px] mx-auto h-px"
      style={{
        background:
          "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
      }}
    />
  );
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p
      className={`font-body text-[11px] tracking-[0.14em] uppercase mb-6 flex items-center gap-3 ${center ? "justify-center" : ""}`}
      style={{ color: LIME }}
    >
      <span className="inline-block w-8 h-px" style={{ background: LIME }} />
      {children}
    </p>
  );
}

const marketStats = [
  {
    icon: "🚗",
    title: "Mercado en expansión",
    desc: "México es el 4.° mercado automotriz más grande de América Latina. El segmento seminuevo crece año con año — y Puebla está en el centro de ese crecimiento.",
  },
  {
    icon: "📱",
    title: "El comprador decide en línea",
    desc: "Más del 78% de los compradores de auto investiga en internet antes de pisar una agencia. Si Zenith Motors no aparece en esa búsqueda, no existe para ese comprador.",
  },
  {
    icon: "🎯",
    title: "Tienes 1.7 segundos",
    desc: "El tiempo de atención promedio en redes sociales es de 1.7 segundos. Sin video con un gancho en los primeros 3 segundos, tu anuncio es invisible.",
  },
  {
    icon: "💸",
    title: "El costo de no anunciarse",
    desc: "Con un ticket promedio de $200K–$400K MXN por unidad, cada venta justifica la inversión completa. Cada cliente que no llega es una comisión perdida.",
  },
  {
    icon: "📊",
    title: "Video = 3× más conversiones",
    desc: "Los anuncios con video profesional generan hasta 3 veces más conversiones que los estáticos en Meta y Google. Benchmarking de industria, no teoría.",
  },
];

const fasesA = [
  {
    num: "01",
    title: "Investigación de mercado y estrategia digital",
    items: [
      "Estudio de mercado cuantitativo vía Watti (WhatsApp masivo): datos reales de tu comprador.",
      "Diseño del instrumento de medición optimizado para el sector automotriz seminuevo.",
      "Tabulación, análisis estadístico y reporte ejecutivo de insights con gráficos.",
      "Definición de Buyer Personas basada en datos reales, no en intuición.",
      "Plan estratégico de embudo completo: Top, Middle y Bottom of Funnel.",
      "Copywriting publicitario persuasivo adaptado por canal y plataforma.",
      "Ganchos de los primeros 3 segundos y CTAs construidos desde la data.",
    ],
  },
  {
    num: "02",
    title: "Preproducción cinematográfica",
    items: [
      "Scouting de locaciones que refuerzan la identidad de Zenith Motors.",
      "Guión profesional construido sobre los insights del estudio de mercado.",
      "Storyboard / Animatic: cero improvisación en set. Cada escena planificada.",
      "Casting de talentos que conecten con tu público objetivo definido.",
      "Revisión logística completa: permisos, transporte, tiempos.",
      "Equipo gama cine: cámaras, ópticas e iluminación cinematográfica.",
    ],
  },
  {
    num: "03",
    title: "Día de rodaje",
    items: [
      "Día completo de rodaje en las locaciones seleccionadas.",
      "2 operadores de cámara: cobertura simultánea, ángulos dinámicos.",
      "1 operador de drone: tomas aéreas que elevan la percepción de marca.",
      "1 director creativo en set: visión integral que hace coherente cada plano.",
      "Catering para el equipo: porque el rendimiento depende de los detalles.",
    ],
  },
  {
    num: "04",
    title: "Postproducción",
    items: [
      "Color grading cinematográfico: identidad visual que eleva la percepción de Zenith Motors.",
      "Edición narrativa: ritmo, musicalización y ensamble que mantienen la atención.",
      "VFX y composición digital: limpieza visual que separa tu spot de la competencia.",
      "Integración de IA como herramienta complementaria sin comprometer la autenticidad.",
    ],
  },
  {
    num: "05",
    title: "Distribución: paid media en 4 plataformas",
    items: [
      "Meta Ads (Facebook & Instagram): Reels y Stories para leads y reconocimiento de marca.",
      "Google Ads (Search & Performance Max): captura de demanda activa de compradores.",
      "TikTok Ads: distribución nativa vía Spark Ads o In-Feed para audiencias jóvenes.",
      "YouTube Ads: cineminuto In-stream frente a audiencias In-Market de vehículos.",
      "1 mes de gestión y optimización continua con pruebas A/B.",
      "Reporte de rendimiento: CPA, CTR, ROAS y visualizaciones completadas.",
    ],
  },
  {
    num: "06",
    title: "Presencia física: OOH / espectaculares",
    items: [
      "5 artes estáticos en alta resolución para espectaculares tradicionales.",
      "5 motion graphics animados (loops de 5–8 s) para pantallas LED en vía pública.",
    ],
  },
];

const entregablesA = [
  { item: "Cineminuto", desc: "Video horizontal, calidad cinematográfica, hasta 1:30 min.", qty: "1" },
  { item: "Reels 30 s", desc: "Highlights del cineminuto adaptados a formato corto.", qty: "4" },
  { item: "Reels alternativos", desc: "Hasta 60 s, uno por pilar de comunicación de la marca.", qty: "4" },
  { item: "Fotografías de campaña", desc: "Selección con corrección de color profesional.", qty: "50" },
  { item: "Reporte de mercado", desc: "Dashboard Watti + estrategia de implementación.", qty: "2 docs" },
  { item: "Campañas Paid Media", desc: "Pautas activas en Meta, Google, TikTok y YouTube.", qty: "1 ecosistema" },
  { item: "Artes OOH estáticos", desc: "Archivos en alta resolución para impresión.", qty: "5" },
  { item: "Artes OOH animados", desc: "Motion graphics MP4/MOV para pantallas LED.", qty: "5" },
];

const fasesBItems = [
  "Estudio de mercado cuantitativo vía Watti: encuesta masiva por WhatsApp.",
  "Tabulación, análisis y reporte ejecutivo de insights del mercado.",
  "Definición de Buyer Personas basada en datos reales.",
  "Plan estratégico de embudo completo: Top, Middle y Bottom of Funnel.",
  "Concepto creativo y guión con la misma profundidad estratégica que el live action.",
  "Generación de material visual con herramientas de IA generativa de última generación.",
  "Color grading, edición, musicalización y VFX profesionales sobre el material generado.",
  "Meta Ads, Google Ads, TikTok Ads y YouTube Ads configurados y activos.",
  "1 mes de gestión, pruebas A/B y optimización continua.",
  "5 artes OOH estáticos + 5 motion graphics animados para pantallas LED.",
];

const comparativa = [
  { elemento: "Producción de video", a: "Live action cinematográfico", b: "IA generativa + edición prof." },
  { elemento: "Equipo en set", a: "Director + 2 cámaras + drone", b: "No aplica" },
  { elemento: "Tiempo de entrega", a: "Mayor (logística de rodaje)", b: "Más ágil" },
  { elemento: "Estrategia digital", a: "Incluida completa", b: "Incluida completa" },
  { elemento: "Paid Media (4 plataformas)", a: "Incluido", b: "Incluido" },
  { elemento: "OOH / Espectaculares", a: "10 piezas (5 estáticos + 5 animados)", b: "10 piezas (5 estáticos + 5 animados)" },
  { elemento: "Impacto aspiracional", a: "Máximo — real, tangible", b: "Alto — moderno, eficiente" },
  { elemento: "Inversión", a: "$49,000 MXN", b: "$30,000 MXN" },
];

const roiRows = [
  { label: "Ticket promedio por unidad vendida", value: "$200,000 – $400,000 MXN" },
  { label: "Comisión promedio de la agencia (10–15 %)", value: "$20,000 – $60,000 MXN por unidad" },
  { label: "Inversión Opción A (una sola vez)", value: "$49,000 MXN" },
  { label: "Unidades necesarias para recuperar la inversión", value: "1 a 3 unidades adicionales" },
];

export default function ZenithInversionClient() {
  return (
    <>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(13,13,13,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-16 h-16 max-w-[1300px] mx-auto">
          <a href="/" className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" style={{ color: LIME }}>
              <rect x="2" y="18" width="5" height="8" fill="currentColor" />
              <rect x="9" y="12" width="5" height="14" fill="currentColor" />
              <rect x="16" y="6" width="5" height="20" fill="currentColor" />
              <rect x="23" y="2" width="3" height="24" fill="currentColor" opacity="0.4" />
            </svg>
            <span
              className="font-title text-white text-[13px] tracking-[0.1em] uppercase"
              style={{ fontWeight: 700 }}
            >
              PG <span className="opacity-50 font-normal">Estrategias</span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <span
              className="hidden md:block font-body text-[11px] tracking-[0.14em] uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Zenith Motors
            </span>
            <span
              className="font-body text-[10px] tracking-[0.14em] uppercase px-3 py-1.5"
              style={{ color: LIME, background: LIME_DIM, fontWeight: 600 }}
            >
              ✦ Inversión Publicitaria
            </span>
          </div>
        </div>
      </nav>

      <main className="bg-pg-black text-pg-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 md:px-16 pt-32 pb-24 md:pt-40 md:pb-32">
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-30%", right: "-15%",
              width: 700, height: 700,
              background: "radial-gradient(circle, rgba(166,226,46,0.10) 0%, transparent 65%)",
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "-20%", left: "-10%",
              width: 500, height: 500,
              background: "radial-gradient(circle, rgba(110,184,212,0.04) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1300px] mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-[11px] tracking-[0.15em] uppercase mb-8 flex items-center gap-2"
              style={{ color: LIME }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: LIME, animation: "pulse 2s ease-in-out infinite" }}
              />
              Propuesta de Inversión Publicitaria · Puebla, 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-title text-pg-light mb-8 max-w-[900px]"
              style={{
                fontSize: "clamp(40px, 7vw, 100px)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              No estás comprando
              <br />
              publicidad.
              <br />
              <em style={{ color: LIME, fontStyle: "italic" }}>Estás comprando resultados.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-[16px] leading-[1.7] max-w-[600px] mb-14"
              style={{ color: TEXT_DIM }}
            >
              Hay docenas de agencias de seminuevos en Puebla. Todas tienen inventario, precios y el mismo discurso.{" "}
              <span className="text-white font-medium">La diferencia entre la que vende 40 unidades al mes y la que vende 8</span>{" "}
              no está en el inventario. Está en quién controla la narrativa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block"
            >
              <p
                className="font-title italic"
                style={{ color: LIME, fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 400 }}
              >
                &ldquo;La que vende 40 controla la narrativa.
                <br />
                La que vende 8 espera que el cliente la encuentre.&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* DATOS DEL MERCADO */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <SectionLabel>La oportunidad — datos que no mienten</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-title text-pg-light mb-4"
            style={{
              fontSize: "clamp(28px, 4.5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            El terreno en el que
            <br />
            <em style={{ color: LIME, fontStyle: "italic" }}>vas a jugar.</em>
          </motion.h2>
          <p
            className="font-body text-[15px] leading-[1.7] max-w-[560px] mb-14"
            style={{ color: TEXT_DIM }}
          >
            Antes de mostrar los números de la propuesta, estos son los datos del mercado. No te pido que los creas a ciegas — por eso la Opción A incluye un estudio de mercado real, con datos de tu propio público, antes de gastar un peso en pauta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {marketStats.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative p-8 transition-colors duration-500 hover:bg-white/[0.03]"
                style={{ border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.015)" }}
              >
                <span
                  className="absolute top-0 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full"
                  style={{ background: LIME }}
                />
                <p className="text-2xl mb-4">{s.icon}</p>
                <h3
                  className="font-title text-white mb-3"
                  style={{ fontSize: "17px", fontWeight: 400, letterSpacing: "-0.01em" }}
                >
                  {s.title}
                </h3>
                <p className="font-body text-[13px] leading-[1.65]" style={{ color: TEXT_DIM }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* OPCIÓN A */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <SectionLabel>Opción A</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-start mb-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="font-title text-pg-light mb-6"
                style={{
                  fontSize: "clamp(28px, 4.5vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Producción live action
                <br />
                <em style={{ color: LIME, fontStyle: "italic" }}>+ estrategia integral.</em>
              </motion.h2>
              <p
                className="font-body text-[15px] leading-[1.7] max-w-[580px]"
                style={{ color: TEXT_DIM }}
              >
                El sistema completo que convierte a Zenith Motors en la agencia que Puebla recuerda, busca y elige. Investigación real, producción cinematográfica, paid media en 4 plataformas y presencia física en calle.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 flex flex-col gap-3"
              style={{ border: `1px solid ${LIME}`, background: LIME_DIM }}
            >
              <p
                className="font-body text-[11px] uppercase tracking-[0.14em]"
                style={{ color: LIME }}
              >
                Inversión total
              </p>
              <p
                className="font-title leading-none"
                style={{ color: LIME, fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 400 }}
              >
                $49,000
              </p>
              <p className="font-body text-[12px]" style={{ color: TEXT_MUTED }}>
                MXN · pago único
              </p>
              <p
                className="font-body text-[12px] leading-[1.6] pt-3"
                style={{ color: TEXT_DIM, borderTop: `1px solid rgba(166,226,46,0.2)` }}
              >
                IVA según régimen fiscal del cliente
              </p>
            </motion.div>
          </div>

          {/* Fases Opción A */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {fasesA.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.07 }}
                className="p-8"
                style={{ border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.015)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-title italic leading-none"
                    style={{ color: LIME, fontSize: "28px", fontWeight: 400 }}
                  >
                    {f.num}
                  </span>
                </div>
                <h3
                  className="font-title text-white mb-5"
                  style={{ fontSize: "clamp(15px, 1.4vw, 18px)", fontWeight: 400, letterSpacing: "-0.01em" }}
                >
                  {f.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {f.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-[13px] leading-[1.55]"
                      style={{ color: TEXT_DIM }}
                    >
                      <span className="mt-[3px] shrink-0" style={{ color: LIME }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ENTREGABLES OPCIÓN A */}
        <section className="px-6 md:px-16 py-24 md:py-28 max-w-[1300px] mx-auto">
          <SectionLabel>Entregables — Opción A</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-title text-pg-light mb-14"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Lo que recibes,
            <br />
            <em style={{ color: LIME, fontStyle: "italic" }}>en concreto.</em>
          </motion.h2>

          <div style={{ border: `1px solid ${BORDER}` }}>
            {/* Header */}
            <div
              className="hidden md:grid grid-cols-[1fr_2fr_80px] px-8 py-4"
              style={{ borderBottom: `1px solid ${BORDER}`, background: "rgba(166,226,46,0.05)" }}
            >
              {["Entregable", "Descripción", "Cant."].map((h) => (
                <span
                  key={h}
                  className="font-body text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: LIME }}
                >
                  {h}
                </span>
              ))}
            </div>
            {entregablesA.map((row, i) => (
              <motion.div
                key={row.item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr_80px] items-center gap-2 md:gap-6 px-8 py-5"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <span
                  className="font-body text-[13px] font-semibold"
                  style={{ color: "rgba(245,245,245,0.9)" }}
                >
                  {row.item}
                </span>
                <span className="font-body text-[13px] leading-[1.5]" style={{ color: TEXT_DIM }}>
                  {row.desc}
                </span>
                <span
                  className="font-title text-right"
                  style={{ color: LIME, fontSize: "18px", fontWeight: 400 }}
                >
                  {row.qty}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ROI */}
        <section className="px-6 md:px-16 py-24 md:py-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-[900px] mx-auto text-center"
          >
            <SectionLabel center>El math que nadie te hace</SectionLabel>
            <h2
              className="font-title text-pg-light mb-6"
              style={{
                fontSize: "clamp(28px, 4.5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              ¿Por qué $49,000 MXN es
              <br />
              <em style={{ color: LIME, fontStyle: "italic" }}>una cifra conservadora?</em>
            </h2>
            <p
              className="font-body text-[15px] leading-[1.7] max-w-[580px] mx-auto mb-14"
              style={{ color: TEXT_DIM }}
            >
              Hagamos el ejercicio que ningún vendedor de publicidad hace contigo. El video, la estrategia y el estudio de mercado no desaparecen después de un mes. Siguen trabajando. El costo ya no existe. El activo permanece.
            </p>
          </motion.div>

          <div className="max-w-[860px] mx-auto" style={{ border: `1px solid ${BORDER}` }}>
            {roiRows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-3 px-8 py-6"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <span className="font-body text-[14px]" style={{ color: TEXT_DIM }}>
                  {row.label}
                </span>
                <span
                  className="font-title"
                  style={{ color: LIME, fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 400 }}
                >
                  {row.value}
                </span>
              </motion.div>
            ))}
            <div
              className="px-8 py-7"
              style={{ background: LIME_MID }}
            >
              <p className="font-body text-[14px]" style={{ color: "rgba(245,245,245,0.7)" }}>
                Si vendes solo <strong className="text-white">1 a 3 unidades adicionales al mes</strong>, la inversión completa queda recuperada. El resto es rentabilidad pura sobre un activo que sigue corriendo.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* OPCIÓN B */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <SectionLabel>Opción B</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-start mb-14">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="font-title text-pg-light mb-6"
                style={{
                  fontSize: "clamp(28px, 4.5vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Producción con IA
                <br />
                <em style={{ color: TEXT_DIM, fontStyle: "italic" }}>+ estrategia integral.</em>
              </motion.h2>
              <p
                className="font-body text-[15px] leading-[1.7] max-w-[580px]"
                style={{ color: TEXT_DIM }}
              >
                La Opción B no es la versión barata. Es la versión inteligente para quien quiere resultados ahora, con la posibilidad de escalar a live action después. Misma estrategia, misma distribución, diferente proceso de producción.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 flex flex-col gap-3"
              style={{ border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)" }}
            >
              <p
                className="font-body text-[11px] uppercase tracking-[0.14em]"
                style={{ color: TEXT_MUTED }}
              >
                Inversión total
              </p>
              <p
                className="font-title leading-none text-white"
                style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 400 }}
              >
                $30,000
              </p>
              <p className="font-body text-[12px]" style={{ color: TEXT_MUTED }}>
                MXN · pago único
              </p>
              <p
                className="font-body text-[12px] leading-[1.6] pt-3"
                style={{ color: TEXT_DIM, borderTop: `1px solid ${BORDER}` }}
              >
                IVA según régimen fiscal del cliente
              </p>
            </motion.div>
          </div>

          {/* Qué incluye */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="p-8"
              style={{ border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.015)" }}
            >
              <p className="font-body text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: LIME }}>
                Lo que incluye — idéntico a la Opción A
              </p>
              <ul className="flex flex-col gap-3">
                {fasesBItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-[13px] leading-[1.55]"
                    style={{ color: TEXT_DIM }}
                  >
                    <span className="mt-[3px] shrink-0" style={{ color: LIME }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="p-8 flex flex-col gap-6"
              style={{ border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.015)" }}
            >
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: TEXT_MUTED }}>
                  ¿Cuándo elegir la Opción B?
                </p>
                {[
                  "Cuando necesitas velocidad: los tiempos de producción son significativamente menores.",
                  "Cuando el presupuesto inicial es una restricción real y quieres demostrar ROI antes de escalar.",
                  "Cuando vas a testear mensajes y audiencias antes de invertir en live action.",
                  "Cuando el canal prioritario es digital y no necesitas el peso aspiracional del live action para ese segmento.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 font-body text-[13px] leading-[1.55] mb-3"
                    style={{ color: TEXT_DIM }}
                  >
                    <span className="mt-[3px] shrink-0" style={{ color: TEXT_MUTED }}>—</span>
                    {item}
                  </div>
                ))}
              </div>
              <div
                className="mt-auto pt-6"
                style={{ borderTop: `1px solid ${BORDER}` }}
              >
                <p className="font-body text-[13px] leading-[1.65]" style={{ color: TEXT_DIM }}>
                  La diferencia entre A y B no es calidad vs. mediocridad. Es el nivel de autenticidad visual que necesita tu marca{" "}
                  <em className="text-white">en este momento.</em>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* COMPARATIVA */}
        <section className="px-6 md:px-16 py-24 md:py-28 max-w-[1300px] mx-auto">
          <SectionLabel>Comparativa objetiva</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-title text-pg-light mb-14"
            style={{
              fontSize: "clamp(28px, 4.5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            A vs B:
            <br />
            <em style={{ color: LIME, fontStyle: "italic" }}>una diferencia real.</em>
          </motion.h2>

          <div style={{ border: `1px solid ${BORDER}` }}>
            {/* Header */}
            <div className="hidden md:grid grid-cols-[1.2fr_1fr_1fr] px-8 py-4"
              style={{ borderBottom: `1px solid ${BORDER}`, background: "rgba(166,226,46,0.05)" }}
            >
              {["Elemento", "Opción A — $49K", "Opción B — $30K"].map((h, i) => (
                <span
                  key={h}
                  className="font-body text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: i === 0 ? TEXT_MUTED : LIME }}
                >
                  {h}
                </span>
              ))}
            </div>
            {comparativa.map((row, i) => (
              <motion.div
                key={row.elemento}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] items-center gap-2 md:gap-6 px-8 py-5"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <span
                  className="font-body text-[12px] uppercase tracking-[0.06em]"
                  style={{ color: TEXT_MUTED }}
                >
                  {row.elemento}
                </span>
                <span className="font-body text-[13px]" style={{ color: "rgba(245,245,245,0.8)" }}>
                  {row.a}
                </span>
                <span className="font-body text-[13px]" style={{ color: TEXT_DIM }}>
                  {row.b}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <Divider />

        {/* DECISIÓN */}
        <section className="relative overflow-hidden px-6 md:px-16 py-24 md:py-32">
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0"
            style={{
              width: 700,
              height: 700,
              background: "radial-gradient(circle, rgba(166,226,46,0.08) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-[860px] mx-auto text-center">
            <SectionLabel center>Lo que decide la diferencia</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="font-title text-pg-light mb-8"
              style={{
                fontSize: "clamp(28px, 4.5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              El momento perfecto
              <br />
              <em style={{ color: LIME, fontStyle: "italic" }}>ya pasó.</em>
            </motion.h2>

            <p
              className="font-body text-[16px] leading-[1.75] max-w-[640px] mx-auto mb-8"
              style={{ color: TEXT_DIM }}
            >
              La mayoría de las agencias de seminuevos va a seguir haciendo exactamente lo mismo el próximo año: fotos de WhatsApp, posts sin estrategia, precios en imagen de Canva. Eso no es competencia. Eso es ruido.
            </p>
            <p
              className="font-body text-[16px] leading-[1.75] max-w-[640px] mx-auto mb-12"
              style={{ color: TEXT_DIM }}
            >
              Zenith Motors tiene la oportunidad de hacer algo diferente ahora — no dentro de seis meses cuando el mercado esté más saturado.{" "}
              <em className="text-white font-medium">Esta propuesta no es un costo. Es una posición competitiva.</em>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[700px] mx-auto mb-14">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="p-8 text-left"
                style={{ border: `1px solid ${LIME}`, background: LIME_DIM }}
              >
                <p className="font-body text-[11px] uppercase tracking-[0.14em] mb-3" style={{ color: LIME }}>
                  Opción A
                </p>
                <p
                  className="font-title text-white mb-2"
                  style={{ fontSize: "clamp(15px, 1.4vw, 18px)", fontWeight: 400, letterSpacing: "-0.01em" }}
                >
                  Live Action + Estrategia Integral
                </p>
                <p
                  className="font-title mb-4"
                  style={{ color: LIME, fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 400 }}
                >
                  $49,000 MXN
                </p>
                <p className="font-body text-[12px]" style={{ color: TEXT_DIM }}>
                  La versión que domina el mercado.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="p-8 text-left"
                style={{ border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.02)" }}
              >
                <p className="font-body text-[11px] uppercase tracking-[0.14em] mb-3" style={{ color: TEXT_MUTED }}>
                  Opción B
                </p>
                <p
                  className="font-title text-white mb-2"
                  style={{ fontSize: "clamp(15px, 1.4vw, 18px)", fontWeight: 400, letterSpacing: "-0.01em" }}
                >
                  Producción con IA + Estrategia Integral
                </p>
                <p
                  className="font-title text-white mb-4"
                  style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 400 }}
                >
                  $30,000 MXN
                </p>
                <p className="font-body text-[12px]" style={{ color: TEXT_DIM }}>
                  La versión que entra rápido y escala.
                </p>
              </motion.div>
            </div>

            <p
              className="font-title italic"
              style={{ color: TEXT_DIM, fontSize: "clamp(14px, 1.2vw, 17px)", fontWeight: 400 }}
            >
              Ambas opciones incluyen estrategia, investigación de mercado, paid media y OOH.
              <br />
              La única diferencia real está en cómo se produce el video.
            </p>
          </div>
        </section>

        <Divider />

        {/* CTA */}
        <section className="relative overflow-hidden px-6 md:px-16 py-24 md:py-32">
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0"
            style={{
              width: 600,
              height: 600,
              background: "radial-gradient(circle, rgba(166,226,46,0.07) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-[820px] mx-auto text-center">
            <p
              className="font-body text-[11px] tracking-[0.14em] uppercase mb-6 inline-flex items-center gap-3"
              style={{ color: LIME }}
            >
              <span className="inline-block w-8 h-px" style={{ background: LIME }} />
              PG Estrategias
              <span className="inline-block w-8 h-px" style={{ background: LIME }} />
            </p>
            <h2
              className="font-title text-pg-light mb-6"
              style={{
                fontSize: "clamp(28px, 4.5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              La mejor inversión que puedes
              <br />
              hacer hoy es{" "}
              <em style={{ color: LIME, fontStyle: "italic" }}>una conversación.</em>
            </h2>
            <p
              className="font-body text-[15px] leading-[1.7] max-w-[500px] mx-auto mb-12"
              style={{ color: TEXT_DIM }}
            >
              ¿Tienes preguntas? ¿Quieres ajustar el alcance? Estamos listos.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {[
                { icon: "📱", label: "+52 222 121 5051", href: "https://wa.me/5212221215051" },
                { icon: "✉️", label: "contacto@pgestrategias.com", href: "mailto:contacto@pgestrategias.com" },
                { icon: "🌐", label: "pgestrategias.com", href: "/" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-body text-[14px] flex items-center gap-3 transition-colors duration-500 hover:text-white"
                  style={{ color: "rgba(245,245,245,0.65)" }}
                >
                  <span
                    className="w-9 h-9 flex items-center justify-center text-base"
                    style={{ background: LIME_DIM, color: LIME }}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
