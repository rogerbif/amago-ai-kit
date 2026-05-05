// turbo-all
# Amago AI Kit: Workflow de Ativação Automática

Este workflow automatiza a preparação do ambiente de gestão utilizando o script `gestor_equipe.py`. Ao ser invocado: o assistente de IA executará os comandos necessários para deixar o esquadrão pronto para o trabalho.

## Passo 1: Inicialização da Infraestrutura
O Gestor prepara as pastas de mensagens: travas e o registro inicial.

```powershell
node core/scripts/gestor_equipe.js inicializar
```

## Passo 2: Registro de Tarefas Iniciais
Criação das tarefas de base para o PM iniciar o planejamento.

```powershell
node core/scripts/gestor_equipe.js criar_tarefa "Realizar Discovery e Planejamento" "PM"
node core/scripts/gestor_equipe.js criar_tarefa "Auditoria de Segurança do Plano" "Security" "T01"
```

## Passo 3: Comunicado de Boas-Vindas
Notificação global para ativar a consciência de equipe em todas as personas.

```powershell
node core/scripts/gestor_equipe.js mensagem "Gestor" "global" "Esquadrão Amago ativado. Iniciando fase de planejamento."
```


## Conclusão
O ambiente está agora configurado e as personas de PM e Security já possuem suas primeiras missões registradas no sistema.
