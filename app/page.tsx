"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PropertySearch } from "@/components/property-search"
import { FeaturedProperties } from "@/components/featured-properties"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    // Si hay un hash en la URL, hacer scroll suave a esa sección
    const hash = window.location.hash
    if (hash) {
      // Esperar a que el DOM esté completamente cargado
      const scrollToSection = () => {
        const element = document.querySelector(hash)
        if (element) {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }
      
      // Intentar inmediatamente
      scrollToSection()
      
      // También intentar después de un pequeño delay por si acaso
      setTimeout(scrollToSection, 100)
      setTimeout(scrollToSection, 500)
    }
  }, [pathname])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PropertySearch />
        <FeaturedProperties />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
