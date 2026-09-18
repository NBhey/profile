import type { Metadata } from 'next'

import { ExperienceWorkContextProvider } from '@/src/features/experience/model/ExperienceWorkStoreProvider'
import { ReactNode } from 'react'
import { Typography } from '@/src/shared/ui/Typography/Typography'

export const metadata: Metadata = {
  title: 'Опыт работы',
  description:
    'Хронологический обзор моего профессионального пути: основные роли, обязанности и достижения.',
  alternates: { canonical: '/experience' },
}

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="py-2 px-3">{children}</div>
}

export default async function ExperienceWorkLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Wrapper>
        <Typography
          as="h3"
          variant="normal"
          size="12-14"
          className="uppercase text-grey-text tracking-[5px]"
        >
          Опыт работы
        </Typography>
      </Wrapper>

      <ExperienceWorkContextProvider>
        {children}
      </ExperienceWorkContextProvider>
    </>
  )
}
