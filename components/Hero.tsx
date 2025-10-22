'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

export default function Hero() {
  const words = useMemo(() => ['engajam', 'impactam', 'conectam'], [])
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  // Carrossel de logos
  const logos = [
    { name: 'Jardins de Monet', src: '/partners/jardins-de-monet.svg', alt: 'Jardins de Monet' },
    { name: 'Sinco', src: '/partners/sinco.svg', alt: 'Sinco' },
    { name: 'Reserva Majuí', src: '/partners/reserva-majui.svg', alt: 'Reserva Majuí' },
    { name: 'Biomecânica Brasil', src: '/partners/biomecanica-brasil.svg', alt: 'Biomecânica Brasil' },
    { name: 'Atheros Creative', src: '/partners/atheros-creative.svg', alt: 'Atheros Creative' },
    { name: 'Lanchero Alimentos', src: '/partners/lanchero-alimentos.svg', alt: 'Lanchero Alimentos' },
    { name: 'Don Cheff Pizza', src: '/partners/don-cheff-pizza.svg', alt: 'Don Cheff Pizza' },
    { name: 'Club 88 Barbershop', src: '/partners/club-88-barbershop.svg', alt: 'Club 88 Barbershop' }
  ]
  const [currentLogoSet, setCurrentLogoSet] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const full = words[wordIndex]
    const baseSpeed = 80 // ms per char when typing
    const deleteSpeed = 50 // ms per char when deleting
    const pauseAfterWord = 900

    if (!isDeleting && displayed === full) {
      const t = setTimeout(() => setIsDeleting(true), pauseAfterWord)
      return () => clearTimeout(t)
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const step = () => {
      const next = isDeleting
        ? full.slice(0, displayed.length - 1)
        : full.slice(0, displayed.length + 1)
      setDisplayed(next)
    }

    const timer = setTimeout(step, isDeleting ? deleteSpeed : baseSpeed)
    return () => clearTimeout(timer)
  }, [displayed, isDeleting, wordIndex, words])

  // Carrossel automático das logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % Math.ceil(logos.length / 4))
    }, 3000)
    return () => clearInterval(interval)
  }, [logos.length])
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden" role="banner" aria-label="Seção principal">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Fundo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4="
        aria-label="Vídeo de fundo da Atheros Films"
        role="presentation"
        style={{ 
          willChange: 'auto',
          aspectRatio: '16/9',
          minHeight: '100vh',
          objectPosition: 'center center'
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-white font-extrabold tracking-tight mb-6 leading-[0.9]" style={{ 
              contain: 'layout style paint',
              willChange: 'auto'
            }}>
              <span className="block text-[73px]" style={{ 
                contain: 'layout style paint'
              }}>Crie conexões com</span>
              <span className="block text-[73px]" style={{ 
                contain: 'layout style paint'
              }}>vídeos que <span className="text-brand-500" aria-live="polite" style={{ 
                contain: 'layout style paint'
              }}>{displayed}</span><span className="typing-caret" aria-hidden="true" /></span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[20.8px] text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            Produção audiovisual profissional para marcas, eventos e criadores de conteúdo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg shadow-brand-600/30 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-brand-500/50"
              aria-label="Solicitar orçamento para produção audiovisual"
            >
              Solicitar Orçamento
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Client Logos Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-0 right-0"
      >
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-12 md:space-x-16 opacity-60">
            {logos.slice(currentPage * 4, (currentPage + 1) * 4).map((logo, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-8 w-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(logos.length / 4) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-brand-500 w-6' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Typing caret styles */}
      <style jsx global>{`
        .typing-caret {
          display: inline-block;
          width: 2px;
          height: 0.9em;
          margin-left: 4px;
          background: #e54848;
          animation: caret-blink 1s steps(2, start) infinite;
          vertical-align: -0.05em;
        }
        @keyframes caret-blink {
          0%,49% { opacity: 1; }
          50%,100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
