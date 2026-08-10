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
  FiMessageCircle,
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

const whatsappNumber = '5587991104152'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, Anderson. Vi seu portfólio e gostaria de conversar sobre um projeto.')}`

type Certificate = {
  title: string
  category: string
  image: StaticImageData
}

const certificates: Certificate[] = [
  { title: 'Formação acadêmica', category: 'Graduação', image: faculdade2 },
  { title: 'Back-End', category: 'Formação técnica', image: backEnd },
  { title: 'Fundamentos de tecnologia', category: 'Formação técnica', image: fundamentos },
  { title: 'Front-End', category: 'Formação técnica', image: frontEnd },
  { title: 'Unidade curricular', category: 'Certificação', image: unidadeCurricular },
  { title: 'CodeSh', category: 'Certificação', image: codesh },
  { title: 'Formação acadêmica', category: 'Graduação', image: faculdade1 },
]

const currentProjects = [
  {
    number: '01',
    code: 'K2',
    title: 'K2 Tech',
    type: 'Presença de marca',
    text: 'A estrutura digital da empresa: serviços, posicionamento e um portfólio para transformar conversas em oportunidades.',
    tags: ['Estratégia', 'Next.js', 'SEO'],
    href: 'https://github.com/andersonjhonatan/K2Tech',
    tone: 'project-panel--blue',
  },
  {
    number: '02',
    code: 'RBX',
    title: 'Convite Roblox',
    type: 'Experiência interativa',
    text: 'Uma jornada de aniversário pensada como jogo: entrada, universo visual e confirmação de presença com memória.',
    tags: ['Storytelling', 'Interação', 'Mobile'],
    href: 'https://github.com/andersonjhonatan/ConviteRoblox',
    tone: 'project-panel--pink',
  },
  {
    number: '03',
    code: 'MC',
    title: 'Convite Minecraft',
    type: 'Experiência interativa',
    text: 'Convite temático que transforma a expectativa pela festa em uma experiência antes mesmo do grande dia.',
    tags: ['UX', 'Design', 'Animação'],
    href: 'https://github.com/andersonjhonatan/Convite-Minecraft',
    tone: 'project-panel--green',
  },
  {
    number: '04',
    code: 'SP',
    title: 'Aniversário Spider-Man',
    type: 'Convite digital',
    text: 'Identidade infantil de alto impacto com entrada envolvente e uma linguagem feita para quem vai celebrar.',
    tags: ['Mobile first', 'Visual', 'Experiência'],
    href: 'https://github.com/andersonjhonatan/aniversario-spiderman',
    tone: 'project-panel--red',
  },
]

const legacyProjects = [
  {
    title: 'Tarefas+',
    description: 'Organização de tarefas e estudos com colaboração.',
    image: tarefas,
    github: 'https://github.com/andersonjhonatan/Tasks',
    live: 'https://tasks-p26e.vercel.app/',
    stack: 'React · Next.js · Firebase',
  },
  {
    title: 'Montagem de Móveis',
    description: 'Projeto desenvolvido sob medida para um cliente.',
    image: montagem,
    github: 'https://github.com/andersonjhonatan/Montagem',
    live: 'https://montagem.vercel.app/',
    stack: 'React · JavaScript · Next.js',
  },
  {
    title: 'Stella Explorations',
    description: 'Site estático de alto impacto com foco em experiência.',
    image: estella,
    github: 'https://github.com/andersonjhonatan/Stellar_Tailwind',
    live: 'https://stellar-explorations.onrender.com/',
    stack: 'React · Tailwind · JavaScript',
  },
]

const skillGroups = [
  {
    number: 'A',
    title: 'Produto & interface',
    detail: 'Experiências claras, visuais e responsivas.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
  },
  {
    number: 'B',
    title: 'Arquitetura & dados',
    detail: 'Soluções organizadas para crescer com segurança.',
    skills: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Git', 'Docker'],
  },
  {
    number: 'C',
    title: 'Entrega & experiência',
    detail: 'Detalhes que fazem a tecnologia parecer simples.',
    skills: ['Tailwind CSS', 'Styled Components', 'Redux', 'Bootstrap', 'Animação'],
  },
]

export default function PortfolioSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [certificateIndex, setCertificateIndex] = useState<number | null>(null)

  const selectedCertificate = certificateIndex === null ? null : certificates[certificateIndex]

  function closeMenu() {
    setMenuOpen(false)
  }

  function showPreviousCertificate() {
    setCertificateIndex((current) => current === null ? 0 : (current - 1 + certificates.length) % certificates.length)
  }

  function showNextCertificate() {
    setCertificateIndex((current) => current === null ? 0 : (current + 1) % certificates.length)
  }

  return (
    <div className="executive-site">
      <header className="topbar">
        <div className="site-width topbar-inner">
          <a className="wordmark" href="#inicio" onClick={closeMenu} aria-label="Ir para o início">
            <span className="wordmark-symbol">AJ</span>
            <span>ANDERSON <b>JHONATAN</b><small>CEO / K2 TECH</small></span>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#trajetoria">Trajetória</a>
            <a href="#cases">Cases</a>
            <a href="#capacidade">Capacidade</a>
            <a href="#qualificacoes">Qualificações</a>
          </nav>

          <a href={whatsappUrl} className="contact-link" target="_blank" rel="noreferrer">Iniciar conversa <FiArrowUpRight aria-hidden="true" /></a>

          <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav site-width" aria-label="Navegação móvel">
            <a href="#trajetoria" onClick={closeMenu}>Trajetória</a>
            <a href="#cases" onClick={closeMenu}>Cases</a>
            <a href="#capacidade" onClick={closeMenu}>Capacidade</a>
            <a href="#qualificacoes" onClick={closeMenu}>Qualificações</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero-dossier" id="inicio">
          <div className="site-width hero-dossier-grid">
            <div className="hero-index" aria-hidden="true">
              <span>01</span>
              <i />
              <span>PORTFÓLIO EXECUTIVO</span>
            </div>
            <div className="hero-copy">
              <p className="tiny-label"><span /> Fundador, estrategista e construtor digital</p>
              <h1>Uma visão que<br /><em>transforma</em><br />ideias em valor.</h1>
              <p className="hero-description">Anderson Jhonatan é CEO da K2 Tech, onde une visão de negócio, direção criativa e execução técnica para criar presenças digitais que não passam despercebidas.</p>
              <div className="hero-actions">
                <a href="#cases" className="hero-primary">Explorar trajetória <FiArrowDownRight aria-hidden="true" /></a>
                <a href="#qualificacoes" className="hero-secondary"><FiAward aria-hidden="true" /> Ver qualificações</a>
              </div>
            </div>
            <div className="portrait-stage">
              <div className="portrait-axis" aria-hidden="true"><span>IBIMIRIM · BRASIL</span><span>2026</span></div>
              <div className="portrait-frame">
                <Image src={ceoPortrait} alt="Anderson Jhonatan, CEO e fundador da K2 Tech" priority sizes="(max-width: 760px) 93vw, 43vw" />
                <div className="portrait-name"><strong>ANDERSON</strong><span>JHONATAN</span></div>
              </div>
              <div className="portrait-note"><span className="pulse" /> CEO & fundador<br />da K2 Tech</div>
            </div>
          </div>
          <div className="hero-running-line" aria-hidden="true"><span>DESIGN · TECNOLOGIA · RESULTADO · DESIGN · TECNOLOGIA · RESULTADO · DESIGN · TECNOLOGIA · RESULTADO ·</span></div>
        </section>

        <section className="impact-board" id="trajetoria">
          <div className="site-width">
            <div className="section-lead split-lead">
              <div><p className="tiny-label"><span /> Uma trajetória em construção</p><h2>Estratégia não é uma camada. É o ponto de partida.</h2></div>
              <p>O portfólio não existe para exibir ferramentas. Ele existe para mostrar a capacidade de enxergar um problema, encontrar a melhor direção e entregar algo que gere percepção de valor.</p>
            </div>
            <div className="impact-grid">
              <article><b>+50</b><span>projetos entregues</span><i>Uma jornada construída com execução.</i></article>
              <article><b>100%</b><span>foco em qualidade</span><i>Do primeiro rascunho ao último detalhe.</i></article>
              <article><b>K2</b><span>Tech como plataforma</span><i>Design, tecnologia e resultado no mesmo lugar.</i></article>
              <article className="impact-statement"><FiBriefcase aria-hidden="true" /><p>“Mais que um site.<br /><strong>Uma presença.</strong>”</p></article>
            </div>
          </div>
        </section>

        <section className="case-archive" id="cases">
          <div className="site-width">
            <div className="archive-header"><p className="tiny-label"><span /> Arquivo de trabalhos</p><span>SELEÇÃO / 2023—2026</span></div>
            <h2 className="archive-title">Projetos que mostram<br />como uma ideia <em>ganha vida.</em></h2>
            <div className="project-panels">
              {currentProjects.map((project) => (
                <article className={`project-panel ${project.tone}`} key={project.title}>
                  <div className="panel-top"><span>{project.number}</span><span>{project.type}</span></div>
                  <div className="project-code" aria-hidden="true">{project.code}</div>
                  <div className="panel-info"><h3>{project.title}</h3><p>{project.text}</p><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Abrir projeto ${project.title} no GitHub`}><FiArrowUpRight aria-hidden="true" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="project-history">
          <div className="site-width history-layout">
            <div className="history-intro"><p className="tiny-label"><span /> Projetos que construíram repertório</p><h2>Antes da K2 Tech, já havia vontade de <em>fazer melhor.</em></h2><p>Esses trabalhos continuam aqui porque são parte da sua evolução técnica e da experiência que hoje sustenta suas decisões como fundador.</p></div>
            <div className="legacy-list">
              {legacyProjects.map((project, index) => (
                <article className="legacy-project" key={project.title}>
                  <div className="legacy-visual"><Image src={project.image} alt={`Tela do projeto ${project.title}`} sizes="(max-width: 760px) 86vw, 350px" /><span>0{index + 1}</span></div>
                  <div className="legacy-content"><p>{project.stack}</p><h3>{project.title}</h3><span>{project.description}</span><div><a href={project.live} target="_blank" rel="noreferrer">Abrir projeto <FiArrowUpRight aria-hidden="true" /></a><a href={project.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> Código</a></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capability-section" id="capacidade">
          <div className="site-width">
            <div className="capability-head"><p className="tiny-label"><span /> Capacidade técnica</p><h2>Ferramentas são importantes.<br /><em>Critério é indispensável.</em></h2><p>O conhecimento técnico permanece à vista, organizado pelo que ele permite construir — e não como uma lista solta de ícones.</p></div>
            <div className="skill-ledger">
              {skillGroups.map((group) => (
                <article key={group.number}>
                  <span className="skill-letter">{group.number}</span>
                  <div><h3>{group.title}</h3><p>{group.detail}</p></div>
                  <div className="skill-cloud">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="qualification-section" id="qualificacoes">
          <div className="site-width">
            <div className="qualification-heading"><div><p className="tiny-label"><span /> Qualificações verificáveis</p><h2>Conhecimento que<br /><em>tem registro.</em></h2></div><p>Formações e certificados fazem parte da sua história. Clique em qualquer documento para vê-lo em tamanho maior.</p></div>
            <div className="certificate-wall">
              {certificates.map((certificate, index) => (
                <button className="certificate-card" key={`${certificate.title}-${index}`} type="button" onClick={() => setCertificateIndex(index)} aria-label={`Abrir ${certificate.title}`}>
                  <Image src={certificate.image} alt={certificate.title} sizes="(max-width: 640px) 70vw, (max-width: 900px) 32vw, 230px" />
                  <span className="certificate-overlay"><i><FiMousePointer aria-hidden="true" /></i><b>{certificate.category}</b><small>{certificate.title}</small></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-note">
          <div className="site-width closing-grid"><div><p className="tiny-label"><span /> Próxima página</p><h2>Vamos transformar a sua ideia em uma presença que ninguém ignora.</h2></div><a href={whatsappUrl} target="_blank" rel="noreferrer"><SiWhatsapp aria-hidden="true" /><span>Conversar com Anderson</span><FiArrowUpRight aria-hidden="true" /></a></div>
        </section>
      </main>

      <footer className="executive-footer"><div className="site-width footer-grid"><p>ANDERSON JHONATAN<br /><span>CEO DA K2 TECH</span></p><span>IBIMIRIM, PERNAMBUCO · BRASIL</span><nav><a href="https://github.com/andersonjhonatan" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a><a href="https://www.linkedin.com/in/anderson-jhonatan/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a><a href="https://www.instagram.com/_anderson.jhonatan/" target="_blank" rel="noreferrer"><FiInstagram aria-hidden="true" /> Instagram</a></nav><small>© 2026 · Todos os direitos reservados.</small></div></footer>

      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selectedCertificate.title}>
          <button className="modal-backdrop" type="button" aria-label="Fechar certificado" onClick={() => setCertificateIndex(null)} />
          <div className="modal-content"><div className="modal-meta"><span>{String((certificateIndex ?? 0) + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}</span><span>{selectedCertificate.category}</span></div><Image src={selectedCertificate.image} alt={selectedCertificate.title} sizes="90vw" priority /><div className="modal-controls"><button type="button" onClick={showPreviousCertificate} aria-label="Certificado anterior"><FiChevronLeft aria-hidden="true" /></button><p>{selectedCertificate.title}</p><button type="button" onClick={showNextCertificate} aria-label="Próximo certificado"><FiChevronRight aria-hidden="true" /></button><button type="button" onClick={() => setCertificateIndex(null)} aria-label="Fechar"><FiX aria-hidden="true" /></button></div></div>
        </div>
      )}
    </div>
  )
}
