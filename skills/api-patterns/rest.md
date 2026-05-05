# PrincÃ­pios REST

> Design de API baseado em recursos - substantivos, nÃ£o verbos.

## Regras de Nomenclatura de Recursos

```
PrincÃ­pios:
â”œâ”€â”€ Use SUBSTANTIVOS, nÃ£o verbos (recursos, nÃ£o aÃ§Ãµes)
â”œâ”€â”€ Use formas PLURAIS (/users em vez de /user)
â”œâ”€â”€ Use letras minÃºsculas com hÃ­fens (/user-profiles)
â”œâ”€â”€ Use aninhamento para relacionamentos (/users/123/posts)
â””â”€â”€ Mantenha raso (mÃ¡ximo 3 nÃ­veis de profundidade)
```

## SeleÃ§Ã£o de MÃ©todos HTTP

| MÃ©todo | PropÃ³sito | Idempotente? | Corpo? |
|--------|---------|-------------|-------|
| **GET** | Ler recurso(s) | Sim | NÃ£o |
| **POST** | Criar novo recurso | NÃ£o | Sim |
| **PUT** | Substituir recurso inteiro | Sim | Sim |
| **PATCH** | AtualizaÃ§Ã£o parcial | NÃ£o | Sim |
| **DELETE** | Remover recurso | Sim | NÃ£o |

## SeleÃ§Ã£o de Status Codes

| SituaÃ§Ã£o | CÃ³digo | Por que |
|-----------|------|-----|
| Sucesso (leitura) | 200 | Sucesso padrÃ£o |
| Criado | 201 | Novo recurso criado |
| Sem conteÃºdo | 204 | Sucesso, nada a retornar |
| Bad request | 400 | RequisiÃ§Ã£o malformada |
| NÃ£o autorizado | 401 | Auth ausente/invÃ¡lida |
| Proibido | 403 | Auth vÃ¡lida, sem permissÃ£o |
| NÃ£o encontrado | 404 | Recurso nÃ£o existe |
| Conflito | 409 | Conflito de estado (duplicata) |
| Erro de validaÃ§Ã£o | 422 | Sintaxe vÃ¡lida, dados invÃ¡lidos |
| Rate limited | 429 | Muitas requisiÃ§Ãµes |
| Erro de servidor | 500 | Falha interna |
