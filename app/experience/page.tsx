import { ExperienceWorkFilter } from '@/src/features/experience/ui/ExperienceWorkFilter'
import { getExperienceList } from '@/server/getExperienceList'
import { ExperienceCardList } from '@/src/features/experience/ui/ExperienceList'
import { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="py-2 px-3">{children}</div>
}

export default function ExperiencePage() {
  const experience = getExperienceList()
  console.log('ExperiencePage', experience)

  const companyLabels = experience.map(
    (item) => item.company,
  )

  return (
    <>
      <Wrapper>
        <ExperienceWorkFilter labels={companyLabels} />
      </Wrapper>

      <Wrapper>
        <ExperienceCardList experience={experience} />
      </Wrapper>
    </>
  )
}
