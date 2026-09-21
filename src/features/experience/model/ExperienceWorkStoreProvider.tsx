'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react'
import { createExperienceWorkStore } from '@/src/features/experience/model/experienceWorkStore'
import { useStore } from 'zustand/react'

type ExperienceWorkStore = ReturnType<
  typeof createExperienceWorkStore
>

export const ExperienceWorkContext =
  createContext<null | ExperienceWorkStore>(null)

export const ExperienceWorkContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [data] = useState(() => createExperienceWorkStore())
  if (data !== null) {
    return (
      <ExperienceWorkContext.Provider value={data}>
        {children}
      </ExperienceWorkContext.Provider>
    )
  }
}

export const useExperienceWorkStore = <T,>(
  selector: (store: any) => T,
) => {
  const experienceStoreContext = useContext(
    ExperienceWorkContext,
  )
  if (!experienceStoreContext) {
    throw new Error(
      `useCounterStore must be used within ExperienceStoreProvider`,
    )
  }

  return useStore(experienceStoreContext, selector)
}
