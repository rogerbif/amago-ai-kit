
# 🛡️ Amago Academy - 2026

# 🎨 UI Design Standards (Amago Elite)

> O design não é apenas como parece, mas como funciona e como se sente.

Este guia define as regras mandatórias para interfaces criadas pelo **Amago AI Kit**, focando em profissionalismo, contraste e eliminação de clichês.

## 🚫 BANIMENTOS (Regras de Ouro)

1. **PROIBIDO usar Emojis como ícones**: NUNCA use 🎨, 🚀, ⚙️ como ícones de interface. Use sempre SVGs técnicos (Lucide, Heroicons).
2. **BANIMENTO do Roxo**: Evite o roxo/magenta como cor primária (clichê de IA), a menos que explicitamente solicitado.
3. **PROIBIDO Escala no Hover**: Evite `scale-105` em cards que deslocam o layout. Use transições de cor, borda ou sombra.

---

## 🎨 Contraste e Acessibilidade

### Modo Claro (Light Mode)
- **Texto Principal**: Use Slate-900 (`#0F172A`) para legibilidade máxima.
- **Texto Secundário**: Use Slate-600 (`#475569`) no mínimo. Evite cinzas muito claros.
- **Bordas**: Devem ser visíveis (ex: `border-gray-200`). Elementos transparentes/glass em modo claro precisam de opacidade maior (ex: `bg-white/80`).

### Modo Escuro (Dark Mode)
- **Contraste**: Garanta que o texto mantenha o ratio de 4.5:1.
- **Profundidade**: Use camadas de cinza escuro/preto com bordas sutis para separar elementos.

---

## 🖱️ Interatividade e Feedback

- **Cursor**: Todo elemento clicável deve ter `cursor-pointer`.
- **Transições**: Use durações entre **150ms e 300ms** para um feedback orgânico. Ex: `transition-all duration-200`.
- **Focus States**: Botões e inputs devem ter estados de foco visíveis para navegação por teclado.

---

## 📱 Responsividade (Mobile-First)

1. **Zero Scroll Horizontal**: O site deve ser perfeitamente navegável em 375px.
2. **Navbar Flutuante**: Prefira `top-4 left-4 right-4` em vez de `top-0` colado nas bordas (estética mais moderna/premium).
3. **Toque**: Áreas clicáveis devem ter no mínimo 44px de altura/largura.

---

## ✅ Checklist Pré-Entrega

- [ ] Os ícones são consistentes (mesma biblioteca)?
- [ ] O contraste de texto está acessível em ambos os modos?
- [ ] Não há emojis sendo usados como elementos de UI?
- [ ] O hover em botões/cards é suave e não quebra o layout?
- [ ] A página foi testada em 375px e 1440px?

---



