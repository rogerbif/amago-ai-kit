# Amago AI Kit: Skill Next.js e React

Esta habilidade fornece as diretrizes para construir aplicações web de alta performance utilizando React e o App Router do Next.js.

## Princípios de Performance

1. Elimine Cascatas (Waterfalls): Evite buscar dados de forma sequencial quando eles podem ser buscados em paralelo utilizando "Promise.all()".
2. Otimização de Pacotes (Bundle Size): Utilize "dynamic imports" para carregar componentes pesados apenas quando necessário.
3. Componentes de Servidor (Server Components): Utilize Server Components por padrão para reduzir a quantidade de JavaScript enviada ao cliente.
4. Renderização Progressiva: Utilize as fronteiras de "Suspense" para melhorar a percepção de carregamento e o tempo para interatividade.

## Boas Práticas de Desenvolvimento

1. Estado Local vs Global: Prefira sempre o estado mais próximo de onde ele é utilizado. Use Context apenas para dados verdadeiramente globais.
2. Memoização Consciente: Utilize "useMemo" e "useCallback" apenas após medir a necessidade real para evitar re-renderizações custosas.
3. Imagens e Fontes: Utilize os componentes nativos do Next.js ("next/image" e "next/font") para otimização automática de ativos.
4. Tipagem Estrita: Mantenha 100% de cobertura com TypeScript: evitando o uso de "any" e definindo interfaces claras para props e estados.

## Checklist de Entrega

1. As cascatas de dados foram eliminadas?
2. O tamanho do pacote principal está otimizado?
3. Os componentes interativos são Client Components e os estáticos são Server Components?
4. A acessibilidade foi validada com tags semânticas e atributos ARIA?
