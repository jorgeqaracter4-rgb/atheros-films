'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Conteúdo para Redes Sociais",
      description: "Vídeos dinâmicos e otimizados para engajar nas plataformas digitais e impulsionar sua presença online."
    },
    {
      title: "Captação e Edição Profissional",
      description: "Produções que valorizam histórias reais, com profundidade narrativa e cuidado estético."
    },
    {
      title: "Vídeos institucionais e filmagem empresarial",
      description: "Conte a historia da sua empresa de forma envolvente, com vídeos corporativos que fortalecem sua imagem e conexão com o publico."
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Tag */}
          <div className="inline-block bg-black border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            Nossos serviços
          </div>

          {/* Título principal */}
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Oferecemos soluções audiovisuais{' '}
            <span className="relative">
              completas
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-500"></span>
            </span>
          </h2>

          {/* Descrição */}
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
            Seja qual for o tamanho do seu projeto, estamos prontos para criar algo memorável.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`bg-gray-900 border border-brand-500 p-8 rounded-lg ${
                index === 1 ? 'bg-gray-800' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <div className="w-full h-px bg-brand-500 mb-4"></div>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 font-semibold text-lg shadow-lg shadow-brand-600/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Venha conhecer
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
