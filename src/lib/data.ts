// Dados que NÃO mudam entre idiomas — nomes de tecnologias, certificações.

export type SkillGroupKey = 'backend' | 'ai' | 'devops' | 'cybersecurity' | 'cloud' | 'tools';
export type Skill = { name: string; learning?: boolean };
export type SkillGroup = { key: SkillGroupKey; color: string; icon: string; tags: Skill[] };

// icon = nome do ícone lucide (renderizado como SVG inline em Skills.astro)
export const skillGroups: SkillGroup[] = [
  {
    key: 'backend', color: '#00d4ff', icon: 'server-cog',
    tags: [
      { name: 'Java' }, { name: 'Python' }, { name: 'Django' }, { name: 'Flask' },
      { name: 'C' }, { name: 'Node.js' }, { name: 'REST APIs' }, { name: 'GraphQL' },
      { name: 'gRPC' }, { name: 'PostgreSQL' }, { name: 'Redis' }, { name: 'MongoDB' },
    ],
  },
  {
    key: 'ai', color: '#a78bfa', icon: 'brain',
    tags: [{ name: 'WhisperX' }, { name: 'CUDA' }, { name: 'Pandas' }, { name: 'NumPy' }, { name: 'Seaborn' }],
  },
  {
    key: 'devops', color: '#ff6b35', icon: 'code-2',
    tags: [{ name: 'Docker' }, { name: 'CI/CD' }, { name: 'Linux' }, { name: 'Kubernetes' }, { name: 'Terraform', learning: true }],
  },
  {
    key: 'cybersecurity', color: '#ffffff', icon: 'lock',
    tags: [{ name: 'Pentest', learning: true }, { name: 'Burp Suite', learning: true }, { name: 'Metasploit', learning: true }, { name: 'Nmap', learning: true }],
  },
  {
    key: 'cloud', color: '#fbbf24', icon: 'cloud',
    tags: [{ name: 'OCI - Oracle Cloud' }, { name: 'Linux' }, { name: 'Nginx' }, { name: 'AWS', learning: true }, { name: 'GCP', learning: true }, { name: 'Azure', learning: true }],
  },
  {
    key: 'tools', color: '#f472b6', icon: 'wrench',
    tags: [{ name: 'Git' }, { name: 'SSH' }, { name: 'Bash/Shell' }, { name: 'Wireshark' }, { name: 'Postman' }, { name: 'Swagger' }, { name: 'Jira' }, { name: 'Notion' }],
  },
];

export const projectTypeColors: Record<string, string> = {
  'DATA SCIENCE': '#a78bfa', 'BACK-END': '#00d4ff', 'DEVOPS': '#ff6b35',
  'CYBERSECURITY': '#ffffff', 'CLOUD': '#fbbf24', 'FRONT-END': '#6366f1', 'TOOLS': '#f472b6',
};

export type SkillKey = 'backend' | 'ai' | 'devops' | 'cybersecurity' | 'cloud' | 'frontend' | 'tools';
export type SkillColor = { bg: string; border: string; color: string; glow: string };

export const skillColors: Record<SkillKey, SkillColor> = {
  backend: { bg: 'rgba(0,212,255,0.12)', border: 'rgba(0,212,255,0.4)', color: '#00d4ff', glow: 'rgba(0,212,255,0.18)' },
  ai: { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.4)', color: '#a78bfa', glow: 'rgba(167,139,250,0.18)' },
  devops: { bg: 'rgba(255,107,53,0.12)', border: 'rgba(255,107,53,0.4)', color: '#ff6b35', glow: 'rgba(255,107,53,0.18)' },
  cybersecurity: { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.25)', color: '#e5e7eb', glow: 'rgba(255,255,255,0.12)' },
  cloud: { bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.4)', color: '#fbbf24', glow: 'rgba(251,191,36,0.18)' },
  frontend: { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.4)', color: '#6366f1', glow: 'rgba(99,102,241,0.18)' },
  tools: { bg: 'rgba(244,114,182,0.12)', border: 'rgba(244,114,182,0.4)', color: '#f472b6', glow: 'rgba(244,114,182,0.18)' },
};

export const certSkillMap: Record<string, SkillKey> = {
  Oracle: 'cloud', AWS: 'cloud', GCP: 'cloud', OCI: 'cloud',
  Docker: 'devops', K8S: 'devops', Kubernetes: 'devops', LTips: 'devops', Linux: 'devops',
  EBAC: 'backend',
  FIAP: 'cybersecurity', CompTIA: 'cybersecurity', Cisco: 'cybersecurity', OSEP: 'cybersecurity',
};

export type Cert = { badge: string; name: string; issuer: string; year: string; url: string | null };

export const certs: Cert[] = [
  { badge: 'DEVOPS', name: 'Creating Pipelines and Automations with GitHub Actions', issuer: 'LINUXtips', year: '2026', url: 'https://www.credential.net/e38bee5c-e847-4b50-b4b5-304375a8af9c' },
  { badge: 'AWS', name: 'AWS Cloud Fundamentals', issuer: 'AWS Treina Brasil · TIDWIT', year: '2026', url: 'https://awstreinabrasil.ontidwit.com/badge?id=eb5de4e8-3908-45e7-80da-a1ecd90583ee' },
  { badge: 'Docker', name: 'Uncomplicating Docker', issuer: 'LINUXtips', year: '2026', url: 'https://www.credential.net/4033f97c-52d2-4977-8658-69e3fc411db3' },
  { badge: 'Oracle', name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate', issuer: 'Oracle', year: '2025', url: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7156738&trackId=OCI25AICFA&key=ee0cd7ab8848df6051db7c56e7df0aee6885d993' },
  { badge: 'Oracle', name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate', issuer: 'Oracle', year: '2025', url: 'https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7156738&trackId=OCI25FNDCFA&key=97738738fab9690ab395e89ea942241a6cf823a6' },
  { badge: 'EBAC', name: 'Full Stack Python Developer', issuer: 'EBAC', year: '2024', url: 'https://lms.ebaconline.com.br/certs/validate/87722-93727-83632-40336' },
  { badge: 'EBAC', name: 'Python Para Análise de Dados', issuer: 'EBAC', year: '2025', url: 'https://lms.ebaconline.com.br/certs/validate/61168-93727-50125-25063' },
  { badge: 'EBAC', name: 'SQL Para Análise de Dados', issuer: 'EBAC', year: '2022', url: 'https://lms.ebaconline.com.br/certs/validate/32585-93727-22726-54752' },
];

export const contactItems = [
  { icon: 'mail', label: 'Email', value: 'hello@cesarsantos.dev', href: 'mailto:hello@cesarsantos.dev' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Cesar Augusto dos Santos Mafra', href: 'https://www.linkedin.com/in/cesar-augusto-dos-santos/?locale=en-US' },
  { icon: 'github', label: 'GitHub', value: 'csarsantos96', href: 'https://github.com/csarsantos96' },
];

export const cvFiles: Record<string, string> = { en: '/cv-en.pdf', pt: '/cv-pt.pdf' };
