# Design System - Rafael Pinheiro

Sistema de cores minimalista e tipográfico para portfólio fullstack, construído com as convenções do shadcn/ui e Tailwind CSS.

---

## 🎨 Filosofia

Uma identidade visual construída sobre três pilares: **preto, branco e amarelo**. A paleta de cores neutras (off-white e off-black) cria uma base sólida e de alto contraste, enquanto o amarelo dourado é usado para dar vida, personalidade e guiar o olhar do usuário.

- ✅ **Tipografia Forte:** A base da experiência.
- ✅ **Contraste Elevado:** Clareza e legibilidade com a paleta neutra.
- ✅ **Amarelo como Identidade:** O amarelo é um elemento central, usado de forma hierárquica para CTAs, decoração e destaques.
- ✅ **Acessibilidade:** Conformidade com as diretrizes WCAG.

---

## 🎯 Paleta de Cores e Uso

As cores são definidas como variáveis CSS em `app/globals.css` para os modos claro (`:root`) e escuro (`.dark`). O Tailwind CSS as utiliza automaticamente através de suas classes de utilitário padrão.

| Uso Principal | Variável CSS | Classe Tailwind |
| :--- | :--- | :--- |
| Fundo da página | `--background` | `bg-background` |
| Texto principal | `--foreground` | `text-foreground` |
| Fundo de componentes (Cards, Popovers) | `--card` | `bg-card` |
| Texto em componentes | `--card-foreground` | `text-card-foreground` |
| Ações primárias (botões, links) | `--primary` | `bg-primary`, `text-primary` |
| Texto sobre ações primárias | `--primary-foreground` | `text-primary-foreground` |
| Componentes secundários | `--secondary` | `bg-secondary`, `text-secondary` |
| Texto sobre componentes secundários | `--secondary-foreground` | `text-secondary-foreground` |
| Conteúdo "mutado" (sutil) | `--muted` | `bg-muted`, `text-muted` |
| Texto "mutado" | `--muted-foreground` | `text-muted-foreground` |
| Destaques e ênfase (similar ao primário) | `--accent` | `bg-accent`, `text-accent` |
| Texto sobre destaques | `--accent-foreground` | `text-accent-foreground` |
| Ações destrutivas (erros, exclusão) | `--destructive` | `bg-destructive` |
| Bordas de componentes | `--border` | `border-border` |
| Bordas de inputs | `--input` | `border-input` |
| Anel de foco (focus ring) | `--ring` | `ring-ring` |

---

## 🚀 Exemplos de Uso

### Hero Section

```tsx
<section className="min-h-screen bg-background px-8 py-20">
  <h1 className="text-7xl font-black text-foreground mb-4">
    Rafael Pinheiro
  </h1>
  <h2 className="text-6xl font-black text-foreground mb-4">
    Desenvolvedor
  </h2>
  <h2 className="text-6xl font-black text-foreground mb-6">
    Fullstack
  </h2>
  <p className="text-xl text-secondary-foreground max-w-2xl mb-8">
    Especializado em React, Node.js e TypeScript.
  </p>
  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
    Projetos
    <span>↓</span>
  </button>
</section>
```

### Card de Projeto

```tsx
<article className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors">
  <h3 className="text-2xl font-bold text-card-foreground mb-3">
    E-commerce Platform
  </h3>
  <p className="text-muted-foreground mb-4">
    Plataforma completa de e-commerce com Next.js, TypeScript e Stripe.
  </p>
  
  {/* Tags */}
  <div className="flex flex-wrap gap-2 mb-6">
    <span className="text-sm text-secondary-foreground bg-secondary px-3 py-1 rounded-full">
      Next.js
    </span>
    {/* ...outras tags */}
  </div>
  
  {/* Link */}
  <a 
    href="#" 
    className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-4 hover:decoration-primary/90 transition-colors"
  >
    Ver detalhes
    <span>→</span>
  </a>
</article>
```

### Formulário

```tsx
<form className="space-y-6">
  <div>
    <label className="block text-foreground font-medium mb-2">
      Seu nome
    </label>
    <input 
      type="text"
      className="w-full px-4 py-3 bg-card border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
      placeholder="Digite seu nome"
    />
  </div>
  
  {/* ...outros campos */}
  
  <button 
    type="submit"
    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-semibold transition-colors"
  >
    Enviar mensagem
  </button>
</form>
```

---

## 🌓 Dark Mode

O dark mode é gerenciado pela biblioteca `next-themes`. Ela adiciona a classe `.dark` ao elemento `<html>`, o que ativa automaticamente as variáveis de cor definidas no bloco `.dark` em `globals.css`. Um componente de switch (`ThemeSwitch`) permite ao usuário alternar entre os temas.

---

## 🔗 Recursos Úteis

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [OKLCH Color Picker](https://oklch.com)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
