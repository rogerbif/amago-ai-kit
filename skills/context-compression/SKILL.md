---
name: context-compression
description: Strategies for conversation history compression. Focuses on tokens-per-task optimization, anchored iterative summarization, and artifact trail integrity.
---

# ??? Amago Academy - 2026

# ?? Context Compression

> Otimizando cada token para o máximo de inteligência por tarefa.

Esta skill gerencia a compressão de histórico em sessões longas do **Amago AI Kit**, garantindo que a IA não perca detalhes críticos (como caminhos de arquivos) ao economizar tokens.

## ?? Otimização de "Tokens por Tarefa"
A meta não é apenas economizar tokens em uma requisição, mas reduzir o custo total para completar uma missão. Se a compressão for agressiva demais, a IA terá que "re-aprender" o que já sabia, gastando mais tokens no final.

---

## ?? Estratégias de Elite
1. **Anchored Iterative Summarization**: Mantém um resumo estruturado e persistente com seções explícitas para decisões e arquivos modificados.
2. **Resumo Regenerativo**: Gera um resumo detalhado a cada gatilho de compressão (70-80% do contexto).
3. **Artifact Trail**: Um índice separado para rastrear quais arquivos foram criados, lidos ou alterados.

---

## ? Checklist de Compressão Amago

- [ ] **Gatilho de Compressão**: Ativado ao atingir 75% da janela de contexto?
- [ ] **Rastro de Arquivos**: O resumo contém todos os arquivos afetados nesta sessão?
- [ ] **Decisões Salvas**: O "porquê" das decisões técnicas foi preservado no resumo?
- [ ] **Próximos Passos**: O estado atual e os próximos itens do `task.md` estão claros?

---

*Amago AI Kit: Inteligência densa, custos otimizados.*


