# Amago AI Kit: Workflow de Desenvolvimento de Funcionalidades

Este fluxo é otimizado para a implementação ágil de novas funcionalidades dentro de um projeto existente.

## Etapas do Processo

1. Análise de Impacto: Identificar quais arquivos e módulos serão afetados pela nova funcionalidade.
2. Definição de Contratos: Estabelecer as interfaces de comunicação (API) entre frontend e backend.
3. Ciclo de Implementação:
    3.1. Criar modelos de dados e lógica de servidor.
    3.2. Desenvolver componentes de interface e hooks de integração.
4. Testes de Unidade: Garantir que a nova lógica funcione isoladamente conforme esperado.
5. Verificação de Padrões: Rodar ferramentas de linting e checagem de tipos (Modern ES).

## Diretrizes Técnicas

1. Siga o Princípio da Responsabilidade Única: Mantenha os novos componentes e funções pequenos e focados.
2. Reaproveitamento: Antes de criar algo novo: verifique se existe uma Skill no kit que possa ser utilizada.
3. Documentação: Atualize os arquivos de documentação técnica se a nova funcionalidade alterar o comportamento do sistema.
