import dynamic from "next/dynamic"
import { Suspense } from "react"
import styles from "./PortfolioSection.module.css"
import { GalleryItem } from "../_components/Gallery"

const Gallery = dynamic(() => import("../_components/Gallery"), {
  ssr: true,
  loading: () => (
    <div className={styles.loading}>
      <p>Carregando galeria...</p>
    </div>
  ),
})

export default function PortfolioSection() {
  const galleryItems: GalleryItem[] = [
    { src: "/foto03.webp", alt: "Evento Corporativo", width: 1920, height: 1080 },
    { src: "/Sem-Titulo-1Prancheta-1.png", alt: "Buffet Premium", width: 1920, height: 1080 },
    { src: "/backstagePrancheta-1.png", alt: "Desenvolvimento Urbano", width: 1920, height: 1080 },
    { src: "/gallery/gallery1.svg", alt: "Arquitetura Moderna", width: 1920, height: 1080 },
    { src: "/gallery/gallery2.svg", alt: "Agricultura Sustentável", width: 1920, height: 1080 },
    { src: "/video-galeria.mp4", alt: "Making Of", width: 1920, height: 1080 },
  ]

  return (
    <section id="portfolio" aria-label="Galeria de portfólio" className={styles.section}>
      <div className={styles.container}>
        <button className={styles.chip}>Nossa galeria</button>
        <h2 className={styles.title}>
          Explore nosso <span className={styles.highlight}>portfólio audiovisual.</span>
        </h2>
        <p className={styles.text}>
          Essa galeria mostra um pouco dos nossos bastidores, sets e momentos que fazem parte da
          construção de cada projeto.
        </p>

        <div className={styles.galleryWrapper}>
          <Suspense fallback={
            <div className={styles.loading}>
              <p>Carregando galeria...</p>
            </div>
          }>
            <Gallery 
              items={galleryItems} 
              height={400} 
              gap={20} 
              peek={0} 
              autoplayMs={4000} 
              loop={true}
            />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
