import { Typography } from '@/src/shared/ui/Typography/Typography'
import { ExperienceList } from '@/src/features/experience/ui/ExperienceList'

export default function Experience() {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <Typography as="h1" variant="bold" size="32-48">
          Опыт работы
        </Typography>

        <Typography as="h3" variant="normal">
          Хронологический обзор моего профессионального пути, основные роли,
          обязанности и достижения.
        </Typography>
      </div>
      <div className="flex flex-col">
        <ExperienceList />
      </div>
    </div>
  )
}
