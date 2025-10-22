import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: {
    default: 'Atheros Films - Produção Audiovisual Profissional em São Paulo',
    template: '%s | Atheros Films'
  },
  description: 'Transformamos ideias em experiências inesquecíveis. Produção audiovisual profissional para marcas, eventos e criadores de conteúdo em São Paulo. Vídeos corporativos, filmagem, edição e storytelling. Solicite seu orçamento!',
  keywords: [
    'produção audiovisual',
    'vídeos corporativos',
    'filmagem profissional',
    'edição de vídeo',
    'storytelling',
    'Atheros Films',
    'produtora São Paulo',
    'vídeos institucionais',
    'conteúdo para redes sociais',
    'filmagem empresarial',
    'pós-produção',
    'motion graphics',
    'documentários',
    'eventos corporativos'
  ],
  authors: [{ name: 'Atheros Films', url: 'https://atherosfilms.com.br' }],
  creator: 'Atheros Films',
  publisher: 'Atheros Films',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://atherosfilms.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  openGraph: {
    title: 'Atheros Films - Produção Audiovisual Profissional',
    description: 'Transformamos ideias em experiências inesquecíveis. Produção audiovisual profissional para marcas, eventos e criadores de conteúdo.',
    url: 'https://atherosfilms.com.br',
    siteName: 'Atheros Films',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atheros Films - Produção Audiovisual Profissional',
        type: 'image/jpeg',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
    countryName: 'Brazil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atheros Films - Produção Audiovisual Profissional',
    description: 'Transformamos ideias em experiências inesquecíveis. Produção audiovisual profissional para marcas, eventos e criadores de conteúdo.',
    images: ['/og-image.jpg'],
    creator: '@atherosfilms',
    site: '@atherosfilms',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Audiovisual Production',
  classification: 'Business',
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://vercel.app" />
        <link rel="dns-prefetch" href="https://atheros-films-7ozb.vercel.app" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Preload critical resources for mobile LCP */}
        <link rel="preload" href="/Fundo.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preload" href="/backstagePrancheta-1.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preload" href="/video-galeria.mp4" as="video" type="video/mp4" fetchPriority="low" />
        <link rel="preload" href="/foto03.webp" as="image" type="image/webp" fetchPriority="low" />
        <link rel="preload" href="/Sem-Titulo-1Prancheta-1.png" as="image" type="image/png" fetchPriority="low" />
        
        {/* Preload mobile-specific critical CSS */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
        
        {/* Preload mobile-specific resources */}
        <link rel="preload" href="/_next/static/chunks/pages/_app.js" as="script" />
        <link rel="preload" href="/_next/static/chunks/webpack.js" as="script" />
        
        {/* Preload critical fonts for mobile */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                })
              }
            `
          }} 
          async
        />
        {/* Critical CSS inline para mobile */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for mobile above-the-fold */
            html{scroll-behavior:smooth;font-display:swap;font-size:16px}
            body{font-family:Inter,system-ui,sans-serif;margin:0;padding:0;background:#000;color:#fff;font-size:1rem}
            .container-custom{max-width:1280px;margin:0 auto;padding:0 1rem}
            .min-h-screen{min-height:100vh}
            .bg-black{background-color:#000}
            .text-white{color:#fff}
            .flex{display:flex}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .relative{position:relative}
            .absolute{position:absolute}
            .inset-0{top:0;right:0;bottom:0;left:0}
            .w-full{width:100%}
            .h-full{height:100%}
            .object-cover{object-fit:cover}
            .z-10{z-index:10}
            .text-6xl{font-size:3.75rem;line-height:1}
            .font-bold{font-weight:700}
            .text-center{text-align:center}
            .py-6{padding-top:1.5rem;padding-bottom:1.5rem}
            .px-6{padding-left:1.5rem;padding-right:1.5rem}
            .py-3{padding-top:0.75rem;padding-bottom:0.75rem}
            .rounded-full{border-radius:9999px}
            .bg-brand-600{background-color:#d93a3a}
            .hover\\:bg-brand-700:hover{background-color:#b62f2f}
            .text-sm{font-size:0.875rem;line-height:1.25rem}
            .font-semibold{font-weight:600}
            .shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)}
            .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
            .hidden{display:none}
            @media (min-width:768px){.md\\:block{display:block}}
            @media (min-width:768px){.md\\:hidden{display:none}}
            @media (max-width:768px){.mobile-contain{contain:layout style paint}}
            @media (max-width:768px){.mobile-stable{min-height:44px;min-width:44px}}
            @media (max-width:768px){.mobile-text-stable{contain:layout style paint;will-change:auto}}
            @media (max-width:480px){.mobile-xs{font-size:2rem}}
            @media (max-width:480px){.mobile-xs-padding{padding:0.5rem}}
            @media (max-width:768px){.partner-logo-container{min-width:120px;min-height:32px;contain:layout style paint}}
            @media (max-width:768px){.partner-logo{width:120px!important;height:32px!important;object-fit:contain}}
            @media (max-width:768px){.prevent-reflow{contain:layout style paint;will-change:auto}}
            @media (max-width:768px){.diagonal-marquee{contain:layout style paint;will-change:transform}}
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
