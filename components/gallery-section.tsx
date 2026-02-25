"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/(Nessun oggetto)/071c40e6-ec03-470f-91fd-5d44d286b82c.jpeg",
    alt: "Performance di danza sul palco",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/(Nessun oggetto)/0aa9242c-9fa5-4264-bce7-035ba8e4c00c.jpeg",
    alt: "Dettaglio dei piedi di una danzatrice",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/(Nessun oggetto)/17fb6852-0ad1-4c10-8469-42121a859dc3.jpeg",
    alt: "Gruppo di danzatori in prova",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/(Nessun oggetto)/2ef23182-f4e7-4c6e-a21c-f32e8df1022d.jpeg",
    alt: "Studio di danza",
    span: "md:col-span-2",
    aspect: "aspect-[2/1]",
  },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <section id="galleria" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
              Galleria
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Momenti catturati
            </h2>
            <div className="mt-2 h-px w-16 bg-accent" />
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightbox(img.src)}
                className={`group relative overflow-hidden ${img.span} ${img.aspect}`}
                aria-label={`Apri ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={80}
                />
                <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs tracking-widest uppercase text-primary-foreground">
                    Visualizza
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/progetti-e-collaborazioni"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-accent transition-colors hover:text-foreground"
            >
              <span>Scopri i nostri progetti</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Visualizzazione foto"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Chiudi"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={lightbox}
              alt="Foto dalla galleria"
              fill
              className="object-contain"
              quality={90}
            />
          </div>
        </div>
      )}
    </>
  )
}
