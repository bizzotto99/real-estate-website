"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { X, Upload, Plus, Trash2, Eye } from "lucide-react"
import { Property } from "@/lib/properties"
import { toast } from "sonner"

export default function AdminPage() {
  const router = useRouter()
  const [properties, setProperties] = useState<Property[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingProperty, setEditingProperty] = useState<Property | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    type: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    year: "",
    parking: "",
  })
  const [features, setFeatures] = useState<string[]>([])
  const [amenities, setAmenities] = useState<string[]>([])
  const [newFeature, setNewFeature] = useState("")
  const [newAmenity, setNewAmenity] = useState("")
  const [images, setImages] = useState<string[]>([])
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" })

  // Cargar propiedades de localStorage al montar
  useEffect(() => {
    const savedProperties = localStorage.getItem("adminProperties")
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties))
    }
  }, [])

  // Guardar propiedades en localStorage
  const saveProperties = (props: Property[]) => {
    localStorage.setItem("adminProperties", JSON.stringify(props))
    setProperties(props)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImages((prev) => [...prev, reader.result as string])
        }
        reader.readAsDataURL(file)
      }
    })
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures((prev) => [...prev, newFeature.trim()])
      setNewFeature("")
    }
  }

  const removeFeature = (index: number) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index))
  }

  const addAmenity = () => {
    if (newAmenity.trim()) {
      setAmenities((prev) => [...prev, newAmenity.trim()])
      setNewAmenity("")
    }
  }

  const removeAmenity = (index: number) => {
    setAmenities((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.price || !formData.location || !formData.type || !formData.propertyType) {
      toast.error("Por favor completa los campos obligatorios")
      return
    }

    if (images.length === 0) {
      toast.error("Por favor sube al menos una imagen")
      return
    }

    const newProperty: Property = {
      id: editingProperty?.id || Date.now(),
      title: formData.title,
      price: formData.price,
      location: formData.location,
      type: formData.type,
      propertyType: formData.propertyType,
      bedrooms: parseInt(formData.bedrooms) || 0,
      bathrooms: parseInt(formData.bathrooms) || 1,
      area: parseInt(formData.area) || 0,
      image: images[0],
      images: images,
      description: formData.description,
      features: features.length > 0 ? features : undefined,
      amenities: amenities.length > 0 ? amenities : undefined,
      year: formData.year ? parseInt(formData.year) : undefined,
      parking: formData.parking ? parseInt(formData.parking) : undefined,
      coordinates:
        coordinates.lat && coordinates.lng
          ? {
              lat: parseFloat(coordinates.lat),
              lng: parseFloat(coordinates.lng),
            }
          : undefined,
    }

    let updatedProperties: Property[]
    if (editingProperty) {
      updatedProperties = properties.map((p) => (p.id === editingProperty.id ? newProperty : p))
      toast.success("Propiedad actualizada correctamente")
    } else {
      updatedProperties = [...properties, newProperty]
      toast.success("Propiedad agregada correctamente")
    }

    saveProperties(updatedProperties)
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: "",
      price: "",
      location: "",
      type: "",
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      description: "",
      year: "",
      parking: "",
    })
    setFeatures([])
    setAmenities([])
    setImages([])
    setCoordinates({ lat: "", lng: "" })
    setEditingProperty(null)
    setShowForm(false)
  }

  const handleEdit = (property: Property) => {
    setEditingProperty(property)
    setFormData({
      title: property.title,
      price: property.price,
      location: property.location,
      type: property.type,
      propertyType: property.propertyType,
      bedrooms: property.bedrooms.toString(),
      bathrooms: property.bathrooms.toString(),
      area: property.area.toString(),
      description: property.description || "",
      year: property.year?.toString() || "",
      parking: property.parking?.toString() || "",
    })
    setFeatures(property.features || [])
    setAmenities(property.amenities || [])
    setImages(property.images || [property.image])
    setCoordinates(
      property.coordinates
        ? { lat: property.coordinates.lat.toString(), lng: property.coordinates.lng.toString() }
        : { lat: "", lng: "" }
    )
    setShowForm(true)
  }

  const handleDelete = (id: number) => {
    if (confirm("¿Estás seguro de que deseas eliminar esta propiedad?")) {
      const updatedProperties = properties.filter((p) => p.id !== id)
      saveProperties(updatedProperties)
      toast.success("Propiedad eliminada correctamente")
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#253148] mb-2">Panel de Administración</h1>
            <p className="text-gray-600">Gestiona las propiedades de tu inmobiliaria</p>
          </div>
          <Button
            onClick={() => {
              resetForm()
              setShowForm(true)
            }}
            className="bg-[#253148] text-white hover:bg-[#1a2333]"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nueva Propiedad
          </Button>
        </div>

        {showForm && (
          <Card className="mb-8 border-2 border-[#fcdc58]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#253148]">
                {editingProperty ? "Editar Propiedad" : "Nueva Propiedad"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Información Básica */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title" className="text-[#253148] font-semibold">
                      Título * <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Ej: Casa Moderna en Palermo"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="price" className="text-[#253148] font-semibold">
                      Precio * <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="price"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="Ej: USD 450.000"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-[#253148] font-semibold">
                      Ubicación * <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Ej: Palermo, CABA"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="type" className="text-[#253148] font-semibold">
                      Tipo de Operación * <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => setFormData({ ...formData, type: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Venta">Venta</SelectItem>
                        <SelectItem value="Alquiler">Alquiler</SelectItem>
                        <SelectItem value="Alquiler Temporal">Alquiler Temporal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="propertyType" className="text-[#253148] font-semibold">
                      Tipo de Propiedad * <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Casa">Casa</SelectItem>
                        <SelectItem value="Departamento">Departamento</SelectItem>
                        <SelectItem value="Loft">Loft</SelectItem>
                        <SelectItem value="Local">Local Comercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="bedrooms" className="text-[#253148] font-semibold">
                      Dormitorios
                    </Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                      placeholder="0"
                      className="mt-1"
                      min="0"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bathrooms" className="text-[#253148] font-semibold">
                      Baños * <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                      placeholder="1"
                      className="mt-1"
                      min="1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="area" className="text-[#253148] font-semibold">
                      Superficie (m²) * <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="area"
                      type="number"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="Ej: 180"
                      className="mt-1"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="year" className="text-[#253148] font-semibold">
                      Año de Construcción
                    </Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="Ej: 2020"
                      className="mt-1"
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                  </div>

                  <div>
                    <Label htmlFor="parking" className="text-[#253148] font-semibold">
                      Cocheras
                    </Label>
                    <Input
                      id="parking"
                      type="number"
                      value={formData.parking}
                      onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
                      placeholder="0"
                      className="mt-1"
                      min="0"
                    />
                  </div>
                </div>

                {/* Descripción */}
                <div>
                  <Label htmlFor="description" className="text-[#253148] font-semibold">
                    Descripción
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe la propiedad..."
                    rows={6}
                    className="mt-1"
                  />
                </div>

                {/* Coordenadas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="lat" className="text-[#253148] font-semibold">
                      Latitud (opcional)
                    </Label>
                    <Input
                      id="lat"
                      type="number"
                      step="any"
                      value={coordinates.lat}
                      onChange={(e) => setCoordinates({ ...coordinates, lat: e.target.value })}
                      placeholder="Ej: -34.5889"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lng" className="text-[#253148] font-semibold">
                      Longitud (opcional)
                    </Label>
                    <Input
                      id="lng"
                      type="number"
                      step="any"
                      value={coordinates.lng}
                      onChange={(e) => setCoordinates({ ...coordinates, lng: e.target.value })}
                      placeholder="Ej: -58.4208"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Características */}
                <div>
                  <Label className="text-[#253148] font-semibold">Características</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      placeholder="Ej: Jardín privado"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addFeature()
                        }
                      }}
                    />
                    <Button type="button" onClick={addFeature} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-[#f6e9a7]/30 px-3 py-1 rounded-full"
                      >
                        <span className="text-sm">{feature}</span>
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenidades */}
                <div>
                  <Label className="text-[#253148] font-semibold">Amenidades</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      value={newAmenity}
                      onChange={(e) => setNewAmenity(e.target.value)}
                      placeholder="Ej: Piscina"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addAmenity()
                        }
                      }}
                    />
                    <Button type="button" onClick={addAmenity} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-[#f6e9a7]/30 px-3 py-1 rounded-full"
                      >
                        <span className="text-sm">{amenity}</span>
                        <button
                          type="button"
                          onClick={() => removeAmenity(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Imágenes */}
                <div>
                  <Label className="text-[#253148] font-semibold">
                    Imágenes * <span className="text-red-500">*</span>
                  </Label>
                  <div className="mt-1">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click para subir</span> o arrastra las imágenes
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Botones */}
                <div className="flex gap-4">
                  <Button type="submit" className="bg-[#253148] text-white hover:bg-[#1a2333]">
                    {editingProperty ? "Actualizar Propiedad" : "Guardar Propiedad"}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Lista de Propiedades */}
        <div>
          <h2 className="text-2xl font-bold text-[#253148] mb-4">
            Propiedades Guardadas ({properties.length})
          </h2>
          {properties.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-500">No hay propiedades guardadas aún.</p>
                <p className="text-sm text-gray-400 mt-2">
                  Las propiedades se guardan en el navegador y se eliminan al cerrar la sesión.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => router.push(`/propiedades/${property.id}`)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-[#253148] mb-2">{property.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                    <p className="text-lg font-bold text-[#253148] mb-4">{property.price}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(property)}
                        className="flex-1"
                      >
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(property.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}



