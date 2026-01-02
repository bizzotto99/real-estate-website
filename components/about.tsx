import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function About() {
  const benefits = [
    "Más de 20 años en el mercado inmobiliario",
    "Equipo de profesionales altamente capacitado",
    "Asesoramiento personalizado y continuo",
    "Amplia cartera de propiedades en zonas premium",
    "Gestión integral de trámites y documentación",
    "Atención y seguimiento post-venta",
  ]

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-[#f6e9a7]/20 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#253148] mb-6">
              Sobre <span className="text-[#fcdc58]">BRITOS Inmobiliaria</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos una empresa familiar con más de dos décadas de trayectoria en el mercado inmobiliario argentino.
              Nuestra misión es ayudar a las personas a encontrar su hogar ideal o realizar inversiones inteligentes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nos distinguimos por nuestra honestidad, profesionalismo y compromiso con cada uno de nuestros clientes.
              Cada propiedad es única y cada cliente merece atención personalizada.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#fcdc58] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-[#253148] text-white hover:bg-[#1a2333]">
              Conocé Más Sobre Nosotros
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="/professional-real-estate-office.jpg"
              alt="Oficina BRITOS"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="/real-estate-team-meeting.png"
              alt="Equipo BRITOS"
              className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
            />
            <img
              src="/modern-house-keys-handover.jpg"
              alt="Entrega de llaves"
              className="rounded-lg shadow-lg w-full h-64 object-cover -mt-8"
            />
            <img
              src="/happy-family-new-home.jpg"
              alt="Familia feliz"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
