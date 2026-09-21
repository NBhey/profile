'use client'

import { useMemo } from 'react'
import { Typography } from '@/src/shared/ui/Typography/Typography'
import { type ExperienceList } from '@/server/getExperienceList'
import { useExperienceWorkStore } from '@/src/features/experience/model/ExperienceWorkStoreProvider'
import Link from 'next/link'
import { ROUTES } from '@/src/shared/config/routes'

export const ExperienceCardList = ({
  experience,
}: {
  experience: ExperienceList
}) => {
  const { activeLabel } = useExperienceWorkStore(
    (state) => state,
  )

  const [experienceList] = useMemo(() => {
    return experience.filter(
      (item) => item.company === activeLabel,
    )
  }, [activeLabel])

  // console.log('ExperienceCardList', experienceList)
  return (
    <>
      {!activeLabel ? (
        'Загрузка...'
      ) : (
        <>
          <Typography
            as="h2"
            size="24-32"
            variant="semibold"
          >
            {experienceList?.role}
          </Typography>

          <div className="pt-2 flex gap-1 flex-wrap">
            <Typography
              as="span"
              variant="normal"
              size="12-14"
              className="text-grey-text tracking-[5px] flex-none"
            >
              {experienceList?.type}
            </Typography>

            <Typography
              as="span"
              variant="normal"
              size="12-14"
              className="text-grey-text tracking-[5px] flex-none"
            >
              &bull; {experienceList?.location}
            </Typography>

            <Typography
              as="span"
              variant="normal"
              size="12-14"
              className="text-grey-text tracking-[5px] flex-none"
            >
              &bull; {experienceList?.period}
            </Typography>
          </div>

          <ul className="pt-2 flex flex-col gap-y-2">
            {experienceList?.projects.map((project) => {
              const countStack = project.stack.length - 3

              return (
                <Link
                  href={
                    ROUTES.experience + '/' + project.slug
                  }
                  key={project.name}
                  prefetch
                >
                  <li className="p-3 border rounded-3xl bg-white">
                    <Typography
                      as="h4"
                      size="16-18"
                      variant="semibold"
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      as="span"
                      variant="normal"
                      size="12-14"
                      className="text-grey-text tracking-[5px] flex-none"
                    >
                      &bull; {project.period}
                    </Typography>
                    <Typography
                      as="span"
                      variant="normal"
                      size="12-14"
                      className="text-grey-text tracking-[5px] flex-none ml-1"
                    >
                      &bull; {project.role}
                    </Typography>

                    <ul className="pt-2 flex flex-wrap items-center gap-1.5">
                      {project.stack
                        .slice(0, 3)
                        .map((tech) => (
                          <li
                            key={tech}
                            className="bg-primary-subtle text-primary rounded-full px-3 py-1 text-[12px] leading-4.5 sm:text-[14px] sm:leading-5 whitespace-nowrap"
                          >
                            {tech}
                          </li>
                        ))}

                      <li className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-[12px] leading-4.5 sm:text-[14px] sm:leading-5 whitespace-nowrap">
                        +{countStack}
                      </li>
                    </ul>
                  </li>
                </Link>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}
