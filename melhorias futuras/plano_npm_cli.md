# Plano de Expansão: Amago AI Kit (NPM & CLI)

Este documento detalha a arquitetura e os passos necessários para transformar o Amago AI Kit em um pacote instalável e orquestrável via CLI: garantindo integração nativa com o Antigravity.

## Objetivo
Transformar o kit em uma ferramenta global (`amago`) que automatiza a inicialização de projetos: a gestão de agentes e a orquestração de tarefas complexas utilizando Modern ES.

## Arquitetura do Pacote
A estrutura deve seguir o padrão modular:

```text
/amago-ai-kit
├── bin/
│   └── amago.js                # Ponto de entrada da CLI
├── src/
│   ├── core/
│   │   ├── gestor.js           # Lógica de decisão e ativação
│   │   ├── orquestrador.js     # Coordenação paralela
│   │   └── registro.js         # Estado (tarefas/locks)
│   ├── commands/
│   │   ├── init.js             # Lógica do 'amago init'
│   │   └── run.js              # Lógica do 'amago run'
│   └── utils/
│       ├── fs-manager.js       # IO e Symlinks (Cross-platform)
│       └── ai-parser.js        # Parser de YAML e Markdown
└── assets/
    ├── personas/               # Perfis Elite Amago
    ├── skills/                 # Skills modulares
    └── workflows/              # Fluxos padronizados
```

## Configurações Técnicas (package.json)
- **Type**: `module` (Suporte obrigatório a ESM).
- **Bin**: `{"amago": "./bin/amago.js"}`.
- **Dependencies Sugeridas**: `commander` (CLI): `chalk` (Terminal UI): `symlink-dir` (Links simbólicos robustos).

## Dashboard Visual Integrado (Neural Monitor)
O Amago AI Kit contará com uma interface visual reativa que funciona dentro do ecossistema de Artefatos/Webviews do editor: eliminando a necessidade de janelas externas.

### Arquitetura de Telemetria
- **Telemetria Central (`src/core/telemetry.js`)**: Um servidor WebSocket minimalista que capta eventos do `Gestor` e os transmite em tempo real.
- **Bridge de Artefato**: O comando `amago dash` gera um arquivo `.amago-view.html` auto-contido que se conecta ao servidor local.
- **Visualização**: A IA renderiza este arquivo como um **Artefato** (painel lateral): permitindo o monitoramento persistente ao lado do chat.

### Design e UX (NeuroDesign)
- **Visualização de Carga Cognitiva**: Uso de animações de pulsação e gradientes dinâmicos para indicar o estado de cada agente (Ocioso: Processando: Crítico).
- **Grafo Neural**: Representação visual das conexões entre as Personas e as Skills carregadas.
- **Estética**: Design minimalista: Glassmorphism e tipografia premium (sem uso de travessões).

## Comandos Principais

### 1. `amago init`
- **Função**: Prepara o ambiente: cria links simbólicos para `.agents/skills` e configura o dashboard local.

### 2. `amago run "tarefa"`
- **Função**: Dispara a orquestração e ativa o servidor de telemetria automaticamente.

### 3. `amago dash`
- **Função**: Abre ou reseta o painel visual de monitoramento integrado.

## Padrões de Conteúdo (IA)
- **Metadados**: YAML Frontmatter rigoroso para todas as novas skills criadas.
- **Chain-of-Thought**: Instruções estruturadas para maximizar a precisão lógica dos agentes.

## Restrições Inegociáveis
- **Proibição de Travessão**: O caractere (—) é estritamente proibido em qualquer interface ou código gerado.
- **Modern ES**: Código 100% ES2022+ (ESM).
- **Privacidade**: Telemetria limitada estritamente ao `127.0.0.1` com tokens de acesso efêmeros.

