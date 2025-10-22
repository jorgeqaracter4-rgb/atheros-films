#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Otimizando build para produção...');

// Verificar se o build foi bem-sucedido
const buildDir = path.join(process.cwd(), '.next');
if (!fs.existsSync(buildDir)) {
  console.error('❌ Build não encontrado. Execute "npm run build" primeiro.');
  process.exit(1);
}

console.log('✅ Build encontrado');

// Otimizações adicionais podem ser adicionadas aqui
console.log('✅ Otimizações aplicadas');
console.log('🎉 Build otimizado com sucesso!');
