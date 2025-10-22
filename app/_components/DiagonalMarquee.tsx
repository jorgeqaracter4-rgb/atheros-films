'use client'

import { useEffect, useRef, useState, memo } from 'react'
import styles from './DiagonalMarquee.module.css'

type DiagonalMarqueeProps = {
  text: string                 // texto base a ser repetido (inclua • no final)
  angleDeg?: number            // ângulo da faixa (ex.: -6)
  height?: number              // altura da faixa em px (ex.: 64)
  ribbonBg?: string            // cor/gradient de fundo da faixa
  textColor?: string           // cor do texto
  offsetY?: number             // deslocamento vertical relativo ao container pai
  speed?: number               // px horizontais por px de scroll (ex.: 0.35)
  blur?: number                // px de blur para a "faixa de fundo"
  boxShadow?: string           // shadow opcional
  zIndex?: number              // camada
  borderThickness?: number     // px da borda sup/inf para "fita"
  borderColor?: string         // cor da borda
  className?: string           // classe extra opcional
}

const DiagonalMarquee = memo(function DiagonalMarquee({
  text,
  angleDeg = -6,
  height = 64,
  ribbonBg = 'rgba(32,32,32,0.95)',
  textColor = '#f5f5f5',
  offsetY = 0,
  speed = 0.35,
  blur = 0,
  boxShadow,
  zIndex = 10,
  borderThickness = 0,
  borderColor = 'transparent',
  className = ''
}: DiagonalMarqueeProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const unitRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const [unitWidth, setUnitWidth] = useState(0)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Detecta prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Mede largura da unidade de texto com ResizeObserver (mobile optimized)
  useEffect(() => {
    if (!unitRef.current || typeof window === 'undefined') return

    let timeoutId: NodeJS.Timeout | null = null
    
    const resizeObserver = new ResizeObserver((entries) => {
      // Throttle updates for mobile performance
      if (timeoutId) clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(() => {
            for (const entry of entries) {
              setUnitWidth(entry.contentRect.width)
            }
          }, { timeout: 100 })
        } else {
          requestAnimationFrame(() => {
            for (const entry of entries) {
              setUnitWidth(entry.contentRect.width)
            }
          })
        }
      }, 16) // ~60fps throttling
    })

    resizeObserver.observe(unitRef.current)
    return () => {
      resizeObserver.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [text])

  // Animação de scroll com requestAnimationFrame
  useEffect(() => {
    if (isReducedMotion || !trackRef.current || !unitWidth || typeof window === 'undefined') return

    let lastScrollY = 0
    let isAnimating = false

    const updateTransform = () => {
      if (!trackRef.current || !isAnimating) return

      const scrollY = window.scrollY
      const deltaY = scrollY - lastScrollY
      const translateX = (scrollY * speed) % unitWidth

      // Usa translate3d para GPU acceleration
      trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`
      lastScrollY = scrollY

      if (isAnimating) {
        animationRef.current = requestAnimationFrame(updateTransform)
      }
    }

    const handleScroll = () => {
      if (!isAnimating) {
        isAnimating = true
        animationRef.current = requestAnimationFrame(updateTransform)
      }
    }

    // Usa passive: true para melhor performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Inicia animação
    updateTransform()

    return () => {
      isAnimating = false
      window.removeEventListener('scroll', handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, unitWidth, isReducedMotion])

  // Gera unidades de texto para loop infinito
  const generateUnits = () => {
    const units = []
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const minUnits = Math.ceil((viewportWidth * 1.4) / (unitWidth || 200)) + 2
    
    for (let i = 0; i < minUnits; i++) {
      units.push(
        <div key={i} className={styles.unit} style={{ color: textColor }}>
          {text}
        </div>
      )
    }
    return units
  }

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${className}`}
      style={{
        transform: `rotate(${angleDeg}deg)`,
        height: `${height}px`,
        top: `${offsetY}px`,
        zIndex,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        pointerEvents: 'none', // Não bloqueia cliques
        contain: 'layout style paint', // Previne layout shift
        willChange: 'transform' // Otimização GPU
      }}
      aria-hidden="true"
    >
      <div
        className={styles.ribbon}
        style={{
          background: ribbonBg,
          height: `${height}px`,
          borderTop: borderThickness > 0 ? `${borderThickness}px solid ${borderColor}` : 'none',
          borderBottom: borderThickness > 0 ? `${borderThickness}px solid ${borderColor}` : 'none',
          boxShadow
        }}
      >
        <div
          ref={trackRef}
          className={styles.track}
          style={{
            willChange: 'transform' // Otimização GPU
          }}
        >
          {generateUnits()}
          {/* Unidade de referência para medir largura */}
          <div
            ref={unitRef}
            className={styles.unit}
            style={{
              position: 'absolute',
              visibility: 'hidden',
              color: textColor
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  )
})

export default DiagonalMarquee
