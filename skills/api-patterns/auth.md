# AutenticaÃ§Ã£o e AutorizaÃ§Ã£o

> Proteja sua API com padrÃµes modernos.

## PadrÃµes de AutenticaÃ§Ã£o

1. **JWT (JSON Web Tokens)**: Ideal para APIs stateless. Use com `Bearer` token no header `Authorization`.
2. **OAuth2 / OIDC**: Recomendado para integraÃ§Ãµes de terceiros e SSO.
3. **API Keys**: Ãštil para acesso de servidor para servidor (S2S). Garanta que as chaves sejam rotacionÃ¡veis.

## Melhores PrÃ¡ticas de SeguranÃ§a

- **HTTPS ObrigatÃ³rio**: Nunca transmita credenciais em texto claro.
- **ExpiraÃ§Ã£o de Token**: Use tokens de curta duraÃ§Ã£o e `refresh tokens`.
- **RBAC (Role-Based Access Control)**: Implemente permissÃµes granulares.
- **SanitizaÃ§Ã£o**: Valide tokens no backend em todas as requisiÃ§Ãµes.

## Exemplo de Header
```http
Authorization: Bearer <seu_token_jwt>
```
