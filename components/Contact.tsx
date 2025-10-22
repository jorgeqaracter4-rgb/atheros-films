'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Mensagem enviada com sucesso!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={ref} id="contato" className="py-24 bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Tag */}
          <div className="inline-block bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            Formulário
          </div>

          {/* Título principal */}
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Pronto para criar algo incrível junto com a{' '}
            <span className="text-brand-500">Atheros Films?</span>
          </h2>

          {/* Descrição */}
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Da concepção à pós-produção, nossa equipe está comprometida em entregar a melhor experiência possível, com excelência técnica e criativa.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-black border border-brand-500 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                placeholder="Nome"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 bg-black border border-brand-500 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                placeholder="E-mail"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 bg-black border border-brand-500 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                placeholder="Telefone"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-4 bg-black border border-brand-500 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors resize-none"
                placeholder="Mensagem"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                  Enviando...
                </>
              ) : (
                'Enviar'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
