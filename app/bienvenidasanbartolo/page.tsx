import type { Metadata } from "next";
import SanBartoloClient from "./SanBartoloClient";

export const metadata: Metadata = {
  title: "Bienvenida — Ex Hacienda San Bartolo · PG Estrategias",
  description:
    "Portal de bienvenida para Ex Hacienda San Bartolo. Tier 1: Ignición — Plan de trabajo, entregables y primeros pasos.",
};

export default function SanBartoloPage() {
  return <SanBartoloClient />;
}
