# Amago AI Kit: Skill de Arquitetura de Sistemas

Esta habilidade fornece os fundamentos para projetar sistemas escaláveis: modulares e fáceis de evoluir: garantindo que as decisões técnicas suportem os objetivos de negócio a longo prazo.

## Princípios SOLID

1. Single Responsibility (SRP): Uma classe deve ter apenas um motivo para mudar.
2. Open/Closed (OCP): Entidades devem ser abertas para extensão: mas fechadas para modificação.
3. Liskov Substitution (LSP): Subclasses devem ser substituíveis por suas classes bases.
4. Interface Segregation (ISP): Muitas interfaces específicas são melhores do que uma interface geral.
5. Dependency Inversion (DIP): Dependa de abstrações: não de implementações.

## Arquitetura de Software

1. Separação de Preocupações: Divida o sistema em camadas claras (ex: UI: Lógica de Negócio: Persistência).
2. Modularidade: Construa componentes independentes que se comunicam através de interfaces bem definidas.
3. Acoplamento e Coesão: Busque baixo acoplamento entre módulos e alta coesão dentro de cada módulo.
4. Design Baseado em Domínio (DDD): Foque no domínio do negócio para definir as fronteiras dos módulos.

## Registro de Decisões (ADR)

1. Documentação de Rationale: Toda decisão arquitetural crítica deve ser registrada em um Architectural Decision Record (ADR).
2. Contexto e Consequências: Descreva o problema: as alternativas consideradas: a decisão tomada e os impactos esperados.

## Estratégias de Evolução

1. Escalabilidade: O sistema deve ser capaz de lidar com o aumento de carga sem degradação proporcional da performance.
2. Manutenibilidade: A estrutura deve permitir que novas funcionalidades sejam adicionadas sem causar regressões complexas.
3. Observabilidade: Projete o sistema para ser monitorável (Logs: Métricas: Tracing).

## Checklist de Arquitetura

1. Os requisitos direcionam as decisões técnicas tomadas?
2. A solução proposta é a mais simples que resolve o problema?
3. Os trade-offs de cada escolha foram analisados e registrados?
4. A arquitetura permite a evolução modular do sistema?
