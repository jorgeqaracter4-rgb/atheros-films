import { NextPageContext } from 'next'
import Link from 'next/link'
import { ArrowLeft, RefreshCw } from 'lucide-react'

interface ErrorProps {
  statusCode?: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          {statusCode || '500'}
        </h1>
        <h2 className="text-2xl text-white mb-6">
          {statusCode === 404 ? 'Página não encontrada' : 'Erro interno do servidor'}
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          {statusCode === 404 
            ? 'A página que você está procurando não existe ou foi movida.'
            : 'Algo deu errado. Tente novamente ou volte à página inicial.'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {statusCode !== 404 && (
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5" />
              Tentar novamente
            </button>
          )}
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
