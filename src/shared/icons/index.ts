import home from './home.svg'
import projects from './projects.svg'
import otherWorkExperience from './otherWorkExperience.svg'
import workExperience from './workExperience.svg'
import contacts from './contacts.svg'
import { ComponentType, SVGProps } from 'react'

export const Icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  home,
  projects,
  otherWorkExperience,
  workExperience,
  contacts,
} as const
