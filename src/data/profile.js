export const profile = {
  EUA: {
    nav: [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'More', href: '#skills' }
    ],
    headerCta: { label: 'Get in touch', href: '#contact' },

    hero: {
      badge: 'Available for freelance work',
      name: 'Erick Castro',
      description:
        "I build fast, accessible interfaces for products people use every day — from data-heavy dashboards to storefronts that load on a bad connection. Six years in, mostly React and TypeScript.",
      primaryCta: { label: 'See selected work', href: '#work' },
      secondaryCta: { label: 'Download CV', href: '/cv-erick-castro.pdf' },
      location: 'Fortaleza, BR — remote friendly',
      socials: [
        { label: 'GitHub', href: 'https://github.com', icon: 'github' },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
        { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
      ],
    },

    workIntro: {
      title: 'Selected work',
      description:
        'Four projects that show how I think about performance, structure, and the boring details that make an interface feel reliable.',
    },

    featuredProject: {
  eyebrow: 'Featured · 2026',
  title: 'BattleDev',
  description:
    'A programming challenge platform designed to make coding competitions more dynamic and engaging. I developed the interface, structured the challenge experience, and worked on the application architecture to keep navigation fast, intuitive, and responsive.',
  metric: 'Optimized experience for programming challenges and competitive events',
  role: 'Full Stack Developer',
  stack: ['Vue', 'JavaScript', 'Flask', 'SQLite'],
  ctprimary: 'View project',
  ctsecondary: 'Code',
  caseStudyHref: '#',
  sourceHref: '#',
  image: '../src/assets/BattleDev.jpg',
},

    projects: [
      {
        title: 'Atlas Docs',
        year: '2025',
        description:
          'Documentation platform with versioned content, instant search, and runnable code samples.',
        tags: ['Vue', 'Rust', 'MDX'],
        href: '#',
        image: '../src/assets/BattleDev.jpg',
        text: 'View Project'

      },
      {
      title: 'SaveIt',
      year: '2025',
      description:
  'A financial management application built around modular dashboard blocks for tracking expenses, organizing finances, and visualizing spending.',  tags: ['Vue', 'JavaScript', 'Finance'],
      href: '#',
      image: '../src/assets/Saveit.jpg',
      text: 'View Project'
    },
      {
      title: 'House of Robotic',
      year: '2025',
      description:
  'A full-stack e-commerce platform for robotics components, featuring product management, search, authentication, shopping cart functionality, and order processing.',
    tags: ['Vue', 'Flask', 'SQLite'],
      href: '#',
      image: '../src/assets/template.png',
      text: 'View Project'
    },
    ],

    aboutIntro: {
      title: 'About',
      paragraphs: [
        "I care about the parts of an interface people never mention when they work: focus order, loading states, layouts that hold up when the copy gets long.",
        "I started in design and moved into engineering, which is why I tend to argue for the simpler screen. Most of my work sits where product decisions and front-end constraints meet — figuring out what to show, what to defer, and what to cut.",
      ],
    },

    timeline: [
      {
        period: '2023 — now',
        role: 'Senior front-end engineer, Northbeam',
        description:
          'Own the design system and the analytics surface. Rebuilt the charting layer and brought first paint under a second on mid-range hardware.',
      },
      {
        period: '2021 — 2023',
        role: 'Front-end engineer, Vela Studio',
        description:
          'Shipped a dozen client products — storefronts, booking flows, internal tools — usually as the only front-end on the team.',
      },
      {
        period: '2020 — 2021',
        role: 'Freelance web designer',
        description:
          'Design and build for small businesses. Learned to scope tightly and write CSS someone else can maintain.',
      },
    ],

    toolGroups: [
      {
        title: 'Build with daily',
        description: 'Reach for these without thinking',
        tools: ['TypeScript', 'React', 'Vue', 'Node', 'Tailwind', 'Python'],
      },
      {
        title: 'Comfortable in',
        description: 'Shipped production work with each',
        tools: ['GraphQL', 'Postgres', 'Rust', 'Java', 'Docker', 'Git'],
      },
      {
        title: 'Currently learning',
        description: 'Side projects and reading, not resume padding',
        tools: ['Three.js', 'WebGPU', 'Elixir'],
      },
    ],

    contact: {
      title: 'Have something you want built?',
      description:
        "I take on a couple of freelance projects a year, and I'm always happy to talk through a tricky front-end problem. Tell me what you're working on.",
      email: 'hey@erickcastro.dev',
      socials: [
        { label: 'GitHub', href: 'https://github.com', icon: 'github' },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
        { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
      ],
    },

    footer: {
      copyright: '© 2026 Erick Castro',
      builtWith: 'Built with React, TypeScript and Tailwind',
    },
  },

  BR: {
    nav: [
      { label: 'Trabalho', href: '#work' },
      { label: 'Sobre', href: '#about' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Mais', href: '#skills' }
    ],
    headerCta: { label: 'Entre em contato', href: '#contact' },

    hero: {
      badge: 'Disponível para trabalhos freelance',
      name: 'Erick Castro',
      description:
        "Eu crio interfaces rápidas e acessíveis para produtos que as pessoas usam todos os dias — desde painéis com grande volume de dados até lojas virtuais que carregam mesmo com conexões ruins. Seis anos de experiência, principalmente com React e TypeScript.",
      primaryCta: { label: 'Ver trabalhos selecionados', href: '#work' },
      secondaryCta: { label: 'Baixar CV', href: '/cv-erick-castro.pdf' },
      location: 'Fortaleza, BR — trabalho remoto',
      socials: [
        { label: 'GitHub', href: 'https://github.com', icon: 'github' },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
        { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
      ],
    },

    workIntro: {
      title: 'Trabalhos selecionados',
      description:
        'Quatro projetos que mostram como penso sobre desempenho, estrutura e os detalhes que fazem uma interface parecer confiável.',
    },

    featuredProject: {
  eyebrow: 'Destaque · 2026',
  title: 'BattleDev',
  description:
    'Uma plataforma de desafios de programação criada para transformar competições de desenvolvimento em uma experiência mais dinâmica e prática. Desenvolvi a interface, organizei a experiência dos desafios e trabalhei na estrutura da aplicação para tornar a navegação simples, rápida e responsiva.',
  metric: 'Experiência otimizada para desafios de programação e competições em tempo real',
  role: 'Desenvolvedor Full Stack',
  stack: ['Vue', 'JavaScript', 'Flask', 'SQLite'],
  ctprimary: 'Ver projeto',
  ctsecondary: 'Código',
  caseStudyHref: '#',
  sourceHref: '#',
  image: '../src/assets/BattleDev.jpg',
},

    projects: [
      {
        title: 'Atlas Docs',
        year: '2025',
        description:
          'Plataforma de documentação com conteúdo versionado, busca instantânea e exemplos de código executáveis.',
        tags: ['Vue', 'Rust', 'MDX'],
        href: '#',
        image: '../src/assets/BattleDev.jpg',
        text: 'Ver Projeto'
      },
      {
          title: 'SaveIt',
          year: '2025',
          description:
            'Uma aplicação de gestão financeira organizada em blocos modulares, criada para acompanhar despesas, organizar as finanças e visualizar de forma clara os hábitos de consumo.',
          tags: ['Vue', 'JavaScript', 'Finanças'],
          href: '#',
          image: '../src/assets/Saveit.jpg',
          text: 'Ver Projeto'
        },
            {
        title: 'House of Robotic',
        year: '2025',
        description:
          'Uma plataforma de e-commerce para componentes de robótica e eletrônica, com gerenciamento de produtos, busca, autenticação, carrinho de compras e processamento de pedidos.',
        tags: ['Vue', 'Flask', 'SQLite'],
        href: '#',
        image: '../src/assets/template.png',
        text: 'Ver Projeto'
      },
    ],

    aboutIntro: {
      title: 'Sobre',
      paragraphs: [
        "Me importo com as partes de uma interface que as pessoas nunca mencionam quando funcionam bem: ordem de foco, estados de carregamento, layouts que se mantêm quando o texto fica longo.",
        "Comecei em design e migrei para engenharia, por isso tendo a defender a tela mais simples. Boa parte do meu trabalho está onde decisões de produto e restrições de front-end se encontram — decidindo o que mostrar, o que adiar e o que cortar.",
      ],
    },

    timeline: [
      {
        period: '2023 — atual',
        role: 'Engenheiro(a) front-end sênior, Northbeam',
        description:
          'Responsável pelo design system e pela camada de análise. Reconstruí a camada de gráficos e reduzi o first paint para menos de um segundo em hardware intermediário.',
      },
      {
        period: '2021 — 2023',
        role: 'Engenheiro(a) front-end, Vela Studio',
        description:
          'Entreguei uma dezena de produtos para clientes — lojas virtuais, fluxos de reserva, ferramentas internas — geralmente como único front-end da equipe.',
      },
      {
        period: '2020 — 2021',
        role: 'Web designer freelance',
        description:
          'Design e desenvolvimento para pequenas empresas. Aprendi a definir escopos com precisão e a escrever CSS que outra pessoa consiga manter.',
      },
    ],

    toolGroups: [
      {
        title: 'Uso no dia a dia',
        description: 'Ferramentas que uso sem pensar duas vezes',
        tools: ['TypeScript', 'React', 'Vue', 'Node', 'Tailwind', 'Python'],
      },
      {
        title: 'Domínio confortável',
        description: 'Já entreguei trabalho em produção com cada uma',
        tools: ['GraphQL', 'Postgres', 'Rust', 'Java', 'Docker', 'Git'],
      },
      {
        title: 'Aprendendo atualmente',
        description: 'Projetos paralelos e leitura, não para encher currículo',
        tools: ['Three.js', 'WebGPU', 'Elixir'],
      },
    ],

    contact: {
      title: 'Tem algo que você quer construir?',
      description:
        "Aceito alguns projetos freelance por ano e adoro discutir um problema de front-end complicado. Me conte no que você está trabalhando.",
      email: 'hey@erickcastro.dev',
      socials: [
        { label: 'GitHub', href: 'https://github.com', icon: 'github' },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
        { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
      ],
    },

    footer: {
      copyright: '© 2026 Erick Castro',
      builtWith: 'Construído com React, TypeScript e Tailwind',
    },
  },
}

// Exemplo de uso:
// import { profiles } from './profile'
// const profile = profiles.BR  // ou profiles.EUA