# Amago AI Kit: Workflow de Auditoria de Segurança

Este fluxo define o processo sistemático para auditar o código e a infraestrutura em busca de falhas de segurança.

## Etapas de Auditoria

1. Mapeamento de Superfície: Identificar todos os pontos de entrada de dados (APIs, formulários, uploads).
2. Escaneamento Automatizado: Utilizar as Skills de segurança para rodar ferramentas de detecção de vulnerabilidades conhecidas.
3. Revisão Manual de Código: Analisar lógicas críticas (autenticação, autorização, manipulação de segredos).
4. Simulação de Ataque: Realizar testes controlados para validar as defesas implementadas.
5. Plano de Remediação: Criar um plano de ação prioritário para corrigir as falhas identificadas.

## Gatilhos de Auditoria

Este fluxo deve ser executado obrigatoriamente quando:
1. Uma nova funcionalidade de autenticação ou pagamento for adicionada.
2. Houver alteração significativa na estrutura do banco de dados.
3. Antes de cada release principal do produto.
4. Ao identificar um comportamento anômalo nos logs do sistema.
