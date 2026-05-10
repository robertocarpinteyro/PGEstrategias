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
    setSent(true);
  };

  const inputClass =
    "w-full bg-transparent border-b py-3 font-body text-[15px] text-white placeholder:text-white/25 focus:outline-none transition-colors duration-500";

  return (
    <section id="contacto" className="py-40" style={{ background: "#0D0D0D" }}>
      <div className="max-w-[1300px] mx-auto px-8 md:px-16">

        <div
          className="pt-8 mb-20"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

            {/* Left: info */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={headInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="font-body text-[11px] uppercase tracking-[var(--ls-label)] mb-10"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Hablemos
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={headInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-title text-white mb-8"
                style={{
                  fontSize: "var(--t-h1)",
                  fontWeight: 400,
                  lineHeight: "var(--lh-h1)",
                  letterSpacing: "var(--ls-display)",
                }}
              >
                ¿Listo para
                <br />
                crecer de verdad?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={headInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-body text-[16px] leading-[1.75] mb-14"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Agenda una llamada de 20 minutos. Sin costo, sin compromiso.
                Te decimos si podemos ayudarte — y si no, también.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={headInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                {[
                  { label: "WhatsApp", href: "https://wa.me/5212221215051", text: "+52 222 121 5051" },
                  { label: "Email", href: "mailto:contacto@pgestrategias.com", text: "contacto@pgestrategias.com" },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="font-body text-[11px] uppercase tracking-[var(--ls-label)] mb-2"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      className="font-title text-white transition-colors duration-500 hover:text-pg-lime"
                      style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 700 }}
                    >
                      {item.text}
                    </a>
                  </div>
                ))}

                <div>
                  <p
                    className="font-body text-[11px] uppercase tracking-[var(--ls-label)] mb-2"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                  >
                    Oficina
                  </p>
                  <p className="font-body text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Ciudad de Puebla, México
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-16">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                    style={{ background: "rgba(166,226,46,0.1)", border: "1px solid rgba(166,226,46,0.3)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M3 10l5 5 9-9" stroke="#A6E22E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-title text-white" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 400 }}>
                    Mensaje enviado
                  </h3>
                  <p className="font-body text-[15px]" style={{ color: "rgba(255,255,255,0.45)" }}>
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
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#A6E22E")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="¿A qué se dedica tu negocio?"
                      required
                      className={inputClass}
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                      value={form.negocio}
                      onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#A6E22E")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                  <div>
                    <select
                      required
                      className={`${inputClass} appearance-none cursor-pointer`}
                      style={{ borderColor: "rgba(255,255,255,0.15)", background: "transparent" }}
                      value={form.facturacion}
                      onChange={(e) => setForm({ ...form, facturacion: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#A6E22E")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
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
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#A6E22E")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 font-title font-bold text-[13px] tracking-wide transition-opacity duration-500 hover:opacity-85"
                    style={{ background: "#A6E22E", color: "#0D0D0D" }}
                  >
                    Quiero mi llamada gratuita
                  </button>
                  <p className="font-body text-[12px] text-center" style={{ color: "rgba(255,255,255,0.2)" }}>
                    Sin spam. Solo te contactamos para la llamada.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
