'use client'

import { useEffect, useRef } from 'react'

export default function TapeSection() {
  const tapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const speed = 0.3 // Velocidade do scroll lateral
      
      if (tapeRef.current) {
        tapeRef.current.style.transform = `translateX(${scrollY * speed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tapeText = [
    'STORYTELLING',
    'EDIÇÃO PROFISSIONAL', 
    'LUZ',
    'CÂMERA',
    'AÇÃO',
    'MAKING OF'
  ]

  const TapeContent = ({ text }: { text: string[] }) => (
    <div className="flex items-center space-x-6 whitespace-nowrap">
      {[...text, ...text, ...text, ...text, ...text].map((item, index) => (
        <span key={index} className="text-white font-bold text-sm flex items-center">
          {item}
          <span className="mx-3 text-white/50 text-xs">•</span>
        </span>
      ))}
    </div>
  )

  return (
    <section className="relative h-16 bg-black overflow-hidden">
      {/* Fita única - Cinza escura */}
      <div 
        ref={tapeRef}
        className="absolute inset-0 flex items-center"
      >
        <div className="bg-gray-800 h-12 w-full flex items-center">
          <TapeContent text={tapeText} />
        </div>
      </div>
    </section>
  )
}
