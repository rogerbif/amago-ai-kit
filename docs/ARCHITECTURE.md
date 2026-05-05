# Arquitetura do Amago AI Kit

Este documento descreve a organização técnica e a lógica de funcionamento do ecossistema Amago AI Kit.

## Visão Geral

O Amago AI Kit é um sistema modular de agentes de IA projetado para o desenvolvimento de software de alta performance. Ele utiliza uma arquitetura de "Especialistas Coordenados": onde um agente central gerencia o fluxo de trabalho entre diferentes personas.

## Estrutura de Diretórios

1. core/: Contém o Manager (Orquestrador Central) que define as regras globais de operação.
2. personas/: Definições de sistema para cada papel especializado (PM, Frontend, Backend, Security, QA).
3. skills/: Módulos de habilidades específicas (Clean Code, Segurança, React, etc.) que podem ser utilizados por qualquer persona.
4. workflows/: Sequências de trabalho padronizadas para diferentes cenários de desenvolvimento.
5. standards/: Regras técnicas de codificação (Modern ES) e protocolos de interconexão.
6. docs/: Documentação detalhada do projeto e manuais de uso.

## Fluxo de Operação

O fluxo típico segue o modelo de "Planejamento -> Execução -> Validação":

1. O Manager recebe o pedido e solicita ao PM a criação de um plano.
2. Com o plano aprovado: as personas de Backend e Frontend iniciam o desenvolvimento utilizando as Skills adequadas.
3. A persona de Security realiza auditorias constantes durante o processo.
4. O QA valida a entrega final contra os critérios de aceitação.

## Princípios de Design

1. Modularidade: Cada componente (Skill ou Persona) é independente e pode ser atualizado sem afetar o sistema todo.
2. Segurança por Design: A auditoria de segurança é parte integrante do fluxo de trabalho: não uma etapa final.
3. Performance: Foco absoluto em padrões modernos que garantem a velocidade de carregamento e execução.
