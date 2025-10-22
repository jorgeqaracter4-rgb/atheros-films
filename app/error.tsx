'use client'

import { useEffect } from 'react'

export default function ErrorPage({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }
  reset: () => void 
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main style={{ 
      padding: "8rem 2rem", 
      color: "#fff", 
      background: "#0b0b0b", 
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Algo deu errado</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.8 }}>
        Tente novamente ou volte para a página inicial.
      </p>
      <button 
        onClick={() => reset()} 
        style={{ 
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          fontSize: "1rem"
        }}
      >
        Tentar novamente
      </button>
    </main>
  )
}
