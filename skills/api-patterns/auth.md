# Autenticação e Autorização

> Proteja sua API com padrões modernos.

## Padrões de Autenticação

1. **JWT (JSON Web Tokens)**: Ideal para APIs stateless. Use com `Bearer` token no header `Authorization`.
2. **OAuth2 / OIDC**: Recomendado para integrações de terceiros e SSO.
3. **API Keys**: Útil para acesso de servidor para servidor (S2S). Garanta que as chaves sejam rotacionáveis.

## Melhores Práticas de Segurança

- **HTTPS Obrigatório**: Nunca transmita credenciais em texto claro.
- **Expiração de Token**: Use tokens de curta duração e `refresh tokens`.
- **RBAC (Role-Based Access Control)**: Implemente permissões granulares.
- **Sanitização**: Valide tokens no backend em todas as requisições.

## Exemplo de Header
```http
Authorization: Bearer <seu_token_jwt>
```
