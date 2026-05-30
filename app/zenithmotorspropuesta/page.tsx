import type { Metadata } from "next";
import ZenithInversionClient from "./ZenithMotorsClient";

export const metadata: Metadata = {
  title: "Propuesta de Inversión Publicitaria — Zenith Motors · PG Estrategias",
  description:
    "Propuesta de producción audiovisual y estrategia digital para Zenith Motors. Dos opciones de inversión: Live Action ($49K) e IA ($30K), con paid media y OOH.",
};

export default function ZenithInversionPage() {
  return <ZenithInversionClient />;
}
