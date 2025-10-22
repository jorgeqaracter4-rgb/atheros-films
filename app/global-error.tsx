'use client'

export default function GlobalError({ 
  error, 
  reset 
}: { 
  error: Error
  reset: () => void 
}) {
  return (
    <html>
      <body style={{ 
        padding: "8rem 2rem", 
        color: "#fff", 
        background: "#0b0b0b", 
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Erro inesperado</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.8 }}>
          Algo deu errado. Tente novamente.
        </p>
        <button 
          onClick={() => reset()} 
          style={{ 
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
      </body>
    </html>
  )
}
