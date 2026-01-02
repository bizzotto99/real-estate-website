"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="pt-20 pb-16 bg-gradient-to-b from-white to-[#f6e9a7]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#253148] mb-4">
            Contactanos <span className="text-[#fcdc58]">Hoy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos para ayudarte. Dejanos tu consulta y nos comunicaremos a la brevedad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-2 border-[#bebec0]">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#253148] mb-2">Nombre Completo</label>
                      <Input placeholder="Tu nombre" className="bg-[#f6e9a7]/20 border-[#bebec0]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#253148] mb-2">Email</label>
                      <Input type="email" placeholder="tu@email.com" className="bg-[#f6e9a7]/20 border-[#bebec0]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#253148] mb-2">Teléfono</label>
                      <Input placeholder="+54 9 11 1234-5678" className="bg-[#f6e9a7]/20 border-[#bebec0]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#253148] mb-2">Tipo de Consulta</label>
                      <Input placeholder="Compra / Venta / Alquiler" className="bg-[#f6e9a7]/20 border-[#bebec0]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#253148] mb-2">Mensaje</label>
                    <Textarea
                      placeholder="Contanos cómo podemos ayudarte..."
                      rows={6}
                      className="bg-[#f6e9a7]/20 border-[#bebec0]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#253148] text-white hover:bg-[#1a2333] font-semibold"
                  >
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-[#bebec0] bg-[#f6e9a7]/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#fcdc58] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#253148]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253148] mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. Santa Fe 1234
                      <br />
                      C1059 CABA, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#fcdc58] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#253148]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253148] mb-1">Teléfono</h3>
                    <p className="text-gray-600">+54 9 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#fcdc58] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#253148]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253148] mb-1">Email</h3>
                    <p className="text-gray-600">info@britos.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fcdc58] p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#253148]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#253148] mb-1">Horarios</h3>
                    <p className="text-gray-600">
                      Lun - Vie: 9:00 - 19:00
                      <br />
                      Sáb: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
