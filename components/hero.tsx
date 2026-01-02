"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

const carouselImages = [
  "/images/property-1.png",
  "/images/property-2.png",
  "/images/property-3.png",
  "/images/property-4.jpeg",
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section id="inicio" className="relative bg-[#253148] text-white overflow-hidden min-h-[calc(100vh-120px)]">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: currentSlide === index ? 1 : 0,
                zIndex: currentSlide === index ? 1 : 0,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#253148]/90 via-[#253148]/85 to-[#1a2333]/80" />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-20 flex items-center justify-center min-h-[calc(100vh-120px)]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Encontrá la <span className="text-[#fcdc58]">Propiedad Perfecta</span> para Vos
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance">
              Más de 20 años de experiencia en el mercado inmobiliario. Te acompañamos en cada paso del proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#fcdc58] text-[#253148] hover:bg-[#f6e9a7] font-semibold text-lg px-8"
                onClick={() => {
                  const element = document.getElementById('buscador');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                <Search className="mr-2 h-5 w-5" />
                Buscar Propiedades
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#253148] font-semibold text-lg px-8 bg-transparent"
                onClick={() => {
                  const element = document.getElementById('contacto');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Asesoramiento Gratuito
              </Button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-[#fcdc58]" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Separate Section */}
      <section id="stats" className="relative bg-gradient-to-r from-[#1a2333] via-[#253148] to-[#1a2333] text-white py-8 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#fcdc58] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#fcdc58] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Stat 1 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 hover:border-[#fcdc58]/50 transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl md:text-4xl font-black text-[#fcdc58] mb-1 tracking-tight">+500</div>
              <div className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">Propiedades</div>
              <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-[#fcdc58] to-transparent rounded-full" />
            </div>
            
            {/* Stat 2 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 hover:border-[#fcdc58]/50 transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl md:text-4xl font-black text-[#fcdc58] mb-1 tracking-tight">+2000</div>
              <div className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">Clientes Satisfechos</div>
              <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-[#fcdc58] to-transparent rounded-full" />
            </div>
            
            {/* Stat 3 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 hover:border-[#fcdc58]/50 transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl md:text-4xl font-black text-[#fcdc58] mb-1 tracking-tight">20+</div>
              <div className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">Años de Experiencia</div>
              <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-[#fcdc58] to-transparent rounded-full" />
            </div>
            
            {/* Stat 4 */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 hover:border-[#fcdc58]/50 transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl md:text-4xl font-black text-[#fcdc58] mb-1 tracking-tight">100%</div>
              <div className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">Confianza</div>
              <div className="mt-2 h-0.5 w-10 bg-gradient-to-r from-[#fcdc58] to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
