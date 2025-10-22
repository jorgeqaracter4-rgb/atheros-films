# Deploy na Vercel - Atheros Films

## 📋 Pré-requisitos

1. **Conta na Vercel**: Crie uma conta em [vercel.com](https://vercel.com)
2. **GitHub**: Conecte seu repositório ao GitHub
3. **Node.js**: Versão 18 ou superior

## 🚀 Passos para Deploy

### 1. Preparar o Projeto

```bash
# Instalar dependências
npm install

# Testar build local
npm run build
```

### 2. Conectar com a Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Conecte seu repositório GitHub
4. Selecione o repositório `atheros-films`

### 3. Configurações do Projeto

**Framework Preset**: Next.js
**Root Directory**: `./` (raiz do projeto)
**Build Command**: `npm run build`
**Output Directory**: `.next`
**Install Command**: `npm install`

### 4. Variáveis de Ambiente (Opcional)

Adicione estas variáveis no painel da Vercel:

```
NEXT_PUBLIC_SITE_URL=https://atheros-films.vercel.app
NEXT_PUBLIC_SITE_NAME=Atheros Films
NEXT_PUBLIC_PHONE=11 97105-3339
NEXT_PUBLIC_EMAIL=producao@atherosfilms.com.br
```

### 5. Deploy

1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. Acesse o link fornecido

## 🔧 Configurações Específicas

### Arquivos Importantes

- `vercel.json`: Configurações específicas da Vercel
- `next.config.js`: Configurações do Next.js otimizadas
- `package.json`: Dependências e scripts

### Otimizações Incluídas

- ✅ **Image Optimization**: WebP/AVIF automático
- ✅ **Bundle Splitting**: Código otimizado
- ✅ **Caching**: Headers de cache configurados
- ✅ **Security**: Headers de segurança
- ✅ **Performance**: Compressão e otimizações

## 📱 Domínio Personalizado

1. Vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções
4. Aguarde a propagação (até 24h)

## 🔄 Deploy Automático

- **Push para main**: Deploy automático
- **Pull Requests**: Preview deployments
- **Branch Protection**: Configurável

## 📊 Monitoramento

- **Analytics**: Vercel Analytics incluído
- **Performance**: Core Web Vitals
- **Errors**: Logs de erro em tempo real

## 🚨 Troubleshooting

### Build Errors
```bash
# Limpar cache
rm -rf .next
npm run build
```

### Dependencies Issues
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Image Optimization
- Verifique se as imagens estão na pasta `public/`
- Use formatos WebP/AVIF quando possível
- Otimize o tamanho das imagens

## 📞 Suporte

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Community**: [github.com/vercel/next.js](https://github.com/vercel/next.js)

---

**Status**: ✅ Pronto para Deploy
**Performance**: 🚀 Otimizado
**SEO**: 🔍 Configurado
**Security**: 🔒 Headers configurados

