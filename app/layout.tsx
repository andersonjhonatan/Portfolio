import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

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
    default: 'Anderson Jhonatan | CEO da K2 Tech',
    template: '%s | Anderson Jhonatan',
  },
  description:
    'Portfólio de Anderson Jhonatan, CEO e fundador da K2 Tech. Estratégia, design e tecnologia para experiências digitais que conectam e geram resultados.',
  keywords: [
    'Anderson Jhonatan',
    'K2 Tech',
    'CEO',
    'sites personalizados',
    'landing pages',
    'convites digitais interativos',
  ],
  authors: [{ name: 'Anderson Jhonatan' }],
  creator: 'Anderson Jhonatan',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Anderson Jhonatan | CEO da K2 Tech',
    description:
      'Estratégia, design e tecnologia para criar experiências digitais que conectam e geram resultados.',
    siteName: 'Anderson Jhonatan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anderson Jhonatan | CEO da K2 Tech',
    description:
      'Estratégia, design e tecnologia para criar experiências digitais que conectam e geram resultados.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090b10',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
