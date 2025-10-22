'use client'

import DiagonalMarquee from '@/app/_components/DiagonalMarquee'

export default function DiagonalTapeSection() {
  const texto = "STORYTELLING • EDIÇÃO PROFISSIONAL • LUZ • CÂMERA • AÇÃO • MAKING OF • "

  return (
    <section className="relative min-h-[50vh] bg-black text-white">
      {/* Conteúdo principal acima das fitas */}


      {/* Fita de fundo (desfocada e vermelha) */}
      <DiagonalMarquee
        text={texto}
        angleDeg={-12}
        height={56}
        offsetY={60}
        blur={3}
        ribbonBg="linear-gradient(90deg, rgba(255,40,40,0.65), rgba(255,40,40,0.22))"
        textColor="rgba(255,255,255,1)"
        speed={0.25}
        zIndex={8}
      />

      {/* Fita da frente (nítida) */}
      <DiagonalMarquee
        text={texto}
        angleDeg={-6}
        height={64}
        offsetY={120}
        ribbonBg="rgba(32,32,32,0.95)"
        textColor="#ffffff"
        speed={0.35}
        borderThickness={1}
        borderColor="rgba(255,255,255,0.06)"
        zIndex={20}
      />
    </section>
  )
}

