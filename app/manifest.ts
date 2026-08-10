import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Anderson Jhonatan | CEO da K2 Tech',
    short_name: 'Anderson J.',
    description: 'Portfólio de Anderson Jhonatan, CEO e fundador da K2 Tech.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090b10',
    theme_color: '#090b10',
    lang: 'pt-BR',
  }
}
