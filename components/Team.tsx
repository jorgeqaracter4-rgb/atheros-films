'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const teamMembers = [
    {
      name: "Luiz Henrique Perez",
      role: "Co-fundador | Advisor",
      image: "/team/luiz.svg"
    },
    {
      name: "Leonardo Rocha", 
      role: "Co-fundador | Diretor de Operações",
      image: "/team/leonardo.svg"
    },
    {
      name: "Vitor Nicola",
      role: "Co-fundador | Diretor Comercial e de Performance", 
      image: "/team/vitor.svg"
    }
  ]

  // Efeito de digitação para "câmera"
  useEffect(() => {
    const fullText = 'câmera'
    const typingSpeed = 100
    const deletingSpeed = 50
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting])

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [teamMembers.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tag */}
            <div className="inline-block bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Nosso time
            </div>

            {/* Título com efeito de digitação */}
            <h2 className="text-6xl font-bold text-white leading-tight">
              Por trás das{' '}
              <span className="text-brand-500">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>

            {/* Descrição */}
            <p className="text-xl text-white leading-relaxed">
              Por trás de cada produção da Atheros Films, existe um time apaixonado, criativo e comprometido em transformar ideias em experiências audiovisuais de verdade.
            </p>

            <p className="text-lg text-white">
              Conheça quem faz a mágica acontecer:
            </p>

            {/* CTA Button */}
            <motion.a
              href="#contato"
              className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-semibold text-lg shadow-lg shadow-brand-600/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba mais
            </motion.a>
          </motion.div>

          {/* Right Side - Team Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-lg p-8 shadow-2xl">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors z-10"
                aria-label="Membro anterior"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors z-10"
                aria-label="Próximo membro"
              >
                ›
              </button>

              {/* Team Member Card */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-600 mb-2">
                  {teamMembers[currentIndex].name}
                </h3>
                <p className="text-gray-800 font-medium">
                  {teamMembers[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brand-600' : 'bg-white/40'
                  }`}
                  aria-label={`Ir para o membro ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
