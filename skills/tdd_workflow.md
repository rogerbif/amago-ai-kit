# Amago AI Kit: Skill de Desenvolvimento Orientado a Testes (TDD)

Esta habilidade fornece a metodologia para escrever código de alta qualidade através de ciclos curtos de feedback e automação de testes.

## O Ciclo TDD (Red-Green-Refactor)

1. Vermelho (Red): Escreva um teste pequeno que falhe para uma nova funcionalidade que ainda não existe.
2. Verde (Green): Escreva o código mínimo necessário para fazer o teste passar o mais rápido possível.
3. Refatorar (Refactor): Limpe o código: elimine duplicidades e melhore a estrutura sem alterar o comportamento validado pelo teste.

## Tipos de Testes

1. Unitários: Validam pequenas partes do código (funções: classes) de forma isolada e rápida.
2. Integração: Verificam se diferentes módulos do sistema funcionam bem juntos (ex: lógica + banco de dados).
3. End-to-End (E2E): Simulam a jornada completa do usuário na interface para garantir que o fluxo principal funcione.

## Boas Práticas

1. Teste Apenas o Comportamento: Evite testar detalhes de implementação que podem mudar frequentemente.
2. Mantenha os Testes Rápidos: Testes lentos desencorajam a execução frequente: prejudicando o fluxo TDD.
3. Nomes Descritivos: O nome do teste deve descrever claramente o que está sendo validado. Exemplo: "deve retornar erro ao tentar login com senha inválida".

## Checklist de TDD

1. Existe um teste para cada nova funcionalidade implementada?
2. Todos os testes estão passando antes de realizar o commit?
3. O código foi refatorado para manter os padrões de limpeza?
4. A cobertura de testes cobre os caminhos críticos da aplicação?
