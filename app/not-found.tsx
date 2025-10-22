import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center max-w-md mx-auto p-6">
        <h2 className="text-4xl font-bold text-white mb-4">
          404
        </h2>
        <p className="text-gray-300 mb-6">
          Página não encontrada
        </p>
        <Link href="/" className="btn-primary">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
