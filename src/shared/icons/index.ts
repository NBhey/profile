import home from './home.svg'
import projects from './projects.svg'
import otherWorkExperience from './otherWorkExperience.svg'
import workExperience from './workExperience.svg'
import contacts from './contacts.svg'
import github from './github.svg'
import whatsapp from './whatsapp.svg'
import telegram from './telegram.svg'
import { ComponentType, SVGProps } from 'react'

export const Icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  home,
  projects,
  otherWorkExperience,
  workExperience,
  contacts,
  telegram,
  whatsapp,
  github,
} as const
