'use client'

import { useExperienceWorkStore } from '@/src/features/experience/model/ExperienceWorkStoreProvider'
import { useEffect } from 'react'
import { Button } from '@/src/shared/ui/Button/Button'
import { BUTTON_VIEW } from '@/src/shared/model/types'

export const ExperienceWorkFilter = ({
  labels,
}: {
  labels: string[]
}) => {
  const { activeLabel, setCompanyLabel } =
    useExperienceWorkStore((state) => state)

  useEffect(() => {
    setCompanyLabel(labels[0])
  }, [])

  return (
    <>
      {labels.map((experience: string, idx: number) => {
        return (
          <Button
            key={idx}
            as={BUTTON_VIEW.BUTTON}
            btnStyle={
              activeLabel === experience
                ? 'primary'
                : 'inverted'
            }
            className="py-1 px-3"
            onClick={() => {
              setCompanyLabel(experience)
            }}
          >
            {experience}
          </Button>
        )
      })}
    </>
  )
}
