'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import api from '@/src/shared/api/httpNext'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import { Typography } from '@/src/shared/ui/Typography/Typography'
import { AxiosError } from 'axios'

type Project = {
  name: string
  highlights: string[]
  nda: boolean
  period: string
  role: string
  slug: string
  stack: string[]
}

type PlaceWork = {
  company: string
  location: string
  period: string
  projects: Project[]
  role: string
  type: string
}

type ExperienceList = Array<PlaceWork>

export const ExperienceList = () => {
  const parentRef = useRef(null)
  const [experienceList, setExperienceList] = useState<ExperienceList>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadExperienceList() {
      try {
        setLoading(true)

        const {
          data: { experience },
        } = await api.get('/experience')

        setExperienceList(experience)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setError('Не удалось загрузить список' + ' ' + error.status)
        } else {
          setError('Не удалось загрузить список')
        }
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadExperienceList()
  }, [])

  if (loading) {
    return <Loader size={52} color="var(--primary-color)" margin="auto" />
  }

  if (error) {
    return (
      <Typography as="p" variant="bold" size="24-32" className="m-auto pt-20">
        {error}
      </Typography>
    )
  }

  return (
    <div ref={parentRef} className="flex flex-col gap-y-10">
      {experienceList.map((workPlace) => {
        return (
          <Fragment key={workPlace.company}>
            <div className="group">
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

              <ul className="px-4 pt-5 flex flex-col gap-y-8 overflow-y-auto h-45 custom-scrollbar">
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
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
