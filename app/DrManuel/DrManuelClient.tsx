"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

type Task = {
  title: string;
  desc: string;
};

type Category = {
  num: string;
  name: string;
  accent: "lime" | "amber" | "violet";
  tasks: Task[];
};

const categories: Category[] = [
  {
    num: "01",
    name: "Comunicación y Reputación",
    accent: "lime",
    tasks: [
      {
        title: "Diseño de plantillas de mensajes",
        desc: "Se crearon plantillas de respuesta actualizadas para el equipo administrativo, facilitando la comunicación estandarizada y profesional con los pacientes.",
      },
      {
        title: "Integración de enlaces de reputación",
        desc: "Se incluyeron enlaces directos a comentarios de Google Maps y Doctoralia en las plantillas, generando confianza inmediata en los prospectos.",
      },
      {
        title: "Actualización de landing page + indexación en Google",
        desc: "Se subieron y destacaron testimonios y comentarios positivos de Google Maps y Doctoralia en la landing para mejorar la tasa de conversión. Responsable: CARPI.",
      },
    ],
  },
  {
    num: "02",
    name: "Gestión de Pauta y Leads",
    accent: "amber",
    tasks: [
      {
        title: "Reactivación de pauta publicitaria",
        desc: "Se reinició la inversión en pauta este mes con las nuevas configuraciones optimizadas para maximizar la captación de pacientes a través de Meta y Google Ads.",
      },
    ],
  },
  {
    num: "03",
    name: "Infraestructura y CRM",
    accent: "violet",
    tasks: [
      {
        title: "Implementación del CRM",
        desc: "Se configuró la herramienta de gestión para que la asistente no se confunda con el seguimiento de los pacientes y sepa a quién ya se le contestó y quién falta por atender.",
      },
      {
        title: "Evaluación en oficina física",
        desc: "Se habilitó el nuevo espacio físico con equipo técnico (computadora y TV) para evaluar semanalmente los casos del cliente y proponer mejoras continuas.",
      },
    ],
  },
];

const summary = [
  {
    accent: "lime" as const,
    count: "3",
    title: "Comunicación y Reputación",
    desc: "Plantillas, enlaces de reputación y landing optimizada.",
  },
  {
    accent: "amber" as const,
    count: "1",
    title: "Pauta y Leads",
    desc: "Reactivación de pauta con nuevas configuraciones.",
  },
  {
    accent: "violet" as const,
    count: "2",
    title: "Infraestructura y CRM",
    desc: "CRM implementado y evaluación en oficina física.",
  },
];

const stats = [
  { num: "6", label: "Tareas completadas" },
  { num: "3", label: "Áreas de impacto" },
  { num: "100%", label: "Avance del proyecto" },
];

const ACCENT: Record<Category["accent"], string> = {
  lime: "#A6E22E",
  amber: "#F5B342",
  violet: "#B79CFF",
};

function AccentBar({ tone }: { tone: Category["accent"] }) {
  return (
    <span
      className="absolute left-0 top-0 h-full w-[2px]"
      style={{ background: ACCENT[tone] }}
    />
  );
}

export default function DrManuelClient() {
  return (
    <>
      {/* NAV — versión simplificada para esta página */}
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
              Reporte · Mayo 2026
            </span>
            <span
              className="font-body text-[10px] tracking-[0.14em] uppercase px-3 py-1.5"
              style={{
                color: "#A6E22E",
                background: "rgba(166,226,46,0.08)",
                fontWeight: 600,
              }}
            >
              Proyecto Activo
            </span>
          </div>
        </div>
      </nav>

      <main className="bg-pg-black text-pg-white">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 md:px-16 pt-32 pb-24 md:pt-40 md:pb-32">
          {/* Glow */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-30%",
              right: "-15%",
              width: 700,
              height: 700,
              background:
                "radial-gradient(circle, rgba(166,226,46,0.12) 0%, transparent 65%)",
            }}
          />
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "-20%",
              left: "-10%",
              width: 500,
              height: 500,
              background:
                "radial-gradient(circle, rgba(183,156,255,0.05) 0%, transparent 70%)",
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
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ background: "#A6E22E" }}
                />
                Reporte de avance
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
                Todas las tareas
                <br />
                <em style={{ color: "#A6E22E", fontStyle: "italic" }}>
                  completadas.
                </em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-body text-[15px] leading-[1.7] max-w-[540px]"
                style={{ color: "rgba(245,245,245,0.6)" }}
              >
                Proyecto de marketing digital para el{" "}
                <span className="text-white font-medium">
                  Dr. José Manuel Fernández
                </span>{" "}
                — Proctología, Puebla. Un resumen de las acciones implementadas
                para impulsar la captación de pacientes y profesionalizar su
                presencia digital.
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
                    borderBottom:
                      i < stats.length - 1
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "none",
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
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* RESUMEN */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          <p
            className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-6 flex items-center gap-3"
            style={{ color: "#A6E22E" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ background: "#A6E22E" }}
            />
            Resumen ejecutivo
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
            Tres áreas estratégicas,
            <br />
            un solo{" "}
            <em style={{ color: "#A6E22E", fontStyle: "italic" }}>objetivo.</em>
          </h2>
          <p
            className="font-body text-[15px] leading-[1.7] max-w-[560px] mb-14"
            style={{ color: "rgba(245,245,245,0.55)" }}
          >
            Cada acción fue diseñada para que el consultorio del Dr. Fernández
            reciba más pacientes, proyecte confianza y opere con herramientas
            profesionales.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {summary.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative px-8 py-12"
                style={{
                  borderRight:
                    i < summary.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <p
                  className="font-title leading-none mb-3"
                  style={{
                    color: ACCENT[s.accent],
                    fontSize: "clamp(40px, 4.5vw, 56px)",
                    fontWeight: 400,
                  }}
                >
                  {s.count}
                </p>
                <p
                  className="font-body text-[14px] font-medium mb-2 text-white"
                  style={{ letterSpacing: "-0.005em" }}
                >
                  {s.title}
                </p>
                <p
                  className="font-body text-[13px] leading-[1.6]"
                  style={{ color: "rgba(245,245,245,0.45)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* TAREAS */}
        <section className="px-6 md:px-16 py-24 md:py-32 max-w-[1300px] mx-auto">
          {categories.map((cat, ci) => (
            <div key={cat.num} className={ci === 0 ? "" : "mt-20"}>
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="font-title italic leading-none"
                  style={{
                    color: ACCENT[cat.accent],
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 400,
                  }}
                >
                  {cat.num}
                </span>
                <span
                  className="font-body text-[11px] uppercase tracking-[var(--ls-label)] font-semibold"
                  style={{ color: "rgba(245,245,245,0.7)" }}
                >
                  {cat.name}
                </span>
                <span
                  className="flex-1 h-px"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <span
                  className="font-body text-[10px] uppercase tracking-[0.14em] px-3 py-1"
                  style={{
                    color: "rgba(245,245,245,0.45)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {cat.tasks.length}{" "}
                  {cat.tasks.length === 1 ? "tarea" : "tareas"}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {cat.tasks.map((t, ti) => (
                  <motion.article
                    key={t.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: ti * 0.05 }}
                    className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:items-center p-6 md:p-8 transition-colors duration-500 hover:bg-white/[0.02]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.015)",
                    }}
                  >
                    <AccentBar tone={cat.accent} />

                    <div className="pl-3 md:pl-5">
                      <h3
                        className="font-title text-white mb-2"
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

                    <div className="flex items-center gap-2 pl-3 md:pl-0 md:justify-self-end">
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 rounded-full font-bold"
                        style={{
                          background: "#A6E22E",
                          color: "#0D0D0D",
                          fontSize: 10,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        className="font-body text-[10px] uppercase tracking-[0.14em] font-semibold"
                        style={{ color: "#A6E22E" }}
                      >
                        Completado
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* QUOTE */}
        <section className="px-6 md:px-16 py-24 md:py-28">
          <div className="max-w-[820px] mx-auto text-center">
            <p
              className="font-title leading-none mb-6"
              style={{
                color: "#A6E22E",
                opacity: 0.25,
                fontSize: 72,
                fontWeight: 400,
              }}
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
              Sé que ustedes son un negocio confiable, en el que les interesa
              que sus clientes crezcan para que ustedes también crezcan.
            </p>
            <p
              className="font-body text-[12px] uppercase tracking-[var(--ls-label)]"
              style={{ color: "rgba(245,245,245,0.4)" }}
            >
              <span className="text-white font-semibold">Dr. Manuel</span>{" "}
              &middot; Proctología &middot; Puebla
            </p>
          </div>
        </section>

        <div
          className="max-w-[1300px] mx-auto h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* CTA */}
        <section className="relative overflow-hidden px-6 md:px-16 py-24 md:py-32">
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0"
            style={{
              width: 600,
              height: 600,
              background:
                "radial-gradient(circle, rgba(166,226,46,0.1) 0%, transparent 65%)",
            }}
          />
          <div className="relative max-w-[820px] mx-auto text-center">
            <p
              className="font-body text-[11px] tracking-[var(--ls-label)] uppercase mb-6 inline-flex items-center gap-3"
              style={{ color: "#A6E22E" }}
            >
              <span
                className="inline-block w-8 h-px"
                style={{ background: "#A6E22E" }}
              />
              PG Estrategias
              <span
                className="inline-block w-8 h-px"
                style={{ background: "#A6E22E" }}
              />
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
              Seguimos construyendo
              <br />
              <em style={{ color: "#A6E22E", fontStyle: "italic" }}>
                resultados.
              </em>
            </h2>
            <p
              className="font-body text-[15px] leading-[1.7] max-w-[560px] mx-auto mb-12"
              style={{ color: "rgba(245,245,245,0.55)" }}
            >
              El proyecto del Dr. Fernández avanza con todas las tareas
              implementadas. Continuamos optimizando para maximizar la
              captación de pacientes.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <a
                href="https://wa.me/5212221215051"
                className="font-body text-[14px] flex items-center gap-3 transition-colors duration-500 hover:text-white"
                style={{ color: "rgba(245,245,245,0.65)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center"
                  style={{
                    background: "rgba(166,226,46,0.08)",
                    color: "#A6E22E",
                  }}
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
                  style={{
                    background: "rgba(166,226,46,0.08)",
                    color: "#A6E22E",
                  }}
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
                  style={{
                    background: "rgba(166,226,46,0.08)",
                    color: "#A6E22E",
                  }}
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
