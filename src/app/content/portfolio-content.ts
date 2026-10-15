import { Locale } from '../portfolio-utils';

export interface ProjectCopy {
  name: string;
  description: string;
  tags: readonly string[];
}
export interface ExperienceCopy {
  role: string;
  period: string;
  description: string;
}
export interface PortfolioCopy {
  sectionsLabel: string;
  backToTop: string;
  languageLabel: string;
  skip: string;
  eyebrow: string;
  role: string;
  statement: string;
  location: string;
  navigation: { about: string; projects: string; experience: string; contact: string };
  lead: string;
  aboutBefore: string;
  aboutAfter: string;
  aboutSecond: string;
  experienceSummaryBefore: string;
  experienceSummaryAfter: string;
  projects: readonly ProjectCopy[];
  unavailableProject: string;
  moreProjects: string;
  earlier: string;
  experiences: readonly ExperienceCopy[];
  contactTitle: string;
  contactDescription: string;
  email: string;
  footer: string;
  pageTitle: string;
  pageDescription: string;
}

export const profile = {
  email: 'marceloqueirozchagas@hotmail.com',
  github: 'https://github.com/marceloqueirozchagas',
  linkedin: 'https://www.linkedin.com/in/marcelo-queiroz-636307a9',
  technologies: ['C#', 'Python', 'SQL', 'Angular', 'React'],
};
export const projects = [
  {
    id: 'pgta',
    available: true,
    url: 'https://calculadoraindigena.com.br/',
    cover: '/images/pgta.svg',
  },
  {
    id: 'invoice',
    available: true,
    url: 'https://marceloqueirozchagas.github.io/invoice-generator/',
    cover: '/images/invoice.svg',
  },
  {
    id: 'magma',
    available: false,
    url: 'https://magmaengenharia.com.br/',
    cover: '/images/magma.svg',
  },
] as const;
export const experiences = [
  {
    company: 'Streetwire',
    start: '2020-07',
    end: null,
    technologies: ['Python', 'C#', 'SQL', 'Angular', 'React'],
  },
  {
    company: 'Miltec',
    start: '2016-07',
    end: '2021-09',
    technologies: ['C#', '.NET', 'SQL', 'Angular', 'Ionic'],
  },
  {
    company: 'SGI',
    start: '2015-07',
    end: '2016-07',
    technologies: ['C#', '.NET', 'SQL', 'AngularJS'],
  },
  {
    company: 'Secretaria de Estado de Educação',
    start: '2011-10',
    end: '2015-07',
    technologies: ['C#', 'WebForms', 'jQuery', 'Scrum'],
  },
] as const;

export const portfolioContent: Record<Locale, PortfolioCopy> = {
  'pt-BR': {
    sectionsLabel: 'Seções',
    backToTop: 'Voltar ao início',
    languageLabel: 'Idioma',
    skip: 'Pular para o conteúdo',
    eyebrow: 'Desenvolvimento de software',
    role: 'Desenvolvedor de software sênior',
    statement: 'Da interface aos dados, construo aplicações que conectam.',
    location: 'Campo Grande, MS · Brasil',
    navigation: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    lead: 'Software bem construído começa por entender o problema.',
    aboutBefore: 'Sou Marcelo, desenvolvedor com ',
    aboutAfter:
      ' anos de experiência em aplicações web. Trabalho entre frontend, backend e bancos de dados, conectando as partes que fazem um sistema funcionar.',
    aboutSecond:
      'Minha trajetória passa por tecnologia, educação e dados imobiliários. Combino C#, Python, SQL, Angular e React para transformar necessidades em soluções práticas.',
    experienceSummaryBefore: 'Dev com ',
    experienceSummaryAfter: ' anos de experiência',
    projects: [
      {
        name: 'Calculadora PGTA',
        description:
          'Uma ferramenta para calcular custos de gestão de terras indígenas e apoiar o planejamento.',
        tags: ['Aplicação web', 'Calculadora'],
      },
      {
        name: 'Invoice Generator',
        description: 'Uma interface simples para cadastrar informações e gerar invoices.',
        tags: ['Produtividade', 'Interface web'],
      },
      {
        name: 'Magma Engenharia',
        description: 'Presença digital para apresentar a empresa e seus serviços de engenharia.',
        tags: ['Site institucional'],
      },
    ],
    unavailableProject: 'Demonstração indisponível',
    moreProjects: 'Explorar outros projetos no GitHub',
    earlier: 'Ver experiências anteriores',
    experiences: [
      {
        role: 'Analista de sistemas',
        period: 'Jul 2020 — atual',
        description:
          'Desenvolvimento de portais, interfaces e APIs para produtos de dados imobiliários. Integração de sistemas, consultas SQL, controle de acesso e visualizações geográficas. Automação em Python de relatórios e análises, com atuação na manutenção, evolução e entrega das aplicações.',
      },
      {
        role: 'Analista de sistemas',
        period: 'Jul 2016 — Set 2021',
        description:
          'Desenvolvimento de aplicações web e mobile, integrando interfaces, serviços e bancos de dados.',
      },
      {
        role: 'Analista de sistemas',
        period: 'Jul 2015 — Jul 2016',
        description: 'Desenvolvimento e manutenção de sistemas web com C#, .NET, SQL e AngularJS.',
      },
      {
        role: 'Desenvolvedor de software',
        period: 'Out 2011 — Jul 2015',
        description:
          'Desenvolvimento de sistemas para a área de educação, trabalhando com C#, WebForms, jQuery e práticas Scrum.',
      },
    ],
    contactTitle: 'Vamos conversar?',
    contactDescription:
      'Sobre uma ideia, um projeto ou uma oportunidade. Será um prazer conhecer o que você está construindo.',
    email: 'Enviar um e-mail',
    footer: 'Feito com intenção. Construído com Angular.',
    pageTitle: 'Marcelo Queiroz · Desenvolvedor de software',
    pageDescription:
      'Desenvolvedor de software sênior em Campo Grande. Aplicações web, APIs e dados com C#, Python, SQL, Angular e React. Conheça meus projetos e experiência.',
  },
  en: {
    sectionsLabel: 'Sections',
    backToTop: 'Back to top',
    languageLabel: 'Language',
    skip: 'Skip to content',
    eyebrow: 'Software development',
    role: 'Senior software developer',
    statement: 'From interfaces to data, I build applications that connect.',
    location: 'Campo Grande, MS · Brazil',
    navigation: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    lead: 'Well-built software starts with understanding the problem.',
    aboutBefore: "I'm Marcelo, a software developer with ",
    aboutAfter:
      ' years of experience building web applications. I work across frontend, backend, and databases, connecting the parts that make a system work.',
    aboutSecond:
      'My experience spans technology, education, and real estate data. I use C#, Python, SQL, Angular, and React to turn requirements into practical solutions.',
    experienceSummaryBefore: 'Developer with ',
    experienceSummaryAfter: ' years of experience',
    projects: [
      {
        name: 'Calculadora PGTA',
        description:
          'A tool for estimating Indigenous land management costs and supporting planning.',
        tags: ['Web application', 'Calculator'],
      },
      {
        name: 'Invoice Generator',
        description: 'A simple interface for entering details and generating invoices.',
        tags: ['Productivity', 'Web interface'],
      },
      {
        name: 'Magma Engenharia',
        description: 'A company website presenting its engineering services.',
        tags: ['Company website'],
      },
    ],
    unavailableProject: 'Demo unavailable',
    moreProjects: 'Explore more projects on GitHub',
    earlier: 'View earlier experience',
    experiences: [
      {
        role: 'Systems analyst',
        period: 'Jul 2020 — present',
        description:
          'Building portals, interfaces, and APIs for real estate data products. Integrating systems, SQL queries, access control, and geographic visualizations. Automating reports and analysis with Python, and maintaining, improving, and delivering applications.',
      },
      {
        role: 'Systems analyst',
        period: 'Jul 2016 — Sep 2021',
        description:
          'Building web and mobile applications, connecting interfaces, services, and databases.',
      },
      {
        role: 'Systems analyst',
        period: 'Jul 2015 — Jul 2016',
        description: 'Developing and maintaining web systems with C#, .NET, SQL, and AngularJS.',
      },
      {
        role: 'Software developer',
        period: 'Oct 2011 — Jul 2015',
        description:
          'Developing systems for education using C#, WebForms, jQuery, and Scrum practices.',
      },
    ],
    contactTitle: "Let's talk.",
    contactDescription:
      "About an idea, a project, or an opportunity. I'd love to hear what you're building.",
    email: 'Send an email',
    footer: 'Made with intention. Built with Angular.',
    pageTitle: 'Marcelo Queiroz · Software developer',
    pageDescription:
      'Senior software developer in Campo Grande, Brazil. Web applications, APIs, and data with C#, Python, SQL, Angular, and React. Explore my projects and experience.',
  },
};
