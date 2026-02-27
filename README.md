S# GreenFit - Academia Verde Online

Uma landing page moderna e responsiva para a GreenFit, plataforma de fitness online com propósito ambiental. A cada inscrição ou mensalidade paga, uma árvore é plantada.

## 🌱 Visão Geral do Projeto

**GreenFit** é uma academia online que une saúde pessoal com sustentabilidade ambiental. A plataforma oferece aulas gravadas e professores ao vivo, com o diferencial de plantar uma árvore a cada novo aluno ou renovação de assinatura.

### Público-Alvo
Pessoas de 25 a 45 anos, preocupadas com saúde e meio ambiente, que buscam flexibilidade para treinar em casa e querem fazer parte de algo maior.

## 🎨 Design & Estilo

### Filosofia de Design
**Biofilia Moderna + Organic Neomorphism** — Uma abordagem que conecta profundamente com a natureza através de formas orgânicas, cores naturais e elementos vivos, combinada com neomorfismo suave para modernidade sem frieza.

### Paleta de Cores
- **Verde Sálvia** (#5A8C5A) — Primário, calma e confiança
- **Verde Esmeralda** (#2D6A4F) — Destaque, energia e crescimento
- **Terracota** (#B8714F) — Humanidade e acolhimento
- **Off-white** (#F5F1E8) — Fundo limpo e respiração visual
- **Preto Suave** (#1A1A1A) — Texto sem dureza

### Tipografia
- **Fraunces** — Títulos (display, impacto)
- **Manrope** — Headlines e seções (modernidade)
- **Inter** — Corpo de texto (legibilidade)
- **Caveat** — Números e destaques (personalidade)

### Características Visuais
- Cantos arredondados generosos
- Wave dividers entre seções
- Folhas decorativas em cantos
- Elementos flutuantes com profundidade
- Espaço negativo generoso

## 📱 Estrutura da Landing Page (11 Seções)

### 1. **Hero Section**
Primeira impressão com impacto. Imagem de fundo com pessoa treinando em contato com a natureza, título "Malhe por você. Plante pelo mundo." e CTA principal.

### 2. **Problema + Solução**
Grid de 2 cards apresentando o problema (falta de tempo, academias cheias) e a solução (flexibilidade + impacto ambiental).

### 3. **Como Funciona**
3 passos em cards horizontais: Assine → Treine → Plantamos. Com animações conectando os passos.

### 4. **Planos de Assinatura**
Três cards de planos com destaque para o plano mais popular:
- **Plano Folha** (R$ 39,90/mês) — Aulas gravadas, 1 árvore/mês
- **Plano Árvore** (R$ 99,90/trimestre) — Aulas gravadas + 2 ao vivo/mês, 3 árvores
- **Plano Floresta** (R$ 359,90/ano) — Tudo liberado + consultoria, 12 árvores

### 5. **Depoimentos**
Carrossel de depoimentos com foto, nome, cidade, avaliação em estrelas e número de árvores plantadas.

### 6. **Professores**
Grid de 3-4 cards com foto, nome e especialidade dos professores. Efeito hover com mudança de cor.

### 7. **Formulários**
Duas abas: "Quero ser verde" (cadastro) e "Já sou verde" (login). Com validação em tempo real.

### 8. **Contato e WhatsApp**
Botão flutuante de WhatsApp + área de contato com e-mail, telefone e horário de atendimento.

### 9. **Impacto Ambiental**
Cards com contadores animados mostrando: árvores plantadas, CO₂ compensado, alunos verdes e espécies nativas.

### 10. **Chamada Final**
CTA final com imagem de fundo (floresta) e efeito parallax suave.

### 11. **Rodapé**
Links rápidos, redes sociais, selo de impacto ambiental e copyright.

## ⚡ Microinterações & Animações

- **Scroll Animations**: Elementos aparecem com fade-in/up ao entrar na viewport
- **Hover Effects**: Cards ganham sombra neomórfica, cores mudam gradualmente
- **Contadores Animados**: Números incrementam quando seção fica visível
- **Árvore Crescendo**: Animação SVG pequena no hero
- **WhatsApp Pulse**: Botão com vibração leve a cada 10 segundos
- **Menu Mobile**: Hambúrguer com animação suave ao abrir
- **Header Dinâmico**: Muda de transparente para fundo sólido ao rolar

## 🛠️ Stack Técnico

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Componentes**: shadcn/ui
- **Ícones**: Lucide React
- **Animações**: Framer Motion (integrado via Tailwind)
- **Roteamento**: Wouter
- **Validação**: React Hook Form + Zod

## 📁 Estrutura de Pastas

```
greenfit/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/        # Componentes reutilizáveis
│   │   ├── contexts/          # React contexts
│   │   ├── hooks/             # Custom hooks
│   │   ├── lib/               # Utilitários
│   │   ├── pages/
│   │   │   ├── Home.tsx       # Landing page principal
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx            # Roteamento principal
│   │   ├── main.tsx           # Entrada React
│   │   └── index.css          # Estilos globais e design tokens
│   └── index.html
├── server/                     # Placeholder (static-only)
├── shared/                     # Placeholder (static-only)
├── package.json
└── README.md
```

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Instalação

```bash
# Clonar o repositório (se aplicável)
git clone <repository-url>
cd greenfit

# Instalar dependências
pnpm install
# ou
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

O servidor estará disponível em `http://localhost:3000/`

### Build para Produção

```bash
# Compilar para produção
pnpm build
# ou
npm run build

# Visualizar build localmente
pnpm preview
# ou
npm run preview
```

## 📝 Comentários no Código

O arquivo `client/src/pages/Home.tsx` contém comentários explicando cada seção:

```typescript
/**
 * GreenFit Landing Page - Academia Verde Online
 * Design: Biophilic + Organic Neomorphism
 * Mobile-First approach with 11 sections
 */

// Seção 1: Hero Section
// Seção 2: Problema + Solução
// ... e assim por diante
```

## 🎯 Recursos Implementados

✅ **Mobile-First Design** — Totalmente responsivo, otimizado para smartphones  
✅ **HTML5 Semântico** — Estrutura acessível e bem organizada  
✅ **CSS3 Moderno** — Flexbox, Grid, Tailwind CSS 4  
✅ **JavaScript Puro** — React com TypeScript para type safety  
✅ **Animações Suaves** — Scroll triggers, hover effects, contadores  
✅ **Formulários Interativos** — Login e cadastro com validação  
✅ **Imagens Otimizadas** — CDN URLs para performance  
✅ **SEO Básico** — Meta tags, títulos descritivos  
✅ **Acessibilidade** — Contraste adequado, navegação por teclado  

## 🌿 Funcionalidades Principais

### Seções Interativas
- Hero com CTA principal e prova social
- Cards de problema/solução com hover effects
- 3 passos com animações de conexão
- Planos com destaque para mais popular
- Carrossel de depoimentos
- Grid de professores com efeito hover
- Formulários com validação inline
- Contadores animados de impacto

### Microinterações
- Fade-in/up ao scroll
- Hover com scale e shadow
- Contadores que incrementam
- Botão WhatsApp com pulse
- Menu mobile responsivo
- Header que muda ao scroll

## 📊 Performance

- Imagens otimizadas em CDN
- Lazy loading de componentes
- CSS crítico inline
- Sem dependências desnecessárias
- Build otimizado com Vite

## 🔧 Customização

### Alterar Cores
Edite as variáveis CSS em `client/src/index.css`:
```css
:root {
  --primary: #5A8C5A;        /* Verde Sálvia */
  --accent: #2D6A4F;         /* Verde Esmeralda */
  --secondary: #B8714F;      /* Terracota */
  /* ... mais cores */
}
```

### Alterar Tipografia
As fontes estão importadas em `client/index.html`. Para mudar:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
```

### Adicionar Novas Seções
1. Crie um novo componente em `client/src/pages/Home.tsx`
2. Adicione a função do componente
3. Importe e adicione ao componente principal

## 📞 Suporte

Para dúvidas ou sugestões sobre a landing page, consulte a documentação do projeto ou os comentários no código.

## 📄 Licença

Este projeto é de propriedade da GreenFit. Todos os direitos reservados.

---

**Feito com 💚 para o planeta e com 💪 para sua saúde.**

*GreenFit - Malhe por você. Plante pelo mundo.*
