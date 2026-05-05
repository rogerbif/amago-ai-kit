# Skill: Criar Workflow Global (Antigravity Standard)

Esta skill define o padrão técnico para a criação de novos comandos interativos (Workflows) que aparecem no menu `/` do Antigravity.

## 📁 Diretório de Destino
Para que o comando seja reconhecido globalmente pelo sistema: os arquivos devem ser salvos em:
`C:\Users\User\.gemini\antigravity\global_workflows\`

## 📄 Estrutura Obrigatória do Arquivo

### 1. Frontmatter (Cabeçalho)
Todo workflow deve começar com um bloco de metadados para ser indexado:
```markdown
---
description: [Uma frase curta e clara explicando o que o comando faz]
---
```

### 2. Nomenclatura do Arquivo
O nome do arquivo determina o comando. Use hífens em vez de espaços ou underscores:
- Correto: `meu-novo-comando.md` -> Ativa `/meu-novo-comando`
- Incorreto: `meu_comando.md` ou `Meu Comando.md`

### 3. Automação de Comandos (Turbo)
Para permitir que o usuário execute comandos de terminal com um clique (ou automaticamente):
- Use `// turbo` acima de um passo específico.
- Use `// turbo-all` no início do arquivo para automatizar todos os passos de comando.

## 💡 Melhores Práticas
- **Simplicidade**: Divida processos complexos em passos numerados claros.
- **Feedback Visual**: Use blocos de notas (`> [!NOTE]`) para dar dicas contextuais.
- **Modernidade**: Mantenha as referências de código atualizadas com os scripts do diretório `core/`.

---
*Amago AI Kit: Padronização e Excelência.*
