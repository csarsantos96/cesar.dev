export type Lang = 'pt' | 'en' | 'de'

export const translations = {
  pt: {
    nav: { about: 'sobre', skills: 'skills', projects: 'projetos', certs: 'certs', resume: 'currículo', contact: 'contato' },
    hero: {
      status: 'disponível para oportunidades',
      title: 'Back-end · DevOps · Security Engineer',
      desc: 'Construindo sistemas resilientes, pipelines seguros e infraestrutura escalável. Especializado em Back-end, DevOps, DevSecOps e Cybersecurity.',
      cta1: 'Ver projetos',
      cta2: 'Entrar em contato',
    },
    stats: { s1: 'anos de experiência', s2: 'projetos entregues', s3: 'certificações', s4: 'idiomas' },
    about: {
      tag: 'sobre mim', title: 'Quem sou eu',
      bio: 'Sou um engenheiro de software focado em construir soluções escaláveis e seguras com impacto real. Minha experiência combina desenvolvimento back-end, infraestrutura cloud-native e cibersegurança, seguindo uma abordagem DevSecOps. Já atuei no desenvolvimento de sistemas orientados a dados, pipelines de automação e projetos com IA, sempre buscando performance, confiabilidade e segurança.',
      photo: 'Adicione sua foto aqui',
      focus: [
        'Back-end com Java, Python, Django, Flask e Node.js',
        'Infraestrutura cloud-native com Kubernetes e Docker',
        'Segurança: pentest, análise de vulnerabilidades, SIEM',
        'Pipelines CI/CD robustos e GitOps',
        'Desenvolvimento front-end com React e Vue.js',
      ],
    },
    skills: { tag: 'tecnologias', title: 'Stack & Skills' },
    projects: {
  tag: 'portfólio', title: 'Projetos',
  items: [
    {
      type: 'DATA SCIENCE',
      name: 'NFLStatsLab',
      desc: 'Análise de 20 anos de dados da NFL (2003–2023). ETL, Exploratory Data Analysis e visualizações com Pandas, NumPy e Seaborn.',
      stack: ['Python', 'Pandas', 'NumPy', 'Seaborn'],
      liveUrl: null,
      repoUrl: 'https://github.com/csarsantos96/BigData',
    },
    {
      type: 'BACK-END',
      name: 'BookStore API',
      desc: 'API RESTful para gerenciamento de livraria com autenticação, CRUD completo e deploy no Heroku.',
      stack: ['Python', 'Django', 'PostgreSQL'],
      liveUrl: null,
      repoUrl: 'https://github.com/csarsantos96/bookstore',
    },
    
  ],
},
    certs: { tag: 'certificações', title: 'Certificações' },
    resume: {
      tag: 'currículo', title: 'Experiência & Educação',
      expLabel: '// experiência', eduLabel: '// educação',
      present: 'Presente', download: '⬇ Baixar CV (PDF)',
      experience: [
        {
          date: 'Out 2025 — Presente',
          title: 'Software Developer (Pleno)',
          company: 'SONDA — Tribunal de Justiça do Acre',
          desc: 'Integração de módulos de IA com WhisperX e CUDA para o projeto ADA, possibilitando transcrição jurídica de alta performance. Otimização do Sistema Vera, automação de processos críticos via APIs REST em Django e Flask, e implementação de pipelines CI/CD via GitLab.',
        },
        {
          date: 'Mar 2024 — Out 2024',
          title: 'Desenvolvedor de Software',
          company: 'Iteracre — Instituto de Terras do Acre',
          desc: 'Desenvolvimento do Sistema de Cadastro Fundiário do Estado com PHP e CakePHP, automatizando demarcação de terras e emissão de títulos. Gerenciamento de ambientes conteinerizados com Docker.',
        },
        {
          date: 'Set 2022 — Dez 2022',
          title: 'Analista de Dados / Web Developer',
          company: 'XLand Holding — Remoto',
          desc: 'Desenvolvimento web com PHP e Laravel, suporte técnico de TI e gestão de bancos de dados SQL com foco em integridade e relatórios de BI.',
        },
        {
          date: 'Fev 2019 — Ago 2022',
          title: 'Chefe da Divisão de T.I',
          company: 'Governo do Estado do Acre — SASDHM',
          desc: 'Liderança de suporte de TI e governança na Secretaria de Direitos Humanos. Digitalização de fluxos de trabalho e estruturação de ambiente virtual de suporte técnico.',
        },
      ],
      education: [
        {
          date: '2021 — Jul 2025',
          title: 'Bacharelado em Sistemas de Informação',
          company: 'Estácio Unimeta',
          desc: 'Conclusão prevista para julho de 2025.',
        },
        {
          date: 'Ago 2025',
          title: 'Pós-graduação em Cibersegurança — Red Team',
          company: 'FIAP',
          desc: 'Especialização em segurança ofensiva, pentest e Red Team.',
        },
      ],
    },
    contact: {
      tag: 'contato', title: 'Vamos conversar',
      open: 'Aberto a oportunidades',
      msg: 'Tem um projeto interessante? Me chama.',
      sub: 'Disponível para posições full-time, contratos e freela em Back-end, DevOps e Segurança.',
    },
    notFound: {
      code: '404', title: 'Página não encontrada',
      desc: 'Essa rota não existe. Provavelmente ainda está em construção.',
      btn: 'Voltar ao início',
    },
    error: {
      code: '500', title: 'Algo deu errado',
      desc: 'Ocorreu um erro inesperado. Tente recarregar a página.',
      btn: 'Recarregar',
    },
  },
  en: {
    nav: { about: 'about', skills: 'skills', projects: 'projects', certs: 'certs', resume: 'resume', contact: 'contact' },
    hero: {
      status: 'available for opportunities',
      title: 'Back-end · DevOps · Security Engineer',
      desc: 'Building resilient systems, secure pipelines and scalable infrastructure. Specialized in Back-end, DevOps, DevSecOps and Cybersecurity.',
      cta1: 'View projects',
      cta2: 'Get in touch',
    },
    stats: { s1: 'years of experience', s2: 'projects delivered', s3: 'certifications', s4: 'languages' },
    about: {
      tag: 'about me', title: 'Who I am',
      bio: "I'm a software engineer focused on building scalable and secure solutions with real impact. My experience combines back-end development, cloud-native infrastructure and cybersecurity, following a DevSecOps approach. I've worked on data-driven systems, automation pipelines and AI projects, always aiming for performance, reliability and security.",
      photo: 'Add your photo here',
      focus: [
        'Back-end with Java, Python, Django, Flask and Node.js',
        'Cloud-native infrastructure with Kubernetes and Docker',
        'Security: pentest, vulnerability analysis, SIEM',
        'Robust CI/CD pipelines and GitOps',
        'Front-end development with React and Vue.js',
      ],
    },
    skills: { tag: 'technologies', title: 'Stack & Skills' },
    projects: {
  tag: 'portfolio', title: 'Projects',
  items: [
    {
      type: 'DATA SCIENCE',
      name: 'NFLStatsLab',
      desc: '20 years of NFL data analysis (2003–2023). ETL, Exploratory Data Analysis and visualizations with Pandas, NumPy and Seaborn.',
      stack: ['Python', 'Pandas', 'NumPy', 'Seaborn'],
      liveUrl: null,
      repoUrl: 'https://github.com/csarsantos96/BigData',
    },
    {
      type: 'BACK-END',
      name: 'BookStore API',
      desc: 'RESTful API for bookstore management with authentication, full CRUD and deployment on Heroku.',
      stack: ['Python', 'Django', 'PostgreSQL'],
      liveUrl: null,
      repoUrl: 'https://github.com/csarsantos96/bookstore',
    },
    
    
  ],
},
    certs: { tag: 'certifications', title: 'Certifications' },
    resume: {
      tag: 'resume', title: 'Experience & Education',
      expLabel: '// experience', eduLabel: '// education',
      present: 'Present', download: '⬇ Download CV (PDF)',
      experience: [
        {
          date: 'Oct 2025 — Present',
          title: 'Full Stack Developer | Java & Python Specialist',
          company: 'SONDA — Court of Justice of Acre',
          desc: 'Led AI module integration using WhisperX and CUDA for the ADA project, enabling high-performance legal transcription. Enhanced the Vera System core modules, automated internal processes via REST APIs, and implemented CI/CD pipelines through GitLab.',
        },
        {
          date: 'Mar 2024 — Oct 2024',
          title: 'Software Developer',
          company: 'Iteracre — Institute of Land of Acre',
          desc: 'Engineered a state-wide Land Registration System using PHP and CakePHP, automating land demarcation and title issuance. Managed containerized environments with Docker.',
        },
        {
          date: 'Sep 2022 — Dec 2022',
          title: 'Data Analyst / Web Developer',
          company: 'XLand Holding — Remote',
          desc: 'Web development with PHP and Laravel, IT technical support, and SQL database management focused on data integrity and BI reporting.',
        },
        {
          date: 'Feb 2019 — Aug 2022',
          title: 'IT Division Chief',
          company: 'Government of the State of Acre — SASDHM',
          desc: 'Led IT support and governance at the Secretariat of Human Rights. Digitalized workflows and designed a virtual technical support environment.',
        },
      ],
      education: [
        {
          date: '2021 — Jul 2025',
          title: 'B.S. in Information Systems',
          company: 'Estácio Unimeta',
          desc: 'Expected graduation: July 2025.',
        },
        {
          date: 'Aug 2025',
          title: 'Postgraduate in Cyber Security — Red Team',
          company: 'FIAP',
          desc: 'Specialization in offensive security, penetration testing and Red Team operations.',
        },
      ],
    },
    contact: {
      tag: 'contact', title: "Let's talk",
      open: 'Open to opportunities',
      msg: "Have an interesting project? Let's talk.",
      sub: 'Available for full-time positions, contracts and freelance in Back-end, DevOps and Security.',
    },
    notFound: {
      code: '404', title: 'Page not found',
      desc: "This route doesn't exist. It's probably still under construction.",
      btn: 'Back to home',
    },
    error: {
      code: '500', title: 'Something went wrong',
      desc: 'An unexpected error occurred. Try reloading the page.',
      btn: 'Reload',
    },
  },
  de: {
    nav: { about: 'über mich', skills: 'skills', projects: 'projekte', certs: 'zertifikate', resume: 'lebenslauf', contact: 'kontakt' },
    hero: {
      status: 'offen für neue Möglichkeiten',
      title: 'Back-end · DevOps · Security Engineer',
      desc: 'Aufbau widerstandsfähiger Systeme, sicherer Pipelines und skalierbarer Infrastruktur. Spezialisiert auf Back-end, DevOps, DevSecOps und Cybersicherheit.',
      cta1: 'Projekte ansehen',
      cta2: 'Kontakt aufnehmen',
    },
    stats: { s1: 'Jahre Erfahrung', s2: 'Projekte geliefert', s3: 'Zertifizierungen', s4: 'Sprachen' },
    about: {
      tag: 'über mich', title: 'Wer ich bin',
      bio: 'Ich bin ein Software-Engineer, der skalierbare und sichere Lösungen mit echtem Mehrwert entwickelt. Meine Erfahrung verbindet Back-end-Entwicklung, Cloud-native-Infrastruktur und Cybersicherheit nach einem DevSecOps-Ansatz. Ich habe an datengetriebenen Systemen, Automatisierungs-Pipelines und KI-Projekten gearbeitet — stets mit Fokus auf Performance, Zuverlässigkeit und Sicherheit.',
      photo: 'Foto hier hinzufügen',
      focus: [
        'Back-end mit Java, Python, Django, Flask und Node.js',
        'Cloud-native Infrastruktur mit Kubernetes und Docker',
        'Sicherheit: Pentest, Schwachstellenanalyse, SIEM',
        'Robuste CI/CD-Pipelines und GitOps',
        'Front-end-Entwicklung mit React und Vue.js',
      ],
    },
    skills: { tag: 'technologien', title: 'Stack & Skills' },
    projects: {
  tag: 'portfolio', title: 'Projekte',
  items: [
    {
      type: 'DATA SCIENCE',
      name: 'NFLStatsLab',
      desc: '20 Jahre NFL-Datenanalyse (2003–2023). ETL, explorative Datenanalyse und Visualisierungen mit Pandas, NumPy und Seaborn.',
      stack: ['Python', 'Pandas', 'NumPy', 'Seaborn'],
      liveUrl: null,
      repoUrl: 'https://github.com/csarsantos96/BigData',
    },
    {
      type: 'BACK-END',
      name: 'BookStore API',
      desc: 'RESTful API für die Buchhandlungsverwaltung mit Authentifizierung, vollständigem CRUD und Deployment auf Heroku.',
      stack: ['Python', 'Django', 'PostgreSQL'],
      liveUrl: null,
      repoUrl: 'https://github.com/csarsantos96/bookstore',
    },
    
  ],
},
    certs: { tag: 'zertifizierungen', title: 'Zertifizierungen' },
    resume: {
      tag: 'lebenslauf', title: 'Erfahrung & Ausbildung',
      expLabel: '// erfahrung', eduLabel: '// ausbildung',
      present: 'Heute', download: '⬇ Lebenslauf herunterladen (PDF)',
      experience: [
        {
          date: 'Okt 2025 — Heute',
          title: 'Full Stack Developer | Java & Python Specialist',
          company: 'SONDA — Court of Justice of Acre',
          desc: 'Led AI module integration using WhisperX and CUDA for the ADA project, enabling high-performance legal transcription. Enhanced the Vera System core modules, automated internal processes via REST APIs, and implemented CI/CD pipelines through GitLab.',
        },
        {
          date: 'Mär 2024 — Okt 2024',
          title: 'Software Developer',
          company: 'Iteracre — Institute of Land of Acre',
          desc: 'Engineered a state-wide Land Registration System using PHP and CakePHP, automating land demarcation and title issuance. Managed containerized environments with Docker.',
        },
        {
          date: 'Sep 2022 — Dez 2022',
          title: 'Data Analyst / Web Developer',
          company: 'XLand Holding — Remote',
          desc: 'Web development with PHP and Laravel, IT technical support, and SQL database management focused on data integrity and BI reporting.',
        },
        {
          date: 'Feb 2019 — Aug 2022',
          title: 'IT Division Chief',
          company: 'Government of the State of Acre — SASDHM',
          desc: 'Led IT support and governance at the Secretariat of Human Rights. Digitalized workflows and designed a virtual technical support environment.',
        },
      ],
      education: [
        {
          date: '2021 — Jul 2025',
          title: 'B.S. in Information Systems',
          company: 'Estácio Unimeta',
          desc: 'Expected graduation: July 2025.',
        },
        {
          date: 'Aug 2025',
          title: 'Postgraduate in Cyber Security — Red Team',
          company: 'FIAP',
          desc: 'Specialization in offensive security, penetration testing and Red Team operations.',
        },
      ],
    },
    contact: {
      tag: 'kontakt', title: 'Lass uns reden',
      open: 'Offen für Möglichkeiten',
      msg: 'Haben Sie ein interessantes Projekt? Melden Sie sich.',
      sub: 'Verfügbar für Vollzeitstellen, Verträge und Freiberuflichkeit in Back-end, DevOps und Sicherheit.',
    },
    notFound: {
      code: '404', title: 'Seite nicht gefunden',
      desc: 'Diese Route existiert nicht. Sie wird wahrscheinlich noch gebaut.',
      btn: 'Zurück zur Startseite',
    },
    error: {
      code: '500', title: 'Etwas ist schiefgelaufen',
      desc: 'Ein unerwarteter Fehler ist aufgetreten. Versuchen Sie, die Seite neu zu laden.',
      btn: 'Neu laden',
    },
  },
}