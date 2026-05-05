
# 🛡️ Amago Academy - 2026

# 🔍 Fluxo de Debugging Cirúrgico (Amago Elite)

> Não masque o sintoma. Elimine a causa raiz.

Siga este fluxo para resolver bugs complexos com precisão e segurança.

## 1. Reprodução Consistente
- **Isolamento**: Reduza o cenário ao mínimo necessário para o erro ocorrer.
- **Evidência**: Capture o log de erro, stack trace ou captura de tela.
- **NUNCA** tente corrigir o que você ainda não conseguiu reproduzir.

## 2. Hipótese e Diagnóstico
- Siga o fluxo de dados: Do input do usuário ao banco de dados.
- Verifique permissões (RLS), tipos de dados e variáveis de ambiente.
- Use a persona `debugger` para uma análise mais profunda.

## 3. Correção Cirúrgica
- Implemente a correção mais limpa possível.
- Garanta que a correção não quebra outras partes do sistema (Análise de Impacto).

## 4. Prevenção (Kaizen)
- Crie um teste de regressão que proteja contra este bug no futuro.
- Documente o aprendizado se for um erro de arquitetura recorrente.

---



