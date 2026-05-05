---
name: database-design
description: Data modeling, normalization, indexing, query performance, and migration management.
---

# 🛡️ Amago Academy - 2026

# 🗄️ Database Design (Amago Elite)

> Os dados são o ativo mais precioso. Molde-os com precisão.

Esta skill define os padrões de modelagem e gerenciamento de bancos de dados no **Amago AI Kit**, com foco especial em PostgreSQL/Supabase.

## 🎯 Regra de Leitura Seletiva

**Leia APENAS os arquivos relevantes!**

---

## 📑 Mapa de Conteúdo

| Arquivo | Descrição | Quando Ler |
|------|-------------|--------------|
| `schema.md` | Normalização, tipos de dados e relacionamentos | Ao criar novas tabelas |
| `indexing.md` | Estratégias de indexação para performance | Ao otimizar buscas lentas |
| `migrations.md` | Padrões de evolução de banco de dados | Ao alterar a estrutura existente |
| `optimization.md` | Query planning e performance avançada | Para sistemas de alta carga |

---

## ✅ Princípios de Elite Amago

1. **Normalização Pragmática**: Siga até a 3ª forma normal, mas desnormalize se a performance exigir.
2. **Tipagem Forte**: Use o tipo de dado mais restritivo possível.
3. **Integridade Referencial**: Utilize Foreign Keys e Constraints sempre.
4. **Segurança de Nível de Linha (RLS)**: Obrigatório no Supabase para proteção de dados.

---

## ❌ Anti-Padrões

- **Over-indexing**: Índices demais deixam as escritas lentas.
- **Select ***: Nunca busque todas as colunas se precisar de apenas algumas.
- **Falta de Migrações**: Alterar o banco manualmente sem registro em código.
- **Dados Sensíveis em Texto Claro**: Sempre use criptografia para dados críticos.

---

*Amago AI Kit: Integridade de dados acima de tudo.*


