# Estrutura de Resposta

> Consistência na saída é a chave para uma boa experiência do desenvolvedor.

## Padrão de Envelope

Sempre retorne um objeto JSON, nunca um array puro na raiz (por questões de segurança e extensibilidade).

### Sucesso
```json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "Amago AI"
  },
  "metadata": {
    "count": 1,
    "timestamp": "2025-01-01T10:00:00Z"
  }
}
```

### Erro
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "O campo 'email' é obrigatório.",
    "details": [
      { "field": "email", "issue": "required" }
    ]
  }
}
```

## Paginação Padronizada

Use `limit` e `offset` ou paginação baseada em cursor para grandes conjuntos de dados.

```json
{
  "data": [...],
  "pagination": {
    "total": 1050,
    "limit": 50,
    "offset": 100,
    "next_offset": 150
  }
}
```

## Regras de Ouro
1. **Datas**: Sempre use ISO 8601 (`YYYY-MM-DDTHH:mm:ssZ`).
2. **Nomenclatura**: Use `snake_case` ou `camelCase`, mas seja consistente em toda a API.
3. **Nulls vs Empty**: Não retorne `null` se puder retornar um array vazio `[]` ou objeto vazio `{}`.
