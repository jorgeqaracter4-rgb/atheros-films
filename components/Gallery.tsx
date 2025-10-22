'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      thumbnail: '/foto03.webp',
      title: 'Evento Corporativo',
      description: 'Decoração elegante com velas e arranjos florais'
    },
    {
      id: 2,
      type: 'image',
      thumbnail: '/Sem-Titulo-1Prancheta-1.png',
      title: 'Buffet Premium',
      description: 'Serviço de catering com pratos sofisticados'
    },
    {
      id: 3,
      type: 'image',
      thumbnail: '/backstagePrancheta-1.png',
      title: 'Desenvolvimento Urbano',
      description: 'Vista aérea de projeto em desenvolvimento'
    },
    {
      id: 4,
      type: 'image',
      thumbnail: '/gallery/gallery1.svg',
      title: 'Arquitetura Moderna',
      description: 'Complexo arquitetônico com design contemporâneo'
    },
    {
      id: 5,
      type: 'image',
      thumbnail: '/gallery/gallery2.svg',
      title: 'Agricultura Sustentável',
      description: 'Campos agrícolas com técnicas modernas'
    },
    {
      id: 6,
      type: 'video',
      thumbnail: '/video-galeria.mp4',
      title: 'Making Of',
      description: 'Bastidores da produção audiovisual'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [galleryItems.length])

  return (
    <section ref={ref} id="galeria" className="py-20 bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-black border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nossa galeria
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Explore nosso{' '}
            <span className="text-brand-500">portfólio</span>{' '}
            <span className="text-brand-500">audiovisual</span>.
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Essa galeria mostra um pouco dos nossos bastidores, sets e momentos que fazem parte da construção de cada projeto.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 relative">
                  <div className="relative aspect-video overflow-hidden">
                    {item.type === 'video' ? (
                      <video
                        src={item.thumbnail}
                        className="w-full h-full object-cover"
                        poster={item.thumbnail}
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/gallery/gallery1.svg'
                        }}
                      />
                    )}
                    
                    {/* Overlay */}
                    <div 
                      className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => setSelectedImage(item.id)}
                    >
                      <div className="text-center text-white">
                        {item.type === 'video' ? (
                          <Play className="w-16 h-16 mx-auto mb-4" />
                        ) : (
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">👁</span>
                          </div>
                        )}
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-sm opacity-80">{item.description}</p>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        item.type === 'video' 
                          ? 'bg-brand-500 text-white' 
                          : 'bg-white/90 text-black'
                      }`}>
                        {item.type === 'video' ? 'Vídeo' : 'Foto'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  index === currentIndex 
                    ? 'bg-brand-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50 w-3 h-3'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            {galleryItems.find(item => item.id === selectedImage)?.type === 'video' ? (
              <video
                src={galleryItems.find(item => item.id === selectedImage)?.thumbnail}
                className="max-w-full max-h-full object-contain rounded-lg"
                controls
                autoPlay
              />
            ) : (
              <img
                src={galleryItems.find(item => item.id === selectedImage)?.thumbnail}
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/gallery/gallery1.svg'
                }}
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              aria-label="Fechar galeria"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}