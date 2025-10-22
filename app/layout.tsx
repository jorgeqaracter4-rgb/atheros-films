import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Atheros Films - Produção Audiovisual Profissional em São Paulo',
    template: '%s | Atheros Films'
  },
  description: 'Transformamos ideias em experiências inesquecíveis. Produção audiovisual profissional para marcas, eventos e criadores de conteúdo em São Paulo. Vídeos corporativos, filmagem, edição e storytelling.',
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
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
