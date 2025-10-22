# 🐳 Atheros Films - Instruções Docker

## 🚀 Execução Rápida

### 1. Build e Execução com Docker Compose (Recomendado)

```bash
# Build e execução em uma linha
docker-compose up --build

# Em background
docker-compose up -d --build

# Parar os containers
docker-compose down
```

### 2. Build Manual da Imagem

```bash
# Build da imagem
docker build -t atheros-films .

# Executar container
docker run -p 3000:3000 atheros-films

# Executar em background
docker run -d -p 3000:3000 --name atheros-films atheros-films
```

## ⚡ Otimizações Implementadas

### 🎯 Performance
- **Multi-stage build** para imagem mínima
- **Standalone output** do Next.js
- **Image optimization** com WebP/AVIF
- **Bundle splitting** otimizado
- **Lazy loading** de componentes
- **Compression** Gzip/Brotli
- **Cache headers** otimizados

### 🔍 SEO Otimizado
- **Metadados completos** com Open Graph
- **Schema.org** structured data
- **Sitemap.xml** dinâmico
- **Robots.txt** otimizado
- **Canonical URLs**
- **Geo-localização** (São Paulo)
- **Keywords** estratégicas

### 🛡️ Segurança
- **Headers de segurança** (XSS, CSRF, etc.)
- **Non-root user** no container
- **Health checks** configurados
- **Resource limits** definidos

## 📊 Performance Esperada

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎨 Recursos Implementados

### Componentes Otimizados
- Header com navegação responsiva
- Hero com animações suaves
- Seções About, Services, Gallery
- Team, Testimonials, FAQ
- Contact form funcional
- Footer completo

### Animações
- Framer Motion para transições
- Scroll-triggered animations
- Loading states otimizados
- Error boundaries

### Responsividade
- Mobile-first design
- Breakpoints otimizados
- Touch-friendly interactions
- Performance em dispositivos móveis

## 🔧 Comandos Úteis

```bash
# Ver logs do container
docker-compose logs -f

# Rebuild sem cache
docker-compose build --no-cache

# Ver uso de recursos
docker stats

# Limpar containers e imagens
docker system prune -a
```

## 🌐 Acesso

Após executar, acesse: **http://localhost:3000**

## 📈 Monitoramento

O container inclui health checks automáticos e logs estruturados para monitoramento em produção.
