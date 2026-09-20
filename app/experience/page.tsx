import { ExperienceWorkFilter } from '@/src/features/experience/ui/ExperienceWorkFilter'
import { getExperienceList } from '@/server/getExperienceList'
import { ExperienceCardList } from '@/src/features/experience/ui/ExperienceList'
import { ReactNode } from 'react'
import { Typography } from '@/src/shared/ui/Typography/Typography'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="py-2 px-3">{children}</div>
}

export default function ExperiencePage() {
  const experience = getExperienceList()
  const companyLabels = experience.map(
    (item) => item.company,
  )

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

      <Wrapper>
        <ExperienceWorkFilter labels={companyLabels} />
      </Wrapper>

      <Wrapper>
        <ExperienceCardList experience={experience} />
      </Wrapper>
    </>
  )
}
