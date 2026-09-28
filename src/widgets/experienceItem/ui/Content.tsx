'use client'

import { ExperienceList } from '@/server/getExperienceList'
import { usePathname } from 'next/navigation'
import Header, {
  ExperienceProject,
} from '@/src/features/experience/ui/Header'
import { ReactNode } from 'react'
import Body from '@/src/features/experience/ui/Body'
import cn from '@/src/shared/lib/cn'

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn('pt-2 px-3 ', className)}>
      {children}
    </div>
  )
}

export default function Content({
  experienceList,
}: {
  experienceList: ExperienceList
}) {
  const pathname = usePathname()
  let experienceProject: ExperienceProject | undefined

  experienceList.forEach((experience) =>
    experience.projects.forEach((project, index) => {
      if (pathname.includes(project.slug)) {
        experienceProject = {
          ...project,
          companyName: experience.company,
          positionInList:
            index + 1 + ' / ' + experience.projects.length,
          nextProject:
            experience.projects[index + 1] ||
            (experience.projects.length > 1 &&
              experience.projects[0]),
        }
      }
    }),
  )

  console.log(experienceProject)

  return (
    <>
      <Wrapper className="pb-3 bg-primary">
        <Header experienceProject={experienceProject} />
      </Wrapper>

      <Wrapper>
        <Body experienceProject={experienceProject} />
      </Wrapper>
    </>
  )
}
