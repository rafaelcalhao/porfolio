# Brief Completo - Portfólio Rafael Pinheiro

## 📋 Visão Geral do Projeto

Portfólio fullstack de Rafael Pinheiro com identidade visual forte baseada em **preto, branco e amarelo (#FECC4C)**. O design prioriza tipografia, alto contraste e uso hierárquico do amarelo como elemento de personalidade e guia visual.

**Total de seções:** 4 (Hero, Projetos, Sobre, Contato)

---

## 🎨 Design System - Princípios Fundamentais

### Paleta de Cores

**Sistema de 3 Pilares:**
1. **Preto (#1E1E1E)** - texto principal e fundos escuros
2. **Off-white creme** - fundo principal em light mode
3. **Amarelo (#FECC4C)** - accent color para CTAs e destaques

**Classes Principais:**
```
bg-bg-primary       // Fundo principal (off-white / #1E1E1E no dark)
bg-bg-elevated      // Cards (branco puro / preto profundo)
text-text-primary   // Texto principal (preto / branco)
text-text-secondary // Texto secundário (cinza)
bg-cta              // Call-to-action amarelo (#FECC4C)
hover:bg-cta-hover  // Hover do CTA (mais claro)
border-border-subtle // Bordas sutis
```

**REGRA CRÍTICA do Amarelo:**
- ✅ Use `bg-cta` para botões primários e destaques
- ✅ Use `text-accent-*` APENAS sobre fundos escuros (neutral-800+)
- ❌ NUNCA use amarelo como texto sobre fundos claros (contraste insuficiente)
- ✅ Para links, use: `underline decoration-cta decoration-2 underline-offset-4`

### Tipografia

**Hierarquia de Títulos:**
```
Hero (h1):     text-7xl font-black    (64px)
Seção (h2):    text-5xl font-bold     (48px)
Subtítulo (h3): text-3xl font-bold    (30px)
Card (h4):     text-xl font-semibold  (20px)
Corpo:         text-base              (16px)
Pequeno:       text-sm                (14px)
```

**Font Weights:**
- `font-normal` (400) - corpo de texto
- `font-medium` (500) - destaque leve  
- `font-semibold` (600) - botões
- `font-bold` (700) - títulos
- `font-black` (900) - hero e títulos gigantes

### Dark Mode

O sistema suporta dark mode automático via `prefers-color-scheme: dark`. Todas as cores se invertem automaticamente.

---

## 🏗️ Estrutura das 4 Seções

### 1️⃣ HERO SECTION

**Objetivo:** Impacto imediato, apresentação clara da identidade profissional.

**Layout:**
- Tela cheia (min-h-screen)
- Fundo: `bg-bg-primary`
- Padding: `px-8 py-20`
- Elemento decorativo: Lâmpada amarela no canto superior direito

**Conteúdo:**
```
Nome:           "Rafael Pinheiro"
                text-7xl font-black text-text-primary mb-4

Título linha 1: "Desenvolvedor"
                text-6xl font-black text-text-primary mb-4

Título linha 2: "Fullstack"
                text-6xl font-black text-text-primary mb-6

Descrição:      "especializado em React, Node.js e TypeScript. 
                Entregar qualidade com velocidade é o que me norteia"
                text-xl text-text-secondary max-w-2xl mb-8

CTA:            Botão "Projetos ↓"
                bg-cta hover:bg-cta-hover text-neutral-800
                px-8 py-4 rounded-lg font-semibold
                Ação: scroll suave até seção de projetos
```

**Elemento Decorativo:**
- Lâmpada amarela (ilustração/ícone) posicionada no topo direito
- Deve ter cor amarela (#FECC4C) ou tom próximo
- Tamanho: médio, não intrusivo
- Posição sugerida: `absolute top-0 right-8` ou similar

---

### 2️⃣ SEÇÃO PROJETOS

**Objetivo:** Showcase dos melhores trabalhos em formato visual atrativo.

**Layout:**
- Fundo: `bg-bg-primary`
- Padding: `py-20 px-8`
- Container: `max-w-7xl mx-auto`

**Estrutura:**

**Header da Seção:**
```
Título:     "Projetos"
            text-5xl font-bold text-text-primary mb-4 text-center

Subtítulo:  "Explore minha jornada através de projetos que 
            contam uma história de soluções inovadoras."
            text-xl text-text-secondary max-w-2xl mx-auto text-center mb-12
```

**Grid de Projetos:**
- Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Mínimo de 3 projetos, ideal 6-9 projetos

**Card de Projeto (estrutura):**
```html
<article className="bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden hover:border-cta transition-colors group">
  
  {/* Imagem do Projeto */}
  <div className="aspect-video bg-neutral-200 relative overflow-hidden">
    <img src="..." alt="..." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
  </div>
  
  {/* Conteúdo */}
  <div className="p-6">
    
    {/* Título */}
    <h3 className="text-2xl font-bold text-text-primary mb-3">
      Nome do Projeto
    </h3>
    
    {/* Descrição */}
    <p className="text-text-secondary mb-4">
      Breve descrição do projeto (2-3 linhas)
    </p>
    
    {/* Tags de Tecnologias */}
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-sm text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full">
        React
      </span>
      <span className="text-sm text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full">
        TypeScript
      </span>
      <span className="text-sm text-text-tertiary bg-bg-secondary px-3 py-1 rounded-full">
        Node.js
      </span>
    </div>
    
    {/* Link */}
    <a 
      href="#" 
      className="text-text-primary font-medium underline decoration-cta decoration-2 underline-offset-4 hover:decoration-cta-hover transition-colors inline-flex items-center gap-1"
    >
      Ver detalhes
      <span>→</span>
    </a>
    
  </div>
</article>
```

**Interações:**
- Hover no card: borda muda para amarelo, imagem dá zoom suave
- Hover no link: underline amarelo fica mais claro
- Transições: `transition-colors duration-300`

**Sugestão de Projetos (placeholder):**
1. E-commerce Platform (Next.js, TypeScript, Stripe)
2. Task Manager App (React, Node.js, MongoDB)
3. Portfolio CMS (Next.js, Sanity, Tailwind)
4. API RESTful (Node.js, Express, PostgreSQL)
5. Dashboard Analytics (React, D3.js, Chart.js)
6. Blog Platform (Next.js, MDX, Prisma)

---

### 3️⃣ SEÇÃO SOBRE

**Objetivo:** Humanizar o portfólio, apresentar skills e experiência.

**Layout:**
- Fundo: `bg-bg-secondary` (para diferenciar da seção anterior)
- Padding: `py-20 px-8`
- Container: `max-w-5xl mx-auto`

**Estrutura:**

**Header:**
```
Título:     "Sobre Mim"
            text-5xl font-bold text-text-primary mb-6 text-center
```

**Layout Two-Column (desktop) / Stack (mobile):**
```html
<div className="grid md:grid-cols-2 gap-12 items-start">
  
  {/* Coluna 1: Texto sobre você */}
  <div>
    <p className="text-lg text-text-secondary mb-6">
      Parágrafo 1: Quem você é, sua trajetória, paixão por tecnologia.
      (4-5 linhas)
    </p>
    
    <p className="text-lg text-text-secondary mb-6">
      Parágrafo 2: Sua abordagem de trabalho, valores, o que te motiva.
      (3-4 linhas)
    </p>
    
    <p className="text-lg text-text-secondary">
      Parágrafo 3: Experiência, stack principal, disponibilidade.
      (3-4 linhas)
    </p>
  </div>
  
  {/* Coluna 2: Skills */}
  <div>
    <h3 className="text-2xl font-bold text-text-primary mb-6">
      Stack Principal
    </h3>
    
    <div className="space-y-4">
      
      {/* Categoria Frontend */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          Frontend
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            React
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            Next.js
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            TypeScript
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            Tailwind CSS
          </span>
        </div>
      </div>
      
      {/* Categoria Backend */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          Backend
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            Node.js
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            Express
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            PostgreSQL
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            MongoDB
          </span>
        </div>
      </div>
      
      {/* Categoria Ferramentas */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          Ferramentas
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            Git
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            Docker
          </span>
          <span className="bg-bg-elevated border border-border-subtle text-text-secondary px-3 py-1.5 rounded-lg text-sm">
            Figma
          </span>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
```

**Texto Sugerido (você pode adaptar):**

*Parágrafo 1:*
"Desenvolvedor fullstack apaixonado por criar experiências digitais que combinam design elegante com código eficiente. Minha jornada na programação começou com curiosidade e se transformou em uma busca constante por soluções inovadoras e bem arquitetadas."

*Parágrafo 2:*
"Acredito que entregar qualidade com velocidade não são conceitos opostos - são o resultado de boas práticas, código limpo e uma mentalidade focada em resultados. Cada projeto é uma oportunidade de aprender e evoluir."

*Parágrafo 3:*
"Com experiência em React, Node.js e TypeScript, construo aplicações fullstack escaláveis e performáticas. Estou sempre aberto a novos desafios e oportunidades de colaboração."

---

### 4️⃣ SEÇÃO CONTATO

**Objetivo:** Facilitar contato direto através de links para redes e email.

**Layout Opção A - Seção com Fundo Accent (RECOMENDADA):**
```html
<section className="bg-cta py-20 px-8">
  <div className="max-w-3xl mx-auto text-center">
    
    {/* Título */}
    <h2 className="text-5xl font-black text-neutral-800 mb-4">
      Vamos trabalhar juntos?
    </h2>
    
    {/* Subtítulo */}
    <p className="text-lg text-neutral-700 mb-12">
      Sempre aberto a novos desafios e oportunidades.
      Entre em contato através dos canais abaixo.
    </p>
    
    {/* Links de Contato */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
      
      {/* Email */}
      <a 
        href="mailto:seu@email.com"
        className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 min-w-[200px] justify-center"
      >
        <svg className="w-5 h-5" /* ícone de email */>...</svg>
        Enviar Email
      </a>
      
      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/in/seu-perfil"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 min-w-[200px] justify-center"
      >
        <svg className="w-5 h-5" /* ícone do LinkedIn */>...</svg>
        LinkedIn
      </a>
      
      {/* GitHub */}
      <a 
        href="https://github.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 min-w-[200px] justify-center"
      >
        <svg className="w-5 h-5" /* ícone do GitHub */>...</svg>
        GitHub
      </a>
      
    </div>
    
    {/* Informação adicional de email */}
    <p className="text-neutral-700 text-sm">
      Ou envie diretamente para: 
      <a href="mailto:seu@email.com" className="underline hover:text-neutral-800 ml-1">
        seu@email.com
      </a>
    </p>
    
  </div>
</section>
```

**Layout Opção B - Seção Simples (alternativa):**
```html
<section className="bg-bg-primary py-20 px-8">
  <div className="max-w-4xl mx-auto text-center">
    
    <h2 className="text-5xl font-bold text-text-primary mb-6">
      Contato
    </h2>
    
    <p className="text-xl text-text-secondary mb-12">
      Vamos conversar? Entre em contato através dos canais abaixo.
    </p>
    
    {/* Grid de Cards de Contato */}
    <div className="grid md:grid-cols-3 gap-6">
      
      {/* Card Email */}
      <a 
        href="mailto:seu@email.com"
        className="bg-bg-elevated border border-border-subtle hover:border-cta rounded-xl p-8 transition-colors group"
      >
        <div className="w-12 h-12 bg-cta rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-neutral-800">...</svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Email
        </h3>
        <p className="text-text-secondary text-sm">
          seu@email.com
        </p>
      </a>
      
      {/* Card LinkedIn */}
      <a 
        href="https://linkedin.com/in/seu-perfil"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-bg-elevated border border-border-subtle hover:border-cta rounded-xl p-8 transition-colors group"
      >
        <div className="w-12 h-12 bg-cta rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-neutral-800">...</svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          LinkedIn
        </h3>
        <p className="text-text-secondary text-sm">
          /in/seu-perfil
        </p>
      </a>
      
      {/* Card GitHub */}
      <a 
        href="https://github.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-bg-elevated border border-border-subtle hover:border-cta rounded-xl p-8 transition-colors group"
      >
        <div className="w-12 h-12 bg-cta rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-neutral-800">...</svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          GitHub
        </h3>
        <p className="text-text-secondary text-sm">
          @seu-usuario
        </p>
      </a>
      
    </div>
  </div>
</section>
```

**Ícones SVG Recomendados:**
- Use biblioteca `lucide-react` (já disponível no projeto)
- Email: `<Mail className="w-5 h-5" />`
- LinkedIn: `<Linkedin className="w-5 h-5" />`
- GitHub: `<Github className="w-5 h-5" />`

---

## 🎭 Componentes Auxiliares

### Navegação (opcional, mas recomendado)

```html
<nav className="fixed top-0 left-0 right-0 bg-bg-elevated/80 backdrop-blur-md border-b border-border-subtle z-50">
  <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
    
    {/* Logo/Nome */}
    <a href="#hero" className="text-xl font-bold text-text-primary">
      Rafael Pinheiro
    </a>
    
    {/* Links de Navegação */}
    <div className="flex gap-8">
      <a href="#projetos" className="text-text-secondary hover:text-cta transition-colors">
        Projetos
      </a>
      <a href="#sobre" className="text-text-secondary hover:text-cta transition-colors">
        Sobre
      </a>
      <a href="#contato" className="text-text-secondary hover:text-cta transition-colors">
        Contato
      </a>
    </div>
    
  </div>
</nav>
```

### Footer (opcional)

```html
<footer className="bg-neutral-900 text-neutral-300 py-8 px-8">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-sm">
      © 2025 Rafael Pinheiro. Desenvolvedor Fullstack.
    </p>
    <p className="text-xs text-neutral-500 mt-2">
      Feito com React, Next.js e Tailwind CSS
    </p>
  </div>
</footer>
```

---

## 🎯 Interações e Animações

### Scroll Suave
```javascript
// Adicionar ao botão "Projetos" no Hero
onClick={() => {
  document.getElementById('projetos')?.scrollIntoView({ 
    behavior: 'smooth' 
  });
}}
```

### Fade In na Scroll (opcional)
Use biblioteca `framer-motion` ou `react-intersection-observer` para animar elementos quando aparecem na tela.

Exemplo básico com Intersection Observer:
```jsx
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting),
    { threshold: 0.1 }
  );
  
  if (ref.current) observer.observe(ref.current);
  
  return () => observer.disconnect();
}, []);

return (
  <div 
    ref={ref}
    className={`transition-opacity duration-700 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    {/* conteúdo */}
  </div>
);
```

---

## 📱 Responsividade

### Breakpoints Tailwind (padrão)
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

### Ajustes por Seção

**Hero:**
```
Mobile:  text-5xl (título), stack vertical
Tablet:  text-6xl
Desktop: text-7xl, lâmpada visível
```

**Projetos:**
```
Mobile:  1 coluna
Tablet:  2 colunas
Desktop: 3 colunas
```

**Sobre:**
```
Mobile:  stack vertical (texto → skills)
Desktop: 2 colunas lado a lado
```

**Contato:**
```
Mobile:  stack vertical (botões full width)
Tablet:  flex-wrap
Desktop: flex-row
```

---

## ✅ Checklist de Implementação

### Estrutura Base
- [ ] Configurar Next.js / React
- [ ] Adicionar Tailwind CSS v4
- [ ] Copiar o CSS do design system para `globals.css`
- [ ] Criar IDs nas seções (`#hero`, `#projetos`, `#sobre`, `#contato`)

### Seção Hero
- [ ] Layout tela cheia com padding adequado
- [ ] Tipografia conforme especificado (text-7xl font-black)
- [ ] Botão CTA com cores corretas (bg-cta)
- [ ] Lâmpada amarela decorativa no topo direito
- [ ] Scroll suave ao clicar no CTA

### Seção Projetos
- [ ] Grid responsivo (1/2/3 colunas)
- [ ] Cards com imagem, título, descrição, tags e link
- [ ] Hover: borda amarela, zoom na imagem
- [ ] Links com underline amarelo
- [ ] Mínimo 3 projetos (placeholder OK)

### Seção Sobre
- [ ] Two-column layout (texto + skills)
- [ ] Texto sobre você (3 parágrafos)
- [ ] Skills organizadas por categoria
- [ ] Tags de tecnologias estilizadas
- [ ] Responsivo (stack em mobile)

### Seção Contato
- [ ] Escolher layout (fundo amarelo ou cards)
- [ ] Links funcionais (email, LinkedIn, GitHub)
- [ ] Ícones SVG de cada rede
- [ ] Hover states nos botões/cards
- [ ] Mailto link para email

### Componentes Extras
- [ ] Navegação fixa no topo (opcional)
- [ ] Footer com copyright (opcional)
- [ ] Dark mode toggle (opcional)

### Testes
- [ ] Testar em mobile (375px)
- [ ] Testar em tablet (768px)
- [ ] Testar em desktop (1440px)
- [ ] Testar dark mode
- [ ] Verificar contraste de cores (WCAG)
- [ ] Testar todos os links
- [ ] Verificar scroll suave

---

## 🔗 Links e Recursos

### Tecnologias
- Next.js: https://nextjs.org
- React: https://react.dev
- Tailwind CSS v4: https://tailwindcss.com
- Lucide Icons: https://lucide.dev

### Design
- OKLCH Color Picker: https://oklch.com
- Contrast Checker: https://webaim.org/resources/contrastchecker/
- Google Fonts (se necessário): https://fonts.google.com

### Imagens de Placeholder
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com

---

## 📝 Notas Finais para a IA

**Prioridades:**
1. Seguir o design system À RISCA (cores, tipografia, espaçamentos)
2. Manter a hierarquia visual (amarelo usado com intenção)
3. Garantir acessibilidade (contraste, semântica HTML)
4. Criar código limpo e componentizado
5. Responsividade em todos os breakpoints

**Detalhes Importantes:**
- O amarelo (#FECC4C) é um elemento central da identidade
- NUNCA usar `text-accent-*` sobre fundos claros
- Priorizar tipografia sobre elementos visuais desnecessários
- Manter o design minimalista e focado em conteúdo
- Dark mode deve funcionar automaticamente

**Estrutura de Arquivos Sugerida:**
```
/app
  /components
    Hero.tsx
    Projects.tsx
    About.tsx
    Contact.tsx
    Nav.tsx (opcional)
  /lib
    projects-data.ts (dados dos projetos)
  globals.css (design system)
  layout.tsx
  page.tsx (monta as seções)
```

---

**Criado por:** Rafael Pinheiro  
**Versão do Brief:** 1.0  
**Data:** Outubro 2025

Este documento é um guia completo para implementação. Siga cada seção cuidadosamente e adapte conforme necessário mantendo a identidade visual.