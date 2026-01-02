export interface Property {
  id: number
  title: string
  price: string
  location: string
  type: string
  propertyType: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  images?: string[]
  description?: string
  coordinates?: {
    lat: number
    lng: number
  }
  features?: string[]
  year?: number
  parking?: number
  amenities?: string[]
}

export const allProperties: Property[] = [
  {
    id: 1,
    title: "Casa Moderna en Palermo",
    price: "USD 450.000",
    location: "Palermo, CABA",
    type: "Venta",
    propertyType: "Casa",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "/modern-house-exterior.png",
    images: [
      "/modern-house-exterior.png",
      "/modern-apartment-living-room.png",
      "/luxury-penthouse-terrace.png",
      "/suburban-house-garden.png",
    ],
    description: "Hermosa casa moderna ubicada en el corazón de Palermo. Esta propiedad cuenta con amplios espacios, diseño contemporáneo y excelente iluminación natural. Perfecta para familias que buscan comodidad y estilo en una de las mejores zonas de Buenos Aires. La propiedad incluye jardín privado, cocina integrada con comedor, living amplio y tres cómodos dormitorios. Excelente conectividad y cercanía a parques, restaurantes y servicios.",
    coordinates: {
      lat: -34.5889,
      lng: -58.4208,
    },
    features: [
      "Jardín privado",
      "Cocina integrada",
      "Living amplio",
      "Diseño contemporáneo",
      "Excelente iluminación",
    ],
    year: 2020,
    parking: 2,
    amenities: ["Jardín", "Terraza", "Cocina integrada", "Living amplio"],
  },
  {
    id: 2,
    title: "Departamento Luminoso",
    price: "USD 1.200/mes",
    location: "Belgrano, CABA",
    type: "Alquiler",
    propertyType: "Departamento",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    image: "/modern-apartment-living-room.png",
    images: [
      "/modern-apartment-living-room.png",
      "/modern-house-exterior.png",
      "/luxury-penthouse-terrace.png",
    ],
    description: "Departamento luminoso y acogedor en el barrio de Belgrano. Ideal para profesionales o parejas jóvenes. Cuenta con excelente distribución, balcón con vista y todos los servicios necesarios. El edificio cuenta con seguridad 24hs, ascensor y espacios comunes bien mantenidos. Ubicado cerca de transporte público, shoppings y zonas comerciales.",
    coordinates: {
      lat: -34.5627,
      lng: -58.4586,
    },
    features: [
      "Balcón con vista",
      "Seguridad 24hs",
      "Ascensor",
      "Excelente distribución",
    ],
    year: 2018,
    parking: 0,
    amenities: ["Balcón", "Seguridad 24hs", "Ascensor"],
  },
  {
    id: 3,
    title: "Penthouse con Terraza",
    price: "USD 650.000",
    location: "Puerto Madero, CABA",
    type: "Venta",
    propertyType: "Departamento",
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: "/luxury-penthouse-terrace.png",
    images: [
      "/luxury-penthouse-terrace.png",
      "/modern-house-exterior.png",
      "/modern-apartment-living-room.png",
      "/suburban-house-garden.png",
      "/luxury-country-club-house.jpg",
    ],
    description: "Exclusivo penthouse en Puerto Madero con terraza privada y vistas panorámicas al río. Esta propiedad de lujo ofrece lo mejor en diseño y comodidades. Cuenta con cuatro amplios dormitorios en suite, cocina gourmet, living de doble altura y una terraza espectacular con jacuzzi. El edificio cuenta con todas las amenidades: gimnasio, piscina, solárium y seguridad privada.",
    coordinates: {
      lat: -34.6108,
      lng: -58.3631,
    },
    features: [
      "Terraza privada",
      "Vistas al río",
      "Cocina gourmet",
      "Living de doble altura",
      "Jacuzzi",
    ],
    year: 2022,
    parking: 3,
    amenities: ["Terraza", "Gimnasio", "Piscina", "Solárium", "Jacuzzi", "Seguridad privada"],
  },
  {
    id: 4,
    title: "Casa Quinta en Nordelta",
    price: "USD 580.000",
    location: "Nordelta, Tigre",
    type: "Venta",
    propertyType: "Casa",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: "/suburban-house-garden.png",
    images: [
      "/suburban-house-garden.png",
      "/modern-house-exterior.png",
      "/luxury-penthouse-terrace.png",
      "/luxury-country-club-house.jpg",
    ],
    description: "Hermosa casa quinta en Nordelta, ideal para disfrutar de la naturaleza y la tranquilidad. La propiedad cuenta con amplio jardín, piscina, quincho con parrilla y espacios para entretenimiento. Perfecta para familias que buscan un estilo de vida relajado sin alejarse demasiado de la ciudad. La casa tiene excelente distribución con espacios amplios y mucha luz natural.",
    coordinates: {
      lat: -34.3989,
      lng: -58.6531,
    },
    features: [
      "Amplio jardín",
      "Piscina",
      "Quincho con parrilla",
      "Espacios amplios",
      "Mucha luz natural",
    ],
    year: 2019,
    parking: 4,
    amenities: ["Jardín", "Piscina", "Quincho", "Parrilla", "Terraza"],
  },
  {
    id: 5,
    title: "Loft Industrial",
    price: "USD 1.500/mes",
    location: "San Telmo, CABA",
    type: "Alquiler",
    propertyType: "Loft",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    image: "/industrial-loft-interior.jpg",
    images: [
      "/industrial-loft-interior.jpg",
      "/modern-apartment-living-room.png",
      "/modern-house-exterior.png",
    ],
    description: "Loft industrial único en el histórico barrio de San Telmo. Espacio abierto con techos altos, vigas a la vista y grandes ventanales. Perfecto para artistas, diseñadores o quienes buscan un espacio con carácter. La propiedad combina el encanto histórico del barrio con comodidades modernas.",
    coordinates: {
      lat: -34.6208,
      lng: -58.3731,
    },
    features: [
      "Techos altos",
      "Vigas a la vista",
      "Grandes ventanales",
      "Espacio abierto",
      "Estilo industrial",
    ],
    year: 1920,
    parking: 0,
    amenities: ["Techos altos", "Ventilación natural", "Espacio abierto"],
  },
  {
    id: 6,
    title: "Casa en Country Club",
    price: "USD 720.000",
    location: "San Isidro, Zona Norte",
    type: "Venta",
    propertyType: "Casa",
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    image: "/luxury-country-club-house.jpg",
    images: [
      "/luxury-country-club-house.jpg",
      "/modern-house-exterior.png",
      "/suburban-house-garden.png",
      "/luxury-penthouse-terrace.png",
    ],
    description: "Magnífica casa en country club con todas las comodidades. Esta propiedad de lujo cuenta con cinco dormitorios, cuatro baños completos, cocina gourmet, living de doble altura, biblioteca, gimnasio privado y piscina. El jardín es amplio y cuenta con parrilla y quincho. Acceso a todas las amenidades del country: canchas de tenis, golf, club house y seguridad 24hs.",
    coordinates: {
      lat: -34.4731,
      lng: -58.5208,
    },
    features: [
      "Gimnasio privado",
      "Biblioteca",
      "Living de doble altura",
      "Cocina gourmet",
      "Piscina",
    ],
    year: 2021,
    parking: 5,
    amenities: ["Gimnasio", "Biblioteca", "Piscina", "Quincho", "Jardín amplio", "Seguridad 24hs"],
  },
  {
    id: 7,
    title: "Departamento en Recoleta",
    price: "USD 380.000",
    location: "Recoleta, CABA",
    type: "Venta",
    propertyType: "Departamento",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    image: "/modern-house-exterior.png",
    images: [
      "/modern-house-exterior.png",
      "/modern-apartment-living-room.png",
      "/luxury-penthouse-terrace.png",
    ],
    description: "Elegante departamento en Recoleta, uno de los barrios más exclusivos de Buenos Aires. La propiedad cuenta con dos dormitorios, dos baños completos, cocina integrada y balcón. El edificio es de categoría con todas las comodidades: seguridad, conserjería y espacios comunes impecables. Excelente ubicación cerca de restaurantes, museos y zonas comerciales.",
    coordinates: {
      lat: -34.5889,
      lng: -58.3931,
    },
    features: [
      "Balcón",
      "Seguridad",
      "Conserjería",
      "Cocina integrada",
      "Excelente ubicación",
    ],
    year: 2017,
    parking: 1,
    amenities: ["Balcón", "Seguridad", "Conserjería"],
  },
  {
    id: 8,
    title: "Casa en Barrio Cerrado",
    price: "USD 2.000/mes",
    location: "Pilar, Zona Oeste",
    type: "Alquiler",
    propertyType: "Casa",
    bedrooms: 3,
    bathrooms: 2,
    area: 200,
    image: "/suburban-house-garden.png",
    images: [
      "/suburban-house-garden.png",
      "/modern-house-exterior.png",
      "/luxury-country-club-house.jpg",
    ],
    description: "Casa en barrio cerrado en Pilar, ideal para familias. La propiedad cuenta con tres dormitorios, dos baños, cocina con comedor diario, living amplio y jardín con parrilla. El barrio cuenta con seguridad, espacios verdes, canchas deportivas y piscina comunitaria. Perfecto para quienes buscan tranquilidad y seguridad.",
    coordinates: {
      lat: -34.4731,
      lng: -58.9208,
    },
    features: [
      "Barrio cerrado",
      "Seguridad",
      "Jardín con parrilla",
      "Espacios verdes",
      "Piscina comunitaria",
    ],
    year: 2015,
    parking: 2,
    amenities: ["Jardín", "Parrilla", "Seguridad", "Espacios verdes"],
  },
  {
    id: 9,
    title: "Local Comercial en Microcentro",
    price: "USD 850/mes",
    location: "Microcentro, CABA",
    type: "Alquiler",
    propertyType: "Local",
    bedrooms: 0,
    bathrooms: 1,
    area: 120,
    image: "/modern-apartment-living-room.png",
    images: [
      "/modern-apartment-living-room.png",
      "/modern-house-exterior.png",
    ],
    description: "Local comercial en excelente ubicación en Microcentro. Espacio amplio y luminoso, ideal para oficina, comercio o showroom. Cuenta con baño, buena iluminación natural y excelente visibilidad. Ubicado en zona de alto tránsito peatonal y vehicular, con fácil acceso y transporte público cercano.",
    coordinates: {
      lat: -34.6036,
      lng: -58.3819,
    },
    features: [
      "Excelente ubicación",
      "Alto tránsito",
      "Buena visibilidad",
      "Iluminación natural",
      "Fácil acceso",
    ],
    year: 2010,
    parking: 0,
    amenities: ["Iluminación natural", "Buena visibilidad"],
  },
]

export function getPropertyById(id: number): Property | undefined {
  // Primero buscar en localStorage
  const savedProperties = typeof window !== "undefined" ? localStorage.getItem("adminProperties") : null
  if (savedProperties) {
    const adminProperties: Property[] = JSON.parse(savedProperties)
    const adminProperty = adminProperties.find((p) => p.id === id)
    if (adminProperty) return adminProperty
  }
  
  // Si no está en localStorage, buscar en las propiedades hardcodeadas
  return allProperties.find((property) => property.id === id)
}

export function getAllProperties(): Property[] {
  // Combinar propiedades hardcodeadas con las de localStorage
  const savedProperties = typeof window !== "undefined" ? localStorage.getItem("adminProperties") : null
  const adminProperties: Property[] = savedProperties ? JSON.parse(savedProperties) : []
  
  // Combinar ambas listas (las de admin primero para que tengan prioridad)
  return [...adminProperties, ...allProperties]
}

