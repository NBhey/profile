import Link from 'next/link'
import { ROUTES } from '@/src/shared/config/routes'
import { Icon } from '@/src/shared/ui/Icon/Icon'
import { ExperienceList } from '@/server/getExperienceList'
import { Typography } from '@/src/shared/ui/Typography/Typography'

export type ExperienceProject =
  ExperienceList[number]['projects'][number] & {
    companyName: ExperienceList[number]['company']
    positionInList: string
    nextProject: ExperienceList[number]['projects'][number]
  }

export default function Header({
  experienceProject,
}: {
  experienceProject?: ExperienceProject
}) {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <Link href={ROUTES.experience} className="shrink-0">
          <span className="flex size-8 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30 active:bg-white/40">
            <Icon
              name="arrowBack"
              size={20}
              className="text-white"
            />
          </span>
        </Link>
        <Typography
          as="span"
          variant="medium"
          size="12"
          className="tracking-[0.14em] text-white/75 uppercase"
        >
          Проект {experienceProject?.positionInList}
        </Typography>

        <span className="text-white/75 "> &bull;</span>

        <Typography
          as="span"
          variant="medium"
          size="12"
          className="tracking-[0.14em] text-white/75 uppercase"
        >
          {experienceProject?.companyName}
        </Typography>
      </div>
      <Typography
        as="h1"
        variant="bold"
        size="24-32"
        className="mt-3.5 tracking-[-0.015em] text-balance text-white"
      >
        {experienceProject?.name}
      </Typography>

      <div className="flex items-center gap-2">
        <Typography
          as="h1"
          variant="medium"
          size="14-16"
          className="mt-3.5 tracking-[-0.015em] text-balance text-white flex flex-col"
        >
          <span className="tracking-[0.14em] text-white/75 text-xs">
            Роль
          </span>
          {experienceProject?.role}
        </Typography>

        <Typography
          as="h1"
          variant="medium"
          size="14-16"
          className="mt-3.5 tracking-[-0.015em] text-balance text-white flex flex-col"
        >
          <span className="tracking-[0.14em] text-white/75 text-xs">
            Период
          </span>
          {experienceProject?.period}
        </Typography>
      </div>
    </>
  )
}
