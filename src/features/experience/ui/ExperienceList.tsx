import { Fragment } from 'react'
import { Typography } from '@/src/shared/ui/Typography/Typography'
import { getExperienceList } from '@/src/features/experience/api/getExperienceList'

export const ExperienceList = () => {
  const experience = getExperienceList()
  return (
    <div className="flex flex-col gap-y-10">
      {experience.map((workPlace) => {
        return (
          <Fragment key={workPlace.company}>
            <div className="group flex flex-col gap-y-1">
              <div className="pb-3 flex justify-between">
                <Typography as="h4" variant="bold" size="24-32">
                  {workPlace.company}
                </Typography>
                <Typography
                  as="p"
                  variant="medium"
                  size="16-18"
                  className="group-hover:text-primary group-hover:transition-all duration-200"
                >
                  {workPlace.period}
                </Typography>
              </div>

              <ul className="px-4 pt-5 flex flex-col gap-y-8 overflow-y-auto h-35 custom-scrollbar ">
                {workPlace.projects.map((project) => {
                  return (
                    <li
                      key={project.slug}
                      className="relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-surface before:border-2 before:border-primary before:rounded-full before:-left-4 before:top-1.5 before:transition-colors before:duration-300 hover:before:bg-primary"
                    >
                      <Typography as="h5" variant="semibold" size="16-18">
                        {project.name} {project.nda && '(название скрыто NDA)'}
                      </Typography>
                      <Typography
                        as="p"
                        variant="semibold"
                        size="14-16"
                        className="pb-3 text-right"
                      >
                        {project.period}
                      </Typography>
                      <Typography
                        as="p"
                        variant="semibold"
                        size="14-16"
                        className="pb-3"
                      >
                        Стек: {project.stack.join(', ')}
                      </Typography>
                      <ul className="py-1 flex flex-col gap-y-1">
                        {project.highlights.map((highlight, index) => {
                          return <li key={index}>- {highlight}</li>
                        })}
                      </ul>
                    </li>
                  )
                })}
              </ul>
              <hr className="pt-1 text-primary" />
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
