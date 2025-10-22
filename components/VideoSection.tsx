'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Video Player */}
          <div className="relative w-full max-w-4xl">
            <video
              className="w-full h-auto rounded-lg shadow-2xl"
              controls
              poster="/video-galeria.mp4"
              preload="metadata"
              aria-label="Vídeo da galeria de trabalhos da Atheros Films"
            >
              <source src="/video-galeria.mp4" type="video/mp4" />
              <track kind="captions" srcLang="pt" label="Português" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            
            {/* Overlay com logo */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <span className="text-black font-bold text-sm">ATHEROS Films</span>
              </div>
            </div>
          </div>

          {/* Botão de Orçamento */}
          <motion.a
            href="#contato"
            className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-semibold text-lg shadow-lg shadow-brand-600/30 transition-all duration-300 transform hover:scale-105 min-h-[44px] min-w-[44px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Solicitar orçamento para produção audiovisual"
          >
            Solicitar orçamento
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

