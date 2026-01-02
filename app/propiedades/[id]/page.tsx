"use client"

import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyGallery } from "@/components/property-gallery"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Car,
  Calendar,
  ArrowLeft,
  Phone,
  Mail,
  Share2,
  Heart,
} from "lucide-react"
import { getPropertyById } from "@/lib/properties"

export default function PropertyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const propertyId = parseInt(params.id as string)
  const property = getPropertyById(propertyId)

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[#253148] mb-4">Propiedad no encontrada</h1>
          <p className="text-gray-600 mb-6">La propiedad que buscas no existe.</p>
          <Button onClick={() => router.push("/propiedades")} className="bg-[#253148] text-white hover:bg-[#1a2333]">
            Volver a Propiedades
          </Button>
        </main>
        <Footer />
      </div>
    )
  }

  const images = property.images || [property.image]

  // Generar URL de Google Maps embebido
  const mapUrl = property.coordinates
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0!2d${property.coordinates.lng}!3d${property.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzIwLjAiUyA1OMKwMjUnMTQuOCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar&q=${encodeURIComponent(property.location)}`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0!2d-58.3819!3d-34.6036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjAiUyA1OMKwMjInNTQuOCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar&q=${encodeURIComponent(property.location)}`

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb y botón volver */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => router.back()}
                className="text-[#253148] hover:text-[#fcdc58]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-[#bebec0]">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartir
                </Button>
                <Button variant="outline" size="sm" className="border-[#bebec0]">
                  <Heart className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Columna principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Galería de fotos */}
              <PropertyGallery images={images} title={property.title} />

              {/* Información principal */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#253148] mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-5 w-5 mr-2 text-[#fcdc58]" />
                      <span className="text-base sm:text-lg">{property.location}</span>
                    </div>
                  </div>
                  <Badge className="bg-[#fcdc58] text-[#253148] hover:bg-[#fcdc58] text-base sm:text-lg px-4 py-2 self-start">
                    {property.type}
                  </Badge>
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-[#253148] mb-6">
                  {property.price}
                </div>

                {/* Características principales */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 bg-[#f6e9a7]/20 rounded-lg border border-[#fcdc58]/30 mb-6">
                  {property.bedrooms > 0 && (
                    <div className="flex flex-col items-center">
                      <Bed className="h-5 w-5 sm:h-6 sm:w-6 text-[#253148] mb-2" />
                      <span className="text-xs sm:text-sm text-gray-600">Dormitorios</span>
                      <span className="text-base sm:text-lg font-semibold text-[#253148]">
                        {property.bedrooms}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <Bath className="h-5 w-5 sm:h-6 sm:w-6 text-[#253148] mb-2" />
                    <span className="text-xs sm:text-sm text-gray-600">Baños</span>
                    <span className="text-base sm:text-lg font-semibold text-[#253148]">
                      {property.bathrooms}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Square className="h-5 w-5 sm:h-6 sm:w-6 text-[#253148] mb-2" />
                    <span className="text-xs sm:text-sm text-gray-600">Superficie</span>
                    <span className="text-base sm:text-lg font-semibold text-[#253148]">
                      {property.area}m²
                    </span>
                  </div>
                  {property.parking !== undefined && property.parking > 0 && (
                    <div className="flex flex-col items-center">
                      <Car className="h-5 w-5 sm:h-6 sm:w-6 text-[#253148] mb-2" />
                      <span className="text-xs sm:text-sm text-gray-600">Cocheras</span>
                      <span className="text-base sm:text-lg font-semibold text-[#253148]">
                        {property.parking}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Descripción */}
              {property.description && (
                <Card className="border-2 border-[#bebec0]">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#253148] mb-4">
                      Descripción
                    </h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {property.description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Características destacadas */}
              {property.features && property.features.length > 0 && (
                <Card className="border-2 border-[#bebec0]">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#253148] mb-4">
                      Características
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-[#fcdc58] rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Amenidades */}
              {property.amenities && property.amenities.length > 0 && (
                <Card className="border-2 border-[#bebec0]">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-[#253148] mb-4">
                      Amenidades
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map((amenity, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-[#bebec0] text-gray-700 px-3 py-1"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Mapa */}
              <Card className="border-2 border-[#bebec0]">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-[#253148] mb-2">
                      Ubicación
                    </h2>
                    <p className="text-gray-600">{property.location}</p>
                  </div>
                  <div className="w-full h-[300px] sm:h-[400px]">
                    <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-[120px] lg:self-start">
                <Card className="border-2 border-[#fcdc58]">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#253148] mb-2">
                      {property.price}
                    </div>
                    <Badge className="bg-[#fcdc58] text-[#253148] hover:bg-[#fcdc58]">
                      {property.type}
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-[#253148] text-white hover:bg-[#1a2333] font-semibold h-12 text-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Llamar Ahora
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[#253148] text-[#253148] hover:bg-[#253148] hover:text-white font-semibold h-12 text-lg"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[#fcdc58] text-[#253148] hover:bg-[#fcdc58] font-semibold h-12 text-lg"
                    >
                      Solicitar Visita
                    </Button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-[#253148] mb-4">
                      Información de contacto
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="h-4 w-4 text-[#fcdc58]" />
                        <a
                          href="tel:+5491112345678"
                          className="hover:text-[#253148]"
                        >
                          +54 9 11 1234-5678
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Mail className="h-4 w-4 text-[#fcdc58]" />
                        <a
                          href="mailto:info@britos.com"
                          className="hover:text-[#253148]"
                        >
                          info@britos.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {property.year && (
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Año de construcción
                        </span>
                        <span className="font-semibold text-[#253148]">
                          {property.year}
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

