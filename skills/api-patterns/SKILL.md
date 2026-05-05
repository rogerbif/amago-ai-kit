---
name: api-patterns
description: API design principles and decision-making. REST vs GraphQL vs tRPC, response formats, versioning, and security.
---

# ??? Amago Academy - 2026

# ?? API Patterns

> Design de APIs de nível industrial: focadas em consistência, segurança e performance.

Esta skill define os padrões do **Amago AI Kit** para a criação de interfaces de programação que são intuitivas para desenvolvedores e resilientes sob carga.

## ?? Regra de Leitura Seletiva

**Leia APENAS os arquivos relevantes para a solicitação!** Consulte o mapa de conteúdo abaixo.

---

## ?? Mapa de Conteúdo

| Arquivo | Descrição | Quando Ler |
|------|-------------|--------------|
| `rest.md` | Nomenclatura de recursos, métodos HTTP e status codes | Ao projetar APIs REST |
| `response.md` | Padrão de envelope, formato de erro e paginação | Ao definir estrutura de resposta |
| `auth.md` | JWT, OAuth, Passkey e API Keys | Seleção de padrões de autenticação |
| `versioning.md` | Estratégias de evolução de API (URI/Header) | Planejamento de mudanças breaking |
| `security.md` | OWASP API Top 10 e testes de segurança | Auditorias e hardening |

---

## ? Checklist de Decisão Amago

Antes de implementar qualquer endpoint:

- [ ] **Consumidores definidos?** (Mobile, Web, Parceiros externos?)
- [ ] **Estilo de API escolhido?** (REST para público, tRPC para fullstack TS?)
- [ ] **Formato de resposta padronizado?** (Envelope de sucesso/erro consistente?)
- [ ] **Estratégia de versionamento clara?**
- [ ] **Autenticação e Autorização validadas pelo Guardião?**
- [ ] **Rate Limiting planejado para proteção?**

---

## ? Anti-Padrões (O que EVITAR)

- Usar verbos nos endpoints REST (ex: `/getUsers` ? -> `/users` ?)
- Retornar formatos de resposta inconsistentes entre diferentes módulos.
- Expor stack traces ou erros internos detalhados para o cliente.
- Ignorar o versionamento desde o dia 1.
- Negligenciar o Rate Limiting em endpoints públicos.

---

*Amago AI Kit: Potencializando APIs indestrutíveis.*


