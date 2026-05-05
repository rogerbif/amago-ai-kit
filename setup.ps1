# Amago AI Kit - Script de Instalação (Windows)
Write-Host "🚀 Iniciando instalação do Amago AI Kit..." -ForegroundColor Cyan

# 1. Instalar dependências locais
Write-Host "📦 Instalando dependências..."
npm install

# 2. Criar link global
Write-Host "🔗 Criando link global (amago)..."
npm link

# 3. Instalar Workflows no Antigravity
Write-Host "🧠 Integrando com Antigravity Workflows..."
node bin/amago.js install-workflows

Write-Host "`n✅ Instalação concluída com sucesso!" -ForegroundColor Green
Write-Host "Agora você pode usar o comando 'amago' em qualquer terminal."
Write-Host "E os comandos /amago-* estão disponíveis no seu editor Antigravity."
Write-Host "Para começar, digite: amago interativo" -ForegroundColor Yellow
