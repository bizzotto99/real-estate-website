"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    location: "Palermo, CABA",
    rating: 5,
    text: "Excelente atención y profesionalismo. Me ayudaron a encontrar mi departamento ideal en menos de un mes. Súper recomendables!",
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Carlos Rodríguez",
    location: "Belgrano, CABA",
    rating: 5,
    text: "El equipo de BRITOS nos acompañó en todo el proceso de venta. Transparentes, honestos y muy eficientes. Los mejores!",
    image: "/professional-man-portrait.png",
  },
  {
    name: "Laura Martínez",
    location: "San Isidro",
    rating: 5,
    text: "Invertí en una propiedad siguiendo sus consejos y fue la mejor decisión. Gran experiencia y conocimiento del mercado.",
    image: "/confident-businesswoman.png",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[#253148] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo Que Dicen <span className="text-[#fcdc58]">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-[#fcdc58]/20 hover:bg-white/15 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#fcdc58]"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#fcdc58] text-[#fcdc58]" />
                  ))}
                </div>
                <p className="text-gray-200 leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
