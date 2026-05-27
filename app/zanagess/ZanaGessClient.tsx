"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const ACCENT = {
  lime: "#A6E22E",
  amber: "#F5B342",
  violet: "#B79CFF",
  teal: "#2EC4B6",
};

function AccentBar({ color }: { color: string }) {
  return (
    <span
      className="absolute left-0 top-0 h-full w-[2px]"
      style={{ background: color }}
    />
  );
}

const stats = [
  { num: "7", label: "Entregables clave" },
  { num: "4", label: "Objetivos estratégicos" },
  { num: "6", label: "Tácticas de impacto" },
];

const objectives = [
  {
    num: "01",
    text: "Comunicar efectivamente su propuesta de valor única y diferenciadores clave a prospectos B2B de alto nivel.",
  },
  {
    num: "02",
    text: "Generar oportunidades comerciales cualificadas con cadenas de autoservicio y clientes institucionales en México y Estados Unidos.",
  },
  {
    num: "03",
    text: "Respaldar digitalmente su proceso de ventas B2B con herramientas de marketing que proyecten profesionalismo, calidad y confianza.",
  },
  {
    num: "04",
    text: "Expandir su presencia de marca en el segmento B2B de distribución de zanahoria a nivel nacional e internacional.",
  },
];

const tactics = [
  {
    accent: ACCENT.lime,
    label: "01 · Video Institucional",
    title: "Video de alta calidad que genera confianza",
    desc: "Produciremos un video institucional que destaque su trayectoria, certificaciones, capacidad logística, estricto control de calidad y compromisos contractuales. Será una poderosa herramienta de ventas para generar confianza con prospectos B2B.",
  },
  {
    accent: ACCENT.amber,
    label: "02 · Sitio Web Optimizado",
    title: "Presencia digital profesional y posicionada",
    desc: "Desarrollaremos un sitio web profesional optimizado para buscadores con sección detallada de oferta B2B. Incluiremos landing pages especializadas para México y Estados Unidos, con fuerte enfoque en SEO para aparecer ante compradores B2B.",
  },
  {
    accent: ACCENT.violet,
    label: "03 · Redes Sociales",
    title: "Contenido estratégico en el segmento B2B",
    desc: "Gestionaremos estratégicamente sus redes sociales mostrando su operación, procesos de calidad, logística, certificaciones y casos de éxito. Utilizaremos LinkedIn para conectar con decisores clave en la industria.",
  },
  {
    accent: ACCENT.lime,
    label: "04 · Google Business Profile",
    title: "Visibilidad local y reputación en línea",
    desc: "Crearemos y optimizaremos su perfil en Google My Business para que su negocio aparezca en búsquedas y mapas locales con palabras clave relevantes a su oferta B2B. Gestionaremos su reputación alentando reseñas positivas.",
  },
  {
    accent: ACCENT.amber,
    label: "05 · WhatsApp Business",
    title: "Recaptación y seguimiento personalizado",
    desc: "Implementaremos una estrategia de mensajería para reactivar oportunidades comerciales. Desarrollaremos secuencias de seguimiento personalizadas para enviar materiales de ventas, coordinar muestras y agendar reuniones.",
  },
  {
    accent: ACCENT.violet,
    label: "06 · Expansión Estratégica",
    title: "Alcance ampliado con especialista B2B",
    desc: "Subcontrataremos a un especialista en marketing B2B para presencia en expos y convenciones clave, acercamiento a cámaras de comercio, desarrollo de material promocional especializado y asesoría continua para afinar la estrategia.",
  },
];

const deliverables = [
  { icon: "▶", text: "Video institucional (2–3 minutos)" },
  { icon: "◎", text: "Sitio web optimizado" },
  { icon: "⊞", text: "2 Landing pages (México y USA)" },
  { icon: "◈", text: "Gestión de redes sociales (LinkedIn, Facebook, Instagram)" },
  { icon: "◉", text: "Google Business Profile optimizado" },
  { icon: "◇", text: "Configuración y operación inicial de WhatsApp Business" },
  { icon: "◆", text: "Subcontratación de especialista para expansión estratégica" },
];

const impacts = [
  {
    accent: ACCENT.lime,
    title: "Mayor visibilidad de marca",
    desc: "Reconocimiento de marca entre compradores empresariales de zanahoria, tanto en México como en Estados Unidos.",
  },
  {
    accent: ACCENT.amber,
    title: "Más oportunidades B2B",
    desc: "Incremento en volumen y calidad de oportunidades comerciales, acelerando la transición hacia clientes institucionales de mayor valor.",
  },
  {
    accent: ACCENT.violet,
    title: "Mayor tasa de cierre",
    desc: "Herramientas de marketing (video, web, perfiles digitales) que respaldan el proceso comercial y generan confianza en el comprador.",
  },
  {
    accent: ACCENT.lime,
    title: "Reactivación de cuentas",
    desc: "Fortalecimiento de relaciones con clientes actuales y reactivación de cuentas a través de la estrategia de recaptación vía WhatsApp Business.",
  },
  {
    accent: ACCENT.amber,
    title: "Posicionamiento como líder",
    desc: "Posicionamiento como proveedor confiable de alta calidad ante decisores clave, pavimentando el camino hacia las principales cadenas de autoservicio.",
  },
  {
    accent: ACCENT.violet,
    title: "Expansión de alcance",
    desc: "Alcance comercial ampliado a través de eventos presenciales y acercamiento a cámaras y asociaciones empresariales.",
  },
];

export default function ZanaGessClient() {
  return (
    <>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(13,13,13,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-16 h-16 max-w-[1300px] mx-auto">
          <a href="/" className="flex items-center gap-2.5">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" style={{ color: "#A6E22E" }}>
              <rect x="2" y="18" width="5" height="8" fill="currentColor" />
              <rect x="9" y="12" width="5" height="14" fill="currentColor" />
              <rect x="16" y="6" width="5" height="20" fill="currentColor" />
              <rect x="23" y="2" width="3" height="24" fill="currentColor" opacity="0.4" />
            </svg>
            <span
              className="font-title text-white text-[13px] tracking-[0.1em] uppercase leading-none"
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
              Propuesta · Mayo 2026
            </span>
            <span
              className="font-body text-[10px] tracking-[0.14em] uppercase px-3 py-1.5"
              style={{
                color: "#A6E22E",
                background: "rgba(166,226,46,0.08)",
                fontWeight: 600,
              }}
            >
              Propuesta Activa
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
              top: "-30%",
              right: "-15%",
              width: 700,
              height: 700,
              background: "radial-gradient(circle, rgba(166,226,46,0.12) 0%, transparent 65%)",
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "-20%",
              left: "-10%",
              width: 500,
              height: 500,
              background: "radial-gradient(circle, rgba(46,196,182,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 md:gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-8 flex items-center gap-2"
                style={{ color: "#A6E22E" }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#A6E22E" }} />
                Propuesta publicitaria
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-title text-pg-light mb-8"
                style={{
                  fontSize: "clamp(40px, 6vw, 88px)",
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                Estrategia para
                <br />
                <em style={{ color: "#A6E22E", fontStyle: "italic" }}>
                  Zana Gess.
                </em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-body text-[15px] leading-[1.7] max-w-[540px]"
                style={{ color: "rgba(245,245,245,0.6)" }}
              >
                Tras analizar su modelo de negocio, portafolio de productos, certificaciones,
                capacidades logísticas y objetivos comerciales, hemos desarrollado una{" "}
                <span className="text-white font-medium">
                  propuesta publicitaria integral
                </span>{" "}
                diseñada para impulsar su crecimiento en el mercado B2B.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="px-8 py-6"
                  style={{
                    borderBottom: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <p
                    className="font-title leading-none mb-2"
                    style={{
                      color: "#A6E22E",
                      fontSize: "clamp(36px, 4vw, 52px)",
                      fontWeight: 400,
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="font-body text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: "rgba(245,245,245,0.4)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }}
        />

        {/* OBJETIVOS */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <p
            className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-6 flex items-center gap-3"
            style={{ color: "#A6E22E" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "#A6E22E" }} />
            Objetivos
          </p>

          <h2
            className="font-title text-pg-light mb-6"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Lo que queremos
            <br />
            <em style={{ color: "#A6E22E", fontStyle: "italic" }}>lograr juntos.</em>
          </h2>
          <p
            className="font-body text-[15px] leading-[1.7] max-w-[560px] mb-14"
            style={{ color: "rgba(245,245,245,0.55)" }}
          >
            Cuatro objetivos estratégicos que guían cada decisión de la propuesta,
            orientados a posicionar a Zana Gess como el proveedor B2B de referencia
            en el mercado de zanahoria.
          </p>

          <div className="flex flex-col gap-4">
            {objectives.map((obj, i) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-8 p-6 md:p-8"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <span
                  className="font-title italic shrink-0 leading-none"
                  style={{
                    color: "#A6E22E",
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 400,
                  }}
                >
                  {obj.num}
                </span>
                <p
                  className="font-body text-[15px] leading-[1.7] pt-1"
                  style={{ color: "rgba(245,245,245,0.75)" }}
                >
                  {obj.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }}
        />

        {/* ESTRATEGIA Y TÁCTICAS */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <p
            className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-6 flex items-center gap-3"
            style={{ color: "#A6E22E" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "#A6E22E" }} />
            Estrategia y tácticas
          </p>

          <h2
            className="font-title text-pg-light mb-6"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Seis frentes para
            <br />
            <em style={{ color: "#A6E22E", fontStyle: "italic" }}>dominar el B2B.</em>
          </h2>
          <p
            className="font-body text-[15px] leading-[1.7] max-w-[560px] mb-14"
            style={{ color: "rgba(245,245,245,0.55)" }}
          >
            Cada táctica fue diseñada para que Zana Gess proyecte autoridad, genere
            confianza y acelere su proceso comercial con clientes de alto valor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tactics.map((t, i) => (
              <motion.article
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
                className="relative p-6 md:p-8 transition-colors duration-500 hover:bg-white/[0.02]"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <AccentBar color={t.accent} />
                <div className="pl-5">
                  <p
                    className="font-body text-[10px] uppercase tracking-[0.16em] mb-3"
                    style={{ color: t.accent, opacity: 0.8 }}
                  >
                    {t.label}
                  </p>
                  <h3
                    className="font-title text-white mb-3"
                    style={{
                      fontSize: "clamp(18px, 1.6vw, 22px)",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="font-body text-[14px] leading-[1.65]"
                    style={{ color: "rgba(245,245,245,0.55)" }}
                  >
                    {t.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }}
        />

        {/* ENTREGABLES */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <p
            className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-6 flex items-center gap-3"
            style={{ color: "#A6E22E" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "#A6E22E" }} />
            Entregables
          </p>

          <h2
            className="font-title text-pg-light mb-14"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            7 entregables,
            <br />
            <em style={{ color: "#A6E22E", fontStyle: "italic" }}>un solo resultado.</em>
          </h2>

          <div
            className="flex flex-col"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {deliverables.map((d, i) => (
              <motion.div
                key={d.text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-6 px-8 py-5 transition-colors duration-300 hover:bg-white/[0.025]"
                style={{
                  borderBottom: i < deliverables.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <span
                  className="font-title shrink-0 w-8 text-center"
                  style={{ color: "#A6E22E", fontSize: 18, opacity: 0.7 }}
                >
                  {d.icon}
                </span>
                <p
                  className="font-body text-[15px]"
                  style={{ color: "rgba(245,245,245,0.8)" }}
                >
                  {d.text}
                </p>
                <span
                  className="ml-auto shrink-0 font-body text-[10px] uppercase tracking-[0.14em] px-3 py-1"
                  style={{
                    color: "#A6E22E",
                    background: "rgba(166,226,46,0.07)",
                    border: "1px solid rgba(166,226,46,0.15)",
                  }}
                >
                  Incluido
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }}
        />

        {/* IMPACTO ESPERADO */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <p
            className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-6 flex items-center gap-3"
            style={{ color: "#A6E22E" }}
          >
            <span className="inline-block w-8 h-px" style={{ background: "#A6E22E" }} />
            Impacto esperado
          </p>

          <h2
            className="font-title text-pg-light mb-6"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Resultados concretos
            <br />
            <em style={{ color: "#A6E22E", fontStyle: "italic" }}>en su operación.</em>
          </h2>
          <p
            className="font-body text-[15px] leading-[1.7] max-w-[560px] mb-14"
            style={{ color: "rgba(245,245,245,0.55)" }}
          >
            Esta estrategia será un catalizador para que Zana Gess escale su operación,
            concrete nuevas oportunidades de negocio y consolide su posición como líder
            en distribución de zanahoria.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {impacts.map((imp, i) => (
              <motion.div
                key={imp.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="relative px-8 py-10"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <span
                  className="block w-8 h-[2px] mb-5"
                  style={{ background: imp.accent }}
                />
                <p
                  className="font-body text-[14px] font-medium mb-2 text-white"
                  style={{ letterSpacing: "-0.005em" }}
                >
                  {imp.title}
                </p>
                <p
                  className="font-body text-[13px] leading-[1.6]"
                  style={{ color: "rgba(245,245,245,0.45)" }}
                >
                  {imp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }}
        />

        {/* QUOTE / CIERRE */}
        <section className="px-6 md:px-16 py-24 md:py-28">
          <div className="max-w-[820px] mx-auto text-center">
            <p
              className="font-title leading-none mb-6"
              style={{ color: "#A6E22E", opacity: 0.25, fontSize: 72, fontWeight: 400 }}
            >
              &ldquo;
            </p>
            <p
              className="font-title italic text-pg-light mb-6"
              style={{
                fontSize: "clamp(20px, 2.4vw, 30px)",
                fontWeight: 400,
                lineHeight: 1.45,
                letterSpacing: "-0.01em",
              }}
            >
              Esta estrategia publicitaria será un catalizador para que Zana Gess
              escale su operación y consolide su posición como líder en la distribución
              de zanahoria para el exigente mercado B2B.
            </p>
            <p
              className="font-body text-[12px] uppercase tracking-[var(--ls-label)]"
              style={{ color: "rgba(245,245,245,0.4)" }}
            >
              <span className="text-white font-semibold">Pablo Guillermo Grageda Jiménez</span>{" "}
              &middot; CEO &middot; PG Estrategias
            </p>
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }}
        />

        {/* CTA */}
        <section className="relative overflow-hidden px-6 md:px-16 py-24 md:py-32">
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0"
            style={{
              width: 600,
              height: 600,
              background: "radial-gradient(circle, rgba(166,226,46,0.1) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-[820px] mx-auto text-center">
            <p
              className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-6 inline-flex items-center gap-3"
              style={{ color: "#A6E22E" }}
            >
              <span className="inline-block w-8 h-px" style={{ background: "#A6E22E" }} />
              Próximos pasos
              <span className="inline-block w-8 h-px" style={{ background: "#A6E22E" }} />
            </p>
            <h2
              className="font-title text-pg-light mb-6"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Listos para llevar
              <br />
              <em style={{ color: "#A6E22E", fontStyle: "italic" }}>
                Zana Gess al siguiente nivel.
              </em>
            </h2>
            <p
              className="font-body text-[15px] leading-[1.7] max-w-[560px] mx-auto mb-12"
              style={{ color: "rgba(245,245,245,0.55)" }}
            >
              El siguiente paso es una reunión para profundizar en sus objetivos,
              afinar la propuesta y definir un calendario de trabajo detallado.
              Quedamos a sus órdenes para cualquier pregunta.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <a
                href="https://wa.me/5212221215051"
                className="font-body text-[14px] flex items-center gap-3 transition-colors duration-500 hover:text-white"
                style={{ color: "rgba(245,245,245,0.65)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center"
                  style={{ background: "rgba(166,226,46,0.08)", color: "#A6E22E" }}
                >
                  ☎
                </span>
                +52 222 121 5051
              </a>
              <a
                href="mailto:contacto@pgestrategias.com"
                className="font-body text-[14px] flex items-center gap-3 transition-colors duration-500 hover:text-white"
                style={{ color: "rgba(245,245,245,0.65)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center"
                  style={{ background: "rgba(166,226,46,0.08)", color: "#A6E22E" }}
                >
                  ✉
                </span>
                contacto@pgestrategias.com
              </a>
              <a
                href="/"
                className="font-body text-[14px] flex items-center gap-3 transition-colors duration-500 hover:text-white"
                style={{ color: "rgba(245,245,245,0.65)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center"
                  style={{ background: "rgba(166,226,46,0.08)", color: "#A6E22E" }}
                >
                  ◎
                </span>
                pgestrategias.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
