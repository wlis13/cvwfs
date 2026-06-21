import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Code2,
  HardHat,
  Hammer,
  Mail,
  MapPinned,
  MessageCircle,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow,
} from 'lucide-react'
import { NavLink, Route as RouterRoute, Routes } from 'react-router-dom'
import { useCv } from './context/useCv'
import { useTheme } from './context/useTheme'
import { sendContactMessage } from './lib/api'

const iconMap = {
  linkedin: BriefcaseBusiness,
  github: Code2,
  whatsapp: MessageCircle,
  email: Mail,
}

const skillIconMap = {
  Frontend: Code2,
  Mobile: MessageCircle,
  'Backend & Dados': ClipboardList,
  Gestão: HardHat,
  Revestimentos: Hammer,
}

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
}

function Section({ eyebrow, title, children, className = '', animated = true }) {
  const Component = animated ? motion.section : 'section'
  const motionProps = animated
    ? {
        variants: reveal,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: 'easeOut' },
      }
    : {}

  return (
    <Component
      className={`section ${className}`}
      {...motionProps}
    >
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </Component>
  )
}

function Header() {
  const { theme, toggleTheme } = useTheme()
  const ThemeIcon = theme === 'dark' ? Sun : Moon

  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        WFS
      </NavLink>
      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#experiencia">Experiência</a>
        <a href="#skills">Skills</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
      <div className="header-actions">
        <button
          aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
        >
          <ThemeIcon size={18} />
        </button>
        <a className="header-contact" href="#contato">
          <Mail size={18} />
          Contato
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const { profile, stats } = useCv()

  return (
    <section className="hero-section">
      <motion.div
        className="photo-panel"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="photo-frame">
          <img src={profile.photo} alt={profile.name} />
        </div>
        <div className="photo-badge">
          <ShieldCheck size={20} />
          Técnico + Digital
        </div>
      </motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
      >
        <span className="hero-kicker">CV profissional híbrido</span>
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="social-actions">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.type]
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <Icon size={19} />
                {social.label}
              </a>
            )
          })}
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function About() {
  const { about, profile } = useCv()

  return (
    <Section eyebrow="Sobre mim" title="Experiência real de obra aplicada à tecnologia" className="about-section">
      <div className="about-card" id="sobre">
        <div className="card-icon">
          <Workflow size={24} />
        </div>
        <div>
          <p className="lead">{profile.pitch}</p>
          <div className="about-columns">
            {about.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Experience() {
  const { experiences } = useCv()

  return (
    <Section
      animated={false}
      eyebrow="Experiência profissional"
      title="Linha técnica e empresarial"
      className="experience-section"
    >
      <div className="timeline" id="experiencia">
        {experiences.map((experience) => (
          <article className="timeline-item" key={experience.company}>
            <div className="company-logo">{experience.logo}</div>
            <div className="timeline-card">
              <div className="timeline-head">
                <div>
                  <span>{experience.period}</span>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <Building2 size={26} />
              </div>
              <div className="badge-row">
                {experience.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul>
                {experience.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  const { skills } = useCv()

  return (
    <Section eyebrow="Stack / Skills" title="Dashboard de competências" className="skills-section">
      <div className="skills-grid" id="skills">
        {skills.map((skill) => {
          const Icon = skillIconMap[skill.category] ?? Code2

          return (
            <article className="skill-card" key={skill.category}>
              <div className="skill-icon">
                <Icon size={24} />
              </div>
              <h3>{skill.category}</h3>
              <div className="badge-row">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

function Projects() {
  const { projects } = useCv()

  return (
    <Section eyebrow="Projetos" title="Software nascido de problemas reais" className="projects-section">
      <div className="projects-grid" id="projetos">
        {projects.map((project, index) => (
          <article className={`project-card ${index === 0 ? 'featured' : ''}`} key={project.name}>
            <div
              className="project-visual"
              style={project.image ? { '--project-image': `url(${project.image})` } : undefined}
            >
              <Sparkles size={28} />
              <span>{project.name}</span>
            </div>
            <div className="project-body">
              <h3>{project.name}</h3>
              <p className="project-headline">{project.headline}</p>
              <p>{project.description}</p>
              <div className="badge-row">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    className={!link.href ? 'disabled' : undefined}
                    key={link.label}
                    href={link.href || undefined}
                    target={link.href?.startsWith('http') ? '_blank' : undefined}
                    rel={link.href?.startsWith('http') ? 'noreferrer' : undefined}
                    aria-disabled={!link.href}
                  >
                    {link.label}
                    {link.href && <ArrowUpRight size={17} />}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function International() {
  const { countries } = useCv()

  return (
    <Section eyebrow="Experiência internacional" title="Atuação com visão lusófona e ibérica">
      <div className="map-card">
        <div className="map-visual">
          <MapPinned size={42} />
          <span>PT</span>
          <span>ES</span>
          <span>MZ</span>
          <span>AO</span>
        </div>
        <div className="country-grid">
          {countries.map((country) => (
            <article key={country.name}>
              <strong>{country.flag}</strong>
              <div>
                <h3>{country.name}</h3>
                <p>{country.status}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Certifications() {
  const { certifications } = useCv()

  return (
    <Section eyebrow="Formação" title="Certificações e evolução contínua">
      <div className="cert-grid">
        {certifications.map((item) => (
          <article key={item.name}>
            <BriefcaseBusiness size={23} />
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function handleChange(event) {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      await sendContactMessage(formData)
      setFormData({ name: '', email: '', message: '' })
      setStatus('success')
      setFeedback('Mensagem enviada com sucesso.')
    } catch (error) {
      setStatus('error')
      setFeedback(error.message)
    }
  }

  return (
    <Section eyebrow="Contato" title="Envie uma mensagem" className="contact-section">
      <form className="contact-form" id="contato" onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            autoComplete="name"
            name="name"
            onChange={handleChange}
            required
            type="text"
            value={formData.name}
          />
        </label>
        <label>
          Email
          <input
            autoComplete="email"
            name="email"
            onChange={handleChange}
            required
            type="email"
            value={formData.email}
          />
        </label>
        <label>
          Mensagem
          <textarea
            name="message"
            onChange={handleChange}
            required
            rows="6"
            value={formData.message}
          />
        </label>
        <div className="contact-actions">
          <button disabled={status === 'loading'} type="submit">
            <Mail size={18} />
            {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
          </button>
          {feedback && <p className={`form-feedback ${status}`}>{feedback}</p>}
        </div>
      </form>
    </Section>
  )
}

function Footer() {
  const { profile } = useCv()

  return (
    <footer className="site-footer">
      <div>
        <strong>{profile.name}</strong>
        <p>Profissional técnico que entende o problema real e cria software para resolver.</p>
      </div>
      <div className="footer-links">
        {profile.socials.map((social) => {
          const Icon = iconMap[social.type]
          return (
            <a key={social.label} href={social.href} aria-label={social.label}>
              <Icon size={20} />
            </a>
          )
        })}
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <International />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <RouterRoute path="/" element={<HomePage />} />
      <RouterRoute path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App

