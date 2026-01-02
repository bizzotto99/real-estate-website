import { Card, CardContent } from "@/components/ui/card"
import { Home, Key, FileText, TrendingUp, Users, Shield } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Compra y Venta",
    description: "Te asesoramos en todo el proceso de compra o venta de tu propiedad con total transparencia.",
  },
  {
    icon: Key,
    title: "Alquileres",
    description: "Gestionamos alquileres temporales y tradicionales con garantías y contratos seguros.",
  },
  {
    icon: FileText,
    title: "Tasaciones",
    description: "Realizamos tasaciones profesionales para que conozcas el valor real de tu propiedad.",
  },
  {
    icon: TrendingUp,
    title: "Inversiones",
    description: "Te ayudamos a invertir inteligentemente en el mercado inmobiliario.",
  },
  {
    icon: Users,
    title: "Asesoramiento",
    description: "Nuestro equipo te brinda asesoramiento personalizado en cada etapa.",
  },
  {
    icon: Shield,
    title: "Seguridad Legal",
    description: "Nos encargamos de todos los aspectos legales para tu tranquilidad.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#253148] mb-4">
            Nuestros <span className="text-[#fcdc58]">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-2 border-gray-200 hover:border-[#fcdc58] hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-[#f6e9a7] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-[#253148]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#253148] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
