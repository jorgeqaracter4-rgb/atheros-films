'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-6">
                ATHEROS Films
              </h3>
              <p className="text-white/90 leading-relaxed mb-8 max-w-md">
                Transformamos ideias em experiências inesquecíveis. Produção audiovisual profissional para marcas, eventos e criadores de conteúdo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Instagram className="w-5 h-5 text-black" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Facebook className="w-5 h-5 text-black" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-black" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Youtube className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-white/90 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-white/90 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-white/90 hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-white/90 hover:text-white transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#time" className="text-white/90 hover:text-white transition-colors">
                    Time
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-white/90 hover:text-white transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/90 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-white mb-1">Telefone</p>
                  <p className="text-white/90">11 97105-3339</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Email</p>
                  <p className="text-white/90">producao@atherosfilms.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Separator Line */}
        <div className="w-full h-px bg-brand-500 mb-6"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-8"
        >
          <div className="text-center">
            <p className="text-white/90 text-sm">
              Copyright © {currentYear} Atheros Films. Todos os direitos reservados
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
