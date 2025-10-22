'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0) // Primeira pergunta aberta por padrão

  const faqs = [
    {
      question: "Quais serviços você oferece em audiovisual?",
      answer: "Oferecemos uma ampla gama de serviços de audiovisual, incluindo filmagem, edição de vídeo, criação de conteúdo visual, fotografia, gravação de áudio e pós-produção. Atendemos tanto para eventos corporativos quanto para produções criativas como vídeos institucionais, comerciais e clipes musicais."
    },
    {
      question: "Você trabalha com projetos de grandes e pequenas escalas?",
      answer: "Sim! Atendemos tanto projetos de grande porte, como filmes e grandes campanhas publicitárias, quanto projetos menores, como vídeos promocionais e conteúdos para redes sociais. Adaptamos nossos serviços para atender às suas necessidades e orçamento."
    },
    {
      question: "Qual a diferença entre produção e pós-produção?",
      answer: "Produção é a etapa de gravação, onde capturamos o conteúdo visual e sonoro do projeto. Pós-produção envolve todo o trabalho de edição, como montagem, adição de efeitos especiais, correção de cor, mixagem de áudio e finalização do vídeo."
    },
    {
      question: "Posso acompanhar o processo de edição?",
      answer: "Sim! Acreditamos na transparência durante todo o processo. Você pode acompanhar o progresso da edição através de revisões periódicas, e estamos abertos a feedbacks para garantir que o resultado final seja exatamente o que você deseja."
    },
    {
      question: "Qual o investimento necessário para meu projeto?",
      answer: "O valor de cada projeto varia conforme a sua complexidade, duração e os serviços solicitados. Após uma análise inicial, podemos fornecer um orçamento detalhado e personalizado para o seu projeto."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} id="faq" className="py-24 bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/team/leonardo.svg"
                alt="Equipe Atheros Films trabalhando"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tag */}
            <div className="inline-block bg-black border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              FAQS
            </div>

            {/* Título principal */}
            <h2 className="text-6xl font-bold text-white leading-tight">
              Perguntas E{' '}
              <span className="relative">
                Respostas
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-500"></span>
              </span>
            </h2>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 rounded-lg ${
                      openIndex === index 
                        ? 'bg-brand-600 text-white' 
                        : 'bg-black border border-brand-500 text-white hover:bg-gray-900'
                    }`}
                  >
                    <h3 className="text-lg font-semibold pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-white flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white flex-shrink-0" />
                    )}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-black">
                      <p className="text-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
