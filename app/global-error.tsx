'use client'

import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">500</h1>
            <h2 className="text-2xl text-white mb-6">Erro crítico</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Ocorreu um erro crítico. Por favor, recarregue a página.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5" />
                Recarregar
              </button>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Página inicial
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}