"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bed, Bath, Square, MapPin, Heart, Search, Filter } from "lucide-react"
import { getAllProperties } from "@/lib/properties"

export default function PropiedadesPage() {
  const searchParams = useSearchParams()
  const [allProperties, setAllProperties] = useState(getAllProperties())
  const [filters, setFilters] = useState({
    operationType: "all",
    propertyType: "all",
    location: "all",
    maxPrice: "",
  })
  const [showFilters, setShowFilters] = useState(true)

  // Recargar propiedades cuando cambie localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setAllProperties(getAllProperties())
    }
    
    // Escuchar cambios en localStorage (solo funciona entre ventanas diferentes)
    window.addEventListener("storage", handleStorageChange)
    
    // También verificar periódicamente (por si el cambio fue en la misma ventana)
    const interval = setInterval(() => {
      const newProperties = getAllProperties()
      if (newProperties.length !== allProperties.length) {
        setAllProperties(newProperties)
      }
    }, 500)
    
    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [allProperties.length])

  // Leer parámetros de la URL al cargar la página
  useEffect(() => {
    const tipo = searchParams.get("tipo")
    const propiedad = searchParams.get("propiedad")
    const ubicacion = searchParams.get("ubicacion")
    const precio = searchParams.get("precio")

    if (tipo || propiedad || ubicacion || precio) {
      setFilters({
        operationType: tipo || "all",
        propertyType: propiedad || "all",
        location: ubicacion || "all",
        maxPrice: precio || "",
      })
    }
  }, [searchParams])

  const filteredProperties = allProperties.filter((property) => {
    if (filters.operationType && filters.operationType !== "all" && property.type.toLowerCase() !== filters.operationType.toLowerCase()) {
      return false
    }
    if (filters.propertyType && filters.propertyType !== "all" && property.propertyType.toLowerCase() !== filters.propertyType.toLowerCase()) {
      return false
    }
    if (filters.location && filters.location !== "all") {
      const locationLower = property.location.toLowerCase()
      const filterLower = filters.location.toLowerCase()
      if (!locationLower.includes(filterLower)) {
        return false
      }
    }
    if (filters.maxPrice) {
      const maxPriceNum = parseInt(filters.maxPrice)
      const propertyPrice = property.price.replace(/[^\d]/g, "")
      const priceNum = parseInt(propertyPrice)
      if (priceNum > maxPriceNum) {
        return false
      }
    }
    return true
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      operationType: "all",
      propertyType: "all",
      location: "all",
      maxPrice: "",
    })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Filters Section */}
        <section className="py-12 bg-white relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#253148] flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros de Búsqueda
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                {showFilters ? "Ocultar" : "Mostrar"} Filtros
              </Button>
            </div>
            {showFilters && (
              <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 border-t-4 border-[#fcdc58]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <Select value={filters.operationType === "all" ? undefined : filters.operationType} onValueChange={(value) => handleFilterChange("operationType", value)}>
                    <SelectTrigger className="bg-[#f6e9a7]/30 border-[#bebec0]">
                      <SelectValue placeholder="Tipo de Operación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="venta">Venta</SelectItem>
                      <SelectItem value="alquiler">Alquiler</SelectItem>
                      <SelectItem value="temporal">Alquiler Temporal</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filters.propertyType === "all" ? undefined : filters.propertyType} onValueChange={(value) => handleFilterChange("propertyType", value)}>
                    <SelectTrigger className="bg-[#f6e9a7]/30 border-[#bebec0]">
                      <SelectValue placeholder="Tipo de Propiedad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="departamento">Departamento</SelectItem>
                      <SelectItem value="loft">Loft</SelectItem>
                      <SelectItem value="local">Local Comercial</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={filters.location === "all" ? undefined : filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                    <SelectTrigger className="bg-[#f6e9a7]/30 border-[#bebec0]">
                      <SelectValue placeholder="Ubicación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="caba">CABA</SelectItem>
                      <SelectItem value="zona norte">Zona Norte</SelectItem>
                      <SelectItem value="zona sur">Zona Sur</SelectItem>
                      <SelectItem value="zona oeste">Zona Oeste</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    type="number"
                    placeholder="Precio máximo"
                    className="bg-[#f6e9a7]/30 border-[#bebec0]"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                  />

                  <div className="flex gap-2">
                    <Button
                      className="bg-[#253148] text-white hover:bg-[#1a2333] font-semibold flex-1"
                      onClick={() => {}}
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Buscar
                    </Button>
                     {(filters.operationType !== "all" || filters.propertyType !== "all" || filters.location !== "all" || filters.maxPrice) && (
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="border-[#bebec0]"
                      >
                        Limpiar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12 bg-gradient-to-b from-white to-[#f6e9a7]/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#253148] mb-2">
                  {filteredProperties.length} {filteredProperties.length === 1 ? "Propiedad Encontrada" : "Propiedades Encontradas"}
                </h2>
                <p className="text-gray-600">
                  {filteredProperties.length === allProperties.length
                    ? "Mostrando todas las propiedades disponibles"
                    : `Mostrando resultados filtrados de ${allProperties.length} propiedades`}
                </p>
              </div>
            </div>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#253148] mb-2">No se encontraron propiedades</h3>
                <p className="text-gray-600 mb-6">Intenta ajustar los filtros para encontrar más resultados.</p>
                <Button onClick={clearFilters} className="bg-[#253148] text-white hover:bg-[#1a2333]">
                  Limpiar Filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
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
                        {property.bedrooms > 0 && (
                          <div className="flex items-center gap-1">
                            <Bed className="h-4 w-4" />
                            <span>{property.bedrooms}</span>
                          </div>
                        )}
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
            )}
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

