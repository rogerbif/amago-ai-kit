
# 🛡️ Amago Academy - 2026

# Amago AI Kit: Padrões Modern ES

Todo o código desenvolvido dentro deste ecossistema deve seguir os padrões mais atuais do EcmaScript e as melhores práticas de desenvolvimento modular.

## Padrões de Linguagem e Módulos

1. **ES Modules (ESM)**: Utilize `import/export` em todos os arquivos. Evite `require`.
2. **TypeScript**: Prefira o uso de TypeScript. Utilize interfaces e tipos para definir contratos claros.
3. **Sintaxe Moderna**: Utilize `destructuring`, `spread operator`, `async/await` e `arrow functions` para manter o código conciso e legível.
4. **Imutabilidade**: Prefira `const` sobre `let`. Evite mutações diretas de objetos e arrays.

## Padrões de Frontend (React/Next.js)

1. **Componentes Funcionais**: Utilize componentes funcionais com Hooks.
2. **Server Components**: No Next.js (App Router), utilize Server Components para lógica que não exija interatividade imediata no cliente.
3. **Estilização Modular**: Utilize as ferramentas de estilização definidas no projeto de forma modular e consistente.
4. **Gerenciamento de Estado**: Utilize estados locais e Context API de forma estratégica, evitando "prop drilling" excessivo.

## Padrões de Backend (Node.js/Bun)

1. **Design de API**: Siga padrões consistentes (RESTful, GraphQL, etc.) para endpoints.
2. **Segurança**: Implemente validação e sanitização em todas as rotas de entrada.
3. **Tratamento de Erros**: Utilize uma estratégia global e centralizada para capturar e formatar erros.
4. **Logging**: Implemente logs estruturados para facilitar a depuração e o monitoramento.

---
