import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'

export default function Custom500() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">500</h1>
        <h2 className="text-2xl text-white mb-6">Erro interno do servidor</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Algo deu errado. Tente novamente ou volte à página inicial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            Tentar novamente
          </button>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  )
}
