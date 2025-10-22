import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-white mb-6">Página não encontrada</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
