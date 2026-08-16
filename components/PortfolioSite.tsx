'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiAward,
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

const whatsappNumber = '5587991104152'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, Anderson. Vi seu portfólio e gostaria de conversar.')}`
const k2SiteUrl = 'https://k2tech.vercel.app'
const diplomaPublico = '/certificados/diploma-cruzeiro-do-sul.svg'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/andersonjhonatan', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anderson-jhonatan/', icon: FiLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/_anderson.jhonatan/', icon: FiInstagram },
]

type Certificate = { title: string; category: string; image: StaticImageData | string }

const certificates: Certificate[] = [
  {
    title: 'Diploma — Análise e Desenvolvimento de Sistemas',
    category: 'Universidade Cruzeiro do Sul · 2024',
    image: diplomaPublico,
  },
  { title: 'Formação acadêmica', category: 'Cruzeiro do Sul', image: faculdade2 },
  { title: 'Back-End', category: 'Trybe', image: backEnd },
  { title: 'Fundamentos de tecnologia', category: 'Trybe', image: fundamentos },
  { title: 'Front-End', category: 'Trybe', image: frontEnd },
  { title: 'Unidade curricular', category: 'Certificação', image: unidadeCurricular },
  { title: 'CodeSh', category: 'Certificação', image: codesh },
  { title: 'Formação acadêmica', category: 'Cruzeiro do Sul', image: faculdade1 },
]

const capabilities = [
  {
    icon: FiLayers,
    title: 'Produto & Interface',
    text: 'Sites, landing pages e experiências digitais com hierarquia clara, identidade visual e responsividade real.',
    chips: ['UX/UI', 'React', 'Next.js', 'TypeScript'],
  },
  {
    icon: FiCode,
    title: 'Desenvolvimento Full Stack',
    text: 'Construção da interface à regra de negócio, conectando front-end, back-end, APIs e dados em uma solução completa.',
    chips: ['Node.js', 'APIs', 'MySQL', 'Docker'],
  },
  {
    icon: FiMousePointer,
    title: 'Experiência & Conversão',
    text: 'Microinterações, performance e decisões visuais pensadas para transformar navegação em percepção de valor.',
    chips: ['Mobile-first', 'Performance', 'SEO', 'Animação'],
  },
]

const stack = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker', 'Git', 'Tailwind CSS', 'Redux']

export default function PortfolioSite() {
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [certificateIndex, setCertificateIndex] = useState<number | null>(null)
  const selectedCertificate = certificateIndex === null ? null : certificates[certificateIndex]

  function openPortfolio() {
    setPortfolioOpen(true)
    setMenuOpen(false)
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)
  }

  function closePortfolio() {
    setPortfolioOpen(false)
    setMenuOpen(false)
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  function showPreviousCertificate() {
    setCertificateIndex((current) => current === null ? 0 : (current - 1 + certificates.length) % certificates.length)
  }

  function showNextCertificate() {
    setCertificateIndex((current) => current === null ? 0 : (current + 1) % certificates.length)
  }

  if (!portfolioOpen) {
    return (
      <main className="profile-gateway" id="inicio">
        <div className="gateway-glow" aria-hidden="true" />
        <div className="gateway-inner">
          <section className="gateway-content" aria-label="Anderson Jhonatan">
            <h1>Anderson Jhonatan</h1>

            <div className="gateway-photo-wrap">
              <div className="gateway-photo-ring" aria-hidden="true"><span /></div>
              <div className="gateway-photo">
                <Image src={ceoPortrait} alt="Anderson Jhonatan" priority sizes="220px" />
              </div>
            </div>

            <div className="gateway-actions">
              <button className="gateway-button gateway-button--primary" type="button" onClick={openPortfolio}>
                Meu portfólio <FiArrowUpRight aria-hidden="true" />
              </button>
              <a className="gateway-button gateway-button--secondary" href={k2SiteUrl} target="_blank" rel="noreferrer">
                K2 Tech <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <nav className="gateway-socials" aria-label="Redes sociais">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </nav>
          </section>

          <footer className="gateway-footer">
            <p>Tecnologia com propósito. Ideias que ganham presença.</p>
            <span>Anderson Jhonatan · 2026</span>
          </footer>
        </div>
      </main>
    )
  }

  return (
    <div className="ref-portfolio">
      <header className="ref-header">
        <div className="ref-container ref-header-inner">
          <button className="ref-logo" type="button" onClick={closePortfolio} aria-label="Voltar para a página inicial">
            <span>AJ</span>
          </button>

          <nav className="ref-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">O que eu faço</a>
            <a href="#formacao">Formação</a>
            <a href="#qualificacoes">Diploma & Certificados</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="ref-k2-link" href={`${k2SiteUrl}/projetos`} target="_blank" rel="noreferrer">
            K2 Tech <FiArrowUpRight aria-hidden="true" />
          </a>

          <button
            className="ref-menu-button"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="ref-mobile-nav" aria-label="Navegação móvel">
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#servicos" onClick={closeMenu}>O que eu faço</a>
            <a href="#formacao" onClick={closeMenu}>Formação</a>
            <a href="#qualificacoes" onClick={closeMenu}>Diploma & Certificados</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a href={`${k2SiteUrl}/projetos`} target="_blank" rel="noreferrer">Projetos K2 Tech</a>
            <button type="button" onClick={closePortfolio}>Voltar para a entrada</button>
          </nav>
        )}
      </header>

      <main>
        <section className="ref-hero">
          <div className="ref-hero-grid" aria-hidden="true" />
          <div className="ref-container ref-hero-content">
            <div className="ref-pill"><span /> FULL STACK · CEO K2 TECH</div>
            <h1>Anderson<br /><strong>Jhonatan</strong></h1>
            <p>Desenvolvedor Full Stack com visão de produto, design e negócio. Crio experiências digitais que precisam funcionar bem, comunicar melhor e gerar valor.</p>
            <a href="#sobre" className="ref-primary-button">Conheça minha trajetória <FiArrowDownRight aria-hidden="true" /></a>
            <div className="ref-scroll">SCROLL <span /></div>
          </div>
        </section>

        <section className="ref-quick-facts" aria-label="Resumo profissional">
          <div className="ref-container ref-facts-grid">
            <article><span>Formação</span><strong>Análise e Desenvolvimento de Sistemas</strong><small>Cruzeiro do Sul</small></article>
            <article><span>Especialização</span><strong>Full Stack</strong><small>Trybe · curso completo</small></article>
            <article><span>Empresa</span><strong>CEO · K2 Tech</strong><small>Produto, web e experiências</small></article>
            <article><span>Base</span><strong>Ibimirim · PE</strong><small>Brasil</small></article>
          </div>
        </section>

        <section className="ref-about" id="sobre">
          <div className="ref-container ref-about-layout">
            <div className="ref-about-photo">
              <Image src={ceoPortrait} alt="Anderson Jhonatan" fill sizes="(max-width: 860px) 100vw, 44vw" />
              <div className="ref-photo-badge"><span>DESDE</span><strong>K2</strong><small>TECH</small></div>
            </div>

            <div className="ref-about-copy">
              <div className="ref-section-tag"><span>01</span> SOBRE MIM</div>
              <h2>Prazer,<br /><strong>sou Anderson.</strong></h2>
              <p className="ref-about-lead">Desenvolvedor Full Stack, CEO e fundador da K2 Tech.</p>
              <p>Minha trajetória une desenvolvimento de software, direção visual e visão de produto. Gosto de entender o problema inteiro antes de pensar na tecnologia, porque uma boa solução precisa ser útil para quem usa e sustentável para quem mantém.</p>
              <p>Hoje aplico essa visão na K2 Tech, criando sites, produtos digitais e experiências interativas com foco em qualidade, clareza, performance e identidade.</p>
              <div className="ref-skill-pills">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'APIs', 'MySQL', 'UX/UI', 'SEO'].map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="ref-services" id="servicos">
          <div className="ref-container">
            <div className="ref-section-heading">
              <div className="ref-section-tag"><span>02</span> O QUE EU FAÇO</div>
              <h2>Técnica para construir.<br /><strong>Visão para decidir.</strong></h2>
              <p>Minha atuação não fica presa a uma única camada. Eu conecto interface, código, performance e objetivo de negócio.</p>
            </div>

            <div className="ref-service-list">
              {capabilities.map(({ icon: Icon, title, text, chips }, index) => (
                <article className="ref-service-card" key={title}>
                  <div className="ref-service-icon"><Icon aria-hidden="true" /></div>
                  <div className="ref-service-index">0{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="ref-card-chips">{chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ref-education" id="formacao">
          <div className="ref-container">
            <div className="ref-section-heading">
              <div className="ref-section-tag"><span>03</span> FORMAÇÃO</div>
              <h2>Base acadêmica.<br /><strong>Formação prática.</strong></h2>
              <p>Uma combinação que me permite entender fundamentos, aplicação técnica e entrega de produto de ponta a ponta.</p>
            </div>

            <div className="ref-education-grid">
              <article className="ref-education-card">
                <FiAward aria-hidden="true" />
                <span>FORMAÇÃO ACADÊMICA</span>
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <p>Universidade Cruzeiro do Sul</p>
                <small><FiCheck aria-hidden="true" /> Formação concluída em 2024</small>
              </article>
              <article className="ref-education-card ref-education-card--blue">
                <FiCode aria-hidden="true" />
                <span>FORMAÇÃO PROFISSIONAL</span>
                <h3>Desenvolvimento Web Full Stack</h3>
                <p>Trybe</p>
                <small><FiCheck aria-hidden="true" /> Curso completo</small>
              </article>
            </div>
          </div>
        </section>

        <section className="ref-stack" aria-label="Tecnologias">
          <div className="ref-container">
            <div className="ref-section-tag"><span>04</span> STACK & FERRAMENTAS</div>
            <div className="ref-stack-grid">
              {stack.map((item, index) => <span key={item}><small>{String(index + 1).padStart(2, '0')}</small>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="ref-certificates" id="qualificacoes">
          <div className="ref-container">
            <div className="ref-section-heading">
              <div className="ref-section-tag"><span>05</span> DIPLOMA & CERTIFICADOS</div>
              <h2>Formação e conquistas<br /><strong>que podem ser comprovadas.</strong></h2>
              <p>O diploma acadêmico aparece primeiro, seguido pelas certificações complementares da minha formação técnica.</p>
            </div>

            <div className="ref-certificate-grid">
              {certificates.map((certificate, index) => (
                <button className="ref-certificate-card" type="button" key={`${certificate.title}-${index}`} onClick={() => setCertificateIndex(index)}>
                  <div className="ref-certificate-image">
                    <Image src={certificate.image} alt="" fill sizes="(max-width: 760px) 82vw, 30vw" unoptimized={typeof certificate.image === 'string'} />
                    <span><FiArrowUpRight aria-hidden="true" /></span>
                  </div>
                  <div className="ref-certificate-meta">
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    <div><strong>{certificate.title}</strong><span>{certificate.category}</span></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="ref-k2-bridge">
          <div className="ref-container ref-k2-bridge-card">
            <div>
              <div className="ref-section-tag"><span>06</span> PROJETOS</div>
              <h2>Os trabalhos comerciais<br /><strong>vivem na K2 Tech.</strong></h2>
              <p>Sites, sistemas, convites interativos e experiências digitais estão organizados no portfólio da empresa.</p>
            </div>
            <a href={`${k2SiteUrl}/projetos`} target="_blank" rel="noreferrer">Ver projetos K2 Tech <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>

        <section className="ref-contact" id="contato">
          <div className="ref-container ref-contact-layout">
            <div>
              <div className="ref-section-tag"><span>07</span> CONTATO</div>
              <h2>Meu<br /><strong>contato.</strong></h2>
              <p>Conecte-se comigo pelas redes ou envie uma mensagem direta.</p>
            </div>

            <div className="ref-contact-list">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><SiWhatsapp aria-hidden="true" /><span><small>WHATSAPP</small>Conversar agora</span><FiArrowUpRight aria-hidden="true" /></a>
              <a href="https://github.com/andersonjhonatan" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /><span><small>GITHUB</small>andersonjhonatan</span><FiArrowUpRight aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/anderson-jhonatan/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /><span><small>LINKEDIN</small>Anderson Jhonatan</span><FiArrowUpRight aria-hidden="true" /></a>
              <a href="https://www.instagram.com/_anderson.jhonatan/" target="_blank" rel="noreferrer"><FiInstagram aria-hidden="true" /><span><small>INSTAGRAM</small>@_anderson.jhonatan</span><FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ref-footer">
        <div className="ref-container ref-footer-inner">
          <div><strong>AJ</strong><span>Anderson Jhonatan</span></div>
          <p>Tecnologia com propósito. Ideias que ganham presença.</p>
          <small>© 2026 · Ibimirim, Pernambuco</small>
        </div>
      </footer>

      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selectedCertificate.title}>
          <button className="modal-backdrop" type="button" aria-label="Fechar certificado" onClick={() => setCertificateIndex(null)} />
          <div className="modal-content">
            <div className="modal-meta"><span>{String((certificateIndex ?? 0) + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}</span><span>{selectedCertificate.category}</span></div>
            <Image src={selectedCertificate.image} alt={selectedCertificate.title} sizes="92vw" priority unoptimized={typeof selectedCertificate.image === 'string'} />
            <div className="modal-controls">
              <button type="button" onClick={showPreviousCertificate} aria-label="Certificado anterior"><FiChevronLeft aria-hidden="true" /></button>
              <p>{selectedCertificate.title}</p>
              <button type="button" onClick={showNextCertificate} aria-label="Próximo certificado"><FiChevronRight aria-hidden="true" /></button>
              <button type="button" onClick={() => setCertificateIndex(null)} aria-label="Fechar"><FiX aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
