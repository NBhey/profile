import { createStore } from 'zustand/vanilla'

export const createExperienceWorkStore = (
  activeLabel = null,
) => {
  return createStore()((set) => ({
    activeLabel,
    setCompanyLabel: (label: string) =>
      set(() => ({ activeLabel: label })),
  }))
}
