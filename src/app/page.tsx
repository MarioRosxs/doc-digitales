'use client'
import Service from "@/components/ServiceCard";
import Benefit from "@/components/BenefitList";
import VideoPlayer from "@/components/VideoPlayer";
import { services } from "@/data/services";
import { benefits } from "@/data/benefits";
import Contact from "@/components/Contact/ContactSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {


  return (
    <div className="font-sans flex flex-col min-h-screen">
      <main className="flex flex-col gap-5 max-w-screen-xl mx-auto p-4 md:my-20 md:p-0">
        
        {/* Sección encabezado */}
        <header className="flex flex-col items-center">
          <HeroSection/>
        </header>

        {/* Sección de servicios */}
        <section className="flex flex-wrap gap-2 justify-center">
          {services.map((service, index) => (
            <Service key={index} icon={service.icon} description={service.description} />
          ))}
        </section>

        {/* Sección de beneficios y video informativo */}
        <section className="flex flex-col items-center gap-5 sm:flex-row md:items-start">
          <VideoPlayer src="https://www.youtube.com/embed/krDWc30PAGg?si=78PCs24txbUbzcTA" title="YouTube video player" />
          <div className="w-full md:w-2/5">
            <h2 className="ml-9 font-extrabold text-[16px]">Beneficios</h2>
            <Benefit benefits={benefits} icon="/check.svg" />
          </div>
        </section>

        {/* Sección de contacto y modal de paquetes */}
        <section >
          <Contact />
        </section>

      </main>
    </div>

  );
}
