"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Por qué el compromiso mínimo es de 3 meses?",
    a: "Porque los primeros 30 días son configuración y arranque; los segundos 30 son ajuste y aprendizaje; y los terceros son cuando el sistema empieza a mostrar resultados reales. Cualquier agencia que te prometa resultados en el primer mes está siendo deshonesta contigo.",
  },
  {
    q: "¿El presupuesto de publicidad está incluido en la mensualidad?",
    a: "Sí. Cada plan incluye un monto base de publicidad — $2,500 en Ignición, $4,000 en Tracción y $7,000 en Dominio — que ya viene dentro de lo que pagas. Si quieres invertir más para acelerar resultados, esa diferencia se factura aparte.",
  },
  {
    q: "¿Trabajan con negocios que acaban de iniciar?",
    a: "Sí, en el plan Ignición. La única condición es que tengas un producto o servicio definido y al menos tus primeras ventas. No validamos ideas de negocio ni inventamos demanda: si ya sabes qué vendes y a quién, nosotros construimos el sistema para escalar.",
  },
  {
    q: "¿Qué pasa si no veo resultados?",
    a: "Si al cierre de los 3 meses las métricas no se movieron por causas atribuibles a nuestra ejecución — y no a factores como precio del producto, cobertura geográfica o problemas internos del negocio — te damos un mes adicional de trabajo sin costo de honorarios.",
  },
  {
    q: "¿Puedo cambiar de plan?",
    a: "Subir de plan puedes hacerlo en cualquier momento. Bajar de plan solo es posible al cierre de tu trimestre vigente, para no fragmentar la estrategia en medio de un ciclo de optimización.",
  },
  {
    q: "Ya tengo a alguien manejando mis redes sociales. ¿Esto es diferente?",
    a: "Completamente diferente. Manejar redes sociales es publicar contenido para mantener presencia. Nuestro trabajo es construir un sistema de ventas: anuncios pagados, páginas de conversión, mensajería coordinada y rastreo de resultados.",
  },
];

function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{ borderBottom: "1px solid rgba(13,13,13,0.1)" }}
    >
      <button
        className="w-full flex items-start justify-between py-6 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-body text-[16px] text-pg-black leading-snug pr-8" style={{ fontWeight: 400 }}>
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 text-[20px] leading-none mt-0.5 transition-colors duration-500"
          style={{ color: open ? "#A6E22E" : "rgba(13,13,13,0.3)" }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="font-body text-[15px] leading-[1.75] pb-7"
              style={{ color: "rgba(13,13,13,0.55)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section className="py-40" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[900px] mx-auto px-8 md:px-16">

        <div
          ref={headRef}
          className="mb-20 pt-8"
          style={{ borderTop: "1px solid rgba(13,13,13,0.1)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[11px] uppercase tracking-[var(--ls-label)] mb-8"
            style={{ color: "rgba(13,13,13,0.35)" }}
          >
            Preguntas frecuentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-title text-pg-black leading-[1]"
            style={{
              fontSize: "var(--t-h2)",
              fontWeight: 400,
              letterSpacing: "var(--ls-h2)",
            }}
          >
            Todo lo que necesitas saber
            <br />
            antes de empezar.
          </motion.h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(13,13,13,0.08)" }}
        >
          <p className="font-body text-[14px] mb-4" style={{ color: "rgba(13,13,13,0.45)" }}>
            ¿Tu pregunta no está aquí?
          </p>
          <a
            href="#contacto"
            className="font-body text-[13px] tracking-[0.1em] uppercase inline-flex items-center gap-3 transition-colors duration-500"
            style={{ color: "rgba(13,13,13,0.45)" }}
          >
            Escríbenos directamente <span style={{ color: "#A6E22E" }}>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
