# Architecture Decision Records (ADR)

> O rastro das grandes decisÃµes.

Um ADR captura o contexto e o raciocÃ­nio por trÃ¡s de uma decisÃ£o tÃ©cnica significativa.

## Por que usar ADRs?
- **Contexto HistÃ³rico**: Entender o "porquÃª" de uma decisÃ£o anos depois.
- **Onboarding**: Ajudar novos membros a entender a evoluÃ§Ã£o do sistema.
- **Alinhamento**: Garantir que todos os especialistas de IA e humanos saibam qual Ã© o padrÃ£o atual.

---

## Estrutura PadrÃ£o (MADR)

Todo ADR deve conter:
1. **Status**: Proposto, Aceito, Depreciado ou SubstituÃ­do.
2. **Contexto**: Qual problema estamos tentando resolver?
3. **OpÃ§Ãµes Consideradas**: Quais caminhos poderÃ­amos ter tomado?
4. **DecisÃ£o**: Qual caminho escolhemos e por quÃª?
5. **ConsequÃªncias**: O que ganhamos e o que perdemos com essa escolha?

---

## Exemplo RÃ¡pido
**DecisÃ£o**: Usar Supabase como Backend.
**Rationale**: Rapidez de desenvolvimento, RLS nativo e PostgreSQL completo.
**ConsequÃªncia**: DependÃªncia de um provedor PaaS, mas economia de 4 semanas de setup manual.
