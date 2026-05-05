# Amago AI Kit: Skill de Código Limpo

Esta habilidade define os padrões de excelência técnica para a escrita de código: focando em clareza, simplicidade e facilidade de manutenção.

## Princípios Fundamentais

1. Responsabilidade Única (SRP): Cada função ou classe deve fazer apenas uma coisa e fazê-la bem.
2. Não se Repita (DRY): Extraia lógicas duplicadas para funções reutilizáveis.
3. Mantenha Simples (KISS): Busque a solução mais direta e legível para o problema.
4. Você Não Vai Precisar Disso (YAGNI): Não construa funcionalidades que não foram solicitadas explicitamente.
5. Regra do Escoteiro: Deixe o código sempre um pouco mais limpo do que você o encontrou.

## Regras de Nomeclatura

1. Variáveis: Devem revelar a intenção. Exemplo: "contadorDeUsuarios" em vez de "n".
2. Funções: Devem ser Verbo + Substantivo. Exemplo: "buscarUsuarioPorId" em vez de "usuario".
3. Booleanos: Use formato de pergunta. Exemplo: "estaAtivo", "possuiPermissao".

## Regras de Funções

1. Tamanho: Mantenha funções pequenas (idealmente entre 5 a 15 linhas). Se a função estiver muito grande: divida-a.
2. Argumentos: Limite a quantidade de argumentos (máximo 3). Se precisar de mais: utilize um objeto de configuração.
3. Cláusulas de Guarda: Utilize retornos antecipados para lidar com casos de borda e evitar aninhamentos profundos (flat is better than nested).

## O Que Evitar

1. Comentários Óbvios: O código deve ser autoexplicativo. Se precisar de um comentário para explicar o que o código faz: renomeie as variáveis ou refatore a lógica.
2. Números Mágicos: Utilize constantes nomeadas para valores fixos.
3. Funções "Deus": Evite funções que acumulam múltiplas responsabilidades.

