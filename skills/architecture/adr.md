# Architecture Decision Records (ADR)

> O rastro das grandes decisões.

Um ADR captura o contexto e o raciocínio por trás de uma decisão técnica significativa.

## Por que usar ADRs?
- **Contexto Histórico**: Entender o "porquê" de uma decisão anos depois.
- **Onboarding**: Ajudar novos membros a entender a evolução do sistema.
- **Alinhamento**: Garantir que todos os especialistas de IA e humanos saibam qual é o padrão atual.

---

## Estrutura Padrão (MADR)

Todo ADR deve conter:
1. **Status**: Proposto, Aceito, Depreciado ou Substituído.
2. **Contexto**: Qual problema estamos tentando resolver?
3. **Opções Consideradas**: Quais caminhos poderíamos ter tomado?
4. **Decisão**: Qual caminho escolhemos e por quê?
5. **Consequências**: O que ganhamos e o que perdemos com essa escolha?

---

## Exemplo Rápido
**Decisão**: Usar Supabase como Backend.
**Rationale**: Rapidez de desenvolvimento, RLS nativo e PostgreSQL completo.
**Consequência**: Dependência de um provedor PaaS, mas economia de 4 semanas de setup manual.
