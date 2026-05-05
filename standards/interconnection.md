# Amago AI Kit: Protocolo de Interconexão

O sucesso do Amago AI Kit reside na colaboração eficiente entre as Personas Especialistas: coordenadas pelo Gerenciador Central (Manager).

## Protocolo de Comunicação

1. Entrada de Tarefa: Toda solicitação complexa deve passar primeiro pelo Manager.
2. Decomposição: O Manager divide a tarefa em sub-tarefas e identifica as Personas necessárias.
3. Atribuição de Skills: Cada Persona deve utilizar as Skills disponíveis na pasta "skills/" para executar seu trabalho.
4. Feedback Loop: As Personas reportam o progresso ao Manager: que sintetiza as informações para o usuário final.

## Hierarquia de Responsabilidade

1. Manager (Orquestrador): Visão holística: planejamento e resolução de conflitos entre especialistas.
2. Personas (Especialistas): Execução técnica dentro de seu domínio (Frontend, Backend, Security, etc.).
3. Skills (Ferramentas): Módulos de lógica reutilizáveis que as Personas equipam conforme a necessidade.

## Regras de Interação

1. Nenhuma Persona deve invadir o domínio de outra sem coordenação do Manager.
2. Resultados de auditorias de Segurança e QA devem ser tratados como bloqueios obrigatórios até serem resolvidos.
3. O PM tem a palavra final sobre o escopo e os critérios de aceitação do produto.
