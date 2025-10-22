#!/bin/bash

echo "🧹 Limpando cache completo..."

# Parar containers
echo "Parando containers..."
docker-compose down

# Remover containers antigos
echo "Removendo containers antigos..."
docker container prune -f

# Remover imagens antigas
echo "Removendo imagens antigas..."
docker image prune -f

# Remover volumes antigos
echo "Removendo volumes antigos..."
docker volume prune -f

# Remover cache do Next.js
echo "Removendo cache do Next.js..."
rm -rf .next
rm -rf node_modules/.cache

# Remover cache do Docker
echo "Removendo cache do Docker..."
docker builder prune -f

echo "✅ Cache limpo com sucesso!"
echo "🚀 Execute 'docker-compose up --build' para rebuild completo"
