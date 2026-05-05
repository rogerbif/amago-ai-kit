---
name: sql-optimization
description: SQL query optimization and PostgreSQL performance patterns. Focuses on indexing, execution plans, and Supabase/PostgreSQL tuning.
---

# 🛡️ Amago Academy - 2026

# ⚡ SQL Optimization (Amago Elite)

> Queries que voam. Banco de dados que escala.

Esta skill define os padrões de performance para PostgreSQL e Supabase no **Amago AI Kit**.

## 🎯 Padrões de Performance
1. **Indexação Cirúrgica**: Use B-Tree para igualdade e GIN para buscas em texto ou JSONB.
2. **Execution Plans**: Use `EXPLAIN ANALYZE` para identificar gargalos (Sequential Scan vs Index Scan).
3. **Connection Pooling**: Use PgBouncer (nativo do Supabase) para evitar exaustão de conexões.
4. **Denormalização Consciente**: Se um join é muito lento e o dado muda pouco, considere cache ou tabelas de agregação.

---

## 📑 Mapa de Otimização
- `indexing.md`: Quando e como criar índices que realmente funcionam.
- `queries.md`: Padrões de escrita para evitar o famigerado N+1.
- `supabase-tuning.md`: Configurações específicas para o ecossistema Supabase.

---

*Amago AI Kit: Dados em alta velocidade.*


