'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import styles from './PersonalProjects.module.css'

const pokedexRepositoryUrl = 'https://github.com/andersonjhonatan/PokeDex--Graphl'
const weatherRepositoryUrl = 'https://github.com/andersonjhonatan/Weather'
const pokedexTechnologies = ['React', 'TypeScript', 'GraphQL', 'Apollo Client', 'React Router']
const weatherTechnologies = ['React', 'TypeScript', 'Vite', 'Open-Meteo', 'PWA', 'Mobile-first']

export default function PersonalProjects() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let root: HTMLElement | null = null

    function sync() {
      const stackSection = document.querySelector('.ref-stack')

      if (!stackSection) {
        if (root) {
          root.remove()
          root = null
          setMountNode(null)
        }
        return
      }

      let nextRoot = document.getElementById('personal-projects-root') as HTMLElement | null
      if (!nextRoot) {
        nextRoot = document.createElement('div')
        nextRoot.id = 'personal-projects-root'
        stackSection.insertAdjacentElement('afterend', nextRoot)
      }

      if (root !== nextRoot) {
        root = nextRoot
        setMountNode(nextRoot)
      }
    }

    sync()
    const observer = new MutationObserver(sync)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      root?.remove()
    }
  }, [])

  if (!mountNode) return null

  return createPortal(
    <section className={styles.section} aria-labelledby="personal-projects-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.tag}><span>05</span> PROJETOS PESSOAIS</div>
          <h2 id="personal-projects-title">Projetos que também contam<br /><strong>minha trajetória técnica.</strong></h2>
          <p>Estudos, produtos experimentais e aplicações que mostram como transformo aprendizado técnico em experiências funcionais.</p>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.copy}>
              <span className={styles.eyebrow}>Projeto pessoal · GraphQL</span>
              <h3>Pokédex GraphQL</h3>
              <p>Aplicação para explorar Pokémon com busca, filtros, detalhes e favoritos, construída com React, TypeScript, GraphQL e Apollo Client.</p>

              <div className={styles.techs}>
                {pokedexTechnologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>

              <a className={styles.link} href={pokedexRepositoryUrl} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> Ver no GitHub <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className={styles.visual} aria-hidden="true">
              <div className={styles.window}>
                <div className={styles.windowTop}><span>Pokédex · Kanto</span><span>GraphQL online</span></div>
                <div className={styles.search}>Pesquisar por nome ou número</div>
                <div className={styles.pokemonRow}>
                  <div><i />Squirtle</div>
                  <div><i />Charmander</div>
                  <div><i />Bulbasaur</div>
                </div>
              </div>
            </div>
          </article>

          <article className={`${styles.card} ${styles.weatherCard}`}>
            <div className={styles.copy}>
              <span className={`${styles.eyebrow} ${styles.weatherEyebrow}`}>Produto experimental · Weather API</span>
              <h3>Weather K2</h3>
              <p>Dashboard meteorológico responsivo com clima atual, previsão por hora e para 7 dias, geolocalização, favoritos e suporte a PWA. O projeto também virou laboratório para performance e responsividade em celulares.</p>

              <div className={styles.techs}>
                {weatherTechnologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>

              <a className={styles.link} href={weatherRepositoryUrl} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" /> Ver no GitHub <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className={`${styles.visual} ${styles.weatherVisual}`} aria-hidden="true">
              <div className={styles.weatherWindow}>
                <div className={styles.weatherTop}>
                  <span><b>K2</b> Weather</span>
                  <span>°C</span>
                </div>
                <div className={styles.weatherLocation}>IBIMIRIM · PERNAMBUCO</div>
                <div className={styles.weatherHero}>
                  <span className={styles.weatherIcon}>☀</span>
                  <div><strong>27°</strong><small>Céu limpo</small></div>
                </div>
                <div className={styles.weatherMetrics}>
                  <span><small>UMIDADE</small><b>61%</b></span>
                  <span><small>VENTO</small><b>14 km/h</b></span>
                  <span><small>PRESSÃO</small><b>1012 hPa</b></span>
                </div>
                <div className={styles.weatherForecast}>
                  <span>Agora <b>27°</b></span>
                  <span>12:00 <b>29°</b></span>
                  <span>15:00 <b>30°</b></span>
                  <span>18:00 <b>26°</b></span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>,
    mountNode,
  )
}
