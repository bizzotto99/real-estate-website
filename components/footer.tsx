import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#253148] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="/images/logo-britos.png"
              alt="BRITOS Inmobiliaria"
              width={120}
              height={60}
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tu socio confiable en el mercado inmobiliario. Más de 20 años haciendo realidad el sueño de la casa
              propia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#fcdc58] hover:text-[#253148] p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#fcdc58] hover:text-[#253148] p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#fcdc58] hover:text-[#253148] p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fcdc58]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#propiedades" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Propiedades
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fcdc58]">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Compra y Venta
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Alquileres
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Tasaciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Inversiones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                  Asesoramiento Legal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-[#fcdc58]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#fcdc58] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Av. Santa Fe 1234, CABA, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#fcdc58]" />
                <span className="text-gray-300">+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#fcdc58]" />
                <span className="text-gray-300">info@britos.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#fcdc58]/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} BRITOS Inmobiliaria. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-300 hover:text-[#fcdc58] transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
