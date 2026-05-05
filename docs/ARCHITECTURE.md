
---

# 🛡️ Amago Academy - 2026

# Arquitetura do Amago AI Kit

> Este documento descreve a organização técnica e a lógica de funcionamento do ecossistema Amago AI Kit.

## 📋 Visão Geral

O Amago AI Kit é um framework descentralizado de conhecimento e automação para o Antigravity. Ele utiliza uma arquitetura baseada em **Agentes Especialistas e Fluxos de Trabalho**, permitindo que o desenvolvedor utilize inteligências altamente qualificadas de forma modular e independente.

## 📂 Estrutura de Diretórios (Hierarquia de Elite)

1. **`agents/`**: Definições de sistema para cada papel especializado (Backend, Frontend, PM, QA, Security, Debugger, DevOps, Docs).
2. **`skills/`**: Biblioteca de habilidades técnicas e padrões reutilizáveis (Clean Code, API Patterns, SQL Optimization, etc.).
3. **`workflows/`**: Sequências de trabalho padronizadas (Workflows) para planejamento, debug e criação.
4. **`standards/`**: Protocolos técnicos da IA (GEMINI.md) e diretrizes de design moderno (UI Design).
5. **`docs/`**: Documentação técnica, arquitetural e guias de referência.
6. **`tools/`**: Ferramentas auxiliares para validação e manutenção do kit.

## 🔄 Fluxo de Trabalho (Workflows)

Diferente de sistemas centralizados, o Amago AI Kit foca na execução de fluxos especializados orquestrados pelo desenvolvedor:

1. **Descoberta e Planejamento**: Utilizando o `agent-orchestrator` e o fluxo de planejamento.
2. **Desenvolvimento de Feature**: Fluxo coordenado entre especialistas com auditoria constante.
3. **Auditoria de Segurança**: Camada mandatória de segurança aplicada pelo agente de Security.
4. **Validação de QA**: Auditoria de qualidade final antes do fechamento da tarefa.

## ⚖️ Princípios de Design

1. **Modularidade**: Cada componente (Agente ou Skill) é independente e pode ser customizado.
2. **Divulgação Progressiva**: O conhecimento é carregado apenas quando necessário (sob demanda).
3. **Segurança e Qualidade**: Incorporadas no núcleo de cada agente como regras invioláveis.
4. **Padronização Híbrida**: Metadados em Inglês para precisão da IA e conteúdo em Português para controle humano.

---


