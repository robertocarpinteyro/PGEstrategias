import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonios from "@/components/Testimonios";
import QuienesSomos from "@/components/QuienesSomos";
import Metodologia from "@/components/Metodologia";
import Paquetes from "@/components/Paquetes";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonios />
        <QuienesSomos />
        <Metodologia />
        <Paquetes />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
