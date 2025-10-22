"use client"

import React, { useCallback, useEffect, useMemo, useRef, memo } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import styles from "./Gallery.module.css"

export type GalleryItem = {
  src: string     // pode ser /public ou remoto (configure next.config)
  alt: string
  width: number   // dimensões reais da imagem (para next/image)
  height: number
}

export type GalleryProps = {
  items: GalleryItem[]
  /** Altura em px da "linha" do carrossel (desktop). Mobile pode ser reduzido via CSS. */
  height?: number
  /** espaçamento entre slides em px */
  gap?: number
  /** mostrar quantos % do próximo slide (peeking) */
  peek?: number // ex.: 12 (vw)
  /** autoplay em ms; 0 para desligado */
  autoplayMs?: number
  /** loop infinito */
  loop?: boolean
  /** callback ao mudar o índice */
  onSlideChange?: (index: number) => void
}

const Gallery = memo(function Gallery({
  items,
  height = 320,
  gap = 16,
  peek = 12,
  autoplayMs = 3500,
  loop = true,
  onSlideChange,
}: GalleryProps) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const autoplayPlugin = useMemo(() => {
    if (prefersReduced || autoplayMs <= 0) return undefined
    return Autoplay({ delay: autoplayMs, stopOnInteraction: false, stopOnMouseEnter: true })
  }, [autoplayMs, prefersReduced])

  const options: any = useMemo(
    () => ({
      align: "center",
      loop,
      dragFree: false,
      containScroll: "trimSnaps",
      skipSnaps: false,
      inViewThreshold: 0.6,
    }),
    [loop]
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(options, autoplayPlugin ? [autoplayPlugin] : [])

  // Pause quando fora de viewport
  const rootRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!autoplayPlugin || !rootRef.current || typeof window === 'undefined') return
    const el = rootRef.current
    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry.isIntersecting) autoplayPlugin.stop()
        else autoplayPlugin.play()
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [autoplayPlugin])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const onSelect = useCallback(
    (api: any) => {
      const i = api.selectedScrollSnap()
      setSelectedIndex(i)
      onSlideChange?.(i)
    },
    [onSlideChange]
  )

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  // Teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!emblaApi) return
      if (e.key === "ArrowLeft") scrollPrev()
      if (e.key === "ArrowRight") scrollNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [emblaApi, scrollPrev, scrollNext])

  return (
    <div
      ref={rootRef}
      className={styles.root}
      // o container pai controla a altura "comum" dos slides (evita CLS)
      style={{ ["--galleryHeight" as any]: `${height}px`, ["--gap" as any]: `${gap}px`, ["--peek" as any]: `${peek}vw` }}
      aria-roledescription="carousel"
    >
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {items.map((item, idx) => (
            <div className={styles.slide} key={idx} aria-roledescription="slide" aria-label={`${idx + 1} de ${items.length}`}>
              <div className={styles.media}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw"
                  priority={idx === 0}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  style={{ 
                    objectFit: "cover",
                    contain: 'layout style paint'
                  }}
                  loading={idx === 0 ? "eager" : "lazy"}
                  quality={idx === 0 ? 90 : 75}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button className={`${styles.nav} ${styles.left}`} aria-label="Anterior" onClick={scrollPrev}>
        ‹
      </button>
      <button className={`${styles.nav} ${styles.right}`} aria-label="Próximo" onClick={scrollNext}>
        ›
      </button>

      <div className={styles.dots} role="tablist" aria-label="Seleção de slide">
        {items.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={selectedIndex === i}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`${styles.dot} ${selectedIndex === i ? styles.dotActive : ""}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  )
})

export default Gallery
