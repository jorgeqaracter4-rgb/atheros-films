'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "Eles se preocupam e cuidam dos detalhes, o que separa um trabalho mediano de um trabalho extraordinário.",
      author: "Gustavo",
      role: "CEO — Wa Project",
      rating: 5,
      avatar: "/testimonials/gustavo.jpg"
    },
    {
      quote: "Nossa, ficou incrível! Pela qualidade, pela expertise... está sendo uma das melhores experiências. Estou muito feliz com o resultado!",
      author: "Talita",
      role: "Sócia-fundadora — Quattro Investimentos e embaixadora XP B2B",
      rating: 5,
      avatar: "/testimonials/talita.jpg"
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Tag */}
          <div className="inline-block bg-black border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            Depoimentos
          </div>

          {/* Título principal */}
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Depoimentos de{' '}
            <span className="relative">
              nossos clientes
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-500"></span>
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-black border border-brand-500 p-8 rounded-lg"
            >
              {/* Star Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-white italic text-lg leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 mr-4 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/testimonials/placeholder.jpg'
                    }}
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.author}</p>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
