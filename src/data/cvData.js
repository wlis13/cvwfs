import profilePhoto from '../assets/wlisses-fernando-dos-santos.jpeg'

export const cvData = {
  profile: {
    name: 'Wlisses Fernando dos Santos',
    title: 'Industrial Coatings Specialist & Web Developer',
    location: 'Portugal',
    photo: profilePhoto,
    summary:
      'Especialista em revestimentos industriais em transição estratégica para desenvolvimento web, automação e software de gestão de obras.',
    pitch:
      'Uno experiência real em obra, gestão técnica e desenvolvimento de software para criar soluções digitais que resolvem problemas práticos de equipas no terreno.',
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        type: 'linkedin',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/',
        type: 'github',
      },
      {
        label: 'WhatsApp',
        href: 'https://wa.me/',
        type: 'whatsapp',
      },
      {
        label: 'Email',
        href: 'mailto:wlisses@example.com',
        type: 'email',
      },
    ],
  },
  stats: [
    { value: 'Industrial', label: 'revestimentos e pavimentos técnicos' },
    { value: 'Mobile', label: 'apps com React Native e Expo' },
    { value: 'Gestão', label: 'obra, materiais e equipas' },
  ],
  about: [
    'Atuo na execução e gestão de obras com revestimentos epóxi, PU, microcimento e sistemas técnicos, com foco em planeamento, qualidade e entrega.',
    'A minha evolução para tecnologia nasce de problemas reais: controlo de materiais, relatórios, autenticação, PDFs, automação e acompanhamento de obra.',
  ],
  experiences: [
    {
      company: 'Grupo BSS',
      role: 'Sócio & Aplicador Técnico',
      period: 'Experiência atual',
      logo: 'BSS',
      stack: ['Epóxi', 'Microcimento', 'Gestão de obras', 'Planeamento'],
      achievements: [
        'Execução de revestimentos epóxi industriais, PU e microcimento.',
        'Planeamento de materiais, acompanhamento de equipas e controlo técnico de obra.',
        'Ligação entre necessidade operacional e soluções digitais para gestão.',
      ],
    },
    {
      company: 'Projetos independentes',
      role: 'Web & Mobile Developer',
      period: 'Transição tecnológica',
      logo: 'DEV',
      stack: ['React.js', 'React Native', 'Expo', 'Supabase'],
      achievements: [
        'Criação de apps para resolver fluxos reais de gestão de obras.',
        'Integração de autenticação, base de dados, PDFs e recursos com IA.',
        'Desenvolvimento com foco em usabilidade para equipas técnicas.',
      ],
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Vite'],
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Expo', 'Autenticação Google'],
    },
    {
      category: 'Backend & Dados',
      items: ['Supabase', 'APIs', 'PDFs', 'Automação'],
    },
    {
      category: 'Gestão',
      items: ['Obras', 'Materiais', 'Planeamento', 'Equipas'],
    },
    {
      category: 'Revestimentos',
      items: ['Epóxi', 'PU', 'Microcimento', 'Terrazzo', 'Ucrete'],
    },
  ],
  projects: [
    {
      name: 'GestorObras',
      headline: 'App mobile para gestão de obras, materiais e relatórios técnicos.',
      description:
        'Aplicação construída para aproximar escritório e terreno, com registo de informação, autenticação, geração de PDFs e apoio de IA.',
      tech: ['React Native', 'Expo', 'Supabase', 'IA integrada', 'PDFs'],
      links: [
        { label: 'Demo', href: '#' },
        { label: 'GitHub', href: '#' },
      ],
    },
    {
      name: 'CV Técnico Digital',
      headline: 'Portfólio profissional com posicionamento híbrido industrial + web.',
      description:
        'Experiência digital focada em apresentar competências técnicas, projetos reais e capacidade de resolver problemas com software.',
      tech: ['React.js', 'Context API', 'React Router', 'Lucide React'],
      links: [{ label: 'Ver projeto', href: '#' }],
    },
  ],
  countries: [
    { name: 'Portugal', flag: 'PT', status: 'Base profissional' },
    { name: 'Espanha', flag: 'ES', status: 'Experiência e mercado próximo' },
    { name: 'Moçambique', flag: 'MZ', status: 'Objetivo de atuação' },
    { name: 'Angola', flag: 'AO', status: 'Expansão futura' },
  ],
  certifications: [
    { name: 'Master-D', detail: 'Formação em desenvolvimento web e tecnologia' },
    { name: 'Revestimentos técnicos', detail: 'Experiência prática em sistemas industriais' },
    { name: 'Certificações futuras', detail: 'React, Supabase, automação e cloud' },
  ],
}
