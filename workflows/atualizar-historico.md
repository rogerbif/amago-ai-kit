---
description: Protocolo de Governança - Registro semântico de evolução e versionamento de projeto.
---

Este workflow automatiza e padroniza a atualização do `HISTORICO_DO_PROJETO.md`, garantindo que a evolução técnica seja documentada de forma clara, categorizada e em ordem cronológica ascendente.

// turbo-all

### 1. Preparação (Análise de Mudanças)
- **Coleta**: Listar todas as tarefas finalizadas desde a última versão.
- **Categorização**: Classificar cada item usando:
    - `[Feature]`: Novas funcionalidades.
    - `[Bug/Fix]`: Correções de erros.
    - `[Refactor]`: Melhorias de código sem mudança funcional.
    - `[Infra]`: Mudanças em banco, deploy ou ambiente.
    - `[Security]`: Ajustes de segurança e RLS.
    - `[UX/DesignOps]`: Mudanças visuais ou de experiência.
    - `[Doc]`: Atualização de documentação.

### 2. Incremento de Versão
1. **Ler Versão Atual**: Localizar o último título `### [DD/MM/YYYY] vX.Y.Z` no final do arquivo.
2. **Definir Nova Versão**:
    - **Patch (v0.0.X)**: Hotfixes e pequenas mudanças.
    - **Minor (v0.X.0)**: Novas features ou refactors significativos.
    - **Major (vX.0.0)**: Mudanças arquiteturais ou quebras de compatibilidade.

### 3. Geração do Bloco de Markdown
- **Data**: Usar a data atual no formato `[DD/MM/YYYY]`.
- **Estrutura**:
```markdown
### [DATA_ATUAL] vX.Y.Z - Título Curto da Entrega
- [Categoria] **Destaque em Negrito**: Descrição técnica detalhada da mudança.
- [Categoria] **Destaque em Negrito**: Outra mudança relevante.
```

### 4. Aplicação e Governança
1. **Append**: Adicionar o novo bloco ao **final** do arquivo `HISTORICO_DO_PROJETO.md`.
2. **Sincronização**:
    - `git add HISTORICO_DO_PROJETO.md`
    - `git commit -m "chore(history): release vX.Y.Z"`
3. **Log Rotation (Opcional)**: Se o arquivo ultrapassar 500 linhas, sugerir arquivamento das versões mais antigas em `amago/history/`.

---
**🚀 Deseja tornar este workflow um comando global?**
Se este protocolo for útil para outros projetos, eu posso salvá-lo como um comando `/` no Antigravity para acesso rápido em qualquer workspace.
