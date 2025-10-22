# 🧹 Como Limpar Cache da Vercel

## Método 1: Dashboard da Vercel (Recomendado)

1. **Acesse o dashboard da Vercel**: https://vercel.com/dashboard
2. **Selecione seu projeto** "atheros-films"
3. **Vá para "Deployments"**
4. **Clique nos 3 pontos** do último deploy
5. **Selecione "Redeploy"**
6. **Marque "Use existing Build Cache"** como **DESMARCADO**
7. **Clique em "Redeploy"**

## Método 2: Via Git (Automático)

```bash
# Fazer commit com timestamp para forçar rebuild
git add .
git commit -m "force: clear cache and rebuild - $(date +%s)"
git push origin main
```

## Método 3: Via Script

```bash
# Executar script de force deploy
npm run force-deploy
```

## Método 4: Configuração Manual

1. **Vá para Settings** do projeto na Vercel
2. **Selecione "Functions"**
3. **Desmarque "Use Build Cache"**
4. **Salve as configurações**
5. **Faça um novo deploy**

## ⚠️ Importante

- O cache da Vercel é diferente do cache local
- Sempre desmarque "Use existing Build Cache" ao fazer redeploy
- Os headers de cache foram configurados para forçar refresh
- O build será mais lento na primeira vez após limpar o cache

## 🎯 Resultado Esperado

Após limpar o cache da Vercel:
- ✅ Problemas de acessibilidade resolvidos
- ✅ Performance otimizada
- ✅ Cache eficiente configurado
- ✅ Build limpo sem versões antigas
