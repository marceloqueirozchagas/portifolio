# Portfolio Design and Content

The user approved the [preserved mockup](reference/approved-layout.html): two columns, dark theme, identity on the left, and structured content on the right. [Brittany Chiang's portfolio](https://brittanychiang.com/) informed the composition; identity, copy, and implementation will be original.

## Visual direction

| Element | Approved reference |
| --- | --- |
| Background | Navy #101b2c with a subtle gradient near the introduction |
| Primary text | #e8edf5 |
| Secondary text | #9aaac0 |
| Accent | Green #72d9c5 |
| Dividers | #263449 |
| Headings | Manrope |
| Body | DM Sans |
| Desktop | Sticky identity on the left; content on the right |
| Mobile | Introduction and sections in normal document flow |
| Projects | Compact covers beside descriptions and categories |
| Language selector | Português / English links near the top, visible on mobile |

Adjust contrast when necessary. Small prototype labels must become legible production text. Keep the dark theme; no theme switcher, hero photograph, carousel, counters, or continuous animations. The preview's auxiliary accent-color control is not part of the website.

## Localization behavior

- Portuguese route: /, document language pt-BR.
- English route: /en/, document language en.
- Display language names rather than flags and identify the active language accessibly.
- Preserve recognized section hashes, for example /#projects to /en/#projects.
- URLs determine language after refresh and when shared. Do not override an explicit URL using browser settings or stored preferences.
- Translate navigation, biographies, descriptions, categories, dates, contact copy, metadata, image alternatives, and accessibility labels.
- Preserve proper names and project destinations. Share structural data and components.
- Review English for natural wording. Do not call translation or AI services at runtime.

## Introduction

| Field | Portuguese | English |
| --- | --- | --- |
| Name | Marcelo Queiroz | Marcelo Queiroz |
| Role | Desenvolvedor de software sênior | Senior software developer |
| Opening | Da interface aos dados, construo aplicações que conectam. | From interfaces to data, I build applications that connect. |
| Location | Campo Grande, MS · Brasil | Campo Grande, MS · Brazil |
| Technologies | C# · Python · TypeScript | C# · Python · TypeScript |

Professional links:

- [GitHub](https://github.com/marceloqueirozchagas)
- [LinkedIn](https://www.linkedin.com/in/marcelo-queiroz-636307a9)
- Email: marceloqueirozchagas@hotmail.com

## About copy

### Portuguese

**Software bem construído começa por entender o problema.**

Sou Marcelo, desenvolvedor com {experienceYears} anos de experiência em aplicações web. Trabalho entre frontend, backend e bancos de dados, conectando as partes que fazem um sistema funcionar.

Minha trajetória passa por tecnologia, educação e dados imobiliários. Combino C#, Python, SQL, Angular e React para transformar necessidades em soluções práticas.

### English

**Well-built software starts with understanding the problem.**

I'm Marcelo, a software developer with {experienceYears} years of experience building web applications. I work across frontend, backend, and databases, connecting the parts that make a system work.

My experience spans technology, education, and real estate data. I use C#, Python, SQL, Angular, and React to turn requirements into practical solutions.

## Selected projects

| Project | Portuguese description | English description |
| --- | --- | --- |
| Calculadora PGTA | Uma ferramenta para calcular custos de gestão de terras indígenas e apoiar o planejamento. | A tool for estimating Indigenous land management costs and supporting planning. |
| Invoice Generator | Uma interface simples para cadastrar informações e gerar invoices. | A simple interface for entering details and generating invoices. |
| Magma Engenharia | Presença digital para apresentar a empresa e seus serviços de engenharia. | A company website presenting its engineering services. |

Category pairs: Aplicação web / Web application; Calculadora / Calculator; Produtividade / Productivity; Interface web / Web interface; Site institucional / Company website.

Existing destinations:

- PGTA: https://calculadoraindigena.com.br/
- Invoice: https://marceloqueirozchagas.github.io/invoice-generator/
- Magma: https://magmaengenharia.com.br/
- Other repositories: https://github.com/marceloqueirozchagas?tab=repositories

Approved covers are conceptual illustrations. Final images should represent projects or remain clearly graphical. Do not present illustrations as product screenshots or invent authorship, metrics, outcomes, or technologies.

## Experience

Show Streetwire and Miltec initially; group SGI and SED under an earlier-experience control.

| Organization | Period on the current site | English content baseline |
| --- | --- | --- |
| Streetwire | July 2020 to Present | Systems analyst. Development with Python, C#, SQL, Angular, and React. |
| Miltec | July 2016 to September 2021 | Systems analyst. Web applications using C#/.NET, SQL, Angular, and Ionic. |
| SGI | July 2015 to July 2016 | Systems development with C#/.NET, SQL, and AngularJS. |
| Secretaria de Estado de Educação | October 2011 to July 2015 | Work with Scrum, C# WebForms, and jQuery. |

Dates come from the previous site. On October 15, 2026, Marcelo confirmed continued employment at Streetwire since July 2020 and the Senior software developer introduction title. Do not change overlapping dates by assumption. Localize dates and roles; retain organization names.

## Navigation and contact strings

| Key | Portuguese | English |
| --- | --- | --- |
| navigation.about | Sobre | About |
| navigation.projects | Projetos | Projects |
| navigation.experience | Experiência | Experience |
| navigation.contact | Contato | Contact |
| projects.heading | Projetos selecionados | Selected projects |
| projects.more | Explorar outros projetos no GitHub | Explore more projects on GitHub |
| experience.earlier | Ver experiências anteriores | View earlier experience |
| experience.present | Atual | Present |
| contact.heading | Vamos conversar? | Let's talk. |
| contact.description | Sobre uma ideia, um projeto ou uma oportunidade. Será um prazer conhecer o que você está construindo. | About an idea, a project, or an opportunity. I'd love to hear what you're building. |
| contact.sendEmail | Enviar um e-mail | Send an email |
| footer.tagline | Feito com intenção. Construído com Angular. | Made with intention. Built with Angular. |
| accessibility.skipToContent | Pular para o conteúdo | Skip to content |
| accessibility.languageSelector | Selecionar idioma | Select language |

The MQ mark returns to the localized page's #home. Active section styling follows scrolling. Retain native anchors and visible focus; honor reduced motion.

On small screens, disable sticky positioning and keep the section links and language selector available without a complex hidden menu. Earlier experience uses a semantic keyboard-accessible control.

## Implementation content updates — October 15, 2026

The user requested automatic experience calculation from October 2011. Replace the fixed 10-year statement with completed calendar years, increasing in October. The highlight uses the same calculated years as the biography; the career timeline retains the start date. The count is prerendered and refreshed after browser hydration, including visibility changes and hourly refreshes. Without JavaScript the numeric value reflects the build date.

Streetwire responsibilities now cover portals, interfaces and APIs for real estate data products; system integration, SQL queries, access control and geographic visualizations; and Python reporting/analysis automation, application maintenance, improvements and delivery. These are a high-level summary of the user's work context (portal/report management, coverage maps, and the technical reports inventory), without internal links, confidential data, unverified leadership claims or performance metrics. The exact bilingual copy lives in `src/app/content/portfolio-content.ts` and remains subject to preview review.
