'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiAward,
  FiBriefcase,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiGithub,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMenu,
  FiMousePointer,
  FiX,
} from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'

import ceoPortrait from '@/public/anderson-jhonatan-ceo.webp'
import backEnd from '@/public/certificados/backEnd.png'
import codesh from '@/public/certificados/codesh.png'
import faculdade1 from '@/public/certificados/faculdade1.png'
import faculdade2 from '@/public/certificados/faculdade2.png'
import frontEnd from '@/public/certificados/Front.png'
import fundamentos from '@/public/certificados/fundamentos.png'
import unidadeCurricular from '@/public/certificados/UC-2fdbb2be-e8e2-4969-9d9f-5ba8056150cc.jpg'
import estella from '@/public/projects/estella.png'
import montagem from '@/public/projects/montagem.png'
import tarefas from '@/public/projects/tarefas.png'
import robloxAvatar from '@/public/projects/invitations/convite-roblox-avatar.png'
import robloxIslands from '@/public/projects/invitations/convite-roblox-ilhas.png'
import spiderManHero from '@/public/projects/invitations/convite-spiderman-hero.jpeg'

const whatsappNumber = '5587991104152'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Olá, Anderson. Vi seu portfólio e gostaria de conversar sobre um projeto.',
)}`
const k2SiteUrl = 'https://k2tech.vercel.app'
const k2WhatsappUrl = 'https://wa.me/5587991104152?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20do%20Anderson%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20da%20K2%20Tech.'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/andersonjhonatan', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anderson-jhonatan/', icon: FiLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/_anderson.jhonatan/', icon: FiInstagram },
]

type Certificate = {
  title: string
  category: string
  image: StaticImageData
}

const certificates: Certificate[] = [
  { title: 'Formação acadêmica', category: 'Cruzeiro do Sul', image: faculdade2 },
  { title: 'Back-End', category: 'Trybe', image: backEnd },
  { title: 'Fundamentos de tecnologia', category: 'Trybe', image: fundamentos },
  { title: 'Front-End', category: 'Trybe', image: frontEnd },
  { title: 'Unidade curricular', category: 'Certificação', image: unidadeCurricular },
  { title: 'CodeSh', category: 'Certificação', image: codesh },
  { title: 'Formação acadêmica', category: 'Cruzeiro do Sul', image: faculdade1 },
]

type FeaturedProject = {
  number: string
  title: string
  eyebrow: string
  description: string
  tags: string[]
  github: string
  live?: string
  image?: StaticImageData
  character?: StaticImageData
  visual: 'k2' | 'roblox' | 'minecraft' | 'spiderman' | 'image'
}

const featuredProjects: FeaturedProject[] = [
  {
    number: '01',
    title: 'K2 Tech',
    eyebrow: 'Marca · Produto · Negócio',
    description: 'A presença digital da K2 Tech organizada como produto: posicionamento, serviços, portfólio e experiência para transformar interesse em conversa.',
    tags: ['Next.js', 'Estratégia', 'SEO'],
    github: 'https://github.com/andersonjhonatan/K2Tech',
    visual: 'k2',
  },
  {
    number: '02',
    title: 'Convite Roblox',
    eyebrow: 'Experiência interativa',
    description: 'Um convite infantil pensado como uma jornada digital, com narrativa, interação e confirmação de presença em uma experiência mobile-first.',
    tags: ['Storytelling', 'Interação', 'Mobile'],
    github: 'https://github.com/andersonjhonatan/ConviteRoblox',
    image: robloxIslands,
    character: robloxAvatar,
    visual: 'roblox',
  },
  {
    number: '03',
    title: 'Convite Minecraft',
    eyebrow: 'Interação · Universo temático',
    description: 'Experiência temática que transforma o convite em parte da festa, unindo direção visual, narrativa e pequenos momentos de descoberta.',
    tags: ['UX', 'Animação', 'Design'],
    github: 'https://github.com/andersonjhonatan/Convite-Minecraft',
    visual: 'minecraft',
  },
  {
    number: '04',
    title: 'Aniversário Spider-Man',
    eyebrow: 'Convite digital premium',
    description: 'Interface infantil de alto impacto com entrada marcante, composição visual forte e experiência pensada primeiro para o celular.',
    tags: ['Mobile first', 'Visual', 'Experiência'],
    github: 'https://github.com/andersonjhonatan/aniversario-spiderman',
    image: spiderManHero,
    visual: 'spiderman',
  },
  {
    number: '05',
    title: 'Tarefas+',
    eyebrow: 'Produto web',
    description: 'Organização de tarefas e estudos com colaboração e uma interface objetiva para o dia a dia.',
    tags: ['React', 'Next.js', 'Firebase'],
    github: 'https://github.com/andersonjhonatan/Tasks',
    live: 'https://tasks-p26e.vercel.app/',
    image: tarefas,
    visual: 'image',
  },
  {
    number: '06',
    title: 'Montagem de Móveis',
    eyebrow: 'Projeto para cliente',
    description: 'Site desenvolvido sob medida para apresentar serviços, gerar confiança e facilitar o contato comercial.',
    tags: ['React', 'Next.js', 'JavaScript'],
    github: 'https://github.com/andersonjhonatan/Montagem',
    live: 'https://montagem.vercel.app/',
    image: montagem,
    visual: 'image',
  },
  {
    number: '07',
    title: 'Stella Explorations',
    eyebrow: 'Experiência visual',
    description: 'Projeto estático com foco em composição, atmosfera visual e uma navegação simples de alto impacto.',
    tags: ['React', 'Tailwind', 'JavaScript'],
    github: 'https://github.com/andersonjhonatan/Stellar_Tailwind',
    live: 'https://stellar-explorations.onrender.com/',
    image: estella,
    visual: 'image',
  },
]

const capabilities = [
  {
    number: '01',
    icon: FiLayers,
    title: 'Produto & interface',
    text: 'Sites, landing pages e experiências digitais com hierarquia clara, personalidade e responsividade real.',
    chips: ['UX/UI', 'React', 'Next.js', 'TypeScript'],
  },
  {
    number: '02',
    icon: FiCode,
    title: 'Full Stack',
    text: 'Da interface à regra de negócio, com base técnica para construir soluções completas, organizadas e evolutivas.',
    chips: ['Node.js', 'APIs', 'MySQL', 'Docker'],
  },
  {
    number: '03',
    icon: FiMousePointer,
    title: 'Experiência & conversão',
    text: 'Direção visual, microinterações e fluxos pensados para transformar navegação em percepção de valor.',
    chips: ['Mobile-first', 'Animação', 'Performance', 'SEO'],
  },
]

const stack = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker', 'Git', 'Tailwind CSS', 'Redux']

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [certificateIndex, setCertificateIndex] = useState<number | null>(null)
  const selectedCertificate = certificateIndex === null ? null : certificates[certificateIndex]

  function closeMenu() { setMenuOpen(false) }
  function showPreviousCertificate() {
    setCertificateIndex((current) => current === null ? 0 : (current - 1 + certificates.length) % certificates.length)
  }
  function showNextCertificate() {
    setCertificateIndex((current) => current === null ? 0 : (current + 1) % certificates.length)
  }

  return (
    <div className="portfolio-shell">
      <header className="portfolio-header">
        <div className="portfolio-container header-inner">
          <a className="brand-mark" href="#inicio" onClick={closeMenu} aria-label="Voltar ao início">
            <span className="brand-symbol">AJ</span>
            <span className="brand-copy">Anderson Jhonatan<small>CEO · K2 TECH</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#formacao">Formação</a><a href="#k2tech">K2 Tech</a><a href="#contato">Contato</a>
          </nav>
          <a className="header-cta" href={k2WhatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <FiArrowUpRight aria-hidden="true" /></a>
          <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav portfolio-container" aria-label="Navegação móvel">
            <a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#projetos" onClick={closeMenu}>Projetos</a><a href="#formacao" onClick={closeMenu}>Formação</a><a href="#k2tech" onClick={closeMenu}>K2 Tech</a><a href="#contato" onClick={closeMenu}>Contato</a><a href={k2WhatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" /><div className="hero-glow hero-glow--one" aria-hidden="true" /><div className="hero-glow hero-glow--two" aria-hidden="true" />
          <div className="portfolio-container hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="live-dot" />CEO · FULL-STACK DEVELOPER · K2 TECH</div>
              <h1><span>ANDERSON</span><em>JHONATAN</em></h1>
              <p className="hero-text">Eu uno desenvolvimento, direção visual e visão de produto para transformar ideias em experiências digitais com presença.</p>
              <div className="hero-actions hero-actions--paths">
                <a className="button button--primary" href="#sobre">Meu portfólio completo <FiArrowDownRight aria-hidden="true" /></a>
                <a className="button button--ghost button--k2" href="#k2tech"><span className="button-k2-mark">K2</span> K2 Tech · Serviços Web <FiArrowDownRight aria-hidden="true" /></a>
              </div>
              <div className="hero-socials" aria-label="Redes sociais">
                {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon aria-hidden="true" /><span>{label}</span></a>)}
              </div>
            </div>
            <div className="hero-portrait-wrap">
              <div className="portrait-orbit portrait-orbit--outer" aria-hidden="true"><i /><i /></div><div className="portrait-orbit portrait-orbit--inner" aria-hidden="true"><i /></div><span className="profile-orbit-dot" aria-hidden="true" /><div className="portrait-halo" aria-hidden="true" />
              <div className="portrait-card"><Image src={ceoPortrait} alt="Anderson Jhonatan, CEO da K2 Tech" priority sizes="(max-width: 900px) 78vw, 38vw" /><div className="portrait-shade" /></div>
              <div className="portrait-chip portrait-chip--role"><span>01</span>CEO / K2 TECH</div><div className="portrait-chip portrait-chip--stack"><span>&lt;/&gt;</span>FULL STACK</div><div className="portrait-chip portrait-chip--location"><span className="live-dot" />IBIMIRIM · PE</div>
            </div>
          </div>
          <div className="hero-bottom portfolio-container"><span>PORTFÓLIO / 2026</span><a href="#sobre">SCROLL <FiArrowDownRight aria-hidden="true" /></a></div>
        </section>

        <section className="signal-strip" aria-label="Especialidades"><div className="signal-track"><span>DESENVOLVIMENTO FULL STACK</span><i /><span>PRODUTO DIGITAL</span><i /><span>DESIGN & EXPERIÊNCIA</span><i /><span>NEXT.JS</span><i /><span>K2 TECH</span><i /><span>DESENVOLVIMENTO FULL STACK</span><i /><span>PRODUTO DIGITAL</span><i /><span>DESIGN & EXPERIÊNCIA</span><i /></div></section>

        <section className="k2-section section" id="k2tech">
          <div className="k2-network" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="portfolio-container">
            <div className="k2-section-head">
              <div>
                <p className="eyebrow"><span>K2</span> SOLUÇÕES DIGITAIS</p>
                <div className="k2-brand-lockup" aria-label="K2 Tech"><strong>K2</strong><small>T<span>Ξ</span>CH</small></div>
              </div>
              <div className="k2-intro-copy"><span>TECNOLOGIA PARA CRESCIMENTO REAL</span><h2>Seu negócio com uma presença digital <em>profissional.</em></h2><p>A K2 Tech cria sites, experiências interativas e soluções digitais com foco em visual, performance e resultado.</p></div>
            </div>

            <div className="k2-offers">
              <article className="k2-offer-card">
                <div className="k2-offer-top"><span>01</span><FiCode aria-hidden="true" /></div>
                <div><small>CRIAÇÃO DE SITES</small><h3>Site profissional</h3><p>Presença digital moderna e responsiva para apresentar seu negócio, seus serviços e facilitar novos contatos.</p></div>
                <div className="k2-price"><span>A PARTIR DE</span><strong>R$ 299,90</strong></div>
                <a href={k2WhatsappUrl} target="_blank" rel="noreferrer">Quero meu site <FiArrowUpRight aria-hidden="true" /></a>
              </article>
              <article className="k2-offer-card k2-offer-card--featured">
                <div className="k2-offer-top"><span>02</span><FiMousePointer aria-hidden="true" /></div>
                <div><small>CONVITE INTERATIVO</small><h3>Convite que vira experiência</h3><p>Convites digitais personalizados, mobile-first e com interações que deixam a experiência muito além de uma imagem.</p></div>
                <div className="k2-price"><span>A PARTIR DE</span><strong>R$ 49,90</strong></div>
                <a href={k2WhatsappUrl} target="_blank" rel="noreferrer">Criar meu convite <FiArrowUpRight aria-hidden="true" /></a>
              </article>
            </div>

            <div className="k2-footer-row"><p><span>&lt;/&gt;</span> Desenvolvimento Web <span>▣</span> Sistemas Personalizados <span>↗</span> Soluções Inteligentes</p><div><a href={k2SiteUrl} target="_blank" rel="noreferrer">Visitar site oficial <FiArrowUpRight aria-hidden="true" /></a><a href={k2WhatsappUrl} target="_blank" rel="noreferrer"><SiWhatsapp aria-hidden="true" /> Falar com a K2 Tech</a></div></div>
          </div>
        </section>

        <section className="about-section section" id="sobre">
          <div className="portfolio-container">
            <div className="section-heading section-heading--split"><div><p className="eyebrow"><span>01</span> SOBRE MIM</p><h2>Não construo só páginas.<br /><em>Construo presença.</em></h2></div><p>Meu trabalho está no encontro entre código, design e negócio. A tecnologia é a base; a experiência que ela cria é o que realmente importa.</p></div>
            <div className="about-grid">
              <article className="about-story glass-card"><div className="card-index">AJ / 01</div><p className="about-lead">Sou Anderson Jhonatan, CEO e fundador da K2 Tech e desenvolvedor Full Stack.</p><p>Minha trajetória combina desenvolvimento de software com a construção de produtos digitais que precisam ser claros, rápidos, bonitos e úteis. Hoje aplico essa visão em sites, experiências interativas e soluções para marcas e negócios.</p><div className="about-signature"><span>Anderson Jhonatan</span><small>CEO · K2 TECH</small></div></article>
              <div className="about-side"><article className="mini-stat glass-card"><span>BASE</span><strong>Full Stack</strong><p>Front-end, back-end, dados e entrega no mesmo raciocínio de produto.</p></article><article className="mini-stat glass-card"><span>FOCO</span><strong>Experiência</strong><p>Interfaces com identidade, hierarquia visual, performance e intenção.</p></article><article className="mini-stat glass-card mini-stat--accent"><FiBriefcase aria-hidden="true" /><p>“A melhor tecnologia é aquela que faz a experiência parecer simples.”</p></article></div>
            </div>
          </div>
        </section>

        <section className="education-section section" id="formacao">
          <div className="portfolio-container">
            <div className="section-heading"><p className="eyebrow"><span>02</span> FORMAÇÃO</p><h2>Formação técnica com<br /><em>base acadêmica.</em></h2></div>
            <div className="education-grid">
              <article className="education-card education-card--university"><div className="education-icon"><FiAward aria-hidden="true" /></div><div><span className="education-type">FORMAÇÃO ACADÊMICA</span><h3>Desenvolvimento de Sistemas</h3><p>Universidade Cruzeiro do Sul</p></div><div className="education-status"><FiCheck aria-hidden="true" /> Formação concluída</div></article>
              <article className="education-card education-card--trybe"><div className="education-icon"><FiCode aria-hidden="true" /></div><div><span className="education-type">FORMAÇÃO PROFISSIONAL</span><h3>Desenvolvimento Web Full Stack</h3><p>Trybe</p></div><div className="education-status"><FiCheck aria-hidden="true" /> Curso completo</div></article>
            </div>
            <div className="education-note"><span>02.1</span><p>Uma formação construída para entender o produto inteiro: interface, lógica, APIs, banco de dados, versionamento, testes e entrega.</p></div>
          </div>
        </section>

        <section className="capabilities-section section" id="capacidade">
          <div className="portfolio-container">
            <div className="section-heading section-heading--split"><div><p className="eyebrow"><span>03</span> O QUE EU ENTREGO</p><h2>Capacidade técnica.<br /><em>Visão de produto.</em></h2></div><p>Não separo tecnologia de experiência. Cada decisão visual precisa conversar com performance, manutenção e objetivo de negócio.</p></div>
            <div className="capability-grid">{capabilities.map(({ number, icon: Icon, title, text, chips }) => <article className="capability-card" key={title}><div className="capability-top"><span>{number}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><div className="chip-row">{chips.map((chip) => <span key={chip}>{chip}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section className="stack-section" aria-label="Tecnologias"><div className="portfolio-container stack-header"><span>STACK / FERRAMENTAS</span><span>12 TECNOLOGIAS</span></div><div className="stack-track">{[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}</div></section>

        <section className="projects-section section" id="projetos">
          <div className="portfolio-container">
            <div className="projects-heading"><div><p className="eyebrow"><span>04</span> PROJETOS SELECIONADOS</p><h2>Ideias que saíram<br />da tela e <em>ganharam vida.</em></h2></div><p>Uma seleção que mistura produto, presença de marca, projetos para clientes e experiências digitais interativas.</p></div>
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <article className={`project-card project-card--${project.visual} ${index === 0 ? 'project-card--wide' : ''}`} key={project.title}>
                  <div className="project-visual">
                    {project.image && <Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />}
                    {project.character && <Image className="project-character" src={project.character} alt="" fill sizes="(max-width: 760px) 48vw, 24vw" />}
                    {project.visual === 'k2' && <div className="k2-visual" aria-hidden="true"><span className="k2-orbit k2-orbit--one" /><span className="k2-orbit k2-orbit--two" /><strong>K2</strong><small>TECH</small></div>}
                    {project.visual === 'minecraft' && <div className="minecraft-visual" aria-hidden="true"><span className="mc-sky" /><span className="mc-island mc-island--one" /><span className="mc-island mc-island--two" /><span className="mc-portal" /><span className="mc-pixel mc-pixel--one" /><span className="mc-pixel mc-pixel--two" /><strong>MINECRAFT</strong></div>}
                    <div className="project-visual-overlay" /><div className="project-number">{project.number}</div>
                  </div>
                  <div className="project-body"><span className="project-eyebrow">{project.eyebrow}</span><h3>{project.title}</h3><p>{project.description}</p><div className="chip-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Ver projeto <FiArrowUpRight aria-hidden="true" /></a>}<a href={project.github} target="_blank" rel="noreferrer">GitHub <FiGithub aria-hidden="true" /></a></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="certificates-section section" id="qualificacoes">
          <div className="portfolio-container">
            <div className="section-heading section-heading--split"><div><p className="eyebrow"><span>05</span> CERTIFICADOS</p><h2>Aprendizado que pode<br /><em>ser comprovado.</em></h2></div><p>Os certificados continuam disponíveis no portfólio, agora organizados como uma galeria limpa e fácil de consultar.</p></div>
            <div className="certificate-grid">{certificates.map((certificate, index) => <button className="certificate-card" type="button" key={`${certificate.title}-${index}`} onClick={() => setCertificateIndex(index)}><div className="certificate-preview"><Image src={certificate.image} alt="" fill sizes="(max-width: 760px) 85vw, 30vw" /><span><FiArrowUpRight aria-hidden="true" /></span></div><div className="certificate-info"><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{certificate.title}</strong><small>{certificate.category}</small></div></div></button>)}</div>
          </div>
        </section>

        <section className="contact-section section" id="contato">
          <div className="contact-glow" aria-hidden="true" />
          <div className="portfolio-container contact-layout"><div><p className="eyebrow"><span>06</span> PRÓXIMO PROJETO</p><h2>Tem uma ideia?<br /><em>Vamos dar forma a ela.</em></h2><p className="contact-copy">Sites, produtos digitais, experiências interativas ou uma presença online que precise sair do comum.</p></div><div className="contact-actions"><a className="contact-main" href={whatsappUrl} target="_blank" rel="noreferrer"><SiWhatsapp aria-hidden="true" /><span><small>CONVERSAR AGORA</small>WhatsApp</span><FiArrowUpRight aria-hidden="true" /></a><a className="contact-secondary" href="https://github.com/andersonjhonatan" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /><span><small>VER CÓDIGO</small>GitHub</span><FiArrowUpRight aria-hidden="true" /></a><a className="contact-secondary" href="https://www.linkedin.com/in/anderson-jhonatan/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /><span><small>PERFIL PROFISSIONAL</small>LinkedIn</span><FiArrowUpRight aria-hidden="true" /></a></div></div>
        </section>
      </main>

      <footer className="portfolio-footer"><div className="portfolio-container footer-inner"><div className="footer-brand"><span className="brand-symbol">AJ</span><div><strong>Anderson Jhonatan</strong><small>CEO · K2 TECH</small></div></div><span className="footer-location">IBIMIRIM · PERNAMBUCO · BRASIL</span><nav aria-label="Redes sociais do rodapé">{socialLinks.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</nav><small>© 2026 · Todos os direitos reservados.</small></div></footer>

      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selectedCertificate.title}><button className="modal-backdrop" type="button" aria-label="Fechar certificado" onClick={() => setCertificateIndex(null)} /><div className="modal-content"><div className="modal-meta"><span>{String((certificateIndex ?? 0) + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}</span><span>{selectedCertificate.category}</span></div><Image src={selectedCertificate.image} alt={selectedCertificate.title} sizes="92vw" priority /><div className="modal-controls"><button type="button" onClick={showPreviousCertificate} aria-label="Certificado anterior"><FiChevronLeft aria-hidden="true" /></button><p>{selectedCertificate.title}</p><button type="button" onClick={showNextCertificate} aria-label="Próximo certificado"><FiChevronRight aria-hidden="true" /></button><button type="button" onClick={() => setCertificateIndex(null)} aria-label="Fechar"><FiX aria-hidden="true" /></button></div></div></div>
      )}
    </div>
  )
}
