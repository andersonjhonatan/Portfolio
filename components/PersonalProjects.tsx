'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import styles from './PersonalProjects.module.css'

const repositoryUrl = 'https://github.com/andersonjhonatan/PokeDex--Graphl'
const technologies = ['React', 'TypeScript', 'GraphQL', 'Apollo Client', 'React Router']

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
          <p>Estudos, testes técnicos e aplicações que desenvolvi fora dos projetos comerciais da K2 Tech.</p>
        </div>

        <article className={styles.card}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Projeto pessoal · GraphQL</span>
            <h3>Pokédex GraphQL</h3>
            <p>Aplicação para explorar Pokémon com busca, filtros, detalhes e favoritos, construída com React, TypeScript, GraphQL e Apollo Client.</p>

            <div className={styles.techs}>
              {technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>

            <a className={styles.link} href={repositoryUrl} target="_blank" rel="noreferrer">
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
      </div>
    </section>,
    mountNode,
  )
}
