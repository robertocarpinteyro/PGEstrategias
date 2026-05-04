"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Por qué el compromiso mínimo es de 3 meses?",
    a: "Porque los primeros 30 días son configuración y arranque; los segundos 30 son ajuste y aprendizaje; y los terceros son cuando el sistema empieza a mostrar resultados reales. Cualquier agencia que te prometa resultados en el primer mes está siendo deshonesta contigo o gastando tu presupuesto sin estrategia.",
  },
  {
    q: "¿El presupuesto de publicidad está incluido en la mensualidad?",
    a: "Sí. Cada plan incluye un monto base de publicidad — $2,500 en Ignición, $4,000 en Tracción y $7,000 en Dominio — que ya viene dentro de lo que pagas. Si en algún momento quieres invertir más en publicidad para acelerar los resultados, esa diferencia se factura aparte. Siempre lo recomendamos cuando el sistema ya está probado.",
  },
  {
    q: "¿Trabajan con negocios que acaban de iniciar?",
    a: "Sí, en el plan Ignición. La única condición es que tengas un producto o servicio definido y al menos tus primeras ventas. No validamos ideas de negocio ni inventamos demanda: si ya sabes qué vendes y a quién, nosotros construimos el sistema para escalar.",
  },
  {
    q: "¿Qué pasa si no veo resultados?",
    a: "Si al cierre de los 3 meses las métricas no se movieron por causas atribuibles a nuestra ejecución — y no a factores como precio del producto, cobertura geográfica o problemas internos del negocio — te damos un mes adicional de trabajo sin costo de honorarios. Ponemos la piel en el juego.",
  },
  {
    q: "¿Puedo cambiar de plan?",
    a: "Subir de plan puedes hacerlo en cualquier momento. Bajar de plan solo es posible al cierre de tu trimestre vigente, para no fragmentar la estrategia en medio de un ciclo de optimización.",
  },
  {
    q: "Ya tengo a alguien manejando mis redes sociales. ¿Esto es diferente?",
    a: "Completamente diferente. Manejar redes sociales es publicar contenido para mantener presencia. Nuestro trabajo es construir un sistema de ventas: anuncios pagados, páginas de conversión, mensajería coordinada y rastreo de resultados. Los dos pueden coexistir perfectamente, o podemos asumir todo si lo prefieres.",
  },
];

function AccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ borderBottom: "1px solid #E8E8E8" }}
    >
      <button
        className="w-full flex items-start justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-body font-medium text-[16px] text-pg-black leading-snug pr-8">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-pg-black/50 text-xl leading-none mt-0.5"
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-[15px] leading-[1.7] pb-6" style={{ color: "#444" }}>
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
    <section className="py-32" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[760px] mx-auto px-8 md:px-12">

        <div ref={headRef} className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            className="font-body text-[11px] uppercase tracking-[0.15em] mb-4 text-gray-400"
          >
            Preguntas frecuentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-title font-bold text-pg-black leading-[1.1]"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
          >
            Todo lo que necesitas saber antes de empezar.
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="font-body text-[14px] mb-4" style={{ color: "#666" }}>
            ¿Tu pregunta no está aquí?
          </p>
          <a
            href="#contacto"
            className="font-title font-bold text-[13px] tracking-wide inline-flex items-center gap-2 hover:gap-4 transition-all"
            style={{ color: "#0D0D0D" }}
          >
            Escríbenos directamente <span style={{ color: "#A6E22E" }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
