#!/bin/bash

echo "🚀 Forçando deploy na Vercel..."

# Adicionar timestamp para forçar rebuild
echo "TIMESTAMP=$(date +%s)" >> .env.local

# Fazer commit com timestamp
git add .
git commit -m "force: clear cache and rebuild - $(date +%s)"

# Push para forçar rebuild na Vercel
git push origin main

echo "✅ Deploy forçado enviado!"
echo "📝 Acesse o dashboard da Vercel para acompanhar o rebuild"
