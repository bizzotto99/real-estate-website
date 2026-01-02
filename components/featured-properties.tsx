import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, MapPin, Heart } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Casa Moderna en Palermo",
    price: "USD 450.000",
    location: "Palermo, CABA",
    type: "Venta",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "/modern-house-exterior.png",
  },
  {
    id: 2,
    title: "Departamento Luminoso",
    price: "USD 1.200/mes",
    location: "Belgrano, CABA",
    type: "Alquiler",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    image: "/modern-apartment-living-room.png",
  },
  {
    id: 3,
    title: "Penthouse con Terraza",
    price: "USD 650.000",
    location: "Puerto Madero, CABA",
    type: "Venta",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: "/luxury-penthouse-terrace.png",
  },
  {
    id: 4,
    title: "Casa Quinta en Nordelta",
    price: "USD 580.000",
    location: "Nordelta, Tigre",
    type: "Venta",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: "/suburban-house-garden.png",
  },
  {
    id: 5,
    title: "Loft Industrial",
    price: "USD 1.500/mes",
    location: "San Telmo, CABA",
    type: "Alquiler",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    image: "/industrial-loft-interior.jpg",
  },
  {
    id: 6,
    title: "Casa en Country Club",
    price: "USD 720.000",
    location: "San Isidro, Zona Norte",
    type: "Venta",
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    image: "/luxury-country-club-house.jpg",
  },
]

export function FeaturedProperties() {
  return (
    <section id="propiedades" className="py-20 bg-gradient-to-b from-white to-[#f6e9a7]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#253148] mb-4">
            Propiedades <span className="text-[#fcdc58]">Destacadas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorá nuestra selección de propiedades premium seleccionadas especialmente para vos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#fcdc58]"
            >
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-56 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#fcdc58] text-[#253148] hover:bg-[#fcdc58]">
                  {property.type}
                </Badge>
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                  <Heart className="h-5 w-5 text-[#253148]" />
                </button>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#253148] mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{property.area}m²</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#253148]">{property.price}</div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/propiedades/${property.id}`} className="w-full">
                  <Button className="w-full bg-[#253148] text-white hover:bg-[#1a2333]">Ver Detalles</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/propiedades">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#253148] text-[#253148] hover:bg-[#253148] hover:text-white font-semibold bg-transparent"
            >
              Ver Todas las Propiedades
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
