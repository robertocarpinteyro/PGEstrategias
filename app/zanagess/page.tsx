import type { Metadata } from "next";
import ZanaGessClient from "./ZanaGessClient";

export const metadata: Metadata = {
  title: "Propuesta Publicitaria — Zana Gess · PG Estrategias",
  description:
    "Propuesta publicitaria integral para Zana Gess — estrategia B2B para distribución de hortalizas en México y Estados Unidos.",
};

export default function ZanaGessPage() {
  return <ZanaGessClient />;
}
