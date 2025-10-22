# Atheros Films - Landing Page

Uma landing page moderna e responsiva para a Atheros Films, desenvolvida com Next.js 14, TypeScript e Tailwind CSS, otimizada para performance máxima.

## 🚀 Características

- **Next.js 14** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilização
- **Framer Motion** para animações suaves
- **Docker** para containerização
- **Performance otimizada** com lazy loading e otimizações de imagem
- **SEO otimizado** com metadados completos
- **Responsivo** para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (ícones)
- Docker

## 📦 Instalação e Execução

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Acessar http://localhost:3000
```

### Docker

```bash
# Construir a imagem
docker build -t atheros-films .

# Executar o container
docker run -p 3000:3000 atheros-films

# Ou usar docker-compose
docker-compose up
```

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── Team.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   ├── images/
│   └── icons/
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## ⚡ Otimizações de Performance

- **Image Optimization**: Next.js Image component com WebP/AVIF
- **Code Splitting**: Lazy loading de componentes
- **Bundle Optimization**: Tree shaking e minificação
- **Caching**: Headers otimizados para cache
- **Compression**: Gzip/Brotli compression
- **Critical CSS**: CSS crítico inline

## 🎨 Design System

- **Cores**: Paleta baseada em azul (primary) e cinza (neutral)
- **Tipografia**: Inter font family
- **Espaçamento**: Sistema consistente de spacing
- **Animações**: Transições suaves com Framer Motion
- **Responsividade**: Mobile-first approach

## 📱 Responsividade

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker Production

```bash
# Build para produção
docker build -t atheros-films:latest .

# Executar em produção
docker run -p 3000:3000 atheros-films:latest
```

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Scripts Disponíveis

- `npm run dev` - Desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Linting do código

## 📄 Licença

Este projeto é propriedade da Atheros Films. Todos os direitos reservados.

## 🤝 Contribuição

Para contribuições, entre em contato com a equipe de desenvolvimento da Atheros Films.
