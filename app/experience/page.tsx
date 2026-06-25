import { Typography } from '@/src/shared/ui/Typography/Typography'
import { ExperienceList } from '@/src/features/experience/ui/ExperienceList'

export default async function Experience() {
  return (
    <div className="h-auto flex flex-col gap-y-8 ">
      <div>
        <Typography as="h1" variant="bold" size="32-48">
          Опыт работы
        </Typography>

        <Typography as="h3" variant="normal">
          Хронологический обзор моего профессионального пути, основные роли,
          обязанности и достижения.
        </Typography>
      </div>

      <ExperienceList />
    </div>
  )
}
