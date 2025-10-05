# Design System - Rafael Pinheiro

Sistema de cores minimalista e tipográfico para portfólio fullstack.

---

## 🎨 Filosofia

Uma identidade visual construída sobre três pilares: **preto, branco e amarelo**. A paleta de cores neutras (off-white e off-black) cria uma base sólida e de alto contraste, enquanto o amarelo dourado é usado para dar vida, personalidade e guiar o olhar do usuário.

- ✅ **Tipografia Forte:** A base da experiência.
- ✅ **Contraste Elevado:** Clareza e legibilidade com a paleta neutra.
- ✅ **Amarelo como Identidade:** O amarelo é um elemento central, usado de forma hierárquica para CTAs, decoração e destaques.
- ✅ **Acessibilidade:** Conformidade com as diretrizes WCAG.

---

## 🎯 Paleta de Cores

### Accent (Amarelo Dourado)

O amarelo é um pilar da identidade visual. Use-o de forma hierárquica para guiar o usuário.

| Classe | Uso | Exemplo |
|--------|-----|---------|
| `bg-accent-400` | Hover mais claro | Hover em botões light |
| `bg-accent-500` | **BASE** (#FECC4C) | Botões primários |
| `bg-accent-600` | Active/pressed | Estado pressionado |

⚠️ **Cuidado com `text-accent-*`** - Amarelo só funciona como texto sobre fundos escuros.

### Neutrals (Sistema Principal)

Seu sistema completo de cinzas. Se adapta automaticamente ao dark mode.

| Classe | Light Mode | Dark Mode | Uso |
|--------|------------|-----------|-----|
| `bg-neutral-0` | Off-white creme | #1E1E1E (preto) | Fundo principal da página |
| `bg-neutral-50` | Branco puro | Preto profundo | Cards elevados |
| `bg-neutral-100` | Creme claro | Cinza escuro | Sections alternadas |
| `border-neutral-200` | Cinza clarinho | Cinza escuro | Bordas sutis |
| `border-neutral-300` | Cinza claro | Cinza médio-escuro | Bordas hover |
| `text-neutral-400` | Cinza médio-claro | Cinza médio | Texto desabilitado |
| `text-neutral-500` | Cinza médio | Cinza médio-claro | Texto terciário |
| `text-neutral-600` | Cinza escuro | Cinza claro | Texto secundário |
| `text-neutral-700` | Cinza muito escuro | Cinza muito claro | Texto enfatizado |
| `text-neutral-800` | **#1E1E1E (preto)** | Quase branco | **Texto principal** |
| `text-neutral-900` | Preto intenso | Branco intenso | Texto super enfatizado |

---

## 📐 Aliases Semânticos

Para facilitar o uso, criamos aliases que fazem mais sentido semanticamente:

### Backgrounds
```tsx
bg-bg-primary     // Fundo principal (off-white / #1E1E1E)
bg-bg-secondary   // Fundo alternativo
bg-bg-elevated    // Cards (branco puro / preto profundo)
```

### Textos
```tsx
text-text-primary    // Texto principal (preto / branco)
text-text-secondary  // Texto secundário (cinza)
text-text-tertiary   // Texto terciário (cinza claro)
text-text-disabled   // Texto desabilitado
```

### Bordas
```tsx
border-border-subtle   // Bordas muito sutis
border-border-default  // Bordas padrão
```

### Interativos
```tsx
bg-cta              // Call-to-action (amarelo)
hover:bg-cta-hover  // Hover do CTA
```

---

## 🚀 Exemplos de Uso

### Hero Section

```tsx
<section className="min-h-screen bg-bg-primary px-8 py-20">
  <h1 className="text-7xl font-black text-text-primary mb-4">
    Rafael Pinheiro
  </h1>
  <h2 className="text-6xl font-black text-text-primary mb-4">
    Desenvolvedor
  </h2>
  <h2 className="text-6xl font-black text-text-primary mb-6">
    Fullstack
  </h2>
  <p className="text-xl text-text-secondary max-w-2xl mb-8">
    especializado em React, Node.js e TypeScript. Entregar 
    Qualidade com velocidade é o que me norteia
  </p>
  <button className="bg-cta hover:bg-cta-hover text-neutral-800 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
    Projetos
    <span>↓</span>
  </button>
</section>
```

### Card de Projeto

```tsx
<article className="bg-bg-elevated border border-border-subtle rounded-2xl p-8 hover:border-cta transition-colors">
  <h3 className="text-2xl font-bold text-text-primary mb-3">
    E-commerce Platform
  </h3>
  <p className="text-text-secondary mb-4">
    Plataforma completa de e-commerce com Next.js, TypeScript e Stripe.
  </p>
  
  {/* Tags */}
  <div className="flex flex-wrap gap-2 mb-6">
    <span className="text-sm text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full">
      Next.js
    </span>
    <span className="text-sm text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full">
      TypeScript
    </span>
    <span className="text-sm text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full">
      Stripe
    </span>
  </div>
  
  {/* Link com underline accent */}
  <a 
    href="#" 
    className="text-text-primary font-medium underline decoration-cta decoration-2 underline-offset-4 hover:decoration-cta-hover transition-colors inline-flex items-center gap-1"
  >
    Ver detalhes
    <span>→</span>
  </a>
</article>
```

### Botões

```tsx
{/* Botão Primary (CTA) */}
<button className="bg-cta hover:bg-cta-hover text-neutral-800 px-6 py-3 rounded-lg font-semibold transition-colors">
  Ver projetos
</button>

{/* Botão Secondary */}
<button className="bg-bg-secondary hover:bg-border-subtle text-text-primary px-6 py-3 rounded-lg font-semibold transition-colors">
  Contato
</button>

{/* Botão Ghost */}
<button className="text-text-primary hover:text-cta transition-colors">
  Saiba mais
</button>

{/* Botão Outline */}
<button className="border-2 border-border-default hover:border-cta text-text-primary hover:text-cta px-6 py-3 rounded-lg font-semibold transition-colors">
  Baixar CV
</button>
```

### Links

```tsx
{/* Link com underline accent (recomendado) */}
<a 
  href="#" 
  className="text-text-primary underline decoration-cta decoration-2 underline-offset-4 hover:decoration-cta-hover transition-colors"
>
  Ver mais detalhes
</a>

{/* Link simples */}
<a href="#" className="text-text-primary hover:text-cta transition-colors">
  GitHub
</a>
```

### Section com Fundo Accent

```tsx
<section className="bg-cta py-20 px-8">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-black text-neutral-800 mb-6">
      Vamos trabalhar juntos?
    </h2>
    <p className="text-lg text-neutral-700 mb-8">
      Sempre aberto a novos desafios e oportunidades.
    </p>
    
    {/* Botão invertido */}
    <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
      Enviar email
    </button>
  </div>
</section>
```

### Formulário

```tsx
<form className="space-y-6">
  {/* Input */}
  <div>
    <label className="block text-text-primary font-medium mb-2">
      Seu nome
    </label>
    <input 
      type="text"
      className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded-lg text-text-primary placeholder:text-text-disabled focus:border-cta focus:outline-none transition-colors"
      placeholder="Digite seu nome"
    />
  </div>
  
  {/* Textarea */}
  <div>
    <label className="block text-text-primary font-medium mb-2">
      Mensagem
    </label>
    <textarea 
      rows={4}
      className="w-full px-4 py-3 bg-bg-elevated border border-border-subtle rounded-lg text-text-primary placeholder:text-text-disabled focus:border-cta focus:outline-none transition-colors resize-none"
      placeholder="Sua mensagem..."
    />
  </div>
  
  {/* Submit */}
  <button 
    type="submit"
    className="w-full bg-cta hover:bg-cta-hover text-neutral-800 py-4 rounded-lg font-semibold transition-colors"
  >
    Enviar mensagem
  </button>
</form>
```

---

## 🎭 Estados Semânticos

Use **apenas** quando necessário comunicar status (sucesso, erro, etc.).

### Success (Verde)

```tsx
<div className="bg-success-bg border border-success-border text-success-text p-4 rounded-lg">
  <p className="font-medium">✓ Mensagem enviada com sucesso!</p>
</div>
```

### Error (Vermelho)

```tsx
<div className="bg-error-bg border border-error-border text-error-text p-4 rounded-lg">
  <p className="font-medium">✗ Erro ao enviar mensagem. Tente novamente.</p>
</div>
```

### Warning (Laranja)

```tsx
<div className="bg-warning-bg border border-warning-border text-warning-text p-4 rounded-lg">
  <p className="font-medium">⚠ Preencha todos os campos obrigatórios.</p>
</div>
```

### Info (Azul)

```tsx
<div className="bg-info-bg border border-info-border text-info-text p-4 rounded-lg">
  <p className="font-medium">ℹ Este projeto está em desenvolvimento.</p>
</div>
```

---

## 💡 Quando PODE Usar Accent Como Texto

Amarelo funciona como texto **apenas sobre fundos escuros**. Aqui estão os casos válidos:

### ✅ Casos Permitidos

#### 1. Botão Invertido (Dark Background)

```tsx
{/* White mode - fundo escuro, texto amarelo */}
<button className="bg-neutral-800 hover:bg-neutral-700 text-accent-500 hover:text-accent-400 px-6 py-3 rounded-lg font-semibold transition-colors">
  Botão Invertido
</button>

{/* Dark mode - também funciona */}
<button className="bg-neutral-900 text-accent-500 px-6 py-3 rounded-lg">
  Ver mais
</button>
```

**Contraste**: 10.8:1 ✅ Passa WCAG AAA

#### 2. Texto sobre Section Escura

```tsx
<section className="bg-neutral-900 py-20 px-8">
  <h2 className="text-5xl font-black text-accent-500 mb-6">
    Destaque Amarelo
  </h2>
  <p className="text-neutral-300">
    Texto normal em cinza claro
  </p>
</section>
```

#### 3. Badge/Tag em Fundo Escuro

```tsx
<div className="bg-neutral-800 p-8 rounded-xl">
  <span className="inline-block bg-neutral-900 text-accent-500 px-3 py-1 rounded-full text-sm font-medium">
    ⭐ Destaque
  </span>
</div>
```

#### 4. Hover States em Cards Escuros

```tsx
<article className="bg-neutral-800 p-6 rounded-xl group">
  <h3 className="text-neutral-50 group-hover:text-accent-500 transition-colors">
    Título com hover amarelo
  </h3>
</article>
```

### ❌ Casos Proibidos

```tsx
❌ <p className="bg-white text-accent-500">Contraste 2.4:1 - Falha WCAG</p>
❌ <p className="bg-bg-primary text-accent-500">Contraste 2.4:1 - Ilegível</p>
❌ <p className="bg-neutral-100 text-accent-500">Contraste 2.9:1 - Ainda ruim</p>
❌ <p className="bg-neutral-200 text-accent-500">Contraste 3.5:1 - Limítrofe</p>
```

### 🎯 Regra Prática

**Se o fundo for `neutral-700` ou mais escuro → texto amarelo OK ✅**

| Fundo | Texto Amarelo? | Contraste |
|-------|----------------|-----------|
| `neutral-0` a `neutral-600` | ❌ NÃO | < 4.5:1 |
| `neutral-700` | ⚠️ Limítrofe | ~4.8:1 |
| `neutral-800` | ✅ SIM | 10.8:1 |
| `neutral-900` | ✅ SIM | 13.2:1 |

---

## ❌ O Que NÃO Fazer

### 1. Amarelo como texto: apenas sobre fundos escuros
```tsx
❌ <p className="bg-bg-primary text-accent-500">Ilegível (contraste 2.4:1)</p>
❌ <p className="bg-white text-accent-500">Ilegível (contraste 2.4:1)</p>

✅ <p className="bg-neutral-800 text-accent-500">Legível! (contraste 10.8:1)</p>
✅ <p className="bg-neutral-900 text-accent-500">Legível! (contraste 13.2:1)</p>
✅ <button className="bg-neutral-800 text-accent-500">Botão invertido</button>

🎯 REGRA: Use `text-accent-*` apenas quando o fundo for neutral-700 ou mais escuro
```

### 2. Use o accent sem hierarquia

O amarelo é um pilar da identidade, mas precisa de hierarquia para ser eficaz.

```tsx
❌ /* RUIM: Tudo compete pela atenção */
<h2 class="text-accent-500">Título Amarelo</h2>
<p class="text-accent-500">Parágrafo amarelo</p>
<button class="bg-accent-500">Botão amarelo</button>

✅ /* BOM: Hierarquia clara */
<h2 class="text-text-primary">Título Principal</h2>
<p class="text-text-secondary">Parágrafo secundário</p>
<button class="bg-cta">Ação Principal</button>
```

### 3. Não misture tons iguais
```tsx
❌ <div className="bg-neutral-800 text-neutral-800">Invisível</div>
✅ <div className="bg-neutral-800 text-neutral-50">Legível</div>
```

### 4. Não ignore os aliases
```tsx
❌ <div className="bg-neutral-0">Background</div>
✅ <div className="bg-bg-primary">Background</div>
```

---

## 🌓 Dark Mode

O dark mode funciona **automaticamente** através de `prefers-color-scheme`.

### Forçar dark mode manualmente (opcional)

Se quiser dar controle ao usuário:

```tsx
// app/layout.tsx ou _app.tsx
<html className="dark"> {/* Adicione 'dark' class */}
  <body>
    {children}
  </body>
</html>
```

E ajuste o CSS:

```css
/* Em vez de @media (prefers-color-scheme: dark) */
.dark {
  @theme {
    --color-neutral-0: oklch(0.18 0.002 0);
    /* ... resto das cores dark */
  }
}
```

### Toggle dark mode com React

```tsx
'use client';

import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-lg bg-bg-secondary hover:bg-border-subtle transition-colors"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}
```

---

## 📏 Tipografia (Recomendações)

### Hierarquia de Títulos

```tsx
<h1 className="text-7xl font-black text-text-primary">
  Título Hero (64px)
</h1>

<h2 className="text-5xl font-bold text-text-primary">
  Título de Seção (48px)
</h2>

<h3 className="text-3xl font-bold text-text-primary">
  Subtítulo (30px)
</h3>

<h4 className="text-xl font-semibold text-text-primary">
  Título de Card (20px)
</h4>

<p className="text-base text-text-secondary">
  Corpo de texto (16px)
</p>

<p className="text-sm text-text-tertiary">
  Texto pequeno (14px)
</p>
```

### Font Weights

```tsx
font-normal    // 400 - Corpo de texto
font-medium    // 500 - Destaque leve
font-semibold  // 600 - Botões
font-bold      // 700 - Títulos
font-black     // 900 - Hero, títulos gigantes
```

---

## 🎯 Checklist de Implementação

- [ ] Copiei o CSS para `app/globals.css`
- [ ] Testei em light mode
- [ ] Testei em dark mode
- [ ] Usei `text-neutral-800` para textos principais
- [ ] Usei `bg-cta` apenas para CTAs importantes
- [ ] Nunca usei `text-accent-*`
- [ ] Implementei estados semânticos (success, error)
- [ ] Testei contraste de cores (WCAG)
- [ ] Documentei cores customizadas (se adicionei)

---

## 🔗 Recursos Úteis

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [OKLCH Color Picker](https://oklch.com)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Next.js Documentation](https://nextjs.org/docs)

---

## 📝 Notas Finais

Este design system foi criado para um **portfólio de identidade forte e tipográfica**. A filosofia é:

1. **Três Pilares:** A identidade é construída sobre o contraste do preto e branco, com o amarelo como ponto focal.
2. **Tipografia como Estrutura:** A hierarquia visual é liderada pela tipografia.
3. **Amarelo com Intenção:** O amarelo é usado de forma hierárquica para guiar o usuário e criar personalidade.

Se precisar adicionar mais cores ou componentes, mantenha a mesma filosofia e valores OKLCH consistentes.

---

**Criado por:** Rafael Pinheiro  
**Versão:** 1.0  
**Última atualização:** Outubro 2025