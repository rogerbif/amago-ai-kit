# Princípios REST

> Design de API baseado em recursos - substantivos, não verbos.

## Regras de Nomenclatura de Recursos

```
Princípios:
├── Use SUBSTANTIVOS, não verbos (recursos, não ações)
├── Use formas PLURAIS (/users em vez de /user)
├── Use letras minúsculas com hífens (/user-profiles)
├── Use aninhamento para relacionamentos (/users/123/posts)
└── Mantenha raso (máximo 3 níveis de profundidade)
```

## Seleção de Métodos HTTP

| Método | Propósito | Idempotente? | Corpo? |
|--------|---------|-------------|-------|
| **GET** | Ler recurso(s) | Sim | Não |
| **POST** | Criar novo recurso | Não | Sim |
| **PUT** | Substituir recurso inteiro | Sim | Sim |
| **PATCH** | Atualização parcial | Não | Sim |
| **DELETE** | Remover recurso | Sim | Não |

## Seleção de Status Codes

| Situação | Código | Por que |
|-----------|------|-----|
| Sucesso (leitura) | 200 | Sucesso padrão |
| Criado | 201 | Novo recurso criado |
| Sem conteúdo | 204 | Sucesso, nada a retornar |
| Bad request | 400 | Requisição malformada |
| Não autorizado | 401 | Auth ausente/inválida |
| Proibido | 403 | Auth válida, sem permissão |
| Não encontrado | 404 | Recurso não existe |
| Conflito | 409 | Conflito de estado (duplicata) |
| Erro de validação | 422 | Sintaxe válida, dados inválidos |
| Rate limited | 429 | Muitas requisições |
| Erro de servidor | 500 | Falha interna |
