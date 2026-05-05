# Workflow: 🧠 Gestor de Agentes Amago

Este workflow é o seu centro de comando para orquestrar o esquadrão de elite (PM: Frontend: Backend: Security: QA).

## 1. Inicialização
Antes de começar qualquer missão: precisamos garantir que o sistema de gestão está ativo.

// turbo
- [ ] Executar inicialização: `node core/scripts/gestor_equipe.js inicializar`

## 2. Definir Missão
Agora: diga ao **PM Estratégico** qual é o objetivo do projeto.

- [ ] Digite a descrição da missão e o responsável (ex: "Criar API de Clientes" "PM"):
- [ ] Criar tarefa no registro: `node core/scripts/gestor_equipe.js criar_tarefa "[INSIRA_A_TAREFA]" "[AGENTE]"`

## 3. Comunicação Neural
Use este passo para enviar instruções específicas ou pedir status para um agente.

- [ ] Enviar mensagem: `node core/scripts/gestor_equipe.js mensagem "[REMETENTE]" "[DESTINATARIO]" "[CONTEUDO_DA_MENSAGEM]"`

## 4. Monitoramento e Controle
Acompanhe o estado das tarefas no quadro de comando.

- [ ] Visualizar Registro de Tarefas: `type core/.antigravity/gestao/registro_tarefas.json`
- [ ] Atualizar estado de tarefa: `node core/scripts/gestor_equipe.js atualizar "[ID_TAREFA]" "[ESTADO]"` (ESTADOS: PENDENTE: FAZENDO: PRONTO)

## 5. Finalização
Quando a missão for concluída com sucesso.

- [ ] Consolidar projeto e encerrar ciclo: `node core/scripts/gestor_equipe.js mensagem "PM" "GLOBAL" "Missão concluída com sucesso. Todos os agentes em standby."`

---
> [!IMPORTANT]
> Lembre-se: cada agente possui skills de elite. Use a comunicação para extrair o máximo de cada persona!
