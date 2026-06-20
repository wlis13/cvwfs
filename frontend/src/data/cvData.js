import profilePhoto from '../assets/wlisses-fernando-dos-santos.jpeg'
import accommodationManagementBackground from '../assets/background-images/accommodation-management-background.png'
import afribondBackground from '../assets/background-images/afribond-background.png'
import mp3musicfreeBackground from '../assets/background-images/mp3musicfree-background.png'
import gfsAgrolifeBackground from '../assets/background-images/e-commerce-lalef-front-end-background.png'
import gestorObrasBackground from '../assets/background-images/gestor-obras-background.png'

export const cvData = {
  profile: {
    name: 'Wlisses Fernando dos Santos',
    title: 'Industrial Coatings Specialist & Web Developer',
    location: 'Portugal',
    photo: profilePhoto,
    summary:
      'Especialista em revestimentos industriais em transiÃ§Ã£o estratÃ©gica para desenvolvimento web e software de gestÃ£o de obras.',
    pitch:
      'Uno experiÃªncia real em obra, gestÃ£o tÃ©cnica e desenvolvimento de software para criar soluÃ§Ãµes digitais que resolvem problemas prÃ¡ticos de equipas no terreno.',
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
        href: 'mailto:wlissesdevelopment2970@gmail.com',
        type: 'email',
      },
    ],
  },
  stats: [
    { value: 'Industrial', label: 'revestimentos e pavimentos tÃ©cnicos' },
    { value: 'Mobile', label: 'apps com React Native e Expo' },
    { value: 'GestÃ£o', label: 'obra, materiais e equipas' },
  ],
  about: [
    'Atuo na execuÃ§Ã£o e gestÃ£o de obras com revestimentos epÃ³xi, PU, microcimento e sistemas tÃ©cnicos, com foco em planeamento, qualidade e entrega.',
    'A minha evoluÃ§Ã£o para tecnologia nasce de problemas reais: controlo de materiais, relatÃ³rios, autenticaÃ§Ã£o, PDFs e acompanhamento de obra.',
  ],
  experiences: [
    {
      company: 'Grupo BSS',
      role: 'SÃ³cio & Aplicador TÃ©cnico',
      period: 'ExperiÃªncia atual',
      logo: 'BSS',
      stack: ['EpÃ³xi', 'Microcimento', 'GestÃ£o de obras', 'Planeamento'],
      achievements: [
        'ExecuÃ§Ã£o de revestimentos epÃ³xi industriais, PU e microcimento.',
        'Planeamento de materiais, acompanhamento de equipas e controlo tÃ©cnico de obra.',
        'LigaÃ§Ã£o entre necessidade operacional e soluÃ§Ãµes digitais para gestÃ£o.',
      ],
    },
    {
      company: 'Projetos independentes',
      role: 'Web & Mobile Developer',
      period: 'TransiÃ§Ã£o tecnolÃ³gica',
      logo: 'DEV',
      stack: ['React.js', 'React Native', 'Expo', 'Supabase'],
      achievements: [
        'CriaÃ§Ã£o de apps para resolver fluxos reais de gestÃ£o de obras.',
        'IntegraÃ§Ã£o de autenticaÃ§Ã£o, base de dados, PDFs e recursos com IA.',
        'Desenvolvimento com foco em usabilidade para equipas tÃ©cnicas.',
      ],
    },
    {
      company: 'EDIFICA CONSTRUÃ‡Ã•ES LTDA',
      role: 'Demolidor de edificaÃ§Ãµes',
      period: 'ConstruÃ§Ã£o civil',
      logo: 'EDI',
      stack: ['ConstruÃ§Ã£o', 'DemoliÃ§Ã£o', 'Obras', 'OperaÃ§Ã£o pesada'],
      achievements: [
        'AtuaÃ§Ã£o em serviÃ§os de demoliÃ§Ã£o e apoio em obras.',
        'ExperiÃªncia prÃ¡tica em ambiente de construÃ§Ã£o civil.',
        'Desenvolvimento de resistÃªncia operacional e trabalho em equipa.',
      ],
    },
    {
      company: 'CECILIA PEREIRA MONGE',
      role: 'Cortador de pedras',
      period: 'Acabamentos tÃ©cnicos',
      logo: 'CPM',
      stack: ['Pedras', 'Acabamentos', 'PrecisÃ£o', 'OperaÃ§Ã£o tÃ©cnica'],
      achievements: [
        'Trabalho tÃ©cnico com corte e preparaÃ§Ã£o de pedras.',
        'Desenvolvimento de precisÃ£o operacional e acabamento tÃ©cnico.',
        'ExperiÃªncia prÃ¡tica com materiais de construÃ§Ã£o e acabamento.',
      ],
    },
    {
      company: 'F. S. DA SILVA - MÃRMORES E GRANITOS',
      role: 'Cortador de laminados de madeira',
      period: 'Materiais e produÃ§Ã£o',
      logo: 'FSS',
      stack: ['MÃ¡rmores', 'Granitos', 'Corte tÃ©cnico', 'ProduÃ§Ã£o'],
      achievements: [
        'AtuaÃ§Ã£o em processos de corte e preparaÃ§Ã£o tÃ©cnica de materiais.',
        'Trabalho operacional em ambiente industrial.',
        'Desenvolvimento de experiÃªncia prÃ¡tica com materiais de acabamento e precisÃ£o.',
      ],
    },
    {
      company: 'ODIN INDUSTRIAL E COMERCIAL LTDA',
      role: 'Alimentador de linha de produÃ§Ã£o',
      period: 'ProduÃ§Ã£o industrial',
      logo: 'ODN',
      stack: ['IndÃºstria', 'ProduÃ§Ã£o', 'OperaÃ§Ã£o', 'Processos'],
      achievements: [
        'ParticipaÃ§Ã£o em operaÃ§Ãµes industriais e suporte produtivo.',
        'Acompanhamento de processos operacionais.',
        'Desenvolvimento de disciplina operacional e trabalho em equipe.',
      ],
    },
    {
      company: 'GARRA POLAR E SERVIÃ‡OS LTDA',
      role: 'Alimentador de linha de produÃ§Ã£o',
      period: 'Linha de produÃ§Ã£o',
      logo: 'GPS',
      stack: ['ProduÃ§Ã£o', 'Linha industrial', 'OperaÃ§Ã£o', 'LogÃ­stica'],
      achievements: [
        'AtuaÃ§Ã£o em linha de produÃ§Ã£o industrial.',
        'Suporte operacional para fluxo contÃ­nuo de produÃ§Ã£o.',
        'ExperiÃªncia em organizaÃ§Ã£o e abastecimento operacional.',
      ],
    },
    {
      company: 'CONTAX S.A.',
      role: 'Telefonista',
      period: 'Atendimento e operaÃ§Ã£o',
      logo: 'CTX',
      stack: ['ComunicaÃ§Ã£o', 'Atendimento', 'Suporte', 'OperaÃ§Ã£o'],
      achievements: [
        'Atendimento e comunicaÃ§Ã£o com clientes.',
        'Desenvolvimento de habilidades interpessoais e organizacionais.',
        'ExperiÃªncia em suporte operacional e comunicaÃ§Ã£o empresarial.',
      ],
    },
    {
      company: 'ADILSON DOS SANTOS TEIXEIRA',
      role: 'Limpador de vidros',
      period: 'ServiÃ§os operacionais',
      logo: 'ADT',
      stack: ['ManutenÃ§Ã£o', 'ServiÃ§os', 'OrganizaÃ§Ã£o', 'OperaÃ§Ã£o'],
      achievements: [
        'AtuaÃ§Ã£o em serviÃ§os operacionais e manutenÃ§Ã£o.',
        'Desenvolvimento de disciplina e organizaÃ§Ã£o profissional.',
        'Trabalho focado em qualidade operacional.',
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
      items: ['React Native', 'Expo', 'AutenticaÃ§Ã£o Google'],
    },
    {
      category: 'Backend & Dados',
      items: ['Supabase', 'APIs', 'PDFs', 'AutomaÃ§Ã£o'],
    },
    {
      category: 'GestÃ£o',
      items: ['Obras', 'Materiais', 'Planeamento', 'Equipas'],
    },
    {
      category: 'Revestimentos',
      items: ['EpÃ³xi', 'PU', 'Microcimento', 'Terrazzo', 'Ucrete'],
    },
  ],
  projects: [
    {
      name: 'GestorObras',
      headline: 'App mobile para gestÃ£o de obras, materiais e relatÃ³rios tÃ©cnicos.',
      description:
        'AplicaÃ§Ã£o mobile ainda em desenvolvimento, disponÃ­vel apenas como arquivo .APK, construÃ­da para aproximar escritÃ³rio e terreno com registo de informaÃ§Ã£o, autenticaÃ§Ã£o, PDFs e apoio de IA.',
      image: gestorObrasBackground,
      tech: ['React Native', 'Expo', 'Supabase', 'APK', 'Em desenvolvimento'],
      links: [{ label: 'APK em desenvolvimento', href: null }],
    },
    {
      name: 'GFS Agrolife Company',
      headline: 'Website institucional para apresentar soluÃ§Ãµes industriais, contacto comercial e proposta internacional.',
      description:
        'Projeto web para comunicar a proposta da GFS Agrolife Company: fornecimento de produtos epoxidicos maritimos certificados CE, equipas locais especializadas e contacto por email e WhatsApp.',
      image: gfsAgrolifeBackground,
      tech: ['React.js', 'Vite', 'Node.js', 'Express', 'Vercel'],
      links: [{ label: 'Demo', href: 'https://gfs-site.vercel.app/' }],
    },
    {
      name: 'Site Afribond',
      headline: 'Website institucional para apresentaÃ§Ã£o de marca, serviÃ§os e posicionamento.',
      description:
        'Projeto front-end ainda em desenvolvimento para comunicar a presenÃ§a digital da Afribond com navegaÃ§Ã£o objetiva e visual profissional.',
      image: afribondBackground,
      tech: ['React.js', 'Landing Page', 'UI', 'Vercel'],
      links: [{ label: 'Demo', href: 'https://afribond-site.vercel.app/' }],
    },
    {
      name: 'Accommodation Management',
      headline: 'Interface para gestÃ£o de alojamentos, organizaÃ§Ã£o de dados e acompanhamento operacional.',
      description:
        'Projeto ainda em desenvolvimento focado em apresentaÃ§Ã£o de informaÃ§Ãµes, controlo de alojamentos e leitura rÃ¡pida de dados operacionais.',
      image: accommodationManagementBackground,
      tech: ['React.js', 'GestÃ£o', 'Tabelas', 'Vercel'],
      links: [{ label: 'Demo', href: 'https://cezario-management.vercel.app/' }],
    },
    {
      name: 'mp3MusicFree',
      headline: 'Player web para upload, organização e reprodução de músicas MP3.',
      description:
        'Aplicação full stack para adicionar músicas por arquivo MP3, salvar os ficheiros no MongoDB Atlas com GridFS, cadastrar capas, filtrar por tipos, gerir biblioteca e reproduzir o áudio por URL pública da API.',
      image: mp3musicfreeBackground,
      tech: ['React.js', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'GridFS', 'Mongoose', 'Vercel'],
      links: [{ label: 'Demo', href: 'https://mp3musicfree-web.vercel.app/' }],
    },
  ],
  countries: [
    { name: 'Portugal', flag: 'PT', status: 'Base profissional' },
    { name: 'Espanha', flag: 'ES', status: 'ExperiÃªncia e mercado prÃ³ximo' },
    { name: 'MoÃ§ambique', flag: 'MZ', status: 'Objetivo de atuaÃ§Ã£o' },
    { name: 'Angola', flag: 'AO', status: 'ExpansÃ£o futura' },
  ],
  certifications: [
    { name: 'Master-D', detail: 'FormaÃ§Ã£o em desenvolvimento web e tecnologia' },
    { name: 'Revestimentos tÃ©cnicos', detail: 'ExperiÃªncia prÃ¡tica em sistemas industriais' },
    { name: 'CertificaÃ§Ãµes futuras', detail: 'React, Supabase, automaÃ§Ã£o e cloud' },
  ],
}

