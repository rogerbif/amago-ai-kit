# Amago AI Kit: Padrões Modern ES

Todo o código desenvolvido dentro deste ecossistema deve seguir os padrões mais atuais do EcmaScript e as melhores práticas de desenvolvimento modular de 2025.

## Padrões de Linguagem e Módulos

1. ES Modules (ESM): Utilize "import/export" em todos os arquivos. Evite "require".
2. TypeScript Obrigatório: Todo código deve ser tipado. Utilize interfaces e tipos para definir contratos claros.
3. Sintaxe Moderna: Utilize "destructuring", "spread operator", "async/await" e "arrow functions" para manter o código conciso.
4. Imutabilidade: Prefira "const" sobre "let". Evite mutações diretas de objetos e arrays.

## Padrões de Frontend (React/Next.js)

1. Componentes Funcionais: Utilize apenas componentes funcionais com Hooks.
2. Server Components por Padrão: No Next.js (App Router): utilize Server Components para toda a lógica que não exija interatividade.
3. CSS-in-JS ou Tailwind: Utilize as ferramentas de estilização definidas no projeto (preferencialmente Vanilla CSS ou Tailwind se solicitado) de forma modular.
4. Gerenciamento de Estado: Utilize estados locais e context API de forma parcimoniosa: evitando a "prop drilling" excessiva.

## Padrões de Backend (Node.js/Bun)

1. APIs RESTful ou GraphQL: Siga padrões de design consistentes para endpoints.
2. Middleware de Segurança: Implemente validação e sanitização em todas as rotas de entrada.
3. Tratamento de Erros Centralizado: Utilize um middleware ou utilitário global para capturar e formatar erros.
4. Logging e Monitoramento: Implemente logs estruturados para facilitar a depuração em produção.
