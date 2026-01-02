"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Propiedades", href: "/propiedades" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#253148] text-white shadow-lg">
      {/* Top Bar */}
      <div className="border-b border-[#fcdc58]/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end gap-6 text-sm">
            <a href="tel:+5491112345678" className="flex items-center gap-2 hover:text-[#fcdc58] transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+54 9 11 1234-5678</span>
            </a>
            <a href="mailto:info@britos.com" className="flex items-center gap-2 hover:text-[#fcdc58] transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@britos.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-britos.png"
              alt="BRITOS Inmobiliaria"
              width={120}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith('#')
              if (isHashLink) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      // Si no estamos en la página principal, navegar primero
                      if (pathname !== '/') {
                        router.push(`/${link.href}`)
                      } else {
                        // Si estamos en la página principal, hacer scroll suave
                        const element = document.querySelector(link.href)
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                        }
                      }
                    }}
                    className="text-white hover:text-[#fcdc58] font-medium transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#fcdc58] font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            })}
            <Button className="bg-[#fcdc58] text-[#253148] hover:bg-[#f6e9a7] font-semibold">Publicar Propiedad</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

          {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#253148] border-t border-[#fcdc58]/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isHashLink = link.href.startsWith('#')
              if (isHashLink) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setMobileMenuOpen(false)
                      // Si no estamos en la página principal, navegar primero
                      if (pathname !== '/') {
                        router.push(`/${link.href}`)
                      } else {
                        // Si estamos en la página principal, hacer scroll suave
                        const element = document.querySelector(link.href)
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                        }
                      }
                    }}
                    className="text-white hover:text-[#fcdc58] font-medium py-2 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#fcdc58] font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
            <Button className="bg-[#fcdc58] text-[#253148] hover:bg-[#f6e9a7] font-semibold w-full">
              Publicar Propiedad
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
