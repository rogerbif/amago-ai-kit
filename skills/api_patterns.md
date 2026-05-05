# Amago AI Kit: Skill de Padrões de API

Esta habilidade define as melhores práticas para o design e implementação de APIs consistentes: seguras e fáceis de consumir.

## Princípios de Design RESTful

1. Recursos e Verbos: Utilize substantivos para recursos e verbos HTTP (GET: POST: PUT: DELETE) para ações.
2. Códigos de Status: Utilize os códigos padrão corretamente (ex: 200 OK: 201 Created: 400 Bad Request: 401 Unauthorized: 404 Not Found).
3. Filtragem e Ordenação: Ofereça parâmetros consistentes para que o cliente possa refinar os dados solicitados.
4. Versionamento: Utilize versionamento (ex: /v1/...) para garantir que mudanças não quebrem integrações existentes.

## Segurança e Resiliência

1. Autenticação e Autorização: Utilize padrões modernos como JWT ou OAuth2. Nunca exponha dados sensíveis sem validação.
2. Rate Limiting: Implemente limites de requisições para proteger a API contra abusos e ataques de negação de serviço.
3. Validação de Entrada: Valide e sanitize rigorosamente qualquer dado recebido do cliente antes do processamento.
4. Formato de Erro Padronizado: Retorne mensagens de erro claras e estruturadas (ex: JSON com campo "error" e "message").

## Checklist de API

1. Os endpoints seguem as convenções RESTful estabelecidas?
2. A documentação (Swagger/OpenAPI) está atualizada e completa?
3. O sistema de autenticação e autorização está implementado corretamente?
4. A API lida com erros de forma graciosa e informativa?
