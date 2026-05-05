
---

# 🛡️ Amago Academy - 2026

# Amago AI Kit

> Ecossistema de especialistas de elite e habilidades modulares para Antigravity.

O **Amago AI Kit** transforma o Antigravity em uma central de inteligência descentralizada. Em vez de agentes genéricos, você tem acesso a especialistas focados em resultados técnicos de alta performance.

## 🚀 Como Funciona

O kit é baseado em três pilares:
1. **Agentes de Elite**: Especialistas com frameworks de decisão e checklists mandatórios.
2. **Habilidades (Skills)**: Conhecimento técnico granular carregado sob demanda (**Progressive Disclosure**).
3. **Fluxos de Trabalho**: Receitas passo a passo para tarefas complexas.

---

## 📂 Estrutura

- `agents/`: Backend, Frontend, PM, Security, QA, DevOps, Debugger e Docs.
- `skills/`: Biblioteca de 25 habilidades técnicas modulares.
- `workflows/`: Workflows estruturados para planejamento, debug e brainstorm.
- `standards/`: Protocolos de IA (GEMINI) e padrões de Design/Código.
- `tools/`: Ferramentas de manutenção e automação do kit.

---

## 📖 Guia de Uso (Manual de Operação)

O Amago AI Kit funciona como um "Sistema Operacional de Inteligência". Siga estes passos para extrair o máximo de performance:

### 1. Invocação de Agente
Sempre que tiver uma tarefa de um domínio específico, chame o especialista:
> *"Aja como o `backend-specialist` e use a skill `supabase-automation` para criar este endpoint."*

### 2. Uso de Workflows
Para tarefas complexas, não peça apenas o código. Peça o fluxo:
> *"Siga o workflow de `plan.md` para planejar a migração do banco de dados."*

### 3. Aplicação de Skills
Você pode forçar a aplicação de padrões específicos em qualquer código:
> *"Revise este componente usando `clean-code` e `accessibility-audit`."*

### 4. O Fluxo Amago (Protocolo GEMINI)
O kit está configurado para:
1. **Classificar** seu pedido automaticamente.
2. **Anunciar** o agente ativo: `🤖 Aplicando conhecimentos de @[agente]...`
3. **Pausar** para perguntas (Portão Socrático) se o pedido for vago.
4. **Planejar** antes de executar qualquer mudança complexa.

---

## 🛠️ Como Instalar

Existem três formas de integrar o **Amago AI Kit** ao seu fluxo de trabalho:

### 1. Instalação Automática (Recomendado)
Se você já clonou este repositório, basta executar o script de ativação:
```powershell
./setup.ps1
```
*Este script configura o ambiente, valida o Protocolo GEMINI e prepara o seu `.gitignore`.*

### 2. Uso como Submódulo (Projetos Existentes)
Para manter o kit atualizado dentro de um projeto existente sem misturar os históricos:
```bash
git submodule add https://github.com/seu-usuario/amago-ai-kit.git amago-kit
cp amago-kit/gemini.md .
```
*É vital que o arquivo `gemini.md` esteja na raiz do seu projeto para ativar a IA.*

### 3. Clonagem Direta
Para começar um projeto novo do zero já com o kit:
```bash
git clone https://github.com/seu-usuario/amago-ai-kit.git .
./setup.ps1
```

---

## 🚀 O que acontece após a instalação?
Assim que o arquivo `gemini.md` estiver na raiz do seu projeto, o Antigravity assumirá o **Protocolo GEMINI**. A IA passará a:
1. **Classificar** cada pedido seu.
2. **Consultar** a pasta `agents/` para escolher o melhor especialista.
3. **Carregar** as `skills/` técnicas necessárias sob demanda.

---

*Amago AI Kit: Inteligência de elite para desenvolvimento acelerado.*
