# Guia Rápido: Como Usar o Gestor de Agentes

O Gestor de Agentes é o seu ponto de contato para qualquer tarefa complexa que exija múltiplos especialistas. Siga os passos abaixo para extrair o máximo do Amago AI Kit.

## 1. Iniciando uma Missão

Para começar: basta dar o comando inicial ao Gestor. Ele cuidará de preparar a infraestrutura e notificar o esquadrão.

**Exemplo de Comando:**
> "Gestor de Agentes: prepare o esquadrão para construir uma plataforma de e-commerce com Next.js e Supabase."

## 2. O Fluxo de Trabalho Automático

Assim que a missão começa: o Gestor seguirá este fluxo (que você pode acompanhar nos arquivos):

1. **PM (Planejamento)**: O PM criará um plano detalhado. Você verá o progresso no `registro_tarefas.json`.
2. **Aprovação**: O Gestor pedirá sua aprovação do plano.
3. **Security (Auditoria)**: A persona de segurança revisará o plano antes de qualquer código ser escrito.
4. **Execução**: Backend e Frontend começarão a trabalhar. Você verá mensagens sendo trocadas em `comunicacao/caixas_entrada/`.
5. **QA (Qualidade)**: O QA testará tudo antes de te entregar.

## 3. Comandos Úteis Durante o Processo

Você pode interagir com o Gestor utilizando comandos `node` no terminal (automáticos via workflow):

* **Inicializar**: `node core/scripts/gestor_equipe.js inicializar`
* **Criar Tarefa**: `node core/scripts/gestor_equipe.js criar_tarefa "Titulo" "Responsavel"`
* **Mensagem**: `node core/scripts/gestor_equipe.js mensagem "Remetente" "Destinatario" "Conteudo"`

## 4. Onde Acompanhar o Progresso

* **Visão Geral**: `core/.antigravity/gestao/registro_tarefas.json`
* **Diálogos Técnicos**: `core/.antigravity/gestao/comunicacao/caixas_entrada/`
* **Anúncios Oficiais**: `core/.antigravity/gestao/comunicacao/global.msg`

## Regra de Ouro
O Gestor garante que ninguém "atropela" ninguém. Se um arquivo estiver com um lock (`.lock`), o especialista aguardará a vez dele: garantindo que seu projeto nunca tenha códigos quebrados por edições simultâneas.
