# 🧠 Workflow: Gestor de Agentes Amago

Este é o centro de comando para orquestrar o esquadrão de especialistas (PM, Frontend, Backend, Security, QA). Siga este fluxo para garantir sincronização total e alta performance.

## 1. Inicialização Neural
Antes de qualquer missão, o ambiente de gestão deve ser ativado.

// turbo
- [ ] Iniciar Modo Interativo: `amago interativo`
- [ ] Instalar Workflows Globais (se novo usuário): `amago install-workflows`

## 2. Planejamento e Gatekeeping
O Gestor analisa o problema, seleciona as personas e define o caminho crítico.

- [ ] Decompor objetivo e criar tarefas: `amago tarefa "[DESCRIÇÃO]" "[AGENTE]"`
- [ ] **Aprovação de Segurança**: O Auditor de Security deve revisar planos complexos antes do início da execução.

## 3. Execução Sincronizada
As personas trabalham em paralelo, respeitando dependências e o sistema de travas.

- [ ] Mover para Execução: `amago atualizar [ID] FAZENDO`
- [ ] **Mensageria P2P**: Agentes trocam insights via `amago mensagem "[DE]" "[PARA]" "[CONTEÚDO]"`.
- [ ] **Auto-Scan**: Rodar `amago scan` para descoberta neural de melhorias no código atual.

## 4. Auditoria e Qualidade (QA Flow)
Nenhuma tarefa é considerada concluída sem passar pelo fluxo de qualidade.

- [ ] Solicitar Revisão: `amago atualizar [ID] PRONTO` (Isso move a tarefa para REVISAO automaticamente).
- [ ] **Validação QA**: O agente de QA audita a entrega. Se aprovado, ele marca como concluído.

## 5. Consolidação e Aprendizado
Ao final da missão, os insights são salvos para uso em projetos futuros.

- [ ] Consolidar Conhecimento: O sistema extrai aprendizados automaticamente ao finalizar tarefas.
- [ ] Encerrar Missão: Enviar comunicado global de standby.

---
> [!IMPORTANT]
> **Regra de Ouro**: Respeite sempre as travas de arquivo e a autoridade do QA para garantir um código livre de regressões e vulnerabilidades.
