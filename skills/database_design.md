# Amago AI Kit: Skill de Design de Banco de Dados

Esta habilidade orienta a criação de estruturas de dados robustas: escaláveis e performáticas: garantindo a integridade e a velocidade de acesso às informações.

## Princípios de Modelagem

1. Normalização vs Desnormalização: Normalize para evitar redundância: mas desnormalize de forma consciente quando a performance de leitura for crítica.
2. Tipagem Adequada: Utilize os tipos de dados mais eficientes para cada coluna (ex: UUID para IDs: TIMESTAMP para datas).
3. Chaves Primárias e Estrangeiras: Defina relacionamentos claros para garantir a integridade referencial do sistema.
4. Restrições (Constraints): Utilize "NOT NULL": "UNIQUE" e "CHECK" para validar os dados diretamente no banco.

## Estratégias de Performance

1. Indexação Inteligente: Crie índices para as colunas mais utilizadas em filtros e ordenações. Evite índices excessivos que prejudicam a escrita.
2. Análise de Consultas: Utilize o comando "EXPLAIN ANALYZE" para identificar gargalos e otimizar queries lentas.
3. Paginação: Nunca retorne grandes volumes de dados de uma vez. Utilize cursores ou offset para limitar os resultados.
4. Cache: Identifique dados que mudam raramente e considere estratégias de cache para reduzir a carga no banco.

## Checklist de Banco de Dados

1. O esquema está normalizado adequadamente para o caso de uso?
2. As colunas críticas possuem índices configurados?
3. A integridade dos dados é garantida por chaves e restrições?
4. A estrutura permite o crescimento (escalabilidade) do volume de dados?
