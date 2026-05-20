import type { Metadata } from "next";
import DrManuelClient from "./DrManuelClient";

export const metadata: Metadata = {
  title: "Reporte de Avance — Dr. José Manuel Fernández · PG Estrategias",
  description:
    "Reporte de tareas completadas para el Dr. José Manuel Fernández — Proctología, Puebla.",
};

export default function DrManuelPage() {
  return <DrManuelClient />;
}
