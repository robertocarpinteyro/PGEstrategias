"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contacto() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", negocio: "", facturacion: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrar con backend o Formspree
    setSent(true);
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 py-3 font-body text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-pg-lime transition-colors duration-200";

  return (
    <section id="contacto" className="py-36" style={{ background: "#0D0D0D" }}>
      <div className="max-w-[1100px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: info */}
          <div ref={headRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              className="font-body text-[11px] uppercase tracking-[0.15em] mb-6"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Hablemos
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-title font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              ¿Listo para crecer de verdad?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-[16px] leading-relaxed mb-12"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Agenda una llamada de 20 minutos. Sin costo, sin compromiso.
              Te decimos si podemos ayudarte — y si no, también.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-6"
            >
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/521XXXXXXXXXX"
                  className="font-title font-bold text-white text-[18px] hover:text-pg-lime transition-colors"
                >
                  [ Número de WhatsApp ]
                </a>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Email
                </p>
                <a
                  href="mailto:contacto@pgestrategias.com"
                  className="font-title font-bold text-white text-[18px] hover:text-pg-lime transition-colors"
                >
                  [ Email de contacto ]
                </a>
              </div>
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.12em] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Oficina
                </p>
                <p className="font-body text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Calle Valencia 131-2, Las Palmas
                  <br />
                  Ciudad de México, México
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ background: "rgba(166,226,46,0.15)" }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11l5 5 9-9" stroke="#A6E22E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-title font-bold text-white text-[24px]">Mensaje enviado</h3>
                <p className="font-body text-[15px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Te contactamos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className={inputClass}
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="¿A qué se dedica tu negocio?"
                    required
                    className={inputClass}
                    value={form.negocio}
                    onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                  />
                </div>
                <div>
                  <select
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                    value={form.facturacion}
                    onChange={(e) => setForm({ ...form, facturacion: e.target.value })}
                    style={{ background: "transparent" }}
                  >
                    <option value="" disabled className="bg-pg-black">Facturación mensual aproximada</option>
                    <option value="menos-40k" className="bg-pg-black">Menos de $40,000 MXN</option>
                    <option value="40-80k" className="bg-pg-black">$40,000 – $80,000 MXN</option>
                    <option value="80-300k" className="bg-pg-black">$80,000 – $300,000 MXN</option>
                    <option value="mas-300k" className="bg-pg-black">Más de $300,000 MXN</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="¿Qué quieres lograr? (opcional)"
                    rows={3}
                    className={`${inputClass} resize-none`}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-title font-bold text-[14px] tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
                  style={{ background: "#A6E22E", color: "#0D0D0D", borderRadius: "2px" }}
                >
                  Quiero mi llamada gratuita
                </button>
                <p className="font-body text-[12px] text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Sin spam. Solo te contactamos para la llamada.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
