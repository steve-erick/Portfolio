export const profile = {
  EUA: {
    nav: [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'More', href: '#skills' },
    ],
    headerCta: { label: 'Get in touch', href: '#contact' },

    hero: {
      badge: 'Available for freelance work',
      name: 'Erick Castro',
      description:
        'I build fast, accessible interfaces for products people use every day — from data-heavy dashboards to storefronts that load on a bad connection. Six years in, mostly React and TypeScript.',
      primaryCta: { label: 'See selected work', href: '#work' },
      secondaryCta: { label: 'Download CV', href: '/Curriculo_EN.pdf' },
      location: 'Fortaleza, BR — remote friendly',
      socials: [
        { label: 'GitHub', href: 'https://github.com/steve-erick', icon: 'github' },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/erick-silva-de-castro-081725251',
          icon: 'linkedin',
        },
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
      stack: ['Vue', 'JavaScript', 'Flask', 'SQLite','GraphQL'],
      ctprimary: 'View project',
      ctsecondary: 'Code',
      caseStudyHref: 'https://github.com/steve-erick/BattleDev',
      sourceHref: 'https://github.com/steve-erick/BattleDev',
      image: '/images/BattleDev.png',
    },

    projects: [
      {
        title: 'CityFix',
        year: '2025',
        description:
  'A collaborative platform for reporting urban issues such as potholes, poor street lighting, and illegal dumping. Users can submit photos and locations, while an interactive map organizes reports to help local authorities and the community track and resolve them.',
     tags: ['React Native', 'Expo', 'MySql'],
        href: '#',
        image: '/images/comunidade.jpeg',
        text: 'View Project',
        href: 'https://github.com/steve-erick/Comunidade_Resolve'
      },
      {
        title: 'SaveIt',
        year: '2025',
        description:
          'A financial management application built around modular dashboard blocks for tracking expenses, organizing finances, and visualizing spending.',
        tags: ['Angular', 'Java', 'Mysql'],
        href: '#',
        image: '/images/SaveIt.png',
        text: 'View Project',
        href: 'https://github.com/steve-erick/SaveIt'
      },
      {
        title: 'House of Robotic',
        year: '2025',
        description:
          'A full-stack e-commerce platform for robotics components, featuring product management, search, authentication, shopping cart functionality, and order processing.',
        tags: ['Vue', 'Flask', 'SQLite'],
        href: '#',
        image: '/images/Houseofrobotic.png',
        text: 'View Project',
        href: 'https://github.com/steve-erick/CasaDaRobotica'
      },
    ],

    aboutIntro: {
      title: 'About',
      paragraphs: [
        'I’m a software developer with a degree in Systems Analysis and Development, a technical background in IT, and professional experience in web development. I focus primarily on backend development, but I enjoy understanding the entire application — from the user interface and experience to APIs, databases, and infrastructure.',
        'During my career, I worked as a Development Intern at Concentrix, building and maintaining web solutions with PHP, including features for a platform focused on medical residency. Today, I continue expanding my skills through full-stack projects, working mainly with Python, Flask, Vue, JavaScript, and relational databases.',
      ],
    },

    timeline: [
      {
        period: '2022',
        role: 'Development Intern · Concentrix',
        description:
          'Worked on the development and maintenance of web solutions using PHP, including features for a platform focused on medical residency. I also contributed to other development tasks and supported the team in addressing technical requirements.',
      },
      {
        period: '2022',
        role: 'IT Technician',
        description:
          'Completed a technical degree in IT, building a strong foundation in programming, software development, databases, networking, and core technology concepts.',
      },
      {
        period: '2026',
        role: 'B.Sc. in Systems Analysis and Development',
        description:
          'Completed my degree in Systems Analysis and Development, strengthening my knowledge of software development, databases, software engineering, and application architecture.',
      },
      {
        period: '2025 — Present',
        role: 'Software Developer · Personal Projects',
        description:
          'Building full-stack applications, including platforms, management systems, and e-commerce projects. Hands-on experience with Vue, JavaScript, Python, Flask, APIs, authentication, databases, and frontend-backend integration.',
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
      email: 'erickcastro.esc@gmail.com',
      socials: [
        { label: 'GitHub', href: 'https://github.com/steve-erick', icon: 'github' },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/erick-silva-de-castro-081725251',
          icon: 'linkedin',
        },
      ],
    },

    footer: {
      copyright: '© 2026 Erick Castro',
      builtWith: 'Built with Vue and Tailwind',
    },
  },

  BR: {
    nav: [
      { label: 'Trabalho', href: '#work' },
      { label: 'Sobre', href: '#about' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Mais', href: '#skills' },
    ],
    headerCta: { label: 'Entre em contato', href: '#contact' },

    hero: {
      badge: 'Disponível para trabalhos freelance',
      name: 'Erick Castro',
      description:
        'Eu crio interfaces rápidas e acessíveis para produtos que as pessoas usam todos os dias — desde painéis com grande volume de dados até lojas virtuais que carregam mesmo com conexões ruins. Seis anos de experiência, principalmente com React e TypeScript.',
      primaryCta: { label: 'Ver trabalhos selecionados', href: '#work' },
      secondaryCta: { label: 'Baixar CV', href: '/Curriculo_BR.pdf' },
      location: 'Fortaleza, BR — trabalho remoto',
      socials: [
        { label: 'GitHub', href: 'https://github.com/steve-erick', icon: 'github' },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/erick-silva-de-castro-081725251',
          icon: 'linkedin',
        },
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
      stack: ['Vue', 'JavaScript', 'Flask', 'SQLite','GraphQL'],
      ctprimary: 'Ver projeto',
      ctsecondary: 'Código',
      caseStudyHref: 'https://github.com/steve-erick/BattleDev',
      sourceHref: 'https://github.com/steve-erick/BattleDev',
      image: '/images/BattleDev.png',
    },

    projects: [
      {
        title: 'Comunidade Resolve',
        year: '2025',
        description:
  'Plataforma colaborativa para registrar problemas urbanos, como buracos, falta de iluminação e descarte irregular. Usuários podem enviar fotos e localização, enquanto um mapa interativo organiza as ocorrências para facilitar o acompanhamento pelas autoridades e pela comunidade.',
      tags: ['React Native', 'Expo', 'MySql'],
        image: '/images/comunidade.jpeg',
        text: 'Ver Projeto',
        href: 'https://github.com/steve-erick/Comunidade_Resolve'
      },
      {
        title: 'SaveIt',
        year: '2025',
        description:
          'Uma aplicação de gestão financeira organizada em blocos modulares, criada para acompanhar despesas, organizar as finanças e visualizar de forma clara os hábitos de consumo.',
        tags: ['Angular', 'Java', 'Mysql'],
        image: '/images/SaveIt.png',
        text: 'Ver Projeto',
        href: 'https://github.com/steve-erick/SaveIt'
      },
      {
        title: 'House of Robotic',
        year: '2025',
        description:
          'Uma plataforma de e-commerce para componentes de robótica e eletrônica, com gerenciamento de produtos, busca, autenticação, carrinho de compras e processamento de pedidos.',
        tags: ['Vue', 'Flask', 'SQLite'],
        image: '/images/Houseofrobotic.png',
        text: 'Ver Projeto',
        href: 'https://github.com/steve-erick/CasaDaRobotica'
      },
    ],

    aboutIntro: {
      title: 'Sobre',
      paragraphs: [
        'Sou desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas, com formação técnica em Informática e experiência prática em desenvolvimento web. Tenho foco em backend, mas gosto de entender a aplicação como um todo — da interface e experiência do usuário até APIs, bancos de dados e infraestrutura.',
        'Durante minha trajetória, trabalhei com PHP em um ambiente corporativo na Concentrix, desenvolvendo soluções para um site voltado à residência médica e atuando também em outras demandas de desenvolvimento. Hoje, continuo aprofundando meus conhecimentos através de projetos full stack, trabalhando principalmente com Python, Flask, Vue e bancos de dados relacionais.',
      ],
    },

    timeline: [
      {
        period: '2022',
        role: 'Estagiário de Desenvolvimento · Concentrix',
        description:
          'Atuação no desenvolvimento e manutenção de soluções web utilizando PHP, incluindo funcionalidades para uma plataforma voltada à residência médica. Também participei de outras demandas de desenvolvimento e suporte às necessidades da equipe.',
      },
      {
        period: '2022',
        role: 'Técnico em Informática',
        description:
          'Concluí o curso técnico em Informática, desenvolvendo uma base sólida em programação, desenvolvimento de software, bancos de dados, redes e conceitos fundamentais de tecnologia.',
      },
      {
        period: '2026',
        role: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        description:
          'Concluí a graduação em Análise e Desenvolvimento de Sistemas, fortalecendo meus conhecimentos em desenvolvimento de software, bancos de dados, engenharia de software e arquitetura de aplicações.',
      },
      {
        period: '2025 — Atual',
        role: 'Desenvolvedor de Software · Projetos Pessoais',
        description:
          'Desenvolvimento de aplicações full stack, incluindo plataformas, sistemas de gestão e e-commerces. Experiência prática com Vue, JavaScript, Python, Flask, APIs, autenticação, bancos de dados e integração entre front-end e back-end.',
      },
    ],

    toolGroups: [
      {
        title: 'Uso diariamente',
        description: 'Tecnologias que utilizo com frequência',
        tools: ['TypeScript', 'React', 'Vue', 'Node', 'Tailwind', 'Python'],
      },
      {
        title: 'Tenho experiência',
        description: 'Tecnologias utilizadas em projetos',
        tools: ['GraphQL', 'Postgres', 'Rust', 'Java', 'Docker', 'Git'],
      },
      {
        title: 'Estudando atualmente',
        description: 'Tecnologias em estudo e projetos pessoais',
        tools: ['Three.js', 'WebGPU', 'Elixir'],
      },
    ],

    contact: {
      title: 'Tem algo que você quer desenvolver?',
      description:
        'Aceito alguns projetos freelance por ano e estou sempre aberto a conversar sobre desafios de desenvolvimento. Conte-me sobre o que você está criando.',
      email: 'erickcastro.esc@gmail.com',
      socials: [
        { label: 'GitHub', href: 'https://github.com/steve-erick', icon: 'github' },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/erick-silva-de-castro-081725251',
          icon: 'linkedin',
        },
      ],
    },

    footer: {
      copyright: '© 2026 Erick Castro',
      builtWith: 'Desenvolvido com Vue e Tailwind',
    },
  },
}