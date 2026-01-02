"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-gray-100">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${title} - Imagen ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-10"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-10"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        <Button
          variant="outline"
          className="absolute top-4 right-4 bg-white/90 hover:bg-white z-10"
          onClick={() => setIsFullscreen(true)}
        >
          Ver todas las fotos
        </Button>
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-[#fcdc58] ring-2 ring-[#fcdc58]"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white z-10"
            onClick={() => setIsFullscreen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} - Imagen ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

