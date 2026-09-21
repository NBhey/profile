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
    <div className="flex gap-1 overflow-x-scroll scrollbar-none">
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
            className="py-1 px-3 rounded-full flex-none "
            onClick={() => {
              setCompanyLabel(experience)
            }}
          >
            {experience}
          </Button>
        )
      })}
    </div>
  )
}
