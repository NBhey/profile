import type { Metadata } from 'next'
import { getExperienceList } from '@/src/features/experience/api/getExperienceList'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'

export const metadata: Metadata = {
  title: 'Опыт работы',
  description:
    'Хронологический обзор моего профессионального пути: основные роли, обязанности и достижения.',
  alternates: { canonical: '/experience' },
}

// export default async function Experience() {
//   return (
//     <div className="h-auto flex flex-col gap-y-8 ">
//       <div>
//         <Typography as="h1" variant="bold" size="32-48">
//           Опыт работы
//         </Typography>
//
//         <Typography as="h3" variant="normal">
//           Хронологический обзор моего профессионального пути, основные роли,
//           обязанности и достижения.
//         </Typography>
//       </div>
//
//       <ExperienceList />
//     </div>
//   )
// }

export default async function Experience() {
  const experience = getExperienceList()
  console.log(experience)

  return (
    <>
      <h1>Опыт работы</h1>
      <ul className="flex">
        {experience.map((experience, index) => (
          <li>
            <Button as={BUTTON_VIEW.BUTTON} btnStyle="outlined">
              {experience.company}
            </Button>
          </li>
        ))}
      </ul>
    </>
  )
}
