"use client";
import Service from "@/components/Service";
import Benefit from "@/components/Benefit";

export default function Home() {

  const services = [
    { icon: "/globe.svg", description: "Hacemos tu contabilidad mensual" },
    { icon: "/globe.svg", description: "Calculamos tus impuestos" },
    { icon: "/globe.svg", description: "Presentamos tus declaraciones SAT" },
    { icon: "/globe.svg", description: "Cálculo, timbrado y envío de nómina" },
  ]
  const beneficiosData = [
    {
      icon: "/icons/automatico.svg",
      title: "Automático",
      description: "Ahorra tiempo al eliminar la tarea de enviar Facturas a tu contador ¡El proceso es automático!",
    },
    {
      icon: "/icons/servicio.svg",
      title: "Servicio Oportuno",
      description: "Comunicación más fácil y efectiva con tu contador personal.",
    },
    {
      icon: "/icons/simplicidad.svg",
      title: "Simplicidad",
      description: "Información contable en tiempo real.",
    },
    {
      icon: "/icons/confiable.svg",
      title: "Confiable",
      description: "Cálculos hechos por una de nuestros contadores expertos asignado especialmente a tu negocio.",
    },
  ];
  return (
    <div className="font-sans flex flex-col min-h-screen m-4 md:m-20">
      <main className="flex flex-col gap-8 max-w-screen-xl mx-auto">

        <section className="flex flex-wrap gap-2 justify-center">
          {services.map((service, index) => (
            <Service key={index} icon={service.icon} description={service.description} />
          ))}
        </section>

        <section className="flex flex-col items-center gap-5 md:flex-row">
          <div className="relative w-64 md:w-3/5 aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/krDWc30PAGg?si=78PCs24txbUbzcTA"
              title="YouTube video player"
              allowFullScreen
            />
          </div>
          <div className="w-full md:w-2/5">
            <Benefit benefits={beneficiosData} />
          </div>

        </section>
      </main>
    </div>
  );
}
