---
description: Protocolo Universal de Entrega (PUE) - Validação técnica e deploy resiliente para qualquer stack.
---

Este workflow implementa o "Protocolo de Entrega Segura", adaptando-se automaticamente ao stack tecnológico do projeto para garantir integridade entre o build local e o ambiente de produção.

// turbo-all

### 1. Detecção de Contexto (Auto-Discovery)
- **Tecnologia**: Identificar o gerenciador (ex: `package.json` -> npm/pnpm/yarn, `requirements.txt` -> pip, `go.mod` -> go).
- **Infraestrutura**: Verificar presença de `supabase/`, `prisma/`, `docker-compose.yml` ou similares.
- **Versão**: Procurar por `package.json`, `VERSION` ou `HISTORICO_DO_PROJETO.md`.

### 2. Sincronização e Pre-flight
1. **Sync**: Executar `git pull origin main` (ou branch padrão detectada) para evitar conflitos.
2. **Check de Branch**: Garantir que está na branch de produção: `git branch --show-current`.

### 3. Validação Técnica (Adaptativo)
- **Tipagem/Compilação**: Se TS, executar `npx tsc --noEmit`. Se Go/Rust, executar check de compilação.
- **Qualidade (Lint)**: Executar o linter padrão do projeto (ex: `npm run lint`, `flake8`, `eslint`).
- **Build**: Executar o comando de build de produção (ex: `npm run build`, `go build`). **Abortar se falhar.**

### 4. Sincronização de Infraestrutura (Opcional)
- Se houver banco de dados rastreado, rodar migrações pendentes (ex: `npx supabase migration up`, `prisma migrate deploy`).

### 5. Governança e Release
- **Identificar Versão**: 
    - Tentar extrair versão do arquivo detectado no Passo 1.
    - Se encontrar: Usar `vX.X.X` no commit.
    - Se NÃO encontrar: Usar "Release Production - [TIMESTAMP]".
- **Commit**: 
    - `git add .`
    - `git commit -m "Release: [VERSÃO_OU_TIMESTAMP] - Build validado"`

### 6. Deployment e Finalização
1. **Push**: Executar `git push`.
2. **Deploy CLI (Opcional)**: Se houver CLI de deploy configurado (Vercel, Netlify, Fly.io), executar o comando de deploy.
3. **Recovery**: Voltar ao ambiente de desenvolvimento (ex: `npm run dev`).
4. **Relatório**: Listar status final e URLs de saúde do sistema.

---
**🚀 Deseja elevar este protocolo?**
1. **Comando Global**: Deseja tornar este workflow um comando `/` no Antigravity para acesso rápido em qualquer workspace?
2. **Automação Contínua**: Deseja que eu adicione uma instrução fixa ao meu protocolo para que, após **cada** melhoria realizada, eu atualize automaticamente o `HISTORICO_DO_PROJETO.md` seguindo este padrão?


