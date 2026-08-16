'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowUpRight, FiCheck, FiGithub } from 'react-icons/fi'

const repositoryUrl = 'https://github.com/andersonjhonatan/PokeDex--Graphl'

const evolution2024 = [
  'Teste técnico para uma oportunidade júnior',
  'Primeiros passos com React, TypeScript e GraphQL',
  'Busca, cards e detalhes de Pokémon',
]

const evolution2026 = [
  'Arquitetura simplificada com Apollo Client',
  'Busca, filtros, ordenação e favoritos persistentes',
  'Interface mobile-first, estados de erro/loading e CI',
]

const technologies = ['React', 'TypeScript', 'GraphQL', 'Apollo Client', 'React Router', 'Tailwind CSS', 'GitHub Actions']

export default function PokedexEvolutionCase() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let injectedRoot: HTMLElement | null = null

    function syncMountPoint() {
      const stackSection = document.querySelector('.ref-stack')

      if (!stackSection) {
        if (injectedRoot) {
          injectedRoot.remove()
          injectedRoot = null
          setMountNode(null)
        }
        return
      }

      let root = document.getElementById('pokedex-evolution-root') as HTMLElement | null

      if (!root) {
        root = document.createElement('div')
        root.id = 'pokedex-evolution-root'
        stackSection.insertAdjacentElement('afterend', root)
      }

      if (injectedRoot !== root) {
        injectedRoot = root
        setMountNode(root)
      }
    }

    syncMountPoint()

    const observer = new MutationObserver(syncMountPoint)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      injectedRoot?.remove()
    }
  }, [])

  if (!mountNode) return null

  return createPortal(
    <section className="ref-evolution" id="evolucao-tecnica" aria-labelledby="pokedex-case-title">
      <div className="ref-container">
        <div className="ref-evolution-heading">
          <div className="ref-section-tag"><span>CASE</span> EVOLUÇÃO TÉCNICA</div>
          <h2 id="pokedex-case-title">Pokédex GraphQL.<br /><strong>O mesmo desafio, outra maturidade.</strong></h2>
          <p>
            Em 2024, este projeto nasceu como teste técnico para uma vaga júnior. Em 2026, voltei ao mesmo código para reconstruí-lo com decisões que representam melhor a forma como penso produto, arquitetura e experiência hoje.
          </p>
        </div>

        <div className="ref-evolution-grid">
          <div className="ref-evolution-story">
            <div className="ref-evolution-years" aria-label="Comparação da evolução do projeto">
              <article>
                <div className="ref-year-label"><span>2024</span> PONTO DE PARTIDA</div>
                <h3>O teste que mostrava o meu nível naquele momento.</h3>
                <ul>
                  {evolution2024.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}
                </ul>
              </article>

              <div className="ref-evolution-arrow" aria-hidden="true">→</div>

              <article className="ref-evolution-year-current">
                <div className="ref-year-label"><span>2026</span> RECONSTRUÇÃO</div>
                <h3>Uma revisão completa sem apagar a história original.</h3>
                <ul>
                  {evolution2026.map((item) => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}
                </ul>
              </article>
            </div>

            <div className="ref-evolution-tech">
              {technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>

            <div className="ref-evolution-actions">
              <a href={repositoryUrl} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> Ver código no GitHub <FiArrowUpRight aria-hidden="true" />
              </a>
              <a href={`${repositoryUrl}#readme`} target="_blank" rel="noreferrer" className="ref-evolution-secondary">
                Ver história do projeto <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="ref-pokedex-visual" aria-label="Representação visual da Pokédex GraphQL">
            <div className="ref-pokedex-browser">
              <div className="ref-pokedex-browserbar">
                <div><span /><span /><span /></div>
                <small>pokedex.graphql / kanto</small>
                <em>ONLINE</em>
              </div>

              <div className="ref-pokedex-dashboard">
                <div className="ref-pokedex-topline">
                  <div>
                    <small>POKÉDEX · KANTO</small>
                    <strong>151 Pokémon</strong>
                  </div>
                  <div className="ref-pokedex-status"><span /> GraphQL conectado</div>
                </div>

                <div className="ref-pokedex-search"><span>⌕</span> Pesquise por nome ou número <kbd>⌘ K</kbd></div>

                <div className="ref-pokedex-filterrow">
                  <span>Todos</span><span>Tipo</span><span>Habilidade</span><span>Ordem #</span>
                </div>

                <div className="ref-pokedex-cards">
                  <article><div className="ref-pokemon-orb ref-pokemon-orb--grass">01</div><small>#001</small><strong>Bulbasaur</strong><span>grass · poison</span></article>
                  <article><div className="ref-pokemon-orb ref-pokemon-orb--fire">04</div><small>#004</small><strong>Charmander</strong><span>fire</span></article>
                  <article><div className="ref-pokemon-orb ref-pokemon-orb--water">07</div><small>#007</small><strong>Squirtle</strong><span>water</span></article>
                </div>

                <div className="ref-pokedex-code">
                  <div><span>query</span> PokemonByName <em>{'{'}</em></div>
                  <p>pokemon_v2_pokemon <strong>(where: {'{'} name: {'{'} _eq: $name {'}'} {'}'})</strong></p>
                  <div><em>{'}'}</em> <small>✓ build & lint</small></div>
                </div>
              </div>
            </div>

            <div className="ref-pokedex-float ref-pokedex-float--one">APOLLO CLIENT</div>
            <div className="ref-pokedex-float ref-pokedex-float--two">CI ✓</div>
          </div>
        </div>
      </div>
    </section>,
    mountNode,
  )
}
