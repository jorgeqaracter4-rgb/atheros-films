'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          Oops! Algo deu errado
        </h2>
        <p className="text-gray-300 mb-6">
          Não foi possível carregar a página. Tente novamente.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}
