'use client'

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
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Erro interno do servidor
            </h2>
            <p className="text-gray-300 mb-6">
              Algo deu errado. Tente novamente em alguns instantes.
            </p>
            <button
              onClick={reset}
              className="btn-primary"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
