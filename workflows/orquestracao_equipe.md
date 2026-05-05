# Amago AI Kit: Workflow de Orquestração de Equipe

Este fluxo define como o **Gestor de Agentes** coordena o esquadrão de especialistas para resolver tarefas complexas com sincronização total.

## Fase 1: Ativação do Esquadrão

1. Reconhecimento: O Gestor analisa o problema e seleciona as personas necessárias.
2. Infraestrutura: O Gestor inicializa as pastas em `core/.antigravity/gestao/` e limpa registros anteriores.
3. Broadcast: Um comunicado global é emitido em `global.msg` notificando a equipe sobre o início do projeto.

## Fase 2: Planejamento e Aprovação (Gatekeeping)

1. Decomposição: O Gestor registra as tarefas iniciais no `registro_tarefas.json`.
2. Proposta: Cada persona envolvida deve criar um **Plano de Ação** detalhado e enviá-lo para sua caixa de entrada.
3. Revisão Técnica: O Gestor e a persona de **Security** revisam os planos.
4. Aprovação: A execução só inicia após o status da tarefa no registro ser alterado para "APROVADO".

## Fase 3: Execução Sincronizada

1. Verificação de Dependências: Nenhuma persona inicia uma tarefa se os pré-requisitos não estiverem concluídos.
2. Sistema de Travas: Antes de editar qualquer arquivo: a persona deve criar um arquivo `.lock` em `travas/`. Exemplo: `index.tsx.lock`.
3. Mensageria Peer-to-Peer: Personas se comunicam diretamente através das caixas de entrada para resolver integrações pontuais.
4. Liberação: Ao concluir a tarefa: a persona remove a trava: atualiza o registro e notifica o Gestor.

## Fase 4: Consolidação e Auditoria

1. Verificação QA: A persona de QA executa baterias de testes automáticos para validar a entrega.
2. Auditoria Final: A persona de Security realiza o escaneamento final de vulnerabilidades.
3. Relatório de Orquestração: O Gestor sintetiza todo o trabalho realizado: os conflitos resolvidos e o resultado final para o usuário.

## Regras de Convivência do Esquadrão

1. Respeite as Travas: Nunca ignore um arquivo de lock. Aguarde a liberação ou solicite via mensageria.
2. Comunique Mudanças: Se o plano original precisar ser alterado: submeta uma nova versão para aprovação.
3. Tipagem e Padrões: Todo código deve seguir os padrões de Modern ES definidos em `standards/`.
