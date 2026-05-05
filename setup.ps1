<#
.SYNOPSIS
    Script de Instalação e Ativação do Amago AI Kit.
    Amago Academy - 2026
#>

$projectName = (Get-Item .).Name
Write-Host "🛡️ Amago Academy - Ativando ecossistema no projeto: $projectName" -ForegroundColor Cyan

# 1. Garantir que o gemini.md está na raiz para ativação imediata
if (Test-Path "gemini.md") {
    Write-Host "✅ Protocolo GEMINI detectado. Ativando trigger 'always_on'..." -ForegroundColor Green
} else {
    Write-Host "⚠️ gemini.md não encontrado na raiz. O kit pode não funcionar corretamente." -ForegroundColor Yellow
}

# 2. Configurar .gitignore se existir
if (Test-Path ".gitignore") {
    $ignoreContent = "`n# Amago AI Kit`n.amago-logs/`n*.code-workspace`n"
    if (!(Select-String -Path ".gitignore" -Pattern "Amago AI Kit")) {
        Add-Content -Path ".gitignore" -Value $ignoreContent
        Write-Host "✅ .gitignore atualizado com exclusões do Amago." -ForegroundColor Green
    }
}

# 3. Gerar Catálogo Inicial (Silencioso)
Write-Host "📚 Mapeando skills e agentes..." -ForegroundColor Cyan
# Aqui poderíamos chamar o python se disponível, mas faremos a validação de pastas
$skillsCount = (Get-ChildItem -Path "skills" -Directory).Count
$agentsCount = (Get-ChildItem -Path "agents" -Directory).Count

Write-Host "🚀 Pronto! $agentsCount Agentes e $skillsCount Skills carregados." -ForegroundColor Green
Write-Host "💡 Dica: Peça para a IA 'Leia o gemini.md e apresente-se' para começar." -ForegroundColor White
