'use client'

import { motion, useInView } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 bg-black relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Tag */}
            <div className="inline-block bg-black border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              Sobre a Atheros Films
            </div>

            {/* Título principal */}
            <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
              Transformamos ideias em{' '}
              <span className="relative">
                experiências
              </span>{' '}
              <span className="relative inline-block">
                inesquecíveis
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </motion.svg>
              </span>
              .
            </h2>

            {/* Descrição */}
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              Somos uma produtora criativa e inovadora, especializada na produção de conteúdo visual de alta qualidade que conecta marcas e pessoas de forma impactante.
            </p>

            {/* Lista de características */}
            <div className="space-y-6 mb-10">
              {[
                'Criatividade em cada detalhe do processo',
                'Projetos conduzidos com paixão e propósito',
                'Narrativas que emocionam e conectam',
                'Estética e técnica em equilíbrio perfeito'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contato"
              className="inline-flex items-center rounded-full bg-brand-600 hover:bg-brand-700 text-white px-10 py-4 font-semibold text-base shadow-lg shadow-brand-600/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Venha conhecer
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/backstagePrancheta-1.png"
                alt="Equipe Atheros Films trabalhando nos bastidores"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}