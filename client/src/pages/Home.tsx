import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, ChevronDown, Heart, Leaf, TreePine, Zap, Users, MessageCircle,
  Play, Globe, Star, Instagram, Youtube, Music, CheckCircle, Sprout, Droplet
} from 'lucide-react';

/**
 * GreenFit Landing Page - Academia Verde Online
 * Design: Biophilic + Organic Neomorphism
 * Mobile-First approach with 11 sections
 * 
 * Improvements:
 * - Internal navigation with anchors
 * - Sticky header with mobile menu
 * - Modern icons (Lucide React)
 * - Smooth scroll behavior
 */

// Header Navigation Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'problema', 'como-funciona', 'planos', 'depoimentos', 'professores', 'cadastro', 'impacto'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Planos', href: '#planos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Professores', href: '#professores' },
    { label: 'Cadastro', href: '#cadastro' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="text-2xl font-fraunces font-bold text-white flex items-center gap-2">
          <TreePine className="w-6 h-6" />
          GreenFit
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-semibold transition-colors ${
                activeSection === item.href.replace('#', '')
                  ? 'text-accent'
                  : 'text-white hover:text-accent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Tree Counter Badge */}
        <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
          <TreePine className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white">5.342</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/20">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-white hover:text-accent font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2 w-fit">
              <TreePine className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">5.342 árvores</span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

// Seção 1: Hero Section
function HeroSection() {
  const handleCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('planos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/hkYf7LnayfXqFyL0FnK2qc/sandbox/AtiXbPX4oeZbG36JEicEiE-img-1_1772120243000_na1fn_Z3JlZW5maXQtaGVyby1tYWlu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaGtZZjdMbmF5ZlhxRnlMMEZuSzJxYy9zYW5kYm94L0F0aVhiUFg0b2VaYkczNkpFaWNFaUUtaW1nLTFfMTc3MjEyMDI0MzAwMF9uYTFmbl9aM0psWlc1bWFYUXRhR1Z5YnkxdFlXbHUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XkwqAMDJCVZwZh9g0dIlD9LDifafIxPDQ7vh8gn0Fq6YKcA9r-7D2pqhHrEjis3dvmIKPJoiDwTGskDQ589O3uvrJS8OE9VhRns5QrQ0FkfHvtu1NbKdVvU7H-HYxLnD-Saz40O1CkX4Grc3MpLqWENrwA3MyofiWcbSbLfxYQHzP8Be4siBajt8ADsTP7LG2k8qnvbkHpaK~LV6jdIFAiO~Q9D3dXIEgBhJIjpiscEKGKJ9YR1J~0LUgSErxCWt7josZ3GE5u3JBs5tQF9pwhbnJiPyKv3dlk2aUAFA1ihdZrZ8FwWpTCTw-g4oqriFpTfR8gJ9U1WTS39wrCs-Jg__)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <div className="fade-in-up mb-8">
          <h1 className="text-4xl md:text-6xl font-fraunces font-bold mb-4">
            Malhe por você.<br />Plante pelo mundo.
          </h1>
          <p className="text-lg md:text-xl font-inter mb-8 max-w-2xl mx-auto">
            Aulas online, professores ao vivo e um planeta mais verde. Assine e a gente planta uma árvore por você.
          </p>
        </div>

        <button onClick={handleCTA} className="btn-primary text-lg mb-12 animate-bounce">
          QUERO COMEÇAR A PLANTAR
        </button>

        {/* Prova Social */}
        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 inline-block">
          <p className="text-sm md:text-base font-semibold flex items-center gap-2 justify-center">
            <TreePine className="w-5 h-5" />
            5.000+ árvores plantadas pelos nossos alunos
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}

// Seção 2: Problema + Solução
function ProblemSolutionSection() {
  return (
    <section id="problema" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="section-title">
          <h2>Cuidar da saúde e do planeta não deveria ser difícil.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Problema */}
          <div className="card-neomorph hover:bg-red-50 transition-colors">
            <div className="flex items-start gap-4">
              <Globe className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-manrope font-semibold mb-2">O Problema</h3>
                <p className="text-muted-foreground">
                  Falta de tempo, academias cheias, equipamentos sujos e falta de propósito. Treinar deveria ser simples.
                </p>
              </div>
            </div>
          </div>

          {/* Card Solução */}
          <div className="card-neomorph hover:bg-green-50 transition-colors">
            <div className="flex items-start gap-4">
              <Sprout className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-manrope font-semibold mb-2">A Solução</h3>
                <p className="text-muted-foreground">
                  Com a GreenFit, você treina onde quiser, quando quiser e ainda ajuda o meio ambiente. Tudo em um só lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção 3: Como Funciona
function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>3 passos para um corpo e um planeta mais saudáveis</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card-neomorph text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-manrope font-semibold mb-2">Assine</h3>
            <p className="text-muted-foreground">
              Escolha seu plano e assine em segundos. Sem burocracia.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-3xl text-primary">→</div>
          </div>

          {/* Step 2 */}
          <div className="card-neomorph text-center">
            <div className="flex justify-center mb-4">
              <Play className="w-12 h-12 text-primary fill-primary" />
            </div>
            <h3 className="text-xl font-manrope font-semibold mb-2">Treine</h3>
            <p className="text-muted-foreground">
              Acesse aulas gravadas ou ao vivo quando quiser. Flexibilidade total.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-3xl text-primary">→</div>
          </div>

          {/* Step 3 */}
          <div className="card-neomorph text-center">
            <div className="flex justify-center mb-4">
              <TreePine className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-manrope font-semibold mb-2">Plantamos</h3>
            <p className="text-muted-foreground">
              Nós plantamos uma árvore em seu nome. Impacto garantido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção 4: Planos
function PlansSection() {
  const handlePlanClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="section-title">
          <h2>Escolha seu plano e comece a plantar</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plano Folha */}
          <div className="card-neomorph">
            <h3 className="text-2xl font-manrope font-semibold mb-2">Plano Folha</h3>
            <p className="text-muted-foreground mb-4">Mensal</p>
            <div className="text-4xl font-caveat font-bold text-primary mb-6">R$ 39,90</div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                Aulas gravadas
              </li>
              <li className="flex items-center gap-2">
                <TreePine className="w-4 h-4 text-primary" />
                1 árvore plantada/mês
              </li>
            </ul>
            <button onClick={handlePlanClick} className="btn-primary w-full">ASSINAR</button>
          </div>

          {/* Plano Árvore - Destaque */}
          <div className="card-neomorph border-2 border-accent transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
              MAIS AMIGO DA FLORESTA
            </div>
            <h3 className="text-2xl font-manrope font-semibold mb-2 mt-4">Plano Árvore</h3>
            <p className="text-muted-foreground mb-4">Trimestral</p>
            <div className="text-4xl font-caveat font-bold text-accent mb-6">R$ 99,90</div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-accent" />
                Aulas gravadas + 2 ao vivo/mês
              </li>
              <li className="flex items-center gap-2">
                <TreePine className="w-4 h-4 text-accent" />
                3 árvores plantadas
              </li>
            </ul>
            <button onClick={handlePlanClick} className="btn-secondary w-full">QUERO SER ÁRVORE</button>
          </div>

          {/* Plano Floresta */}
          <div className="card-neomorph">
            <h3 className="text-2xl font-manrope font-semibold mb-2">Plano Floresta</h3>
            <p className="text-muted-foreground mb-4">Anual</p>
            <div className="text-4xl font-caveat font-bold text-primary mb-6">R$ 359,90</div>
            <ul className="space-y-2 mb-6 text-sm">
              <li className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                Tudo liberado
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                1 consultoria online
              </li>
              <li className="flex items-center gap-2">
                <TreePine className="w-4 h-4 text-primary" />
                12 árvores plantadas
              </li>
            </ul>
            <button onClick={handlePlanClick} className="btn-primary w-full">ASSINAR</button>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12">
          Árvores plantadas em parceria com <strong>Instituto Refloresta</strong>
        </p>
      </div>
    </section>
  );
}

// Seção 5: Depoimentos
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marina Silva',
      city: 'São Paulo, SP',
      text: 'Além de emagrecer, sei que tô ajudando o planeta. Indico demais!',
      trees: 3,
    },
    {
      name: 'João Santos',
      city: 'Rio de Janeiro, RJ',
      text: 'Flexibilidade perfeita para minha rotina. E ainda plantando árvores!',
      trees: 5,
    },
    {
      name: 'Ana Costa',
      city: 'Belo Horizonte, MG',
      text: 'Melhor decisão que tomei. Saúde + sustentabilidade = vida melhor.',
      trees: 4,
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Quem treina verde, recomenda</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card-neomorph">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </div>
              <p className="mb-4 text-muted-foreground italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-primary flex items-center gap-1">
                  <TreePine className="w-4 h-4" />
                  {testimonial.trees}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Seção 6: Professores
function TeachersSection() {
  const handleTeacherCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teachers = [
    { name: 'Carol Yoga', specialty: 'Yoga & Flexibilidade', icon: Heart },
    { name: 'Bruno HIIT', specialty: 'HIIT & Cardio', icon: Zap },
    { name: 'Lucas Funcional', specialty: 'Treino Funcional', icon: Users },
  ];

  return (
    <section id="professores" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="section-title">
          <h2>Professores de verdade, ao vivo com você</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => {
            const IconComponent = teacher.icon;
            return (
              <div key={idx} className="card-neomorph text-center group">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-manrope font-semibold mb-2">{teacher.name}</h3>
                <p className="text-muted-foreground mb-4">{teacher.specialty}</p>
                <button onClick={handleTeacherCTA} className="btn-outline text-sm">Conhecer</button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button onClick={handleTeacherCTA} className="btn-secondary">
            Conhecer equipe completa
          </button>
        </div>
      </div>
    </section>
  );
}

// Seção 7: Formulários (Login e Cadastro)
function AuthSection() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
    terms: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section id="cadastro" className="py-16 md:py-24 bg-white">
      <div className="container max-w-md">
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setIsLogin(false)}
            className={`pb-4 font-semibold transition-colors ${
              !isLogin ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
            }`}
          >
            Quero ser verde
          </button>
          <button
            onClick={() => setIsLogin(true)}
            className={`pb-4 font-semibold transition-colors ${
              isLogin ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
            }`}
          >
            Já sou verde
          </button>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-semibold mb-2">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-semibold mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold mb-2">Confirmar senha</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
          )}

          {!isLogin && (
            <>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-sm">Quero receber dicas verdes por e-mail</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-sm">Li e aceito os <a href="#" className="text-primary font-semibold">termos</a></span>
              </label>
            </>
          )}

          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm text-primary font-semibold hover:underline">
                Esqueci minha senha
              </a>
            </div>
          )}

          <button type="submit" className="btn-primary w-full">
            {isLogin ? 'ENTRAR' : 'CRIAR MINHA CONTA E PLANTAR MINHA 1ª ÁRVORE'}
          </button>
        </form>
      </div>
    </section>
  );
}

// Seção 8: Contato e WhatsApp
function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="section-title">
          <h2>Fale com a gente</h2>
          <p>Dúvidas? Estamos aqui para ajudar!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-2">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <p className="font-semibold mb-1">E-mail</p>
            <p className="text-muted-foreground">contato@greenfit.com.br</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <p className="font-semibold mb-1">WhatsApp</p>
            <p className="text-muted-foreground">(11) 98765-4321</p>
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <Droplet className="w-8 h-8 text-primary" />
            </div>
            <p className="font-semibold mb-1">Horário</p>
            <p className="text-muted-foreground">Seg-Sex, 9h às 18h</p>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-8 right-8 z-50 group">
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-semibold text-foreground">
            Fale conosco
          </div>
          <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all animate-pulse">
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Seção 9: Impacto Ambiental
function ImpactSection() {
  const [counts, setCounts] = useState({ trees: 0, co2: 0, users: 0, species: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          setCounts(prev => ({
            trees: Math.min(prev.trees + 50, 5342),
            co2: Math.min(prev.co2 + 2, 120),
            users: Math.min(prev.users + 25, 2150),
            species: Math.min(prev.species + 1, 15),
          }));
        }, 30);
        return () => clearInterval(interval);
      }
    });

    const element = document.getElementById('impacto');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impacto" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Nosso verde em números</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="card-neomorph text-center">
            <div className="flex justify-center mb-2">
              <TreePine className="w-8 h-8 text-primary" />
            </div>
            <div className="counter-number">{counts.trees}</div>
            <p className="text-muted-foreground">Árvores plantadas</p>
          </div>
          <div className="card-neomorph text-center">
            <div className="flex justify-center mb-2">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <div className="counter-number">{counts.co2}</div>
            <p className="text-muted-foreground">Toneladas de CO₂ compensado</p>
          </div>
          <div className="card-neomorph text-center">
            <div className="flex justify-center mb-2">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div className="counter-number">{counts.users}</div>
            <p className="text-muted-foreground">Alunos verdes</p>
          </div>
          <div className="card-neomorph text-center">
            <div className="flex justify-center mb-2">
              <Sprout className="w-8 h-8 text-primary" />
            </div>
            <div className="counter-number">{counts.species}</div>
            <p className="text-muted-foreground">Espécies nativas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção 10: Chamada Final
function FinalCTASection() {
  const handleFinalCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('cadastro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative py-24 md:py-32 flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/hkYf7LnayfXqFyL0FnK2qc/sandbox/AtiXbPX4oeZbG36JEicEiE-img-4_1772120238000_na1fn_Z3JlZW5maXQtZm9yZXN0LWltcGFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaGtZZjdMbmF5ZlhxRnlMMEZuSzJxYy9zYW5kYm94L0F0aVhiUFg0b2VaYkczNkpFaWNFaUUtaW1nLTRfMTc3MjEyMDIzODAwMF9uYTFmbl9aM0psWlc1bWFYUXRabTl5WlhOMExXbHRjR0ZqZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rdd0hb56aoqsjrB9NjeQQX~XTO9Sv71mJ0TMpZh6htu1ZoivVMLRRqYuO6VA3vOIX865I8wdngDokje6vCzLb7O6WTJRL5-rlA9hy2A5glNF8BJjjjIY3AyyojkVeCUCfTbDu3XqIhwW28wNgl-7lBf0Mxa5LKSxTE-K1-0Y43gm7FEhjxXWGgQZk2OS2tNYDg6lH~Wzev7TVDGpsP2yrKgdKg4-jnT8O0P-o8UQhPKaNAPY8ZPanKgscfrahOPuTee-fM6G5JyhR3DkP6JIz39IKd~9Lo4COf8MFEzFlq~rL~qPUUiUSOGzJeSzF~BVMmkXBuN0NdjzKzykO8uzOQ__)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 container text-center">
        <h2 className="text-4xl md:text-5xl font-fraunces font-bold mb-4">
          O planeta espera por você. E seu corpo também.
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Assine agora e plante sua primeira árvore hoje mesmo.
        </p>
        <button onClick={handleFinalCTA} className="btn-primary text-lg">
          QUERO FAZER PARTE
        </button>
      </div>
    </section>
  );
}

// Seção 11: Rodapé
function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <TreePine className="w-5 h-5" />
              GreenFit
            </h4>
            <p className="text-sm opacity-80">Academia verde online. Saúde + Sustentabilidade.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:opacity-100">Sobre</a></li>
              <li><a href="#planos" className="hover:opacity-100">Planos</a></li>
              <li><a href="#professores" className="hover:opacity-100">Professores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes</h4>
            <ul className="space-y-2 text-sm opacity-80 flex gap-4">
              <li><a href="#" className="hover:opacity-100"><Instagram className="w-5 h-5" /></a></li>
              <li><a href="#" className="hover:opacity-100"><Youtube className="w-5 h-5" /></a></li>
              <li><a href="#" className="hover:opacity-100"><Music className="w-5 h-5" /></a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Impacto</h4>
            <p className="text-sm opacity-80 flex items-center gap-2">
              <TreePine className="w-4 h-4" />
              Uma árvore plantada a cada assinatura
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2026 GreenFit. Todos os direitos reservados. | Feito com 💚 para o planeta</p>
        </div>
      </div>
    </footer>
  );
}

// Componente Principal
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <PlansSection />
      <TestimonialsSection />
      <TeachersSection />
      <AuthSection />
      <ContactSection />
      <ImpactSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
