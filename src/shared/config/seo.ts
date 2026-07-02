import type { Metadata } from 'next'

export const SITE = {
  url: 'https://profile.nbhey.ru',
  author: 'Оганес Маркарян-Тридрих',
  title: 'Оганес Маркарян-Тридрих — Frontend-разработчик',
  description:
    'Frontend-разработчик. Создаю быстрые и современные веб-интерфейсы на Next.js, React, TypeScript и Tailwind CSS.',
} as const

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.author}`,
  },
  description: SITE.description,
  keywords: [
    SITE.author,
    'frontend',
    'фронтенд-разработчик',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'веб-разработка',
  ],
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  verification: {
    yandex: '69f6bb8f328af7ad',
    google: 'Ag4C6Cwy0wEFR3qk8U2VR2QhprTNGlna8NnE6tLSS2E',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon_16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon_32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/icon_32x32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE.url,
    siteName: SITE.author,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: 'summary',
    title: SITE.title,
    description: SITE.description,
  },
}
