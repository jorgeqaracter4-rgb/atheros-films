export default function NotFound() {
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
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Página não encontrada</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.8 }}>
        Verifique o endereço ou volte para o início.
      </p>
      <a 
        href="/"
        style={{ 
          padding: "0.75rem 1.5rem",
          backgroundColor: "#ef4444",
          color: "white",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontSize: "1rem"
        }}
      >
        Voltar ao início
      </a>
    </main>
  )
}
