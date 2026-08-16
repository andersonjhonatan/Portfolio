import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import './k2-overrides.css'
import './reference-portfolio.css'
import './portfolio-fixes.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-seven-flax-47.vercel.app'),
  title: {
    default: 'Anderson Jhonatan | CEO da K2 Tech & Full Stack Developer',
    template: '%s | Anderson Jhonatan',
  },
  description:
    'Portfólio de Anderson Jhonatan, CEO e fundador da K2 Tech, desenvolvedor Full Stack formado em Desenvolvimento de Sistemas pela Cruzeiro do Sul e com formação Full Stack pela Trybe.',
  keywords: [
    'Anderson Jhonatan',
    'K2 Tech',
    'CEO',
    'Full Stack Developer',
    'Desenvolvimento de Sistemas',
    'Trybe',
    'Cruzeiro do Sul',
    'Next.js',
    'sites personalizados',
    'landing pages',
    'convites digitais interativos',
  ],
  authors: [{ name: 'Anderson Jhonatan' }],
  creator: 'Anderson Jhonatan',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Anderson Jhonatan | CEO da K2 Tech & Full Stack Developer',
    description: 'Desenvolvimento, direção visual e visão de produto para criar experiências digitais com presença.',
    siteName: 'Anderson Jhonatan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anderson Jhonatan | CEO da K2 Tech & Full Stack Developer',
    description: 'Desenvolvimento, direção visual e visão de produto para criar experiências digitais com presença.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b0c',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
