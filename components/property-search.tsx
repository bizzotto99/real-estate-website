"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function PropertySearch() {
  const router = useRouter()
  const [filters, setFilters] = useState({
    operationType: "",
    propertyType: "",
    location: "",
    maxPrice: "",
  })

  const handleSearch = () => {
    // Construir los parámetros de búsqueda
    const params = new URLSearchParams()
    
    if (filters.operationType) {
      params.set("tipo", filters.operationType)
    }
    if (filters.propertyType) {
      params.set("propiedad", filters.propertyType)
    }
    if (filters.location) {
      params.set("ubicacion", filters.location)
    }
    if (filters.maxPrice) {
      params.set("precio", filters.maxPrice)
    }

    // Navegar a la página de propiedades con los filtros
    const queryString = params.toString()
    router.push(`/propiedades${queryString ? `?${queryString}` : ""}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <section id="buscador" className="py-12 bg-white relative -mt-12 z-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 border-t-4 border-[#fcdc58]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Select
              value={filters.operationType}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, operationType: value }))}
            >
              <SelectTrigger className="bg-[#f6e9a7]/30 border-[#bebec0]">
                <SelectValue placeholder="Tipo de Operación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="venta">Venta</SelectItem>
                <SelectItem value="alquiler">Alquiler</SelectItem>
                <SelectItem value="temporal">Alquiler Temporal</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.propertyType}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, propertyType: value }))}
            >
              <SelectTrigger className="bg-[#f6e9a7]/30 border-[#bebec0]">
                <SelectValue placeholder="Tipo de Propiedad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="departamento">Departamento</SelectItem>
                <SelectItem value="loft">Loft</SelectItem>
                <SelectItem value="local">Local Comercial</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.location}
              onValueChange={(value) => setFilters((prev) => ({ ...prev, location: value }))}
            >
              <SelectTrigger className="bg-[#f6e9a7]/30 border-[#bebec0]">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
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
              onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
              onKeyPress={handleKeyPress}
            />

            <Button
              onClick={handleSearch}
              className="bg-[#253148] text-white hover:bg-[#1a2333] font-semibold"
            >
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
