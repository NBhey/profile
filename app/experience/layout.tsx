import type { Metadata } from 'next'

import { ExperienceWorkContextProvider } from '@/src/features/experience/model/ExperienceWorkStoreProvider'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Опыт работы',
  description:
    'Хронологический обзор моего профессионального пути: основные роли, обязанности и достижения.',
  alternates: { canonical: '/experience' },
}

export default async function ExperienceWorkLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <ExperienceWorkContextProvider>
        {children}
      </ExperienceWorkContextProvider>
    </>
  )
}
