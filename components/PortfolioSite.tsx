'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import {
  FiArrowDownRight,
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiCompass,
  FiGithub,
  FiInstagram,
  FiLayers,
  FiMenu,
  FiMessageCircle,
  FiSend,
  FiX,
} from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

import portrait from '@/public/Captura_de_tela_de_2023-03-27_10-46-05-removebg-preview.png'

const whatsappNumber = '5587991104152'
const whatsappUrl = `https://wa.me/${whatsappNumber}`
const githubUrl = 'https://github.com/andersonjhonatan'
const instagramUrl = 'https://www.instagram.com/_anderson.jhonatan/'

const projects = [
  {
    title: 'K2 Tech',
    description:
      'Site institucional que apresenta os serviços, a identidade e o portfólio de experiências digitais da empresa.',
    category: 'Marca & presença digital',
    tags: ['Next.js', 'SEO', 'Estratégia'],
    link: 'https://github.com/andersonjhonatan/K2Tech',
    art: 'project-art--k2',
  },
  {
    title: 'Convite Roblox',
    description:
      'Convite digital com narrativa de jogo, experiências interativas e uma jornada de confirmação de presença.',
    category: 'Experiência interativa',
    tags: ['UI imersiva', 'Animação', 'Conversão'],
    link: 'https://github.com/andersonjhonatan/ConviteRoblox',
    art: 'project-art--roblox',
  },
  {
    title: 'Convite Minecraft',
    description:
      'Uma experiência temática pensada para tornar um convite infantil memorável antes mesmo da celebração.',
    category: 'Experiência interativa',
    tags: ['Storytelling', 'Responsivo', 'UX'],
    link: 'https://github.com/andersonjhonatan/Convite-Minecraft',
    art: 'project-art--minecraft',
  },
  {
    title: 'Aniversário Spider-Man',
    description:
      'Projeto infantil com identidade visual própria, entrada envolvente e foco na experiência do convidado.',
    category: 'Convite digital',
    tags: ['Design', 'Interação', 'Mobile first'],
    link: 'https://github.com/andersonjhonatan/aniversario-spiderman',
    art: 'project-art--spiderman',
  },
]

const methods = [
  {
    number: '01',
    title: 'Entender o que precisa acontecer',
    text: 'Antes da interface, identifico a mensagem, o público e o resultado que a experiência precisa gerar.',
    icon: FiCompass,
  },
  {
    number: '02',
    title: 'Dar forma à melhor ideia',
    text: 'Design, linguagem e tecnologia trabalham juntos para criar algo coerente com a sua marca.',
    icon: FiLayers,
  },
  {
    number: '03',
    title: 'Entregar com atenção aos detalhes',
    text: 'A experiência final é pensada para carregar rápido, funcionar bem no celular e ser fácil de compartilhar.',
    icon: FiCheckCircle,
  },
]

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleWhatsAppSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const intro = name.trim() ? `Olá, sou ${name.trim()}.` : 'Olá!'
    const detail = message.trim()
      ? ` ${message.trim()}`
      : ' Gostaria de conversar sobre uma experiência digital para o meu projeto.'
    const text = `${intro}${detail} Encontrei seu portfólio e quero falar com a K2 Tech.`

    window.open(`${whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Ir para o início" onClick={closeMenu}>
            <span className="brand-mark">AJ</span>
            <span>
              Anderson Jhonatan
              <small>CEO da K2 Tech</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#visao">Visão</a>
            <a href="#projetos">Projetos</a>
            <a href="#processo">Como trabalho</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="header-cta" href="#contato">
            Vamos conversar <FiArrowRight aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="container mobile-nav" aria-label="Navegação móvel">
            <a href="#visao" onClick={closeMenu}>Visão</a>
            <a href="#projetos" onClick={closeMenu}>Projetos</a>
            <a href="#processo" onClick={closeMenu}>Como trabalho</a>
            <a href="#contato" onClick={closeMenu}>Vamos conversar</a>
          </nav>
        )}
      </header>

      <main>
        <section className="container hero" id="inicio">
          <div>
            <p className="eyebrow">CEO & fundador da K2 Tech</p>
            <h1>
              Ideias com direção.
              <span>Experiências que ficam.</span>
            </h1>
            <p className="hero-intro">
              Sou Anderson Jhonatan. À frente da K2 Tech, transformo objetivos de negócio em experiências digitais bonitas, claras e feitas para conectar pessoas.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projetos">
                Conhecer projetos <FiArrowDownRight aria-hidden="true" />
              </a>
              <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                <SiWhatsapp aria-hidden="true" /> Falar no WhatsApp
              </a>
            </div>
            <p className="hero-note">
              <span className="status-dot" aria-hidden="true" />
              Projetos pensados com estratégia, design e tecnologia — do primeiro contato à entrega.
            </p>
          </div>

          <div className="profile-composition" aria-label="Retrato de Anderson Jhonatan">
            <div className="profile-grid" aria-hidden="true" />
            <div className="profile-card">
              <p className="profile-caption">
                Anderson Jhonatan
                <small>CEO · K2 Tech</small>
              </p>
              <Image
                className="profile-photo"
                src={portrait}
                alt="Anderson Jhonatan, CEO da K2 Tech"
                priority
                sizes="(max-width: 840px) 92vw, 43vw"
              />
            </div>
            <span className="profile-chip chip-one"><FiBriefcase aria-hidden="true" /> Direção estratégica</span>
            <span className="profile-chip chip-two"><FiCode aria-hidden="true" /> Design + tecnologia</span>
          </div>
        </section>

        <section className="about" id="visao">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">Minha visão</p>
              <h2 className="heading">Muito além de um site <em>bonito.</em></h2>
              <p className="body-copy">
                Uma presença digital precisa deixar claro quem você é, inspirar confiança e facilitar a próxima decisão de quem chega até sua marca.
              </p>
            </div>
            <div>
              <p className="lead-statement">
                “A tecnologia é mais valiosa quando transforma uma ideia em uma experiência <strong>simples de entender e impossível de esquecer.</strong>”
              </p>
              <div className="signature">
                <span className="signature-mark"><FiMessageCircle aria-hidden="true" /></span>
                <p><strong>Anderson Jhonatan</strong>CEO e fundador da K2 Tech</p>
              </div>
            </div>
          </div>
          <div className="container principles">
            <article className="principle">
              <span className="principle-label">Clareza</span>
              <p>Mensagens diretas, navegação simples e escolhas que tornam a experiência leve.</p>
            </article>
            <article className="principle">
              <span className="principle-label">Personalidade</span>
              <p>Interfaces que carregam a identidade da marca, sem fórmulas genéricas.</p>
            </article>
            <article className="principle">
              <span className="principle-label">Resultado</span>
              <p>Projetos preparados para apresentar, encantar, converter e continuar evoluindo.</p>
            </article>
          </div>
        </section>

        <div className="container section-divider" />

        <section className="projects" id="projetos">
          <div className="container section-heading-row">
            <div>
              <p className="eyebrow">Projetos selecionados</p>
              <h2 className="heading">O que acontece quando <em>uma ideia ganha vida.</em></h2>
            </div>
            <p className="body-copy">Algumas experiências construídas para a K2 Tech e para pessoas que queriam comunicar algo especial de um jeito memorável.</p>
          </div>

          <div className="container project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art ${project.art}`} aria-hidden="true" />
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>Projeto real</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tag-list">
                      {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                    <a className="text-button" href={project.link} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} no GitHub`}>
                      Ver projeto <FiArrowRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="container section-divider" />

        <section className="method" id="processo">
          <div className="container method-layout">
            <div>
              <p className="eyebrow">Como trabalho</p>
              <h2 className="heading">Da ideia certa até uma entrega <em>que faz sentido.</em></h2>
              <p className="body-copy">Cada etapa existe para evitar ruído e fazer com que o projeto tenha intenção do início ao fim.</p>
            </div>
            <div className="method-list">
              {methods.map((method) => {
                const Icon = method.icon
                return (
                  <article className="method-item" key={method.number}>
                    <span className="method-number">{method.number}</span>
                    <div>
                      <h3>{method.title}</h3>
                      <p>{method.text}</p>
                    </div>
                    <Icon className="method-icon" aria-hidden="true" />
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="leadership" aria-label="Sobre a K2 Tech">
          <div className="container leadership-grid">
            <div className="k2-symbol" aria-label="K2 Tech">K<span>2</span></div>
            <div>
              <p className="eyebrow">K2 Tech</p>
              <h2 className="heading">Ideias que ganham forma, presença e <em>resultado.</em></h2>
              <p className="body-copy">A K2 Tech é a empresa que fundei para unir design moderno, desenvolvimento e visão de negócio em experiências digitais que aproximam marcas e pessoas.</p>
              <div className="leadership-points">
                <div><strong>Sites personalizados</strong>Presença profissional com a cara do seu negócio.</div>
                <div><strong>Landing pages</strong>Páginas objetivas para campanhas, serviços e conversão.</div>
                <div><strong>Convites interativos</strong>Experiências especiais para celebrações que merecem ser lembradas.</div>
                <div><strong>Direção digital</strong>Uma visão mais clara para organizar e evoluir sua presença online.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact-card">
            <div>
              <p className="eyebrow">Vamos construir algo?</p>
              <h2 className="heading">Sua próxima ideia pode começar <em>aqui.</em></h2>
              <p className="body-copy">Me conte, em poucas palavras, o que você quer criar. A conversa continua no WhatsApp, de forma simples e direta.</p>
              <div className="contact-options">
                <span className="contact-option"><SiWhatsapp aria-hidden="true" /> Atendimento pelo WhatsApp</span>
                <span className="contact-option"><FiCheckCircle aria-hidden="true" /> Orçamento sob medida para o seu objetivo</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-field">
                <label htmlFor="name">Como posso te chamar?</label>
                <input id="name" name="name" type="text" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" />
              </div>
              <div className="form-field">
                <label htmlFor="message">O que você gostaria de criar?</label>
                <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ex.: preciso de um site para apresentar meus serviços..." />
              </div>
              <button className="primary-button form-submit" type="submit">
                Continuar no WhatsApp <FiSend aria-hidden="true" />
              </button>
              <p className="form-privacy">Seus dados não ficam salvos neste site: ao enviar, a mensagem é aberta diretamente no WhatsApp.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-caption">© 2026 Anderson Jhonatan · CEO da K2 Tech</p>
          <nav className="footer-links" aria-label="Links externos">
            <a href={githubUrl} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer"><FiInstagram aria-hidden="true" /> Instagram</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><SiWhatsapp aria-hidden="true" /> WhatsApp</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
