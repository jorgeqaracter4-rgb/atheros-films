import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import DiagonalTapeSection from '@/components/DiagonalTapeSection'
import PortfolioSection from '@/app/_sections/PortfolioSection'
import VideoSection from '@/components/VideoSection'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DiagonalTapeSection />
      <PortfolioSection />
      <VideoSection />
      <Services />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
