# Amago AI Kit: Skill de Auditoria de Segurança

Esta habilidade fornece os princípios e metodologias para identificar vulnerabilidades e proteger o ecossistema contra ameaças cibernéticas modernas.

## Princípios de Segurança

1. Mentalidade "Assume Breach": Projete o sistema partindo do princípio que um invasor já pode estar dentro da rede.
2. Confiança Zero (Zero Trust): Nunca confie: sempre verifique cada solicitação e acesso.
3. Defesa em Profundidade: Implemente múltiplas camadas de proteção para evitar pontos únicos de falha.
4. Menor Privilégio: Conceda apenas o acesso mínimo necessário para que cada componente realize sua função.

## Categorias de Risco (OWASP)

1. Controle de Acesso Quebrado: Verifique quem pode acessar o quê. Atenção a falhas de IDOR e SSRF.
2. Configurações Incorretas: Evite padrões de fábrica expostos e cabeçalhos de segurança ausentes.
3. Segurança da Cadeia de Suprimentos: Audite dependências e garanta a integridade do pipeline de CI/CD.
4. Falhas Criptográficas: Utilize algoritmos robustos e nunca exponha segredos no código.
5. Injeção: Valide rigorosamente qualquer entrada de usuário para evitar injeções de SQL ou comandos.

## Metodologia de Auditoria

1. Reconhecimento: Entender a stack tecnológica e identificar os pontos de entrada de dados.
2. Descoberta: Analisar o código em busca de padrões de risco e segredos expostos.
3. Análise e Priorização: Validar as vulnerabilidades encontradas e classificar o risco com base no impacto e na probabilidade.
4. Relatório e Correção: Documentar as falhas com passos claros para reprodução e sugerir remediações específicas.

## Checklist de Segurança

1. Todas as entradas de dados são validadas e sanitizadas?
2. Existem segredos (chaves de API, senhas) hardcoded no código?
3. As rotas protegidas verificam autenticação e autorização corretamente?
4. As dependências do projeto estão atualizadas e sem vulnerabilidades conhecidas?
