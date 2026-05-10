import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "PG Estrategias — Growth Partners",
  description: "Convertimos tu inversión publicitaria en clientes. Paid Media · Producción Audiovisual · Mensajería · Ecosistema Digital.",
  keywords: "marketing digital, pauta digital, growth partners, CDMX, publicidad digital, Meta Ads, Google Ads",
  openGraph: {
    title: "PG Estrategias — Growth Partners",
    description: "Convertimos tu inversión publicitaria en clientes. 14 días de firma a campaña activa.",
    type: "website",
    locale: "es_MX",
    siteName: "PG Estrategias",
  },
  twitter: {
    card: "summary_large_image",
    title: "PG Estrategias — Growth Partners",
    description: "Convertimos tu inversión publicitaria en clientes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="grain">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
